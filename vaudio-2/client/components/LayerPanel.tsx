import {
    AUDIO_VISUAL_IDS,
    BLEND_MODES,
    TILE_MODES,
    type AudioVisualId,
    type BlendMode,
    type LayerFx,
    type SceneLayer,
} from "../../shared/types";
import type { ImageInfo } from "../frame";
import { IDice } from "../icons";
import {
    AUDIO_VISUAL_LABELS,
    mediaKindLabel,
    randomAudioVisual,
} from "../media";
import { randomLayerFx, resetLayerFxEffects } from "../presets";
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
    label: mode,
}));

const VISUAL_OPTIONS = AUDIO_VISUAL_IDS.map((id) => ({
    value: id,
    label: AUDIO_VISUAL_LABELS[id],
}));

/** Right-panel sections for the selected layer's FX. */
export function LayerPanel(props: {
    layer: SceneLayer;
    info?: ImageInfo;
    onPatch: (patch: Partial<LayerFx>) => void;
    onReplaceFx: (fx: LayerFx) => void;
    onSetVisual: (visual: AudioVisualId) => void;
}) {
    const { layer, info } = props;
    const fx = layer.fx;
    const audioDriven = layer.mediaKind === "mic" || layer.mediaKind === "audio";
    return (
        <>
            <Section
                title={`Layer · ${layer.name}`}
                accent
                actions={
                    <>
                        <IconButton
                            title="Shuffle layer FX"
                            tone="accent"
                            onClick={() => props.onReplaceFx(randomLayerFx(fx))}
                        >
                            <IDice class="h-3.5 w-3.5" />
                        </IconButton>
                        <button
                            type="button"
                            title="Reset layer FX"
                            class="font-mono text-[9px] uppercase text-[var(--mute)] hover:text-[var(--paper)]"
                            onClick={() =>
                                props.onReplaceFx(resetLayerFxEffects(fx))
                            }
                        >
                            reset
                        </button>
                    </>
                }
            >
                <div class="px-3 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    {mediaKindLabel(layer.mediaKind)}
                    {info && !info.missing && ` · ${info.width}×${info.height}`}
                    {info?.missing ? " · missing on device" : ""}
                </div>
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
                        onChange={(blend) => props.onPatch({ blend })}
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
