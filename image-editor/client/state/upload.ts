// Upload large images without stuffing them through Lakebed mutations
// (hosted maxValueBytes is 64KB). Prefer same-origin /assets/upload → S3;
// if that fails, compress to an inline JPEG that fits the DB cap.

import { MAX_INLINE_SRC_BYTES } from "../../shared/types";

export { MAX_INLINE_SRC_BYTES };

export type RemoteAsset = {
  /** Set when upload created a server asset row. */
  assetId?: string;
  src: string;
  width: number;
  height: number;
};

function decodeImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image"));
    img.src = src;
  });
}

/** Shrink/re-encode until the data URL fits the hosted DB value cap. */
export async function compressToInline(
  src: string,
  width: number,
  height: number
): Promise<RemoteAsset> {
  const img = await decodeImage(src);
  let scale = Math.min(1, width / Math.max(1, img.naturalWidth), height / Math.max(1, img.naturalHeight));
  if (!Number.isFinite(scale) || scale <= 0) scale = 1;
  let quality = 0.82;

  for (let attempt = 0; attempt < 16; attempt += 1) {
    const w = Math.max(1, Math.round(img.naturalWidth * scale));
    const h = Math.max(1, Math.round(img.naturalHeight * scale));
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas unavailable");
    ctx.drawImage(img, 0, 0, w, h);
    const next = canvas.toDataURL("image/jpeg", quality);
    if (next.length <= MAX_INLINE_SRC_BYTES) {
      return { src: next, width: w, height: h };
    }
    if (quality > 0.45) quality -= 0.08;
    else {
      scale *= 0.72;
      quality = 0.78;
    }
  }

  throw new Error("Could not compress image under the hosted size limit");
}

async function uploadViaEndpoint(
  projectId: string,
  src: string,
  width: number,
  height: number
): Promise<RemoteAsset> {
  const blob = await (await fetch(src)).blob();
  const contentType = blob.type && blob.type.startsWith("image/") ? blob.type : "image/png";
  const url =
    `/assets/upload?projectId=${encodeURIComponent(projectId)}` +
    `&width=${encodeURIComponent(String(width))}` +
    `&height=${encodeURIComponent(String(height))}`;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": contentType },
    body: blob,
    credentials: "same-origin"
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Upload failed (${response.status}): ${detail.slice(0, 160)}`);
  }
  const payload = (await response.json()) as { assetId?: string; publicUrl?: string };
  if (!payload.assetId || !payload.publicUrl) {
    throw new Error("Upload response missing assetId");
  }
  return { assetId: payload.assetId, src: payload.publicUrl, width, height };
}

/**
 * Ensure an image is addressable as a short asset id / https URL / tiny data URL.
 */
export async function ensureRemoteAsset(
  projectId: string,
  src: string,
  width: number,
  height: number
): Promise<RemoteAsset> {
  if (!projectId) throw new Error("Missing project id for upload");
  if (/^https?:\/\//i.test(src)) {
    return { src, width, height };
  }
  if (!src.startsWith("data:image/")) {
    throw new Error("Image must be a data URL or https URL");
  }
  if (src.length <= MAX_INLINE_SRC_BYTES) {
    return { src, width, height };
  }

  try {
    return await uploadViaEndpoint(projectId, src, width, height);
  } catch (error) {
    console.warn("Endpoint upload failed; compressing inline:", error);
    return compressToInline(src, width, height);
  }
}

/** Shrink a canvas thumb until it fits the hosted DB value cap. */
export function compactThumbDataUrl(canvas: HTMLCanvasElement): string {
  let quality = 0.85;
  let url = canvas.toDataURL("image/jpeg", quality);
  while (url.length > MAX_INLINE_SRC_BYTES && quality > 0.35) {
    quality -= 0.1;
    url = canvas.toDataURL("image/jpeg", quality);
  }
  if (url.length <= MAX_INLINE_SRC_BYTES) return url;

  const scale = Math.sqrt(MAX_INLINE_SRC_BYTES / url.length) * 0.9;
  const small = document.createElement("canvas");
  small.width = Math.max(1, Math.round(canvas.width * scale));
  small.height = Math.max(1, Math.round(canvas.height * scale));
  const ctx = small.getContext("2d");
  if (!ctx) return url.slice(0, MAX_INLINE_SRC_BYTES);
  ctx.drawImage(canvas, 0, 0, small.width, small.height);
  return small.toDataURL("image/jpeg", 0.7);
}
