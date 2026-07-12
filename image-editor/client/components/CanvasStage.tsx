// The canvas: renders the artboard and its layers with CSS transforms (GPU
// compositing keeps drags at frame rate), and owns all pointer gestures —
// select, move, scale, rotate, pan — plus wheel zoom/pan and image drop.

import { useEffect, useRef, useState } from "preact/hooks";
import {
    HANDLES,
    HANDLE_IDS,
    rotationFromPointer,
    scaleFromHandle,
    type HandleId,
} from "../../shared/geometry";
import type { Layer, LayerTransform } from "../../shared/types";
import {
    paintBrushStroke,
    addTextLayer,
    addImageLayers,
    applyTransient,
    commitTransforms,
    cropCanvas,
    cropSelection,
    beginTextEditing,
    finishTextEditing,
    setSelection,
    toggleSelected,
    type TransformChange,
    type TransformPatch,
} from "../state/actions";
import { useAssetEntry, displaySrc } from "../state/assets";
import { noteLayerSrcPresented, registerBrushOverlayClear, beginBrushGesture, endBrushGesture } from "../state/brushOverlay";
import { getState, setState, useEditor } from "../state/store";
import {
    fitDoc,
    screenToWorld,
    setStatePan,
    viewportEl,
    wheelZoomSensitivity,
    zoomAtClient,
} from "../state/view";
import { fileToImportedImage, imageFilesFromDataTransfer } from "../lib/image";

type Gesture =
    | {
          kind: "pan";
          startClientX: number;
          startClientY: number;
          startPanX: number;
          startPanY: number;
      }
    | {
          kind: "move";
          startX: number;
          startY: number;
          starts: Map<string, { x: number; y: number }>;
          moved: boolean;
      }
    | { kind: "scale"; id: string; handle: HandleId; start: LayerTransform }
    | { kind: "rotate"; id: string; start: LayerTransform }
    | { kind: "brush"; lastX: number; lastY: number }
    | { kind: "crop"; startX: number; startY: number };

const HANDLE_CURSORS: Record<HandleId, string> = {
    nw: "nwse-resize",
    n: "ns-resize",
    ne: "nesw-resize",
    e: "ew-resize",
    se: "nwse-resize",
    s: "ns-resize",
    sw: "nesw-resize",
    w: "ew-resize",
};

function pointInsideLayer(layer: Layer, point: { x: number; y: number }): boolean {
    const cx = layer.x + layer.w / 2;
    const cy = layer.y + layer.h / 2;
    const angle = -layer.rotation * Math.PI / 180;
    const dx = point.x - cx;
    const dy = point.y - cy;
    const localX = dx * Math.cos(angle) - dy * Math.sin(angle);
    const localY = dx * Math.sin(angle) + dy * Math.cos(angle);
    return Math.abs(localX) <= layer.w / 2 && Math.abs(localY) <= layer.h / 2;
}

