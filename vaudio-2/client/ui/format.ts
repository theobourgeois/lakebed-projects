/** Value formatters shared by sliders and readouts. */

export function formatDeg(value: number): string {
    return `${Math.round(value)}°`;
}

export function formatX(value: number): string {
    return `${value.toFixed(2)}×`;
}

export function pad3(value: number, min = 0, max = 1): string {
    return String(Math.round(((value - min) / (max - min)) * 100)).padStart(
        3,
        "0",
    );
}
