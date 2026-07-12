import type { MediaKind } from "../shared/types";

const AUDIO_EXT = /\.(mp3|wav|ogg|m4a|aac|flac|opus|wma)$/i;
const IMAGE_EXT = /\.(png|jpe?g|gif|webp|bmp|svg|avif|ico)$/i;
const VIDEO_EXT = /\.(mp4|webm|mov|m4v|avi|mkv|ogv)$/i;

export function classifyFile(file: File): MediaKind {
  const type = file.type.toLowerCase();
  if (type.startsWith("video/")) return "video";
  if (type.startsWith("audio/")) return "audio";
  if (type.startsWith("image/")) return "image";
  if (AUDIO_EXT.test(file.name)) return "audio";
  if (IMAGE_EXT.test(file.name)) return "image";
  if (VIDEO_EXT.test(file.name)) return "video";
  return "data";
}

export function classifyBlob(blob: Blob, name = ""): MediaKind {
  return classifyFile(new File([blob], name || "file", { type: blob.type }));
}

export function mediaKindLabel(kind: MediaKind): string {
  switch (kind) {
    case "video":
      return "Video";
    case "audio":
      return "Audio";
    case "image":
      return "Image";
    case "data":
      return "Data";
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

export function defaultLayerName(kind: MediaKind, fileName: string): string {
  const stem = fileName.replace(/\.[a-z0-9]+$/i, "").trim();
  return stem || mediaKindLabel(kind);
}

/** First 1MB of an arbitrary file, painted as a 256×256 byte texture. */
export function paintDataBytes(canvas: HTMLCanvasElement, bytes: Uint8Array) {
  const width = 256;
  const height = 256;
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const image = ctx.createImageData(width, height);
  const total = width * height;
  const len = bytes.length;
  for (let i = 0; i < total; i += 1) {
    const a = len ? (bytes[i % len] ?? 0) : (i * 37) & 255;
    const b = len ? (bytes[(i * 3) % len] ?? 0) : (i * 91) & 255;
    const c = len ? (bytes[(i * 7 + 13) % len] ?? 0) : (i * 13) & 255;
    const o = i * 4;
    image.data[o] = a;
    image.data[o + 1] = b;
    image.data[o + 2] = (a ^ c) & 255;
    image.data[o + 3] = 255;
  }
  ctx.putImageData(image, 0, 0);

  const wash = ctx.createLinearGradient(0, 0, width, height);
  wash.addColorStop(0, "rgba(232,230,224,0.1)");
  wash.addColorStop(0.5, "rgba(168,120,128,0.12)");
  wash.addColorStop(1, "rgba(138,134,144,0.1)");
  ctx.fillStyle = wash;
  ctx.fillRect(0, 0, width, height);
}

export function ensureSpectrumCanvas(canvas: HTMLCanvasElement) {
  if (canvas.width !== 640 || canvas.height !== 360) {
    canvas.width = 640;
    canvas.height = 360;
  }
}

export function levelFromSpectrum(spectrum: Uint8Array): number {
  const bins = Math.min(48, spectrum.length);
  let total = 0;
  for (let i = 0; i < bins; i += 1)
    total += spectrum[i] * (1.35 - (i / bins) * 0.55);
  return Math.min(1, total / bins / 190);
}

/** Reactive field used as the layer texture for audio files. */
export function paintAudioVisual(
  canvas: HTMLCanvasElement,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  ensureSpectrumCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  ctx.fillStyle = `rgba(8, 8, 10, ${0.1 + (1 - level) * 0.08})`;
  ctx.fillRect(0, 0, width, height);

  const bins = Math.min(96, spectrum.length);
  const barWidth = width / bins;
  const mid = height * 0.55;
  for (let i = 0; i < bins; i += 1) {
    const sample = spectrum[i] / 255;
    const boost = sample * (0.55 + level * 0.9);
    const h = boost * height * 0.72;
    const hue = 20 + (i / bins) * 40 + time * 12 + level * 30;
    ctx.fillStyle = `hsl(${hue % 360} ${28 + sample * 35}% ${32 + sample * 38}%)`;
    ctx.fillRect(i * barWidth, mid - h * 0.55, Math.max(1, barWidth * 0.82), h);
  }

  const cx = width * 0.5;
  const cy = height * 0.48;
  const radius = Math.min(width, height) * (0.08 + level * 0.18);
  const glow = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius * 2.2);
  glow.addColorStop(0, `hsla(12 45% 62% / ${0.18 + level * 0.35})`);
  glow.addColorStop(1, "hsla(0 0% 0% / 0)");
  ctx.fillStyle = glow;
  ctx.beginPath();
  ctx.arc(cx, cy, radius * 2.2, 0, Math.PI * 2);
  ctx.fill();
}

export function canvasThumb(
  source: CanvasImageSource,
  width: number,
  height: number,
  maxDim = 96,
): string {
  const scale = Math.min(1, maxDim / Math.max(width, height, 1));
  const thumb = document.createElement("canvas");
  thumb.width = Math.max(1, Math.round(width * scale));
  thumb.height = Math.max(1, Math.round(height * scale));
  const ctx = thumb.getContext("2d");
  if (!ctx) return "";
  ctx.drawImage(source, 0, 0, thumb.width, thumb.height);
  return thumb.toDataURL("image/jpeg", 0.7);
}
