// Every edit flows through here: apply to the local doc synchronously (instant
// UI), record an undo/redo entry, and enqueue background persistence. Gestures
// use the transient path at pointer-move rate and commit once on release.

import {
  decodeTransform,
  encodeTransform,
  type Layer,
  type LayerRow,
  type LayerTransform,
  type ProjectDoc,
  type ProjectMeta
} from "../../shared/types";
import { renderThumb } from "../lib/render";
import { seedAsset } from "./assets";
import { pushHistory, resetHistory } from "./history";
import { enqueue, newClientId } from "./persist";
import { getState, setState, updateDoc } from "./store";

export type ImportedImage = { src: string; width: number; height: number; name: string };
export type TransformPatch = Partial<LayerTransform>;

const TRANSIENT_PERSIST_MS = 300;

// ---------------------------------------------------------------------------
// Project lifecycle

export function openProject(meta: ProjectMeta, rows: LayerRow[]): void {
  const byId = new Map(rows.map((row) => [row.id, row]));
  const layers: Layer[] = [];
  const push = (row: LayerRow) => {
    layers.push({
      id: row.id,
      assetId: row.assetId,
      name: row.name,
      ...decodeTransform(row.data)
    });
  };
  for (const id of meta.layerOrder) {
    const row = byId.get(id);
    if (row) {
      push(row);
      byId.delete(id);
    }
  }
  for (const row of byId.values()) push(row);

  setState({
    doc: { id: meta.id, name: meta.name, width: meta.width, height: meta.height, layers },
    selection: [],
    saveError: null
  });
  resetHistory();
  scheduleThumbRefresh();
}

export function closeProject(): void {
  setState({ doc: null, selection: [] });
  resetHistory();
}

// ---------------------------------------------------------------------------
// Selection

export function setSelection(ids: string[]): void {
  setState({ selection: ids });
}

export function toggleSelected(id: string): void {
  const current = getState().selection;
  setSelection(current.includes(id) ? current.filter((s) => s !== id) : [...current, id]);
}

function pruneSelection(removed: Set<string>): void {
  setState({ selection: getState().selection.filter((id) => !removed.has(id)) });
}

// ---------------------------------------------------------------------------
// Transform edits

function patchDocLayers(patches: ReadonlyMap<string, TransformPatch>): void {
  updateDoc((doc) => ({
    ...doc,
    layers: doc.layers.map((layer) => {
      const patch = patches.get(layer.id);
      return patch ? { ...layer, ...patch } : layer;
    })
  }));
}

const transientTimers = new Map<string, number>();

function persistLayerNow(id: string): void {
  const timer = transientTimers.get(id);
  if (timer !== undefined) {
    clearTimeout(timer);
    transientTimers.delete(id);
  }
  const layer = getState().doc?.layers.find((l) => l.id === id);
  if (!layer) return;
  enqueue({ kind: "updateLayer", id, data: encodeTransform(layer) });
}

function persistLayerThrottled(id: string): void {
  if (transientTimers.has(id)) return;
  transientTimers.set(
    id,
    window.setTimeout(() => {
      transientTimers.delete(id);
      persistLayerNow(id);
    }, TRANSIENT_PERSIST_MS)
  );
}

/** High-frequency gesture updates: local apply + throttled persist, no history. */
export function applyTransient(patches: ReadonlyMap<string, TransformPatch>): void {
  patchDocLayers(patches);
  for (const id of patches.keys()) persistLayerThrottled(id);
}

export type TransformChange = { id: string; before: TransformPatch; after: TransformPatch };

function applyAndPersist(entries: Array<{ id: string; patch: TransformPatch }>): void {
  patchDocLayers(new Map(entries.map((e) => [e.id, e.patch])));
  for (const { id } of entries) persistLayerNow(id);
  scheduleThumbRefresh();
}

/** Finalize an edit: apply the end state, persist now, and record history. */
export function commitTransforms(label: string, changes: TransformChange[]): void {
  const real = changes.filter((c) => !shallowEqualPatch(c.before, c.after));
  if (real.length === 0) {
    // Nothing actually changed (e.g. a click without a drag); still flush any
    // throttled transient writes so local and server state match.
    for (const { id } of changes) persistLayerNow(id);
    return;
  }
  applyAndPersist(real.map((c) => ({ id: c.id, patch: c.after })));
  pushHistory({
    label,
    undo: () => applyAndPersist(real.map((c) => ({ id: c.id, patch: c.before }))),
    redo: () => applyAndPersist(real.map((c) => ({ id: c.id, patch: c.after })))
  });
}

