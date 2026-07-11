// Write-behind persistence queue: the optimistic engine's backbone.
//
// Every edit is applied to the local doc immediately; the corresponding
// operation is enqueued here and drained in order over the WebSocket.
//
// Guarantees:
// - FIFO: an op that references a layer created by an earlier op always runs
//   after it, so temp client ids can be remapped to server ids on the fly.
// - Coalescing: rapid updates to the same target collapse into one pending op
//   (drag gestures don't flood the server).
// - Delivery: ops that time out (dead socket, reconnect) are retried with
//   backoff forever; addLayer carries an idempotency key so retries never
//   duplicate. Deterministic server rejections are dropped and surfaced.

import { api } from "./api";
import { seedAsset } from "./assets";
import { getState, setState } from "./store";

export type PersistOp =
  | {
      kind: "addLayer";
      projectId: string;
      clientId: string;
      clientKey: string;
      name: string;
      data: string;
      asset: { ref: string } | { clientId: string; src: string; width: number; height: number };
    }
  | { kind: "updateLayer"; id: string; data: string }
  | { kind: "renameLayer"; id: string; name: string }
  | { kind: "deleteLayer"; id: string }
  | { kind: "setOrder"; projectId: string; ids: string[] }
  | { kind: "renameProject"; id: string; name: string }
  | { kind: "setThumb"; id: string; thumb: string };

const OP_TIMEOUT_MS = 10_000;
// Uploads go client → Lakebed → S3; allow more time than a normal metadata write.
const UPLOAD_TIMEOUT_MS = 60_000;
const MAX_BACKOFF_MS = 15_000;

// Temp client id -> server id. Client code only ever sees client ids; the
// translation happens here at execution time.
const layerIds = new Map<string, string>();
const assetIds = new Map<string, string>();

const queue: PersistOp[] = [];
let draining = false;

export function resolveLayerId(id: string): string {
  return layerIds.get(id) ?? id;
}

export function resolveAssetId(id: string): string {
  return assetIds.get(id) ?? id;
}

export function mapAssetId(clientId: string, serverId: string): void {
  if (clientId !== serverId) assetIds.set(clientId, serverId);
}

let nextClientId = 1;
export function newClientId(prefix: string): string {
  return `${prefix}_${Date.now().toString(36)}_${(nextClientId++).toString(36)}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

/** Key for coalescing; ops with the same key replace each other in place. */
function opKey(op: PersistOp): string | null {
  switch (op.kind) {
    case "updateLayer":
      return `updateLayer:${op.id}`;
    case "renameLayer":
      return `renameLayer:${op.id}`;
    case "setOrder":
      return `setOrder:${op.projectId}`;
    case "renameProject":
      return `renameProject:${op.id}`;
    case "setThumb":
      return `setThumb:${op.id}`;
    default:
      return null;
  }
}

export function enqueue(op: PersistOp): void {
  const key = opKey(op);
  if (key) {
    for (let i = queue.length - 1; i >= 0; i -= 1) {
      if (opKey(queue[i]) === key) {
        queue[i] = op;
        syncStatus();
        void drain();
        return;
      }
    }
  }
  queue.push(op);
  syncStatus();
  void drain();
}

export function pendingCount(): number {
  return queue.length + (draining ? 1 : 0);
}

function syncStatus(patch: Partial<{ saveStatus: "saved" | "saving" | "retrying"; saveError: string | null }> = {}): void {
  const busy = queue.length > 0 || draining;
  setState({
    saveStatus: patch.saveStatus ?? (busy ? "saving" : "saved"),
    pendingOps: queue.length + (draining ? 1 : 0),
    ...(patch.saveError !== undefined ? { saveError: patch.saveError } : {})
  });
}

class OpTimeout extends Error {}

function withTimeout<T>(promise: Promise<T>, ms = OP_TIMEOUT_MS): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    const timer = setTimeout(() => reject(new OpTimeout("timed out")), ms);
    promise.then(
      (value) => {
        clearTimeout(timer);
        resolve(value);
      },
      (error) => {
        clearTimeout(timer);
        reject(error);
      }
    );
  });
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function execute(op: PersistOp): Promise<void> {
  switch (op.kind) {
    case "addLayer": {
      const asset =
        "ref" in op.asset
          ? { assetId: resolveAssetId(op.asset.ref) }
          : { src: op.asset.src, width: op.asset.width, height: op.asset.height };
      const timeout = "src" in asset ? UPLOAD_TIMEOUT_MS : OP_TIMEOUT_MS;
      const result = await withTimeout(
        api.addLayer(op.projectId, op.clientKey, op.name, op.data, asset),
        timeout
      );
      if (op.clientId !== result.layerId) layerIds.set(op.clientId, result.layerId);
      const clientAssetId = "ref" in op.asset ? op.asset.ref : op.asset.clientId;
      mapAssetId(clientAssetId, result.assetId);
      if (result.src && "src" in op.asset) {
        seedAsset(clientAssetId, {
          src: result.src,
          paintSrc: op.asset.src.startsWith("data:") ? op.asset.src : undefined,
          width: op.asset.width,
          height: op.asset.height
        });
        seedAsset(result.assetId, {
          src: result.src,
          paintSrc: op.asset.src.startsWith("data:") ? op.asset.src : undefined,
          width: op.asset.width,
          height: op.asset.height
        });
      }
      return;
    }
    case "updateLayer":
      return withTimeout(api.updateLayer(resolveLayerId(op.id), op.data));
    case "renameLayer":
      return withTimeout(api.renameLayer(resolveLayerId(op.id), op.name));
    case "deleteLayer":
      return withTimeout(api.deleteLayer(resolveLayerId(op.id)));
    case "setOrder":
      return withTimeout(api.setLayerOrder(op.projectId, op.ids.map(resolveLayerId)));
    case "renameProject":
      return withTimeout(api.renameProject(op.id, op.name));
    case "setThumb":
      return withTimeout(api.setProjectThumb(op.id, op.thumb));
  }
}

async function drain(): Promise<void> {
  if (draining) return;
  draining = true;
  syncStatus();

  while (queue.length > 0) {
    const op = queue.shift()!;
    let attempt = 0;
    // eslint-disable-next-line no-constant-condition
    while (true) {
      try {
        await execute(op);
        if (attempt > 0) syncStatus({ saveStatus: "saving" });
        break;
      } catch (error) {
        if (error instanceof OpTimeout) {
          // Socket likely died; the transport reconnects on its own. Retry forever.
          attempt += 1;
          syncStatus({ saveStatus: "retrying" });
          await delay(Math.min(MAX_BACKOFF_MS, 500 * 2 ** Math.min(attempt, 5)));
          continue;
        }
        const message = error instanceof Error ? error.message : String(error);
        // "not found" after a retry just means a competing delete already won;
        // the states have converged, so treat it as success.
        if (!/not found/i.test(message)) {
          console.error("Persist op failed, dropping:", op.kind, message);
          syncStatus({ saveError: `${op.kind}: ${message}` });
        }
        break;
      }
    }
  }

  draining = false;
  syncStatus();
}

// Editing commits are enqueued on gesture end and normally flush in
// milliseconds, but warn if the user closes the tab mid-save.
if (typeof window !== "undefined") {
  window.addEventListener("beforeunload", (event) => {
    if (pendingCount() > 0 || getState().saveStatus !== "saved") {
      event.preventDefault();
    }
  });
}
