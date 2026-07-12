import { Link, Route, Router, Routes } from "lakebed/client";
import { Editor } from "./components/Editor";
import { Home } from "./components/Home";

const savedTheme = localStorage.getItem("image-editor-theme");
document.documentElement.dataset.theme =
    savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

const GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Instrument+Sans:wdth,wght@75..100,400..700&family=Inter:wght@400;500;600;700&display=swap");
:root {
  color-scheme: light;
  --bg: #fff; --surface: #fff; --surface-subtle: #fafafa; --canvas: #f4f4f4;
  --border: #e4e4e4; --border-strong: #111; --text: #0a0a0a;
  --muted: #737373; --faint: #a3a3a3; --accent: #2563eb; --accent-hover: #1d4ed8;
  --accent-soft: #eff6ff; --danger: #dc2626; --checker-a: #ececec; --checker-b: #d8d8d8;
  --shadow: 0 16px 48px rgba(0,0,0,.14);
  --sans: "Instrument Sans", "Segoe UI", system-ui, sans-serif;
  --mono: "IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
}
:root[data-theme="dark"] {
  color-scheme: dark;
  --bg: #161616; --surface: #1c1c1c; --surface-subtle: #191919; --canvas: #121212;
  --border: #333; --border-strong: #fafafa; --text: #f0f0f0;
  --muted: #a8a8a8; --faint: #686868; --accent: #3b82f6; --accent-hover: #2563eb;
  --accent-soft: #172554; --danger: #ef4444; --checker-a: #323232; --checker-b: #282828;
  --shadow: 0 18px 56px rgba(0,0,0,.58);
}
* { box-sizing: border-box; }
html, body { margin: 0; overscroll-behavior: none; background: var(--bg); color: var(--text); }
body { font: 14px/1.5 var(--sans); -webkit-font-smoothing: antialiased; }
button, input, select, textarea { font: inherit; }
button { cursor: pointer; }
button:disabled { cursor: default; }
.hidden { display: none !important; }
::selection { background: var(--accent); color: #fff; }
.checker { background-color: var(--checker-a); background-image: linear-gradient(45deg,var(--checker-b) 25%,transparent 25%,transparent 75%,var(--checker-b) 75%),linear-gradient(45deg,var(--checker-b) 25%,transparent 25%,transparent 75%,var(--checker-b) 75%); background-size: 16px 16px; background-position: 0 0,8px 8px; }
.canvas-dots { background-color: var(--canvas); background-image: radial-gradient(color-mix(in srgb,var(--muted) 24%,transparent) 1px,transparent 1px); background-size: 22px 22px; }
.icon-button { width: 30px; height: 30px; padding: 0; display: inline-flex; align-items: center; justify-content: center; border: 1px solid transparent; border-radius: 2px; background: transparent; color: var(--muted); }
.icon-button:hover { border-color: var(--border); color: var(--text); }
.icon-button:disabled { opacity: .3; }
.icon-button svg { width: 15px; height: 15px; }
.button { min-height: 34px; display: inline-flex; align-items: center; justify-content: center; gap: 7px; padding: 7px 12px; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--text); font-size: 12.5px; font-weight: 550; white-space: nowrap; }
.button:hover { border-color: var(--border-strong); }
.button.primary { background: var(--accent); border-color: var(--accent); color: #fff; }
.button.primary:hover { background: var(--accent-hover); border-color: var(--accent-hover); }
.button.danger { color: var(--danger); }
.button svg { width: 14px; height: 14px; }

/* Home */
.home { min-height: 100vh; padding: 46px 24px 90px; background: var(--bg); }
.home-inner { width: min(100%, 780px); margin: 0 auto; }
.brand-row { display: flex; align-items: center; gap: 10px; }
.brand { margin: 0; font-size: 21px; line-height: 1; font-weight: 750; letter-spacing: -.035em; }
.brand-mark { display: inline-block; width: 9px; height: 17px; margin-left: 4px; vertical-align: -2px; background: var(--accent); }
.brand-row .theme-toggle { margin-left: auto; }
.home-meta { margin: 12px 0 38px; padding-top: 9px; display: flex; align-items: center; gap: 8px; border-top: 1px solid var(--border); color: var(--faint); font: 11px var(--sans); letter-spacing: .01em; }
.intro { margin: 0 0 24px; color: var(--muted); font-size: 13px; }
.create-panel { margin-bottom: 38px; }
.eyebrow { margin: 0 0 10px; color: var(--faint); font: 11.5px var(--sans); font-weight: 600; letter-spacing: .01em; }
.presets { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 8px; margin-bottom: 10px; }
.preset { min-width: 0; padding: 11px; text-align: left; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--muted); }
.preset:hover { border-color: var(--border-strong); color: var(--text); }
.preset.selected { border-color: var(--accent); background: var(--accent-soft); color: var(--text); }
.preset-name { display: block; margin-bottom: 3px; color: inherit; font-size: 12.5px; font-weight: 600; }
.preset-size { display: block; color: var(--faint); font: 10.5px var(--mono); }
.create-actions { display: flex; gap: 8px; }
.create-actions .button:first-of-type { flex: 1; }
.section-label { display: flex; align-items: center; gap: 10px; margin: 0 0 12px; color: var(--faint); font: 11.5px var(--sans); font-weight: 600; letter-spacing: .01em; }
.section-label::after { content: ""; flex: 1; border-top: 1px solid var(--border); }
.project-list { display: flex; flex-direction: column; gap: 10px; }
.project-card { display: grid; grid-template-columns: 116px minmax(0,1fr) auto; min-height: 82px; overflow: hidden; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); transition: border-color .12s; }
.project-card:hover { border-color: color-mix(in srgb,var(--muted) 65%,var(--border)); }
.project-preview { display: flex; align-items: center; justify-content: center; padding: 7px; border: 0; border-right: 1px solid var(--border); background-color: var(--checker-a); }
.project-preview img { display: block; max-width: 100%; max-height: 66px; object-fit: contain; }
.project-empty-icon { width: 18px; height: 18px; color: var(--faint); }
.project-main { min-width: 0; padding: 16px; border: 0; background: transparent; color: var(--text); text-align: left; }
.project-name { display: block; overflow: hidden; color: var(--text); font-size: 14px; font-weight: 650; text-overflow: ellipsis; white-space: nowrap; }
.project-info { display: block; margin-top: 7px; color: var(--faint); font: 10.5px var(--mono); letter-spacing: .02em; }
.project-actions { display: flex; align-items: center; gap: 1px; padding: 0 10px; opacity: 0; transition: opacity .12s; }
.project-card:hover .project-actions, .project-actions:focus-within { opacity: 1; }
.empty-state { padding: 60px 20px; border: 1px dashed var(--border); color: var(--faint); text-align: center; font: 12px var(--mono); }
.drop-overlay { position: fixed; inset: 0; z-index: 20; display: grid; place-items: center; background: color-mix(in srgb,var(--bg) 84%,transparent); }
.drop-overlay p { padding: 30px 48px; border: 1px dashed var(--accent); color: var(--accent); font: 12px var(--mono); }
.busy-toast { position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%); padding: 9px 15px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); color: var(--muted); font: 11px var(--mono); }

