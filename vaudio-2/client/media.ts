import { AUDIO_VISUAL_IDS, type AudioVisualId, type MediaKind } from "../shared/types";

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
    case "camera":
      return "Camera";
    case "mic":
      return "Mic line";
    case "generator":
      return "Generator";
    default: {
      const _exhaustive: never = kind;
      return _exhaustive;
    }
  }
}

export const AUDIO_VISUAL_LABELS: Record<AudioVisualId, string> = {
  classic: "Ember bars",
  bars: "Wave bars",
  radial: "Radial pulse",
  tunnel: "Signal tunnel",
  lattice: "Bass lattice",
  ribbons: "Ribbon field",
  bloom: "Orb bloom",
  shards: "Hard shards",
  plasma: "Acid plasma",
};

export function randomAudioVisual(exclude?: AudioVisualId): AudioVisualId {
  // "classic" is the legacy default — never what a shuffle should land on.
  const pool = AUDIO_VISUAL_IDS.filter(
    (id) => id !== exclude && id !== "classic",
  );
  return pool[Math.floor(Math.random() * pool.length)] ?? "bars";
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

let ambientBins = new Uint8Array(128);
let mixedBins = new Uint8Array(128);

function ensureWorkBins(length: number) {
  if (ambientBins.length !== length) ambientBins = new Uint8Array(length);
  if (mixedBins.length !== length) mixedBins = new Uint8Array(length);
}

/** Synthetic spectrum so visualizers keep moving with no signal. */
function fillAmbientSpectrum(target: Uint8Array, time: number): number {
  let total = 0;
  const n = target.length;
  for (let i = 0; i < n; i += 1) {
    const t = i / Math.max(n - 1, 1);
    const wave =
      0.4 +
      0.28 * Math.sin(time * 0.95 + t * 8.4) +
      0.18 * Math.sin(time * 1.65 + t * 19.5) +
      0.14 * Math.sin(time * 0.33 + t * 3.2 + Math.sin(time * 0.21) * 2.2);
    const bass = Math.exp(-t * 3.4) * (0.5 + 0.5 * Math.sin(time * 1.25));
    const value = Math.round(
      Math.min(255, Math.max(0, (wave * 0.72 + bass * 0.58) * 225)),
    );
    target[i] = value;
    total += value;
  }
  return Math.min(1, total / n / 155);
}

/** Keep a visible floor under a live spectrum so silence never goes blank. */
export function withAmbientFloor(
  spectrum: Uint8Array,
  level: number,
  time: number,
): { spectrum: Uint8Array; level: number } {
  ensureWorkBins(spectrum.length);
  const ambientLevel = fillAmbientSpectrum(ambientBins, time);
  const silence = Math.max(0, Math.min(1, (0.16 - level) / 0.16));
  if (silence < 0.02) {
    return { spectrum, level: Math.max(level, 0.2) };
  }

  for (let i = 0; i < spectrum.length; i += 1) {
    mixedBins[i] = Math.max(
      spectrum[i],
      Math.round(ambientBins[i] * (0.45 + silence * 0.55)),
    );
  }
  return {
    spectrum: mixedBins,
    level: Math.max(level, ambientLevel * (0.35 + silence * 0.45), 0.26),
  };
}

function fade(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  amount: number,
) {
  ctx.fillStyle = `rgba(6, 6, 10, ${amount})`;
  ctx.fillRect(0, 0, width, height);
}

function sampleAt(spectrum: Uint8Array, t: number): number {
  const index = Math.min(
    spectrum.length - 1,
    Math.max(0, Math.floor(t * (spectrum.length - 1))),
  );
  return spectrum[index] / 255;
}

function band(spectrum: Uint8Array, from: number, to: number): number {
  const start = Math.floor(from * spectrum.length);
  const end = Math.max(start + 1, Math.floor(to * spectrum.length));
  let total = 0;
  for (let i = start; i < end; i += 1) total += spectrum[i];
  return total / (end - start) / 255;
}

function paintBars(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.08 + (1 - level) * 0.06);
  const bins = Math.min(96, spectrum.length);
  const barWidth = width / bins;
  const mid = height * 0.55;
  for (let i = 0; i < bins; i += 1) {
    const sample = spectrum[i] / 255;
    const boost = sample * (0.55 + level * 0.9);
    const h = boost * height * 0.72;
    const hue = (i / bins) * 280 + time * 28 + level * 40;
    ctx.fillStyle = `hsl(${hue % 360} ${55 + sample * 45}% ${38 + sample * 42}%)`;
    ctx.fillRect(i * barWidth, mid - h * 0.55, Math.max(1, barWidth * 0.82), h);
  }
}

