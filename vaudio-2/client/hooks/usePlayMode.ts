import { useRef } from "preact/hooks";
import {
    DEFAULT_GLOBAL_FX,
    clamp,
    type GlobalFx,
    type LayerFx,
    type Scene,
} from "../../shared/types";
import type { EngineHandle } from "../engine";
import {
    emptyKick,
    hitLayer,
    type ImageInfo,
    type KickState,
    type StageSize,
} from "../frame";
import {
    PLAY_FX_KEYS,
    PLAY_LAYER_KEYS,
    PLAY_PIANO,
    PLAY_PRESET_CODES,
    hslToHex,
} from "../playmap";
import {
    WORLD_PRESETS,
    randomLayerFx,
    resetLayerFxEffects,
} from "../presets";

/**
 * Play mode — the canvas as an instrument. Owns the transient "kick" boosts
 * and every permanent-but-undoable gesture: preset strikes, FX pumps, the hue
 * piano, layer strikes, taps, echoes, and soothes.
 */
export function usePlayMode(deps: {
    sceneRef: { current: Scene };
    setScene: (updater: (previous: Scene) => Scene) => void;
    updateGlobal: (patch: Partial<GlobalFx>) => void;
    updateLayerFx: (layerId: string, patch: Partial<LayerFx>) => void;
    replaceLayerFx: (layerId: string, fx: LayerFx) => void;
    setSelectedId: (id: string | null) => void;
    setStageMode: (mode: "arrange" | "play") => void;
    engineRef: { current: EngineHandle | null };
    stageSizeRef: { current: StageSize };
    imageInfoRef: { current: Record<string, ImageInfo> };
    showToast: (message: string) => void;
    onChaos: () => void;
    onMutate: () => void;
}) {
    const kickRef = useRef<KickState>(emptyKick());

    function hitLayerAt(sceneX: number, sceneY: number) {
        return hitLayer(
            deps.sceneRef.current,
            deps.imageInfoRef.current,
            deps.stageSizeRef.current,
            sceneX,
            sceneY,
        );
    }

    function addKick(patch: Partial<KickState>) {
        const kick = kickRef.current;
        for (const key of Object.keys(patch) as (keyof KickState)[]) {
            kick[key] = Math.min(0.9, kick[key] + (patch[key] ?? 0));
        }
    }

    function stepGlobal(param: keyof GlobalFx, delta: number) {
        deps.setScene((previous) => {
            const value = previous.global[param];
            if (typeof value !== "number") return previous;
            const max =
                param === "saturation" ||
                param === "contrast" ||
                param === "speed"
                    ? 2
                    : 1;
            const min = param === "fbZoom" || param === "fbRotate" ? -1 : 0;
            return {
                ...previous,
                global: {
                    ...previous.global,
                    [param]: clamp(value + delta, min, max),
                },
            };
        });
    }

    function playNote(index: number, paintBackground: boolean) {
        const count = PLAY_PIANO.length;
        const position = count > 1 ? index / (count - 1) : 0;
        const hueDeg = Math.round((index / count) * 360);
        if (paintBackground || deps.sceneRef.current.layers.length === 0) {
            deps.setScene((previous) => ({
                ...previous,
                global: {
                    ...previous.global,
                    bgA: hslToHex(hueDeg, 0.5, 0.09),
                    bgB: hslToHex((hueDeg + 45) % 360, 0.55, 0.3),
                },
            }));
        } else {
            const hue = index / count;
            deps.setScene((previous) => ({
                ...previous,
                layers: previous.layers.map((layer) => ({
                    ...layer,
                    fx: { ...layer.fx, hue },
                })),
            }));
        }
        // Low notes thump, high notes sparkle.
        addKick({
            zoom: 0.15 * (1 - position),
            ripple: 0.08,
            chroma: 0.05 + 0.13 * position,
            strobe: 0.1 * position,
        });
    }

    function strikeLayer(index: number, reset: boolean) {
        const layer = deps.sceneRef.current.layers[index];
        if (!layer) return;
        deps.replaceLayerFx(
            layer.id,
            reset ? resetLayerFxEffects(layer.fx) : randomLayerFx(layer.fx),
        );
        deps.setSelectedId(layer.id);
        addKick({ ripple: 0.14, strobe: 0.06 });
    }

    function washWorld() {
        deps.setScene((previous) => ({
            ...previous,
            global: {
                ...DEFAULT_GLOBAL_FX,
                bgMode: previous.global.bgMode,
                bgA: previous.global.bgA,
                bgB: previous.global.bgB,
                audioReact: previous.global.audioReact,
                pointerForce: previous.global.pointerForce,
                pointerSize: previous.global.pointerSize,
                pointerMode: previous.global.pointerMode,
            },
        }));
        deps.engineRef.current?.clearFeedback();
    }

    function handlePlayKey(event: KeyboardEvent) {
        const code = event.code;
        if (event.key === "Escape") {
            deps.setStageMode("arrange");
            return;
        }

        const presetIndex = PLAY_PRESET_CODES.indexOf(code);
        if (presetIndex >= 0 && presetIndex < WORLD_PRESETS.length) {
            event.preventDefault();
            if (event.repeat) return;
            const preset = WORLD_PRESETS[presetIndex];
            deps.updateGlobal(preset.global);
            deps.engineRef.current?.clearFeedback();
            addKick({ strobe: 0.22, zoom: 0.08 });
            deps.showToast(`${preset.code} · ${preset.name}`);
            return;
        }

        const fxKey = PLAY_FX_KEYS.find((item) => item.code === code);
        if (fxKey) {
            event.preventDefault();
            stepGlobal(fxKey.param, event.shiftKey ? -0.08 : 0.08);
            addKick({ chroma: 0.04, strobe: 0.05 });
            return;
        }

        if (code === "BracketLeft" || code === "BracketRight") {
            event.preventDefault();
            stepGlobal("speed", code === "BracketRight" ? 0.1 : -0.1);
            return;
        }
        if (code === "Backslash") {
            event.preventDefault();
            stepGlobal("solarize", event.shiftKey ? -0.15 : 0.15);
            addKick({ strobe: 0.1 });
            return;
        }

        const noteIndex = PLAY_PIANO.findIndex((item) => item.code === code);
        if (noteIndex >= 0) {
            event.preventDefault();
            playNote(noteIndex, event.shiftKey);
            return;
        }

        const layerIndex = PLAY_LAYER_KEYS.findIndex(
            (item) => item.code === code,
        );
        if (layerIndex >= 0) {
            event.preventDefault();
            if (event.repeat) return;
            strikeLayer(layerIndex, event.shiftKey);
            return;
        }

        if (code === "Minus") {
            event.preventDefault();
            if (event.repeat) return;
            deps.onMutate();
            deps.showToast("Mutated");
            return;
        }
        if (code === "Equal") {
            event.preventDefault();
            if (event.repeat) return;
            deps.onChaos();
            deps.showToast("Chaos");
            addKick({ strobe: 0.18, chroma: 0.08, zoom: 0.06 });
            return;
        }
        if (code === "Backspace" && !event.shiftKey) {
            event.preventDefault();
            if (event.repeat) return;
            washWorld();
            deps.showToast("Washed the world clean");
            return;
        }

        if (event.key.startsWith("Arrow")) {
            event.preventDefault();
            if (event.key === "ArrowUp") stepGlobal("saturation", 0.08);
            if (event.key === "ArrowDown") stepGlobal("saturation", -0.08);
            if (event.key === "ArrowRight") stepGlobal("hueOrbit", 0.06);
            if (event.key === "ArrowLeft") stepGlobal("hueOrbit", -0.06);
        }
    }

    function stampTap(u: number, v: number, subtract: boolean) {
        const global = deps.sceneRef.current.global;
        const mode = Math.round(global.pointerMode);
        const reach = Math.min(1, Math.hypot(u - 0.5, v - 0.5) / 0.62);
        const strength = (0.05 + 0.13 * reach) * (subtract ? -1 : 1);
        const { width, height } = deps.stageSizeRef.current;
        const aspect = Math.max(0.05, width / Math.max(1, height));
        const hit = hitLayerAt((u - 0.5) * aspect, 0.5 - v);
        if (hit) {
            if (mode === 1) {
                // Gravity pinches the layer inward.
                deps.updateLayerFx(hit.id, {
                    bulge: clamp(hit.fx.bulge - strength * 1.4, -1, 1),
                });
            } else {
                const param =
                    mode === 0 ? "swirl" : mode === 2 ? "chroma" : "warp";
                const current = (hit.fx as unknown as Record<string, number>)[
                    param
                ];
                deps.updateLayerFx(hit.id, {
                    [param]: clamp(current + strength * 1.2, 0, 1),
                } as Partial<LayerFx>);
            }
        } else {
            const param =
                mode === 0
                    ? "swirl"
                    : mode === 1
                      ? "zoom"
                      : mode === 2
                        ? "chroma"
                        : "warp";
            stepGlobal(param, strength);
        }
        addKick(
            mode === 0
                ? { swirl: 0.12 }
                : mode === 1
                  ? { zoom: 0.12 }
                  : mode === 2
                    ? { chroma: 0.14 }
                    : { ripple: 0.12 },
        );
    }

    function stepKaleido() {
        const current = deps.sceneRef.current.global.kaleido;
        const next =
            current < 0.1
                ? 0.3
                : current < 0.45
                  ? 0.6
                  : current < 0.75
                    ? 0.85
                    : 0;
        deps.updateGlobal({ kaleido: next });
        addKick({ swirl: 0.16, strobe: 0.08 });
    }

    function soothePlay(sceneX: number, sceneY: number) {
        const hit = hitLayerAt(sceneX, sceneY);
        if (hit) {
            deps.setScene((previous) => ({
                ...previous,
                layers: previous.layers.map((layer) =>
                    layer.id === hit.id
                        ? {
                              ...layer,
                              fx: {
                                  ...layer.fx,
                                  warp: layer.fx.warp * 0.55,
                                  swirl: layer.fx.swirl * 0.55,
                                  ripple: layer.fx.ripple * 0.55,
                                  kaleido: layer.fx.kaleido * 0.55,
                                  pixelate: layer.fx.pixelate * 0.55,
                                  bulge: layer.fx.bulge * 0.55,
                                  mirror: layer.fx.mirror * 0.55,
                                  chroma: layer.fx.chroma * 0.55,
                              },
                          }
                        : layer,
                ),
            }));
            return;
        }
        deps.setScene((previous) => {
            const g = previous.global;
            return {
                ...previous,
                global: {
                    ...g,
                    warp: g.warp * 0.72,
                    swirl: g.swirl * 0.72,
                    ripple: g.ripple * 0.72,
                    zoom: g.zoom * 0.72,
                    kaleido: g.kaleido * 0.72,
                    mirror: g.mirror * 0.72,
                    chroma: g.chroma * 0.72,
                    feedback: g.feedback * 0.72,
                    solarize: g.solarize * 0.72,
                    strobe: g.strobe * 0.72,
                },
            };
        });
    }

    function throwEcho(
        gesture: { startU: number; startV: number; path: number },
        u: number,
        v: number,
    ) {
        const dx = u - gesture.startU;
        const lift = gesture.startV - v;
        deps.setScene((previous) => {
            const g = previous.global;
            return {
                ...previous,
                global: {
                    ...g,
                    fbRotate: clamp(g.fbRotate + dx * 0.7, -1, 1),
                    fbZoom: clamp(g.fbZoom + lift * 0.7, -1, 1),
                    feedback: clamp(
                        Math.max(g.feedback, 0.3) +
                            Math.min(0.2, gesture.path * 0.25),
                        0,
                        0.95,
                    ),
                    trails: clamp(
                        Math.max(g.trails, 0.55) +
                            Math.min(0.15, gesture.path * 0.12),
                        0,
                        0.96,
                    ),
                },
            };
        });
        addKick({ zoom: 0.1, chroma: 0.08 });
    }

    return {
        kickRef,
        addKick,
        stepGlobal,
        handlePlayKey,
        stampTap,
        stepKaleido,
        soothePlay,
        throwEcho,
    };
}
