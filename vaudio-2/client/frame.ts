import { clamp, type MediaKind, type Scene, type SceneLayer } from "../shared/types";
import {
    hexToRgb,
    type FrameState,
    type LayerRenderState,
    type PointerState,
} from "./engine";
import { blendIndex } from "./presets";
import { resolveModulations, type SourceSignals } from "./modulation";

/** Pure scene → render-state math shared by the engine loop and hit-testing. */

export type StageSize = { width: number; height: number };

export type ImageInfo = {
    width: number;
    height: number;
    thumb: string;
    missing: boolean;
    kind: MediaKind;
};

/** Transient per-hit boosts layered onto the world FX; decays every frame. */
export type KickState = {
    zoom: number;
    strobe: number;
    chroma: number;
    ripple: number;
    swirl: number;
};

export function emptyKick(): KickState {
    return { zoom: 0, strobe: 0, chroma: 0, ripple: 0, swirl: 0 };
}

export function layerSeed(id: string): number {
    let hash = 0;
    for (let i = 0; i < id.length; i++)
        hash = (hash * 31 + id.charCodeAt(i)) >>> 0;
    return (hash % 1000) / 1000;
}

export function buildFrameState(args: {
    scene: Scene;
    info: Record<string, ImageInfo>;
    stageSize: StageSize;
    time: number;
    audio: number;
    pointer: PointerState;
    kick: KickState;
    signals: SourceSignals;
    controls: Map<string, number>;
    smoothedModulations: Map<string, number>;
}): FrameState {
    const { scene, info, time, audio, kick } = args;
    const { width, height } = args.stageSize;
    const aspect = Math.max(0.05, width / Math.max(1, height));

    const modulation = resolveModulations(
        scene,
        args.signals,
        args.controls,
        audio,
        args.smoothedModulations,
    );
    const layers: LayerRenderState[] = scene.layers
        .filter((layer) => layer.fx.visible)
        .map((layer) => {
            const fx = modulation.layerFx.get(layer.id) ?? layer.fx;
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
                        audio * scene.global.audioReact * 0.5);
            const scale = fx.scale * pulse;
            const driftX = Math.sin(time * 0.57 + seed * 9.2) * fx.drift * 0.3;
            const driftY = Math.cos(time * 0.43 + seed * 5.7) * fx.drift * 0.3;
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
                mapEnabled: layer.audioMap ? 1 : 0,
                mapAmount: layer.audioMap?.amount ?? 0,
                mapBlur: layer.audioMap?.blur ?? 0,
                mapPreview: layer.audioMap?.preview === "dim" ? 0.2 : 0,
            };
        });

    const g = modulation.global;
    return {
        time,
        audio,
        pointer: args.pointer,
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
            swirl: clamp(g.swirl + kick.swirl, 0, 1),
            ripple: clamp(g.ripple + kick.ripple, 0, 1),
            zoom: clamp(g.zoom + kick.zoom, 0, 1),
            kaleido: g.kaleido,
            mirror: g.mirror,
            chroma: clamp(g.chroma + kick.chroma, 0, 1),
            hueOrbit: g.hueOrbit,
            saturation: g.saturation,
            contrast: g.contrast,
            solarize: g.solarize,
            grain: g.grain,
            scanlines: g.scanlines,
            vignette: g.vignette,
            strobe: clamp(g.strobe + kick.strobe, 0, 1),
            audioReact: g.audioReact,
            pointerForce: g.pointerForce,
            pointerSize: g.pointerSize,
            pointerMode: g.pointerMode,
        },
    };
}

/** Topmost visible layer whose quad contains the scene-space point. */
export function hitLayer(
    scene: Scene,
    info: Record<string, ImageInfo>,
    stageSize: StageSize,
    sceneX: number,
    sceneY: number,
): SceneLayer | null {
    const { width, height } = stageSize;
    const aspect = Math.max(0.05, width / Math.max(1, height));
    for (let i = scene.layers.length - 1; i >= 0; i--) {
        const layer = scene.layers[i];
        if (!layer.fx.visible) continue;
        const meta = info[layer.imageId];
        const imageAspect =
            meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
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

export type SelectionBox = {
    boxWidth: number;
    boxHeight: number;
    centerX: number;
    centerY: number;
    rotation: number;
};

/** Pixel-space bounding box of a layer for the arrange-mode selection outline. */
export function selectionBoxFor(
    layer: SceneLayer,
    meta: ImageInfo | undefined,
    stageSize: StageSize,
): SelectionBox | null {
    const { width, height } = stageSize;
    if (width < 2) return null;
    const aspect = width / Math.max(1, height);
    const imageAspect =
        meta && meta.width > 0 ? meta.width / Math.max(1, meta.height) : 1;
    const fitHeight = Math.min(1, aspect / imageAspect);
    const boxWidth = fitHeight * imageAspect * layer.fx.scale * height;
    const boxHeight = fitHeight * layer.fx.scale * height;
    const centerX = (0.5 + layer.fx.x / aspect) * width;
    const centerY = (0.5 - layer.fx.y) * height;
    return {
        boxWidth,
        boxHeight,
        centerX,
        centerY,
        rotation: layer.fx.rotation,
    };
}
