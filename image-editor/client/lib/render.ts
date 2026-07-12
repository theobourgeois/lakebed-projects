// Flatten a document to a canvas: used for PNG export and project thumbnails.

import type { ProjectDoc } from "../../shared/types";
import { ensureAsset, loadImage } from "../state/assets";
import { compactThumbDataUrl, MAX_INLINE_SRC_BYTES } from "../state/upload";

export async function renderDocToCanvas(doc: ProjectDoc, scale: number): Promise<HTMLCanvasElement> {
  const canvas = document.createElement("canvas");
  canvas.width = Math.max(1, Math.round(doc.width * scale));
  canvas.height = Math.max(1, Math.round(doc.height * scale));
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");

  const visible = doc.layers.filter((layer) => layer.visible && layer.opacity > 0);
  const images = await Promise.all(
    visible.map((layer) => loadImage(layer.assetId).catch(() => null))
  );

  ctx.imageSmoothingQuality = "high";
  visible.forEach((layer, i) => {
    const img = images[i];
    if (!img) return;
    ctx.save();
    ctx.globalAlpha = layer.opacity;
    ctx.globalCompositeOperation = layer.blendMode as GlobalCompositeOperation;
    ctx.translate((layer.x + layer.w / 2) * scale, (layer.y + layer.h / 2) * scale);
    ctx.rotate((layer.rotation * Math.PI) / 180);
    ctx.scale(layer.flipX ? -1 : 1, 1);
    ctx.drawImage(img, (-layer.w / 2) * scale, (-layer.h / 2) * scale, layer.w * scale, layer.h * scale);
    ctx.restore();
  });
  return canvas;
}

export async function downloadPng(doc: ProjectDoc): Promise<void> {
  const canvas = await renderDocToCanvas(doc, 1);
  const url = canvas.toDataURL("image/png");
  const link = document.createElement("a");
  link.href = url;
  link.download = `${doc.name || "image"}.png`;
  link.click();
}

const THUMB_MAX = 360;

async function firstLayerSrc(doc: ProjectDoc): Promise<string | null> {
  for (const layer of doc.layers) {
    if (!layer.visible || layer.opacity <= 0) continue;
    const entry = await ensureAsset(layer.assetId).catch(() => null);
    // Prefer short URLs — data URLs / huge remotes won't fit in the thumb column.
    if (entry?.src && entry.src.length <= MAX_INLINE_SRC_BYTES) return entry.src;
    if (entry?.src?.startsWith("http")) return entry.src;
  }
  return null;
}

export async function renderThumb(doc: ProjectDoc): Promise<string> {
  const visible = doc.layers.filter((layer) => layer.visible && layer.opacity > 0);
  const scale = Math.min(1, THUMB_MAX / Math.max(doc.width, doc.height));

  if (visible.length > 0) {
    const loaded = await Promise.all(
      visible.map((layer) => loadImage(layer.assetId).then(() => true).catch(() => false))
    );
    if (loaded.every((ok) => !ok)) {
      const fallback = await firstLayerSrc(doc);
      if (fallback) return fallback;
      throw new Error("Could not render thumbnail");
    }
  }

  try {
    const canvas = await renderDocToCanvas(doc, scale);
    return compactThumbDataUrl(canvas);
  } catch {
    const fallback = await firstLayerSrc(doc);
    if (fallback) return fallback;
    throw new Error("Could not render thumbnail");
  }
}
