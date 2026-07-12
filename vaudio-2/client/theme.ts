/** Global stylesheet injected once by the App shell. */
export const GLOBAL_CSS = `
@import url("https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap");

:root {
  color-scheme: dark;
  --void: #08080a;
  --panel: #101014;
  --panel-2: #15151a;
  --line: rgba(255, 255, 255, 0.12);
  --line-hot: rgba(232, 230, 224, 0.35);
  --acid: #e8e6e0;
  --violet: #8a8690;
  --hot: #a87880;
  --paper: #e8e6e0;
  --mute: #85858f;
  --track: #303038;
}

html, body, #app { margin: 0; height: 100%; background: var(--void); overscroll-behavior: none; }
body { font: 13px/1.45 "DM Mono", ui-monospace, monospace; color: var(--paper); -webkit-font-smoothing: antialiased; }
* { box-sizing: border-box; }
button, input, select { font: inherit; }
button { cursor: pointer; -webkit-tap-highlight-color: transparent; }
::selection { background: var(--acid); color: var(--void); }
::-webkit-scrollbar { width: 8px; height: 8px; }
::-webkit-scrollbar-thumb { background: var(--track); border-radius: 0; }
::-webkit-scrollbar-track { background: transparent; }

.knob-range {
  --fill: 50%;
  width: 100%;
  height: 18px;
  margin: 0;
  appearance: none;
  -webkit-appearance: none;
  background: transparent;
  cursor: ew-resize;
}
.knob-range::-webkit-slider-runnable-track {
  height: 3px;
  background: linear-gradient(90deg, var(--acid) 0 var(--fill), var(--track) var(--fill) 100%);
}
.knob-range::-webkit-slider-thumb {
  appearance: none;
  -webkit-appearance: none;
  width: 9px;
  height: 17px;
  margin-top: -7px;
  border: 1px solid var(--acid);
  border-radius: 0;
  background: var(--void);
}
.knob-range::-moz-range-track { height: 3px; background: var(--track); }
.knob-range::-moz-range-progress { height: 3px; background: var(--acid); }
.knob-range::-moz-range-thumb {
  width: 8px; height: 16px; border: 1px solid var(--acid); border-radius: 0; background: var(--void);
}

@keyframes rec-blink { 0%, 48% { opacity: 1; } 52%, 100% { opacity: 0.25; } }
.rec-dot { animation: rec-blink 1.1s steps(2, end) infinite; }
@keyframes fade-up { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
.pop { animation: fade-up 140ms cubic-bezier(.2,.8,.2,1) both; }
input[type="color"] { padding: 0; border: 1px solid var(--line); border-radius: 0; background: transparent; width: 26px; height: 20px; cursor: pointer; }
input[type="color"]::-webkit-color-swatch-wrapper { padding: 1px; }
input[type="color"]::-webkit-color-swatch { border: 0; border-radius: 0; }
`;
