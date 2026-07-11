// Viewport (zoom/pan) helpers. The canvas stage registers its DOM element so
// zoom shortcuts and toolbar buttons can zoom about the viewport center.

import { clamp } from "../../shared/types";
import { getState, setState } from "./store";

export const MIN_ZOOM = 0.05;
export const MAX_ZOOM = 8;
const FIT_PADDING = 56;
/** Wheel sensitivity at zoom=1; scales up when zoomed out. */
const WHEEL_ZOOM_SENSITIVITY = 0.0072;

export const viewportEl: { current: HTMLElement | null } = { current: null };

/** Multiplicative zoom step — larger when zoomed out, finer when zoomed in. */
export function zoomStepFactor(zoom: number): number {
    return 1 + 0.25 / Math.sqrt(Math.max(zoom, MIN_ZOOM));
}

/** Wheel zoom sensitivity — stronger when zoomed out. */
export function wheelZoomSensitivity(zoom: number): number {
    return WHEEL_ZOOM_SENSITIVITY / Math.sqrt(Math.max(zoom, MIN_ZOOM));
}

export function screenToWorld(
    clientX: number,
    clientY: number,
): { x: number; y: number } {
    const el = viewportEl.current;
    const { view } = getState();
    const rect = el?.getBoundingClientRect() ?? { left: 0, top: 0 };
    return {
        x: (clientX - rect.left - view.panX) / view.zoom,
        y: (clientY - rect.top - view.panY) / view.zoom,
    };
}

export function zoomAtClient(
    clientX: number,
    clientY: number,
    nextZoom: number,
): void {
    const el = viewportEl.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const { view } = getState();
    const zoom = clamp(nextZoom, MIN_ZOOM, MAX_ZOOM);
    const wx = (clientX - rect.left - view.panX) / view.zoom;
    const wy = (clientY - rect.top - view.panY) / view.zoom;
    setState({
        view: {
            zoom,
            panX: clientX - rect.left - wx * zoom,
            panY: clientY - rect.top - wy * zoom,
        },
    });
}

export function setStatePan(panX: number, panY: number): void {
    const { view } = getState();
    setState({ view: { ...view, panX, panY } });
}

/** Zoom in (`direction > 0`) or out (`direction < 0`) about the viewport center. */
export function zoomBy(direction: number): void {
    const el = viewportEl.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const zoom = getState().view.zoom;
    const step = zoomStepFactor(zoom);
    const factor = direction > 0 ? step : 1 / step;
    zoomAtClient(
        rect.left + rect.width / 2,
        rect.top + rect.height / 2,
        zoom * factor,
    );
}

export function fitDoc(): void {
    const el = viewportEl.current;
    const doc = getState().doc;
    if (!el || !doc) return;
    const rect = el.getBoundingClientRect();
    const zoom = clamp(
        Math.min(
            (rect.width - FIT_PADDING * 2) / doc.width,
            (rect.height - FIT_PADDING * 2) / doc.height,
        ),
        MIN_ZOOM,
        MAX_ZOOM,
    );
    setState({
        view: {
            zoom,
            panX: (rect.width - doc.width * zoom) / 2,
            panY: (rect.height - doc.height * zoom) / 2,
        },
    });
}

export function requestFit(): void {
    setState({ fitVersion: getState().fitVersion + 1 });
}
