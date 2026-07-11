// In-memory asset cache. Locally imported images are seeded with a data URL
// (paintSrc) for canvas work; after S3 upload, src becomes the CloudFront URL
// used for <img> display. paintSrc is kept so thumbs/export work without CORS.

import { useEffect, useState } from "preact/hooks";
import { api } from "./api";
import { resolveAssetId } from "./persist";

export type AssetEntry = {
  src: string;
  width: number;
  height: number;
  /** Same-origin/data URL safe for canvas (thumbs, export). */
  paintSrc?: string;
};

const entries = new Map<string, AssetEntry>();
const inflight = new Map<string, Promise<AssetEntry>>();
const images = new Map<string, Promise<HTMLImageElement>>();
const listeners = new Set<() => void>();

function notify(): void {
  for (const listener of [...listeners]) listener();
}

export function seedAsset(id: string, entry: AssetEntry): void {
  const prev = entries.get(id);
  entries.set(id, {
    src: entry.src,
    width: entry.width,
    height: entry.height,
    paintSrc: entry.paintSrc ?? prev?.paintSrc
  });
  images.delete(id);
  notify();
}

export function getAssetEntry(id: string): AssetEntry | null {
  return entries.get(id) ?? entries.get(resolveAssetId(id)) ?? null;
}

export function ensureAsset(id: string): Promise<AssetEntry> {
  const existing = getAssetEntry(id);
  if (existing) return Promise.resolve(existing);
  const pending = inflight.get(id);
  if (pending) return pending;

  const promise = api
    .getAsset(resolveAssetId(id))
    .then((payload) => {
      const prev = entries.get(id);
      const entry: AssetEntry = {
        src: payload.src,
        width: payload.width,
        height: payload.height,
        paintSrc: prev?.paintSrc
      };
      entries.set(id, entry);
      notify();
      return entry;
    })
    .finally(() => {
      inflight.delete(id);
    });
  inflight.set(id, promise);
  return promise;
}

function paintUrl(entry: AssetEntry): string {
  return entry.paintSrc || entry.src;
}

/** Decoded image element for canvas rendering (export, thumbnails). */
export function loadImage(id: string): Promise<HTMLImageElement> {
  const cached = images.get(id);
  if (cached) return cached;
  const promise = ensureAsset(id).then(
    (entry) =>
      new Promise<HTMLImageElement>((resolve, reject) => {
        const src = paintUrl(entry);
        const img = new Image();
        // Remote URLs need CORS for canvas; data URLs do not.
        if (!src.startsWith("data:")) {
          img.crossOrigin = "anonymous";
        }
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error("Failed to decode image"));
        img.src = src;
      })
  );
  images.set(id, promise);
  promise.catch(() => images.delete(id));
  return promise;
}

/** Component hook: returns the asset once available, kicking off a fetch. */
export function useAssetEntry(id: string): AssetEntry | null {
  const [entry, setEntry] = useState<AssetEntry | null>(() => getAssetEntry(id));

  useEffect(() => {
    const check = () => setEntry(getAssetEntry(id));
    check();
    listeners.add(check);
    ensureAsset(id).catch((error) => console.error("Asset load failed:", error));
    return () => {
      listeners.delete(check);
    };
  }, [id]);

  return entry;
}
