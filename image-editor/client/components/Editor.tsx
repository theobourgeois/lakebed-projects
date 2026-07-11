// The editor screen: loads the project doc from the live queries exactly once
// per project id (after that the local doc is authoritative and query pushes
// are ignored — they are just our own writes echoing back), and owns global
// keyboard shortcuts.

import { Link, useQuery, useParams } from "lakebed/client";
import { useEffect, useRef, useState } from "preact/hooks";
import type { LayerRow, ProjectMeta } from "../../shared/types";
import {
  closeProject,
  deleteSelection,
  duplicateSelection,
  nudgeSelection,
  openProject,
  setSelection
} from "../state/actions";
import { queryResult } from "../state/api";
import { redo, undo } from "../state/history";
import { getState, setState, useEditor } from "../state/store";
import { requestFit, zoomBy } from "../state/view";
import { CanvasStage } from "./CanvasStage";
import { LayersPanel } from "./LayersPanel";
import { Toolbar } from "./Toolbar";
import { TopBar } from "./TopBar";

type LayerRowWithProject = LayerRow & { projectId: string };

function isTypingTarget(target: EventTarget | null): boolean {
  const el = target as HTMLElement | null;
  if (!el) return false;
  return el.tagName === "INPUT" || el.tagName === "TEXTAREA" || el.isContentEditable;
}

function useEditorShortcuts() {
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (isTypingTarget(e.target)) return;
      const mod = e.metaKey || e.ctrlKey;

      if (e.code === "Space") {
        if (!getState().spacePan) setState({ spacePan: true });
        e.preventDefault();
        return;
      }
      if (mod && e.key.toLowerCase() === "z") {
        e.preventDefault();
        if (e.shiftKey) redo();
        else undo();
        return;
      }
      if (mod && e.key.toLowerCase() === "y") {
        e.preventDefault();
        redo();
        return;
      }
      if (mod && e.key.toLowerCase() === "d") {
        e.preventDefault();
        duplicateSelection();
        return;
      }
      if (mod && (e.key === "=" || e.key === "+")) {
        e.preventDefault();
        zoomBy(1);
        return;
      }
      if (mod && e.key === "-") {
        e.preventDefault();
        zoomBy(-1);
        return;
      }
      if (mod && e.key === "0") {
        e.preventDefault();
        requestFit();
        return;
      }
      if (e.key === "Delete" || e.key === "Backspace") {
        e.preventDefault();
        deleteSelection();
        return;
      }
      if (e.key === "Escape") {
        setSelection([]);
        return;
      }
      if (e.key === "v" || e.key === "V") {
        setState({ tool: "move" });
        return;
      }
      if (e.key === "h" || e.key === "H") {
        setState({ tool: "hand" });
        return;
      }
      const step = e.shiftKey ? 10 : 1;
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        nudgeSelection(-step, 0);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        nudgeSelection(step, 0);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        nudgeSelection(0, -step);
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        nudgeSelection(0, step);
      }
    }

    function onKeyUp(e: KeyboardEvent) {
      if (e.code === "Space") setState({ spacePan: false });
    }
    function onBlur() {
      setState({ spacePan: false });
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("blur", onBlur);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("blur", onBlur);
    };
  }, []);
}

export function Editor() {
  const params = useParams<{ id?: string }>();
  const id = params.id ?? "";
  const projects = queryResult<ProjectMeta>(useQuery("projects"));
  const layerRows = queryResult<LayerRowWithProject>(useQuery("layers"));
  const doc = useEditor((s) => s.doc);
  const [timedOut, setTimedOut] = useState(false);
  const openedRef = useRef<string | null>(null);

  useEffect(() => {
    if (!projects.ready || !layerRows.ready || openedRef.current === id) return;
    const meta = projects.items.find((p) => p.id === id);
    if (!meta) return;
    openedRef.current = id;
    openProject(meta, layerRows.items.filter((row) => row.projectId === id));
  }, [projects, layerRows, id]);

  useEffect(
    () => () => {
      openedRef.current = null;
      closeProject();
    },
    []
  );

  // A freshly created project can lag its query push by a beat; only report
  // "not found" if it stays missing.
  const loaded = doc?.id === id;
  useEffect(() => {
    if (loaded) return;
    setTimedOut(false);
    const timer = window.setTimeout(() => setTimedOut(true), 3000);
    return () => clearTimeout(timer);
  }, [loaded, id]);

  useEditorShortcuts();

  if (!loaded) {
    return (
      <div className="loading-page">
        {timedOut && projects.ready ? (
          <>
            <p>Project not found</p>
            <Link to="/" className="button">
              Back to projects
            </Link>
          </>
        ) : (
          <p>Loading project…</p>
        )}
      </div>
    );
  }

  return (
    <div className="editor-shell">
      <TopBar />
      <div className="editor-main">
        <Toolbar />
        <CanvasStage />
        <LayersPanel />
      </div>
    </div>
  );
}
