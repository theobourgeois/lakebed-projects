import type { Macro } from "../../shared/types";
import type { LearnedControl } from "../hooks/useControlInputs";
import { Knob } from "../ui";

/** Compact scene macro for the bottom of the layers sidebar. */
export function MacroControl(props: {
    macro: Macro;
    routeCount: number;
    learning: "midi" | "gamepad" | null;
    onChange: (patch: Partial<Macro>) => void;
    onLearnMidi: (callback: (control: LearnedControl) => void) => void;
    onClearMidi: () => void;
}) {
    const bound = !!props.macro.midiSourceId;

    return (
        <section class="flex-shrink-0 border-t border-[var(--line)] px-3 py-3">
            <div class="mb-2 flex items-center justify-between">
                <span class="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    Macro
                </span>
                <span class="font-mono text-[8px] uppercase tracking-wider text-[var(--mute)]">
                    {props.routeCount} {props.routeCount === 1 ? "route" : "routes"}
                </span>
            </div>
            <div class="flex items-center gap-3">
                <Knob
                    label={props.macro.name}
                    value={props.macro.value}
                    def={0}
                    size={62}
                    onChange={(value) => props.onChange({ value })}
                />
                <div class="min-w-0 flex-1">
                    <div class="mb-1 font-mono text-[10px] text-[var(--paper)]">
                        {props.macro.name}
                    </div>
                    <div class="mb-2 font-mono text-[9px] tabular-nums text-[var(--acid)]">
                        {Math.round(props.macro.value * 100)}%
                    </div>
                    <button
                        type="button"
                        title={props.macro.midiSourceLabel || "Map a MIDI control"}
                        class={`max-w-full truncate border px-2 py-1 font-mono text-[8px] uppercase tracking-wider ${props.learning === "midi" ? "border-[var(--acid)] text-[var(--acid)]" : bound ? "border-[var(--line-hot)] text-[var(--paper)]" : "border-[var(--line)] text-[var(--mute)] hover:text-[var(--paper)]"}`}
                        onClick={() => {
                            if (bound) props.onClearMidi();
                            else
                                props.onLearnMidi((control) =>
                                    props.onChange({
                                        midiSourceId: control.key,
                                        midiSourceLabel: control.label,
                                    }),
                                );
                        }}
                    >
                        {props.learning === "midi"
                            ? "Move MIDI…"
                            : bound
                              ? "MIDI mapped ×"
                              : "+ MIDI map"}
                    </button>
                </div>
            </div>
        </section>
    );
}
