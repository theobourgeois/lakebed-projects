// Left tool rail: move / hand tools.

import { setState, useEditor, type Tool } from "../state/store";
import { FiHand, FiMousePointer } from "./Icons";

const TOOLS: Array<{ id: Tool; label: string; hint: string; icon: typeof FiHand }> = [
  { id: "move", label: "Move", hint: "V", icon: FiMousePointer },
  { id: "hand", label: "Hand", hint: "H", icon: FiHand }
];

export function Toolbar() {
  const tool = useEditor((s) => s.tool);
  return (
    <aside className="tool-rail">
      {TOOLS.map((t) => {
        const ToolIcon = t.icon;
        return (
          <button
            key={t.id}
            type="button"
            title={`${t.label} (${t.hint})`}
            aria-label={t.label}
            onClick={() => setState({ tool: t.id })}
            className={`tool-button ${tool === t.id ? "active" : ""}`}
          >
            <ToolIcon />
          </button>
        );
      })}
    </aside>
  );
}
