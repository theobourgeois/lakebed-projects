import { clamp } from "../../shared/types";
import { pad3 } from "./format";

/** Labeled horizontal slider. Double-click resets to `def` when provided. */
export function Slider(props: {
    label: string;
    value: number;
    min?: number;
    max?: number;
    def?: number;
    format?: (value: number) => string;
    onChange: (value: number) => void;
}) {
    const min = props.min ?? 0;
    const max = props.max ?? 1;
    const pct = clamp(((props.value - min) / (max - min)) * 100, 0, 100);
    return (
        <label
            class="block px-3 py-[5px] select-none"
            onDblClick={() =>
                props.def !== undefined && props.onChange(props.def)
            }
            title="Double-click to reset"
        >
            <div class="mb-0.5 flex items-baseline justify-between text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                <span>{props.label}</span>
                <span class="tabular-nums text-[var(--paper)]">
                    {props.format
                        ? props.format(props.value)
                        : pad3(props.value, min, max)}
                </span>
            </div>
            <input
                type="range"
                class="knob-range"
                style={{ "--fill": `${pct}%` }}
                min={min}
                max={max}
                step={0.001}
                value={props.value}
                onInput={(event) =>
                    props.onChange(
                        parseFloat(
                            (event.currentTarget as HTMLInputElement).value,
                        ),
                    )
                }
            />
        </label>
    );
}
