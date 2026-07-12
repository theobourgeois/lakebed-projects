// Named global-FX looks, plus randomize / mutate helpers for both the world
// pipeline and per-layer effect stacks.

import {
  BLEND_MODES,
  DEFAULT_GLOBAL_FX,
  DEFAULT_LAYER_FX,
  clamp,
  type BlendMode,
  type GlobalFx,
  type LayerFx,
} from "../shared/types";

function look(overrides: Partial<GlobalFx>): GlobalFx {
  return { ...DEFAULT_GLOBAL_FX, ...overrides };
}

export const WORLD_PRESETS: { name: string; code: string; global: GlobalFx }[] = [
  { name: "Clean signal", code: "00", global: look({}) },
  {
    name: "Liquid chrome",
    code: "01",
    global: look({
      warp: 0.5, swirl: 0.34, chroma: 0.3, hueOrbit: 0.24, saturation: 1.2,
      contrast: 1.12, feedback: 0.42, trails: 0.72, fbZoom: 0.12, grain: 0.1,
    }),
  },
  {
    name: "Echo tunnel",
    code: "02",
    global: look({
      zoom: 0.4, feedback: 0.82, trails: 0.9, fbZoom: 0.34, fbRotate: 0.14,
      fbHue: 0.12, chroma: 0.28, vignette: 0.4, hueOrbit: 0.16, contrast: 1.08,
    }),
  },
  {
    name: "Kaleido cathedral",
    code: "03",
    global: look({
      kaleido: 0.72, mirror: 0.3, chroma: 0.34, hueOrbit: 0.4, saturation: 1.5,
      contrast: 1.1, feedback: 0.26, trails: 0.6, ripple: 0.18, vignette: 0.3,
    }),
  },
  {
    name: "VHS seance",
    code: "04",
    global: look({
      scanlines: 0.66, grain: 0.5, chroma: 0.62, feedback: 0.42,
      trails: 0.68, saturation: 0.88, contrast: 1.22, vignette: 0.48, strobe: 0.08,
    }),
  },
  {
    name: "Acid bath",
    code: "05",
    global: look({
      warp: 0.68, ripple: 0.4, hueOrbit: 0.7, saturation: 1.85, solarize: 0.5,
      contrast: 1.15, feedback: 0.5, trails: 0.78, fbHue: 0.3, speed: 1.2,
    }),
  },
  {
    name: "Ghost trails",
    code: "06",
    global: look({
      feedback: 0.92, trails: 0.97, fbZoom: 0.06, fbRotate: -0.05, saturation: 0.6,
      contrast: 1.14, grain: 0.2, vignette: 0.5, speed: 0.5,
    }),
  },
  {
    name: "Neon autopsy",
    code: "07",
    global: look({
      chroma: 0.8, solarize: 0.28, contrast: 1.35, saturation: 1.6,
      kaleido: 0.18, hueOrbit: 0.32, feedback: 0.3, trails: 0.62, scanlines: 0.2,
    }),
  },
  {
    name: "Prism storm",
    code: "08",
    global: look({
      warp: 0.34, ripple: 0.28, chroma: 0.92, feedback: 0.56, trails: 0.8,
      fbZoom: -0.14, grain: 0.24, speed: 1.5, strobe: 0.16, contrast: 1.2,
    }),
  },
  {
    name: "Solar flare",
    code: "09",
    global: look({
      zoom: 0.26, swirl: 0.5, ripple: 0.34, hueOrbit: 0.5, saturation: 1.7,
      solarize: 0.72, feedback: 0.44, trails: 0.7, fbHue: 0.2, vignette: 0.36,
      strobe: 0.1, speed: 0.9,
    }),
  },
  {
    name: "Deep void",
    code: "10",
    global: look({
      bgMode: 2, mirror: 0.5, warp: 0.24, chroma: 0.2, saturation: 0.85,
      contrast: 1.25, feedback: 0.68, trails: 0.88, fbZoom: 0.2, vignette: 0.6,
      hueOrbit: 0.1, speed: 0.6,
    }),
  },
];

