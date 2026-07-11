// Core document types shared by client and server, plus the JSON codec for
// layer transform data (numbers must be serialized because table columns are
// strings only).

export const DEFAULT_PROJECT_WIDTH = 1280;
export const DEFAULT_PROJECT_HEIGHT = 800;
export const MAX_IMAGE_DIM = 2560;
export const MIN_LAYER_SIZE = 8;
export const MAX_PROJECT_DIM = 8000;

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
};

export type Layer = LayerTransform & {
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

function finite(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function sanitizeTransform(input: Partial<LayerTransform> | null | undefined): LayerTransform {
  const t = input ?? {};
  return {
    x: finite(t.x, 0),
    y: finite(t.y, 0),
    w: Math.max(MIN_LAYER_SIZE, finite(t.w, MIN_LAYER_SIZE)),
    h: Math.max(MIN_LAYER_SIZE, finite(t.h, MIN_LAYER_SIZE)),
    rotation: finite(t.rotation, 0),
    opacity: clamp(finite(t.opacity, 1), 0, 1),
    visible: typeof t.visible === "boolean" ? t.visible : true
  };
}

export function encodeTransform(t: LayerTransform): string {
  return JSON.stringify(sanitizeTransform(t));
}

export function decodeTransform(raw: string): LayerTransform {
  try {
    return sanitizeTransform(JSON.parse(raw) as Partial<LayerTransform>);
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
