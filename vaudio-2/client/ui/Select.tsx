import { useEffect, useRef, useState } from "preact/hooks";
import { ICheck, IChevronDown } from "../icons";

export type SelectOption<T extends string> = { value: T; label: string };

/**
 * Custom dropdown (replaces the native <select>) styled to match the panel
 * chrome. Supports keyboard control while the trigger is focused.
 * Menu is position:fixed so it escapes overflow / stacking-context parents.
 */
export function Select<T extends string>(props: {
    value: T;
    options: readonly SelectOption<T>[];
    onChange: (value: T) => void;
    title?: string;
    disabled?: boolean;
    /** Extra classes for the trigger button (widths, alignment). */
    class?: string;
    /** Extra classes for the dropdown panel, e.g. "right-0" to right-align. */
    menuClass?: string;
}) {
    const [open, setOpen] = useState(false);
    const [highlight, setHighlight] = useState(0);
    const [menuStyle, setMenuStyle] = useState<Record<string, string | number>>(
        {},
    );
    const triggerRef = useRef<HTMLButtonElement>(null);
    const alignRight = (props.menuClass ?? "").includes("right-0");

    const selectedIndex = props.options.findIndex(
        (option) => option.value === props.value,
    );
    const selected = props.options[selectedIndex];

    function placeMenu() {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;
        const style: Record<string, string | number> = {
            position: "fixed",
            top: rect.bottom + 4,
            minWidth: rect.width,
            zIndex: 100,
        };
        if (alignRight) {
            style.right = window.innerWidth - rect.right;
            style.left = "auto";
        } else {
            style.left = rect.left;
        }
        setMenuStyle(style);
    }

    function openMenu() {
        setHighlight(Math.max(0, selectedIndex));
        placeMenu();
        setOpen(true);
    }

    function choose(value: T) {
        props.onChange(value);
        setOpen(false);
    }

    useEffect(() => {
        if (!open) return;
        const onReposition = () => placeMenu();
        window.addEventListener("resize", onReposition);
        window.addEventListener("scroll", onReposition, true);
        return () => {
            window.removeEventListener("resize", onReposition);
            window.removeEventListener("scroll", onReposition, true);
        };
    }, [open, alignRight]);

    function onKeyDown(event: KeyboardEvent) {
        // Keep dropdown navigation from triggering app-level shortcuts.
        event.stopPropagation();
        if (!open) {
            if (
                event.key === "ArrowDown" ||
                event.key === "ArrowUp" ||
                event.key === "Enter" ||
                event.key === " "
            ) {
                event.preventDefault();
                openMenu();
            }
            return;
        }
        if (event.key === "Escape") {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === "ArrowDown") {
            event.preventDefault();
            setHighlight((index) =>
                Math.min(props.options.length - 1, index + 1),
            );
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            setHighlight((index) => Math.max(0, index - 1));
        } else if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            const option = props.options[highlight];
            if (option) choose(option.value);
        } else if (event.key === "Tab") {
            setOpen(false);
        }
    }

    return (
        <div class="relative">
            <button
                ref={triggerRef}
                type="button"
                title={props.title}
                disabled={props.disabled}
                aria-haspopup="listbox"
                aria-expanded={open}
                onClick={() => (open ? setOpen(false) : openMenu())}
                onKeyDown={onKeyDown}
                class={`flex h-[26px] items-center justify-between gap-1.5 border px-2 font-mono text-[10px] uppercase tracking-[0.06em] transition-colors disabled:opacity-35 ${
                    open
                        ? "border-[var(--acid)]/60 bg-[var(--panel)] text-[var(--paper)]"
                        : "border-[var(--line)] bg-[var(--panel)] text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"
                } ${props.class ?? "w-full"}`}
            >
                <span class="truncate">{selected?.label ?? props.value}</span>
                <IChevronDown
                    class={`h-3 w-3 flex-shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <>
                    <div
                        class="fixed inset-0 z-[99]"
                        onClick={() => setOpen(false)}
                    />
                    <div
                        role="listbox"
                        style={menuStyle}
                        class={`pop max-h-60 overflow-y-auto border border-[var(--line)] bg-[var(--panel-2)] py-0.5 shadow-2xl ${props.menuClass ?? ""}`}
                    >
                        {props.options.map((option, index) => {
                            const isSelected = option.value === props.value;
                            return (
                                <button
                                    key={option.value}
                                    type="button"
                                    role="option"
                                    aria-selected={isSelected}
                                    onMouseEnter={() => setHighlight(index)}
                                    onClick={() => choose(option.value)}
                                    class={`flex w-full items-center justify-between gap-2 px-2 py-1 text-left font-mono text-[10px] uppercase tracking-[0.06em] ${
                                        index === highlight
                                            ? "bg-[var(--line)] text-[var(--paper)]"
                                            : isSelected
                                              ? "text-[var(--acid)]"
                                              : "text-[var(--mute)]"
                                    }`}
                                >
                                    <span class="truncate">{option.label}</span>
                                    {isSelected && (
                                        <ICheck class="h-3 w-3 flex-shrink-0 text-[var(--acid)]" />
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </>
            )}
        </div>
    );
}
