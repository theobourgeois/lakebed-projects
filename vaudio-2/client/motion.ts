import type { MotionSettings } from "../shared/types";

const WIDTH = 320;
const HEIGHT = 180;
const HISTORY_MAX = 32;
const PIXELS = WIDTH * HEIGHT;

export type MotionBuffers = {
    sample: HTMLCanvasElement;
    /** Ring of mirrored camera frames (RGBA). */
    history: Uint8ClampedArray[];
    write: number;
    count: number;
    previous?: Uint8ClampedArray;
    trail?: Float32Array;
    freeze?: Uint8ClampedArray;
    freezeLife?: Float32Array;
    lastVideoTime?: number;
    lastMetrics?: MotionMetrics;
    lastMode?: MotionSettings["mode"];
};

export type MotionMetrics = { motion: number; luma: number };

function ensureSize(canvas: HTMLCanvasElement) {
    if (canvas.width !== WIDTH || canvas.height !== HEIGHT) {
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
    }
}

function historyLength(decay: number): number {
    return Math.max(6, Math.min(HISTORY_MAX, Math.round(6 + decay * (HISTORY_MAX - 6))));
}

function pushFrame(buffers: MotionBuffers, frame: Uint8ClampedArray) {
    if (buffers.history.length !== HISTORY_MAX) {
        buffers.history = Array.from(
            { length: HISTORY_MAX },
            () => new Uint8ClampedArray(PIXELS * 4),
        );
        buffers.write = 0;
        buffers.count = 0;
    }
    const slot = buffers.history[buffers.write]!;
    slot.set(frame);
    buffers.write = (buffers.write + 1) % HISTORY_MAX;
    buffers.count = Math.min(HISTORY_MAX, buffers.count + 1);
}

/** Age 0 = newest frame, age length-1 = oldest kept frame. */
function frameAt(buffers: MotionBuffers, age: number, length: number): Uint8ClampedArray {
    const capped = Math.max(0, Math.min(length - 1, age));
    const index = (buffers.write - 1 - capped + HISTORY_MAX * 4) % HISTORY_MAX;
    return buffers.history[index]!;
}

function sampleLumaMotion(
    frame: Uint8ClampedArray,
    previous: Uint8ClampedArray | undefined,
): MotionMetrics & { totalMotion: number; totalLuma: number } {
    let totalMotion = 0;
    let totalLuma = 0;
    for (let i = 0; i < PIXELS; i++) {
        const p = i * 4;
        const r = frame[p]!;
        const g = frame[p + 1]!;
        const b = frame[p + 2]!;
        totalLuma += r * 0.299 + g * 0.587 + b * 0.114;
        if (previous) {
            totalMotion +=
                (Math.abs(r - previous[p]!) +
                    Math.abs(g - previous[p + 1]!) +
                    Math.abs(b - previous[p + 2]!)) /
                3;
        }
    }
    return {
        totalMotion,
        totalLuma,
        motion: totalMotion / (PIXELS * 255),
        luma: totalLuma / (PIXELS * 255),
    };
}

function paintDifference(
    out: Uint8ClampedArray,
    buffers: MotionBuffers,
    frame: Uint8ClampedArray,
    previous: Uint8ClampedArray | undefined,
    mode: "difference" | "silhouette" | "edges",
    threshold: number,
    gain: number,
    decay: number,
): number {
    if (!buffers.trail || buffers.trail.length !== PIXELS) {
        buffers.trail = new Float32Array(PIXELS);
    }
    const trail = buffers.trail;
    const gate = threshold * 110;
    const boost = 1.5 + gain * 8;
    const retention = 0.35 + decay * 0.63;
    let totalMotion = 0;

    for (let i = 0; i < PIXELS; i++) {
        const p = i * 4;
        const r = frame[p]!;
        const g = frame[p + 1]!;
        const b = frame[p + 2]!;
        let difference = 0;
        if (previous) {
            difference =
                (Math.abs(r - previous[p]!) +
                    Math.abs(g - previous[p + 1]!) +
                    Math.abs(b - previous[p + 2]!)) /
                3;
        }
        const active = Math.max(0, difference - gate) * boost;
        trail[i] = Math.max(active, trail[i]! * retention);
        totalMotion += Math.min(255, active);
    }

    for (let i = 0; i < PIXELS; i++) {
        const p = i * 4;
        let value = Math.min(255, trail[i]!);
        if (mode === "edges") {
            const left = i % WIDTH ? trail[i - 1]! : value;
            const above = i >= WIDTH ? trail[i - WIDTH]! : value;
            value = Math.min(
                255,
                Math.abs(value - left) * 2 + Math.abs(value - above) * 2,
            );
        }
        if (mode === "silhouette") {
            const on = value > 24 ? 255 : 0;
            out[p] = on;
            out[p + 1] = on;
            out[p + 2] = on;
            out[p + 3] = on;
        } else {
            out[p] = mode === "edges" ? 120 : value;
            out[p + 1] = Math.min(255, value * 1.4);
            out[p + 2] = 255;
            out[p + 3] = value;
        }
    }

    return totalMotion / (PIXELS * 255);
}

