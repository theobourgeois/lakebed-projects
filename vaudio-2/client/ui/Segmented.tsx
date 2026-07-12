/** Labeled row of mutually exclusive segments; value is the selected index. */
export function Segmented(props: {
    label: string;
    options: readonly string[];
    value: number;
    onChange: (index: number) => void;
}) {
    return (
        <div class="px-3 py-[5px]">
            <div class="mb-1 text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                {props.label}
            </div>
            <div class="flex">
                {props.options.map((option, index) => (
                    <button
                        key={option}
                        type="button"
                        onClick={() => props.onChange(index)}
                        class={`h-6 flex-1 border border-r-0 border-[var(--line)] text-[9px] uppercase tracking-wide last:border-r ${
                            Math.round(props.value) === index
                                ? "bg-[var(--acid)] text-[var(--void)]"
                                : "bg-[var(--panel)] text-[var(--mute)] hover:text-[var(--paper)]"
                        }`}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </div>
    );
}
