import type { SceneMeta } from "../../shared/types";
import { IFolder, IPlus, ITrash } from "../icons";
import { Button, IconButton } from "../ui";

/** "Scenes" toolbar button plus its saved-scenes dropdown. */
export function ScenesMenu(props: {
    open: boolean;
    onToggle: () => void;
    onClose: () => void;
    scenes: SceneMeta[];
    isGuest: boolean;
    onNew: () => void;
    onLoad: (id: string) => void;
    onDelete: (id: string) => void;
}) {
    return (
        <div class="relative">
            <Button
                title="Your saved scenes"
                active={props.open}
                onClick={props.onToggle}
                label="Scenes"
            >
                <IFolder />
            </Button>
            {props.open && (
                <>
                    <div class="fixed inset-0 z-[99]" onClick={props.onClose} />
                    <div class="pop absolute right-0 top-8 z-[100] max-h-[60vh] w-64 overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] p-1.5 shadow-2xl">
                        <button
                            type="button"
                            class="mb-1 flex w-full items-center gap-2 border border-[var(--line)] px-2.5 py-2 text-left hover:border-[var(--line-hot)] hover:bg-[var(--line)]"
                            onClick={props.onNew}
                        >
                            <IPlus class="h-3.5 w-3.5 text-[var(--acid)]" />
                            <span class="font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--paper)]">
                                New scene
                            </span>
                        </button>
                        {props.scenes.length === 0 && (
                            <p class="p-3 font-mono text-[10px] text-[var(--mute)]">
                                No saved scenes yet.
                                {props.isGuest
                                    ? " (Guest sessions save locally per deploy.)"
                                    : ""}
                            </p>
                        )}
                        {props.scenes.map((meta) => (
                            <div
                                key={meta.id}
                                class="group flex items-center gap-2 p-1.5 hover:bg-[var(--line)]"
                            >
                                <button
                                    type="button"
                                    class="flex min-w-0 flex-1 items-center gap-2 text-left"
                                    onClick={() => props.onLoad(meta.id)}
                                >
                                    <span class="grid h-9 w-14 flex-shrink-0 place-items-center overflow-hidden border border-[var(--line)] bg-black">
                                        {meta.thumb ? (
                                            <img
                                                src={meta.thumb}
                                                class="h-full w-full object-cover"
                                            />
                                        ) : (
                                            <span class="font-mono text-[8px] text-[var(--mute)]">
                                                vaudio-2
                                            </span>
                                        )}
                                    </span>
                                    <span class="min-w-0">
                                        <span class="block truncate text-[11.5px] text-[var(--paper)]">
                                            {meta.name}
                                        </span>
                                        <span class="block font-mono text-[8.5px] text-[var(--mute)]">
                                            {new Date(
                                                meta.updatedAt,
                                            ).toLocaleString()}
                                        </span>
                                    </span>
                                </button>
                                <IconButton
                                    title="Delete scene"
                                    tone="danger"
                                    class="opacity-0 group-hover:opacity-100"
                                    onClick={() => props.onDelete(meta.id)}
                                >
                                    <ITrash class="h-3.5 w-3.5" />
                                </IconButton>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