function paintSlit(
    out: Uint8ClampedArray,
    buffers: MotionBuffers,
    length: number,
    threshold: number,
    gain: number,
) {
    // A stack of curved time ribbons. Unlike a plain left-to-right slit scan,
    // the wave makes different parts of the body arrive at different times.
    const span = Math.max(2, Math.floor(length * (0.35 + gain * 0.65)));
    const ribbons = 5 + Math.round(threshold * 15);
    const bend = 0.4 + threshold * 2.2;
    const channelGap = Math.max(1, Math.round(gain * 3));
    for (let y = 0; y < HEIGHT; y++) {
        const v = y / Math.max(1, HEIGHT - 1);
        for (let x = 0; x < WIDTH; x++) {
            const u = x / Math.max(1, WIDTH - 1);
            const wave = Math.sin(v * Math.PI * (2 + ribbons * 0.32) + u * 5) * bend;
            const ribbon = Math.floor((1 - u) * ribbons + wave);
            const age = Math.max(0, Math.min(span - 1,
                Math.floor((ribbon / Math.max(1, ribbons - 1)) * span)));
            const red = frameAt(buffers, Math.min(span - 1, age + channelGap), length);
            const green = frameAt(buffers, age, length);
            const blue = frameAt(buffers, Math.max(0, age - channelGap), length);
            const p = (y * WIDTH + x) * 4;
            out[p] = red[p]!;
            out[p + 1] = green[p + 1]!;
            out[p + 2] = blue[p + 2]!;
            out[p + 3] = 255;
        }
    }
}

function paintEcho(
    out: Uint8ClampedArray,
    buffers: MotionBuffers,
    length: number,
    threshold: number,
    gain: number,
) {
    // Each cell is a complete camera frame from a different moment. The old
    // implementation merely divided the source image into old rectangular
    // patches, which made the grid almost invisible.
    const cols = 2 + Math.round(threshold * 4);
    const rows = Math.max(2, Math.round(cols * HEIGHT / WIDTH + 0.5));
    const cellW = WIDTH / cols;
    const cellH = HEIGHT / rows;
    const gap = Math.max(1, Math.round(1 + gain * 2));
    const newest = frameAt(buffers, 0, length);

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            const tile = row % 2 ? row * cols + (cols - 1 - col) : row * cols + col;
            const tileCount = cols * rows;
            const age = Math.min(
                length - 1,
                Math.floor((tile / Math.max(1, tileCount - 1)) *
                    (length - 1) * (0.3 + gain * 0.7)),
            );
            const src = frameAt(buffers, age, length);
            const x0 = Math.floor(col * cellW);
            const y0 = Math.floor(row * cellH);
            const x1 = Math.floor((col + 1) * cellW);
            const y1 = Math.floor((row + 1) * cellH);
            for (let y = y0; y < y1; y++) {
                for (let x = x0; x < x1; x++) {
                    const p = (y * WIDTH + x) * 4;
                    const localX = x - x0;
                    const localY = y - y0;
                    if (localX < gap || localY < gap || x1 - x <= gap || y1 - y <= gap) {
                        out[p] = newest[p]! * 0.1;
                        out[p + 1] = newest[p + 1]! * 0.1;
                        out[p + 2] = newest[p + 2]! * 0.14;
                        out[p + 3] = 255;
                        continue;
                    }
                    let u = localX / Math.max(1, x1 - x0 - 1);
                    const v = localY / Math.max(1, y1 - y0 - 1);
                    if ((row + col) % 2) u = 1 - u;
                    const sx = Math.max(0, Math.min(WIDTH - 1, Math.floor(u * WIDTH)));
                    const sy = Math.max(0, Math.min(HEIGHT - 1, Math.floor(v * HEIGHT)));
                    const sp = (sy * WIDTH + sx) * 4;
                    const tint = age / Math.max(1, length - 1);
                    out[p] = src[sp]! * (1 - tint * 0.16);
                    out[p + 1] = src[sp + 1]! * (1 - tint * 0.08);
                    out[p + 2] = Math.min(255, src[sp + 2]! * (1 + tint * 0.14));
                    out[p + 3] = 255;
                }
            }
        }
    }
}

