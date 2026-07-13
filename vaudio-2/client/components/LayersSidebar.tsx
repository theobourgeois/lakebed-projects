import type { ComponentChildren } from "preact";
import { useRef, useState } from "preact/hooks";
import { MAX_LAYERS, type GeneratorId, type SceneLayer } from "../../shared/types";
import type { ImageInfo } from "../frame";
import {
    ICamera,
    IChevronDown,
    ICoffee,
    ICopy,
    IEye,
    IEyeOff,
    IFile,
    IMic,
    IPlus,
    ITrash,
} from "../icons";
import { IconButton } from "../ui";

type LiveKind = "camera" | "mic";

type DeviceOption = { id: string; label: string };

/**
 * Cameras / mics available for a live layer. Labels are hidden until the
 * origin has capture permission, so ask once if they come back blank.
 */
async function listDevices(kind: LiveKind): Promise<DeviceOption[]> {
    const wanted = kind === "camera" ? "videoinput" : "audioinput";
    let devices = await navigator.mediaDevices.enumerateDevices();
    if (!devices.some((d) => d.kind === wanted && d.label)) {
        try {
            const probe = await navigator.mediaDevices.getUserMedia(
                kind === "camera" ? { video: true } : { audio: true },
            );
            for (const track of probe.getTracks()) track.stop();
            devices = await navigator.mediaDevices.enumerateDevices();
        } catch {
            // Permission denied — fall through to generic labels.
        }
    }
    return devices
        .filter((d) => d.kind === wanted)
        .map((d, index) => ({
            id: d.deviceId,
            label:
                d.label ||
                `${kind === "camera" ? "Camera" : "Mic"} ${index + 1}`,
        }));
}

function mediaKindTag(kind: SceneLayer["mediaKind"]): string | null {
    switch (kind) {
        case "image":
            return null;
        case "video":
            return "vid";
        case "audio":
            return "aud";
        case "camera":
            return "cam";
        case "mic":
            return "mic";
        case "generator":
            return "gen";
        case "data":
            return "dat";
        default: {
            const _exhaustive: never = kind;
            return _exhaustive;
        }
    }
}

