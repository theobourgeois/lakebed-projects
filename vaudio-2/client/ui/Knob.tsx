import { clamp } from "../../shared/types";

/** Circular range control with a progress ring. Double-click resets to `def`. */
export function Knob(props: {
    label: string;
    value: number;
    min?: number;
    max?: number;
    def?: number;
    size?: number;
    onChange: (value: number) => void;
}) {
    const min = props.min ?? 0;
    const max = props.max ?? 1;
    const size = props.size ?? 64;
    const normalized = clamp((props.value - min) / (max - min), 0, 1);
    const angle = -135 + normalized * 270;

    return (
        <label
            class="group relative block rounded-full"
            style={{ width: `${size}px`, height: `${size}px` }}
            title="Drag or use arrow keys · double-click to reset"
            onDblClick={() =>
                props.def !== undefined && props.onChange(props.def)
            }
        >
            <svg
                viewBox="0 0 64 64"
                class="pointer-events-none h-full w-full overflow-visible"
                aria-hidden="true"
            >
                <circle
                    cx="32"
                    cy="32"
                    r="27"
                    fill="var(--panel-2)"
                    stroke="var(--line)"
                    stroke-width="1"
                />
                <circle
                    cx="32"
                    cy="32"
                    r="27"
                    pathLength="100"
                    fill="none"
                    stroke="var(--acid)"
                    stroke-width="2.5"
                    stroke-linecap="round"
                    stroke-dasharray={`${normalized * 75} 100`}
                    transform="rotate(135 32 32)"
                />
                <circle cx="32" cy="32" r="20" fill="var(--panel)" />
                <line
                    x1="32"
                    y1="32"
                    x2="32"
                    y2="15"
                    stroke="var(--paper)"
                    stroke-width="2"
                    stroke-linecap="round"
                    transform={`rotate(${angle} 32 32)`}
                />
                <circle cx="32" cy="32" r="2" fill="var(--mute)" />
            </svg>
            <input
                type="range"
                aria-label={props.label}
                class="absolute inset-0 h-full w-full cursor-ew-resize opacity-0 focus:outline-none"
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
            <span class="pointer-events-none absolute inset-[-3px] rounded-full border border-transparent group-focus-within:border-[var(--line-hot)]" />
        </label>
    );
}
