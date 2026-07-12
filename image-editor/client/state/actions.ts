// Every edit flows through here: apply to the local doc synchronously (instant
// UI), record an undo/redo entry, and enqueue background persistence. Gestures
// use the transient path at pointer-move rate and commit once on release.

import {
  type BlendMode,
  decodeTransform,
  encodeTransform,
  MAX_PROJECT_DIM,
  type Layer,
  type TextLayerData,
  type LayerRow,
  type LayerTransform,
  type ProjectDoc,
  type ProjectMeta
} from "../../shared/types";
import { layerAabb } from "../../shared/geometry";
import { renderThumb } from "../lib/render";
import { getAssetEntry, loadImage, seedAsset, decodeSrc } from "./assets";
import { armBrushOverlayClear, clearBrushOverlayNow } from "./brushOverlay";
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
  setState({ doc: null, selection: [], tool: "move", cropRect: null, snapGuides: null, blendPreview: null, textEditing: null });
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

export function flipSelectionHorizontal(): void {
  const { doc, selection } = getState();
  if (!doc) return;
  commitTransforms("Flip horizontal", doc.layers
    .filter((layer) => selection.includes(layer.id))
    .map((layer) => ({ id: layer.id, before: { flipX: layer.flipX }, after: { flipX: !layer.flipX } })));
}

