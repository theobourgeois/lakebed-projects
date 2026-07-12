// Scene document types shared by client and server, plus sanitizers and the
// JSON codec. A scene is small (params only) — media blobs live client-side.

export const SCENE_DATA_LIMIT = 60_000;
export const THUMB_LIMIT = 60_000;
export const MAX_LAYERS = 12;

export const MEDIA_KINDS = ["image", "video", "audio", "data"] as const;
export type MediaKind = (typeof MEDIA_KINDS)[number];

export const BLEND_MODES = [
  "normal",
  "add",
  "screen",
  "multiply",
  "overlay",
  "difference",
  "lighten",
  "darken",
] as const;
export type BlendMode = (typeof BLEND_MODES)[number];

export const TILE_MODES = ["crop", "repeat", "mirror"] as const;

export const BG_MODES = ["void", "gradient", "plasma", "tunnel"] as const;

export const POINTER_MODES = ["vortex", "gravity", "prism", "melt"] as const;

/** Per-layer effect + transform stack. All 0..1 unless noted. */
export type LayerFx = {
  // Transform (scene units: x/y are center offsets, -2..2; scale 0.05..6)
  x: number;
  y: number;
  scale: number;
  /** Degrees */
  rotation: number;
  opacity: number;
  blend: BlendMode;
  visible: boolean;
  /** 0 crop, 1 repeat, 2 mirror-repeat — repeat makes a single image infinite */
  tile: number;
  // Distort
  warp: number;
  swirl: number;
  ripple: number;
  kaleido: number;
  pixelate: number;
  /** -1 pinch .. 1 bulge */
  bulge: number;
  mirror: number;
  // Color
  hue: number;
  /** 0..2 */
  saturation: number;
  /** 0..2 */
  contrast: number;
  /** 0..2 */
  brightness: number;
  invert: number;
  posterize: number;
  chroma: number;
  edges: number;
  tintAmount: number;
  tintColor: string;
  // Motion (animated by the engine clock)
  /** -1..1 revolutions-ish */
  spin: number;
  drift: number;
  pulse: number;
  shimmer: number;
};

export type SceneLayer = {
  id: string;
  /** IndexedDB media key on the client that created it. */
  imageId: string;
  name: string;
  /** How the IndexedDB blob should be decoded / played. Defaults to image. */
  mediaKind: MediaKind;
  fx: LayerFx;
};

/** Global post-processing params. All 0..1 unless noted. */
export type GlobalFx = {
  bgMode: number;
  bgA: string;
  bgB: string;
  // Feedback
  feedback: number;
  trails: number;
  /** -1..1 */
  fbZoom: number;
  /** -1..1 */
  fbRotate: number;
  fbHue: number;
  // Space
  warp: number;
  swirl: number;
  ripple: number;
  zoom: number;
  kaleido: number;
  mirror: number;
  // Color
  chroma: number;
  hueOrbit: number;
  /** 0..2 */
  saturation: number;
  /** 0..2 */
  contrast: number;
  solarize: number;
  // Signal
  grain: number;
  scanlines: number;
  vignette: number;
  strobe: number;
  // Motion
  /** 0..2 */
  speed: number;
  audioReact: number;
  // Cursor
  pointerForce: number;
  pointerSize: number;
  pointerMode: number;
};

export type Scene = {
  name: string;
  layers: SceneLayer[];
  global: GlobalFx;
};

export type SceneMeta = {
  id: string;
  name: string;
  updatedAt: string;
  thumb: string;
};

export const DEFAULT_LAYER_FX: LayerFx = {
  x: 0,
  y: 0,
  scale: 1,
  rotation: 0,
  opacity: 1,
  blend: "normal",
  visible: true,
  tile: 0,
  warp: 0,
  swirl: 0,
  ripple: 0,
  kaleido: 0,
  pixelate: 0,
  bulge: 0,
  mirror: 0,
  hue: 0,
  saturation: 1,
  contrast: 1,
  brightness: 1,
  invert: 0,
  posterize: 0,
  chroma: 0,
  edges: 0,
  tintAmount: 0,
  tintColor: "#a87880",
  spin: 0,
  drift: 0,
  pulse: 0,
  shimmer: 0,
};

export const DEFAULT_GLOBAL_FX: GlobalFx = {
  bgMode: 0,
  bgA: "#060608",
  bgB: "#1a1216",
  feedback: 0,
  trails: 0.6,
  fbZoom: 0,
  fbRotate: 0,
  fbHue: 0,
  warp: 0,
  swirl: 0,
  ripple: 0,
  zoom: 0,
  kaleido: 0,
  mirror: 0,
  chroma: 0,
  hueOrbit: 0,
  saturation: 1,
  contrast: 1,
  solarize: 0,
  grain: 0,
  scanlines: 0,
  vignette: 0.22,
  strobe: 0,
  speed: 1,
  audioReact: 0,
  pointerForce: 0.6,
  pointerSize: 0.35,
  pointerMode: 0,
};

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function finite(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

function num(value: unknown, fallback: number, min: number, max: number): number {
  return clamp(finite(value, fallback), min, max);
}

function color(value: unknown, fallback: string): string {
  return typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value) ? value : fallback;
}

