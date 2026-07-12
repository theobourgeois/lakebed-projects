// Core document types shared by client and server, plus the JSON codec for
// layer transform data (numbers must be serialized because table columns are
// strings only).

export const DEFAULT_PROJECT_WIDTH = 1280;
export const DEFAULT_PROJECT_HEIGHT = 800;
export const MAX_IMAGE_DIM = 2560;
export const MIN_LAYER_SIZE = 8;
export const MAX_PROJECT_DIM = 8000;
/** Hosted Lakebed maxValueBytes is 65536 — stay under that for inline asset/thumb strings. */
export const MAX_INLINE_SRC_BYTES = 60_000;

export const BLEND_MODES = [
  "normal", "multiply", "screen", "overlay", "darken", "lighten",
  "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion",
  "hue", "saturation", "color", "luminosity"
] as const;
export type BlendMode = (typeof BLEND_MODES)[number];

export type LayerTransform = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** Degrees, clockwise, about the box center. */
  rotation: number;
  /** 0..1 */
  opacity: number;
  visible: boolean;
  flipX: boolean;
  blendMode: BlendMode;
};

export type TextAlign = "left" | "center" | "right";

export type TextLayerData = {
  content: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  align: TextAlign;
  color: string;
  lineHeight: number;
  /** Intrinsic raster dimensions used to preserve layer scale across text rerenders. */
  rasterWidth?: number;
  rasterHeight?: number;
};

export type LayerData = LayerTransform & { text?: TextLayerData };

export type Layer = LayerData & {
  id: string;
  assetId: string;
  name: string;
};

/** The in-memory editing document. layers[0] is the bottom layer. */
export type ProjectDoc = {
  id: string;
  name: string;
  width: number;
  height: number;
  layers: Layer[];
};

export type ProjectMeta = {
  id: string;
  name: string;
  width: number;
  height: number;
  layerOrder: string[];
  updatedAt: string;
};

export type LayerRow = {
  id: string;
  projectId: string;
  assetId: string;
  name: string;
  data: string;
};

export type ProjectThumb = {
  id: string;
  thumb: string;
};

export type AssetPayload = {
  id: string;
  src: string;
  width: number;
  height: number;
};

export type PaintAssetPayload = { src: string };

function finite(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function sanitizeText(input: Partial<TextLayerData> | null | undefined): TextLayerData | undefined {
  if (!input || typeof input.content !== "string") return undefined;
  const align: TextAlign = input.align === "center" || input.align === "right" ? input.align : "left";
  const rasterWidth = finite(input.rasterWidth, 0);
  const rasterHeight = finite(input.rasterHeight, 0);
  return {
    content: input.content.slice(0, 4000),
    fontFamily: typeof input.fontFamily === "string" ? input.fontFamily.slice(0, 80) : "Inter",
    fontSize: clamp(finite(input.fontSize, 48), 6, 500),
    fontWeight: clamp(Math.round(finite(input.fontWeight, 400) / 100) * 100, 100, 900),
    align,
    color: typeof input.color === "string" && /^#[0-9a-f]{6}$/i.test(input.color) ? input.color : "#111111",
    lineHeight: clamp(finite(input.lineHeight, 1.2), 0.6, 3),
    ...(rasterWidth > 0 && rasterHeight > 0 ? { rasterWidth, rasterHeight } : {})
  };
}

export function sanitizeTransform(input: Partial<LayerData> | null | undefined): LayerData {
  const t = input ?? {};
  const text = sanitizeText(t.text);
  return {
    x: finite(t.x, 0),
    y: finite(t.y, 0),
    w: Math.max(MIN_LAYER_SIZE, finite(t.w, MIN_LAYER_SIZE)),
    h: Math.max(MIN_LAYER_SIZE, finite(t.h, MIN_LAYER_SIZE)),
    rotation: finite(t.rotation, 0),
    opacity: clamp(finite(t.opacity, 1), 0, 1),
    visible: typeof t.visible === "boolean" ? t.visible : true,
    flipX: typeof t.flipX === "boolean" ? t.flipX : false,
    blendMode: BLEND_MODES.includes(t.blendMode as BlendMode) ? (t.blendMode as BlendMode) : "normal",
    ...(text ? { text } : {})
  };
}

export function encodeTransform(t: LayerData): string {
  return JSON.stringify(sanitizeTransform(t));
}

export function decodeTransform(raw: string): LayerData {
  try {
    return sanitizeTransform(JSON.parse(raw) as Partial<LayerData>);
  } catch {
    return sanitizeTransform(null);
  }
}

export function decodeStringArray(raw: string): string[] {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((v): v is string => typeof v === "string") : [];
  } catch {
    return [];
  }
}

export function cleanName(value: string, fallback: string): string {
  const cleaned = value.replace(/\s+/g, " ").trim().slice(0, 80);
  return cleaned || fallback;
}