function paintSmear(
    out: Uint8ClampedArray,
    buffers: MotionBuffers,
    length: number,
    frame: Uint8ClampedArray,
    previous: Uint8ClampedArray | undefined,
    threshold: number,
    gain: number,
) {
    const gate = 4 + threshold * 55;
    const span = Math.max(2, Math.floor(length * (0.3 + gain * 0.7)));
    const oldA = frameAt(buffers, Math.max(1, Math.floor(span * 0.32)), length);
    const oldB = frameAt(buffers, Math.max(1, Math.floor(span * 0.67)), length);
    const oldC = frameAt(buffers, span - 1, length);
    const offset = 2 + Math.round(gain * 18);

    for (let y = 0; y < HEIGHT; y++) {
        const wave = Math.sin(y * 0.075) * offset * 0.45;
        for (let x = 0; x < WIDTH; x++) {
            const i = y * WIDTH + x;
            const p = i * 4;
            const r = frame[p]!;
            const g = frame[p + 1]!;
            const b = frame[p + 2]!;
            let difference = 0;
            if (previous) {
                difference =
                    (Math.abs(r - previous[p]!) +
                        Math.abs(g - previous[p + 1]!) +
                        Math.abs(b - previous[p + 2]!)) /
                    3;
            }
            const active = Math.max(0, Math.min(1, (difference - gate) / 90));
            const mix = (0.16 + gain * 0.42) * (0.3 + active * 0.7);
            const drift = Math.round(wave + offset * active);
            const xA = Math.max(0, Math.min(WIDTH - 1, x - drift));
            const xB = Math.max(0, Math.min(WIDTH - 1, x + Math.round(drift * 0.55)));
            const yC = Math.max(
                0,
                Math.min(HEIGHT - 1, y - Math.round(offset * active * 0.4)),
            );
            const pA = (y * WIDTH + xA) * 4;
            const pB = (y * WIDTH + xB) * 4;
            const pC = (yC * WIDTH + x) * 4;
            out[p] =
                r * (1 - mix) + (oldA[pA]! * 0.7 + oldC[pC]! * 0.3) * mix;
            out[p + 1] = g * (1 - mix) + oldB[pB + 1]! * mix;
            out[p + 2] =
                b * (1 - mix) +
                (oldC[pC + 2]! * 0.72 + oldA[pA + 2]! * 0.28) * mix;
            out[p + 3] = 255;
        }
    }
}

function paintFreeze(
    out: Uint8ClampedArray,
    buffers: MotionBuffers,
    frame: Uint8ClampedArray,
    previous: Uint8ClampedArray | undefined,
    threshold: number,
    gain: number,
    decay: number,
) {
    if (!buffers.freeze || buffers.freeze.length !== frame.length) {
        buffers.freeze = new Uint8ClampedArray(frame);
    }
    if (!buffers.freezeLife || buffers.freezeLife.length !== PIXELS) {
        buffers.freezeLife = new Float32Array(PIXELS);
    }
    const freeze = buffers.freeze;
    const life = buffers.freezeLife;
    const block = Math.max(6, Math.round(8 + gain * 24));
    const motionGate = 3 + threshold * 32;
    const release = 1 / (10 + decay * 75);
    const history = Math.min(buffers.count, historyLength(decay));

    for (let by = 0; by < HEIGHT; by += block) {
        for (let bx = 0; bx < WIDTH; bx += block) {
            let motion = 0;
            let samples = 0;
            const y1 = Math.min(HEIGHT, by + block);
            const x1 = Math.min(WIDTH, bx + block);
            if (previous) {
                for (let y = by; y < y1; y++) {
                    for (let x = bx; x < x1; x++) {
                        const p = (y * WIDTH + x) * 4;
                        motion +=
                            (Math.abs(frame[p]! - previous[p]!) +
                                Math.abs(frame[p + 1]! - previous[p + 1]!) +
                                Math.abs(frame[p + 2]! - previous[p + 2]!)) /
                            3;
                        samples += 1;
                    }
                }
            }
            const avg = samples ? motion / samples : 0;
            const stateIndex = by * WIDTH + bx;
            let remaining = life[stateIndex]!;

            if (remaining <= 0 && avg > motionGate) {
                // Motion captures a block once, then the block stays latched
                // while the live image continues behind it.
                const hash = ((bx * 73856093) ^ (by * 19349663)) >>> 0;
                remaining = 0.62 + (hash % 100) / 270;
                const age = Math.min(history - 1, 1 + (hash % Math.max(1, history - 1)));
                const source = frameAt(buffers, age, history);
                const shiftX = ((hash % 3) - 1) * Math.round(gain * 7);
                const shiftY = (((hash >>> 3) % 3) - 1) * Math.round(gain * 4);
                for (let y = by; y < y1; y++) {
                    for (let x = bx; x < x1; x++) {
                        const p = (y * WIDTH + x) * 4;
                        const sx = Math.max(0, Math.min(WIDTH - 1, x + shiftX));
                        const sy = Math.max(0, Math.min(HEIGHT - 1, y + shiftY));
                        const sp = (sy * WIDTH + sx) * 4;
                        freeze[p] = source[sp]!;
                        freeze[p + 1] = source[sp + 1]!;
                        freeze[p + 2] = source[sp + 2]!;
                        freeze[p + 3] = 255;
                    }
                }
            }
            life[stateIndex] = Math.max(0, remaining - release);
            const frozen = Math.min(1, remaining * 5);

            for (let y = by; y < y1; y++) {
                for (let x = bx; x < x1; x++) {
                    const p = (y * WIDTH + x) * 4;
                    out[p] = frame[p]! * (1 - frozen) + freeze[p]! * frozen;
                    out[p + 1] =
                        frame[p + 1]! * (1 - frozen) + freeze[p + 1]! * frozen;
                    out[p + 2] =
                        frame[p + 2]! * (1 - frozen) + freeze[p + 2]! * frozen;
                    out[p + 3] = 255;
                }
            }
        }
    }
}

