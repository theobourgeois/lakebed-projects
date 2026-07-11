// Pure geometry for moving, scaling, and rotating layers. All math works in
// project ("world") coordinates; rotation is degrees clockwise about the
// layer's center.

import { MIN_LAYER_SIZE, type LayerTransform } from "./types";

export type Point = { x: number; y: number };

export type HandleId = "nw" | "n" | "ne" | "e" | "se" | "s" | "sw" | "w";

/** Handle positions in unit box coordinates (0..1). */
export const HANDLES: Record<HandleId, Point> = {
  nw: { x: 0, y: 0 },
  n: { x: 0.5, y: 0 },
  ne: { x: 1, y: 0 },
  e: { x: 1, y: 0.5 },
  se: { x: 1, y: 1 },
  s: { x: 0.5, y: 1 },
  sw: { x: 0, y: 1 },
  w: { x: 0, y: 0.5 }
};

export const HANDLE_IDS = Object.keys(HANDLES) as HandleId[];

export function isCornerHandle(handle: HandleId): boolean {
  return handle.length === 2;
}

export function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function rotateVec(v: Point, deg: number): Point {
  const rad = degToRad(deg);
  const cos = Math.cos(rad);
  const sin = Math.sin(rad);
  return { x: v.x * cos - v.y * sin, y: v.x * sin + v.y * cos };
}

export function layerCenter(t: LayerTransform): Point {
  return { x: t.x + t.w / 2, y: t.y + t.h / 2 };
}

/** World position of a point given in unit box coordinates (0..1). */
export function unitPointToWorld(t: LayerTransform, unit: Point): Point {
  const center = layerCenter(t);
  const local = { x: (unit.x - 0.5) * t.w, y: (unit.y - 0.5) * t.h };
  const rotated = rotateVec(local, t.rotation);
  return { x: center.x + rotated.x, y: center.y + rotated.y };
}

export function normalizeAngle(deg: number): number {
  let a = deg % 360;
  if (a > 180) a -= 360;
  if (a <= -180) a += 360;
  return a;
}

/**
 * Resize `start` by dragging `handle` to world point `pointer`, keeping the
 * opposite handle fixed. Corner handles scale proportionally unless `free`;
 * edge handles stretch a single axis. Never flips; clamps to MIN_LAYER_SIZE.
 */
export function scaleFromHandle(
  start: LayerTransform,
  handle: HandleId,
  pointer: Point,
  free: boolean
): Pick<LayerTransform, "x" | "y" | "w" | "h"> {
  const h = HANDLES[handle];
  const anchor = { x: 1 - h.x, y: 1 - h.y };
  const anchorWorld = unitPointToWorld(start, anchor);

  // Pointer expressed in the layer's local (unrotated) frame, relative to the anchor.
  const v = rotateVec({ x: pointer.x - anchorWorld.x, y: pointer.y - anchorWorld.y }, -start.rotation);
  const dirX = h.x - anchor.x; // -1, 0, or 1
  const dirY = h.y - anchor.y;

  let w = start.w;
  let hgt = start.h;

  if (isCornerHandle(handle) && !free) {
    // Project the pointer onto the anchor->handle diagonal for a smooth uniform scale.
    const dx = dirX * start.w;
    const dy = dirY * start.h;
    const s = Math.max(
      MIN_LAYER_SIZE / Math.max(start.w, start.h),
      (v.x * dx + v.y * dy) / (dx * dx + dy * dy)
    );
    w = Math.max(MIN_LAYER_SIZE, start.w * s);
    hgt = Math.max(MIN_LAYER_SIZE, start.h * s);
  } else {
    if (dirX !== 0) w = Math.max(MIN_LAYER_SIZE, v.x / dirX);
    if (dirY !== 0) hgt = Math.max(MIN_LAYER_SIZE, v.y / dirY);
  }

  // Reposition so the anchor point stays fixed in world space.
  const centerOffset = rotateVec({ x: (0.5 - anchor.x) * w, y: (0.5 - anchor.y) * hgt }, start.rotation);
  const cx = anchorWorld.x + centerOffset.x;
  const cy = anchorWorld.y + centerOffset.y;
  return { x: cx - w / 2, y: cy - hgt / 2, w, h: hgt };
}

/** Angle for the rotate handle (which sits above the top edge). */
export function rotationFromPointer(start: LayerTransform, pointer: Point, snap: boolean): number {
  const center = layerCenter(start);
  const deg = (Math.atan2(pointer.y - center.y, pointer.x - center.x) * 180) / Math.PI + 90;
  const snapped = snap ? Math.round(deg / 15) * 15 : deg;
  return normalizeAngle(snapped);
}

/** Axis-aligned bounds of a (possibly rotated) layer, for group outlines. */
export function layerAabb(t: LayerTransform): { x: number; y: number; w: number; h: number } {
  const corners = [
    unitPointToWorld(t, { x: 0, y: 0 }),
    unitPointToWorld(t, { x: 1, y: 0 }),
    unitPointToWorld(t, { x: 1, y: 1 }),
    unitPointToWorld(t, { x: 0, y: 1 })
  ];
  const xs = corners.map((c) => c.x);
  const ys = corners.map((c) => c.y);
  const minX = Math.min(...xs);
  const minY = Math.min(...ys);
  return { x: minX, y: minY, w: Math.max(...xs) - minX, h: Math.max(...ys) - minY };
}
