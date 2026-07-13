// Scene document types shared by client and server, plus sanitizers and the
// JSON codec. A scene is small (params only) — media blobs live client-side.

export const SCENE_DATA_LIMIT = 60_000;
export const THUMB_LIMIT = 60_000;
export const MAX_LAYERS = 12;

export const MEDIA_KINDS = [
  "image", "video", "audio", "data", "camera", "mic", "generator",
] as const;
export type MediaKind = (typeof MEDIA_KINDS)[number];

/** Live sources capture from the device instead of an IndexedDB blob. */
export function isLiveKind(kind: MediaKind): kind is "camera" | "mic" {
  return kind === "camera" || kind === "mic";
}

export const GENERATOR_IDS = ["gradient", "noise", "grid", "stars", "orbits", "cells"] as const;
export type GeneratorId = (typeof GENERATOR_IDS)[number];

/** Camera looks: motion masks plus temporal history effects. */
export const CAMERA_MODE_IDS = [
  "difference",
  "silhouette",
  "edges",
  "slit",
  "echo",
  "smear",
  "freeze",
] as const;
export type CameraModeId = (typeof CAMERA_MODE_IDS)[number];
/** @deprecated Use CameraModeId — kept as an alias for older call sites. */
export type MotionVisualId = CameraModeId;
export const MOTION_VISUAL_IDS = CAMERA_MODE_IDS;

export type GeneratorSettings = {
  kind: GeneratorId;
  colorA: string;
  colorB: string;
  detail: number;
  speed: number;
};

export type MotionSettings = {
  mode: CameraModeId;
  threshold: number;
  gain: number;
  decay: number;
};

export const DEFAULT_GENERATOR: GeneratorSettings = {
  kind: "gradient",
  colorA: "#12101a",
  colorB: "#a87880",
  detail: 0.5,
  speed: 0.5,
};

export const DEFAULT_MOTION: MotionSettings = {
  mode: "slit",
  threshold: 0.4,
  gain: 0.55,
  decay: 0.55,
};

export const LAYER_MOD_PARAMS = [
  "x", "y", "scale", "rotation", "opacity", "warp", "swirl", "ripple",
  "kaleido", "pixelate", "bulge", "hue", "saturation", "contrast",
  "brightness", "invert", "posterize", "chroma", "edges", "spin", "drift",
  "pulse", "shimmer",
] as const;
export type LayerModParam = (typeof LAYER_MOD_PARAMS)[number];

export const GLOBAL_MOD_PARAMS = [
  "feedback", "trails", "fbZoom", "fbRotate", "fbHue", "warp", "swirl",
  "ripple", "zoom", "kaleido", "mirror", "chroma", "hueOrbit", "saturation",
  "contrast", "solarize", "grain", "scanlines", "vignette", "strobe",
] as const;
export type GlobalModParam = (typeof GLOBAL_MOD_PARAMS)[number];

export type ModulationSourceKind = "audio" | "layer" | "midi" | "gamepad";
export type Modulation = {
  id: string;
  sourceKind: ModulationSourceKind;
  /** Layer id for layer signals; stable input key for MIDI/gamepad controls. */
  sourceId?: string;
  /** Human-readable controller label retained when hardware is disconnected. */
  sourceLabel?: string;
  signal: "level" | "luma" | "motion";
  targetScope: "layer" | "global";
  targetId?: string;
  targetParam: LayerModParam | GlobalModParam;
  /** Signed depth; 1 spans the target parameter's useful range. */
  amount: number;
  /** Center controller values around zero (useful for sticks and bipolar knobs). */
  bipolar?: boolean;
  /** 0 follows immediately, 1 is heavily smoothed. */
  smoothing: number;
};

export const AUDIO_VISUAL_IDS = [
  "classic",
  "bars",
  "radial",
  "tunnel",
  "lattice",
  "ribbons",
  "bloom",
  "shards",
  "plasma",
  "lissajous",
] as const;
export type AudioVisualId = (typeof AUDIO_VISUAL_IDS)[number];

export type AudioVisualSettings = {
  colorA: string;
  colorB: string;
  /** Strength of the two-color remap, 0 preserves the visual's native palette. */
  colorize: number;
  /** Input gain applied before painting, 0.25..2. */
  energy: number;
  /** Spectral resolution / complexity, 0..1. */
  detail: number;
  /** Visual animation rate, 0..2. */
  motion: number;
  /** Persistence of previous painted frames, 0..1. */
  trails: number;
};

