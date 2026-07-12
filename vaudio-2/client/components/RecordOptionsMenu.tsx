import { useEffect, useRef, useState } from "preact/hooks";
import {
    EXPORT_FORMATS,
    EXPORT_QUALITIES,
    resolveExportSize,
    type ExportFormatId,
    type ExportQualityId,
} from "../exporting";
import { ICheck, IChevronDown } from "../icons";

export function RecordOptionsMenu(props: {
    format: ExportFormatId;
    quality: ExportQualityId;
    disabled?: boolean;
    onFormat: (format: ExportFormatId) => void;
    onQuality: (quality: ExportQualityId) => void;
}) {
    const [open, setOpen] = useState(false);
    const [menuStyle, setMenuStyle] = useState<Record<string, string | number>>(
        {},
    );
    const triggerRef = useRef<HTMLButtonElement>(null);

    function placeMenu() {
        const rect = triggerRef.current?.getBoundingClientRect();
        if (!rect) return;
        setMenuStyle({
            position: "fixed",
            top: rect.bottom + 4,
            right: window.innerWidth - rect.right,
            zIndex: 100,
        });
    }

    function toggleMenu() {
        if (!open) placeMenu();
        setOpen(!open);
    }

    useEffect(() => {
        if (!open) return;
        const reposition = () => placeMenu();
        window.addEventListener("resize", reposition);
        window.addEventListener("scroll", reposition, true);
        return () => {
            window.removeEventListener("resize", reposition);
            window.removeEventListener("scroll", reposition, true);
        };
    }, [open]);

    return (
        <div class="relative">
            <button
                ref={triggerRef}
                type="button"
                title="Choose recording format and quality"
                disabled={props.disabled}
                aria-label="Choose recording format and quality"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={toggleMenu}
                onKeyDown={(event) => {
                    event.stopPropagation();
                    if (event.key === "Escape") setOpen(false);
                }}
                class={`flex h-[26px] w-[27px] items-center justify-center border px-1.5 text-[var(--mute)] transition-colors disabled:opacity-35 ${
                    open
                        ? "border-[var(--acid)]/60 bg-[var(--panel)] text-[var(--paper)]"
                        : "border-[var(--line)] bg-[var(--panel)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"
                }`}
            >
                <IChevronDown
                    class={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
                />
            </button>
            {open && (
                <>
                    <div
                        class="fixed inset-0 z-[99]"
                        onClick={() => setOpen(false)}
                    />
                    <div
                        role="menu"
                        style={menuStyle}
                        class="pop w-64 border border-[var(--line)] bg-[var(--panel-2)] p-2 shadow-2xl"
                    >
                        <div class="mb-1.5 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--mute)]">
                            Quality
                        </div>
                        <div class="mb-3 grid grid-cols-3 gap-1">
                            {EXPORT_QUALITIES.map((quality) => {
                                const selected = quality.id === props.quality;
                                return (
                                    <button
                                        key={quality.id}
                                        type="button"
                                        role="menuitemradio"
                                        aria-checked={selected}
                                        onClick={() =>
                                            props.onQuality(quality.id)
                                        }
                                        class={`border px-1 py-1.5 text-center font-mono uppercase ${
                                            selected
                                                ? "border-[var(--acid)]/60 bg-[var(--acid)]/10 text-[var(--acid)]"
                                                : "border-[var(--line)] text-[var(--mute)] hover:border-[var(--line-hot)] hover:text-[var(--paper)]"
                                        }`}
                                    >
                                        <span class="block text-[10px] tracking-[0.06em]">
                                            {quality.label}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                        <div class="mb-1 font-mono text-[9px] uppercase tracking-[0.12em] text-[var(--mute)]">
                            Format
                        </div>
                        <div class="-mx-1">
                            {EXPORT_FORMATS.map((format) => {
                                const selected = format.id === props.format;
                                const size = resolveExportSize(
                                    format.id,
                                    props.quality,
                                );
                                return (
                                    <button
                                        key={format.id}
                                        type="button"
                                        role="menuitemradio"
                                        aria-checked={selected}
                                        onClick={() => {
                                            props.onFormat(format.id);
                                            setOpen(false);
                                        }}
                                        class={`flex w-full items-center justify-between gap-3 px-2 py-1.5 text-left font-mono text-[10px] ${
                                            selected
                                                ? "bg-[var(--line)] text-[var(--acid)]"
                                                : "text-[var(--mute)] hover:bg-[var(--line)] hover:text-[var(--paper)]"
                                        }`}
                                    >
                                        <span class="uppercase tracking-[0.06em]">
                                            {format.label}
                                        </span>
                                        <span class="flex items-center gap-2 text-[9px] opacity-75">
                                            {format.aspect} · {size.width}×
                                            {size.height}
                                            {selected && (
                                                <ICheck class="h-3 w-3 text-[var(--acid)]" />
                                            )}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
