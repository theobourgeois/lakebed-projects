/** Full-width switch row with a label and optional hint text. */
export function Toggle(props: {
    label: string;
    hint?: string;
    checked: boolean;
    disabled?: boolean;
    onChange: (checked: boolean) => void;
}) {
    return (
        <button
            type="button"
            role="switch"
            aria-checked={props.checked}
            disabled={props.disabled}
            onClick={() => props.onChange(!props.checked)}
            class="flex w-full items-center gap-3 border border-[var(--line)] bg-[var(--panel)] px-3 py-3 text-left transition-colors hover:border-[var(--line-hot)] disabled:opacity-40"
        >
            <span class="min-w-0 flex-1">
                <span class="block font-mono text-[11px] text-[var(--paper)]">
                    {props.label}
                </span>
                {props.hint && (
                    <span class="mt-1 block font-mono text-[9.5px] leading-relaxed text-[var(--mute)]">
                        {props.hint}
                    </span>
                )}
            </span>
            <span
                class={`mt-0.5 flex h-[18px] w-[34px] flex-shrink-0 items-center border px-0.5 transition-colors ${
                    props.checked
                        ? "border-[var(--acid)] bg-[var(--acid)]/20"
                        : "border-[var(--line)] bg-[var(--void)]"
                }`}
                aria-hidden="true"
            >
                <span
                    class={`h-[12px] w-[12px] transition-transform ${
                        props.checked
                            ? "translate-x-[14px] bg-[var(--acid)]"
                            : "translate-x-0 bg-[var(--mute)]"
                    }`}
                />
            </span>
        </button>
    );
}