export const DEFAULT_AUDIO_VISUAL_SETTINGS: AudioVisualSettings = {
  colorA: "#36e4ff",
  colorB: "#ff4d9d",
  colorize: 0,
  energy: 1,
  detail: 1,
  motion: 1,
  trails: 1,
};

export const AUDIO_MAP_PREVIEWS = ["hidden", "dim"] as const;
export type AudioMapPreview = (typeof AUDIO_MAP_PREVIEWS)[number];
export type AudioMapSettings = {
  /** Strength of the texture-driven displacement, 0..1. */
  amount: number;
  /** Sampling radius used to soften the displacement field, 0..1. */
  blur: number;
  /** Whether the source texture is hidden or faintly composited above the result. */
  preview: AudioMapPreview;
};

export const DEFAULT_AUDIO_MAP: AudioMapSettings = {
  amount: 0.4,
  blur: 0.15,
  preview: "hidden",
};

export const BLEND_MODES = [
  "normal",
  "add",
  "screen",
  "multiply",
  "overlay",
  "difference",
  "lighten",
  "darken",
  "soft-light",
  "hard-light",
  "color-dodge",
  "color-burn",
  "exclusion",
  "subtract",
  "divide",
  "linear-burn",
  "linear-light",
  "vivid-light",
  "pin-light",
  "hard-mix",
  "hue",
  "saturation",
  "color",
  "luminosity",
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
  /** Visualizer style for audio-driven layers (audio files, mic line). */
  visual?: AudioVisualId;
  /** Custom looks are retained independently when switching visualizers. */
  visualSettings?: Partial<Record<AudioVisualId, AudioVisualSettings>>;
  /** When present, the painted audio texture displaces layers below it. */
  audioMap?: AudioMapSettings;
  /** Capture device for live layers; empty/absent means the default device. */
  deviceId?: string;
  generator?: GeneratorSettings;
  /** Temporal camera look (slit-scan, echo grid, etc.); absent means live feed. */
  motion?: MotionSettings;
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
  modulations: Modulation[];
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

function sanitizeGenerator(input: Partial<GeneratorSettings> | null | undefined): GeneratorSettings {
  const value = input ?? {};
  return {
    kind: GENERATOR_IDS.includes(value.kind as GeneratorId)
      ? value.kind as GeneratorId : DEFAULT_GENERATOR.kind,
    colorA: color(value.colorA, DEFAULT_GENERATOR.colorA),
    colorB: color(value.colorB, DEFAULT_GENERATOR.colorB),
    detail: num(value.detail, DEFAULT_GENERATOR.detail, 0, 1),
    speed: num(value.speed, DEFAULT_GENERATOR.speed, 0, 1),
  };
}

function sanitizeMotion(input: Partial<MotionSettings> | null | undefined): MotionSettings {
  const value = input ?? {};
  return {
    mode: CAMERA_MODE_IDS.includes(value.mode as CameraModeId)
      ? value.mode as CameraModeId
      : DEFAULT_MOTION.mode,
    threshold: num(value.threshold, DEFAULT_MOTION.threshold, 0, 1),
    gain: num(value.gain, DEFAULT_MOTION.gain, 0, 1),
    decay: num(value.decay, DEFAULT_MOTION.decay, 0, 1),
  };
}

function sanitizeAudioMap(
  input: Partial<AudioMapSettings> | null | undefined,
): AudioMapSettings {
  const value = input ?? {};
  return {
    amount: num(value.amount, DEFAULT_AUDIO_MAP.amount, 0, 1),
    blur: num(value.blur, DEFAULT_AUDIO_MAP.blur, 0, 1),
    preview: AUDIO_MAP_PREVIEWS.includes(value.preview as AudioMapPreview)
      ? value.preview as AudioMapPreview
      : DEFAULT_AUDIO_MAP.preview,
  };
}

function sanitizeAudioVisualSettings(input: unknown): AudioVisualSettings {
  const value = (input ?? {}) as Partial<AudioVisualSettings>;
  const d = DEFAULT_AUDIO_VISUAL_SETTINGS;
  return {
    colorA: color(value.colorA, d.colorA),
    colorB: color(value.colorB, d.colorB),
    colorize: num(value.colorize, d.colorize, 0, 1),
    energy: num(value.energy, d.energy, 0.25, 2),
    detail: num(value.detail, d.detail, 0, 1),
    motion: num(value.motion, d.motion, 0, 2),
    trails: num(value.trails, d.trails, 0, 1),
  };
}

function sanitizeAudioVisualSettingsMap(
  input: unknown,
): Partial<Record<AudioVisualId, AudioVisualSettings>> | undefined {
  if (!input || typeof input !== "object") return undefined;
  const source = input as Partial<Record<AudioVisualId, unknown>>;
  const entries = AUDIO_VISUAL_IDS
    .filter((id) => source[id] && typeof source[id] === "object")
    .map((id) => [id, sanitizeAudioVisualSettings(source[id])] as const);
  return entries.length
    ? Object.fromEntries(entries) as Partial<Record<AudioVisualId, AudioVisualSettings>>
    : undefined;
}

function sanitizeModulation(input: unknown, index: number): Modulation | null {
  if (!input || typeof input !== "object") return null;
  const value = input as Partial<Modulation>;
  const sourceKinds: ModulationSourceKind[] = ["audio", "layer", "midi", "gamepad"];
  const targetScope = value.targetScope === "global" ? "global" : "layer";
  const validParam = targetScope === "global"
    ? GLOBAL_MOD_PARAMS.includes(value.targetParam as GlobalModParam)
    : LAYER_MOD_PARAMS.includes(value.targetParam as LayerModParam);
  if (!sourceKinds.includes(value.sourceKind as ModulationSourceKind) || !validParam) return null;
  return {
    id: typeof value.id === "string" && value.id ? value.id.slice(0, 40) : `mod-${index}`,
    sourceKind: value.sourceKind as ModulationSourceKind,
    ...(typeof value.sourceId === "string" && value.sourceId
      ? { sourceId: value.sourceId.slice(0, 180) } : {}),
    ...(typeof value.sourceLabel === "string" && value.sourceLabel
      ? { sourceLabel: value.sourceLabel.slice(0, 100) } : {}),
    signal: value.signal === "luma" || value.signal === "motion" ? value.signal : "level",
    targetScope,
    ...(typeof value.targetId === "string" && value.targetId
      ? { targetId: value.targetId.slice(0, 40) } : {}),
    targetParam: value.targetParam as LayerModParam | GlobalModParam,
    amount: num(value.amount, 0.5, -1, 1),
    ...(value.bipolar === true ? { bipolar: true } : {}),
    smoothing: num(value.smoothing, 0.25, 0, 1),
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
      .map((l, index) => {
        // Legacy scenes stored motion cameras as mediaKind "motion".
        const wasMotion = (l as { mediaKind?: string }).mediaKind === "motion";
        const mediaKind: MediaKind = wasMotion
          ? "camera"
          : MEDIA_KINDS.includes(l.mediaKind as MediaKind)
            ? (l.mediaKind as MediaKind)
            : "image";
        const visualSettings = sanitizeAudioVisualSettingsMap(l.visualSettings);
        return {
          id: typeof l.id === "string" && l.id ? l.id.slice(0, 40) : `layer-${index}`,
          imageId: typeof l.imageId === "string" ? l.imageId.slice(0, 60) : "",
          name: cleanName(typeof l.name === "string" ? l.name : "", "Layer"),
          mediaKind,
          ...(AUDIO_VISUAL_IDS.includes(l.visual as AudioVisualId)
            ? { visual: l.visual as AudioVisualId }
            : {}),
          ...((mediaKind === "audio" || mediaKind === "mic") && visualSettings
            ? { visualSettings }
            : {}),
          ...((mediaKind === "audio" || mediaKind === "mic") && l.audioMap
            ? { audioMap: sanitizeAudioMap(l.audioMap) }
            : {}),
          ...(typeof l.deviceId === "string" && l.deviceId
            ? { deviceId: l.deviceId.slice(0, 120) }
            : {}),
          ...(mediaKind === "generator" ? { generator: sanitizeGenerator(l.generator) } : {}),
          ...(mediaKind === "camera" && (wasMotion || l.motion)
            ? { motion: sanitizeMotion(l.motion) }
            : {}),
          fx: sanitizeLayerFx(l.fx),
        };
      }),
    global: sanitizeGlobalFx(raw.global),
    modulations: (Array.isArray(raw.modulations) ? raw.modulations : [])
      .slice(0, 64)
      .map(sanitizeModulation)
      .filter((value): value is Modulation => value !== null),
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
