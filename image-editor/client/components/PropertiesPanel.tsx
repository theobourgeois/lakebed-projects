import { useEffect } from "preact/hooks";
import { BLEND_MODES, type BlendMode, type TextAlign } from "../../shared/types";
import { commitTransforms, setSelectionBlendMode, updateTextLayer } from "../state/actions";
import { getState, setState, useEditor } from "../state/store";

type FieldProps = { label: string; value: number; min: number; max: number; step?: number; unit?: string; onChange: (value: number) => void };

export function SliderField({ label, value, min, max, step = 1, unit = "", onChange }: FieldProps) {
  return (
    <div className="prop-field prop-slider">
      <label><span>{label}</span><span className="prop-value">{Math.round(value * 100) / 100}{unit}</span></label>
      <input type="range" min={min} max={max} step={step} value={value} onInput={(e: Event) => onChange(Number((e.currentTarget as HTMLInputElement).value))} />
    </div>
  );
}

export function NumberField({ label, value, min, max, step = 1, unit = "", onChange }: FieldProps) {
  return (
    <label className="prop-field prop-number">
      <span>{label}</span>
      <span className="number-wrap"><input type="number" min={min} max={max} step={step} value={Math.round(value * 100) / 100} onChange={(e: Event) => { const next = Number((e.currentTarget as HTMLInputElement).value); if (Number.isFinite(next)) onChange(Math.max(min, Math.min(max, next))); }} /><i>{unit}</i></span>
    </label>
  );
}

export function Dropdown<T extends string>({ label, value, options, onChange }: { label: string; value: T; options: Array<{ value: T; label: string }>; onChange: (value: T) => void }) {
  return (
    <label className="prop-field prop-select"><span>{label}</span><select value={value} onChange={(e: Event) => onChange((e.currentTarget as HTMLSelectElement).value as T)}>{options.map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}</select></label>
  );
}

export function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (checked: boolean) => void }) {
  return <label className="prop-field prop-toggle"><span>{label}</span><input type="checkbox" checked={checked} onChange={(e: Event) => onChange((e.currentTarget as HTMLInputElement).checked)} /><i /></label>;
}

type Hsv = { h: number; s: number; v: number };

function hexRgb(hex: string): [number, number, number] {
  const valid = /^#[0-9a-f]{6}$/i.test(hex) ? hex : "#000000";
  return [Number.parseInt(valid.slice(1, 3), 16), Number.parseInt(valid.slice(3, 5), 16), Number.parseInt(valid.slice(5, 7), 16)];
}

function rgbHex(r: number, g: number, b: number): string {
  const part = (value: number) => Math.max(0, Math.min(255, Math.round(value))).toString(16).padStart(2, "0");
  return `#${part(r)}${part(g)}${part(b)}`;
}

function rgbHsv(r: number, g: number, b: number): Hsv {
  const [rn, gn, bn] = [r / 255, g / 255, b / 255];
  const max = Math.max(rn, gn, bn), min = Math.min(rn, gn, bn), d = max - min;
  let h = 0;
  if (d) h = max === rn ? ((gn - bn) / d) % 6 : max === gn ? (bn - rn) / d + 2 : (rn - gn) / d + 4;
  return { h: ((h * 60) + 360) % 360, s: max ? d / max : 0, v: max };
}

function hsvRgb({ h, s, v }: Hsv): [number, number, number] {
  const c = v * s, x = c * (1 - Math.abs(((h / 60) % 2) - 1)), m = v - c;
  const values = h < 60 ? [c, x, 0] : h < 120 ? [x, c, 0] : h < 180 ? [0, c, x] : h < 240 ? [0, x, c] : h < 300 ? [x, 0, c] : [c, 0, x];
  return values.map((value) => (value + m) * 255) as [number, number, number];
}

