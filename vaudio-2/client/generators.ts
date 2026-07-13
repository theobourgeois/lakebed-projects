import type { GeneratorSettings } from "../shared/types";

const WIDTH = 640;
const HEIGHT = 360;

function ensureCanvas(canvas: HTMLCanvasElement) {
    if (canvas.width !== WIDTH || canvas.height !== HEIGHT) {
        canvas.width = WIDTH;
        canvas.height = HEIGHT;
    }
}

function hexRgb(hex: string): [number, number, number] {
    return [
        parseInt(hex.slice(1, 3), 16) || 0,
        parseInt(hex.slice(3, 5), 16) || 0,
        parseInt(hex.slice(5, 7), 16) || 0,
    ];
}

function rgba(color: [number, number, number], alpha = 1) {
    return `rgba(${color[0]},${color[1]},${color[2]},${alpha})`;
}

function hash(value: number): number {
    const n = Math.sin(value * 127.1) * 43758.5453;
    return n - Math.floor(n);
}

/** Paint a deterministic, animated source texture and return approximate luma. */
export function paintGenerator(
    canvas: HTMLCanvasElement,
    settings: GeneratorSettings,
    time: number,
): number {
    ensureCanvas(canvas);
    const ctx = canvas.getContext("2d");
    if (!ctx) return 0;
    const a = hexRgb(settings.colorA);
    const b = hexRgb(settings.colorB);
    const speed = 0.08 + settings.speed * 1.8;
    const t = time * speed;
    ctx.clearRect(0, 0, WIDTH, HEIGHT);

    if (settings.kind === "gradient") {
        const cx = WIDTH * (0.5 + Math.sin(t * 0.71) * 0.34);
        const cy = HEIGHT * (0.5 + Math.cos(t * 0.53) * 0.34);
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, WIDTH * 0.75);
        gradient.addColorStop(0, rgba(b));
        gradient.addColorStop(0.55, rgba(a));
        gradient.addColorStop(1, rgba(b, 0.45));
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
    } else if (settings.kind === "noise") {
        const size = Math.max(3, Math.round(18 - settings.detail * 15));
        ctx.fillStyle = rgba(a);
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        for (let y = 0; y < HEIGHT; y += size) {
            for (let x = 0; x < WIDTH; x += size) {
                const n = hash(x * 0.037 + y * 1.31 + Math.floor(t * 12) * 7.7);
                ctx.fillStyle = rgba(b, 0.08 + n * 0.82);
                ctx.fillRect(x, y, size + 1, size + 1);
            }
        }
    } else if (settings.kind === "grid") {
        ctx.fillStyle = rgba(a);
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        const gap = 72 - settings.detail * 52;
        const offsetX = (t * 30) % gap;
        const offsetY = (t * 18) % gap;
        ctx.strokeStyle = rgba(b, 0.68);
        ctx.lineWidth = 1 + settings.detail * 2;
        ctx.beginPath();
        for (let x = offsetX - gap; x < WIDTH + gap; x += gap) {
            ctx.moveTo(x, 0);
            ctx.lineTo(x + Math.sin(t) * 30, HEIGHT);
        }
        for (let y = offsetY - gap; y < HEIGHT + gap; y += gap) {
            ctx.moveTo(0, y);
            ctx.lineTo(WIDTH, y + Math.cos(t * 0.8) * 18);
        }
        ctx.stroke();
    } else if (settings.kind === "stars") {
        ctx.fillStyle = rgba(a);
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        const count = Math.round(80 + settings.detail * 420);
        for (let i = 0; i < count; i++) {
            const z = (hash(i * 4.3) + t * (0.03 + hash(i) * 0.14)) % 1;
            const angle = hash(i * 8.7) * Math.PI * 2;
            const radius = Math.pow(z, 1.7) * WIDTH * 0.72;
            const x = WIDTH / 2 + Math.cos(angle) * radius;
            const y = HEIGHT / 2 + Math.sin(angle) * radius * 0.58;
            const r = 0.4 + z * 2.4;
            ctx.fillStyle = rgba(b, 0.2 + z * 0.8);
            ctx.fillRect(x, y, r, r);
        }
    } else if (settings.kind === "orbits") {
        ctx.fillStyle = rgba(a);
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        const count = Math.round(5 + settings.detail * 18);
        ctx.globalCompositeOperation = "lighter";
        for (let i = 0; i < count; i++) {
            const phase = t * (0.35 + hash(i) * 1.3) + hash(i * 2.1) * 9;
            const radius = 28 + hash(i * 3.7) * 150;
            const x = WIDTH / 2 + Math.cos(phase) * radius * 1.8;
            const y = HEIGHT / 2 + Math.sin(phase * 1.13) * radius;
            const glow = ctx.createRadialGradient(x, y, 0, x, y, 8 + radius * 0.08);
            glow.addColorStop(0, rgba(b, 0.9));
            glow.addColorStop(1, rgba(b, 0));
            ctx.fillStyle = glow;
            ctx.beginPath();
            ctx.arc(x, y, 10 + radius * 0.08, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalCompositeOperation = "source-over";
    } else {
        ctx.fillStyle = rgba(a);
        ctx.fillRect(0, 0, WIDTH, HEIGHT);
        const cell = Math.max(12, 52 - settings.detail * 38);
        for (let y = -cell; y < HEIGHT + cell; y += cell) {
            for (let x = -cell; x < WIDTH + cell; x += cell) {
                const phase = t + hash(x * 0.1 + y) * 8;
                const r = cell * (0.2 + 0.35 * (Math.sin(phase) * 0.5 + 0.5));
                ctx.fillStyle = rgba(b, 0.15 + hash(x + y) * 0.65);
                ctx.beginPath();
                ctx.arc(x + Math.sin(phase * 0.7) * cell * 0.3, y, r, 0, Math.PI * 2);
                ctx.fill();
            }
        }
    }

    return ((a[0] + a[1] + a[2]) + (b[0] + b[1] + b[2])) / (6 * 255);
}
