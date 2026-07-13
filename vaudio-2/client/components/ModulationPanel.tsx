import {
    GLOBAL_MOD_PARAMS,
    LAYER_MOD_PARAMS,
    type GlobalModParam,
    type LayerModParam,
    type Modulation,
    type SceneLayer,
} from "../../shared/types";
import type { LearnedControl } from "../hooks/useControlInputs";
import { newId } from "../store";
import { Section, Select, Slider } from "../ui";

const humanize = (value: string) => value.replace(/([A-Z])/g, " $1").replace(/^./, (c) => c.toUpperCase());
const SIGNAL_OPTIONS = [
    { value: "level" as const, label: "Level" },
    { value: "luma" as const, label: "Brightness" },
    { value: "motion" as const, label: "Movement" },
];

export function ModulationPanel(props: {
    scope: "layer" | "global";
    targetId?: string;
    layers: SceneLayer[];
    routes: Modulation[];
    learning: "midi" | "gamepad" | null;
    midiInputs: string[];
    gamepads: string[];
    onChange: (routes: Modulation[]) => void;
    onLearnMidi: (callback: (control: LearnedControl) => void) => void;
    onLearnGamepad: (callback: (control: LearnedControl) => void) => void;
}) {
    const targetRoutes = props.routes.filter((route) =>
        route.targetScope === props.scope &&
        (props.scope === "global" || route.targetId === props.targetId));
    const params = props.scope === "global" ? GLOBAL_MOD_PARAMS : LAYER_MOD_PARAMS;
    const paramOptions = params.map((param) => ({ value: param, label: humanize(param) }));
    const otherLayers = props.layers.filter((layer) => layer.id !== props.targetId);

    function add(sourceKind: Modulation["sourceKind"], control?: LearnedControl) {
        const source = sourceKind === "layer" ? otherLayers[0] : undefined;
        if (sourceKind === "layer" && !source) return;
        const route: Modulation = {
            id: newId("mod"),
            sourceKind,
            ...(source ? { sourceId: source.id, sourceLabel: source.name } : {}),
            ...(control ? { sourceId: control.key, sourceLabel: control.label } : {}),
            signal: source?.motion ? "motion" : source ? "luma" : "level",
            targetScope: props.scope,
            ...(props.targetId ? { targetId: props.targetId } : {}),
            targetParam: (props.scope === "global" ? "warp" : "scale") as LayerModParam | GlobalModParam,
            amount: 0.5,
            ...(control?.key.includes(":axis:") ? { bipolar: true } : {}),
            smoothing: 0.25,
        };
        props.onChange([...props.routes, route]);
    }

    function patch(id: string, update: Partial<Modulation>) {
        props.onChange(props.routes.map((route) => route.id === id ? { ...route, ...update } : route));
    }

    return (
        <Section title="Modulation">
            <div class="px-3 py-2">
                <p class="mb-2 font-mono text-[8px] leading-relaxed text-[var(--mute)]">
                    Route live sources and controllers into this {props.scope === "global" ? "world" : "layer"}. Values are added non-destructively to the knobs above.
                </p>
                <div class="grid grid-cols-2 gap-1">
                    <button type="button" class="border border-[var(--line)] px-2 py-1.5 text-[9px] hover:border-[var(--acid)]/50" onClick={() => add("audio")}>+ Audio</button>
                    <button type="button" disabled={!otherLayers.length} class="border border-[var(--line)] px-2 py-1.5 text-[9px] disabled:opacity-35 hover:border-[var(--acid)]/50" onClick={() => add("layer")}>+ Layer signal</button>
                    <button type="button" class={`border px-2 py-1.5 text-[9px] ${props.learning === "midi" ? "border-[var(--acid)] text-[var(--acid)]" : "border-[var(--line)]"}`} onClick={() => props.onLearnMidi((control) => add("midi", control))}>
                        {props.learning === "midi" ? "Move MIDI…" : "+ MIDI learn"}
                    </button>
                    <button type="button" class={`border px-2 py-1.5 text-[9px] ${props.learning === "gamepad" ? "border-[var(--acid)] text-[var(--acid)]" : "border-[var(--line)]"}`} onClick={() => props.onLearnGamepad((control) => add("gamepad", control))}>
                        {props.learning === "gamepad" ? "Move control…" : "+ Gamepad learn"}
                    </button>
                </div>
                {(props.midiInputs.length > 0 || props.gamepads.length > 0) && (
                    <p class="mt-2 truncate font-mono text-[8px] text-[var(--mute)]">
                        {[...props.midiInputs, ...props.gamepads].join(" · ")}
                    </p>
                )}
            </div>
            {targetRoutes.map((route) => (
                <div key={route.id} class="border-t border-[var(--line)] px-3 py-2">
                    <div class="mb-2 flex items-center gap-2">
                        <span class="min-w-0 flex-1 truncate font-mono text-[9px] text-[var(--acid)]">
                            {route.sourceKind === "audio" ? "Audio level" : route.sourceLabel || humanize(route.sourceKind)}
                        </span>
                        <button type="button" title="Remove modulation" class="font-mono text-[12px] text-[var(--mute)] hover:text-[#b86a74]" onClick={() => props.onChange(props.routes.filter((item) => item.id !== route.id))}>×</button>
                    </div>
                    {route.sourceKind === "layer" && (
                        <>
                            <Select<string>
                                value={route.sourceId ?? ""}
                                options={otherLayers.map((layer) => ({ value: layer.id, label: layer.name }))}
                                onChange={(sourceId) => patch(route.id, { sourceId, sourceLabel: props.layers.find((layer) => layer.id === sourceId)?.name })}
                            />
                            <div class="mt-1"><Select<"level" | "luma" | "motion"> value={route.signal} options={SIGNAL_OPTIONS} onChange={(signal) => patch(route.id, { signal })} /></div>
                        </>
                    )}
                    <div class="mt-1"><Select<any> value={route.targetParam} options={paramOptions} onChange={(targetParam) => patch(route.id, { targetParam })} /></div>
                    <Slider label="Depth" value={route.amount} min={-1} max={1} def={0.5} format={(value) => value.toFixed(2)} onChange={(amount) => patch(route.id, { amount })} />
                    <Slider label="Smoothing" value={route.smoothing} def={0.25} onChange={(smoothing) => patch(route.id, { smoothing })} />
                    {(route.sourceKind === "midi" || route.sourceKind === "gamepad") && (
                        <button type="button" class={`mt-1 border px-2 py-1 font-mono text-[8px] uppercase ${route.bipolar ? "border-[var(--acid)] text-[var(--acid)]" : "border-[var(--line)] text-[var(--mute)]"}`} onClick={() => patch(route.id, { bipolar: !route.bipolar })}>
                            {route.bipolar ? "Bipolar − / +" : "Unipolar 0 → +"}
                        </button>
                    )}
                </div>
            ))}
        </Section>
    );
}
