# vaudio-2

A layered media visualizer editor — sibling of [vaudio](../vaudio). Import
images, video, audio, or arbitrary files; stack layers with per-layer effect
pipelines; then push the composite through a global post-FX engine with
feedback, warps, glitch, and audio reactivity.

Run it:

```sh
npx lakebed dev
```

## How it works

- **Layers** (left panel): drop, paste, or import anything. Images stay still;
  video loops as a live texture; audio becomes a reactive visual field; other
  files are painted from their bytes. Drag to move, wheel to scale,
  shift+wheel to rotate. Each layer has 24 shader blend modes and a crop /
  repeat / mirror canvas fill.
- **Layer FX** (right panel, top): per-layer distortion, color and motion
  stacks, applied in a WebGL über-shader during compositing.
- **World FX** (right panel, below): global space warps, feedback echo,
  color grade and signal damage applied over the whole composite. Presets,
  Chaos (randomize everything) and Mutate live in the top bar.
- **Play mode** (P): your cursor becomes a force field (vortex / gravity /
  prism / melt) that pushes the final image around.
- **Audio**: mic and imported audio files both feed shader Audio React.
- **Output**: export a PNG or record the canvas straight to video.
  Space freezes time; Tab hides the UI.

## Architecture

- `client/engine.ts` — WebGL pipeline: background shader → per-layer
  über-shader composited by ping-pong → global post shader with a feedback
  buffer → screen.
- `client/index.tsx` — the whole UI (Preact + Tailwind classes).
- `client/media.ts` — file classification plus audio/data texture painters.
- `client/store.ts` — media blobs in IndexedDB, working scene autosaved to
  localStorage.
- `shared/types.ts`, `shared/presets.ts` — scene document, sanitizers,
  presets and randomizers.
- `server/index.ts` — scene library (params-only JSON per user; media never
  leaves the browser).
