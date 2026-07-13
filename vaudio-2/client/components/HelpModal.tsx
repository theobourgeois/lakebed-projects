import { Modal } from "../ui";
import { PLAY_FX_KEYS, PLAY_LAYER_KEYS, PLAY_PIANO } from "../playmap";
import { WORLD_PRESETS } from "../presets";

type HelpKeyGroup = "preset" | "fx" | "note" | "layer" | "sys" | "none";

type HelpKeyDef = {
    cap: string;
    label?: string;
    u?: number;
    group: HelpKeyGroup;
    hue?: number;
};

function HelpKeyCap(props: HelpKeyDef & { key?: string | number }) {
    let border = "var(--line)";
    let capColor = "var(--paper)";
    let labelColor = "var(--mute)";
    let background = "var(--panel)";
    if (props.group === "preset") {
        border = "rgba(232,230,224,0.4)";
        labelColor = "var(--acid)";
        background = "rgba(232,230,224,0.05)";
    } else if (props.group === "fx") {
        border = "rgba(168,120,128,0.55)";
        labelColor = "#cf9aa6";
        background = "rgba(168,120,128,0.09)";
    } else if (props.group === "note") {
        const hue = props.hue ?? 0;
        border = `hsla(${hue}, 70%, 60%, 0.75)`;
        labelColor = `hsl(${hue}, 75%, 68%)`;
        capColor = `hsl(${hue}, 60%, 84%)`;
        background = `hsla(${hue}, 70%, 50%, 0.13)`;
    } else if (props.group === "layer") {
        border = "rgba(125,165,131,0.55)";
        labelColor = "#9cc4a2";
        background = "rgba(125,165,131,0.09)";
    } else if (props.group === "none") {
        capColor = "var(--track)";
    }
    return (
        <div
            class="flex h-[46px] flex-shrink-0 flex-col items-center justify-center gap-1 border px-0.5 text-center"
            style={{
                width: `${(props.u ?? 1) * 46}px`,
                borderColor: border,
                background,
            }}
        >
            <span
                class="font-mono text-[11px] leading-none"
                style={{ color: capColor }}
            >
                {props.cap}
            </span>
            {props.label ? (
                <span
                    class="text-[6.5px] uppercase leading-none tracking-[0.08em]"
                    style={{ color: labelColor }}
                >
                    {props.label}
                </span>
            ) : null}
        </div>
    );
}

function HelpList(props: { title: string; items: [string, string][] }) {
    return (
        <div>
            <h3 class="mb-2 text-[9px] font-medium uppercase tracking-[0.16em] text-[var(--acid)]">
                {props.title}
            </h3>
            <ul class="space-y-1.5">
                {props.items.map(([term, body]) => (
                    <li
                        key={term}
                        class="font-mono text-[9.5px] leading-relaxed text-[var(--mute)]"
                    >
                        <span class="text-[var(--paper)]">{term}</span> — {body}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function HelpModal(props: { onClose: () => void }) {
    const noteHue = (index: number) =>
        Math.round((index / PLAY_PIANO.length) * 360);
    const rows: { offset: number; keys: HelpKeyDef[] }[] = [
        {
            offset: 0,
            keys: [
                { cap: "`", label: "00", group: "preset" },
                ...WORLD_PRESETS.slice(1).map((preset, index) => ({
                    cap: String((index + 1) % 10),
                    label: preset.code,
                    group: "preset" as const,
                })),
                { cap: "-", label: "mutate", group: "sys" },
                { cap: "=", label: "chaos", group: "sys" },
                { cap: "⌫", u: 1.6, label: "wash", group: "sys" },
                { cap: "⇧⌫", u: 1.5, label: "reset", group: "sys" },
            ],
        },
        {
            offset: 0,
            keys: [
                { cap: "⇥", u: 1.4, label: "hide ui", group: "sys" },
                ...PLAY_FX_KEYS.map((key) => ({
                    cap: key.cap,
                    label: key.label,
                    group: "fx" as const,
                })),
                { cap: "[", label: "slower", group: "fx" },
                { cap: "]", label: "faster", group: "fx" },
                { cap: "\\", u: 1.2, label: "solar", group: "fx" },
            ],
        },
        {
            offset: 16,
            keys: [
                { cap: "⇪", u: 1.7, group: "none" },
                ...PLAY_PIANO.map((key, index) => ({
                    cap: key.cap,
                    label: "♪",
                    group: "note" as const,
                    hue: noteHue(index),
                })),
                { cap: "⏎", u: 2.0, label: "record", group: "sys" },
            ],
        },
        {
            offset: 30,
            keys: [
                { cap: "⇧", u: 2.2, label: "invert", group: "sys" },
                ...PLAY_LAYER_KEYS.map((key, index) => ({
                    cap: key.cap,
                    label: `lyr ${index + 1}`,
                    group: "layer" as const,
                })),
                { cap: "⇧ /", u: 1.5, label: "manual", group: "sys" },
            ],
        },
        {
            offset: 170,
            keys: [{ cap: "space", u: 7, label: "freeze time", group: "sys" }],
        },
    ];
    return (
        <Modal
            title="Controls"
            onClose={props.onClose}
            maxWidth="max-w-[840px]"
            headerExtra={
                <span class="hidden font-mono text-[9px] uppercase tracking-wide text-[var(--mute)] sm:inline">
                    undo / redo covers every change
                </span>
            }
        >
            <div class="overflow-x-auto p-4">
                <div class="flex min-w-[740px] flex-col gap-1">
                    {rows.map((row, rowIndex) => (
                        <div
                            key={rowIndex}
                            class="flex gap-1"
                            style={{ marginLeft: `${row.offset}px` }}
                        >
                            {row.keys.map((key, keyIndex) => (
                                <HelpKeyCap
                                    key={keyIndex}
                                    cap={key.cap}
                                    label={key.label}
                                    u={key.u}
                                    group={key.group}
                                    hue={key.hue}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div class="grid gap-5 border-t border-[var(--line)] p-4 sm:grid-cols-3">
                <HelpList
                    title="Mouse"
                    items={[
                        ["click a layer", "applies to that layer only"],
                        ["shift+click", "subtract instead of add"],
                        ["double-click", "cycle kaleidoscope"],
                        ["drag + release", "set echo trail direction"],
                        [
                            "right-click",
                            "calm FX on the world or the layer under the cursor",
                        ],
                        ["wheel", "hue · shift+wheel = saturation"],
                    ]}
                />
                <HelpList
                    title="Keyboard"
                    items={[
                        ["number row", "world presets 00–10"],
                        [
                            "qwerty row",
                            "raise an effect · shift lowers · hold to ramp",
                        ],
                        [
                            "home row",
                            "set all layers to a hue · shift sets background",
                        ],
                        ["bottom row", "reroll layer FX · shift resets"],
                        ["[ ]", "time slower / faster · \\ solarize"],
                        ["- / =", "mutate / chaos"],
                        ["arrows", "← → hue · ↑ ↓ saturation"],
                        ["backspace", "reset world FX"],
                        ["⇧backspace", "reset all settings"],
                    ]}
                />
                <HelpList
                    title="Global"
                    items={[
                        ["esc", "arrange mode"],
                        ["P", "play mode (from arrange)"],
                        ["space", "freeze time"],
                        ["enter", "start / stop recording"],
                        ["⇧enter", "export PNG"],
                        ["tab", "hide UI"],
                        ["⌘Z / ⇧⌘Z", "undo / redo"],
                        ["field", "cursor mode under Cursor settings"],
                        ["MIDI / pad", "learn controls in any Modulation section"],
                    ]}
                />
            </div>
        </Modal>
    );
}
