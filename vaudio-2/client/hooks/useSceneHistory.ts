import { useEffect, useRef } from "preact/hooks";
import { decodeScene, encodeScene, type Scene } from "../../shared/types";

/**
 * Undo/redo over encoded scene snapshots. Edits are debounced so slider
 * drags and key riffs coalesce into a single history entry.
 */
export function useSceneHistory(deps: {
    scene: Scene;
    sceneRef: { current: Scene };
    /** Apply a restored scene: set state, prune selection, rehydrate media. */
    restoreScene: (scene: Scene) => void;
    showToast: (message: string) => void;
}) {
    const historyRef = useRef<{ stack: string[]; index: number }>({
        stack: [],
        index: -1,
    });
    const skipRef = useRef(false);

    useEffect(() => {
        if (skipRef.current) {
            skipRef.current = false;
            return;
        }
        const timer = window.setTimeout(() => {
            const history = historyRef.current;
            const snapshot = encodeScene(deps.scene);
            if (history.stack[history.index] === snapshot) return;
            history.stack = history.stack.slice(0, history.index + 1);
            history.stack.push(snapshot);
            if (history.stack.length > 80) history.stack.shift();
            history.index = history.stack.length - 1;
        }, 400);
        return () => window.clearTimeout(timer);
    }, [deps.scene]);

    function applySnapshot(snapshot: string) {
        skipRef.current = true;
        deps.restoreScene(decodeScene(snapshot));
    }

    function undoScene() {
        const history = historyRef.current;
        const current = encodeScene(deps.sceneRef.current);
        if (history.index >= 0 && history.stack[history.index] !== current) {
            // A change is still inside the debounce window — commit it first
            // so redo can bring it back.
            history.stack = history.stack.slice(0, history.index + 1);
            history.stack.push(current);
            history.index++;
        }
        if (history.index <= 0) {
            deps.showToast("Nothing to undo");
            return;
        }
        history.index--;
        applySnapshot(history.stack[history.index]);
        deps.showToast("Undo");
    }

    function redoScene() {
        const history = historyRef.current;
        if (history.index >= history.stack.length - 1) {
            deps.showToast("Nothing to redo");
            return;
        }
        history.index++;
        applySnapshot(history.stack[history.index]);
        deps.showToast("Redo");
    }

    return { undoScene, redoScene };
}
