import { useEffect, useRef } from "preact/hooks";
import {
    AUDIO_VISUAL_IDS,
    BLEND_MODES,
    DEFAULT_MOTION,
    GENERATOR_IDS,
    TILE_MODES,
    type AudioVisualId,
    type BlendMode,
    type CameraModeId,
    type GeneratorId,
    type GeneratorSettings,
    type LayerFx,
    type MotionSettings,
    type SceneLayer,
} from "../../shared/types";
import type { ImageInfo } from "../frame";
import { IDice } from "../icons";
import {
    AUDIO_VISUAL_LABELS,
    randomAudioVisual,
} from "../media";
import {
    IconButton,
    Section,
    Segmented,
    Select,
    Slider,
    formatDeg,
    formatX,
} from "../ui";

const BLEND_OPTIONS = BLEND_MODES.map((mode) => ({
    value: mode,
    label: mode.replace(/-/g, " "),
}));

const VISUAL_OPTIONS = AUDIO_VISUAL_IDS.map((id) => ({
    value: id,
    label: AUDIO_VISUAL_LABELS[id],
}));
const GENERATOR_OPTIONS = GENERATOR_IDS.map((id) => ({
    value: id,
    label: id[0].toUpperCase() + id.slice(1),
}));

type CameraModeOption = "live" | CameraModeId;

const CAMERA_MODE_OPTIONS: { value: CameraModeOption; label: string }[] = [
    { value: "live", label: "Live" },
    { value: "difference", label: "Motion" },
    { value: "silhouette", label: "Silhouette" },
    { value: "edges", label: "Edges" },
    { value: "slit", label: "Time ribbons" },
    { value: "echo", label: "Echo wall" },
    { value: "smear", label: "Spectral trails" },
    { value: "freeze", label: "Shatter hold" },
];

function cameraSliderLabels(mode: CameraModeId): {
    threshold: string;
    gain: string;
    decay: string;
} {
    switch (mode) {
        case "difference":
        case "silhouette":
        case "edges":
            return { threshold: "Threshold", gain: "Gain", decay: "Trail decay" };
        case "slit":
            return { threshold: "Ribbon bend", gain: "Time stretch", decay: "History" };
        case "echo":
            return { threshold: "Wall size", gain: "Echo depth", decay: "History" };
        case "smear":
            return { threshold: "Sensitivity", gain: "Trail spread", decay: "History" };
        case "freeze":
            return { threshold: "Trigger", gain: "Shard size", decay: "Hold time" };
        default: {
            const _exhaustive: never = mode;
            return _exhaustive;
        }
    }
}

