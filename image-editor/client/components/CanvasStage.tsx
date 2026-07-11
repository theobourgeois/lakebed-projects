// The canvas: renders the artboard and its layers with CSS transforms (GPU
// compositing keeps drags at frame rate), and owns all pointer gestures —
// select, move, scale, rotate, pan — plus wheel zoom/pan and image drop.

import { useEffect, useRef } from "preact/hooks";
import {
  HANDLES,
  HANDLE_IDS,
  rotationFromPointer,
  scaleFromHandle,
  type HandleId
} from "../../shared/geometry";
import type { Layer, LayerTransform } from "../../shared/types";
import {
  addImageLayers,
  applyTransient,
  commitTransforms,
  setSelection,
  toggleSelected,
  type TransformChange,
  type TransformPatch
} from "../state/actions";
import { useAssetEntry } from "../state/assets";
import { getState, useEditor } from "../state/store";
import {
  fitDoc,
  screenToWorld,
  setStatePan,
  viewportEl,
  wheelZoomSensitivity,
  zoomAtClient
} from "../state/view";
import { fileToImportedImage, imageFilesFromDataTransfer } from "../lib/image";

type Gesture =
  | { kind: "pan"; startClientX: number; startClientY: number; startPanX: number; startPanY: number }
  | { kind: "move"; startX: number; startY: number; starts: Map<string, { x: number; y: number }>; moved: boolean }
  | { kind: "scale"; id: string; handle: HandleId; start: LayerTransform }
  | { kind: "rotate"; id: string; start: LayerTransform };

const HANDLE_CURSORS: Record<HandleId, string> = {
  nw: "nwse-resize",
  n: "ns-resize",
  ne: "nesw-resize",
  e: "ew-resize",
  se: "nwse-resize",
  s: "ns-resize",
  sw: "nesw-resize",
  w: "ew-resize"
};

function LayerView({ layer }: { layer: Layer }) {
  const asset = useAssetEntry(layer.assetId);
  const style = {
    width: layer.w,
    height: layer.h,
    transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg)`,
    opacity: layer.opacity,
    display: layer.visible ? "block" : "none"
  };
  if (!asset) {
    return <div data-layerid={layer.id} className="absolute left-0 top-0 animate-pulse bg-neutral-500/30" style={style} />;
  }
  return (
    <img
      alt={layer.name}
      data-layerid={layer.id}
      draggable={false}
      className="absolute left-0 top-0 max-w-none select-none"
      src={asset.src}
      style={style}
    />
  );
}

function SelectionBox({ layer, zoom, single }: { layer: Layer; zoom: number; single: boolean }) {
  const handleSize = 11 / zoom;
  return (
    <div
      className="pointer-events-none absolute left-0 top-0"
      style={{
        width: layer.w,
        height: layer.h,
        transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg)`
      }}
    >
      <div className="absolute inset-0 border-sky-400" style={{ borderWidth: 1.5 / zoom, borderStyle: "solid" }} />
      {single ? (
        <>
          {/* rotate handle stem + knob */}
          <div
            className="absolute bg-sky-400"
            style={{ left: "50%", top: -22 / zoom, width: 1.5 / zoom, height: 22 / zoom, transform: "translateX(-50%)" }}
          />
          <div
            data-handle="rot"
            className="pointer-events-auto absolute rounded-full border border-sky-500 bg-white"
            style={{
              left: "50%",
              top: -26 / zoom,
              width: handleSize,
              height: handleSize,
              transform: "translate(-50%, -50%)",
              cursor: "crosshair"
            }}
          />
          {HANDLE_IDS.map((id) => (
            <div
              data-handle={id}
              key={id}
              className="pointer-events-auto absolute rounded-[2px] border border-sky-500 bg-white"
              style={{
                left: `${HANDLES[id].x * 100}%`,
                top: `${HANDLES[id].y * 100}%`,
                width: handleSize,
                height: handleSize,
                transform: "translate(-50%, -50%)",
                cursor: HANDLE_CURSORS[id]
              }}
            />
          ))}
        </>
      ) : null}
    </div>
  );
}

