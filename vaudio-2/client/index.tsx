import { useAuth, useMutation, useQuery } from "lakebed/client";
import { useEffect, useMemo, useRef, useState } from "preact/hooks";
import {
    DEFAULT_GLOBAL_FX,
    MAX_LAYERS,
    POINTER_MODES,
    clamp,
    cleanName,
    decodeScene,
    encodeScene,
    type AudioVisualId,
    type GlobalFx,
    type LayerFx,
    type Scene,
    type SceneLayer,
    type SceneMeta,
} from "../shared/types";
import {
    loadSettings,
    previewQualityCap,
    saveSettings,
    type AppSettings,
} from "./appSettings";
import { LayerPanel } from "./components/LayerPanel";
import { LayersSidebar } from "./components/LayersSidebar";
import { HelpModal } from "./components/HelpModal";
import { SettingsModal } from "./components/SettingsModal";
import { TopBar, type StageMode } from "./components/TopBar";
import { WorldPanel } from "./components/WorldPanel";
import {
    createEngine,
    type EngineHandle,
    type FrameState,
    type PointerState,
} from "./engine";
import {
    buildFrameState,
    hitLayer,
    selectionBoxFor,
    type StageSize,
} from "./frame";
import { useMediaLibrary } from "./hooks/useMediaLibrary";
import { useMic } from "./hooks/useMic";
import { usePlayMode } from "./hooks/usePlayMode";
import { useRecorder } from "./hooks/useRecorder";
import { useSceneHistory } from "./hooks/useSceneHistory";
import { useToast } from "./hooks/useToast";
import {
    createChaosTheme,
    mutateGlobalFx,
    randomGlobalFx,
    randomLayerFx,
    resetLayerFxEffects,
} from "./presets";
import { loadAutosave, newId, saveAutosave } from "./store";
import { GLOBAL_CSS } from "./theme";