function shallowEqualPatch(a: TransformPatch, b: TransformPatch): boolean {
  const keys = new Set([...Object.keys(a), ...Object.keys(b)] as Array<keyof LayerTransform>);
  for (const key of keys) {
    if (!Object.is(a[key], b[key])) return false;
  }
  return true;
}

export function nudgeSelection(dx: number, dy: number): void {
  const { doc, selection } = getState();
  if (!doc || selection.length === 0) return;
  const changes: TransformChange[] = [];
  for (const layer of doc.layers) {
    if (selection.includes(layer.id)) {
      changes.push({
        id: layer.id,
        before: { x: layer.x, y: layer.y },
        after: { x: layer.x + dx, y: layer.y + dy }
      });
    }
  }
  commitTransforms("Nudge", changes);
}

export function toggleVisible(id: string): void {
  const layer = getState().doc?.layers.find((l) => l.id === id);
  if (!layer) return;
  commitTransforms(layer.visible ? "Hide layer" : "Show layer", [
    { id, before: { visible: layer.visible }, after: { visible: !layer.visible } }
  ]);
}

// ---------------------------------------------------------------------------
// Structural edits (add / delete / duplicate / reorder)

type PlacedLayer = { layer: Layer; index: number };

/** Insert layers and enqueue their creation. No history — callers record it. */
function rawInsertLayers(items: PlacedLayer[]): void {
  const doc = getState().doc;
  if (!doc) return;
  const sorted = [...items].sort((a, b) => a.index - b.index);
  const layers = [...doc.layers];
  for (const { layer, index } of sorted) {
    layers.splice(Math.min(index, layers.length), 0, layer);
  }
  updateDoc((d) => ({ ...d, layers }));

  let needsOrder = false;
  for (const { layer, index } of sorted) {
    enqueue({
      kind: "addLayer",
      projectId: doc.id,
      clientId: layer.id,
      // Fresh key per attempt: a redo of the same layer is a new insert.
      clientKey: newClientId("key"),
      name: layer.name,
      data: encodeTransform(layer),
      asset: { ref: layer.assetId }
    });
    if (index < layers.length - 1) needsOrder = true;
  }
  // The server appends new layers; restore mid-stack positions explicitly.
  if (needsOrder) {
    enqueue({ kind: "setOrder", projectId: doc.id, ids: layers.map((l) => l.id) });
  }
  scheduleThumbRefresh();
}

function rawDeleteLayers(ids: string[]): void {
  const doc = getState().doc;
  if (!doc) return;
  const removed = new Set(ids);
  updateDoc((d) => ({ ...d, layers: d.layers.filter((l) => !removed.has(l.id)) }));
  pruneSelection(removed);
  for (const id of ids) enqueue({ kind: "deleteLayer", id });
  scheduleThumbRefresh();
}

function capturePlacement(doc: ProjectDoc, ids: string[]): PlacedLayer[] {
  const items: PlacedLayer[] = [];
  doc.layers.forEach((layer, index) => {
    if (ids.includes(layer.id)) items.push({ layer, index });
  });
  return items;
}

export function deleteSelection(): void {
  const { doc, selection } = getState();
  if (!doc || selection.length === 0) return;
  const items = capturePlacement(doc, selection);
  if (items.length === 0) return;
  const ids = items.map((i) => i.layer.id);
  rawDeleteLayers(ids);
  pushHistory({
    label: "Delete layer",
    undo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    },
    redo: () => rawDeleteLayers(ids)
  });
}

export function duplicateSelection(): void {
  const { doc, selection } = getState();
  if (!doc || selection.length === 0) return;
  const source = capturePlacement(doc, selection);
  if (source.length === 0) return;
  const items: PlacedLayer[] = source.map(({ layer }, i) => ({
    layer: {
      ...layer,
      id: newClientId("layer"),
      name: `${layer.name} copy`,
      x: layer.x + 20,
      y: layer.y + 20
    },
    // Place duplicates together above the topmost source layer.
    index: source[source.length - 1].index + 1 + i
  }));
  const ids = items.map((i) => i.layer.id);
  rawInsertLayers(items);
  setSelection(ids);
  pushHistory({
    label: "Duplicate",
    undo: () => rawDeleteLayers(ids),
    redo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    }
  });
}

