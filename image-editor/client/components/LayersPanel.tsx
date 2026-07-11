// Layers panel: top-first list with visibility toggles, inline rename,
// drag-to-reorder, an opacity slider, and duplicate/delete actions.

import { useRef, useState } from "preact/hooks";
import { cleanName, type Layer } from "../../shared/types";
import {
    applyTransient,
    commitTransforms,
    deleteSelection,
    duplicateSelection,
    renameLayer,
    reorderLayer,
    setSelection,
    toggleSelected,
    toggleVisible,
    type TransformChange,
} from "../state/actions";
import { useAssetEntry } from "../state/assets";
import { getState, useEditor } from "../state/store";
import { FiCopy, FiEye, FiEyeOff, FiLayers, FiTrash2 } from "./Icons";

function LayerThumb({ layer }: { layer: Layer }) {
    const asset = useAssetEntry(layer.assetId);
    return (
        <span className="checker layer-thumb">
            {asset ? <img alt="" src={asset.src} draggable={false} /> : null}
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
    const dragFromRef = useRef<number | null>(null);
    const opacityBeforeRef = useRef<TransformChange[] | null>(null);

    if (!doc) return null;

    // Display order is top layer first; the doc stores bottom-first.
    const display = [...doc.layers].reverse();
    const count = doc.layers.length;
    const selectedLayers = doc.layers.filter((l) => selection.includes(l.id));
    const opacity =
        selectedLayers.length > 0
            ? selectedLayers[selectedLayers.length - 1].opacity
            : 1;

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

    function onOpacityInput(event: Event) {
        const value =
            Number((event.currentTarget as HTMLInputElement).value) / 100;
        const targets = getState().selection;
        if (targets.length === 0) return;
        if (!opacityBeforeRef.current) {
            const layers = getState().doc?.layers ?? [];
            opacityBeforeRef.current = layers
                .filter((l) => targets.includes(l.id))
                .map((l) => ({
                    id: l.id,
                    before: { opacity: l.opacity },
                    after: { opacity: l.opacity },
                }));
        }
        applyTransient(new Map(targets.map((id) => [id, { opacity: value }])));
    }

    function onOpacityCommit() {
        const changes = opacityBeforeRef.current;
        opacityBeforeRef.current = null;
        if (!changes) return;
        const layers = getState().doc?.layers ?? [];
        for (const change of changes) {
            const layer = layers.find((l) => l.id === change.id);
            if (layer) change.after = { opacity: layer.opacity };
        }
        commitTransforms("Opacity", changes);
    }

    return (
        <aside className="layers-panel">
            <div
                className={`opacity-control ${selectedLayers.length === 0 ? "disabled" : ""}`}
                style={{ "--progress": `${Math.round(opacity * 100)}%` } as Record<string, string>}
            >
                <div className="opacity-label">
                    <span>Opacity</span>
                    <span className="tabular-nums">
                        {Math.round(opacity * 100)}%
                    </span>
                </div>
                <input
                    type="range"
                    min={0}
                    max={100}
                    value={Math.round(opacity * 100)}
                    disabled={selectedLayers.length === 0}
                    onInput={onOpacityInput}
                    onChange={onOpacityCommit}
                />
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

            <div className="panel-actions">
                <button
                    type="button"
                    disabled={selectedLayers.length === 0}
                    onClick={duplicateSelection}
                    title="Duplicate (⌘D)"
                    className="button"
                >
                    <FiCopy />
                    Duplicate
                </button>
                <button
                    type="button"
                    disabled={selectedLayers.length === 0}
                    onClick={deleteSelection}
                    title="Delete (⌫)"
                    className="button danger"
                >
                    <FiTrash2 />
                    Delete
                </button>
            </div>
        </aside>
    );
}