function emptyScene(): Scene {
    return { name: "Untitled", layers: [], global: { ...DEFAULT_GLOBAL_FX } };
}

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
    const [stageMode, setStageMode] = useState<StageMode>("arrange");
    const [uiHidden, setUiHidden] = useState(false);
    const [frozen, setFrozen] = useState(false);
    const [fullscreen, setFullscreen] = useState(false);
    const [scenesOpen, setScenesOpen] = useState(false);
    const [helpOpen, setHelpOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [settings, setSettings] = useState<AppSettings>(() => loadSettings());
    const [serverSceneId, setServerSceneId] = useState<string>("");
    const [dragOver, setDragOver] = useState(false);
    const [engineError, setEngineError] = useState("");

    const stageRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const fileRef = useRef<HTMLInputElement>(null);
    const engineRef = useRef<EngineHandle | null>(null);
    const sceneRef = useRef(scene);
    const stageModeRef = useRef(stageMode);
    const frozenRef = useRef(frozen);
    const timeRef = useRef(Math.random() * 90);
    const audioLevelRef = useRef(0);
    const spectrumRef = useRef(new Uint8Array(128));
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
    const stageSizeRef = useRef<StageSize>({ width: 1, height: 1 });
    const qualityRef = useRef(previewQualityCap(settings.previewQuality));
    const dragRafRef = useRef(0);
    const dragPointRef = useRef({ x: 0, y: 0 });
    const helpOpenRef = useRef(false);
    const settingsOpenRef = useRef(false);
    const settingsRef = useRef(settings);
    const recordingMicRef = useRef(false);
    const playGestureRef = useRef<{
        startU: number;
        startV: number;
        lastU: number;
        lastV: number;
        path: number;
        at: number;
        shift: boolean;
    } | null>(null);
    const lastTapAtRef = useRef(0);

    sceneRef.current = scene;
    stageModeRef.current = stageMode;
    frozenRef.current = frozen;
    helpOpenRef.current = helpOpen;
    settingsOpenRef.current = settingsOpen;
    settingsRef.current = settings;

    const { toast, showToast } = useToast();

    const media = useMediaLibrary({
        engineRef,
        sceneRef,
        setScene,
        setSelectedId,
        showToast,
        onAudioImported: () => updateGlobal({ audioReact: 0.55 }),
    });

    const mic = useMic({
        audioContextRef: media.audioContextRef,
        sceneRef,
        audioLevelRef,
        updateGlobal,
        showToast,
        recordingMicRef,
    });

    const playMode = usePlayMode({
        sceneRef,
        setScene,
        updateGlobal,
        updateLayerFx,
        replaceLayerFx,
        setSelectedId,
        setStageMode,
        engineRef,
        stageSizeRef,
        imageInfoRef: media.imageInfoRef,
        showToast,
        onChaos: chaosScene,
        onMutate: () => updateGlobal(mutateGlobalFx(sceneRef.current.global)),
    });

    const recorder = useRecorder({
        canvasRef,
        engineRef,
        stageRef,
        stageSizeRef,
        qualityRef,
        sceneRef,
        settingsRef,
        micStreamRef: mic.micStreamRef,
        ensureMic: mic.ensureMic,
        recordingMicRef,
        buildFrame,
        showToast,
    });

    const history = useSceneHistory({
        scene,
        sceneRef,
        restoreScene,
        showToast,
    });

    const selected =
        scene.layers.find((layer) => layer.id === selectedId) ?? null;
    const sceneList = scenesQuery?.items ?? [];

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

    function updateLayerVisual(layerId: string, visual: AudioVisualId) {
        setScene((previous) => ({
            ...previous,
            layers: previous.layers.map((layer) =>
                layer.id === layerId ? { ...layer, visual } : layer,
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

    /** Doc order is bottom-first; `from`/`to` are indices in that array. */
    function reorderLayer(fromIndex: number, toIndex: number) {
        setScene((previous) => {
            if (
                fromIndex === toIndex ||
                fromIndex < 0 ||
                toIndex < 0 ||
                fromIndex >= previous.layers.length ||
                toIndex >= previous.layers.length
            ) {
                return previous;
            }
            const layers = previous.layers.slice();
            const [layer] = layers.splice(fromIndex, 1);
            layers.splice(toIndex, 0, layer);
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
                visual: source.visual,
                deviceId: source.deviceId,
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
                media.forgetImage(removed.imageId);
            }
            return { ...previous, layers };
        });
        setSelectedId((current) => (current === layerId ? null : current));
    }

    /** Apply a restored scene (undo/redo or server load). */
    function restoreScene(restored: Scene): Promise<void> {
        setScene(restored);
        sceneRef.current = restored;
        setSelectedId((current) =>
            restored.layers.some((layer) => layer.id === current)
                ? current
                : null,
        );
        engineRef.current?.clearFeedback();
        return media.hydrateSceneImages(restored);
    }

    function chaosScene() {
        const theme = createChaosTheme();
        setScene((previous) => ({
            ...previous,
            global: randomGlobalFx(previous.global, theme),
            layers: previous.layers.map((layer, index) => ({
                ...layer,
                fx: randomLayerFx(layer.fx, theme, index),
            })),
        }));
        engineRef.current?.clearFeedback();
        showToast(`Chaos — ${theme.archetype.name}`);
    }

    /** Full defaults for world FX and every layer's effects (keeps layout). */
    function resetAllSettings() {
        setScene((previous) => ({
            ...previous,
            global: { ...DEFAULT_GLOBAL_FX },
            layers: previous.layers.map((layer) => ({
                ...layer,
                fx: resetLayerFxEffects(layer.fx),
            })),
        }));
        engineRef.current?.clearFeedback();
        showToast("Reset all settings");
    }

    function updateSettings(patch: Partial<AppSettings>) {
        setSettings((previous) => {
            const next = { ...previous, ...patch };
            saveSettings(next);
            return next;
        });
    }

    /* ------------------------------- engine loop ------------------------------ */

    function buildFrame(): FrameState {
        const frame = buildFrameState({
            scene: sceneRef.current,
            info: media.imageInfoRef.current,
            stageSize: stageSizeRef.current,
            time: timeRef.current,
            audio: audioLevelRef.current,
            pointer: pointerRef.current,
            kick: playMode.kickRef.current,
        });
        if (settingsRef.current.flashSafeMode) frame.global.strobe = 0;
        return frame;
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
        engine.setPixelRatioCap(qualityRef.current);

        const resize = () => {
            const rect = stage.getBoundingClientRect();
            stageSizeRef.current = { width: rect.width, height: rect.height };
            const lock = recorder.exportLockRef.current;
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

            const analyser = mic.analyserRef.current;
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

            const mediaLevel = media.syncLiveMediaTextures(
                engine,
                timeRef.current,
            );
            target = Math.max(target, mediaLevel);
            audioLevelRef.current += (target - audioLevelRef.current) * 0.28;

            // Percussive play-mode kicks fade out on their own.
            const kick = playMode.kickRef.current;
            const kickDecay = Math.exp(-dt * 4.5);
            kick.zoom *= kickDecay;
            kick.strobe *= kickDecay;
            kick.chroma *= kickDecay;
            kick.ripple *= kickDecay;
            kick.swirl *= kickDecay;

            // Adaptive quality: drop internal resolution when frames run slow,
            // creep back up when there is headroom. Skip while export-locked.
            if (
                !recorder.exportLockRef.current &&
                settingsRef.current.previewQuality === "auto"
            ) {
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
            void media.hydrateSceneImages(saved);
        }

        return () => {
            cancelAnimationFrame(raf);
            observer.disconnect();
            media.disposeAllMediaRuntimes();
            engine.destroy();
            engineRef.current = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const cap = previewQualityCap(settings.previewQuality);
        qualityRef.current = cap;
        if (!recorder.exportLockRef.current)
            engineRef.current?.setPixelRatioCap(cap);
    }, [settings.previewQuality]);

    // Autosave (debounced)
    useEffect(() => {
        const timer = window.setTimeout(() => saveAutosave(scene), 350);
        return () => window.clearTimeout(timer);
    }, [scene]);

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

            const command = event.metaKey || event.ctrlKey;
            if (command) {
                const shortcut = event.key.toLowerCase();
                if (shortcut === "z") {
                    event.preventDefault();
                    if (event.shiftKey) history.redoScene();
                    else history.undoScene();
                } else if (shortcut === "y") {
                    event.preventDefault();
                    history.redoScene();
                }
                return;
            }

            if (event.key === "Tab") {
                event.preventDefault();
                setUiHidden((previous) => !previous);
                return;
            }
            if (settingsOpenRef.current) {
                if (event.key === "Escape") {
                    event.preventDefault();
                    setSettingsOpen(false);
                }
                return;
            }
            if (helpOpenRef.current) {
                if (event.key === "Escape" || event.key === "?") {
                    event.preventDefault();
                    setHelpOpen(false);
                }
                return;
            }
            if (event.key === "?") {
                event.preventDefault();
                setHelpOpen(true);
                return;
            }
            if (event.key === " ") {
                event.preventDefault();
                setFrozen((previous) => !previous);
                return;
            }
            if (event.key === "Enter") {
                event.preventDefault();
                void recorder.toggleRecording();
                return;
            }
            if (event.key === "Backspace" && event.shiftKey) {
                event.preventDefault();
                if (!event.repeat) resetAllSettings();
                return;
            }

            if (stageModeRef.current === "play") {
                playMode.handlePlayKey(event);
                return;
            }

            const key = event.key.toLowerCase();
            if (
                key === "p" &&
                !event.metaKey &&
                !event.ctrlKey &&
                !event.altKey
            ) {
                event.preventDefault();
                setStageMode("play");
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
                void media.importFiles(files);
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

    function hitLayerAt(sceneX: number, sceneY: number): SceneLayer | null {
        return hitLayer(
            sceneRef.current,
            media.imageInfoRef.current,
            stageSizeRef.current,
            sceneX,
            sceneY,
        );
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
            if (event.button === 2) {
                const { sceneX, sceneY } = stagePoint(event);
                playMode.soothePlay(sceneX, sceneY);
                playMode.addKick({ ripple: 0.08 });
                return;
            }
            updatePlayPointer(event, true);
            const { u, v } = stagePoint(event);
            playGestureRef.current = {
                startU: u,
                startV: v,
                lastU: u,
                lastV: v,
                path: 0,
                at: performance.now(),
                shift: event.shiftKey,
            };
            return;
        }
        const { sceneX, sceneY } = stagePoint(event);
        const hit = hitLayerAt(sceneX, sceneY);
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
            const gesture = playGestureRef.current;
            if (gesture) {
                const { u, v } = stagePoint(event);
                gesture.path += Math.hypot(
                    u - gesture.lastU,
                    v - gesture.lastV,
                );
                gesture.lastU = u;
                gesture.lastV = v;
            }
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
            const gesture = playGestureRef.current;
            playGestureRef.current = null;
            if (!gesture || event.button === 2) return;
            const now = performance.now();
            const { u, v } = stagePoint(event);
            if (now - gesture.at < 300 && gesture.path < 0.02) {
                if (now - lastTapAtRef.current < 360) {
                    lastTapAtRef.current = 0;
                    playMode.stepKaleido();
                } else {
                    lastTapAtRef.current = now;
                    playMode.stampTap(u, v, gesture.shift || event.shiftKey);
                }
            } else if (gesture.path > 0.03) {
                playMode.throwEcho(gesture, u, v);
            }
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
        playGestureRef.current = null;
    }

    useEffect(() => {
        const stage = stageRef.current;
        if (!stage) return;
        const onWheel = (event: WheelEvent) => {
            if (stageModeRef.current === "play") {
                event.preventDefault();
                const delta = event.deltaY || event.deltaX;
                if (event.shiftKey)
                    playMode.stepGlobal("saturation", -delta * 0.0012);
                else playMode.stepGlobal("hueOrbit", -delta * 0.0006);
                return;
            }
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
                        layer.fx.scale * Math.exp(-event.deltaY * 0.0045),
                        0.05,
                        6,
                    ),
                });
            }
        };
        stage.addEventListener("wheel", onWheel, { passive: false });
        return () => stage.removeEventListener("wheel", onWheel);
    }, [selectedId]);

    /* ------------------------------ server scenes ------------------------------ */

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
            restoreScene(loaded);
            setSelectedId(null);
            setServerSceneId(id);
            setScenesOpen(false);
            await media.hydrateSceneImages(loaded);
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

    function newScene() {
        const blank = emptyScene();
        restoreScene(blank);
        setSelectedId(null);
        setServerSceneId("");
        setScenesOpen(false);
        setStageMode("arrange");
        showToast("New scene");
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
        return selectionBoxFor(
            selected,
            media.imageInfo[selected.imageId],
            stageSizeRef.current,
        );
    }, [selected, media.imageInfo, stageMode, scene]);

    /* ----------------------------------- render -------------------------------- */

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

            {!uiHidden && (
                <TopBar
                    sceneName={scene.name}
                    onRename={(name) =>
                        setScene((previous) => ({ ...previous, name }))
                    }
                    onRenameCommit={(name) =>
                        setScene((previous) => ({
                            ...previous,
                            name: cleanName(name, "Untitled"),
                        }))
                    }
                    stageMode={stageMode}
                    onStageMode={setStageMode}
                    frozen={frozen}
                    onToggleFrozen={() => setFrozen((previous) => !previous)}
                    onChaos={chaosScene}
                    onMutate={() => updateGlobal(mutateGlobalFx(scene.global))}
                    onSave={() => void saveToServer()}
                    scenesOpen={scenesOpen}
                    onToggleScenes={() =>
                        setScenesOpen((previous) => !previous)
                    }
                    onCloseScenes={() => setScenesOpen(false)}
                    scenes={sceneList}
                    isGuest={auth.isGuest}
                    onNewScene={newScene}
                    onLoadScene={(id) => void loadFromServer(id)}
                    onDeleteScene={(id) => {
                        void deleteSceneMutation(id).catch(() =>
                            showToast("Delete failed"),
                        );
                        if (id === serverSceneId) setServerSceneId("");
                    }}
                    recording={recorder.recording}
                    recordMicAudio={settings.recordMicAudio}
                    onToggleRecording={() => void recorder.toggleRecording()}
                    exportFormat={settings.exportFormat}
                    exportQuality={settings.exportQuality}
                    onExportFormat={(exportFormat) =>
                        updateSettings({ exportFormat })
                    }
                    onExportQuality={(exportQuality) =>
                        updateSettings({ exportQuality })
                    }
                    onExportPng={recorder.exportPng}
                    settingsOpen={settingsOpen}
                    onToggleSettings={() => {
                        setHelpOpen(false);
                        setSettingsOpen((previous) => !previous);
                    }}
                    helpOpen={helpOpen}
                    onToggleHelp={() => {
                        setSettingsOpen(false);
                        setHelpOpen((previous) => !previous);
                    }}
                    fullscreen={fullscreen}
                    onToggleFullscreen={() => void toggleFullscreen()}
                    onHideUi={() => setUiHidden(true)}
                />
            )}

            <div class="relative z-0 flex min-h-0 flex-1">
                {!uiHidden && (
                    <LayersSidebar
                        layers={scene.layers}
                        imageInfo={media.imageInfo}
                        selectedId={selectedId}
                        onSelect={setSelectedId}
                        onToggleVisible={(layer) =>
                            updateLayerFx(layer.id, {
                                visible: !layer.fx.visible,
                            })
                        }
                        onReorder={reorderLayer}
                        onDuplicate={duplicateLayer}
                        onRemove={removeLayer}
                        onImport={() => fileRef.current?.click()}
                        onAddCamera={(deviceId, label) =>
                            void media.addLiveLayer("camera", deviceId, label)
                        }
                        onAddMic={(deviceId, label) =>
                            void media.addLiveLayer("mic", deviceId, label)
                        }
                    />
                )}

                {/* Stage */}
                <div
                    ref={stageRef}
                    class={`relative min-w-0 flex-1 overflow-hidden bg-black ${stageMode === "play" ? "cursor-crosshair" : "cursor-default"}`}
                    onPointerDown={onStagePointerDown}
                    onPointerMove={onStagePointerMove}
                    onPointerUp={onStagePointerUp}
                    onPointerLeave={onStagePointerLeave}
                    onContextMenu={(event) => {
                        if (stageModeRef.current === "play")
                            event.preventDefault();
                    }}
                    onDragOver={(event) => {
                        event.preventDefault();
                        setDragOver(true);
                    }}
                    onDragLeave={() => setDragOver(false)}
                    onDrop={(event) => {
                        event.preventDefault();
                        setDragOver(false);
                        if (event.dataTransfer?.files.length)
                            void media.importFiles(event.dataTransfer.files);
                    }}
                >
                    <canvas
                        ref={canvasRef}
                        class="block h-full w-full object-contain"
                    />
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
                                <br />— or add your camera / mic from the + menu
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

                    {settings.showPreviewHud && recorder.recording && (
                        <div class="pointer-events-none absolute left-3 top-3 flex items-center gap-2 border border-[#c45b6a]/50 bg-black/60 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-[#b86a74]">
                            <span class="rec-dot inline-block h-2 w-2 rounded-full bg-[#c45b6a]" />{" "}
                            Rec
                            {recorder.recordingWithMic ? " · mic" : ""}
                        </div>
                    )}
                    {settings.showPreviewHud && uiHidden && (
                        <button
                            type="button"
                            class="absolute bottom-3 right-3 border border-[var(--line)] bg-black/60 px-2.5 py-1.5 font-mono text-[9px] uppercase tracking-widest text-[var(--mute)] hover:text-[var(--paper)]"
                            onClick={() => setUiHidden(false)}
                        >
                            Show UI (Tab)
                        </button>
                    )}
                </div>

                {!uiHidden && (
                    <aside class="w-[264px] flex-shrink-0 overflow-y-auto border-l border-[var(--line)] bg-[var(--panel)]">
                        {selected && (
                            <LayerPanel
                                layer={selected}
                                info={media.imageInfo[selected.imageId]}
                                onPatch={(patch) =>
                                    updateLayerFx(selected.id, patch)
                                }
                                onReplaceFx={(fx) =>
                                    replaceLayerFx(selected.id, fx)
                                }
                                onSetVisual={(visual) =>
                                    updateLayerVisual(selected.id, visual)
                                }
                            />
                        )}
                        <WorldPanel
                            global={scene.global}
                            onPatch={updateGlobal}
                            onPreset={(preset) => {
                                updateGlobal(preset.global);
                                engineRef.current?.clearFeedback();
                            }}
                        />
                    </aside>
                )}
            </div>

            {helpOpen && <HelpModal onClose={() => setHelpOpen(false)} />}
            {settingsOpen && (
                <SettingsModal
                    settings={settings}
                    recording={recorder.recording}
                    onChange={updateSettings}
                    onClose={() => setSettingsOpen(false)}
                />
            )}

            {settings.showPreviewHud && toast && (
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
                    if (input.files?.length)
                        void media.importFiles(input.files);
                    input.value = "";
                }}
            />
        </div>
    );
}
