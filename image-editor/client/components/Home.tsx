// Project gallery: open previous projects, create a blank one (default
// dimensions), or drop/pick an image to start a project at that image's size.

import { useNavigate, useQuery } from "lakebed/client";
import { useRef, useState } from "preact/hooks";
import {
    DEFAULT_PROJECT_HEIGHT,
    DEFAULT_PROJECT_WIDTH,
    cleanName,
    encodeTransform,
    type ProjectMeta,
    type ProjectThumb,
} from "../../shared/types";
import { fileToImportedImage, imageFilesFromDataTransfer } from "../lib/image";
import { api, queryResult } from "../state/api";
import { seedAsset } from "../state/assets";
import { FiEdit3, FiImage, FiPlus, FiTrash2, FiUpload } from "./Icons";
import { ThemeToggle } from "./ThemeToggle";

const SIZE_PRESETS = [
    {
        name: "Canvas",
        width: DEFAULT_PROJECT_WIDTH,
        height: DEFAULT_PROJECT_HEIGHT,
    },
    { name: "Square", width: 1200, height: 1200 },
    { name: "Portrait", width: 1080, height: 1350 },
    { name: "Landscape", width: 1920, height: 1080 },
] as const;

function timeAgo(iso: string): string {
    const ms = Date.now() - new Date(iso).getTime();
    if (!Number.isFinite(ms) || ms < 0) return "just now";
    const minutes = Math.floor(ms / 60_000);
    if (minutes < 1) return "just now";
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ago`;
    const days = Math.floor(hours / 24);
    if (days < 30) return `${days}d ago`;
    return new Date(iso).toLocaleDateString();
}

function ProjectCard({
    project,
    thumb,
    onOpen,
    onRename,
    onDelete,
}: {
    project: ProjectMeta;
    thumb: string;
    onOpen: () => void;
    onRename: () => void;
    onDelete: () => void;
}) {
    return (
        <article className="project-card">
            <button
                type="button"
                onClick={onOpen}
                className="checker project-preview"
                aria-label={`Open ${project.name}`}
            >
                {thumb ? (
                    <img alt="" src={thumb} draggable={false} />
                ) : (
                    <FiImage className="project-empty-icon" />
                )}
            </button>
            <button type="button" onClick={onOpen} className="project-main">
                <span className="project-name">{project.name}</span>
                <span className="project-info">
                    {project.width}×{project.height} ·{" "}
                    {project.layerOrder.length}{" "}
                    {project.layerOrder.length === 1 ? "layer" : "layers"} ·{" "}
                    {timeAgo(project.updatedAt)}
                </span>
            </button>
            <div className="project-actions">
                <button
                    type="button"
                    onClick={onRename}
                    className="icon-button"
                    title="Rename"
                    aria-label={`Rename ${project.name}`}
                >
                    <FiEdit3 />
                </button>
                <button
                    type="button"
                    onClick={onDelete}
                    className="icon-button"
                    title="Delete"
                    aria-label={`Delete ${project.name}`}
                >
                    <FiTrash2 />
                </button>
            </div>
        </article>
    );
}

export function Home() {
    const projects = queryResult<ProjectMeta>(useQuery("projects"));
    const thumbs = queryResult<ProjectThumb>(useQuery("projectThumbs"));
    const navigate = useNavigate();
    const fileRef = useRef<HTMLInputElement>(null);
    const [busy, setBusy] = useState(false);
    const [dragging, setDragging] = useState(false);
    const [size, setSize] = useState({
        width: DEFAULT_PROJECT_WIDTH,
        height: DEFAULT_PROJECT_HEIGHT,
    });
    const dragDepthRef = useRef(0);

    const thumbById = new Map(thumbs.items.map((t) => [t.id, t.thumb]));

    async function createBlank() {
        if (busy) return;
        setBusy(true);
        try {
            const name = `Untitled ${projects.items.length + 1}`;
            const { id } = await api.createProject(
                name,
                size.width,
                size.height,
            );
            navigate(`/p/${id}`);
        } finally {
            setBusy(false);
        }
    }

    async function createFromFile(file: File) {
        if (busy) return;
        setBusy(true);
        try {
            const image = await fileToImportedImage(file);
            const transform = encodeTransform({
                x: 0,
                y: 0,
                w: image.width,
                h: image.height,
                rotation: 0,
                opacity: 1,
                visible: true,
            });
            const result = await api.createProjectFromImage(
                image.name,
                image.width,
                image.height,
                image.name,
                image.src,
                transform,
            );
            seedAsset(result.assetId, {
                src: result.src || image.src,
                paintSrc: image.src,
                width: image.width,
                height: image.height,
            });
            // Home never opens the editor long enough for the delayed thumb
            // pass — write one now from the local data URL.
            try {
                const scale = Math.min(1, 360 / Math.max(image.width, image.height));
                const canvas = document.createElement("canvas");
                canvas.width = Math.max(1, Math.round(image.width * scale));
                canvas.height = Math.max(1, Math.round(image.height * scale));
                const ctx = canvas.getContext("2d");
                if (ctx) {
                    const img = new Image();
                    await new Promise<void>((resolve, reject) => {
                        img.onload = () => resolve();
                        img.onerror = () => reject(new Error("thumb decode failed"));
                        img.src = image.src;
                    });
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    await api.setProjectThumb(result.id, canvas.toDataURL("image/jpeg", 0.85));
                }
            } catch (thumbError) {
                console.warn("Could not write project thumb:", thumbError);
                if (result.src) {
                    await api.setProjectThumb(result.id, result.src).catch(() => undefined);
                }
            }
            navigate(`/p/${result.id}`);
        } catch (error) {
            console.error("Could not create project from image:", error);
        } finally {
            setBusy(false);
        }
    }

    function onDrop(e: DragEvent) {
        e.preventDefault();
        dragDepthRef.current = 0;
        setDragging(false);
        const files = imageFilesFromDataTransfer(e.dataTransfer);
        if (files.length > 0) void createFromFile(files[0]);
    }

    function onDelete(project: ProjectMeta) {
        if (confirm(`Delete "${project.name}"? This cannot be undone.`)) {
            void api.deleteProject(project.id);
        }
    }

    function onRename(project: ProjectMeta) {
        const name = prompt("Project name", project.name);
        if (name !== null) {
            void api.renameProject(project.id, cleanName(name, project.name));
        }
    }

    return (
        <main
            className="home"
            onDragEnter={(e: DragEvent) => {
                e.preventDefault();
                dragDepthRef.current += 1;
                setDragging(true);
            }}
            onDragLeave={() => {
                dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
                if (dragDepthRef.current === 0) setDragging(false);
            }}
            onDragOver={(e: DragEvent) => e.preventDefault()}
            onDrop={onDrop}
        >
            <div className="home-inner">
                <header className="mb-2">
                    <div className="brand-row">
                        <h1 className="brand">image editor</h1>
                        <ThemeToggle />
                    </div>
                </header>

                <section
                    className="create-panel"
                    aria-labelledby="new-project-label"
                >
                    <div className="presets">
                        {SIZE_PRESETS.map((preset) => {
                            const selected =
                                preset.width === size.width &&
                                preset.height === size.height;
                            return (
                                <button
                                    key={preset.name}
                                    type="button"
                                    className={`preset ${selected ? "selected" : ""}`}
                                    aria-pressed={selected}
                                    onClick={() =>
                                        setSize({
                                            width: preset.width,
                                            height: preset.height,
                                        })
                                    }
                                >
                                    <span className="preset-name">
                                        {preset.name}
                                    </span>
                                    <span className="preset-size">
                                        {preset.width} × {preset.height}
                                    </span>
                                </button>
                            );
                        })}
                    </div>
                    <div className="create-actions">
                        <button
                            type="button"
                            disabled={busy}
                            onClick={() => void createBlank()}
                            className="button primary"
                        >
                            <FiPlus />
                            New project
                        </button>
                        <input
                            ref={fileRef}
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={(e: Event) => {
                                const input =
                                    e.currentTarget as HTMLInputElement;
                                const file = input.files?.[0];
                                input.value = "";
                                if (file) void createFromFile(file);
                            }}
                        />
                        <button
                            type="button"
                            disabled={busy}
                            onClick={() => fileRef.current?.click()}
                            className="button"
                        >
                            <FiUpload />
                            From image
                        </button>
                    </div>
                </section>

                <p className="section-label">
                    Projects{" "}
                    {projects.ready ? `(${projects.items.length})` : ""}
                </p>
                {!projects.ready ? (
                    <div className="empty-state">Loading projects…</div>
                ) : projects.items.length === 0 ? (
                    <div className="empty-state">
                        No projects yet. Choose a size above or drop an image
                        here.
                    </div>
                ) : (
                    <div className="project-list">
                        {projects.items.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                thumb={thumbById.get(project.id) ?? ""}
                                onOpen={() => navigate(`/p/${project.id}`)}
                                onRename={() => onRename(project)}
                                onDelete={() => onDelete(project)}
                            />
                        ))}
                    </div>
                )}
            </div>

            {dragging ? (
                <div className="drop-overlay">
                    <p>Drop to create a project</p>
                </div>
            ) : null}
            {busy ? <div className="busy-toast">Creating project…</div> : null}
        </main>
    );
}