function paintRadial(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.1 + (1 - level) * 0.05);
  const cx = width * 0.5;
  const cy = height * 0.5;
  const bins = Math.min(72, spectrum.length);
  const maxR = Math.min(width, height) * 0.42;

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(time * 0.35);
  for (let i = 0; i < bins; i += 1) {
    const sample = spectrum[i] / 255;
    const angle = (i / bins) * Math.PI * 2;
    const inner = maxR * (0.18 + level * 0.08);
    const outer = inner + sample * maxR * (0.55 + level * 0.55);
    ctx.beginPath();
    ctx.moveTo(Math.cos(angle) * inner, Math.sin(angle) * inner);
    ctx.lineTo(Math.cos(angle) * outer, Math.sin(angle) * outer);
    ctx.strokeStyle = `hsla(${(i / bins) * 300 + time * 40} 85% ${45 + sample * 40}% / ${0.35 + sample * 0.65})`;
    ctx.lineWidth = 2 + sample * 5;
    ctx.stroke();
  }
  ctx.restore();

  ctx.beginPath();
  ctx.arc(cx, cy, maxR * (0.12 + level * 0.2), 0, Math.PI * 2);
  ctx.fillStyle = `hsla(${(time * 50) % 360} 90% 60% / ${0.12 + level * 0.35})`;
  ctx.fill();
}

function paintTunnel(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.12);
  const cx = width * 0.5;
  const cy = height * 0.5;
  const rings = 18;
  for (let i = rings; i >= 0; i -= 1) {
    const t = i / rings;
    const energy = sampleAt(spectrum, 1 - t) * (0.5 + level);
    const radius =
      Math.min(width, height) *
      (0.05 + t * 0.55 + Math.sin(time * 2.2 + i * 0.4) * 0.02 + energy * 0.08);
    ctx.beginPath();
    ctx.ellipse(
      cx + Math.sin(time * 0.8 + i * 0.2) * energy * 18,
      cy + Math.cos(time * 0.7 + i * 0.15) * energy * 12,
      radius * (width / height),
      radius,
      time * 0.15,
      0,
      Math.PI * 2,
    );
    ctx.strokeStyle = `hsla(${220 + t * 120 + time * 30 + energy * 80} 80% ${35 + energy * 45}% / ${0.15 + energy * 0.7})`;
    ctx.lineWidth = 1.5 + energy * 6;
    ctx.stroke();
  }
}

function paintLattice(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.14);
  const cols = 16;
  const rows = 9;
  const cellW = width / cols;
  const cellH = height / rows;
  const bass = band(spectrum, 0, 0.18);
  const mid = band(spectrum, 0.18, 0.55);
  const high = band(spectrum, 0.55, 1);

  for (let y = 0; y < rows; y += 1) {
    for (let x = 0; x < cols; x += 1) {
      const n = (x + y * cols) / (cols * rows);
      const pulse =
        sampleAt(spectrum, n) * 0.65 +
        bass * (1 - Math.abs(x / cols - 0.5)) +
        mid * Math.sin(time + x * 0.4 + y * 0.3) * 0.25 +
        high * 0.15;
      const size = Math.max(0.08, pulse) * (0.55 + level * 0.7);
      const hue = 80 + n * 220 + time * 25 + bass * 60;
      ctx.fillStyle = `hsla(${hue % 360} 85% ${30 + pulse * 45}% / ${0.2 + pulse * 0.8})`;
      const w = cellW * size;
      const h = cellH * size;
      ctx.fillRect(
        x * cellW + (cellW - w) * 0.5,
        y * cellH + (cellH - h) * 0.5,
        w,
        h,
      );
    }
  }
}