function LayerView({
    layer,
    previewBlend,
    editing,
}: {
    layer: Layer;
    previewBlend?: string;
    editing?: boolean;
}) {
    const asset = useAssetEntry(layer.assetId);
    const targetSrc = asset ? displaySrc(asset) : null;
    // Keep the previous bitmap visible until the next one is decoded so asset
    // swaps (brush commits) don't blank the layer for a frame.
    const [drawnSrc, setDrawnSrc] = useState<string | null>(targetSrc);
    useEffect(() => {
        if (!targetSrc) {
            setDrawnSrc(null);
            return;
        }
        let alive = true;
        const img = new Image();
        const show = () => {
            if (alive) setDrawnSrc(targetSrc);
        };
        img.onload = show;
        img.onerror = show;
        img.src = targetSrc;
        if (img.complete) show();
        return () => {
            alive = false;
        };
    }, [targetSrc]);
    const src = drawnSrc ?? targetSrc;
    const style = {
        width: layer.w,
        height: layer.h,
        transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg) scaleX(${layer.flipX ? -1 : 1})`,
        opacity: layer.opacity,
        display: layer.visible ? "block" : "none",
        mixBlendMode: previewBlend ?? layer.blendMode,
        visibility: editing ? "hidden" : "visible",
    };
    if (!src) {
        return (
            <div
                data-layerid={layer.id}
                className="absolute left-0 top-0 animate-pulse bg-neutral-500/30"
                style={style}
            />
        );
    }
    return (
        <img
            alt={layer.name}
            data-layerid={layer.id}
            draggable={false}
            className="absolute left-0 top-0 max-w-none select-none"
            src={src}
            style={style}
            onLoad={() => noteLayerSrcPresented(src)}
        />
    );
}

function InlineTextEditor({ layer }: { layer: Layer }) {
    const editing = useEditor((s) => s.textEditing);
    const ref = useRef<HTMLTextAreaElement>(null);
    const text = layer.text;
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        el.focus();
        el.select();
    }, [layer.id]);
    if (!editing || !text || editing.id !== layer.id) return null;
    const padding = Math.max(4, Math.ceil(text.fontSize * 0.14));
    const lines = editing.draft.replace(/\r/g, "").split("\n");
    const rasterWidth = text.rasterWidth ?? layer.w;
    const rasterHeight = text.rasterHeight ?? layer.h;
    const scaleX = rasterWidth > 0 ? layer.w / rasterWidth : 1;
    const scaleY = rasterHeight > 0 ? layer.h / rasterHeight : 1;
    const editWidth = Math.max(rasterWidth, Math.max(...lines.map((line) => Math.max(1, line.length))) * text.fontSize * 0.68 + padding * 2);
    const editHeight = Math.max(rasterHeight, lines.length * text.fontSize * text.lineHeight + padding * 2);
    return (
        <div
            data-text-editor="true"
            className="inline-text-editor-wrap"
            style={{
                left: layer.x,
                top: layer.y,
                width: layer.w,
                height: layer.h,
                transform: `rotate(${layer.rotation}deg)`,
                transformOrigin: "center",
            }}
            onPointerDown={(e: PointerEvent) => e.stopPropagation()}
        >
            <textarea
                ref={ref}
                data-text-editor="true"
                className="inline-text-editor"
                value={editing.draft}
                spellcheck={false}
                wrap="off"
                style={{
                    left: layer.flipX ? layer.w : 0,
                    top: 0,
                    width: editWidth,
                    height: editHeight,
                    padding,
                    transform: `scale(${layer.flipX ? -scaleX : scaleX}, ${scaleY})`,
                    transformOrigin: "0 0",
                    fontFamily: text.fontFamily,
                    fontSize: text.fontSize,
                    fontWeight: text.fontWeight,
                    lineHeight: text.lineHeight,
                    textAlign: text.align,
                    color: text.color,
                }}
                onInput={(e: Event) => setState({ textEditing: { id: layer.id, draft: (e.currentTarget as HTMLTextAreaElement).value } })}
                onBlur={(e: FocusEvent) => {
                    const next = e.relatedTarget as HTMLElement | null;
                    if (next?.closest(".properties-panel, .toolbar-colors, .tool-color-popover")) return;
                    finishTextEditing();
                }}
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.key === "Escape") {
                        e.preventDefault();
                        setState({ textEditing: null });
                        ref.current?.blur();
                    } else if ((e.metaKey || e.ctrlKey) && e.key === "Enter") {
                        e.preventDefault();
                        finishTextEditing();
                    }
                }}
            />
        </div>
    );
}

function SelectionBox({
    layer,
    zoom,
    single,
}: {
    layer: Layer;
    zoom: number;
    single: boolean;
}) {
    const handleSize = 11 / zoom;
    return (
        <div
            className="pointer-events-none absolute left-0 top-0"
            style={{
                width: layer.w,
                height: layer.h,
                transform: `translate(${layer.x}px, ${layer.y}px) rotate(${layer.rotation}deg)`,
            }}
        >
            <div
                className="absolute inset-0 border-sky-400"
                style={{ borderWidth: 1.5 / zoom, borderStyle: "solid" }}
            />
            {single ? (
                <>
                    {/* rotate handle stem + knob */}
                    <div
                        className="absolute bg-sky-400"
                        style={{
                            left: "50%",
                            top: -22 / zoom,
                            width: 1.5 / zoom,
                            height: 22 / zoom,
                            transform: "translateX(-50%)",
                        }}
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
                            cursor: "crosshair",
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
                                cursor: HANDLE_CURSORS[id],
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
    const brushColor = useEditor((s) => s.foregroundColor);
    const brushSize = useEditor((s) => s.brushSize);
    const brushHardness = useEditor((s) => s.brushHardness);
    const brushOpacity = useEditor((s) => s.brushOpacity);
    const brushFlow = useEditor((s) => s.brushFlow);
    const cropRect = useEditor((s) => s.cropRect);
    const snapGuides = useEditor((s) => s.snapGuides);
    const blendPreview = useEditor((s) => s.blendPreview);
    const textEditing = useEditor((s) => s.textEditing);

    const ref = useRef<HTMLDivElement>(null);
    const gestureRef = useRef<Gesture | null>(null);
    const panningRef = useRef(false);
    const brushCanvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        return registerBrushOverlayClear(() => {
            const canvas = brushCanvasRef.current;
            if (!canvas) return;
            canvas.getContext("2d")?.clearRect(0, 0, canvas.width, canvas.height);
        });
    }, []);

    function brushDab(ctx: CanvasRenderingContext2D, x: number, y: number) {
        const radius = brushSize / 2;
        ctx.save();
        ctx.globalAlpha = brushFlow / 100;
        if (brushHardness >= 99) {
            ctx.fillStyle = brushColor;
        } else {
            const gradient = ctx.createRadialGradient(x, y, radius * brushHardness / 100, x, y, radius);
            gradient.addColorStop(0, brushColor);
            gradient.addColorStop(1, `${brushColor}00`);
            ctx.fillStyle = gradient;
        }
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    function brushSegment(ctx: CanvasRenderingContext2D, fromX: number, fromY: number, toX: number, toY: number) {
        const distance = Math.hypot(toX - fromX, toY - fromY);
        const spacing = Math.max(1, brushSize * 0.12);
        const steps = Math.max(1, Math.ceil(distance / spacing));
        for (let i = 1; i <= steps; i += 1) {
            const t = i / steps;
            brushDab(ctx, fromX + (toX - fromX) * t, fromY + (toY - fromY) * t);
        }
    }

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
                    v.zoom * Math.exp(-e.deltaY * wheelZoomSensitivity(v.zoom)),
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

        if (state.textEditing && !target.closest("[data-text-editor]")) {
            finishTextEditing();
            e.preventDefault();
            return;
        }

        if (e.button === 1 || panMode) {
            gestureRef.current = {
                kind: "pan",
                startClientX: e.clientX,
                startClientY: e.clientY,
                startPanX: state.view.panX,
                startPanY: state.view.panY,
            };
            panningRef.current = true;
            el.setPointerCapture(e.pointerId);
            e.preventDefault();
            return;
        }

        const world = screenToWorld(e.clientX, e.clientY);
        const inside = !!state.doc && world.x >= 0 && world.y >= 0 && world.x <= state.doc.width && world.y <= state.doc.height;
        if (tool === "text") {
            if (!inside || !state.doc) return;
            const layerId = target.closest("[data-layerid]")?.getAttribute("data-layerid");
            const layer = state.doc.layers.find((item) => item.id === layerId);
            if (layer?.text) beginTextEditing(layer.id);
            else {
                const id = addTextLayer(world);
                if (id) beginTextEditing(id);
            }
            e.preventDefault();
            return;
        }
        if (tool === "brush") {
            if (!inside || !state.doc) return;
            const canvas = brushCanvasRef.current;
            const ctx = canvas?.getContext("2d");
            if (!canvas || !ctx) return;
            if (canvas.width !== state.doc.width || canvas.height !== state.doc.height) {
                canvas.width = state.doc.width;
                canvas.height = state.doc.height;
            }
            beginBrushGesture();
            brushDab(ctx, world.x, world.y);
            gestureRef.current = { kind: "brush", lastX: world.x, lastY: world.y };
            el.setPointerCapture(e.pointerId);
            e.preventDefault();
            return;
        }
        if (tool === "crop") {
            if (state.selection.length > 1) return;
            gestureRef.current = { kind: "crop", startX: world.x, startY: world.y };
            setState({ cropRect: { x: world.x, y: world.y, w: 0, h: 0 } });
            el.setPointerCapture(e.pointerId);
            e.preventDefault();
            return;
        }

        const handle = target
            .closest("[data-handle]")
            ?.getAttribute("data-handle");
        if (handle && state.selection.length === 1) {
            const layer = state.doc?.layers.find(
                (l) => l.id === state.selection[0],
            );
            if (layer) {
                const start: LayerTransform = { ...layer };
                gestureRef.current =
                    handle === "rot"
                        ? { kind: "rotate", id: layer.id, start }
                        : {
                              kind: "scale",
                              id: layer.id,
                              handle: handle as HandleId,
                              start,
                          };
                el.setPointerCapture(e.pointerId);
                e.preventDefault();
                return;
            }
        }

        const layerId = target
            .closest("[data-layerid]")
            ?.getAttribute("data-layerid");
        if (layerId) {
            if (e.shiftKey) {
                toggleSelected(layerId);
                return;
            }
            if (!state.selection.includes(layerId)) {
                setSelection([layerId]);
            }
            const selected = getState().selection;
            const starts = new Map<string, { x: number; y: number }>();
            for (const layer of getState().doc?.layers ?? []) {
                if (selected.includes(layer.id))
                    starts.set(layer.id, { x: layer.x, y: layer.y });
            }
            gestureRef.current = {
                kind: "move",
                startX: world.x,
                startY: world.y,
                starts,
                moved: false,
            };
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
                gesture.startPanY + (e.clientY - gesture.startClientY),
            );
            return;
        }

        const world = screenToWorld(e.clientX, e.clientY);

        if (gesture.kind === "brush") {
            const ctx = brushCanvasRef.current?.getContext("2d");
            if (!ctx) return;
            const x = Math.max(0, Math.min(doc.width, world.x));
            const y = Math.max(0, Math.min(doc.height, world.y));
            brushSegment(ctx, gesture.lastX, gesture.lastY, x, y);
            gesture.lastX = x;
            gesture.lastY = y;
            return;
        }

        if (gesture.kind === "crop") {
            const x = world.x;
            const y = world.y;
            setState({ cropRect: { x: Math.min(gesture.startX, x), y: Math.min(gesture.startY, y), w: Math.abs(x - gesture.startX), h: Math.abs(y - gesture.startY) } });
            return;
        }

        if (gesture.kind === "move") {
            const dx = world.x - gesture.startX;
            const dy = world.y - gesture.startY;
            if (!gesture.moved && Math.hypot(dx, dy) * getState().view.zoom < 2)
                return;
            gesture.moved = true;
            let snappedDx = dx;
            let snappedDy = dy;
            const moving = [...gesture.starts.keys()];
            const current = getState().doc?.layers ?? [];
            const boxes = current.filter((l) => moving.includes(l.id)).map((l) => {
                const start = gesture.starts.get(l.id)!;
                return { x: start.x + dx, y: start.y + dy, w: l.w, h: l.h };
            });
            const group = { x: Math.min(...boxes.map((b) => b.x)), y: Math.min(...boxes.map((b) => b.y)), r: Math.max(...boxes.map((b) => b.x + b.w)), b: Math.max(...boxes.map((b) => b.y + b.h)) };
            const xAnchors = [group.x, (group.x + group.r) / 2, group.r];
            const yAnchors = [group.y, (group.y + group.b) / 2, group.b];
            const others = current.filter((l) => !moving.includes(l.id) && l.visible);
            const targetX = [0, doc.width / 2, doc.width, ...others.flatMap((l) => [l.x, l.x + l.w / 2, l.x + l.w])];
            const targetY = [0, doc.height / 2, doc.height, ...others.flatMap((l) => [l.y, l.y + l.h / 2, l.y + l.h])];
            const threshold = 6 / getState().view.zoom;
            let offsetX = threshold + 1;
            let offsetY = threshold + 1;
            let guideX: number | undefined;
            let guideY: number | undefined;
            for (const anchor of xAnchors) for (const target of targetX) if (Math.abs(target - anchor) < Math.abs(offsetX)) { offsetX = target - anchor; guideX = target; }
            for (const anchor of yAnchors) for (const target of targetY) if (Math.abs(target - anchor) < Math.abs(offsetY)) { offsetY = target - anchor; guideY = target; }
            if (Math.abs(offsetX) <= threshold) snappedDx += offsetX; else guideX = undefined;
            if (Math.abs(offsetY) <= threshold) snappedDy += offsetY; else guideY = undefined;
            setState({ snapGuides: guideX === undefined && guideY === undefined ? null : { x: guideX, y: guideY } });
            const patches = new Map<string, TransformPatch>();
            for (const [id, start] of gesture.starts) {
                patches.set(id, { x: start.x + snappedDx, y: start.y + snappedDy });
            }
            applyTransient(patches);
            return;
        }

        if (gesture.kind === "scale") {
            const next = scaleFromHandle(
                gesture.start,
                gesture.handle,
                world,
                e.shiftKey,
            );
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
        setState({ snapGuides: null });
        if (!gesture || gesture.kind === "pan") return;

        if (gesture.kind === "brush") {
            endBrushGesture();
            const canvas = brushCanvasRef.current;
            if (canvas) {
                const src = canvas.toDataURL("image/png");
                void paintBrushStroke(src, brushOpacity / 100);
            }
            return;
        }
        if (gesture.kind === "crop") {
            const rect = getState().cropRect;
            if (!rect || rect.w < 2 || rect.h < 2) {
                setState({ cropRect: null });
                return;
            }
            if (getState().selection.length === 1) void cropSelection();
            else cropCanvas();
            return;
        }

        const layers = getState().doc?.layers ?? [];
        const byId = new Map(layers.map((l) => [l.id, l]));

        if (gesture.kind === "move") {
            if (!gesture.moved) return;
            const changes: TransformChange[] = [];
            for (const [id, start] of gesture.starts) {
                const layer = byId.get(id);
                if (layer) {
                    changes.push({
                        id,
                        before: start,
                        after: { x: layer.x, y: layer.y },
                    });
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
                {
                    id: layer.id,
                    before: { x, y, w, h },
                    after: { x: layer.x, y: layer.y, w: layer.w, h: layer.h },
                },
            ]);
            return;
        }
        commitTransforms("Rotate", [
            {
                id: layer.id,
                before: { rotation: gesture.start.rotation },
                after: { rotation: layer.rotation },
            },
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

    function onDoubleClick(e: MouseEvent) {
        const state = getState();
        const layerId = (e.target as HTMLElement).closest("[data-layerid]")?.getAttribute("data-layerid");
        const direct = state.doc?.layers.find((item) => item.id === layerId && item.text);
        const world = screenToWorld(e.clientX, e.clientY);
        const layer = direct ?? [...(state.doc?.layers ?? [])].reverse().find((item) => item.visible && item.text && pointInsideLayer(item, world));
        if (layer?.text) {
            e.preventDefault();
            beginTextEditing(layer.id);
        }
    }

    const selectedLayers = doc.layers.filter(
        (l) => selection.includes(l.id) && l.visible,
    );
    const cursor = panMode
        ? panningRef.current
            ? "grabbing"
            : "grab"
        : tool === "brush" || tool === "crop" || tool === "text" ? "crosshair" : "default";

    return (
        <div
            ref={ref}
            className="canvas-dots canvas-stage"
            style={{ cursor }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            onPointerCancel={onPointerUp}
            onDblClick={onDoubleClick}
            onDragOver={(e: DragEvent) => e.preventDefault()}
            onDrop={(e: DragEvent) => void onDrop(e)}
        >
            <div
                className="absolute left-0 top-0"
                style={{
                    transform: `translate(${view.panX}px, ${view.panY}px) scale(${view.zoom})`,
                    transformOrigin: "0 0",
                }}
            >
                <div
                    className="checker artboard"
                    style={{
                        width: doc.width,
                        height: doc.height,
                    }}
                >
                    {doc.layers.map((layer) => (
                        <LayerView key={layer.id} layer={layer} editing={textEditing?.id === layer.id} previewBlend={blendPreview && selection.includes(layer.id) ? blendPreview : undefined} />
                    ))}
                    <canvas ref={brushCanvasRef} className="brush-overlay" style={{ opacity: brushOpacity / 100 }} />
                    {textEditing ? doc.layers.filter((layer) => layer.id === textEditing.id).map((layer) => <InlineTextEditor key={layer.id} layer={layer} />) : null}
                </div>
                {!textEditing && (tool === "move" || tool === "text") ? selectedLayers.map((layer) => (
                    <SelectionBox
                        key={layer.id}
                        layer={layer}
                        zoom={view.zoom}
                        single={tool === "move" && selectedLayers.length === 1}
                    />
                )) : tool === "crop" ? selectedLayers.map((layer) => (
                    <SelectionBox key={layer.id} layer={layer} zoom={view.zoom} single={false} />
                )) : null}
                {snapGuides?.x !== undefined ? <div className="snap-guide vertical" style={{ left: snapGuides.x, height: doc.height }} /> : null}
                {snapGuides?.y !== undefined ? <div className="snap-guide horizontal" style={{ top: snapGuides.y, width: doc.width }} /> : null}
                {tool === "crop" && cropRect ? (
                    <div className="crop-box" style={{ left: cropRect.x, top: cropRect.y, width: cropRect.w, height: cropRect.h, borderWidth: 1.5 / view.zoom }}>
                        <span style={{ fontSize: 11 / view.zoom, padding: `${2 / view.zoom}px ${5 / view.zoom}px` }}>{Math.round(cropRect.w)} × {Math.round(cropRect.h)}</span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}
