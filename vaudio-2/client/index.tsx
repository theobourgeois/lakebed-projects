import { useAuth, useMutation, useQuery } from "lakebed/client";
import type { ComponentChildren } from "preact";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import {
    BG_MODES,
    BLEND_MODES,
    DEFAULT_GLOBAL_FX,
    DEFAULT_LAYER_FX,
    MAX_LAYERS,
    POINTER_MODES,
    TILE_MODES,
    clamp,
    cleanName,
    decodeScene,
    encodeScene,
    type BlendMode,
    type GlobalFx,
    type LayerFx,
    type MediaKind,
    type Scene,
    type SceneLayer,
    type SceneMeta,
} from "../shared/types";
import {
    WORLD_PRESETS,
    blendIndex,
    mutateGlobalFx,
    randomGlobalFx,
    randomLayerFx,
    resetLayerFxEffects,
} from "../shared/presets";
import {
    createEngine,
    hexToRgb,
    type EngineHandle,
    type FrameState,
    type LayerRenderState,
    type PointerState,
} from "./engine";
import {
    canvasThumb,
    classifyBlob,
    classifyFile,
    defaultLayerName,
    ensureSpectrumCanvas,
    levelFromSpectrum,
    mediaKindLabel,
    paintAudioVisual,
    paintDataBytes,
} from "./media";
import {
    decodeImageBlob,
    deleteImageBlob,
    getImageBlob,
    loadAutosave,
    newId,
    putImageBlob,
    saveAutosave,
} from "./store";

/* ---------------------------------- style --------------------------------- */

const GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  color-scheme: dark;
  --void: #08080a;
  --panel: #101014;
  --panel-2: #15151a;
  --line: rgba(255, 255, 255, 0.12);
  --line-hot: rgba(232, 230, 224, 0.35);
  --acid: #e8e6e0;
  --violet: #8a8690;
  --hot: #a87880;
  --paper: #e8e6e0;
  --mute: #85858f;
  --track: #303038;
}

html, body, #app { margin: 0; height: 100%; background: var(--void); overscroll-behavior: none; }
body { font: 13px/1.45 "DM Mono", ui-monospace, monospace; color: var(--paper); -webkit-font-smoothing: antialiased; }
* { box-sizing: border-box; }
button, input, select { font: inherit; }
button { cursor: pointer; -webkit-tap-highlight-color: transparent; }
::selection { background: var(--acid); color: var(--void); }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: var(--track); border-radius: 0; }
::-webkit-scrollbar-track { background: transparent; }

.knob-range {
  --fill: 50%;
  width: 100%;
  height: 18px;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  cursor: ew-resize;
}
.knob-range::-webkit-slider-runnable-track {
  height: 3px;
  background: linear-gradient(90deg, var(--acid) 0 var(--fill), var(--track) var(--fill) 100%);
}
.knob-range::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 9px;
  height: 17px;
  margin-top: -7px;
  border: 1px solid var(--acid);
  border-radius: 0;
  background: var(--void);
}
.knob-range::-moz-range-track { height: 3px; background: var(--track); }
.knob-range::-moz-range-progress { height: 3px; background: var(--acid); }
.knob-range::-moz-range-thumb {
  width: 8px; height: 16px; border: 1px solid var(--acid); border-radius: 0; background: var(--void);
}

