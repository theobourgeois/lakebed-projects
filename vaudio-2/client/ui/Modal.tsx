import type { ComponentChildren } from "preact";

/** Centered modal with backdrop dismiss, a titled header, and an esc button. */
export function Modal(props: {
    title: string;
    onClose: () => void;
    /** Tailwind max-width class for the dialog, e.g. "max-w-[840px]". */
    maxWidth?: string;
    /** Extra content rendered in the header, left of the esc button. */
    headerExtra?: ComponentChildren;
    children: ComponentChildren;
}) {
    return (
        <div
            class="fixed inset-0 z-[70] grid place-items-center bg-black/75 p-4"
            onClick={props.onClose}
        >
            <div
                class={`pop max-h-[88vh] w-full ${props.maxWidth ?? "max-w-[420px]"} overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] shadow-2xl`}
                onClick={(event) => event.stopPropagation()}
            >
                <header class="flex items-center gap-2 border-b border-[var(--line)] px-4 py-3">
                    <span class="text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--acid)]">
                        {props.title}
                    </span>
                    <span class="flex-1" />
                    {props.headerExtra}
                    <button
                        type="button"
                        class="ml-2 border border-[var(--line)] px-2 py-0.5 font-mono text-[10px] uppercase text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"
                        onClick={props.onClose}
                    >
                        esc
                    </button>
                </header>
                {props.children}
            </div>
        </div>
    );
}