/** Temporal camera looks driven by a short rolling webcam history. */
export function paintMotion(
    output: HTMLCanvasElement,
    video: HTMLVideoElement,
    buffers: MotionBuffers,
    settings: MotionSettings,
): MotionMetrics {
    ensureSize(output);
    ensureSize(buffers.sample);
    const sampleCtx = buffers.sample.getContext("2d", { willReadFrequently: true });
    const outCtx = output.getContext("2d");
    if (!sampleCtx || !outCtx) return { motion: 0, luma: 0 };

    // The app renders faster than most webcams capture. Processing duplicate
    // video frames polluted the history and made every other motion sample zero.
    const videoTime = video.currentTime;
    if (videoTime > 0 && buffers.lastVideoTime === videoTime && buffers.lastMetrics) {
        return buffers.lastMetrics;
    }
    buffers.lastVideoTime = videoTime;

    if (buffers.lastMode !== settings.mode) {
        buffers.trail = undefined;
        buffers.freeze = undefined;
        buffers.freezeLife = undefined;
        buffers.lastMode = settings.mode;
    }

    sampleCtx.save();
    sampleCtx.translate(WIDTH, 0);
    sampleCtx.scale(-1, 1);
    sampleCtx.drawImage(video, 0, 0, WIDTH, HEIGHT);
    sampleCtx.restore();

    const frame = sampleCtx.getImageData(0, 0, WIDTH, HEIGHT);
    pushFrame(buffers, frame.data);
    const length = Math.min(buffers.count, historyLength(settings.decay));
    const base = sampleLumaMotion(frame.data, buffers.previous);
    let motion = base.motion;
    const outputData = outCtx.createImageData(WIDTH, HEIGHT);
    const out = outputData.data;

    switch (settings.mode) {
        case "difference":
        case "silhouette":
        case "edges": {
            motion = paintDifference(
                out,
                buffers,
                frame.data,
                buffers.previous,
                settings.mode,
                settings.threshold,
                settings.gain,
                settings.decay,
            );
            break;
        }
        case "slit":
            paintSlit(out, buffers, length, settings.threshold, settings.gain);
            break;
        case "echo":
            paintEcho(out, buffers, length, settings.threshold, settings.gain);
            break;
        case "smear":
            paintSmear(
                out,
                buffers,
                length,
                frame.data,
                buffers.previous,
                settings.threshold,
                settings.gain,
            );
            break;
        case "freeze":
            paintFreeze(
                out,
                buffers,
                frame.data,
                buffers.previous,
                settings.threshold,
                settings.gain,
                settings.decay,
            );
            break;
        default: {
            const _exhaustive: never = settings.mode;
            return _exhaustive;
        }
    }

    outCtx.putImageData(outputData, 0, 0);
    if (!buffers.previous || buffers.previous.length !== frame.data.length) {
        buffers.previous = new Uint8ClampedArray(frame.data.length);
    }
    buffers.previous.set(frame.data);
    const metrics = { motion, luma: base.luma };
    buffers.lastMetrics = metrics;
    return metrics;
}