export function CanvasStage() {
  const doc = useEditor((s) => s.doc);
  const view = useEditor((s) => s.view);
  const selection = useEditor((s) => s.selection);
  const tool = useEditor((s) => s.tool);
  const spacePan = useEditor((s) => s.spacePan);
  const fitVersion = useEditor((s) => s.fitVersion);

  const ref = useRef<HTMLDivElement>(null);
  const gestureRef = useRef<Gesture | null>(null);
  const panningRef = useRef(false);

  useEffect(() => {
    viewportEl.current = ref.current;
    return () => {
      viewportEl.current = null;
    };
  }, []);

  // Fit the artboard on open and when requested.
  useEffect(() => {
    fitDoc();
  }, [doc?.id, fitVersion]);

  // Wheel must be a non-passive native listener to preventDefault reliably.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const { view: v } = getState();
      if (e.ctrlKey || e.metaKey) {
        zoomAtClient(
          e.clientX,
          e.clientY,
          v.zoom * Math.exp(-e.deltaY * wheelZoomSensitivity(v.zoom))
        );
      } else {
        setStatePan(v.panX - e.deltaX, v.panY - e.deltaY);
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  if (!doc) return null;

  const panMode = tool === "hand" || spacePan;

  function onPointerDown(e: PointerEvent) {
    const el = ref.current;
    if (!el || e.button === 2) return;
    const target = e.target as HTMLElement;
    const state = getState();

    if (e.button === 1 || panMode) {
      gestureRef.current = {
        kind: "pan",
        startClientX: e.clientX,
        startClientY: e.clientY,
        startPanX: state.view.panX,
        startPanY: state.view.panY
      };
      panningRef.current = true;
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
      return;
    }

    const handle = target.closest("[data-handle]")?.getAttribute("data-handle");
    if (handle && state.selection.length === 1) {
      const layer = state.doc?.layers.find((l) => l.id === state.selection[0]);
      if (layer) {
        const start: LayerTransform = { ...layer };
        gestureRef.current =
          handle === "rot"
            ? { kind: "rotate", id: layer.id, start }
            : { kind: "scale", id: layer.id, handle: handle as HandleId, start };
        el.setPointerCapture(e.pointerId);
        e.preventDefault();
        return;
      }
    }

    const layerId = target.closest("[data-layerid]")?.getAttribute("data-layerid");
    if (layerId) {
      if (e.shiftKey) {
        toggleSelected(layerId);
        return;
      }
      if (!state.selection.includes(layerId)) {
        setSelection([layerId]);
      }
      const world = screenToWorld(e.clientX, e.clientY);
      const selected = getState().selection;
      const starts = new Map<string, { x: number; y: number }>();
      for (const layer of getState().doc?.layers ?? []) {
        if (selected.includes(layer.id)) starts.set(layer.id, { x: layer.x, y: layer.y });
      }
      gestureRef.current = { kind: "move", startX: world.x, startY: world.y, starts, moved: false };
      el.setPointerCapture(e.pointerId);
      e.preventDefault();
      return;
    }

    setSelection([]);
  }

  function onPointerMove(e: PointerEvent) {
    const gesture = gestureRef.current;
    if (!gesture) return;

    if (gesture.kind === "pan") {
      setStatePan(
        gesture.startPanX + (e.clientX - gesture.startClientX),
        gesture.startPanY + (e.clientY - gesture.startClientY)
      );
      return;
    }

    const world = screenToWorld(e.clientX, e.clientY);

    if (gesture.kind === "move") {
      const dx = world.x - gesture.startX;
      const dy = world.y - gesture.startY;
      if (!gesture.moved && Math.hypot(dx, dy) * getState().view.zoom < 2) return;
      gesture.moved = true;
      const patches = new Map<string, TransformPatch>();
      for (const [id, start] of gesture.starts) {
        patches.set(id, { x: start.x + dx, y: start.y + dy });
      }
      applyTransient(patches);
      return;
    }

    if (gesture.kind === "scale") {
      const next = scaleFromHandle(gesture.start, gesture.handle, world, e.shiftKey);
      applyTransient(new Map([[gesture.id, next]]));
      return;
    }

    const rotation = rotationFromPointer(gesture.start, world, e.shiftKey);
    applyTransient(new Map([[gesture.id, { rotation }]]));
  }

  function onPointerUp() {
    const gesture = gestureRef.current;
    gestureRef.current = null;
    panningRef.current = false;
    if (!gesture || gesture.kind === "pan") return;

    const layers = getState().doc?.layers ?? [];
    const byId = new Map(layers.map((l) => [l.id, l]));

    if (gesture.kind === "move") {
      if (!gesture.moved) return;
      const changes: TransformChange[] = [];
      for (const [id, start] of gesture.starts) {
        const layer = byId.get(id);
        if (layer) {
          changes.push({ id, before: start, after: { x: layer.x, y: layer.y } });
        }
      }
      commitTransforms("Move", changes);
      return;
    }

    const layer = byId.get(gesture.id);
    if (!layer) return;
    if (gesture.kind === "scale") {
      const { x, y, w, h } = gesture.start;
      commitTransforms("Resize", [
        { id: layer.id, before: { x, y, w, h }, after: { x: layer.x, y: layer.y, w: layer.w, h: layer.h } }
      ]);
      return;
    }
    commitTransforms("Rotate", [
      { id: layer.id, before: { rotation: gesture.start.rotation }, after: { rotation: layer.rotation } }
    ]);
  }

  async function onDrop(e: DragEvent) {
    e.preventDefault();
    const files = imageFilesFromDataTransfer(e.dataTransfer);
    if (files.length === 0) return;
    const at = screenToWorld(e.clientX, e.clientY);
    const images = await Promise.all(files.map(fileToImportedImage));
    addImageLayers(images, at);
  }

  const selectedLayers = doc.layers.filter((l) => selection.includes(l.id) && l.visible);
  const cursor = panMode ? (panningRef.current ? "grabbing" : "grab") : "default";

  return (
    <div
      ref={ref}
      className="canvas-dots canvas-stage"
      style={{ cursor }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onDragOver={(e: DragEvent) => e.preventDefault()}
      onDrop={(e: DragEvent) => void onDrop(e)}
    >
      <div
        className="absolute left-0 top-0"
        style={{ transform: `translate(${view.panX}px, ${view.panY}px) scale(${view.zoom})`, transformOrigin: "0 0" }}
      >
        <div
          className="checker artboard"
          style={{
            width: doc.width,
            height: doc.height
          }}
        >
          {doc.layers.map((layer) => (
            <LayerView key={layer.id} layer={layer} />
          ))}
        </div>
        {selectedLayers.map((layer) => (
          <SelectionBox key={layer.id} layer={layer} zoom={view.zoom} single={selectedLayers.length === 1} />
        ))}
      </div>
      {doc.layers.length === 0 ? (
        <div className="canvas-empty">
          <p>
            Drop images here, or use Add image in the top bar
          </p>
        </div>
      ) : null}
    </div>
  );
}
