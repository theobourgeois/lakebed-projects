// Tiny observable store for the editor. While a project is open, this doc is
// the single source of truth: pointer gestures mutate it synchronously for
// instant feedback, and persistence happens in the background (see persist.ts).

import { useEffect, useRef, useState } from "preact/hooks";
import type { ProjectDoc } from "../../shared/types";

export type Tool = "move" | "hand";
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
  fitVersion: 0
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