/** Left sidebar: layer stack (top layer first) with drag-to-reorder. */
export function LayersSidebar(props: {
    layers: SceneLayer[];
    imageInfo: Record<string, ImageInfo>;
    selectedId: string | null;
    onSelect: (layerId: string) => void;
    onToggleVisible: (layer: SceneLayer) => void;
    onReorder: (fromIndex: number, toIndex: number) => void;
    onDuplicate: (layerId: string) => void;
    onRemove: (layerId: string) => void;
    onImport: () => void;
    onAddCamera: (deviceId?: string, label?: string) => void;
    onAddMic: (deviceId?: string, label?: string) => void;
    onAddGenerator: (kind?: GeneratorId) => void;
}) {
    const [addOpen, setAddOpen] = useState(false);
    const [devicesFor, setDevicesFor] = useState<LiveKind | null>(null);
    const [devices, setDevices] = useState<DeviceOption[]>([]);
    const [devicesLoading, setDevicesLoading] = useState(false);
    const [dropSlot, setDropSlot] = useState<number | null>(null);
    const dragFromRef = useRef<number | null>(null);

    // Display order is top layer first; the scene stores bottom-first.
    const display = props.layers.slice().reverse();
    const count = props.layers.length;

    function closeAddMenu() {
        setAddOpen(false);
        setDevicesFor(null);
        setDevices([]);
    }

    async function toggleDevices(kind: LiveKind) {
        if (devicesFor === kind) {
            setDevicesFor(null);
            return;
        }
        setDevicesFor(kind);
        setDevices([]);
        setDevicesLoading(true);
        try {
            setDevices(await listDevices(kind));
        } catch {
            setDevices([]);
        } finally {
            setDevicesLoading(false);
        }
    }

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
        // Convert display coordinates (top-first) to scene coordinates (bottom-first).
        props.onReorder(count - 1 - from, count - 1 - adjusted);
    }

    const addItems: {
        label: string;
        hint: string;
        icon: ComponentChildren;
        action: () => void;
        liveKind?: LiveKind;
    }[] = [
        {
            label: "File…",
            hint: "image · video · audio",
            icon: <IFile class="h-3.5 w-3.5" />,
            action: props.onImport,
        },
        {
            label: "Camera",
            hint: "live facecam layer",
            icon: <ICamera class="h-3.5 w-3.5" />,
            action: () => props.onAddCamera(),
            liveKind: "camera",
        },
        {
            label: "Mic line",
            hint: "live audio visualizer",
            icon: <IMic class="h-3.5 w-3.5" />,
            action: () => props.onAddMic(),
            liveKind: "mic",
        },
        {
            label: "Generator",
            hint: "animated procedural source",
            icon: <IPlus class="h-3.5 w-3.5" />,
            action: () => props.onAddGenerator("gradient"),
        },
    ];
    return (
        <aside class="flex w-[212px] flex-shrink-0 flex-col border-r border-[var(--line)] bg-[var(--panel)]">
            <header class="relative flex h-8 flex-shrink-0 items-center gap-2 border-b border-[var(--line)] px-3">
                <span class="text-[9px] font-medium uppercase tracking-[0.14em] text-[var(--mute)]">
                    Layers
                </span>
                <span class="font-mono text-[9px] text-[var(--mute)]">
                    {props.layers.length}/{MAX_LAYERS}
                </span>
                <span class="flex-1" />
                <IconButton
                    title="Add layer"
                    tone="accent"
                    onClick={() => setAddOpen((previous) => !previous)}
                >
                    <IPlus />
                </IconButton>
                {addOpen && (
                    <>
                        <div
                            class="fixed inset-0 z-[99]"
                            onClick={closeAddMenu}
                        />
                        <div class="pop absolute left-3 right-3 top-full z-[100] border border-[var(--line)] bg-[var(--panel-2)] p-1 shadow-2xl">
                            {addItems.map((item) => (
                                <div key={item.label}>
                                    <div class="flex items-stretch">
                                        <button
                                            type="button"
                                            class="flex min-w-0 flex-1 items-center gap-2 px-2 py-1.5 text-left hover:bg-[var(--line)]"
                                            onClick={() => {
                                                closeAddMenu();
                                                item.action();
                                            }}
                                        >
                                            <span class="text-[var(--acid)]">
                                                {item.icon}
                                            </span>
                                            <span class="min-w-0">
                                                <span class="block text-[11px] text-[var(--paper)]">
                                                    {item.label}
                                                </span>
                                                <span class="block font-mono text-[8px] uppercase tracking-wider text-[var(--mute)]">
                                                    {item.hint}
                                                </span>
                                            </span>
                                        </button>
                                        {item.liveKind && (
                                            <button
                                                type="button"
                                                title={`Choose ${item.label.toLowerCase()} device`}
                                                class={`grid w-7 flex-shrink-0 place-items-center text-[var(--mute)] hover:bg-[var(--line)] hover:text-[var(--paper)] ${devicesFor === item.liveKind ? "bg-[var(--line)] text-[var(--paper)]" : ""}`}
                                                onClick={() =>
                                                    void toggleDevices(
                                                        item.liveKind!,
                                                    )
                                                }
                                            >
                                                <IChevronDown
                                                    class={`h-3 w-3 transition-transform ${devicesFor === item.liveKind ? "rotate-180" : ""}`}
                                                />
                                            </button>
                                        )}
                                    </div>
                                    {item.liveKind &&
                                        devicesFor === item.liveKind && (
                                            <div class="mb-0.5 ml-4 border-l border-[var(--line)]">
                                                {devicesLoading && (
                                                    <p class="px-2 py-1.5 font-mono text-[9px] text-[var(--mute)]">
                                                        Looking for devices…
                                                    </p>
                                                )}
                                                {!devicesLoading &&
                                                    devices.length === 0 && (
                                                        <p class="px-2 py-1.5 font-mono text-[9px] text-[var(--mute)]">
                                                            No devices found
                                                        </p>
                                                    )}
                                                {!devicesLoading &&
                                                    devices.map((device) => (
                                                        <button
                                                            key={device.id}
                                                            type="button"
                                                            title={device.label}
                                                            class="block w-full truncate px-2 py-1.5 text-left text-[10.5px] text-[var(--paper)] hover:bg-[var(--line)]"
                                                            onClick={() => {
                                                                const kind =
                                                                    item.liveKind;
                                                                closeAddMenu();
                                                                if (kind === "camera")
                                                                    props.onAddCamera(
                                                                        device.id,
                                                                        device.label,
                                                                    );
                                                                else
                                                                    props.onAddMic(
                                                                        device.id,
                                                                        device.label,
                                                                    );
                                                            }}
                                                        >
                                                            {device.label}
                                                        </button>
                                                    ))}
                                            </div>
                                        )}
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </header>
            <div
                class="min-h-0 flex-1 overflow-y-auto py-1"
                onDragOver={(e: DragEvent) => {
                    e.preventDefault();
                    setDropSlot(slotFromEvent(e));
                }}
                onDragLeave={() => setDropSlot(null)}
                onDrop={onDrop}
            >
                {props.layers.length === 0 && (
                    <button
                        type="button"
                        class="mx-3 my-3 block w-[calc(100%-24px)] border border-dashed border-[var(--line)] px-3 py-6 text-center font-mono text-[10px] leading-relaxed text-[var(--mute)] hover:border-[var(--acid)]/50 hover:text-[var(--mute)]"
                        onClick={props.onImport}
                    >
                        Drop, paste, or click to import anything
                    </button>
                )}
                {display.map((layer, index) => {
                    const meta = props.imageInfo[layer.imageId];
                    const isSelected = layer.id === props.selectedId;
                    const kindTag = mediaKindTag(layer.mediaKind);
                    const dropMark =
                        dropSlot === index
                            ? "above"
                            : dropSlot === index + 1 && index === count - 1
                              ? "below"
                              : null;
                    return (
                        <div
                            key={layer.id}
                            draggable
                            data-display-index={index}
                            class={`layer-row group relative flex items-center gap-2 px-2 py-1.5 ${isSelected ? "bg-[var(--acid)]/10" : "hover:bg-[var(--line)]"} ${layer.fx.visible ? "" : "opacity-45"}`}
                            onDragStart={(e: DragEvent) => {
                                const transfer = e.dataTransfer;
                                if (transfer) {
                                    transfer.setData(
                                        "text/plain",
                                        String(index),
                                    );
                                    transfer.effectAllowed = "move";
                                }
                                dragFromRef.current = index;
                            }}
                            onDragEnd={() => {
                                dragFromRef.current = null;
                                setDropSlot(null);
                            }}
                            onClick={() => props.onSelect(layer.id)}
                        >
                            {dropMark ? (
                                <span
                                    class={`layer-drop-mark ${dropMark}`}
                                />
                            ) : null}
                            <IconButton
                                title={layer.fx.visible ? "Hide" : "Show"}
                                class="flex-shrink-0"
                                onClick={(event) => {
                                    event.stopPropagation();
                                    props.onToggleVisible(layer);
                                }}
                            >
                                {layer.fx.visible ? (
                                    <IEye class="h-3.5 w-3.5" />
                                ) : (
                                    <IEyeOff class="h-3.5 w-3.5" />
                                )}
                            </IconButton>
                            <span
                                class={`grid h-8 w-8 flex-shrink-0 place-items-center overflow-hidden border ${isSelected ? "border-[var(--acid)]/60" : "border-[var(--line)]"} bg-black`}
                            >
                                {meta?.thumb ? (
                                    <img
                                        src={meta.thumb}
                                        draggable={false}
                                        class="h-full w-full object-cover"
                                    />
                                ) : (
                                    <span class="font-mono text-[8px] text-[#b86a74]">
                                        {meta?.missing ? "?" : "…"}
                                    </span>
                                )}
                            </span>
                            <span class="min-w-0 flex-1 truncate text-[11px] text-[var(--paper)]">
                                {layer.name}
                            </span>
                            {kindTag && (
                                <span class="flex-shrink-0 font-mono text-[8px] uppercase tracking-wider text-[var(--mute)]">
                                    {kindTag}
                                </span>
                            )}
                            <span class="hidden flex-shrink-0 items-center gap-0.5 group-hover:flex">
                                <IconButton
                                    title="Duplicate"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        props.onDuplicate(layer.id);
                                    }}
                                >
                                    <ICopy class="h-3.5 w-3.5" />
                                </IconButton>
                                <IconButton
                                    title="Delete"
                                    tone="danger"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        props.onRemove(layer.id);
                                    }}
                                >
                                    <ITrash class="h-3.5 w-3.5" />
                                </IconButton>
                            </span>
                        </div>
                    );
                })}
            </div>
            <footer class="flex-shrink-0 border-t border-[var(--line)] px-3 py-2">
                <a
                    href="https://buymeacoffee.com/theobourgeois"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-wider text-[var(--mute)] transition-colors hover:text-[var(--paper)]"
                >
                    <ICoffee class="h-3 w-3" />
                    Buy me a coffee
                </a>
            </footer>
        </aside>
    );
}
