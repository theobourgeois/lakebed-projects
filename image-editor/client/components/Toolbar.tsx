// Left tool rail: move / hand tools.

import { useEffect, useRef, useState } from "preact/hooks";
import { finishTextEditing, updateTextLayer } from "../state/actions";
import { setState, useEditor, type Tool } from "../state/store";
import { FiBrush, FiCrop, FiHand, FiMousePointer, FiType } from "./Icons";
import { ColorPicker } from "./PropertiesPanel";

const TOOLS: Array<{ id: Tool; label: string; hint: string; icon: typeof FiHand }> = [
  { id: "move", label: "Move", hint: "V", icon: FiMousePointer },
  { id: "hand", label: "Hand", hint: "H", icon: FiHand },
  { id: "text", label: "Text", hint: "T", icon: FiType },
  { id: "brush", label: "Brush", hint: "B", icon: FiBrush },
  { id: "crop", label: "Crop", hint: "C", icon: FiCrop }
];

export function Toolbar() {
  const tool = useEditor((s) => s.tool);
  const foregroundColor = useEditor((s) => s.foregroundColor);
  const backgroundColor = useEditor((s) => s.backgroundColor);
  const selection = useEditor((s) => s.selection);
  const doc = useEditor((s) => s.doc);
  const selectedText = doc?.layers.find((layer) => layer.id === selection[selection.length - 1] && layer.text);
  const [colorOpen, setColorOpen] = useState<"foreground" | "background" | null>(null);
  const textColorTimer = useRef<number | undefined>();
  useEffect(() => () => window.clearTimeout(textColorTimer.current), []);

  function setForeground(value: string) {
    setState({ foregroundColor: value });
    window.clearTimeout(textColorTimer.current);
    if (selectedText?.text) textColorTimer.current = window.setTimeout(() => updateTextLayer(selectedText.id, { color: value }, "Text color"), 180);
  }
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
            onClick={() => { finishTextEditing(); setState({ tool: t.id }); }}
            className={`tool-button ${tool === t.id ? "active" : ""}`}
          >
            <ToolIcon />
          </button>
        );
      })}
      <div className="toolbar-colors" title="Foreground / background colors">
        <button type="button" className="global-swatch background" aria-label="Edit background color" style={{ background: backgroundColor }} onClick={() => setColorOpen(colorOpen === "background" ? null : "background")} />
        <button type="button" className="global-swatch foreground" aria-label="Edit foreground color" style={{ background: foregroundColor }} onClick={() => setColorOpen(colorOpen === "foreground" ? null : "foreground")} />
        <button type="button" className="swap-colors" title="Swap colors (X)" onClick={() => setState({ foregroundColor: backgroundColor, backgroundColor: foregroundColor })}>↗</button>
        {colorOpen ? <div className="tool-color-popover" onPointerDown={(e: PointerEvent) => e.stopPropagation()}><div className="color-popover-head"><span>{colorOpen === "foreground" ? "Foreground" : "Background"}</span><button type="button" onClick={() => setColorOpen(null)}>×</button></div><ColorPicker value={colorOpen === "foreground" ? foregroundColor : backgroundColor} onChange={colorOpen === "foreground" ? setForeground : (value) => setState({ backgroundColor: value })} /></div> : null}
      </div>
    </aside>
  );
}
