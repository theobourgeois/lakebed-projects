import {
    clamp,
    type GlobalFx,
    type GlobalModParam,
    type LayerFx,
    type LayerModParam,
    type Scene,
} from "../shared/types";

export type SourceSignal = { level: number; luma: number; motion: number };
export type SourceSignals = Record<string, SourceSignal>;

type ParameterRange = { min: number; max: number; span: number };

const UNIT: ParameterRange = { min: 0, max: 1, span: 1 };
const LAYER_RANGES: Partial<Record<LayerModParam, ParameterRange>> = {
    x: { min: -3, max: 3, span: 1.5 },
    y: { min: -3, max: 3, span: 1.5 },
    scale: { min: 0.05, max: 6, span: 2 },
    rotation: { min: -3600, max: 3600, span: 360 },
    saturation: { min: 0, max: 2, span: 1 },
    contrast: { min: 0, max: 2, span: 1 },
    brightness: { min: 0, max: 2, span: 1 },
    bulge: { min: -1, max: 1, span: 1 },
    spin: { min: -1, max: 1, span: 1 },
};
const GLOBAL_RANGES: Partial<Record<GlobalModParam, ParameterRange>> = {
    fbZoom: { min: -1, max: 1, span: 1 },
    fbRotate: { min: -1, max: 1, span: 1 },
    saturation: { min: 0, max: 2, span: 1 },
    contrast: { min: 0, max: 2, span: 1 },
};

export type ModulationFrame = {
    layerFx: Map<string, LayerFx>;
    global: GlobalFx;
};

/** Resolve persisted modulation routes without mutating the editable scene. */
export function resolveModulations(
    scene: Scene,
    signals: SourceSignals,
    controls: Map<string, number>,
    audio: number,
    smoothed: Map<string, number>,
): ModulationFrame {
    const layerFx = new Map<string, LayerFx>();
    const global = { ...scene.global };
    const layerById = new Map(scene.layers.map((layer) => [layer.id, layer]));
    const activeIds = new Set<string>();

    for (const route of scene.modulations ?? []) {
        activeIds.add(route.id);
        let raw = 0;
        if (route.sourceKind === "audio") raw = audio;
        else if (route.sourceKind === "midi" || route.sourceKind === "gamepad") {
            raw = controls.get(route.sourceId ?? "") ?? 0;
        } else {
            const source = layerById.get(route.sourceId ?? "");
            const metrics = source ? signals[source.imageId] : undefined;
            raw = metrics?.[route.signal] ?? 0;
        }
        raw = clamp(raw, 0, 1);
        if (route.bipolar) raw = raw * 2 - 1;
        const previous = smoothed.get(route.id) ?? raw;
        const follow = 0.5 - route.smoothing * 0.47;
        const value = previous + (raw - previous) * follow;
        smoothed.set(route.id, value);
        const depth = value * route.amount;

        if (route.targetScope === "global") {
            const param = route.targetParam as GlobalModParam;
            const range = GLOBAL_RANGES[param] ?? UNIT;
            const base = scene.global[param];
            if (typeof base === "number") {
                (global[param] as number) = clamp(base + depth * range.span, range.min, range.max);
            }
        } else {
            const target = layerById.get(route.targetId ?? "");
            if (!target) continue;
            const fx = layerFx.get(target.id) ?? { ...target.fx };
            const param = route.targetParam as LayerModParam;
            const range = LAYER_RANGES[param] ?? UNIT;
            const base = target.fx[param];
            if (typeof base === "number") {
                (fx[param] as number) = clamp(base + depth * range.span, range.min, range.max);
                layerFx.set(target.id, fx);
            }
        }
    }
    for (const id of smoothed.keys()) {
        if (!activeIds.has(id)) smoothed.delete(id);
    }
    return { layerFx, global };
}
