// Importing images from files: decode, downscale oversized images (data URLs
// are the upload wire format; the server stores them in S3), and report
// natural dimensions.

import { MAX_IMAGE_DIM } from "../../shared/types";
import type { ImportedImage } from "../state/actions";

function readFileAsDataUrl(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Could not read file"));
    reader.readAsDataURL(file);
  });
}

function decodeImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Not a supported image"));
    img.src = src;
  });
}

function baseName(fileName: string): string {
  return fileName.replace(/\.[^.]+$/, "") || "Image";
}

export async function fileToImportedImage(file: File): Promise<ImportedImage> {
  const original = await readFileAsDataUrl(file);
  const img = await decodeImage(original);
  const width = img.naturalWidth;
  const height = img.naturalHeight;
  if (width < 1 || height < 1) {
    throw new Error("Not a supported image");
  }

  const scale = Math.min(1, MAX_IMAGE_DIM / Math.max(width, height));
  if (scale === 1) {
    return { src: original, width, height, name: baseName(file.name) };
  }

  const w = Math.max(1, Math.round(width * scale));
  const h = Math.max(1, Math.round(height * scale));
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  if (!ctx) throw new Error("Canvas unavailable");
  ctx.drawImage(img, 0, 0, w, h);
  // JPEG re-encodes photos compactly; PNG keeps transparency for everything else.
  const src =
    file.type === "image/jpeg" ? canvas.toDataURL("image/jpeg", 0.9) : canvas.toDataURL("image/png");
  return { src, width: w, height: h, name: baseName(file.name) };
}

export function imageFilesFromDataTransfer(dt: DataTransfer | null): File[] {
  if (!dt) return [];
  return [...dt.files].filter((file) => file.type.startsWith("image/"));
}
