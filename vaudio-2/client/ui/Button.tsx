import type { ComponentChildren } from "preact";

/** Bordered toolbar button with an icon and an optional ≥lg text label. */
export function Button(props: {
    title: string;
    active?: boolean;
    danger?: boolean;
    disabled?: boolean;
    onClick: () => void;
    children: ComponentChildren;
    label?: string;
}) {
    return (
        <button
            type="button"
            title={props.title}
            disabled={props.disabled}
            onClick={props.onClick}
            class={`flex h-[26px] items-center gap-1.5 border px-2 text-[10px] uppercase tracking-wide transition-colors disabled:opacity-30 ${
                props.active
                    ? "border-[var(--acid)] bg-[var(--acid)]/15 text-[var(--acid)]"
                    : props.danger
                      ? "border-[#c45b6a] bg-[#c45b6a]/10 text-[#b86a74]"
                      : "border-[var(--line)] bg-[var(--panel)] text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"
            }`}
        >
            {props.children}
            {props.label ? (
                <span class="hidden lg:inline">{props.label}</span>
            ) : null}
        </button>
    );
}

/** Borderless icon-only button that brightens on hover. */
export function IconButton(props: {
    title: string;
    /** Hover color: default paper, `accent` acid, `danger` red. */
    tone?: "default" | "accent" | "danger";
    class?: string;
    onClick: (event: MouseEvent) => void;
    children: ComponentChildren;
}) {
    const hover =
        props.tone === "accent"
            ? "hover:text-[var(--acid)]"
            : props.tone === "danger"
              ? "hover:text-[#b86a74]"
              : "hover:text-[var(--paper)]";
    return (
        <button
            type="button"
            title={props.title}
            class={`text-[var(--mute)] ${hover} ${props.class ?? ""}`}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}