/* Editor */
.editor-shell { display: flex; height: 100vh; flex-direction: column; overflow: hidden; background: var(--canvas); color: var(--text); user-select: none; }
.editor-main { display: flex; flex: 1; min-width: 0; min-height: 0; }
.topbar { height: 46px; flex-shrink: 0; display: flex; align-items: center; gap: 5px; padding: 0 10px; border-bottom: 1px solid var(--border); background: var(--surface); }
.topbar-name { width: 168px; padding: 5px 7px; border: 1px solid transparent; border-radius: 2px; outline: none; background: transparent; color: var(--text); font-size: 13px; font-weight: 600; }
.topbar-name:hover { border-color: var(--border); }.topbar-name:focus { border-color: var(--accent); }
.doc-size, .zoom-button, .save-status { color: var(--faint); font: 10.5px var(--mono); }
.divider { width: 1px; height: 18px; margin: 0 6px; background: var(--border); }
.spacer { flex: 1; }
.zoom-controls { display: flex; align-items: center; }.zoom-button { width: 52px; padding: 5px 2px; border: 0; background: transparent; }.zoom-button:hover { color: var(--text); }
.save-status { display: flex; align-items: center; gap: 7px; white-space: nowrap; }.save-dot { width: 6px; height: 6px; border-radius: 50%; }.saved { background: #22c55e; }.saving { background: #f59e0b; }.error { background: var(--danger); }
.tool-rail { position: relative; z-index: 5; width: 44px; flex-shrink: 0; display: flex; flex-direction: column; align-items: center; gap: 4px; padding: 7px 0; border-right: 1px solid var(--border); background: var(--surface); }
.tool-button { width: 30px; height: 30px; display: grid; place-items: center; padding: 0; border: 1px solid transparent; border-radius: 2px; background: transparent; color: var(--muted); }.tool-button:hover { border-color: var(--border); color: var(--text); }.tool-button.active { border-color: var(--accent); background: var(--accent); color: #fff; }.tool-button svg { width: 15px; height: 15px; }
.toolbar-colors { position: relative; width: 38px; height: 39px; margin-top: auto; flex-shrink: 0; }.toolbar-colors .global-swatch { width: 21px; height: 21px; }.toolbar-colors .global-swatch.foreground { left: 3px; top: 3px; }.toolbar-colors .global-swatch.background { right: 3px; bottom: 2px; }.toolbar-colors .swap-colors { right: -1px; top: -5px; }
.tool-color-popover { position: absolute; z-index: 70; left: 43px; bottom: 0; width: 220px; padding: 9px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }
.tool-popover { position: absolute; top: 7px; left: 50px; width: 196px; padding: 12px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); color: var(--muted); font-size: 11px; }
.tool-popover strong { display: block; margin-bottom: 11px; color: var(--text); font-size: 12px; }.tool-popover label { display: flex; align-items: center; justify-content: space-between; gap: 10px; margin: 8px 0; }.tool-popover input[type="color"] { width: 30px; height: 24px; padding: 1px; border: 1px solid var(--border); background: transparent; }.tool-popover input[type="range"] { width: 100%; accent-color: var(--accent); }.tool-popover p { margin: 0 0 12px; }.tool-popover .button { width: 100%; margin-top: 6px; }.brush-preview { max-width: 64px; max-height: 64px; min-width: 3px; min-height: 3px; margin: 12px auto 2px; border-radius: 50%; }
.layers-panel { position: relative; width: 244px; flex-shrink: 0; display: flex; flex-direction: column; border-left: 1px solid var(--border); background: var(--surface); }
.panel-head { display: flex; align-items: center; gap: 7px; height: 42px; padding: 0 12px; border-bottom: 1px solid var(--border); color: var(--muted); font: 11.5px var(--sans); font-weight: 600; letter-spacing: .01em; }.panel-head svg { width: 13px; height: 13px; }
.layers-head { height: 36px; flex-shrink: 0; }.layers-head .layer-add { margin-left: auto; width: 24px; height: 24px; display: grid; place-items: center; padding: 0; border: 0; border-radius: 2px; background: transparent; color: var(--muted); cursor: pointer; }.layers-head .layer-add:hover { background: var(--surface-subtle); color: var(--text); }.layers-head .layer-add svg { width: 14px; height: 14px; }
.panel-width-resizer { position: absolute; z-index: 45; left: -3px; top: 0; bottom: 0; width: 6px; cursor: ew-resize; }.panel-width-resizer:hover,.panel-width-resizer:active { background: color-mix(in srgb,var(--accent) 45%,transparent); }
.properties-resizer { height: 5px; flex-shrink: 0; cursor: ns-resize; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: var(--surface-subtle); }.properties-resizer:hover,.properties-resizer:active { background: var(--accent); }
.properties-panel { min-height: 0; display: flex; flex: 0 0 auto; flex-direction: column; background: var(--surface); }
.properties-panel > .panel-head { height: 34px; flex-shrink: 0; color: var(--text); font-weight: 600; }
.properties-body { min-height: 0; overflow-y: auto; }
.properties-empty { margin: 0; padding: 16px 12px; color: var(--faint); font: 10.5px var(--mono); }
.prop-section { padding: 8px 10px; border-bottom: 1px solid var(--border); }
.prop-field { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 8px; margin: 6px 0; color: var(--muted); font: 11px var(--sans); }
.prop-field:first-child { margin-top: 0; }.prop-field:last-child { margin-bottom: 0; }
.prop-field input, .prop-field select, .prop-field textarea { outline: none; border: 1px solid var(--border); border-radius: 2px; background: var(--surface); color: var(--text); font: 11px var(--sans); }
.prop-field input:focus, .prop-field select:focus, .prop-field textarea:focus { border-color: var(--accent); }
.prop-slider { display: block; }.prop-slider label { display: flex; justify-content: space-between; margin-bottom: 5px; }.prop-value { color: var(--text); font-variant-numeric: tabular-nums; }
.prop-slider input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 12px; margin: 0; border: 0; background: transparent; }
.prop-slider input[type="range"]::-webkit-slider-runnable-track { height: 2px; border-radius: 0; background: var(--border); }.prop-slider input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; width: 7px; height: 12px; margin-top: -5px; border: 0; border-radius: 0; background: var(--accent); }
.prop-slider input[type="range"]::-moz-range-track { height: 2px; border-radius: 0; background: var(--border); }.prop-slider input[type="range"]::-moz-range-progress { height: 2px; border-radius: 0; background: var(--accent); }.prop-slider input[type="range"]::-moz-range-thumb { width: 7px; height: 12px; border: 0; border-radius: 0; background: var(--accent); }
.prop-number input { width: 62px; height: 27px; padding: 4px 18px 4px 6px; font-variant-numeric: tabular-nums; }.number-wrap { position: relative; }.number-wrap i { pointer-events: none; position: absolute; right: 6px; top: 6px; color: var(--faint); font-style: normal; font-size: 9px; }
.prop-select select { width: 124px; height: 27px; padding: 3px 5px; }
.prop-grid { display: grid; grid-template-columns: 1fr 1fr; column-gap: 10px; }.prop-grid .prop-field { min-width: 0; }.prop-grid .prop-number input,.prop-grid .prop-select select { width: 70px; }
.prop-toggle input { position: absolute; opacity: 0; }.prop-toggle i { width: 27px; height: 15px; padding: 2px; border-radius: 8px; background: var(--border); transition: background .12s; }.prop-toggle i::after { content: ""; display: block; width: 11px; height: 11px; border-radius: 50%; background: var(--surface); box-shadow: 0 1px 2px rgba(0,0,0,.25); transition: transform .12s; }.prop-toggle input:checked + i { background: var(--accent); }.prop-toggle input:checked + i::after { transform: translateX(12px); }
.text-content { display: block; }.text-content > span { display: block; margin-bottom: 5px; }.text-content textarea { width: 100%; padding: 6px; resize: vertical; line-height: 1.35; user-select: text; }
.tool-hint { margin: 0 0 9px; color: var(--faint); font: 10px var(--mono); }
.segment-control { display: flex; }.segment-control button { width: 34px; height: 27px; padding: 0; border: 1px solid var(--border); border-right-width: 0; background: var(--surface); color: var(--muted); font: 10px var(--mono); }.segment-control button:last-child { border-right-width: 1px; }.segment-control button.active { background: var(--accent-soft); color: var(--accent); border-color: var(--accent); }
.global-color-section { background: var(--surface-subtle); }.global-color-row { height: 30px; display: flex; align-items: center; gap: 8px; color: var(--muted); font: 11px var(--sans); }.global-color-row code { margin-left: auto; color: var(--faint); font: 9.5px var(--mono); }.global-swatches { position: relative; width: 45px; height: 30px; }.global-swatch { position: absolute; width: 23px; height: 23px; padding: 0; border: 2px solid var(--surface); border-radius: 0; outline: 1px solid var(--muted); }.global-swatch.background { right: 1px; bottom: 0; }.global-swatch.foreground { z-index: 2; left: 1px; top: 0; }.swap-colors { position: absolute; right: -13px; top: -5px; width: 17px; height: 17px; padding: 0; border: 0; background: transparent; color: var(--faint); font-size: 12px; }.swap-colors:hover { color: var(--text); }
.color-popover { margin: 8px -2px 0; padding: 8px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }.color-popover-head { display: flex; align-items: center; justify-content: space-between; margin-bottom: 7px; color: var(--text); font: 10px var(--mono); }.color-popover-head button { width: 20px; height: 20px; padding: 0; border: 0; background: transparent; color: var(--muted); }.color-picker { margin-top: 0; }
.sv-picker { position: relative; height: 104px; overflow: hidden; cursor: crosshair; background-image: linear-gradient(to top,#000,transparent),linear-gradient(to right,#fff,transparent); }.sv-picker span { pointer-events: none; position: absolute; width: 10px; height: 10px; border: 2px solid white; border-radius: 50%; box-shadow: 0 0 0 1px #000; transform: translate(-50%,-50%); }
.hue-slider { -webkit-appearance: none; appearance: none; width: 100%; height: 9px; margin: 8px 0; border: 0; border-radius: 0; background: linear-gradient(to right,#f00,#ff0,#0f0,#0ff,#00f,#f0f,#f00); }.hue-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 7px; height: 13px; border: 1px solid var(--text); border-radius: 1px; background: var(--surface); }.hue-slider::-moz-range-thumb { width: 7px; height: 13px; border: 1px solid var(--text); border-radius: 1px; background: var(--surface); }
.color-row { display: flex; gap: 5px; }.color-swatch { width: 27px; height: 27px; flex-shrink: 0; padding: 2px; border: 1px solid var(--border); }.color-swatch i { display: block; width: 100%; height: 100%; }.hex-input { min-width: 0; flex: 1; height: 27px; padding: 4px 6px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font: 10.5px var(--mono); text-transform: uppercase; user-select: text; }.eyedropper { width: 27px; height: 27px; padding: 0; border: 1px solid var(--border); background: var(--surface); color: var(--muted); }.eyedropper:hover { color: var(--text); border-color: var(--border-strong); }
.rgb-row { display: grid; grid-template-columns: repeat(3,1fr); gap: 5px; margin-top: 6px; }.rgb-row label { display: flex; align-items: center; gap: 3px; color: var(--faint); font: 9px var(--mono); }.rgb-row input { min-width: 0; width: 100%; height: 25px; padding: 3px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font: 10px var(--mono); }
.blend-control { position: relative; padding: 10px 12px; border-bottom: 1px solid var(--border); }.blend-control.disabled { opacity: .4; }.blend-control label { display: block; margin-bottom: 5px; color: var(--muted); font: 11px var(--sans); }.blend-trigger { width: 100%; height: 29px; display: flex; align-items: center; justify-content: space-between; padding: 0 8px; border: 1px solid var(--border); background: var(--surface); color: var(--text); font-size: 11.5px; text-align: left; }.blend-menu { position: absolute; z-index: 30; top: 61px; left: 12px; right: 12px; max-height: 248px; overflow-y: auto; padding: 4px; border: 1px solid var(--border); background: var(--surface); box-shadow: var(--shadow); }.blend-menu button { display: block; width: 100%; padding: 5px 7px; border: 0; background: transparent; color: var(--text); font-size: 11.5px; text-align: left; }.blend-menu button:hover,.blend-menu button:focus,.blend-menu button.selected { outline: 0; background: var(--accent-soft); }.blend-hint { display: block; margin-top: 4px; color: var(--faint); font-size: 9.5px; }
.opacity-control { --progress: 100%; padding: 10px 12px; border-bottom: 1px solid var(--border); }.opacity-control.disabled { opacity: .4; }.opacity-label { display: flex; justify-content: space-between; margin-bottom: 5px; color: var(--muted); font: 11px var(--sans); }
.opacity-control input[type="range"] { -webkit-appearance: none; appearance: none; width: 100%; height: 12px; margin: 0; background: linear-gradient(to right, var(--accent) 0%, var(--accent) var(--progress), var(--border) var(--progress), var(--border) 100%); background-repeat: no-repeat; background-position: center; background-size: 100% 2px; cursor: pointer; }
.opacity-control input[type="range"]::-webkit-slider-runnable-track { height: 2px; border-radius: 0; background: transparent; }
.opacity-control input[type="range"]::-webkit-slider-thumb { -webkit-appearance: none; appearance: none; width: 8px; height: 8px; margin-top: -3px; border: 0; border-radius: 1px; background: var(--accent); }
.opacity-control input[type="range"]::-moz-range-track { height: 2px; border-radius: 0; background: var(--border); }
.opacity-control input[type="range"]::-moz-range-progress { height: 2px; border-radius: 0; background: var(--accent); }
.opacity-control input[type="range"]::-moz-range-thumb { width: 8px; height: 8px; border: 0; border-radius: 1px; background: var(--accent); }
.layer-list { min-height: 0; flex: 1; overflow-y: auto; margin: 0; padding: 4px 0; list-style: none; }
.layer-row { position: relative; display: flex; align-items: center; gap: 8px; padding: 6px 8px; cursor: pointer; }.layer-row:hover { background: var(--surface-subtle); }.layer-row.selected { background: var(--accent-soft); }.layer-row.hidden { opacity: .5; }
.visibility { width: 22px; height: 25px; display: grid; place-items: center; flex-shrink: 0; padding: 0; border: 0; background: transparent; color: var(--muted); }.visibility svg { width: 14px; height: 14px; }
.layer-thumb { width: 34px; height: 34px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; overflow: hidden; border: 1px solid var(--border); border-radius: 2px; }.layer-thumb img { max-width: 100%; max-height: 100%; object-fit: contain; }
.layer-name { min-width: 0; flex: 1; overflow: hidden; color: var(--text); font-size: 11.5px; text-overflow: ellipsis; white-space: nowrap; }.layer-input { min-width: 0; flex: 1; padding: 3px 5px; border: 1px solid var(--accent); border-radius: 2px; outline: none; background: var(--surface); color: var(--text); font-size: 11.5px; }
.drop-mark { pointer-events: none; position: absolute; inset-inline: 4px; height: 1px; background: var(--accent); }.drop-mark.above { top: 0; }.drop-mark.below { bottom: 0; }
.no-layers { padding: 16px 12px; color: var(--faint); font: 11px var(--mono); }.panel-actions { display: flex; gap: 4px; padding: 7px; border-top: 1px solid var(--border); }.panel-actions .button { flex: 1; min-height: 30px; padding: 5px; }
.canvas-stage { position: relative; min-width: 0; flex: 1; touch-action: none; overflow: hidden; }.artboard { position: absolute; left: 0; top: 0; overflow: hidden; box-shadow: var(--shadow); outline: 1px solid color-mix(in srgb,var(--muted) 34%,transparent); }.canvas-empty { pointer-events: none; position: absolute; inset: 0; display: grid; place-items: center; }.canvas-empty p { padding: 13px 18px; border: 1px dashed var(--border); color: var(--faint); font: 11px var(--mono); }
.brush-overlay { pointer-events: none; position: absolute; inset: 0; width: 100%; height: 100%; }.snap-guide { pointer-events: none; position: absolute; z-index: 20; background: #ec4899; }.snap-guide.vertical { top: 0; width: 1px; }.snap-guide.horizontal { left: 0; height: 1px; }.crop-box { pointer-events: none; position: absolute; z-index: 21; border-style: solid; border-color: #38bdf8; background: rgba(56,189,248,.08); box-shadow: 0 0 0 99999px rgba(0,0,0,.38); }.crop-box span { position: absolute; left: 0; bottom: 100%; white-space: nowrap; background: #0284c7; color: white; font-family: var(--mono); }
.inline-text-editor-wrap { position: absolute; z-index: 30; overflow: visible; }
.inline-text-editor { position: absolute; overflow: hidden; resize: none; outline: 1px dashed var(--accent); border: 0; border-radius: 0; background: color-mix(in srgb,var(--surface) 8%,transparent); caret-color: var(--text); white-space: pre; user-select: text; }
.loading-page { height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; background: var(--bg); color: var(--muted); }.loading-page p { margin: 0; font: 12px var(--mono); }.not-found { min-height: 100vh; display: grid; place-items: center; background: var(--bg); color: var(--muted); }.not-found > div { text-align: center; }
@media (max-width: 720px) { .home { padding: 28px 16px 70px; }.presets { grid-template-columns: repeat(2,1fr); }.project-card { grid-template-columns: 92px minmax(0,1fr) auto; }.project-actions { padding: 0 5px; opacity: 1; }.topbar .doc-size, .topbar .save-label, .topbar .add-label { display: none; }.layers-panel { width: 205px; } }
`;

function NotFound() {
    return (
        <div className="not-found">
            <div>
                <p>Page not found</p>
                <Link to="/" className="button">
                    Back to projects
                </Link>
            </div>
        </div>
    );
}

export function App() {
    return (
        <Router>
            <style>{GLOBAL_CSS}</style>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/p/:id" element={<Editor />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
}