function paintRibbons(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.08 + (1 - level) * 0.05);
  const ribbons = 7;
  for (let r = 0; r < ribbons; r += 1) {
    const baseY = ((r + 1) / (ribbons + 1)) * height;
    ctx.beginPath();
    for (let x = 0; x <= width; x += 6) {
      const t = x / width;
      const sample = sampleAt(spectrum, (t + r * 0.07) % 1);
      const y =
        baseY +
        Math.sin(t * Math.PI * 4 + time * (1.2 + r * 0.15) + r) *
          (18 + level * 40) +
        (sample - 0.5) * height * 0.28;
      if (x === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `hsla(${(r * 42 + time * 35 + level * 50) % 360} 90% 60% / ${0.35 + level * 0.45})`;
    ctx.lineWidth =
      2 + level * 5 + band(spectrum, r / ribbons, (r + 1) / ribbons) * 8;
    ctx.stroke();
  }
}

function paintBloom(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.1);
  const count = 28;
  for (let i = 0; i < count; i += 1) {
    const t = i / count;
    const sample = sampleAt(spectrum, t);
    const orbit = 0.15 + sample * 0.35 + level * 0.12;
    const cx =
      width *
      (0.5 + Math.cos(time * (0.4 + t) + i * 1.7) * orbit * (0.7 + sample));
    const cy =
      height *
      (0.5 +
        Math.sin(time * (0.35 + t * 0.8) + i * 1.3) * orbit * (0.55 + sample));
    const radius = (8 + sample * 48 + level * 24) * (0.6 + (i % 3) * 0.2);
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    const hue = (t * 280 + time * 40 + sample * 90) % 360;
    gradient.addColorStop(0, `hsla(${hue} 95% 70% / ${0.35 + sample * 0.55})`);
    gradient.addColorStop(
      0.55,
      `hsla(${(hue + 40) % 360} 80% 50% / ${0.12 + sample * 0.25})`,
    );
    gradient.addColorStop(1, "hsla(0 0% 0% / 0)");
    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fill();
  }
}

function paintShards(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.16);
  const shards = 24;
  for (let i = 0; i < shards; i += 1) {
    const t = i / shards;
    const sample = sampleAt(spectrum, t);
    const energy = sample * (0.4 + level);
    const x = width * ((Math.sin(i * 12.9898 + time) * 0.5 + 0.5) * 0.9 + 0.05);
    const y =
      height * ((Math.cos(i * 78.233 + time * 0.7) * 0.5 + 0.5) * 0.9 + 0.05);
    const len = 20 + energy * 120;
    const angle = time * (0.8 + t) + i * 0.9 + sample * 3;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(0, -len * 0.15);
    ctx.lineTo(len, 0);
    ctx.lineTo(0, len * 0.15);
    ctx.closePath();
    ctx.fillStyle = `hsla(${(i * 17 + time * 60) % 360} 90% ${40 + energy * 40}% / ${0.25 + energy * 0.7})`;
    ctx.fill();
    ctx.restore();
  }
}

function paintPlasma(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
  fade(ctx, width, height, 0.07);
  const step = 8;
  const bass = band(spectrum, 0, 0.2);
  const mid = band(spectrum, 0.2, 0.6);
  const high = band(spectrum, 0.6, 1);
  for (let y = 0; y < height; y += step) {
    for (let x = 0; x < width; x += step) {
      const u = x / width;
      const v = y / height;
      const wave =
        Math.sin(u * 8 + time * 1.4 + bass * 4) *
          Math.cos(v * 7 - time * 1.1 + mid * 3) *
          0.5 +
        0.5;
      const spark = sampleAt(spectrum, (u + v) * 0.5) * high;
      const value = Math.min(
        1,
        wave * (0.45 + level * 0.4) + spark * 0.55 + bass * 0.2,
      );
      if (value < 0.18) continue;
      const hue = 160 + value * 140 + time * 20 + bass * 50;
      ctx.fillStyle = `hsla(${hue % 360} 85% ${25 + value * 50}% / ${0.15 + value * 0.7})`;
      ctx.fillRect(x, y, step + 1, step + 1);
    }
  }
}

/** Muted bars + glow — the pre-visualizer default kept for old audio layers. */
function paintClassic(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  spectrum: Uint8Array,
  level: number,
  time: number,
) {
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

/** Reactive field used as the layer texture for audio files and the mic line. */
export function paintAudioVisual(
  canvas: HTMLCanvasElement,
  spectrum: Uint8Array,
  level: number,
  time: number,
  visual?: AudioVisualId,
) {
  ensureSpectrumCanvas(canvas);
  const width = canvas.width;
  const height = canvas.height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  switch (visual) {
    case "classic":
      paintClassic(ctx, width, height, spectrum, level, time);
      break;
    case "bars":
      paintBars(ctx, width, height, spectrum, level, time);
      break;
    case "radial":
      paintRadial(ctx, width, height, spectrum, level, time);
      break;
    case "tunnel":
      paintTunnel(ctx, width, height, spectrum, level, time);
      break;
    case "lattice":
      paintLattice(ctx, width, height, spectrum, level, time);
      break;
    case "ribbons":
      paintRibbons(ctx, width, height, spectrum, level, time);
      break;
    case "bloom":
      paintBloom(ctx, width, height, spectrum, level, time);
      break;
    case "shards":
      paintShards(ctx, width, height, spectrum, level, time);
      break;
    case "plasma":
      paintPlasma(ctx, width, height, spectrum, level, time);
      break;
    default:
      paintClassic(ctx, width, height, spectrum, level, time);
      break;
  }
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