export function ColorPicker({ value, onChange }: { value: string; onChange: (value: string) => void }) {
  const [r, g, b] = hexRgb(value);
  const hsv = rgbHsv(r, g, b);
  const hueHex = rgbHex(...hsvRgb({ h: hsv.h, s: 1, v: 1 }));

  function setHsv(next: Hsv) { onChange(rgbHex(...hsvRgb(next))); }
  function pickSv(e: PointerEvent) {
    const el = e.currentTarget as HTMLElement;
    const rect = el.getBoundingClientRect();
    setHsv({ h: hsv.h, s: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)), v: Math.max(0, Math.min(1, 1 - (e.clientY - rect.top) / rect.height)) });
  }
  async function eyedrop() {
    const EyeDropperCtor = (window as unknown as { EyeDropper?: new () => { open: () => Promise<{ sRGBHex: string }> } }).EyeDropper;
    if (!EyeDropperCtor) return;
    try { onChange((await new EyeDropperCtor().open()).sRGBHex); } catch { /* cancelled */ }
  }

  return (
    <div className="color-picker">
      <div className="sv-picker" style={{ backgroundColor: hueHex }} onPointerDown={pickSv} onPointerMove={(e: PointerEvent) => { if (e.buttons === 1) pickSv(e); }}>
        <span style={{ left: `${hsv.s * 100}%`, top: `${(1 - hsv.v) * 100}%` }} />
      </div>
      <input className="hue-slider" aria-label="Hue" type="range" min={0} max={359} value={Math.round(hsv.h)} onInput={(e: Event) => setHsv({ ...hsv, h: Number((e.currentTarget as HTMLInputElement).value) })} />
      <div className="color-row">
        <span className="checker color-swatch"><i style={{ background: value }} /></span>
        <input className="hex-input" aria-label="Hex color" value={value.toUpperCase()} onChange={(e: Event) => { const next = (e.currentTarget as HTMLInputElement).value; if (/^#[0-9a-f]{6}$/i.test(next)) onChange(next); }} />
        {(window as unknown as { EyeDropper?: unknown }).EyeDropper ? <button type="button" className="eyedropper" title="Pick color from screen" onClick={() => void eyedrop()}>⌾</button> : null}
      </div>
      <div className="rgb-row">{([r, g, b] as number[]).map((channel, index) => <label key={index}><span>{"RGB"[index]}</span><input type="number" min={0} max={255} value={channel} onChange={(e: Event) => { const rgb = [r, g, b]; rgb[index] = Number((e.currentTarget as HTMLInputElement).value); onChange(rgbHex(rgb[0], rgb[1], rgb[2])); }} /></label>)}</div>
    </div>
  );
}

function SelectionProperties({ layerId }: { layerId: string }) {
  const doc = useEditor((s) => s.doc);
  const layer = doc?.layers.find((item) => item.id === layerId);
  if (!layer) return null;
  function change(key: "opacity" | "visible", value: number | boolean) {
    const current = getState().doc?.layers.find((item) => item.id === layerId);
    if (!current) return;
    commitTransforms("Properties", [{ id: layerId, before: { [key]: current[key] }, after: { [key]: value } }]);
  }
  return <>
    <SliderField label="Opacity" value={Math.round(layer.opacity * 100)} min={0} max={100} unit="%" onChange={(v) => change("opacity", v / 100)} />
    <Dropdown<BlendMode> label="Blend" value={layer.blendMode} options={BLEND_MODES.map((value) => ({ value, label: value.replace(/-/g, " ").replace(/^./, (letter) => letter.toUpperCase()) }))} onChange={setSelectionBlendMode} />
    <Toggle label="Visible" checked={layer.visible} onChange={(v) => change("visible", v)} />
  </>;
}

function TextDefaults() {
  const fontFamily = useEditor((s) => s.textFontFamily);
  const fontSize = useEditor((s) => s.textFontSize);
  const fontWeight = useEditor((s) => s.textFontWeight);
  const align = useEditor((s) => s.textAlign);
  const lineHeight = useEditor((s) => s.textLineHeight);
  return <div className="prop-section text-properties">
    <p className="tool-hint">Click the canvas to add text.</p>
    <Dropdown label="Font" value={fontFamily} options={["Instrument Sans", "Inter", "IBM Plex Mono", "Arial", "Georgia", "Courier New", "Times New Roman"].map((value) => ({ value, label: value }))} onChange={(v) => setState({ textFontFamily: v })} />
    <div className="prop-grid"><NumberField label="Size" value={fontSize} min={6} max={500} unit="px" onChange={(v) => setState({ textFontSize: v })} /><Dropdown label="Weight" value={String(fontWeight)} options={[100,300,400,500,600,700,900].map((v) => ({ value: String(v), label: String(v) }))} onChange={(v) => setState({ textFontWeight: Number(v) })} /></div>
    <div className="prop-field"><span>Alignment</span><div className="segment-control">{(["left", "center", "right"] as TextAlign[]).map((value) => <button key={value} type="button" className={align === value ? "active" : ""} onClick={() => setState({ textAlign: value })}>{value[0].toUpperCase()}</button>)}</div></div>
    <NumberField label="Line height" value={lineHeight} min={0.6} max={3} step={0.05} onChange={(v) => setState({ textLineHeight: v })} />
  </div>;
}

export function PropertiesPanel({ height }: { height?: number }) {
  const tool = useEditor((s) => s.tool);
  const selection = useEditor((s) => s.selection);
  const doc = useEditor((s) => s.doc);
  const brushSize = useEditor((s) => s.brushSize);
  const brushHardness = useEditor((s) => s.brushHardness);
  const brushOpacity = useEditor((s) => s.brushOpacity);
  const brushFlow = useEditor((s) => s.brushFlow);
  const selected = doc?.layers.find((layer) => layer.id === selection[selection.length - 1]);
  const text = selected?.text;
  useEffect(() => { if (text) setState({ foregroundColor: text.color }); }, [selected?.id]);

  return <section className="properties-panel" style={height ? { height } : undefined}>
    <div className="panel-head"><span>{tool === "brush" ? "Brush" : tool === "text" || text ? "Text" : selected ? "Properties" : "Canvas"}</span></div>
    <div className="properties-body">
      {tool === "brush" ? <div className="prop-section">
        <SliderField label="Size" value={brushSize} min={1} max={300} unit="px" onChange={(v) => setState({ brushSize: v })} />
        <SliderField label="Hardness" value={brushHardness} min={0} max={100} unit="%" onChange={(v) => setState({ brushHardness: v })} />
        <SliderField label="Opacity" value={brushOpacity} min={1} max={100} unit="%" onChange={(v) => setState({ brushOpacity: v })} />
        <SliderField label="Flow" value={brushFlow} min={1} max={100} unit="%" onChange={(v) => setState({ brushFlow: v })} />
      </div> : text && selected ? <div className="prop-section text-properties">
        <Dropdown label="Font" value={text.fontFamily} options={["Instrument Sans", "Inter", "IBM Plex Mono", "Arial", "Georgia", "Courier New", "Times New Roman"].map((value) => ({ value, label: value }))} onChange={(v) => updateTextLayer(selected.id, { fontFamily: v }, "Font")} />
        <div className="prop-grid"><NumberField label="Size" value={text.fontSize} min={6} max={500} unit="px" onChange={(v) => updateTextLayer(selected.id, { fontSize: v }, "Text size")} /><Dropdown label="Weight" value={String(text.fontWeight)} options={[100,300,400,500,600,700,900].map((v) => ({ value: String(v), label: String(v) }))} onChange={(v) => updateTextLayer(selected.id, { fontWeight: Number(v) }, "Text weight")} /></div>
        <div className="prop-field"><span>Alignment</span><div className="segment-control">{(["left", "center", "right"] as TextAlign[]).map((align) => <button key={align} type="button" className={text.align === align ? "active" : ""} onClick={() => updateTextLayer(selected.id, { align }, "Text alignment")}>{align[0].toUpperCase()}</button>)}</div></div>
        <NumberField label="Line height" value={text.lineHeight} min={0.6} max={3} step={0.05} onChange={(v) => updateTextLayer(selected.id, { lineHeight: v }, "Line height")} />
      </div> : tool === "text" ? <TextDefaults /> : selected ? <div className="prop-section"><SelectionProperties layerId={selected.id} /></div> : <p className="properties-empty">Select a layer or choose a tool.</p>}
    </div>
  </section>;
}