export function addImageLayers(images: ImportedImage[], at?: { x: number; y: number }): void {
  const doc = getState().doc;
  if (!doc || images.length === 0) return;
  const items: PlacedLayer[] = images.map((image, i) => {
    const assetId = newClientId("asset");
    seedAsset(assetId, {
      src: image.src,
      paintSrc: image.src,
      width: image.width,
      height: image.height
    });
    const scale = Math.min(1, (doc.width * 0.9) / image.width, (doc.height * 0.9) / image.height);
    const w = Math.max(1, image.width * scale);
    const h = Math.max(1, image.height * scale);
    const cx = (at?.x ?? doc.width / 2) + i * 24;
    const cy = (at?.y ?? doc.height / 2) + i * 24;
    return {
      layer: {
        id: newClientId("layer"),
        assetId,
        name: image.name,
        x: cx - w / 2,
        y: cy - h / 2,
        w,
        h,
        rotation: 0,
        opacity: 1,
        visible: true
      },
      index: doc.layers.length + i
    };
  });

  // New assets ride along on the addLayer op itself.
  const ids = items.map((i) => i.layer.id);
  const insert = () => {
    const current = getState().doc;
    if (!current) return;
    const sorted = [...items].sort((a, b) => a.index - b.index);
    const layers = [...current.layers];
    for (const { layer, index } of sorted) layers.splice(Math.min(index, layers.length), 0, layer);
    updateDoc((d) => ({ ...d, layers }));
    for (const { layer } of sorted) {
      const image = images[items.findIndex((it) => it.layer.id === layer.id)];
      enqueue({
        kind: "addLayer",
        projectId: current.id,
        clientId: layer.id,
        clientKey: newClientId("key"),
        name: layer.name,
        data: encodeTransform(layer),
        asset: { clientId: layer.assetId, src: image.src, width: image.width, height: image.height }
      });
    }
    scheduleThumbRefresh();
  };
  insert();
  setSelection(ids);
  pushHistory({
    label: "Add image",
    undo: () => rawDeleteLayers(ids),
    // Redo re-inserts by asset reference: the asset already exists by then.
    redo: () => {
      rawInsertLayers(items);
      setSelection(ids);
    }
  });
}

export function reorderLayer(fromIndex: number, toIndex: number): void {
  const doc = getState().doc;
  if (!doc || fromIndex === toIndex) return;
  const before = doc.layers.map((l) => l.id);
  const order = [...before];
  const [moved] = order.splice(fromIndex, 1);
  if (moved === undefined) return;
  order.splice(toIndex, 0, moved);

  const applyOrder = (ids: string[]) => {
    updateDoc((d) => {
      const byId = new Map(d.layers.map((l) => [l.id, l]));
      const layers: Layer[] = [];
      for (const id of ids) {
        const layer = byId.get(id);
        if (layer) {
          layers.push(layer);
          byId.delete(id);
        }
      }
      layers.push(...byId.values());
      return { ...d, layers };
    });
    enqueue({ kind: "setOrder", projectId: doc.id, ids: [...ids] });
    scheduleThumbRefresh();
  };

  applyOrder(order);
  pushHistory({
    label: "Reorder layer",
    undo: () => applyOrder(before),
    redo: () => applyOrder(order)
  });
}

// ---------------------------------------------------------------------------
// Naming

export function renameLayer(id: string, name: string): void {
  const doc = getState().doc;
  const layer = doc?.layers.find((l) => l.id === id);
  if (!doc || !layer || layer.name === name) return;
  const apply = (value: string) => {
    updateDoc((d) => ({
      ...d,
      layers: d.layers.map((l) => (l.id === id ? { ...l, name: value } : l))
    }));
    enqueue({ kind: "renameLayer", id, name: value });
  };
  const before = layer.name;
  apply(name);
  pushHistory({ label: "Rename layer", undo: () => apply(before), redo: () => apply(name) });
}

export function renameProject(name: string): void {
  const doc = getState().doc;
  if (!doc || doc.name === name) return;
  updateDoc((d) => ({ ...d, name }));
  enqueue({ kind: "renameProject", id: doc.id, name });
}

// ---------------------------------------------------------------------------
// Thumbnails

let thumbTimer: number | undefined;

export function scheduleThumbRefresh(): void {
  if (typeof window === "undefined") return;
  clearTimeout(thumbTimer);
  thumbTimer = window.setTimeout(() => {
    const doc = getState().doc;
    if (!doc) return;
    renderThumb(doc)
      .then((thumb) => {
        // The doc may have been closed while rendering.
        if (getState().doc?.id === doc.id) {
          enqueue({ kind: "setThumb", id: doc.id, thumb });
        }
      })
      .catch(() => undefined);
  }, 1500);
}