export function sanitizeLayerFx(input: Partial<LayerFx> | null | undefined): LayerFx {
  const t = input ?? {};
  const d = DEFAULT_LAYER_FX;
  return {
    x: num(t.x, d.x, -3, 3),
    y: num(t.y, d.y, -3, 3),
    scale: num(t.scale, d.scale, 0.05, 6),
    rotation: num(t.rotation, d.rotation, -3600, 3600),
    opacity: num(t.opacity, d.opacity, 0, 1),
    blend: BLEND_MODES.includes(t.blend as BlendMode) ? (t.blend as BlendMode) : "normal",
    visible: typeof t.visible === "boolean" ? t.visible : true,
    tile: num(t.tile, d.tile, 0, 2),
    warp: num(t.warp, d.warp, 0, 1),
    swirl: num(t.swirl, d.swirl, 0, 1),
    ripple: num(t.ripple, d.ripple, 0, 1),
    kaleido: num(t.kaleido, d.kaleido, 0, 1),
    pixelate: num(t.pixelate, d.pixelate, 0, 1),
    bulge: num(t.bulge, d.bulge, -1, 1),
    mirror: num(t.mirror, d.mirror, 0, 1),
    hue: num(t.hue, d.hue, 0, 1),
    saturation: num(t.saturation, d.saturation, 0, 2),
    contrast: num(t.contrast, d.contrast, 0, 2),
    brightness: num(t.brightness, d.brightness, 0, 2),
    invert: num(t.invert, d.invert, 0, 1),
    posterize: num(t.posterize, d.posterize, 0, 1),
    chroma: num(t.chroma, d.chroma, 0, 1),
    edges: num(t.edges, d.edges, 0, 1),
    tintAmount: num(t.tintAmount, d.tintAmount, 0, 1),
    tintColor: color(t.tintColor, d.tintColor),
    spin: num(t.spin, d.spin, -1, 1),
    drift: num(t.drift, d.drift, 0, 1),
    pulse: num(t.pulse, d.pulse, 0, 1),
    shimmer: num(t.shimmer, d.shimmer, 0, 1),
  };
}

export function sanitizeGlobalFx(input: Partial<GlobalFx> | null | undefined): GlobalFx {
  const t = input ?? {};
  const d = DEFAULT_GLOBAL_FX;
  return {
    bgMode: num(t.bgMode, d.bgMode, 0, BG_MODES.length - 1),
    bgA: color(t.bgA, d.bgA),
    bgB: color(t.bgB, d.bgB),
    feedback: num(t.feedback, d.feedback, 0, 1),
    trails: num(t.trails, d.trails, 0, 1),
    fbZoom: num(t.fbZoom, d.fbZoom, -1, 1),
    fbRotate: num(t.fbRotate, d.fbRotate, -1, 1),
    fbHue: num(t.fbHue, d.fbHue, 0, 1),
    warp: num(t.warp, d.warp, 0, 1),
    swirl: num(t.swirl, d.swirl, 0, 1),
    ripple: num(t.ripple, d.ripple, 0, 1),
    zoom: num(t.zoom, d.zoom, 0, 1),
    kaleido: num(t.kaleido, d.kaleido, 0, 1),
    mirror: num(t.mirror, d.mirror, 0, 1),
    chroma: num(t.chroma, d.chroma, 0, 1),
    hueOrbit: num(t.hueOrbit, d.hueOrbit, 0, 1),
    saturation: num(t.saturation, d.saturation, 0, 2),
    contrast: num(t.contrast, d.contrast, 0, 2),
    solarize: num(t.solarize, d.solarize, 0, 1),
    grain: num(t.grain, d.grain, 0, 1),
    scanlines: num(t.scanlines, d.scanlines, 0, 1),
    vignette: num(t.vignette, d.vignette, 0, 1),
    strobe: num(t.strobe, d.strobe, 0, 1),
    speed: num(t.speed, d.speed, 0, 2),
    audioReact: num(t.audioReact, d.audioReact, 0, 1),
    pointerForce: num(t.pointerForce, d.pointerForce, 0, 1),
    pointerSize: num(t.pointerSize, d.pointerSize, 0.02, 1),
    pointerMode: num(t.pointerMode, d.pointerMode, 0, POINTER_MODES.length - 1),
  };
}

export function cleanName(value: string, fallback: string): string {
  const cleaned = value.replace(/\s+/g, " ").trim().slice(0, 80);
  return cleaned || fallback;
}

export function sanitizeScene(input: unknown): Scene {
  const raw = (input ?? {}) as Partial<Scene>;
  const layersRaw = Array.isArray(raw.layers) ? raw.layers.slice(0, MAX_LAYERS) : [];
  return {
    name: cleanName(typeof raw.name === "string" ? raw.name : "", "Untitled"),
    layers: layersRaw
      .filter((l): l is SceneLayer => !!l && typeof l === "object")
      .map((l, index) => ({
        id: typeof l.id === "string" && l.id ? l.id.slice(0, 40) : `layer-${index}`,
        imageId: typeof l.imageId === "string" ? l.imageId.slice(0, 60) : "",
        name: cleanName(typeof l.name === "string" ? l.name : "", "Layer"),
        mediaKind: MEDIA_KINDS.includes(l.mediaKind as MediaKind)
          ? (l.mediaKind as MediaKind)
          : "image",
        fx: sanitizeLayerFx(l.fx),
      })),
    global: sanitizeGlobalFx(raw.global),
  };
}

export function encodeScene(scene: Scene): string {
  return JSON.stringify(scene);
}

export function decodeScene(raw: string): Scene {
  try {
    return sanitizeScene(JSON.parse(raw));
  } catch {
    return sanitizeScene(null);
  }
}