function rand(min = 0, max = 1): number {
  return min + Math.random() * (max - min);
}

function chance(p: number): boolean {
  return Math.random() < p;
}

type EffectPick = { key: string; weight: number; min: number; max: number };

function pickDistinct(items: EffectPick[], count: number): EffectPick[] {
  const pool = items.slice();
  const picks: EffectPick[] = [];
  while (picks.length < count && pool.length) {
    let total = 0;
    for (const item of pool) total += item.weight;
    let roll = Math.random() * total;
    let index = 0;
    for (; index < pool.length; index++) {
      roll -= pool[index].weight;
      if (roll <= 0) break;
    }
    picks.push(pool.splice(Math.min(index, pool.length - 1), 1)[0]);
  }
  return picks;
}

// Kaleido/ripple are weighted low: symmetric mandalas all look alike, so a
// chaos roll should usually be built on warp / swirl / zoom / mirror instead.
const WORLD_SPACE_POOL: EffectPick[] = [
  { key: "warp", weight: 3.0, min: 0.3, max: 0.9 },
  { key: "swirl", weight: 2.4, min: 0.25, max: 0.8 },
  { key: "zoom", weight: 2.0, min: 0.2, max: 0.6 },
  { key: "mirror", weight: 1.6, min: 0.2, max: 0.7 },
  { key: "ripple", weight: 0.9, min: 0.12, max: 0.4 },
  { key: "kaleido", weight: 0.6, min: 0.2, max: 0.7 },
];

/**
 * Structured chaos: one strong space effect (plus sometimes a soft second),
 * an optional feedback recipe, a color move and light texture — everything
 * else stays zero so each roll has a distinct character.
 */
export function randomGlobalFx(base: GlobalFx): GlobalFx {
  const next: GlobalFx = {
    ...DEFAULT_GLOBAL_FX,
    bgA: base.bgA,
    bgB: base.bgB,
    audioReact: base.audioReact,
    pointerForce: base.pointerForce,
    pointerSize: base.pointerSize,
    pointerMode: Math.floor(rand(0, 4)),
    bgMode: Math.floor(rand(0, 4)),
  };

  const spacePicks = pickDistinct(WORLD_SPACE_POOL, chance(0.5) ? 2 : 1);
  spacePicks.forEach((pick, index) => {
    const strength = rand(pick.min, pick.max) * (index === 0 ? 1 : 0.5);
    (next as unknown as Record<string, number>)[pick.key] = strength;
  });

  if (chance(0.55)) {
    next.feedback = rand(0.3, 0.85);
    next.trails = rand(0.5, 0.95);
    if (chance(0.6)) next.fbZoom = rand(-0.35, 0.35);
    if (chance(0.4)) next.fbRotate = rand(-0.25, 0.25);
    if (chance(0.4)) next.fbHue = rand(0.05, 0.4);
  }

  if (chance(0.5)) next.hueOrbit = rand(0.1, 0.7);
  if (chance(0.5)) next.chroma = rand(0.1, 0.7);
  if (chance(0.22)) next.solarize = rand(0.2, 0.7);
  next.saturation = rand(0.85, 1.6);
  next.contrast = rand(0.95, 1.3);

  if (chance(0.35)) next.grain = rand(0.05, 0.4);
  if (chance(0.22)) next.scanlines = rand(0.1, 0.5);
  if (chance(0.12)) next.strobe = rand(0.05, 0.3);
  next.vignette = rand(0.1, 0.5);
  next.speed = rand(0.45, 1.5);
  return next;
}

