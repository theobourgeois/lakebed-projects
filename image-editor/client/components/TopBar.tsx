// Editor chrome: back link, project name, undo/redo, zoom, export, and the
// persistence status indicator fed by the write-behind queue.

import { Link } from "lakebed/client";
import type { ComponentChildren } from "preact";
import { useRef } from "preact/hooks";
import { cleanName } from "../../shared/types";
import { downloadPng } from "../lib/render";
import { addImageLayers, renameProject } from "../state/actions";
import { canRedo, canUndo, redo, undo } from "../state/history";
import { getState, useEditor } from "../state/store";
import { requestFit, zoomBy } from "../state/view";
import { fileToImportedImage } from "../lib/image";
import {
    FiArrowLeft,
    FiDownload,
    FiImage,
    FiMinus,
    FiPlus,
    FiRedo2,
    FiUndo2,
} from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

function IconButton({
    label,
    onClick,
    disabled,
    children,
}: {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    children: ComponentChildren;
}) {
    return (
        <button
            type="button"
            title={label}
            aria-label={label}
            disabled={disabled}
            onClick={onClick}
            className="icon-button"
        >
            {children}
        </button>
    );
}

export function TopBar() {
    const doc = useEditor((s) => s.doc);
    const zoom = useEditor((s) => s.view.zoom);
    useEditor((s) => s.histVersion);
    const fileRef = useRef<HTMLInputElement>(null);

    if (!doc) return null;

    async function onFiles(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        const files = [...(input.files ?? [])];
        input.value = "";
        if (files.length === 0) return;
        const images = await Promise.all(files.map(fileToImportedImage));
        addImageLayers(images);
    }

    function commitName(event: Event) {
        const input = event.currentTarget as HTMLInputElement;
        const name = cleanName(input.value, "Untitled");
        input.value = name;
        renameProject(name);
    }

    return (
        <header className="topbar">
            <Link to="/" className="icon-button" title="Back to projects">
                <FiArrowLeft />
            </Link>
            <input
                key={doc.id}
                defaultValue={doc.name}
                onBlur={commitName}
                onKeyDown={(e: KeyboardEvent) => {
                    if (e.key === "Enter")
                        (e.currentTarget as HTMLInputElement).blur();
                }}
                className="topbar-name"
            />
            <span className="doc-size">
                {doc.width}×{doc.height}
            </span>

            <div className="divider" />
            <IconButton label="Undo (⌘Z)" onClick={undo} disabled={!canUndo()}>
                <FiUndo2 />
            </IconButton>
            <IconButton label="Redo (⇧⌘Z)" onClick={redo} disabled={!canRedo()}>
                <FiRedo2 />
            </IconButton>

            <div className="spacer" />

            <div className="zoom-controls">
                <IconButton
                    label="Zoom out (⌘-)"
                    onClick={() => zoomBy(-1)}
                >
                    <FiMinus />
                </IconButton>
                <button
                    type="button"
                    onClick={requestFit}
                    title="Fit to screen (⌘0)"
                    className="zoom-button"
                >
                    {Math.round(zoom * 100)}%
                </button>
                <IconButton label="Zoom in (⌘+)" onClick={() => zoomBy(1)}>
                    <FiPlus />
                </IconButton>
            </div>

            <div className="divider" />

            <input
                ref={fileRef}
                type="file"
                accept="image/*"
                multiple
                className="hidden"
                onChange={(e: Event) => void onFiles(e)}
            />
            <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="button"
            >
                <FiImage />
                <span className="add-label">Add image</span>
            </button>
            <button
                type="button"
                onClick={() => void downloadPng(getState().doc ?? doc)}
                className="button primary"
            >
                <FiDownload />
                Export
            </button>

            <div className="divider" />
            <ThemeToggle />
        </header>
    );
}