export function setSelectionBlendMode(blendMode: BlendMode): void {
  const { doc, selection } = getState();
  if (!doc) return;
  commitTransforms("Blend mode", doc.layers
    .filter((layer) => selection.includes(layer.id))
    .map((layer) => ({ id: layer.id, before: { blendMode: layer.blendMode }, after: { blendMode } })));
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

let clipboard: Layer[] = [];

export function copySelection(): void {
  const { doc, selection } = getState();
  if (!doc) return;
  clipboard = doc.layers.filter((layer) => selection.includes(layer.id)).map((layer) => ({ ...layer }));
}

export function cutSelection(): void {
  copySelection();
  deleteSelection();
}

export function pasteClipboard(): void {
  const doc = getState().doc;
  if (!doc || clipboard.length === 0) return;
  const items = clipboard.map((layer, i) => ({
    layer: { ...layer, id: newClientId("layer"), name: `${layer.name} copy`, x: layer.x + 20, y: layer.y + 20 },
    index: doc.layers.length + i
  }));
  clipboard = items.map((item) => ({ ...item.layer }));
  const ids = items.map((item) => item.layer.id);
  rawInsertLayers(items);
  setSelection(ids);
  pushHistory({
    label: "Paste",
    undo: () => rawDeleteLayers(ids),
    redo: () => { rawInsertLayers(items); setSelection(ids); }
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
        visible: true,
        flipX: false,
        blendMode: "normal"
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

type RasterBounds = { x: number; y: number; w: number; h: number };

function replaceLayersWithRaster(ids: string[], image: ImportedImage, bounds: RasterBounds, index: number): void {
  const doc = getState().doc;
  if (!doc) return;
  const oldItems = capturePlacement(doc, ids);
  if (oldItems.length === 0) return;
  const assetId = newClientId("asset");
  const layer: Layer = {
    id: newClientId("layer"), assetId, name: image.name,
    ...bounds, rotation: 0, opacity: 1, visible: true, flipX: false, blendMode: "normal"
  };
  const newItem = { layer, index };
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });

  rawDeleteLayers(ids);
  updateDoc((d) => {
    const layers = [...d.layers];
    layers.splice(Math.min(index, layers.length), 0, layer);
    return { ...d, layers };
  });
  enqueue({
    kind: "addLayer", projectId: doc.id, clientId: layer.id, clientKey: newClientId("key"),
    name: layer.name, data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  enqueue({ kind: "setOrder", projectId: doc.id, ids: getState().doc?.layers.map((l) => l.id) ?? [] });
  setSelection([layer.id]);
  scheduleThumbRefresh();

  pushHistory({
    label: image.name,
    undo: () => { rawDeleteLayers([layer.id]); rawInsertLayers(oldItems); setSelection(ids); },
    redo: () => { rawDeleteLayers(ids); rawInsertLayers([newItem]); setSelection([layer.id]); }
  });
}

export async function combineSelection(): Promise<void> {
  const { doc, selection } = getState();
  if (!doc) return;
  const layers = doc.layers.filter((layer) => selection.includes(layer.id) && layer.visible);
  if (layers.length < 2) return;
  const boxes = layers.map(layerAabb);
  const x = Math.min(...boxes.map((b) => b.x));
  const y = Math.min(...boxes.map((b) => b.y));
  const right = Math.max(...boxes.map((b) => b.x + b.w));
  const bottom = Math.max(...boxes.map((b) => b.y + b.h));
  const width = Math.max(1, Math.ceil(right - x));
  const height = Math.max(1, Math.ceil(bottom - y));
  const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d"); if (!ctx) return;
  let images: HTMLImageElement[];
  try {
    images = await Promise.all(layers.map((l) => loadImage(l.assetId)));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load image pixels";
    window.alert(`Could not combine layers: ${message}`);
    return;
  }
  layers.forEach((layer, i) => {
    const img = images[i];
    ctx.save(); ctx.globalAlpha = layer.opacity; ctx.globalCompositeOperation = layer.blendMode as GlobalCompositeOperation;
    ctx.translate(layer.x + layer.w / 2 - x, layer.y + layer.h / 2 - y);
    ctx.rotate(layer.rotation * Math.PI / 180); ctx.scale(layer.flipX ? -1 : 1, 1);
    ctx.drawImage(img, -layer.w / 2, -layer.h / 2, layer.w, layer.h); ctx.restore();
  });
  const index = Math.min(...doc.layers.map((l, i) => selection.includes(l.id) ? i : Infinity));
  replaceLayersWithRaster(layers.map((l) => l.id), { src: canvas.toDataURL("image/png"), width, height, name: "Combined layers" }, { x, y, w: width, h: height }, index);
}

export async function cropSelection(): Promise<void> {
  const { doc, selection, cropRect } = getState();
  if (!doc || selection.length !== 1 || !cropRect || cropRect.w < 2 || cropRect.h < 2) return;
  const layer = doc.layers.find((l) => l.id === selection[0]);
  if (!layer) return;
  const bounds = layerAabb(layer);
  const x = Math.max(cropRect.x, bounds.x);
  const y = Math.max(cropRect.y, bounds.y);
  const right = Math.min(cropRect.x + cropRect.w, bounds.x + bounds.w);
  const bottom = Math.min(cropRect.y + cropRect.h, bounds.y + bounds.h);
  if (right - x < 2 || bottom - y < 2) {
    window.alert("Draw the crop area over the selected layer.");
    setState({ cropRect: null });
    return;
  }
  const rect = { x, y, w: right - x, h: bottom - y };
  const width = Math.max(1, Math.round(rect.w));
  const height = Math.max(1, Math.round(rect.h));
  const canvas = document.createElement("canvas"); canvas.width = width; canvas.height = height;
  const ctx = canvas.getContext("2d"); if (!ctx) return;
  let img: HTMLImageElement;
  try {
    img = await loadImage(layer.assetId);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load image pixels";
    window.alert(`Could not crop layer: ${message}`);
    setState({ cropRect: null });
    return;
  }
  ctx.globalAlpha = layer.opacity;
  ctx.translate(layer.x + layer.w / 2 - rect.x, layer.y + layer.h / 2 - rect.y);
  ctx.rotate(layer.rotation * Math.PI / 180); ctx.scale(layer.flipX ? -1 : 1, 1);
  ctx.drawImage(img, -layer.w / 2, -layer.h / 2, layer.w, layer.h);
  const index = doc.layers.findIndex((l) => l.id === layer.id);
  replaceLayersWithRaster([layer.id], { src: canvas.toDataURL("image/png"), width, height, name: `${layer.name} cropped` }, rect, index);
  setState({ tool: "move", cropRect: null });
}

export function cropCanvas(): void {
  const { doc, cropRect } = getState();
  if (!doc || !cropRect || cropRect.w < 2 || cropRect.h < 2) return;
  const x = Math.round(cropRect.x);
  const y = Math.round(cropRect.y);
  const width = Math.max(1, Math.min(MAX_PROJECT_DIM, Math.round(cropRect.w)));
  const height = Math.max(1, Math.min(MAX_PROJECT_DIM, Math.round(cropRect.h)));
  const before = {
    width: doc.width,
    height: doc.height,
    positions: doc.layers.map((layer) => ({ id: layer.id, x: layer.x, y: layer.y }))
  };
  const after = {
    width,
    height,
    positions: before.positions.map((layer) => ({ id: layer.id, x: layer.x - x, y: layer.y - y }))
  };

  const apply = (snapshot: typeof before) => {
    updateDoc((current) => ({
      ...current,
      width: snapshot.width,
      height: snapshot.height,
      layers: current.layers.map((layer) => {
        const position = snapshot.positions.find((item) => item.id === layer.id);
        return position ? { ...layer, x: position.x, y: position.y } : layer;
      })
    }));
    enqueue({ kind: "resizeProject", id: doc.id, width: snapshot.width, height: snapshot.height });
    for (const position of snapshot.positions) persistLayerNow(position.id);
    scheduleThumbRefresh();
  };

  apply(after);
  setState({ tool: "move", cropRect: null });
  pushHistory({ label: "Crop canvas", undo: () => apply(before), redo: () => apply(after) });
}

/** Tiny transparent PNG — full-canvas blanks exceed hosted DB value limits. */
const EMPTY_PNG =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==";

function blankLayerAsset(width: number, height: number): { src: string; width: number; height: number } {
  return { src: EMPTY_PNG, width: Math.max(1, width), height: Math.max(1, height) };
}

function applyLayerRaster(
  layerId: string,
  src: string,
  width: number,
  height: number,
  clearText: boolean
): void {
  const assetId = newClientId("asset");
  seedAsset(assetId, { src, paintSrc: src, width, height });
  updateDoc((doc) => ({
    ...doc,
    layers: doc.layers.map((item) => {
      if (item.id !== layerId) return item;
      if (!clearText) return { ...item, assetId };
      const { text: _text, ...rest } = item;
      return { ...rest, assetId };
    })
  }));
  const updated = getState().doc?.layers.find((item) => item.id === layerId);
  if (updated) enqueue({ kind: "updateLayer", id: layerId, data: encodeTransform(updated) });
  enqueue({ kind: "replaceLayerAsset", id: layerId, clientAssetId: assetId, src, width, height });
  scheduleThumbRefresh();
}

/** Transparent document-sized layer at the top of the stack. */
export function addBlankLayer(): string | null {
  const doc = getState().doc;
  if (!doc) return null;
  const image = blankLayerAsset(doc.width, doc.height);
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  const layer: Layer = {
    id: newClientId("layer"),
    assetId,
    name: `Layer ${doc.layers.length + 1}`,
    x: 0,
    y: 0,
    w: doc.width,
    h: doc.height,
    rotation: 0,
    opacity: 1,
    visible: true,
    flipX: false,
    blendMode: "normal"
  };
  const index = doc.layers.length;
  updateDoc((d) => ({ ...d, layers: [...d.layers, layer] }));
  enqueue({
    kind: "addLayer",
    projectId: doc.id,
    clientId: layer.id,
    clientKey: newClientId("key"),
    name: layer.name,
    data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  setSelection([layer.id]);
  scheduleThumbRefresh();
  pushHistory({
    label: "New layer",
    undo: () => rawDeleteLayers([layer.id]),
    redo: () => {
      rawInsertLayers([{ layer, index }]);
      setSelection([layer.id]);
    }
  });
  return layer.id;
}

/** Ensure a paintable layer exists; creates a blank one (no history) when the doc is empty. */
function paintTargetLayer(): { layer: Layer; created: boolean } | null {
  const { doc, selection } = getState();
  if (!doc) return null;
  const selectedId = selection[selection.length - 1];
  const selected = selectedId ? doc.layers.find((layer) => layer.id === selectedId) : undefined;
  if (selected) return { layer: selected, created: false };
  if (doc.layers.length > 0) {
    const top = doc.layers[doc.layers.length - 1];
    setSelection([top.id]);
    return { layer: top, created: false };
  }

  const image = blankLayerAsset(doc.width, doc.height);
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  const layer: Layer = {
    id: newClientId("layer"),
    assetId,
    name: "Layer 1",
    x: 0,
    y: 0,
    w: doc.width,
    h: doc.height,
    rotation: 0,
    opacity: 1,
    visible: true,
    flipX: false,
    blendMode: "normal"
  };
  updateDoc((d) => ({ ...d, layers: [...d.layers, layer] }));
  enqueue({
    kind: "addLayer",
    projectId: doc.id,
    clientId: layer.id,
    clientKey: newClientId("key"),
    name: layer.name,
    data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  setSelection([layer.id]);
  return { layer, created: true };
}

function loadDataUrl(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error("Failed to decode image"));
    img.src = src;
  });
}

/** Composite a document-space brush stroke onto the current layer. */
export async function paintBrushStroke(src: string, opacity = 1): Promise<void> {
  const target = paintTargetLayer();
  if (!target) return;
  const { layer, created } = target;

  let base: HTMLImageElement;
  let stroke: HTMLImageElement;
  try {
    [base, stroke] = await Promise.all([loadImage(layer.assetId), loadDataUrl(src)]);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Could not load layer pixels";
    window.alert(`Could not paint: ${message}`);
    if (created) rawDeleteLayers([layer.id]);
    return;
  }

  const width = Math.max(1, Math.round(layer.w), base.naturalWidth);
  const height = Math.max(1, Math.round(layer.h), base.naturalHeight);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    if (created) rawDeleteLayers([layer.id]);
    return;
  }

  ctx.drawImage(base, 0, 0);
  const cached = getAssetEntry(layer.assetId);
  const beforeSrc = cached?.paintSrc?.startsWith("data:")
    ? cached.paintSrc
    : canvas.toDataURL("image/png");
  const beforeText = layer.text ? { ...layer.text } : undefined;

  ctx.save();
  ctx.globalAlpha = opacity;
  ctx.translate(width / 2, height / 2);
  ctx.scale(width / Math.max(1, layer.w), height / Math.max(1, layer.h));
  if (layer.flipX) ctx.scale(-1, 1);
  ctx.rotate((-layer.rotation * Math.PI) / 180);
  ctx.translate(-(layer.x + layer.w / 2), -(layer.y + layer.h / 2));
  ctx.drawImage(stroke, 0, 0);
  ctx.restore();

  const afterSrc = canvas.toDataURL("image/png");
  const clearText = Boolean(layer.text);
  // Decode before swapping so the layer <img> can paint immediately. The live
  // overlay stays up until LayerView presents this exact src.
  await decodeSrc(afterSrc);
  armBrushOverlayClear(afterSrc);
  applyLayerRaster(layer.id, afterSrc, width, height, clearText);
  // Fallback if the layer isn't visible / fails to mount an <img>.
  window.setTimeout(() => clearBrushOverlayNow(), 2000);

  if (created) {
    const finalLayer = getState().doc?.layers.find((item) => item.id === layer.id);
    if (!finalLayer) return;
    pushHistory({
      label: "Brush stroke",
      undo: () => rawDeleteLayers([layer.id]),
      redo: () => {
        rawInsertLayers([{ layer: finalLayer, index: 0 }]);
        setSelection([layer.id]);
      }
    });
    return;
  }

  pushHistory({
    label: "Brush stroke",
    undo: () => {
      applyLayerRaster(layer.id, beforeSrc, width, height, false);
      if (beforeText) {
        updateDoc((doc) => ({
          ...doc,
          layers: doc.layers.map((item) => (item.id === layer.id ? { ...item, text: beforeText } : item))
        }));
        const updated = getState().doc?.layers.find((item) => item.id === layer.id);
        if (updated) enqueue({ kind: "updateLayer", id: layer.id, data: encodeTransform(updated) });
      }
    },
    redo: () => applyLayerRaster(layer.id, afterSrc, width, height, clearText)
  });
}

function renderTextRaster(text: TextLayerData): { src: string; width: number; height: number } {
  const lines = (text.content || "Text").replace(/\r/g, "").split("\n");
  const measure = document.createElement("canvas").getContext("2d");
  if (!measure) return { src: "", width: 1, height: 1 };
  measure.font = `${text.fontWeight} ${text.fontSize}px ${text.fontFamily}`;
  const padding = Math.max(4, Math.ceil(text.fontSize * 0.14));
  const width = Math.max(1, Math.ceil(Math.max(...lines.map((line) => measure.measureText(line || " ").width)) + padding * 2));
  const linePx = text.fontSize * text.lineHeight;
  const height = Math.max(1, Math.ceil(lines.length * linePx + padding * 2));
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) return { src: "", width: 1, height: 1 };
  ctx.font = `${text.fontWeight} ${text.fontSize}px ${text.fontFamily}`;
  ctx.textBaseline = "top";
  ctx.textAlign = text.align;
  ctx.fillStyle = text.color;
  const x = text.align === "left" ? padding : text.align === "center" ? width / 2 : width - padding;
  lines.forEach((line, index) => ctx.fillText(line || " ", x, padding + index * linePx));
  return { src: canvas.toDataURL("image/png"), width, height };
}

function currentTextDefaults(): TextLayerData {
  const state = getState();
  return {
    content: "Text",
    fontFamily: state.textFontFamily,
    fontSize: state.textFontSize,
    fontWeight: state.textFontWeight,
    align: state.textAlign,
    color: state.foregroundColor,
    lineHeight: state.textLineHeight
  };
}

export function addTextLayer(at: { x: number; y: number }): string | null {
  const doc = getState().doc;
  if (!doc) return null;
  const text = currentTextDefaults();
  const image = renderTextRaster(text);
  if (!image.src) return null;
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  const layer: Layer = {
    id: newClientId("layer"), assetId, name: "Text", text: { ...text, rasterWidth: image.width, rasterHeight: image.height },
    x: at.x, y: at.y, w: image.width, h: image.height,
    rotation: 0, opacity: 1, visible: true, flipX: false, blendMode: "normal"
  };
  updateDoc((d) => ({ ...d, layers: [...d.layers, layer] }));
  enqueue({
    kind: "addLayer", projectId: doc.id, clientId: layer.id, clientKey: newClientId("key"),
    name: layer.name, data: encodeTransform(layer),
    asset: { clientId: assetId, src: image.src, width: image.width, height: image.height }
  });
  setSelection([layer.id]);
  scheduleThumbRefresh();
  pushHistory({
    label: "Add text",
    undo: () => rawDeleteLayers([layer.id]),
    redo: () => { rawInsertLayers([{ layer, index: doc.layers.length }]); setSelection([layer.id]); }
  });
  return layer.id;
}

function applyText(layerId: string, text: TextLayerData): void {
  const layer = getState().doc?.layers.find((item) => item.id === layerId);
  if (!layer) return;
  const image = renderTextRaster(text);
  if (!image.src) return;
  const cachedAsset = getAssetEntry(layer.assetId);
  const oldRasterWidth = layer.text?.rasterWidth ?? cachedAsset?.width ?? layer.w;
  const oldRasterHeight = layer.text?.rasterHeight ?? cachedAsset?.height ?? layer.h;
  const scaleX = oldRasterWidth > 0 ? layer.w / oldRasterWidth : 1;
  const scaleY = oldRasterHeight > 0 ? layer.h / oldRasterHeight : 1;
  const renderedText = { ...text, rasterWidth: image.width, rasterHeight: image.height };
  const assetId = newClientId("asset");
  seedAsset(assetId, { src: image.src, paintSrc: image.src, width: image.width, height: image.height });
  updateDoc((doc) => ({
    ...doc,
    layers: doc.layers.map((item) => item.id === layerId
      ? { ...item, assetId, text: renderedText, w: image.width * scaleX, h: image.height * scaleY }
      : item)
  }));
  const updated = getState().doc?.layers.find((item) => item.id === layerId);
  if (updated) enqueue({ kind: "updateLayer", id: layerId, data: encodeTransform(updated) });
  enqueue({ kind: "replaceLayerAsset", id: layerId, clientAssetId: assetId, src: image.src, width: image.width, height: image.height });
  scheduleThumbRefresh();
}

export function updateTextLayer(layerId: string, patch: Partial<TextLayerData>, label = "Edit text"): void {
  const layer = getState().doc?.layers.find((item) => item.id === layerId);
  if (!layer?.text) return;
  const before = { ...layer.text };
  const after = { ...before, ...patch };
  if (JSON.stringify(before) === JSON.stringify(after)) return;
  applyText(layerId, after);
  pushHistory({ label, undo: () => applyText(layerId, before), redo: () => applyText(layerId, after) });
}

export function beginTextEditing(layerId: string): void {
  const layer = getState().doc?.layers.find((item) => item.id === layerId);
  if (!layer?.text) return;
  setSelection([layerId]);
  setState({ textEditing: { id: layerId, draft: layer.text.content } });
}

export function finishTextEditing(): void {
  const editing = getState().textEditing;
  if (!editing) return;
  setState({ textEditing: null });
  updateTextLayer(editing.id, { content: editing.draft }, "Edit text");
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
