import type { GlobalFx } from "../shared/types";

/** Keyboard maps for play mode — the canvas-as-instrument layout. */

export const PLAY_FX_KEYS: {
    code: string;
    cap: string;
    param: keyof GlobalFx;
    label: string;
}[] = [
    { code: "KeyQ", cap: "Q", param: "warp", label: "warp" },
    { code: "KeyW", cap: "W", param: "swirl", label: "swirl" },
    { code: "KeyE", cap: "E", param: "ripple", label: "ripple" },
    { code: "KeyR", cap: "R", param: "zoom", label: "tunnel" },
    { code: "KeyT", cap: "T", param: "kaleido", label: "kaleido" },
    { code: "KeyY", cap: "Y", param: "mirror", label: "mirror" },
    { code: "KeyU", cap: "U", param: "chroma", label: "prism" },
    { code: "KeyI", cap: "I", param: "feedback", label: "echo" },
    { code: "KeyO", cap: "O", param: "trails", label: "trails" },
    { code: "KeyP", cap: "P", param: "strobe", label: "strobe" },
];

export const PLAY_PIANO: { code: string; cap: string }[] = [
    { code: "KeyA", cap: "A" },
    { code: "KeyS", cap: "S" },
    { code: "KeyD", cap: "D" },
    { code: "KeyF", cap: "F" },
    { code: "KeyG", cap: "G" },
    { code: "KeyH", cap: "H" },
    { code: "KeyJ", cap: "J" },
    { code: "KeyK", cap: "K" },
    { code: "KeyL", cap: "L" },
    { code: "Semicolon", cap: ";" },
    { code: "Quote", cap: "'" },
];

/** Bottom-row layer strikes (Z–/ → layers 1–10). */
export const PLAY_LAYER_KEYS: { code: string; cap: string }[] = [
    { code: "KeyZ", cap: "Z" },
    { code: "KeyX", cap: "X" },
    { code: "KeyC", cap: "C" },
    { code: "KeyV", cap: "V" },
    { code: "KeyB", cap: "B" },
    { code: "KeyN", cap: "N" },
    { code: "KeyM", cap: "M" },
    { code: "Comma", cap: "," },
    { code: "Period", cap: "." },
    { code: "Slash", cap: "/" },
];

/** Backquote + digit row, index-aligned with WORLD_PRESETS. */
export const PLAY_PRESET_CODES = [
    "Backquote",
    "Digit1",
    "Digit2",
    "Digit3",
    "Digit4",
    "Digit5",
    "Digit6",
    "Digit7",
    "Digit8",
    "Digit9",
    "Digit0",
];

export function hslToHex(
    hueDeg: number,
    saturation: number,
    lightness: number,
): string {
    const a = saturation * Math.min(lightness, 1 - lightness);
    const channel = (n: number) => {
        const k = (n + hueDeg / 30) % 12;
        const c = lightness - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        return Math.round(c * 255)
            .toString(16)
            .padStart(2, "0");
    };
    return `#${channel(0)}${channel(8)}${channel(4)}`;
}
