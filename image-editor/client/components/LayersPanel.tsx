// Layers panel: top-first list with visibility toggles, inline rename,
// drag-to-reorder, an opacity slider, and duplicate/delete actions.

import { useRef, useState } from "preact/hooks";
import { cleanName, type Layer } from "../../shared/types";
import {
    addBlankLayer,
    renameLayer,
    reorderLayer,
    setSelection,
    toggleSelected,
    toggleVisible,
} from "../state/actions";
import { useAssetEntry, displaySrc } from "../state/assets";
import { useEditor } from "../state/store";
import { FiEye, FiEyeOff, FiLayers, FiPlus } from "./Icons";
import { PropertiesPanel } from "./PropertiesPanel";

function LayerThumb({ layer }: { layer: Layer }) {
    const asset = useAssetEntry(layer.assetId);
    return (
        <span className="checker layer-thumb">
            {asset ? <img alt="" src={displaySrc(asset)} draggable={false} /> : null}
        </span>
    );
}

function LayerRowView({
    layer,
    displayIndex,
    selected,
    onDragFrom,
    dropMark,
}: {
    layer: Layer;
    displayIndex: number;
    selected: boolean;
    onDragFrom: (slot: number) => void;
    dropMark: "above" | "below" | null;
}) {
    const [editing, setEditing] = useState(false);

    function commitRename(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        renameLayer(layer.id, cleanName(input.value, layer.name));
        setEditing(false);
    }

    return (
        <li
            draggable={!editing}
            data-display-index={displayIndex}
            onDragStart={(e: DragEvent) => {
                e.dataTransfer?.setData("text/plain", String(displayIndex));
                onDragFrom(displayIndex);
            }}
            onClick={(e: MouseEvent) => {
                if (e.shiftKey) toggleSelected(layer.id);
                else setSelection([layer.id]);
            }}
            className={`layer-row ${selected ? "selected" : ""} ${layer.visible ? "" : "hidden"}`}
        >
            {dropMark ? <span className={`drop-mark ${dropMark}`} /> : null}
            <button
                type="button"
                title={layer.visible ? "Hide layer" : "Show layer"}
                onClick={(e: MouseEvent) => {
                    e.stopPropagation();
                    toggleVisible(layer.id);
                }}
                className="visibility"
            >
                {layer.visible ? <FiEye /> : <FiEyeOff />}
            </button>
            <LayerThumb layer={layer} />
            {editing ? (
                <input
                    autoFocus
                    defaultValue={layer.name}
                    onBlur={commitRename}
                    onKeyDown={(e: KeyboardEvent) => {
                        if (e.key === "Enter")
                            (e.currentTarget as HTMLInputElement).blur();
                        if (e.key === "Escape") setEditing(false);
                    }}
                    onClick={(e: MouseEvent) => e.stopPropagation()}
                    className="layer-input"
                />
            ) : (
                <span
                    className="layer-name"
                    onDblClick={() => setEditing(true)}
                >
                    {layer.name}
                </span>
            )}
        </li>
    );
}

export function LayersPanel() {
    const doc = useEditor((s) => s.doc);
    const selection = useEditor((s) => s.selection);
    const [dropSlot, setDropSlot] = useState<number | null>(null);
    const [panelWidth, setPanelWidth] = useState(() => Math.max(220, Math.min(420, Number(localStorage.getItem("image-editor-panel-width")) || 244)));
    const [propertiesHeight, setPropertiesHeight] = useState(() => Math.max(150, Math.min(500, Number(localStorage.getItem("image-editor-properties-height")) || 230)));
    const dragFromRef = useRef<number | null>(null);
    const panelRef = useRef<HTMLElement>(null);

    if (!doc) return null;

    // Display order is top layer first; the doc stores bottom-first.
    const display = [...doc.layers].reverse();
    const count = doc.layers.length;

    function slotFromEvent(e: DragEvent): number {
        const row = (e.target as HTMLElement).closest("[data-display-index]");
        if (!row) return dropSlot ?? 0;
        const index = Number(row.getAttribute("data-display-index"));
        const rect = row.getBoundingClientRect();
        return e.clientY < rect.top + rect.height / 2 ? index : index + 1;
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        const from = dragFromRef.current;
        const slot = dropSlot;
        dragFromRef.current = null;
        setDropSlot(null);
        if (from === null || slot === null) return;
        const adjusted = slot > from ? slot - 1 : slot;
        if (adjusted === from) return;
        // Convert display coordinates (top-first) to doc coordinates (bottom-first).
        reorderLayer(count - 1 - from, count - 1 - adjusted);
    }

    function startResize(kind: "width" | "properties", event: PointerEvent) {
        event.preventDefault();
        const panelTop = panelRef.current?.getBoundingClientRect().top ?? 0;
        const onMove = (e: PointerEvent) => {
            if (kind === "width") setPanelWidth(Math.max(220, Math.min(420, window.innerWidth - e.clientX)));
            else setPropertiesHeight(Math.max(150, Math.min(window.innerHeight * 0.7, e.clientY - panelTop)));
        };
        const onUp = (e: PointerEvent) => {
            onMove(e);
            document.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerup", onUp);
            if (kind === "width") localStorage.setItem("image-editor-panel-width", String(Math.max(220, Math.min(420, window.innerWidth - e.clientX))));
            if (kind === "properties") localStorage.setItem("image-editor-properties-height", String(Math.max(150, Math.min(window.innerHeight * 0.7, e.clientY - panelTop))));
        };
        document.addEventListener("pointermove", onMove);
        document.addEventListener("pointerup", onUp);
    }

    return (
        <aside ref={panelRef} className="layers-panel" style={{ width: panelWidth }}>
            <div className="panel-width-resizer" onPointerDown={(e: PointerEvent) => startResize("width", e)} />
            <PropertiesPanel height={propertiesHeight} />
            <div className="properties-resizer" onPointerDown={(e: PointerEvent) => startResize("properties", e)} />
            <div className="panel-head layers-head">
                <FiLayers />
                <span>Layers</span>
                <button
                    type="button"
                    title="New layer"
                    className="layer-add"
                    onClick={() => addBlankLayer()}
                >
                    <FiPlus />
                </button>
            </div>

            <ul
                className="layer-list"
                onDragOver={(e: DragEvent) => {
                    e.preventDefault();
                    setDropSlot(slotFromEvent(e));
                }}
                onDragLeave={() => setDropSlot(null)}
                onDrop={onDrop}
            >
                {display.map((layer, index) => (
                    <LayerRowView
                        key={layer.id}
                        layer={layer}
                        displayIndex={index}
                        selected={selection.includes(layer.id)}
                        onDragFrom={(slot) => {
                            dragFromRef.current = slot;
                        }}
                        dropMark={
                            dropSlot === index
                                ? "above"
                                : dropSlot === index + 1 && index === count - 1
                                  ? "below"
                                  : null
                        }
                    />
                ))}
                {count === 0 ? (
                    <li className="no-layers">No layers yet.</li>
                ) : null}
            </ul>
        </aside>
    );
}
