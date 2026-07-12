// Tiny observable store for the editor. While a project is open, this doc is
// the single source of truth: pointer gestures mutate it synchronously for
// instant feedback, and persistence happens in the background (see persist.ts).

import { useEffect, useRef, useState } from "preact/hooks";
import type { BlendMode, ProjectDoc, TextAlign } from "../../shared/types";

export type Tool = "move" | "hand" | "text" | "brush" | "crop";
export type SaveStatus = "saved" | "saving" | "retrying";

export type EditorView = { zoom: number; panX: number; panY: number };

export type EditorState = {
  doc: ProjectDoc | null;
  selection: string[];
  tool: Tool;
  spacePan: boolean;
  view: EditorView;
  saveStatus: SaveStatus;
  pendingOps: number;
  saveError: string | null;
  /** Bumped whenever the undo/redo stacks change, so the UI re-reads them. */
  histVersion: number;
  /** Bumped to ask the canvas to re-fit the artboard to the viewport. */
  fitVersion: number;
  brushSize: number;
  brushHardness: number;
  brushOpacity: number;
  brushFlow: number;
  foregroundColor: string;
  backgroundColor: string;
  textFontFamily: string;
  textFontSize: number;
  textFontWeight: number;
  textAlign: TextAlign;
  textLineHeight: number;
  textEditing: { id: string; draft: string } | null;
  cropRect: { x: number; y: number; w: number; h: number } | null;
  snapGuides: { x?: number; y?: number } | null;
  blendPreview: BlendMode | null;
};

let state: EditorState = {
  doc: null,
  selection: [],
  tool: "move",
  spacePan: false,
  view: { zoom: 1, panX: 0, panY: 0 },
  saveStatus: "saved",
  pendingOps: 0,
  saveError: null,
  histVersion: 0,
  fitVersion: 0,
  brushSize: 16,
  brushHardness: 80,
  brushOpacity: 100,
  brushFlow: 100,
  foregroundColor: "#111111",
  backgroundColor: "#ffffff",
  textFontFamily: "Instrument Sans",
  textFontSize: 48,
  textFontWeight: 400,
  textAlign: "left",
  textLineHeight: 1.2,
  textEditing: null,
  cropRect: null,
  snapGuides: null,
  blendPreview: null
};

const listeners = new Set<() => void>();

export function getState(): EditorState {
  return state;
}

export function setState(patch: Partial<EditorState>): void {
  state = { ...state, ...patch };
  for (const listener of [...listeners]) {
    listener();
  }
}

export function updateDoc(fn: (doc: ProjectDoc) => ProjectDoc): void {
  if (!state.doc) return;
  setState({ doc: fn(state.doc) });
}

export function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

/** Subscribe a component to a slice of editor state (Object.is comparison). */
export function useEditor<T>(selector: (s: EditorState) => T): T {
  const selectorRef = useRef(selector);
  selectorRef.current = selector;
  const [value, setValue] = useState(() => selector(state));
  const valueRef = useRef(value);
  valueRef.current = value;

  useEffect(() => {
    const check = () => {
      const next = selectorRef.current(state);
      if (!Object.is(next, valueRef.current)) {
        valueRef.current = next;
        setValue(() => next);
      }
    };
    check();
    return subscribe(check);
  }, []);

  return value;
}