/** Right-panel sections for the selected layer's FX. */
export function LayerPanel(props: {
    layer: SceneLayer;
    info?: ImageInfo;
    onPatch: (patch: Partial<LayerFx>) => void;
    onReplaceFx: (fx: LayerFx) => void;
    onSetVisual: (visual: AudioVisualId) => void;
    onSetGenerator: (patch: Partial<GeneratorSettings>) => void;
    onSetMotion: (patch: Partial<MotionSettings>) => void;
    onSetCameraMode: (mode: CameraModeOption) => void;
}) {
    const { layer } = props;
    const fx = layer.fx;
    const audioDriven =
        layer.mediaKind === "mic" || layer.mediaKind === "audio";
    const motionSettings = layer.motion ?? DEFAULT_MOTION;
    const cameraMode: CameraModeOption = layer.motion?.mode ?? "live";
    const sliderLabels =
        cameraMode === "live" ? null : cameraSliderLabels(cameraMode);
    const blendCommitRef = useRef(fx.blend);
    const blendPreviewingRef = useRef(false);
    useEffect(() => {
        if (!blendPreviewingRef.current) {
            blendCommitRef.current = fx.blend;
        }
    }, [fx.blend]);
    return (
        <>
            <Section accent actions={undefined}>
                {layer.mediaKind === "generator" && layer.generator && (
                    <div class="border-b border-[var(--line)] px-3 py-2">
                        <div class="mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">Generator</div>
                        <Select<GeneratorId>
                            value={layer.generator.kind}
                            options={GENERATOR_OPTIONS}
                            onChange={(kind) => props.onSetGenerator({ kind })}
                        />
                        <div class="mt-2 flex items-center gap-2">
                            <input type="color" value={layer.generator.colorA} onInput={(event) => props.onSetGenerator({ colorA: event.currentTarget.value })} />
                            <input type="color" value={layer.generator.colorB} onInput={(event) => props.onSetGenerator({ colorB: event.currentTarget.value })} />
                            <span class="font-mono text-[8px] uppercase text-[var(--mute)]">palette</span>
                        </div>
                        <Slider label="Detail" value={layer.generator.detail} def={0.5} onChange={(detail) => props.onSetGenerator({ detail })} />
                        <Slider label="Source speed" value={layer.generator.speed} def={0.5} onChange={(speed) => props.onSetGenerator({ speed })} />
                    </div>
                )}
                {layer.mediaKind === "camera" && (
                    <div class="border-b border-[var(--line)] px-3 py-2">
                        <div class="mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                            Mode
                        </div>
                        <Select<CameraModeOption>
                            value={cameraMode}
                            options={CAMERA_MODE_OPTIONS}
                            onChange={(mode) => props.onSetCameraMode(mode)}
                        />
                        {layer.motion && sliderLabels && (
                            <div class="mt-1">
                                <Slider
                                    label={sliderLabels.decay}
                                    value={motionSettings.decay}
                                    def={DEFAULT_MOTION.decay}
                                    onChange={(decay) => props.onSetMotion({ decay })}
                                />
                                <Slider
                                    label={sliderLabels.gain}
                                    value={motionSettings.gain}
                                    def={DEFAULT_MOTION.gain}
                                    onChange={(gain) => props.onSetMotion({ gain })}
                                />
                                <Slider
                                    label={sliderLabels.threshold}
                                    value={motionSettings.threshold}
                                    def={DEFAULT_MOTION.threshold}
                                    onChange={(threshold) =>
                                        props.onSetMotion({ threshold })
                                    }
                                />
                            </div>
                        )}
                    </div>
                )}
                {audioDriven && (
                    <div class="px-3 py-[5px]">
                        <div class="mb-1 flex items-center text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                            Visualizer
                            <span class="flex-1" />
                            <IconButton
                                title="Random visualizer"
                                onClick={() =>
                                    props.onSetVisual(
                                        randomAudioVisual(layer.visual),
                                    )
                                }
                            >
                                <IDice class="h-3 w-3" />
                            </IconButton>
                        </div>
                        <Select<AudioVisualId>
                            value={layer.visual ?? "classic"}
                            options={VISUAL_OPTIONS}
                            onChange={(visual) => props.onSetVisual(visual)}
                        />
                    </div>
                )}
                <div class="px-3 py-[5px]">
                    <div class="mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                        Blend
                    </div>
                    <Select<BlendMode>
                        value={fx.blend}
                        options={BLEND_OPTIONS}
                        onChange={(blend) => {
                            blendCommitRef.current = blend;
                            blendPreviewingRef.current = false;
                            props.onPatch({ blend });
                        }}
                        onPreview={(blend) => {
                            blendPreviewingRef.current = true;
                            props.onPatch({ blend });
                        }}
                        onPreviewEnd={() => {
                            const committed = blendCommitRef.current;
                            blendPreviewingRef.current = false;
                            props.onPatch({ blend: committed });
                        }}
                    />
                </div>
                <Slider
                    label="Opacity"
                    value={fx.opacity}
                    def={1}
                    onChange={(value) => props.onPatch({ opacity: value })}
                />
                <Segmented
                    label="Canvas fill"
                    options={TILE_MODES}
                    value={fx.tile}
                    onChange={(index) => props.onPatch({ tile: index })}
                />
                <Slider
                    label="Scale"
                    value={fx.scale}
                    min={0.05}
                    max={6}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ scale: value })}
                />
                <Slider
                    label="Rotation"
                    value={fx.rotation}
                    min={-180}
                    max={180}
                    def={0}
                    format={formatDeg}
                    onChange={(value) => props.onPatch({ rotation: value })}
                />
            </Section>
            <Section title="Distort">
                <Slider
                    label="Fluid warp"
                    value={fx.warp}
                    def={0}
                    onChange={(value) => props.onPatch({ warp: value })}
                />
                <Slider
                    label="Swirl"
                    value={fx.swirl}
                    def={0}
                    onChange={(value) => props.onPatch({ swirl: value })}
                />
                <Slider
                    label="Ripples"
                    value={fx.ripple}
                    def={0}
                    onChange={(value) => props.onPatch({ ripple: value })}
                />
                <Slider
                    label="Kaleidoscope"
                    value={fx.kaleido}
                    def={0}
                    onChange={(value) => props.onPatch({ kaleido: value })}
                />
                <Slider
                    label="Pixelate"
                    value={fx.pixelate}
                    def={0}
                    onChange={(value) => props.onPatch({ pixelate: value })}
                />
                <Slider
                    label="Lens"
                    value={fx.bulge}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) => props.onPatch({ bulge: value })}
                />
                <Slider
                    label="Mirror fold"
                    value={fx.mirror}
                    def={0}
                    onChange={(value) => props.onPatch({ mirror: value })}
                />
            </Section>
            <Section title="Layer color">
                <Slider
                    label="Hue"
                    value={fx.hue}
                    def={0}
                    onChange={(value) => props.onPatch({ hue: value })}
                />
                <Slider
                    label="Saturation"
                    value={fx.saturation}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ saturation: value })}
                />
                <Slider
                    label="Contrast"
                    value={fx.contrast}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ contrast: value })}
                />
                <Slider
                    label="Brightness"
                    value={fx.brightness}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ brightness: value })}
                />
                <Slider
                    label="Invert"
                    value={fx.invert}
                    def={0}
                    onChange={(value) => props.onPatch({ invert: value })}
                />
                <Slider
                    label="Posterize"
                    value={fx.posterize}
                    def={0}
                    onChange={(value) => props.onPatch({ posterize: value })}
                />
                <Slider
                    label="Prism split"
                    value={fx.chroma}
                    def={0}
                    onChange={(value) => props.onPatch({ chroma: value })}
                />
                <Slider
                    label="Neon edges"
                    value={fx.edges}
                    def={0}
                    onChange={(value) => props.onPatch({ edges: value })}
                />
                <div class="flex items-center gap-2 px-3 py-[5px]">
                    <input
                        type="color"
                        value={fx.tintColor}
                        onInput={(event) =>
                            props.onPatch({
                                tintColor: (
                                    event.currentTarget as HTMLInputElement
                                ).value,
                            })
                        }
                    />
                    <div class="flex-1">
                        <Slider
                            label="Tint"
                            value={fx.tintAmount}
                            def={0}
                            onChange={(value) =>
                                props.onPatch({ tintAmount: value })
                            }
                        />
                    </div>
                </div>
            </Section>
            <Section title="Layer motion">
                <Slider
                    label="Spin"
                    value={fx.spin}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) => props.onPatch({ spin: value })}
                />
                <Slider
                    label="Drift"
                    value={fx.drift}
                    def={0}
                    onChange={(value) => props.onPatch({ drift: value })}
                />
                <Slider
                    label="Pulse"
                    value={fx.pulse}
                    def={0}
                    onChange={(value) => props.onPatch({ pulse: value })}
                />
                <Slider
                    label="Shimmer"
                    value={fx.shimmer}
                    def={0}
                    onChange={(value) => props.onPatch({ shimmer: value })}
                />
            </Section>
        </>
    );
}