@keyframes rec-blink { 0%, 48% { opacity: 1; } 52%, 100% { opacity: 0.25; } }
.rec-dot { animation: rec-blink 1.1s steps(2, end) infinite; }
@keyframes fade-up { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.pop { animation: fade-up 140ms cubic-bezier(.2,.8,.2,1) both; }
input[type="color"] { padding: 0; border: 1px solid var(--line); border-radius: 0; background: transparent; width: 26px; height: 20px; cursor: pointer; }
input[type="color"]::-webkit-color-swatch-wrapper { padding: 1px; }
input[type="color"]::-webkit-color-swatch { border: 0; border-radius: 0; }
select.fx-res {
  height: 26px; border-radius: 0; border: 1px solid var(--line);
  background: var(--panel); color: var(--mute); padding: 0 6px;
  font-family: "DM Mono", ui-monospace, monospace; font-size: 10px;
  letter-spacing: .06em; text-transform: uppercase; outline: none; cursor: pointer;
}
select.fx-res:hover { border-color: var(--line-hot); color: var(--paper); }
select.fx-res:disabled { opacity: .35; cursor: default; }
select.fx-res option { background: var(--panel); color: var(--paper); }
`;

/* --------------------------- export resolution ---------------------------- */

const EXPORT_RESOLUTIONS = [
    { id: "screen", label: "Screen", height: 0 },
    { id: "720", label: "720p", height: 720 },
    { id: "1080", label: "1080p", height: 1080 },
    { id: "1440", label: "1440p", height: 1440 },
    { id: "2160", label: "4K", height: 2160 },
] as const;

type ExportResolutionId = (typeof EXPORT_RESOLUTIONS)[number]["id"];

const MAX_EXPORT_EDGE = 8192;

function resolveExportSize(
    resolutionId: ExportResolutionId,
    stage: { width: number; height: number },
    /** For "screen" PNG exports — multiply the live stage by this. */
    screenScale = 1,
): { width: number; height: number } {
    const aspect = Math.max(0.05, stage.width / Math.max(1, stage.height));
    let height: number;
    let width: number;
    if (resolutionId === "screen") {
        height = Math.max(2, Math.round(stage.height * screenScale));
        width = Math.max(2, Math.round(stage.width * screenScale));
    } else {
        const preset = EXPORT_RESOLUTIONS.find(
            (item) => item.id === resolutionId,
        );
        height = preset?.height || 1080;
        width = Math.max(2, Math.round(height * aspect));
    }
    const longest = Math.max(width, height);
    if (longest > MAX_EXPORT_EDGE) {
        const scale = MAX_EXPORT_EDGE / longest;
        width = Math.max(2, Math.round(width * scale));
        height = Math.max(2, Math.round(height * scale));
    }
    // Keep even dimensions — friendlier for video encoders.
    return { width: width - (width % 2), height: height - (height % 2) };
}

/* ---------------------------------- icons --------------------------------- */

type IconProps = { class?: string };
const svg = (props: IconProps, children: ComponentChildren) => (
    <svg
        class={props.class ?? "w-[15px] h-[15px]"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
);
const IPlus = (p: IconProps) => svg(p, <path d="M12 5v14M5 12h14" />);
const IDice = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="4" y="4" width="16" height="16" rx="2.5" />
            <circle cx="9" cy="9" r="0.6" fill="currentColor" />
            <circle cx="15" cy="15" r="0.6" fill="currentColor" />
            <circle cx="15" cy="9" r="0.6" fill="currentColor" />
            <circle cx="9" cy="15" r="0.6" fill="currentColor" />
        </>,
    );
const IWand = (p: IconProps) =>
    svg(
        p,
        <path d="M5 19 17 7m2-2-1.5 1.5M17 7l1.5 1.5M9 5.5 9.8 7.3 11.6 8 9.8 8.7 9 10.5 8.2 8.7 6.4 8 8.2 7.3Zm9 7 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6Z" />,
    );
const ISave = (p: IconProps) =>
    svg(p, <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v3h16v-3" />);
const IFolder = (p: IconProps) =>
    svg(
        p,
        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h9A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18Z" />,
    );
const IMic = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
        </>,
    );
const IDownload = (p: IconProps) =>
    svg(p, <path d="M12 4v11m0 0 4.5-4.5M12 15 7.5 10.5M4 19h16" />);
const IExpand = (p: IconProps) =>
    svg(p, <path d="M4 9V4h5M20 9V4h-5M4 15v5h5m11-5v5h-5" />);
const IEye = (p: IconProps) =>
    svg(
        p,
        <>
            <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
            <circle cx="12" cy="12" r="2.6" />
        </>,
    );
const IEyeOff = (p: IconProps) =>
    svg(
        p,
        <>
            <path d="M4 4l16 16M9.9 5.9A9.5 9.5 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.3 4M6 7.5A16 16 0 0 0 2.5 12S6 18.5 12 18.5a9 9 0 0 0 3-.6" />
        </>,
    );
const ITrash = (p: IconProps) =>
    svg(p, <path d="M4.5 6.5h15m-11-2h7m-9.5 2 1 13h10l1-13M10 10v6m4-6v6" />);
const ICopy = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="8" y="8" width="12" height="12" rx="1.5" />
            <path d="M16 5V5.5M16 5a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 5v9A1.5 1.5 0 0 0 5.5 15.5H6" />
        </>,
    );
const IUp = (p: IconProps) => svg(p, <path d="m6 14 6-6 6 6" />);
const IDown = (p: IconProps) => svg(p, <path d="m6 10 6 6 6-6" />);
const IPause = (p: IconProps) => svg(p, <path d="M9 5v14M15 5v14" />);
const IPlay = (p: IconProps) => svg(p, <path d="M7 5v14l12-7Z" />);
const IPanel = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
            <path d="M15.5 4.5v15" />
        </>,
    );
const IMove = (p: IconProps) =>
    svg(
        p,
        <path d="M12 3v18M3 12h18M12 3 9.5 5.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5" />,
    );
const ISpark = (p: IconProps) =>
    svg(
        p,
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" />,
    );

/* --------------------------------- helpers -------------------------------- */

function layerSeed(id: string): number {
    let hash = 0;
    for (let i = 0; i < id.length; i++)
        hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    return (hash % 1000) / 1000;
}

function formatDeg(value: number): string {
    return `${Math.round(value)}°`;
}
function formatX(value: number): string {
    return `${value.toFixed(2)}×`;
}
function pad3(value: number, min = 0, max = 1): string {
    return String(Math.round(((value - min) / (max - min)) * 100)).padStart(
        3,
        "0",
    );
}

type ImageInfo = {
    width: number;
    height: number;
    thumb: string;
    missing: boolean;
    kind: MediaKind;
};

type MediaRuntime = {
    kind: MediaKind;
    objectUrl?: string;
    video?: HTMLVideoElement;
    audio?: HTMLAudioElement;
    canvas?: HTMLCanvasElement;
    analyser?: AnalyserNode;
    sourceNode?: MediaElementAudioSourceNode;
    spectrum?: Uint8Array;
};

function emptyScene(): Scene {
    return { name: "Untitled", layers: [], global: { ...DEFAULT_GLOBAL_FX } };
}

/* ------------------------------ small controls ---------------------------- */

function Slider(props: {
    label: string;
    value: number;
    min?: number;
    max?: number;
    def?: number;
    format?: (value: number) => string;
    onChange: (value: number) => void;
}) {
    const min = props.min ?? 0;
    const max = props.max ?? 1;
    const pct = clamp(((props.value - min) / (max - min)) * 100, 0, 100);
    return (
        <label
            class="block px-3 py-[5px] select-none"
            onDblClick={() =>
                props.def !== undefined && props.onChange(props.def)
            }
            title="Double-click to reset"
        >
            <div class="mb-0.5 flex items-baseline justify-between text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                <span>{props.label}</span>
                <span class="tabular-nums text-[var(--paper)]">
                    {props.format
                        ? props.format(props.value)
                        : pad3(props.value, min, max)}
                </span>
            </div>
            <input
                type="range"
                class="knob-range"
                style={{ "--fill": `${pct}%` }}
                min={min}
                max={max}
                step={0.001}
                value={props.value}
                onInput={(event) =>
                    props.onChange(
                        parseFloat(
                            (event.currentTarget as HTMLInputElement).value,
                        ),
                    )
                }
            />
        </label>
    );
}

function Section(props: {
    title: string;
    accent?: boolean;
    actions?: ComponentChildren;
    children: ComponentChildren;
}) {
    return (
        <section class="border-b border-[var(--line)] pb-2">
            <header class="flex h-8 items-center gap-2 px-3">
                <span
                    class={`text-[9px] font-medium uppercase tracking-[0.14em] ${props.accent ? "text-[var(--acid)]" : "text-[var(--mute)]"}`}
                >
                    {props.title}
                </span>
                <span class="h-px flex-1 bg-[var(--line)]" />
                {props.actions}
            </header>
            {props.children}
        </section>
    );
}

function SegRow(props: {
    label: string;
    options: readonly string[];
    value: number;
    onChange: (index: number) => void;
}) {
    return (
        <div class="px-3 py-[5px]">
            <div class="mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                {props.label}
            </div>
            <div class="flex">
                {props.options.map((option, index) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => props.onChange(index)}
                        class={`h-6 flex-1 border border-r-0 border-[var(--line)] text-[9px] uppercase tracking-wide last:border-r ${
                            Math.round(props.value) === index
                                ? "bg-[var(--acid)] text-[var(--void)]"
                                : "bg-[var(--panel)] text-[var(--mute)] hover:text-[var(--paper)]"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}

function TopButton(props: {
    title: string;
    active?: boolean;
    danger?: boolean;
    disabled?: boolean;
    onClick: () => void;
    children: ComponentChildren;
    label?: string;
}) {
    return (
        <button
            type="button"
            title={props.title}
            disabled={props.disabled}
            onClick={props.onClick}
            class={`flex h-[26px] items-center gap-1.5 border px-2 text-[10px] uppercase tracking-wide transition-colors disabled:opacity-30 ${
                props.active
                    ? "border-[var(--acid)] bg-[var(--acid)]/15 text-[var(--acid)]"
                    : props.danger
                      ? "border-[#c45b6a] bg-[#c45b6a]/10 text-[#b86a74]"
                      : "border-[var(--line)] bg-[var(--panel)] text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"
            }`}
        >
            {props.children}
            {props.label ? (
                <span class="hidden lg:inline">{props.label}</span>
            ) : null}
        </button>
    );
}

/* ----------------------------------- app ---------------------------------- */

export function App() {
    const auth = useAuth();
    const scenesQuery = useQuery<{ ready: boolean; items: SceneMeta[] }>(
        "scenes",
    );
    const saveSceneMutation = useMutation<
        [string, string, string, string],
        { id: string }
    >("saveScene");
    const deleteSceneMutation = useMutation<[string], void>("deleteScene");
    const getSceneMutation = useMutation<
        [string],
        { id: string; name: string; data: string }
    >("getScene");

    const [scene, setScene] = useState<Scene>(emptyScene);
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const [imageInfo, setImageInfo] = useState<Record<string, ImageInfo>>({});
    const [stageMode, setStageMode] = useState<"arrange" | "play">("arrange");
    const [uiHidden, setUiHidden] = useState(false);
    const [frozen, setFrozen] = useState(false);
    const [micActive, setMicActive] = useState(false);
    const [recording, setRecording] = useState(false);
    const [exportRes, setExportRes] = useState<ExportResolutionId>("1080");
    const [fullscreen, setFullscreen] = useState(false);
    const [presetsOpen, setPresetsOpen] = useState(false);
    const [scenesOpen, setScenesOpen] = useState(false);
    const [serverSceneId, setServerSceneId] = useState<string>("");
    const [toast, setToast] = useState("");
    const [dragOver, setDragOver] = useState(false);
    const [engineError, setEngineError] = useState("");

    const stageRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const engineRef = useRef<EngineHandle | null>(null);
    const sceneRef = useRef(scene);
    const imageInfoRef = useRef(imageInfo);
    const stageModeRef = useRef(stageMode);
    const frozenRef = useRef(frozen);
    const timeRef = useRef(Math.random() * 90);
    const audioLevelRef = useRef(0);
    const analyserRef = useRef<AnalyserNode | null>(null);
    const audioContextRef = useRef<AudioContext | null>(null);
    const micStreamRef = useRef<MediaStream | null>(null);
    const spectrumRef = useRef(new Uint8Array(128));
    const recorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);
    const toastTimerRef = useRef(0);
    const lastPointerRef = useRef({ x: 0.5, y: 0.5, at: 0 });
    const pointerRef = useRef<PointerState>({
        x: 0.5,
        y: 0.5,
        velocityX: 0,
        velocityY: 0,
        down: false,
        active: false,
    });
    const dragRef = useRef<{
        layerId: string;
        startX: number;
        startY: number;
        fxX: number;
        fxY: number;
    } | null>(null);
    const stageSizeRef = useRef({ width: 1, height: 1 });
    const qualityRef = useRef(1.5);
    const exportResRef = useRef(exportRes);
    const exportLockRef = useRef<{ width: number; height: number } | null>(
        null,
    );
    const dragRafRef = useRef(0);
    const dragPointRef = useRef({ x: 0, y: 0 });
    const mediaRuntimesRef = useRef(new Map<string, MediaRuntime>());

    sceneRef.current = scene;
    imageInfoRef.current = imageInfo;
    stageModeRef.current = stageMode;
    frozenRef.current = frozen;
    exportResRef.current = exportRes;

    const selected =
        scene.layers.find((layer) => layer.id === selectedId) ?? null;
    const sceneList = scenesQuery?.items ?? [];

    function showToast(message: string) {
        setToast(message);
        window.clearTimeout(toastTimerRef.current);
        toastTimerRef.current = window.setTimeout(() => setToast(""), 2600);
    }

    /* ------------------------------ scene updates ----------------------------- */

    function updateGlobal(patch: Partial<GlobalFx>) {
        setScene((previous) => ({
            ...previous,
            global: { ...previous.global, ...patch },
        }));
    }

    function updateLayerFx(layerId: string, patch: Partial<LayerFx>) {
        setScene((previous) => ({
            ...previous,
            layers: previous.layers.map((layer) =>
                layer.id === layerId
                    ? { ...layer, fx: { ...layer.fx, ...patch } }
                    : layer,
            ),
        }));
    }

    function replaceLayerFx(layerId: string, fx: LayerFx) {
        setScene((previous) => ({
            ...previous,
            layers: previous.layers.map((layer) =>
                layer.id === layerId ? { ...layer, fx } : layer,
            ),
        }));
    }

    function moveLayer(layerId: string, delta: number) {
        setScene((previous) => {
            const index = previous.layers.findIndex(
                (layer) => layer.id === layerId,
            );
            const next = index + delta;
            if (index < 0 || next < 0 || next >= previous.layers.length)
                return previous;
            const layers = previous.layers.slice();
            const [layer] = layers.splice(index, 1);
            layers.splice(next, 0, layer);
            return { ...previous, layers };
        });
    }

    function duplicateLayer(layerId: string) {
        setScene((previous) => {
            if (previous.layers.length >= MAX_LAYERS) return previous;
            const index = previous.layers.findIndex(
                (layer) => layer.id === layerId,
            );
            if (index < 0) return previous;
            const source = previous.layers[index];
            const copy: SceneLayer = {
                id: newId("layer"),
                imageId: source.imageId,
                name: `${source.name} copy`,
                mediaKind: source.mediaKind,
                fx: {
                    ...source.fx,
                    x: source.fx.x + 0.06,
                    y: source.fx.y - 0.06,
                },
            };
            const layers = previous.layers.slice();
            layers.splice(index + 1, 0, copy);
            setSelectedId(copy.id);
            return { ...previous, layers };
        });
    }

    function removeLayer(layerId: string) {
        setScene((previous) => {
            const removed = previous.layers.find(
                (layer) => layer.id === layerId,
            );
            const layers = previous.layers.filter(
                (layer) => layer.id !== layerId,
            );
            if (
                removed &&
                !layers.some((layer) => layer.imageId === removed.imageId)
            ) {
                disposeMediaRuntime(removed.imageId);
                engineRef.current?.removeImage(removed.imageId);
                void deleteImageBlob(removed.imageId).catch(() => undefined);
                setImageInfo((info) => {
                    const next = { ...info };
                    delete next[removed.imageId];
                    return next;
                });
            }
            return { ...previous, layers };
        });
        setSelectedId((current) => (current === layerId ? null : current));
    }

    /* ------------------------------ media imports ----------------------------- */

    function disposeMediaRuntime(imageId: string) {
        const runtime = mediaRuntimesRef.current.get(imageId);
        if (!runtime) return;
        runtime.video?.pause();
        runtime.audio?.pause();
        if (runtime.video) {
            runtime.video.removeAttribute("src");
            runtime.video.load();
        }
        if (runtime.audio) {
            runtime.audio.removeAttribute("src");
            runtime.audio.load();
        }
        try {
            runtime.sourceNode?.disconnect();
        } catch {
            // already disconnected
        }
        try {
            runtime.analyser?.disconnect();
        } catch {
            // already disconnected
        }
        if (runtime.objectUrl) URL.revokeObjectURL(runtime.objectUrl);
        mediaRuntimesRef.current.delete(imageId);
    }

    function disposeAllMediaRuntimes() {
        for (const imageId of [...mediaRuntimesRef.current.keys()]) {
            disposeMediaRuntime(imageId);
        }
    }

    async function ensureMediaAudioContext(): Promise<AudioContext> {
        if (!audioContextRef.current) {
            audioContextRef.current = new AudioContext();
        }
        if (audioContextRef.current.state === "suspended") {
            await audioContextRef.current.resume();
        }
        return audioContextRef.current;
    }

    async function activateMedia(
        imageId: string,
        blob: Blob,
        kind: MediaKind,
        _fileName: string,
    ): Promise<ImageInfo> {
        disposeMediaRuntime(imageId);
        const engine = engineRef.current;

        if (kind === "image") {
            const decoded = await decodeImageBlob(blob);
            engine?.setImage(imageId, decoded.canvas);
            mediaRuntimesRef.current.set(imageId, { kind });
            return {
                width: decoded.width,
                height: decoded.height,
                thumb: decoded.thumb,
                missing: false,
                kind,
            };
        }

        if (kind === "data") {
            const canvas = document.createElement("canvas");
            const buffer = await blob.slice(0, 1024 * 1024).arrayBuffer();
            paintDataBytes(canvas, new Uint8Array(buffer));
            engine?.setImage(imageId, canvas);
            mediaRuntimesRef.current.set(imageId, { kind, canvas });
            return {
                width: canvas.width,
                height: canvas.height,
                thumb: canvasThumb(canvas, canvas.width, canvas.height),
                missing: false,
                kind,
            };
        }

        if (kind === "video") {
            const objectUrl = URL.createObjectURL(blob);
            const video = document.createElement("video");
            video.playsInline = true;
            video.muted = true;
            video.loop = true;
            video.preload = "auto";
            video.setAttribute("playsinline", "");
            video.setAttribute("webkit-playsinline", "");
            video.src = objectUrl;

            await new Promise<void>((resolve, reject) => {
                const onReady = () => {
                    cleanup();
                    resolve();
                };
                const onError = () => {
                    cleanup();
                    reject(new Error("Could not decode that video"));
                };
                const cleanup = () => {
                    video.removeEventListener("loadeddata", onReady);
                    video.removeEventListener("error", onError);
                };
                video.addEventListener("loadeddata", onReady);
                video.addEventListener("error", onError);
                video.load();
            });

            const width = Math.max(1, video.videoWidth);
            const height = Math.max(1, video.videoHeight);
            engine?.setImage(imageId, video);
            mediaRuntimesRef.current.set(imageId, { kind, objectUrl, video });
            void video.play().catch(() => undefined);

            return {
                width,
                height,
                thumb: canvasThumb(video, width, height),
                missing: false,
                kind,
            };
        }

        // audio
        const objectUrl = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.loop = true;
        audio.preload = "auto";
        audio.src = objectUrl;

        const canvas = document.createElement("canvas");
        ensureSpectrumCanvas(canvas);
        paintAudioVisual(canvas, new Uint8Array(128), 0.25, 0);

        const context = await ensureMediaAudioContext();
        const sourceNode = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.72;
        sourceNode.connect(analyser);
        analyser.connect(context.destination);

        engine?.setImage(imageId, canvas);
        mediaRuntimesRef.current.set(imageId, {
            kind,
            objectUrl,
            audio,
            canvas,
            analyser,
            sourceNode,
            spectrum: new Uint8Array(analyser.frequencyBinCount),
        });
        void audio.play().catch(() => undefined);

        return {
            width: canvas.width,
            height: canvas.height,
            thumb: canvasThumb(canvas, canvas.width, canvas.height),
            missing: false,
            kind,
        };
    }

    async function importFiles(files: Iterable<File>) {
        const list = Array.from(files);
        if (!list.length) return;
        let added = 0;
        let importedAudio = false;
        for (const file of list) {
            if (sceneRef.current.layers.length + added >= MAX_LAYERS) {
                showToast(`Layer limit is ${MAX_LAYERS}`);
                break;
            }
            const kind = classifyFile(file);
            try {
                const imageId = newId("img");
                await putImageBlob(imageId, file).catch(() => undefined);
                const info = await activateMedia(imageId, file, kind, file.name);
                setImageInfo((previous) => ({ ...previous, [imageId]: info }));
                const layer: SceneLayer = {
                    id: newId("layer"),
                    imageId,
                    name: cleanName(defaultLayerName(kind, file.name), mediaKindLabel(kind)),
                    mediaKind: kind,
                    fx: {
                        ...DEFAULT_LAYER_FX,
                        x: added * 0.07,
                        y: added * -0.07,
                    },
                };
                setScene((previous) => ({
                    ...previous,
                    layers: [...previous.layers, layer],
                }));
                setSelectedId(layer.id);
                if (kind === "audio") importedAudio = true;
                added++;
            } catch {
                showToast(`Could not import ${mediaKindLabel(kind).toLowerCase()}`);
            }
        }
        if (importedAudio && sceneRef.current.global.audioReact < 0.25) {
            updateGlobal({ audioReact: 0.55 });
        }
    }

    async function hydrateSceneImages(target: Scene) {
        const engine = engineRef.current;
        if (!engine) return;
        const kindById = new Map<string, MediaKind>();
        const nameById = new Map<string, string>();
        for (const layer of target.layers) {
            if (!layer.imageId) continue;
            if (!kindById.has(layer.imageId)) {
                kindById.set(layer.imageId, layer.mediaKind ?? "image");
                nameById.set(layer.imageId, layer.name);
            }
        }

        for (const imageId of [...mediaRuntimesRef.current.keys()]) {
            if (!kindById.has(imageId)) {
                disposeMediaRuntime(imageId);
                engine.removeImage(imageId);
            }
        }

        for (const [imageId, kind] of kindById) {
            if (mediaRuntimesRef.current.has(imageId) && engine.hasImage(imageId)) {
                continue;
            }
            try {
                const blob = await getImageBlob(imageId);
                if (!blob) throw new Error("missing");
                const resolved: MediaKind =
                    kind === "image" ||
                    kind === "video" ||
                    kind === "audio" ||
                    kind === "data"
                        ? kind
                        : classifyBlob(blob, nameById.get(imageId) ?? "");
                const info = await activateMedia(
                    imageId,
                    blob,
                    resolved,
                    nameById.get(imageId) ?? "media",
                );
                setImageInfo((previous) => ({ ...previous, [imageId]: info }));
            } catch {
                setImageInfo((previous) => ({
                    ...previous,
                    [imageId]: {
                        width: 1,
                        height: 1,
                        thumb: "",
                        missing: true,
                        kind,
                    },
                }));
            }
        }
    }

    function syncLiveMediaTextures(engine: EngineHandle, time: number): number {
        let mediaLevel = 0;
        for (const [imageId, runtime] of mediaRuntimesRef.current) {
            if (runtime.kind === "video" && runtime.video) {
                if (runtime.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
                    engine.setImage(imageId, runtime.video);
                }
                continue;
            }
            if (runtime.kind === "audio" && runtime.audio && runtime.canvas && runtime.analyser) {
                const spectrum =
                    runtime.spectrum &&
                    runtime.spectrum.length === runtime.analyser.frequencyBinCount
                        ? runtime.spectrum
                        : new Uint8Array(runtime.analyser.frequencyBinCount);
                runtime.spectrum = spectrum;
                runtime.analyser.getByteFrequencyData(spectrum);
                const level = levelFromSpectrum(spectrum);
                mediaLevel = Math.max(mediaLevel, level);
                paintAudioVisual(runtime.canvas, spectrum, level, time);
                engine.setImage(imageId, runtime.canvas);
            }
        }
        return mediaLevel;
    }

    /* ------------------------------- engine loop ------------------------------ */

    function buildFrame(): FrameState {
        const current = sceneRef.current;
        const info = imageInfoRef.current;
        const { width, height } = stageSizeRef.current;
        const aspect = Math.max(0.05, width / Math.max(1, height));
        const time = timeRef.current;
        const audio = audioLevelRef.current;

        const layers: LayerRenderState[] = current.layers
            .filter((layer) => layer.fx.visible)
            .map((layer) => {
                const fx = layer.fx;
                const seed = layerSeed(layer.id);
                const meta = info[layer.imageId];
                const imageAspect =
                    meta && meta.width > 0
                        ? meta.width / Math.max(1, meta.height)
                        : 1;
                const fitHeight = Math.min(1, aspect / imageAspect);
                const pulse =
                    1 +
                    fx.pulse *
                        (0.16 * Math.sin(time * 2.2 + seed * 20) +
                            audio * current.global.audioReact * 0.5);
                const scale = fx.scale * pulse;
                const driftX =
                    Math.sin(time * 0.57 + seed * 9.2) * fx.drift * 0.3;
                const driftY =
                    Math.cos(time * 0.43 + seed * 5.7) * fx.drift * 0.3;
                return {
                    id: layer.id,
                    imageId: layer.imageId,
                    pos: [fx.x + driftX, fx.y + driftY],
                    ext: [
                        Math.max(1e-4, (fitHeight * imageAspect * scale) / 2),
                        Math.max(1e-4, (fitHeight * scale) / 2),
                    ],
                    rot: (fx.rotation * Math.PI) / 180 + fx.spin * time * 1.5,
                    opacity: fx.opacity,
                    blend: blendIndex(fx.blend),
                    tile: Math.round(fx.tile),
                    warp: fx.warp,
                    swirl: fx.swirl,
                    ripple: fx.ripple,
                    kaleido: fx.kaleido,
                    pixelate: fx.pixelate,
                    bulge: fx.bulge,
                    mirror: fx.mirror,
                    hue: fx.hue,
                    saturation: fx.saturation,
                    contrast: fx.contrast,
                    brightness: fx.brightness,
                    invert: fx.invert,
                    posterize: fx.posterize,
                    chroma: fx.chroma,
                    edges: fx.edges,
                    tint: hexToRgb(fx.tintColor),
                    tintAmount: fx.tintAmount,
                    shimmer: fx.shimmer,
                    seed,
                };
            });

        const g = current.global;
        return {
            time,
            audio,
            pointer: pointerRef.current,
            layers,
            global: {
                bgMode: g.bgMode,
                bgA: hexToRgb(g.bgA),
                bgB: hexToRgb(g.bgB),
                feedback: g.feedback,
                trails: g.trails,
                fbZoom: g.fbZoom,
                fbRotate: g.fbRotate,
                fbHue: g.fbHue,
                warp: g.warp,
                swirl: g.swirl,
                ripple: g.ripple,
                zoom: g.zoom,
                kaleido: g.kaleido,
                mirror: g.mirror,
                chroma: g.chroma,
                hueOrbit: g.hueOrbit,
                saturation: g.saturation,
                contrast: g.contrast,
                solarize: g.solarize,
                grain: g.grain,
                scanlines: g.scanlines,
                vignette: g.vignette,
                strobe: g.strobe,
                audioReact: g.audioReact,
                pointerForce: g.pointerForce,
                pointerSize: g.pointerSize,
                pointerMode: g.pointerMode,
            },
        };
    }

    useEffect(() => {
        const canvas = canvasRef.current;
        const stage = stageRef.current;
        if (!canvas || !stage) return;

        let engine: EngineHandle;
        try {
            engine = createEngine(canvas);
        } catch (cause) {
            setEngineError(
                cause instanceof Error
                    ? cause.message
                    : "WebGL failed to start",
            );
            return;
        }
        engineRef.current = engine;

        const resize = () => {
            const rect = stage.getBoundingClientRect();
            stageSizeRef.current = { width: rect.width, height: rect.height };
            const lock = exportLockRef.current;
            if (lock) {
                engine.resize(lock.width, lock.height);
                engine.setPixelRatioCap(1);
            } else {
                engine.resize(rect.width, rect.height);
            }
        };
        resize();
        const observer = new ResizeObserver(resize);
        observer.observe(stage);

        let raf = 0;
        let last = performance.now();
        let slowStreak = 0;
        let fastStreak = 0;
        const tick = (now: number) => {
            const dt = Math.min(0.1, (now - last) / 1000);
            last = now;

            const analyser = analyserRef.current;
            let target = 0;
            if (analyser) {
                if (spectrumRef.current.length !== analyser.frequencyBinCount) {
                    spectrumRef.current = new Uint8Array(
                        analyser.frequencyBinCount,
                    );
                }
                analyser.getByteFrequencyData(spectrumRef.current);
                const bins = spectrumRef.current;
                let bass = 0;
                let total = 0;
                for (let i = 0; i < bins.length; i++) {
                    total += bins[i];
                    if (i < 10) bass += bins[i];
                }
                target = Math.min(
                    1,
                    ((bass / 10) * 2 + total / bins.length) / 3 / 148,
                );
            }

            if (!frozenRef.current) {
                timeRef.current += dt * sceneRef.current.global.speed;
            }

            const mediaLevel = syncLiveMediaTextures(engine, timeRef.current);
            target = Math.max(target, mediaLevel);
            audioLevelRef.current += (target - audioLevelRef.current) * 0.28;

            // Adaptive quality: drop internal resolution when frames run slow,
            // creep back up when there is headroom. Skip while export-locked.
            if (!exportLockRef.current) {
                if (dt > 0.024) {
                    slowStreak++;
                    fastStreak = 0;
                } else if (dt < 0.014) {
                    fastStreak++;
                    slowStreak = 0;
                } else {
                    slowStreak = 0;
                    fastStreak = 0;
                }
                if (slowStreak > 30 && qualityRef.current > 0.9) {
                    qualityRef.current = Math.max(
                        0.9,
                        qualityRef.current - 0.2,
                    );
                    engine.setPixelRatioCap(qualityRef.current);
                    slowStreak = 0;
                } else if (fastStreak > 600 && qualityRef.current < 1.5) {
                    qualityRef.current = Math.min(
                        1.5,
                        qualityRef.current + 0.2,
                    );
                    engine.setPixelRatioCap(qualityRef.current);
                    fastStreak = 0;
                }
            }

            engine.render(buildFrame());
            raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);

        // Restore the last working scene.
        const saved = loadAutosave();
        if (saved) {
            setScene(saved);
            sceneRef.current = saved;
            void hydrateSceneImages(saved);
        }

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
            disposeAllMediaRuntimes();
            engine.destroy();
            engineRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Autosave (debounced)
    useEffect(() => {
        const timer = window.setTimeout(() => saveAutosave(scene), 350);
        return () => window.clearTimeout(timer);
    }, [scene]);

    useEffect(() => {
        return () => {
            for (const track of micStreamRef.current?.getTracks() ?? [])
                track.stop();
            if (recorderRef.current?.state === "recording")
                recorderRef.current.stop();
            void audioContextRef.current?.close();
        };
    }, []);

    useEffect(() => {
        const sync = () =>
            setFullscreen(document.fullscreenElement === stageRef.current);
        document.addEventListener("fullscreenchange", sync);
        return () => document.removeEventListener("fullscreenchange", sync);
    }, []);

    useEffect(() => {
        document.title = "vaudio-2";
        const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" fill="#08080a"/>
  <path d="M5 8.5 23.5 5.5 26.5 23.5 8 26.5Z" fill="none" stroke="#6e6c68" stroke-width="1.2"/>
  <path d="M4 7.5 24.5 4.5 27.5 24.5 7 27.5Z" fill="none" stroke="#e8e6e0" stroke-width="1.7"/>
  <path d="M10 22.5 21.5 9.5" stroke="#e8e6e0" stroke-width="2.4" stroke-linecap="square"/>
  <path d="M11.2 22.5 22.7 9.5" stroke="#a87880" stroke-width="1.1" stroke-linecap="square" opacity=".85"/>
  <rect x="20.5" y="20.5" width="3.2" height="3.2" fill="#e8e6e0"/>
  <rect x="6.5" y="6.5" width="2.2" height="2.2" fill="#6e6c68"/>
</svg>`;
        const link =
            (document.querySelector(
                'link[rel="icon"]',
            ) as HTMLLinkElement | null) ?? document.createElement("link");
        link.rel = "icon";
        link.type = "image/svg+xml";
        link.href = `data:image/svg+xml,${encodeURIComponent(favicon)}`;
        if (!link.parentNode) document.head.appendChild(link);
    }, []);

    /* -------------------------------- keyboard -------------------------------- */

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            const target = event.target as HTMLElement | null;
            if (
                target &&
                (target.tagName === "INPUT" ||
                    target.tagName === "TEXTAREA" ||
                    target.isContentEditable)
            )
                return;
            if (event.key === "Tab") {
                event.preventDefault();
                setUiHidden((previous) => !previous);
                return;
            }
            const key = event.key.toLowerCase();
            if (key === "v") setStageMode("arrange");
            if (key === "p") setStageMode("play");
            if (key === " ") {
                event.preventDefault();
                setFrozen((previous) => !previous);
            }
            if (
                (event.key === "Delete" || event.key === "Backspace") &&
                selectedId
            ) {
                event.preventDefault();
                removeLayer(selectedId);
            }
            if (selectedId && event.key.startsWith("Arrow")) {
                event.preventDefault();
                const step = event.shiftKey ? 0.05 : 0.01;
                const layer = sceneRef.current.layers.find(
                    (l) => l.id === selectedId,
                );
                if (!layer) return;
                const dx =
                    event.key === "ArrowLeft"
                        ? -step
                        : event.key === "ArrowRight"
                          ? step
                          : 0;
                const dy =
                    event.key === "ArrowDown"
                        ? -step
                        : event.key === "ArrowUp"
                          ? step
                          : 0;
                updateLayerFx(selectedId, {
                    x: clamp(layer.fx.x + dx, -3, 3),
                    y: clamp(layer.fx.y + dy, -3, 3),
                });
            }
        };
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [selectedId]);

    // Paste files
    useEffect(() => {
        const onPaste = (event: ClipboardEvent) => {
            const files: File[] = [];
            for (const item of event.clipboardData?.items ?? []) {
                if (item.kind !== "file") continue;
                const file = item.getAsFile();
                if (file) files.push(file);
            }
            if (files.length) {
                event.preventDefault();
                void importFiles(files);
            }
        };
        window.addEventListener("paste", onPaste);
        return () => window.removeEventListener("paste", onPaste);
    }, []);

    /* ----------------------------- stage interaction --------------------------- */

    function stagePoint(event: PointerEvent): {
        sceneX: number;
        sceneY: number;
        u: number;
        v: number;
    } {
        const stage = stageRef.current;
        const rect = stage
            ? stage.getBoundingClientRect()
            : { left: 0, top: 0, width: 1, height: 1 };
        const u = clamp((event.clientX - rect.left) / rect.width, 0, 1);
        const v = clamp((event.clientY - rect.top) / rect.height, 0, 1);
        const aspect = rect.width / Math.max(1, rect.height);
        return { sceneX: (u - 0.5) * aspect, sceneY: 0.5 - v, u, v };
    }

    function hitLayer(sceneX: number, sceneY: number): SceneLayer | null {
        const current = sceneRef.current;
        const info = imageInfoRef.current;
        const { width, height } = stageSizeRef.current;
        const aspect = Math.max(0.05, width / Math.max(1, height));
        for (let i = current.layers.length - 1; i >= 0; i--) {
            const layer = current.layers[i];
            if (!layer.fx.visible) continue;
            const meta = info[layer.imageId];
            const imageAspect =
                meta && meta.width > 0
                    ? meta.width / Math.max(1, meta.height)
                    : 1;
            const fitHeight = Math.min(1, aspect / imageAspect);
            const extX = (fitHeight * imageAspect * layer.fx.scale) / 2;
            const extY = (fitHeight * layer.fx.scale) / 2;
            const angle = (-layer.fx.rotation * Math.PI) / 180;
            const dx = sceneX - layer.fx.x;
            const dy = sceneY - layer.fx.y;
            const qx = Math.cos(angle) * dx - Math.sin(angle) * dy;
            const qy = Math.sin(angle) * dx + Math.cos(angle) * dy;
            if (Math.abs(qx) <= extX && Math.abs(qy) <= extY) return layer;
        }
        return null;
    }

    function updatePlayPointer(event: PointerEvent, down: boolean) {
        const { u, v } = stagePoint(event);
        const x = u;
        const y = 1 - v;
        const now = performance.now();
        const elapsed = Math.max(8, now - lastPointerRef.current.at);
        pointerRef.current = {
            x,
            y,
            velocityX: (x - lastPointerRef.current.x) * (16 / elapsed),
            velocityY: (y - lastPointerRef.current.y) * (16 / elapsed),
            down,
            active: true,
        };
        lastPointerRef.current = { x, y, at: now };
    }

    function onStagePointerDown(event: PointerEvent) {
        (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
        if (stageModeRef.current === "play") {
            updatePlayPointer(event, true);
            return;
        }
        const { sceneX, sceneY } = stagePoint(event);
        const hit = hitLayer(sceneX, sceneY);
        if (hit) {
            setSelectedId(hit.id);
            dragRef.current = {
                layerId: hit.id,
                startX: sceneX,
                startY: sceneY,
                fxX: hit.fx.x,
                fxY: hit.fx.y,
            };
        } else {
            setSelectedId(null);
            dragRef.current = null;
        }
    }

    function onStagePointerMove(event: PointerEvent) {
        if (stageModeRef.current === "play") {
            updatePlayPointer(event, pointerRef.current.down);
            return;
        }
        if (!dragRef.current) return;
        const { sceneX, sceneY } = stagePoint(event);
        dragPointRef.current = { x: sceneX, y: sceneY };
        // Coalesce pointer events to one state update per frame.
        if (dragRafRef.current) return;
        dragRafRef.current = requestAnimationFrame(() => {
            dragRafRef.current = 0;
            const drag = dragRef.current;
            if (!drag) return;
            updateLayerFx(drag.layerId, {
                x: clamp(
                    drag.fxX + dragPointRef.current.x - drag.startX,
                    -3,
                    3,
                ),
                y: clamp(
                    drag.fxY + dragPointRef.current.y - drag.startY,
                    -3,
                    3,
                ),
            });
        });
    }

    function onStagePointerUp(event: PointerEvent) {
        if (stageModeRef.current === "play") {
            updatePlayPointer(event, false);
            return;
        }
        dragRef.current = null;
    }

    function onStagePointerLeave() {
        pointerRef.current = {
            ...pointerRef.current,
            down: false,
            active: false,
        };
        dragRef.current = null;
    }

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;
        const onWheel = (event: WheelEvent) => {
            if (stageModeRef.current !== "arrange") return;
            const layerId = selectedId;
            if (!layerId) return;
            event.preventDefault();
            const layer = sceneRef.current.layers.find((l) => l.id === layerId);
            if (!layer) return;
            if (event.shiftKey) {
                updateLayerFx(layerId, {
                    rotation: layer.fx.rotation + (event.deltaY > 0 ? 3 : -3),
                });
            } else {
                updateLayerFx(layerId, {
                    scale: clamp(
                        layer.fx.scale * Math.exp(-event.deltaY * 0.0016),
                        0.05,
                        6,
                    ),
                });
            }
        };
        stage.addEventListener("wheel", onWheel, { passive: false });
        return () => stage.removeEventListener("wheel", onWheel);
    }, [selectedId]);

    /* ------------------------------ audio / record ----------------------------- */

    async function toggleMic() {
        if (micActive) {
            for (const track of micStreamRef.current?.getTracks() ?? [])
                track.stop();
            micStreamRef.current = null;
            analyserRef.current = null;
            audioLevelRef.current = 0;
            setMicActive(false);
            return;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            micStreamRef.current = stream;
            if (!audioContextRef.current)
                audioContextRef.current = new AudioContext();
            await audioContextRef.current.resume();
            const analyser = audioContextRef.current.createAnalyser();
            analyser.fftSize = 256;
            analyser.smoothingTimeConstant = 0.68;
            audioContextRef.current
                .createMediaStreamSource(stream)
                .connect(analyser);
            analyserRef.current = analyser;
            setMicActive(true);
            if (sceneRef.current.global.audioReact < 0.3)
                updateGlobal({ audioReact: 0.7 });
            showToast("Mic live — audio drives the shader");
        } catch {
            showToast("Microphone was blocked");
        }
    }

    function restoreLiveCanvasSize() {
        const engine = engineRef.current;
        const stage = stageRef.current;
        if (!engine || !stage) return;
        const rect = stage.getBoundingClientRect();
        stageSizeRef.current = { width: rect.width, height: rect.height };
        engine.resize(rect.width, rect.height);
        engine.setPixelRatioCap(qualityRef.current);
    }

    function applyExportCanvasSize(
        resolutionId: ExportResolutionId,
        screenScale = 1,
    ) {
        const engine = engineRef.current;
        if (!engine) return null;
        const size = resolveExportSize(
            resolutionId,
            stageSizeRef.current,
            screenScale,
        );
        exportLockRef.current = size;
        engine.resize(size.width, size.height);
        engine.setPixelRatioCap(1);
        return size;
    }

    function toggleRecording() {
        const canvas = canvasRef.current;
        const engine = engineRef.current;
        if (!canvas || !engine) return;
        if (recording) {
            recorderRef.current?.stop();
            return;
        }
        const size = applyExportCanvasSize(
            exportResRef.current,
            window.devicePixelRatio || 1,
        );
        if (!size) return;
        // One frame at the locked size before captureStream reads dimensions.
        engine.render(buildFrame());
        const stream = canvas.captureStream(60);
        const mimeType = [
            "video/webm;codecs=vp9",
            "video/webm;codecs=vp8",
            "video/webm",
            "video/mp4",
        ].find((type) => MediaRecorder.isTypeSupported(type));
        try {
            const recorder = new MediaRecorder(stream, {
                mimeType,
                videoBitsPerSecond: 18_000_000,
            });
            chunksRef.current = [];
            recorder.ondataavailable = (event) => {
                if (event.data.size) chunksRef.current.push(event.data);
            };
            recorder.onstop = () => {
                const extension = (recorder.mimeType || "video/webm").includes(
                    "mp4",
                )
                    ? "mp4"
                    : "webm";
                const blob = new Blob(chunksRef.current, {
                    type: recorder.mimeType || "video/webm",
                });
                chunksRef.current = [];
                exportLockRef.current = null;
                restoreLiveCanvasSize();
                downloadBlob(blob, exportFilename(extension));
                recorderRef.current = null;
                setRecording(false);
            };
            recorder.start(250);
            recorderRef.current = recorder;
            setRecording(true);
            showToast(`Recording ${size.width}×${size.height}`);
        } catch {
            exportLockRef.current = null;
            restoreLiveCanvasSize();
            showToast("Recording is not supported here");
        }
    }

    function downloadBlob(blob: Blob, filename: string) {
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = filename;
        anchor.click();
        setTimeout(() => URL.revokeObjectURL(url), 4000);
    }

    function exportFilename(extension: string): string {
        const project =
            cleanName(sceneRef.current.name, "vaudio-2")
                .replace(/[^\w\-]+/g, "-")
                .replace(/-+/g, "-")
                .replace(/^-|-$/g, "") || "vaudio-2";
        const now = new Date();
        const pad = (n: number) => String(n).padStart(2, "0");
        const stamp = [
            now.getFullYear(),
            pad(now.getMonth() + 1),
            pad(now.getDate()),
            "-",
            pad(now.getHours()),
            pad(now.getMinutes()),
            pad(now.getSeconds()),
        ].join("");
        return `${project}-${stamp}.${extension}`;
    }

    function exportPng() {
        const engine = engineRef.current;
        const canvas = canvasRef.current;
        if (!engine || !canvas) return;
        const size = applyExportCanvasSize(exportResRef.current, 3);
        if (!size) return;
        engine.render(buildFrame());
        canvas.toBlob((blob) => {
            exportLockRef.current = null;
            restoreLiveCanvasSize();
            if (blob) {
                downloadBlob(blob, exportFilename("png"));
                showToast(`Exported ${size.width}×${size.height}`);
            } else showToast("Export failed");
        }, "image/png");
    }

    function captureThumb(): string {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.width) return "";
        try {
            // The drawing buffer is not preserved — redraw so the grab isn't blank.
            engineRef.current?.render(buildFrame());
            const scale = 220 / Math.max(canvas.width, canvas.height);
            const thumbCanvas = document.createElement("canvas");
            thumbCanvas.width = Math.max(1, Math.round(canvas.width * scale));
            thumbCanvas.height = Math.max(1, Math.round(canvas.height * scale));
            const context = thumbCanvas.getContext("2d");
            if (!context) return "";
            context.drawImage(
                canvas,
                0,
                0,
                thumbCanvas.width,
                thumbCanvas.height,
            );
            const data = thumbCanvas.toDataURL("image/jpeg", 0.62);
            return data.length < 58_000 ? data : "";
        } catch {
            return "";
        }
    }

    /* ------------------------------ server scenes ------------------------------ */

    async function saveToServer() {
        try {
            const result = await saveSceneMutation(
                serverSceneId,
                scene.name,
                encodeScene(scene),
                captureThumb(),
            );
            setServerSceneId(result.id);
            showToast("Scene saved");
        } catch (cause) {
            showToast(cause instanceof Error ? cause.message : "Save failed");
        }
    }

    async function loadFromServer(id: string) {
        try {
            const result = await getSceneMutation(id);
            const loaded = decodeScene(result.data);
            loaded.name = cleanName(result.name, loaded.name);
            setScene(loaded);
            sceneRef.current = loaded;
            setSelectedId(null);
            setServerSceneId(id);
            setScenesOpen(false);
            engineRef.current?.clearFeedback();
            await hydrateSceneImages(loaded);
            const missing = loaded.layers.some(
                (layer) => !engineRef.current?.hasImage(layer.imageId),
            );
            if (missing)
                showToast(
                    "Some media files are not on this device — showing placeholders",
                );
        } catch {
            showToast("Could not load that scene");
        }
    }

    async function toggleFullscreen() {
        const stage = stageRef.current;
        if (!stage) return;
        try {
            if (document.fullscreenElement) await document.exitFullscreen();
            else await stage.requestFullscreen();
        } catch {
            showToast("Fullscreen is not available");
        }
    }

    /* -------------------------------- selection box ---------------------------- */

    const selectionBox = useMemo(() => {
        if (!selected || stageMode !== "arrange") return null;
        const meta = imageInfo[selected.imageId];
        const { width, height } = stageSizeRef.current;
        if (width < 2) return null;
        const aspect = width / Math.max(1, height);
        const imageAspect =
            meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
        const fitHeight = Math.min(1, aspect / imageAspect);
        const boxWidth = fitHeight * imageAspect * selected.fx.scale * height;
        const boxHeight = fitHeight * selected.fx.scale * height;
        const centerX = (0.5 + selected.fx.x / aspect) * width;
        const centerY = (0.5 - selected.fx.y) * height;
        return {
            boxWidth,
            boxHeight,
            centerX,
            centerY,
            rotation: selected.fx.rotation,
        };
    }, [selected, imageInfo, stageMode, scene]);

    /* ----------------------------------- render -------------------------------- */

    const worldPanel = (
        <>
            <Section title="World presets" accent>
                <div class="grid grid-cols-2 gap-1 px-3 py-1">
                    {WORLD_PRESETS.map((preset) => (
                        <button
                            key={preset.code}
                            type="button"
                            onClick={() => {
                                updateGlobal(preset.global);
                                engineRef.current?.clearFeedback();
                            }}
                            class="flex items-center gap-1.5 border border-[var(--line)] bg-[var(--panel)] px-1.5 py-1 text-left font-mono text-[9px] uppercase tracking-wide text-[var(--mute)] hover:border-[var(--acid)]/60 hover:text-[var(--paper)]"
                        >
                            <span class="text-[var(--acid)]/70">
                                {preset.code}
                            </span>
                            <span class="truncate">{preset.name}</span>
                        </button>
                    ))}
                </div>
            </Section>
            <Section title="Background">
                <SegRow
                    label="Mode"
                    options={BG_MODES}
                    value={scene.global.bgMode}
                    onChange={(index) => updateGlobal({ bgMode: index })}
                />
                <div class="flex items-center gap-3 px-3 py-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    <label class="flex items-center gap-1.5">
                        A
                        <input
                            type="color"
                            value={scene.global.bgA}
                            onInput={(event) =>
                                updateGlobal({
                                    bgA: (
                                        event.currentTarget as HTMLInputElement
                                    ).value,
                                })
                            }
                        />
                    </label>
                    <label class="flex items-center gap-1.5">
                        B
                        <input
                            type="color"
                            value={scene.global.bgB}
                            onInput={(event) =>
                                updateGlobal({
                                    bgB: (
                                        event.currentTarget as HTMLInputElement
                                    ).value,
                                })
                            }
                        />
                    </label>
                </div>
            </Section>
            <Section title="Space">
                <Slider
                    label="Fluid warp"
                    value={scene.global.warp}
                    def={0}
                    onChange={(value) => updateGlobal({ warp: value })}
                />
                <Slider
                    label="Swirl"
                    value={scene.global.swirl}
                    def={0}
                    onChange={(value) => updateGlobal({ swirl: value })}
                />
                <Slider
                    label="Ripples"
                    value={scene.global.ripple}
                    def={0}
                    onChange={(value) => updateGlobal({ ripple: value })}
                />
                <Slider
                    label="Tunnel zoom"
                    value={scene.global.zoom}
                    def={0}
                    onChange={(value) => updateGlobal({ zoom: value })}
                />
                <Slider
                    label="Kaleidoscope"
                    value={scene.global.kaleido}
                    def={0}
                    onChange={(value) => updateGlobal({ kaleido: value })}
                />
                <Slider
                    label="Mirror fold"
                    value={scene.global.mirror}
                    def={0}
                    onChange={(value) => updateGlobal({ mirror: value })}
                />
            </Section>
            <Section title="Feedback">
                <Slider
                    label="Feedback"
                    value={scene.global.feedback}
                    def={0}
                    onChange={(value) => updateGlobal({ feedback: value })}
                />
                <Slider
                    label="Trail length"
                    value={scene.global.trails}
                    def={0.6}
                    onChange={(value) => updateGlobal({ trails: value })}
                />
                <Slider
                    label="Echo zoom"
                    value={scene.global.fbZoom}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) => updateGlobal({ fbZoom: value })}
                />
                <Slider
                    label="Echo spin"
                    value={scene.global.fbRotate}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) => updateGlobal({ fbRotate: value })}
                />
                <Slider
                    label="Echo hue"
                    value={scene.global.fbHue}
                    def={0}
                    onChange={(value) => updateGlobal({ fbHue: value })}
                />
            </Section>
            <Section title="World color">
                <Slider
                    label="Prism split"
                    value={scene.global.chroma}
                    def={0}
                    onChange={(value) => updateGlobal({ chroma: value })}
                />
                <Slider
                    label="Hue orbit"
                    value={scene.global.hueOrbit}
                    def={0}
                    onChange={(value) => updateGlobal({ hueOrbit: value })}
                />
                <Slider
                    label="Saturation"
                    value={scene.global.saturation}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => updateGlobal({ saturation: value })}
                />
                <Slider
                    label="Contrast"
                    value={scene.global.contrast}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => updateGlobal({ contrast: value })}
                />
                <Slider
                    label="Solarize"
                    value={scene.global.solarize}
                    def={0}
                    onChange={(value) => updateGlobal({ solarize: value })}
                />
            </Section>
            <Section title="Signal">
                <Slider
                    label="Grain"
                    value={scene.global.grain}
                    def={0}
                    onChange={(value) => updateGlobal({ grain: value })}
                />
                <Slider
                    label="Scanlines"
                    value={scene.global.scanlines}
                    def={0}
                    onChange={(value) => updateGlobal({ scanlines: value })}
                />
                <Slider
                    label="Vignette"
                    value={scene.global.vignette}
                    def={0.22}
                    onChange={(value) => updateGlobal({ vignette: value })}
                />
                <Slider
                    label="Strobe"
                    value={scene.global.strobe}
                    def={0}
                    onChange={(value) => updateGlobal({ strobe: value })}
                />
            </Section>
            <Section title="Motion & audio">
                <Slider
                    label="Time speed"
                    value={scene.global.speed}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => updateGlobal({ speed: value })}
                />
                <Slider
                    label="Audio react"
                    value={scene.global.audioReact}
                    def={0}
                    onChange={(value) => updateGlobal({ audioReact: value })}
                />
            </Section>
            <Section title="Cursor (play mode)">
                <SegRow
                    label="Field"
                    options={POINTER_MODES}
                    value={scene.global.pointerMode}
                    onChange={(index) => updateGlobal({ pointerMode: index })}
                />
                <Slider
                    label="Force"
                    value={scene.global.pointerForce}
                    def={0.6}
                    onChange={(value) => updateGlobal({ pointerForce: value })}
                />
                <Slider
                    label="Field size"
                    value={scene.global.pointerSize}
                    min={0.02}
                    def={0.35}
                    onChange={(value) => updateGlobal({ pointerSize: value })}
                />
            </Section>
        </>
    );

    const layerPanel = selected ? (
        <>
            <Section
                title={`Layer · ${selected.name}`}
                accent
                actions={
                    <>
                        <button
                            type="button"
                            title="Shuffle layer FX"
                            class="text-[var(--mute)] hover:text-[var(--acid)]"
                            onClick={() =>
                                replaceLayerFx(
                                    selected.id,
                                    randomLayerFx(selected.fx),
                                )
                            }
                        >
                            <IDice class="h-3.5 w-3.5" />
                        </button>
                        <button
                            type="button"
                            title="Reset layer FX"
                            class="font-mono text-[9px] uppercase text-[var(--mute)] hover:text-[var(--paper)]"
                            onClick={() =>
                                replaceLayerFx(
                                    selected.id,
                                    resetLayerFxEffects(selected.fx),
                                )
                            }
                        >
                            reset
                        </button>
                    </>
                }
            >
                <div class="px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    {mediaKindLabel(selected.mediaKind)}
                    {imageInfo[selected.imageId] &&
                        !imageInfo[selected.imageId].missing &&
                        ` · ${imageInfo[selected.imageId].width}×${imageInfo[selected.imageId].height}`}
                    {imageInfo[selected.imageId]?.missing ? " · missing on device" : ""}
                </div>
                <div class="px-3 py-[5px]">
                    <div class="mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                        Blend
                    </div>
                    <select
                        class="h-6 w-full border border-[var(--line)] bg-[var(--panel-2)] px-1 font-mono text-[10px] uppercase text-[var(--paper)] outline-none focus:border-[var(--acid)]"
                        value={selected.fx.blend}
                        onChange={(event) =>
                            updateLayerFx(selected.id, {
                                blend: (
                                    event.currentTarget as HTMLSelectElement
                                ).value as BlendMode,
                            })
                        }
                    >
                        {BLEND_MODES.map((mode) => (
                            <option key={mode} value={mode}>
                                {mode}
                            </option>
                        ))}
                    </select>
                </div>
                <Slider
                    label="Opacity"
                    value={selected.fx.opacity}
                    def={1}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { opacity: value })
                    }
                />
                <SegRow
                    label="Canvas fill"
                    options={TILE_MODES}
                    value={selected.fx.tile}
                    onChange={(index) =>
                        updateLayerFx(selected.id, { tile: index })
                    }
                />
                <Slider
                    label="Scale"
                    value={selected.fx.scale}
                    min={0.05}
                    max={6}
                    def={1}
                    format={formatX}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { scale: value })
                    }
                />
                <Slider
                    label="Rotation"
                    value={selected.fx.rotation}
                    min={-180}
                    max={180}
                    def={0}
                    format={formatDeg}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { rotation: value })
                    }
                />
            </Section>
            <Section title="Distort">
                <Slider
                    label="Fluid warp"
                    value={selected.fx.warp}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { warp: value })
                    }
                />
                <Slider
                    label="Swirl"
                    value={selected.fx.swirl}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { swirl: value })
                    }
                />
                <Slider
                    label="Ripples"
                    value={selected.fx.ripple}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { ripple: value })
                    }
                />
                <Slider
                    label="Kaleidoscope"
                    value={selected.fx.kaleido}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { kaleido: value })
                    }
                />
                <Slider
                    label="Pixelate"
                    value={selected.fx.pixelate}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { pixelate: value })
                    }
                />
                <Slider
                    label="Lens"
                    value={selected.fx.bulge}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { bulge: value })
                    }
                />
                <Slider
                    label="Mirror fold"
                    value={selected.fx.mirror}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { mirror: value })
                    }
                />
            </Section>
            <Section title="Layer color">
                <Slider
                    label="Hue"
                    value={selected.fx.hue}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { hue: value })
                    }
                />
                <Slider
                    label="Saturation"
                    value={selected.fx.saturation}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { saturation: value })
                    }
                />
                <Slider
                    label="Contrast"
                    value={selected.fx.contrast}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { contrast: value })
                    }
                />
                <Slider
                    label="Brightness"
                    value={selected.fx.brightness}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { brightness: value })
                    }
                />
                <Slider
                    label="Invert"
                    value={selected.fx.invert}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { invert: value })
                    }
                />
                <Slider
                    label="Posterize"
                    value={selected.fx.posterize}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { posterize: value })
                    }
                />
                <Slider
                    label="Prism split"
                    value={selected.fx.chroma}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { chroma: value })
                    }
                />
                <Slider
                    label="Neon edges"
                    value={selected.fx.edges}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { edges: value })
                    }
                />
                <div class="flex items-center gap-2 px-3 py-[5px]">
                    <input
                        type="color"
                        value={selected.fx.tintColor}
                        onInput={(event) =>
                            updateLayerFx(selected.id, {
                                tintColor: (
                                    event.currentTarget as HTMLInputElement
                                ).value,
                            })
                        }
                    />
                    <div class="flex-1">
                        <Slider
                            label="Tint"
                            value={selected.fx.tintAmount}
                            def={0}
                            onChange={(value) =>
                                updateLayerFx(selected.id, {
                                    tintAmount: value,
                                })
                            }
                        />
                    </div>
                </div>
            </Section>
            <Section title="Layer motion">
                <Slider
                    label="Spin"
                    value={selected.fx.spin}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { spin: value })
                    }
                />
                <Slider
                    label="Drift"
                    value={selected.fx.drift}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { drift: value })
                    }
                />
                <Slider
                    label="Pulse"
                    value={selected.fx.pulse}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { pulse: value })
                    }
                />
                <Slider
                    label="Shimmer"
                    value={selected.fx.shimmer}
                    def={0}
                    onChange={(value) =>
                        updateLayerFx(selected.id, { shimmer: value })
                    }
                />
            </Section>
        </>
    ) : (
        <></>
    );

    if (engineError) {
        return (
            <div class="grid h-screen place-items-center bg-[var(--void)] p-8 text-center">
                <div>
                    <p class="mb-2 font-mono text-sm text-[#b86a74]">
                        {engineError}
                    </p>
                    <p class="font-mono text-xs text-[var(--mute)]">
                        vaudio-2 needs WebGL to run.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div class="relative flex h-screen w-screen flex-col overflow-hidden bg-[var(--void)] text-[var(--paper)] select-none">
            <style>{GLOBAL_CSS}</style>
            <div
                class="pointer-events-none fixed inset-0 opacity-40"
                style={{
                    background:
                        "radial-gradient(circle at 14% -10%, rgba(232,230,224,.08), transparent 32%), radial-gradient(circle at 92% 20%, rgba(168,120,128,.06), transparent 28%)",
                }}
            />

            {/* Top bar */}
            {!uiHidden && (
                <header class="relative z-10 flex h-11 flex-shrink-0 items-center gap-1.5 border-b border-[var(--line)] bg-[var(--panel)] px-2.5">
                    <span
                        class="mr-1 text-[1.15rem] font-bold leading-none tracking-[-0.08em] text-[var(--acid)]"
                        style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    >
                        vaudio-2
                    </span>
                    <input
                        class="h-[26px] w-36 border border-transparent bg-transparent px-1.5 text-[12px] font-medium text-[var(--paper)] outline-none hover:border-[var(--line)] focus:border-[var(--acid)]/60"
                        value={scene.name}
                        onInput={(event) =>
                            setScene((previous) => ({
                                ...previous,
                                name: (event.currentTarget as HTMLInputElement)
                                    .value,
                            }))
                        }
                        onBlur={(event) =>
                            setScene((previous) => ({
                                ...previous,
                                name: cleanName(
                                    (event.currentTarget as HTMLInputElement)
                                        .value,
                                    "Untitled",
                                ),
                            }))
                        }
                    />
                    <span class="mx-1 h-4 w-px bg-[var(--line)]" />
                    <TopButton
                        title="Arrange layers (V)"
                        active={stageMode === "arrange"}
                        onClick={() => setStageMode("arrange")}
                        label="Arrange"
                    >
                        <IMove />
                    </TopButton>
                    <TopButton
                        title="Play the canvas with your cursor (P)"
                        active={stageMode === "play"}
                        onClick={() => setStageMode("play")}
                        label="Play"
                    >
                        <ISpark />
                    </TopButton>
                    <span class="mx-1 h-4 w-px bg-[var(--line)]" />
                    <TopButton
                        title="Randomize everything"
                        onClick={() => {
                            setScene((previous) => ({
                                ...previous,
                                global: randomGlobalFx(previous.global),
                                layers: previous.layers.map((layer) => ({
                                    ...layer,
                                    fx: randomLayerFx(layer.fx),
                                })),
                            }));
                            engineRef.current?.clearFeedback();
                        }}
                        label="Chaos"
                    >
                        <IDice />
                    </TopButton>
                    <TopButton
                        title="Nudge the world somewhere new"
                        onClick={() =>
                            updateGlobal(mutateGlobalFx(scene.global))
                        }
                        label="Mutate"
                    >
                        <IWand />
                    </TopButton>
                    <TopButton
                        title={
                            frozen
                                ? "Resume time (Space)"
                                : "Freeze time (Space)"
                        }
                        active={frozen}
                        onClick={() => setFrozen((previous) => !previous)}
                    >
                        {frozen ? <IPlay /> : <IPause />}
                    </TopButton>
                    <span class="flex-1" />
                    <TopButton
                        title="Save scene to your library"
                        onClick={() => void saveToServer()}
                        label="Save"
                    >
                        <ISave />
                    </TopButton>
                    <div class="relative">
                        <TopButton
                            title="Your saved scenes"
                            active={scenesOpen}
                            onClick={() =>
                                setScenesOpen((previous) => !previous)
                            }
                            label="Scenes"
                        >
                            <IFolder />
                        </TopButton>
                        {scenesOpen && (
                            <>
                                <div
                                    class="fixed inset-0 z-30"
                                    onClick={() => setScenesOpen(false)}
                                />
                                <div class="pop absolute right-0 top-8 z-40 max-h-[60vh] w-64 overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] p-1.5 shadow-2xl">
                                    {sceneList.length === 0 && (
                                        <p class="p-3 font-mono text-[10px] text-[var(--mute)]">
                                            No saved scenes yet.
                                            {auth.isGuest
                                                ? " (Guest sessions save locally per deploy.)"
                                                : ""}
                                        </p>
                                    )}
                                    {sceneList.map((meta) => (
                                        <div
                                            key={meta.id}
                                            class="group flex items-center gap-2 p-1.5 hover:bg-[var(--line)]"
                                        >
                                            <button
                                                type="button"
                                                class="flex min-w-0 flex-1 items-center gap-2 text-left"
                                                onClick={() =>
                                                    void loadFromServer(meta.id)
                                                }
                                            >
                                                <span class="grid h-9 w-14 flex-shrink-0 place-items-center overflow-hidden border border-[var(--line)] bg-black">
                                                    {meta.thumb ? (
                                                        <img
                                                            src={meta.thumb}
                                                            class="h-full w-full object-cover"
                                                        />
                                                    ) : (
                                                        <span class="font-mono text-[8px] text-[var(--mute)]">
                                                            vaudio-2
                                                        </span>
                                                    )}
                                                </span>
                                                <span class="min-w-0">
                                                    <span class="block truncate text-[11.5px] text-[var(--paper)]">
                                                        {meta.name}
                                                    </span>
                                                    <span class="block font-mono text-[8.5px] text-[var(--mute)]">
                                                        {new Date(
                                                            meta.updatedAt,
                                                        ).toLocaleString()}
                                                    </span>
                                                </span>
                                            </button>
                                            <button
                                                type="button"
                                                title="Delete scene"
                                                class="text-[var(--mute)] opacity-0 hover:text-[#b86a74] group-hover:opacity-100"
                                                onClick={() => {
                                                    void deleteSceneMutation(
                                                        meta.id,
                                                    ).catch(() =>
                                                        showToast(
                                                            "Delete failed",
                                                        ),
                                                    );
                                                    if (
                                                        meta.id ===
                                                        serverSceneId
                                                    )
                                                        setServerSceneId("");
                                                }}
                                            >
                                                <ITrash class="h-3.5 w-3.5" />
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                    <span class="mx-1 h-4 w-px bg-[var(--line)]" />
                    <TopButton
                        title={
                            micActive
                                ? "Stop microphone"
                                : "Audio-react from your microphone"
                        }
                        active={micActive}
                        onClick={() => void toggleMic()}
                    >
                        <IMic />
                    </TopButton>
                    <TopButton
                        title={
                            recording
                                ? "Stop recording"
                                : "Record the canvas to video"
                        }
                        danger={recording}
                        onClick={toggleRecording}
                    >
                        {recording ? (
                            <span class="rec-dot inline-block h-2.5 w-2.5 rounded-full bg-[#c45b6a]" />
                        ) : (
                            <span class="inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-current" />
                        )}
                    </TopButton>
                    <select
                        class="fx-res"
                        title="Export / recording resolution (keeps stage aspect)"
                        value={exportRes}
                        disabled={recording}
                        onChange={(event) => {
                            const value = (event.target as HTMLSelectElement)
                                .value as ExportResolutionId;
                            if (
                                EXPORT_RESOLUTIONS.some(
                                    (item) => item.id === value,
                                )
                            ) {
                                setExportRes(value);
                            }
                        }}
                    >
                        {EXPORT_RESOLUTIONS.map((item) => (
                            <option key={item.id} value={item.id}>
                                {item.label}
                            </option>
                        ))}
                    </select>
                    <TopButton
                        title={`Export PNG at ${EXPORT_RESOLUTIONS.find((item) => item.id === exportRes)?.label ?? "selected"} resolution`}
                        onClick={exportPng}
                    >
                        <IDownload />
                    </TopButton>
                    <TopButton
                        title="Fullscreen"
                        active={fullscreen}
                        onClick={() => void toggleFullscreen()}
                    >
                        <IExpand />
                    </TopButton>
                    <TopButton
                        title="Hide interface (Tab)"
                        onClick={() => setUiHidden(true)}
                    >
                        <IPanel />
                    </TopButton>
                </header>
            )}

            <div class="relative z-10 flex min-h-0 flex-1">
                {/* Layers panel */}
                {!uiHidden && (
                    <aside class="flex w-[212px] flex-shrink-0 flex-col border-r border-[var(--line)] bg-[var(--panel)]">
                        <header class="flex h-8 flex-shrink-0 items-center gap-2 border-b border-[var(--line)] px-3">
                            <span class="text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--mute)]">
                                Layers
                            </span>
                            <span class="font-mono text-[9px] text-[var(--mute)]">
                                {scene.layers.length}/{MAX_LAYERS}
                            </span>
                            <span class="flex-1" />
                            <button
                                type="button"
                                title="Import files"
                                class="text-[var(--mute)] hover:text-[var(--acid)]"
                                onClick={() => fileRef.current?.click()}
                            >
                                <IPlus />
                            </button>
                        </header>
                        <div class="min-h-0 flex-1 overflow-y-auto py-1">
                            {scene.layers.length === 0 && (
                                <button
                                    type="button"
                                    class="mx-3 my-3 block w-[calc(100%-24px)] border border-dashed border-[var(--line)] px-3 py-6 text-center font-mono text-[10px] leading-relaxed text-[var(--mute)] hover:border-[var(--acid)]/50 hover:text-[var(--mute)]"
                                    onClick={() => fileRef.current?.click()}
                                >
                                    Drop, paste, or click to import anything
                                </button>
                            )}
                            {scene.layers
                                .slice()
                                .reverse()
                                .map((layer) => {
                                    const meta = imageInfo[layer.imageId];
                                    const isSelected = layer.id === selectedId;
                                    return (
                                        <div
                                            key={layer.id}
                                            class={`group flex cursor-pointer items-center gap-2 px-2 py-1.5 ${isSelected ? "bg-[var(--acid)]/10" : "hover:bg-[var(--line)]"} ${layer.fx.visible ? "" : "opacity-45"}`}
                                            onClick={() =>
                                                setSelectedId(layer.id)
                                            }
                                        >
                                            <button
                                                type="button"
                                                title={
                                                    layer.fx.visible
                                                        ? "Hide"
                                                        : "Show"
                                                }
                                                class="flex-shrink-0 text-[var(--mute)] hover:text-[var(--paper)]"
                                                onClick={(event) => {
                                                    event.stopPropagation();
                                                    updateLayerFx(layer.id, {
                                                        visible:
                                                            !layer.fx.visible,
                                                    });
                                                }}
                                            >
                                                {layer.fx.visible ? (
                                                    <IEye class="h-3.5 w-3.5" />
                                                ) : (
                                                    <IEyeOff class="h-3.5 w-3.5" />
                                                )}
                                            </button>
                                            <span
                                                class={`grid h-8 w-8 flex-shrink-0 place-items-center overflow-hidden border ${isSelected ? "border-[var(--acid)]/60" : "border-[var(--line)]"} bg-black`}
                                            >
                                                {meta?.thumb ? (
                                                    <img
                                                        src={meta.thumb}
                                                        class="h-full w-full object-cover"
                                                    />
                                                ) : (
                                                    <span class="font-mono text-[8px] text-[#b86a74]">
                                                        {meta?.missing
                                                            ? "?"
                                                            : "…"}
                                                    </span>
                                                )}
                                            </span>
                                            <span class="min-w-0 flex-1 truncate text-[11px] text-[var(--paper)]">
                                                {layer.name}
                                            </span>
                                            {layer.mediaKind !== "image" && (
                                                <span class="flex-shrink-0 font-mono text-[8px] uppercase tracking-wider text-[var(--mute)]">
                                                    {layer.mediaKind === "video"
                                                        ? "vid"
                                                        : layer.mediaKind === "audio"
                                                          ? "aud"
                                                          : "dat"}
                                                </span>
                                            )}
                                            <span class="hidden flex-shrink-0 items-center gap-0.5 group-hover:flex">
                                                <button
                                                    type="button"
                                                    title="Raise"
                                                    class="text-[var(--mute)] hover:text-[var(--paper)]"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        moveLayer(layer.id, 1);
                                                    }}
                                                >
                                                    <IUp class="h-3.5 w-3.5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Lower"
                                                    class="text-[var(--mute)] hover:text-[var(--paper)]"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        moveLayer(layer.id, -1);
                                                    }}
                                                >
                                                    <IDown class="h-3.5 w-3.5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Duplicate"
                                                    class="text-[var(--mute)] hover:text-[var(--paper)]"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        duplicateLayer(
                                                            layer.id,
                                                        );
                                                    }}
                                                >
                                                    <ICopy class="h-3.5 w-3.5" />
                                                </button>
                                                <button
                                                    type="button"
                                                    title="Delete"
                                                    class="text-[var(--mute)] hover:text-[#b86a74]"
                                                    onClick={(event) => {
                                                        event.stopPropagation();
                                                        removeLayer(layer.id);
                                                    }}
                                                >
                                                    <ITrash class="h-3.5 w-3.5" />
                                                </button>
                                            </span>
                                        </div>
                                    );
                                })}
                        </div>
                        <footer class="border-t border-[var(--line)] p-2">
                            <p class="font-mono text-[8.5px] leading-relaxed text-[var(--mute)]">
                                V arrange · P play · Space freeze · Tab hide UI
                                · drag / wheel / ⇧wheel to move, scale, rotate
                            </p>
                        </footer>
                    </aside>
                )}

                {/* Stage */}
                <div
                    ref={stageRef}
                    class={`relative min-w-0 flex-1 overflow-hidden bg-black ${stageMode === "play" ? "cursor-crosshair" : "cursor-default"}`}
                    onPointerDown={onStagePointerDown}
                    onPointerMove={onStagePointerMove}
                    onPointerUp={onStagePointerUp}
                    onPointerLeave={onStagePointerLeave}
                    onDragOver={(event) => {
                        event.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(event) => {
                        event.preventDefault();
                        setDragOver(false);
                        if (event.dataTransfer?.files.length)
                            void importFiles(event.dataTransfer.files);
                    }}
                >
                    <canvas ref={canvasRef} class="block h-full w-full" />
                    {selectionBox && (
                        <div
                            class="pointer-events-none absolute border border-[var(--acid)]/70"
                            style={{
                                left: `${selectionBox.centerX - selectionBox.boxWidth / 2}px`,
                                top: `${selectionBox.centerY - selectionBox.boxHeight / 2}px`,
                                width: `${selectionBox.boxWidth}px`,
                                height: `${selectionBox.boxHeight}px`,
                                transform: `rotate(${selectionBox.rotation}deg)`,
                                boxShadow: "0 0 0 1px rgba(0,0,0,.6)",
                            }}
                        />
                    )}
                    {scene.layers.length === 0 && (
                        <div class="pointer-events-none absolute inset-0 grid place-items-center">
                            <p class="border border-dashed border-[var(--line-hot)] bg-black/40 px-6 py-4 text-center font-mono text-[11px] leading-relaxed text-[var(--mute)]">
                                Drop images, video, audio, or any file
                            </p>
                        </div>
                    )}
                    {dragOver && (
                        <div class="pointer-events-none absolute inset-0 z-20 grid place-items-center bg-black/60">
                            <p class="border border-dashed border-[var(--acid)] px-8 py-5 font-mono text-[11px] uppercase tracking-widest text-[var(--acid)]">
                                Release to add layers
                            </p>
                        </div>
                    )}
                    {stageMode === "play" && !uiHidden && (
                        <div class="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 border border-[var(--line)] bg-black/60 px-3 py-1 font-mono text-[9px] uppercase tracking-widest text-[var(--mute)]">
                            Play mode — drag the canvas · field:{" "}
                            {
                                POINTER_MODES[
                                    Math.round(scene.global.pointerMode)
                                ]
                            }
                        </div>
                    )}
                    {recording && (
                        <div class="pointer-events-none absolute left-3 top-3 flex items-center gap-2 border border-[#c45b6a]/50 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#b86a74]">
                            <span class="rec-dot inline-block h-2 w-2 rounded-full bg-[#c45b6a]" />{" "}
                            Rec
                        </div>
                    )}
                    {uiHidden && (
                        <button
                            type="button"
                            class="absolute bottom-3 right-3 border border-[var(--line)] bg-black/60 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[var(--mute)] hover:text-[var(--paper)]"
                            onClick={() => setUiHidden(false)}
                        >
                            Show UI (Tab)
                        </button>
                    )}
                </div>

                {/* Controls panel */}
                {!uiHidden && (
                    <aside class="w-[264px] flex-shrink-0 overflow-y-auto border-l border-[var(--line)] bg-[var(--panel)]">
                        {layerPanel}
                        {worldPanel}
                        <div class="p-3 font-mono text-[8.5px] leading-relaxed text-[var(--mute)]">
                            Double-click any slider to reset it. Feedback +
                            tunnel zoom + a kaleidoscope is a good way to lose
                            an afternoon.
                        </div>
                    </aside>
                )}
            </div>

            {toast && (
                <div class="pop pointer-events-none fixed bottom-5 left-1/2 z-50 -translate-x-1/2 border border-[var(--line)] bg-[var(--panel-2)] px-4 py-2 font-mono text-[10.5px] text-[var(--paper)] shadow-2xl">
                    {toast}
                </div>
            )}

            <input
                ref={fileRef}
                type="file"
                accept="*/*"
                multiple
                class="hidden"
                onChange={(event) => {
                    const input = event.currentTarget as HTMLInputElement;
                    if (input.files?.length) void importFiles(input.files);
                    input.value = "";
                }}
            />
        </div>
    );
}
