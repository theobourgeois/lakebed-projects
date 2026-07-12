// Coordinates clearing the live brush overlay only after the committed layer
// bitmap is on screen — and never while the user is mid-stroke.

let clearOverlay: (() => void) | null = null;
let pendingSrc: string | null = null;
let gestureActive = false;

export function registerBrushOverlayClear(fn: () => void): () => void {
  clearOverlay = fn;
  return () => {
    if (clearOverlay === fn) clearOverlay = null;
  };
}

export function armBrushOverlayClear(src: string): void {
  pendingSrc = src;
}

/** Start a live stroke: cancel any deferred clear and wipe the overlay first. */
export function beginBrushGesture(): void {
  pendingSrc = null;
  gestureActive = true;
  clearOverlay?.();
}

export function endBrushGesture(): void {
  gestureActive = false;
}

function tryClearOverlay(): void {
  // Never wipe the canvas while the user is drawing — that drops the start of
  // the new stroke when a previous commit finally lands on the layer.
  if (gestureActive) {
    pendingSrc = null;
    return;
  }
  clearOverlay?.();
}

export function noteLayerSrcPresented(src: string): void {
  if (!pendingSrc || src !== pendingSrc) return;
  pendingSrc = null;
  tryClearOverlay();
}

export function clearBrushOverlayNow(): void {
  pendingSrc = null;
  tryClearOverlay();
}
