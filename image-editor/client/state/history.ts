// Command-based undo/redo. Each entry owns closures that re-apply or revert a
// change through the same action paths that made it, so undo/redo also
// persists (and stays optimistic) like any other edit.

import { getState, setState } from "./store";

export type HistoryEntry = {
  label: string;
  undo: () => void;
  redo: () => void;
};

const LIMIT = 100;

let undoStack: HistoryEntry[] = [];
let redoStack: HistoryEntry[] = [];

function bump(): void {
  setState({ histVersion: getState().histVersion + 1 });
}

export function pushHistory(entry: HistoryEntry): void {
  undoStack.push(entry);
  if (undoStack.length > LIMIT) undoStack.shift();
  redoStack = [];
  bump();
}

export function resetHistory(): void {
  undoStack = [];
  redoStack = [];
  bump();
}

export function canUndo(): boolean {
  return undoStack.length > 0;
}

export function canRedo(): boolean {
  return redoStack.length > 0;
}

export function undo(): void {
  const entry = undoStack.pop();
  if (!entry) return;
  entry.undo();
  redoStack.push(entry);
  bump();
}

export function redo(): void {
  const entry = redoStack.pop();
  if (!entry) return;
  entry.redo();
  undoStack.push(entry);
  bump();
}
