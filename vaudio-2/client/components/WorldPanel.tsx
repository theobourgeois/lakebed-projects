import { BG_MODES, POINTER_MODES, type GlobalFx } from "../../shared/types";
import { WORLD_PRESETS } from "../presets";
import { Section, Segmented, Slider, formatX } from "../ui";

/** Right-panel sections controlling the world (global) FX. */
export function WorldPanel(props: {
    global: GlobalFx;
    onPatch: (patch: Partial<GlobalFx>) => void;
    onPreset: (preset: (typeof WORLD_PRESETS)[number]) => void;
}) {
    const g = props.global;
    return (
        <>
            <Section title="Space">
                <Slider
                    label="Fluid warp"
                    value={g.warp}
                    def={0}
                    onChange={(value) => props.onPatch({ warp: value })}
                />
                <Slider
                    label="Swirl"
                    value={g.swirl}
                    def={0}
                    onChange={(value) => props.onPatch({ swirl: value })}
                />
                <Slider
                    label="Ripples"
                    value={g.ripple}
                    def={0}
                    onChange={(value) => props.onPatch({ ripple: value })}
                />
                <Slider
                    label="Tunnel zoom"
                    value={g.zoom}
                    def={0}
                    onChange={(value) => props.onPatch({ zoom: value })}
                />
                <Slider
                    label="Kaleidoscope"
                    value={g.kaleido}
                    def={0}
                    onChange={(value) => props.onPatch({ kaleido: value })}
                />
                <Slider
                    label="Mirror fold"
                    value={g.mirror}
                    def={0}
                    onChange={(value) => props.onPatch({ mirror: value })}
                />
            </Section>
            <Section title="Feedback">
                <Slider
                    label="Feedback"
                    value={g.feedback}
                    def={0}
                    onChange={(value) => props.onPatch({ feedback: value })}
                />
                <Slider
                    label="Trail length"
                    value={g.trails}
                    def={0.6}
                    onChange={(value) => props.onPatch({ trails: value })}
                />
                <Slider
                    label="Echo zoom"
                    value={g.fbZoom}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) => props.onPatch({ fbZoom: value })}
                />
                <Slider
                    label="Echo spin"
                    value={g.fbRotate}
                    min={-1}
                    max={1}
                    def={0}
                    format={(v) => v.toFixed(2)}
                    onChange={(value) => props.onPatch({ fbRotate: value })}
                />
                <Slider
                    label="Echo hue"
                    value={g.fbHue}
                    def={0}
                    onChange={(value) => props.onPatch({ fbHue: value })}
                />
            </Section>
            <Section title="World color">
                <Slider
                    label="Prism split"
                    value={g.chroma}
                    def={0}
                    onChange={(value) => props.onPatch({ chroma: value })}
                />
                <Slider
                    label="Hue orbit"
                    value={g.hueOrbit}
                    def={0}
                    onChange={(value) => props.onPatch({ hueOrbit: value })}
                />
                <Slider
                    label="Saturation"
                    value={g.saturation}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ saturation: value })}
                />
                <Slider
                    label="Contrast"
                    value={g.contrast}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ contrast: value })}
                />
                <Slider
                    label="Solarize"
                    value={g.solarize}
                    def={0}
                    onChange={(value) => props.onPatch({ solarize: value })}
                />
            </Section>
            <Section title="Signal">
                <Slider
                    label="Grain"
                    value={g.grain}
                    def={0}
                    onChange={(value) => props.onPatch({ grain: value })}
                />
                <Slider
                    label="Scanlines"
                    value={g.scanlines}
                    def={0}
                    onChange={(value) => props.onPatch({ scanlines: value })}
                />
                <Slider
                    label="Vignette"
                    value={g.vignette}
                    def={0.22}
                    onChange={(value) => props.onPatch({ vignette: value })}
                />
                <Slider
                    label="Strobe"
                    value={g.strobe}
                    def={0}
                    onChange={(value) => props.onPatch({ strobe: value })}
                />
            </Section>
            <Section title="Motion & audio">
                <Slider
                    label="Time speed"
                    value={g.speed}
                    max={2}
                    def={1}
                    format={formatX}
                    onChange={(value) => props.onPatch({ speed: value })}
                />
                <Slider
                    label="Audio react"
                    value={g.audioReact}
                    def={0}
                    onChange={(value) => props.onPatch({ audioReact: value })}
                />
            </Section>
        </>
    );
}