export function mutateGlobalFx(current: GlobalFx): GlobalFx {
  const next = { ...current };
  const keys: (keyof GlobalFx)[] = [
    "feedback", "trails", "fbZoom", "fbRotate", "fbHue", "warp", "swirl",
    "ripple", "zoom", "kaleido", "mirror", "chroma", "hueOrbit", "saturation",
    "contrast", "solarize", "grain", "scanlines", "vignette",
    "strobe", "speed",
  ];
  for (const key of keys) {
    const value = next[key] as number;
    const max = key === "saturation" || key === "contrast" || key === "speed" ? 2 : 1;
    const min = key === "fbZoom" || key === "fbRotate" ? -1 : 0;
    (next[key] as number) = clamp(value + (Math.random() - 0.5) * 0.24, min, max);
  }
  next.feedback = Math.min(next.feedback, 0.9);
  return next;
}

const CHAOS_BLENDS: BlendMode[] = [
  "normal",
  "add",
  "screen",
  "overlay",
  "difference",
  "lighten",
  "soft-light",
  "hard-light",
  "color-dodge",
  "exclusion",
  "hue",
  "luminosity",
];

const LAYER_DISTORT_POOL: EffectPick[] = [
  { key: "warp", weight: 3.0, min: 0.2, max: 0.8 },
  { key: "swirl", weight: 2.0, min: 0.2, max: 0.7 },
  { key: "bulge", weight: 2.0, min: 0.3, max: 0.8 },
  { key: "pixelate", weight: 1.3, min: 0.15, max: 0.6 },
  { key: "mirror", weight: 1.2, min: 0.2, max: 0.7 },
  { key: "ripple", weight: 0.9, min: 0.1, max: 0.45 },
  { key: "kaleido", weight: 0.5, min: 0.25, max: 0.75 },
];

/**
 * Randomize a layer's effect stack while keeping its placement + visibility.
 * Same structure as the world roll: 1-2 distortions, a color move, a bit of
 * motion — not every knob at once.
 */
export function randomLayerFx(current: LayerFx): LayerFx {
  const next: LayerFx = {
    ...resetLayerFxEffects(current),
    blend: chance(0.4) ? CHAOS_BLENDS[Math.floor(rand(0, CHAOS_BLENDS.length))] : current.blend,
  };

  const distortPicks = pickDistinct(LAYER_DISTORT_POOL, chance(0.45) ? 2 : 1);
  distortPicks.forEach((pick, index) => {
    let strength = rand(pick.min, pick.max) * (index === 0 ? 1 : 0.55);
    if (pick.key === "bulge" && chance(0.5)) strength = -strength;
    (next as unknown as Record<string, number>)[pick.key] = strength;
  });

  if (chance(0.6)) next.hue = Math.random();
  next.saturation = rand(0.75, 1.65);
  next.contrast = rand(0.9, 1.35);
  next.brightness = rand(0.9, 1.2);
  if (chance(0.22)) next.posterize = rand(0.2, 0.7);
  if (chance(0.4)) next.chroma = rand(0.1, 0.6);
  if (chance(0.18)) next.edges = rand(0.2, 0.8);
  if (chance(0.08)) next.invert = rand(0.5, 1);
  if (chance(0.15)) next.tintAmount = rand(0.2, 0.6);

  if (chance(0.35)) next.spin = rand(0.05, 0.4) * (chance(0.5) ? -1 : 1);
  if (chance(0.4)) next.drift = rand(0.1, 0.5);
  if (chance(0.35)) next.pulse = rand(0.1, 0.6);
  if (chance(0.45)) next.shimmer = rand(0.2, 0.8);
  return next;
}

export function resetLayerFxEffects(current: LayerFx): LayerFx {
  return {
    ...DEFAULT_LAYER_FX,
    x: current.x,
    y: current.y,
    scale: current.scale,
    rotation: current.rotation,
    opacity: current.opacity,
    blend: current.blend,
    visible: current.visible,
    tile: current.tile,
  };
}

export function blendIndex(blend: BlendMode): number {
  const index = BLEND_MODES.indexOf(blend);
  return index < 0 ? 0 : index;
}
