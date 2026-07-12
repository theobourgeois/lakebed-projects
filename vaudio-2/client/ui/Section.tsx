import type { ComponentChildren } from "preact";

/** Titled panel section with a rule and optional right-aligned actions. */
export function Section(props: {
    title: string;
    accent?: boolean;
    actions?: ComponentChildren;
    children: ComponentChildren;
}) {
    return (
        <section class="border-b border-[var(--line)] pb-2">
            <header class="flex h-8 items-center gap-2 px-3">
                <span
                    class={`text-[9px] font-medium uppercase tracking-[0.14em] ${props.accent ? "text-[var(--acid)]" : "text-[var(--mute)]"}`}
                >
                    {props.title}
                </span>
                <span class="h-px flex-1 bg-[var(--line)]" />
                {props.actions}
            </header>
            {props.children}
        </section>
    );
}
