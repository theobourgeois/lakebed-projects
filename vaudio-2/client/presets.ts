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

/** h/s/l in 0..1 → #rrggbb */
function hslToHex(h: number, s: number, l: number): string {
  const f = (n: number) => {
    const k = (n + h * 12) % 12;
    const a = s * Math.min(l, 1 - l);
    const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
    return Math.round(c * 255).toString(16).padStart(2, "0");
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * A chaos roll no longer flips every knob independently — that lands on
 * something coherent maybe one time in five. Instead each roll picks an
 * archetype: a hand-tuned recipe (like the named presets) whose params are
 * sampled inside ranges that are known to read well together.
 */
type ChaosArchetype = {
  name: string;
  /** Tuned world-FX recipe; `energy` scales the headline strengths. */
  global: (energy: number) => Partial<GlobalFx>;
  /** Blend modes that suit this look — upper layers draw from these. */
  blends: BlendMode[];
  /** Layer distortions that suit this look. */
  distorts: EffectPick[];
  /** 0..1 — how animated this look's layers should be. */
  motion: number;
  color: "vivid" | "muted" | "mono" | "psycho";
};

const CHAOS_ARCHETYPES: ChaosArchetype[] = [
  {
    name: "Liquid",
    global: (e) => ({
      warp: rand(0.35, 0.6) * e, swirl: rand(0.2, 0.45) * e,
      chroma: rand(0.2, 0.4), hueOrbit: rand(0.15, 0.35),
      feedback: rand(0.35, 0.55), trails: rand(0.65, 0.8), fbZoom: rand(0.06, 0.18),
      saturation: rand(1.05, 1.35), contrast: rand(1.05, 1.2),
      grain: rand(0, 0.15), vignette: rand(0.2, 0.4), speed: rand(0.7, 1.2),
    }),
    blends: ["normal", "screen", "soft-light", "lighten"],
    distorts: [
      { key: "warp", weight: 3, min: 0.25, max: 0.7 },
      { key: "swirl", weight: 2, min: 0.2, max: 0.6 },
      { key: "bulge", weight: 2, min: 0.3, max: 0.7 },
    ],
    motion: 0.7,
    color: "vivid",
  },
  {
    name: "Tunnel",
    global: (e) => ({
      zoom: rand(0.25, 0.5) * e,
      feedback: rand(0.7, 0.88), trails: rand(0.85, 0.95),
      fbZoom: rand(0.2, 0.4) * (chance(0.3) ? -1 : 1),
      fbRotate: rand(-0.18, 0.18), fbHue: rand(0.05, 0.2),
      chroma: rand(0.15, 0.35), hueOrbit: rand(0.1, 0.25),
      saturation: rand(0.95, 1.3), contrast: rand(1.02, 1.15),
      vignette: rand(0.35, 0.55), speed: rand(0.6, 1.1),
    }),
    blends: ["add", "screen", "lighten"],
    distorts: [
      { key: "bulge", weight: 2.5, min: 0.3, max: 0.7 },
      { key: "warp", weight: 2, min: 0.2, max: 0.5 },
      { key: "pixelate", weight: 1, min: 0.1, max: 0.35 },
    ],
    motion: 0.6,
    color: "vivid",
  },
  {
    name: "Mandala",
    global: (e) => ({
      kaleido: rand(0.5, 0.85) * e, mirror: chance(0.5) ? rand(0.2, 0.4) : 0,
      ripple: rand(0.08, 0.25), chroma: rand(0.2, 0.4), hueOrbit: rand(0.25, 0.5),
      feedback: rand(0.15, 0.35), trails: rand(0.5, 0.7),
      saturation: rand(1.25, 1.6), contrast: rand(1.05, 1.18),
      vignette: rand(0.25, 0.4), speed: rand(0.6, 1),
    }),
    blends: ["screen", "add", "hue", "overlay"],
    distorts: [
      { key: "kaleido", weight: 2.5, min: 0.3, max: 0.75 },
      { key: "mirror", weight: 2, min: 0.25, max: 0.6 },
      { key: "ripple", weight: 1.2, min: 0.1, max: 0.4 },
    ],
    motion: 0.6,
    color: "vivid",
  },
  {
    name: "Broadcast",
    global: (e) => ({
      scanlines: rand(0.45, 0.7), grain: rand(0.3, 0.55), chroma: rand(0.4, 0.7) * e,
      warp: rand(0.05, 0.2), feedback: rand(0.3, 0.5), trails: rand(0.6, 0.75),
      saturation: rand(0.75, 0.95), contrast: rand(1.15, 1.3),
      vignette: rand(0.4, 0.55), strobe: chance(0.3) ? rand(0.04, 0.1) : 0,
      speed: rand(0.7, 1.1),
    }),
    blends: ["normal", "hard-light", "overlay", "luminosity"],
    distorts: [
      { key: "pixelate", weight: 2.5, min: 0.15, max: 0.5 },
      { key: "warp", weight: 1.5, min: 0.1, max: 0.35 },
      { key: "mirror", weight: 1, min: 0.2, max: 0.5 },
    ],
    motion: 0.4,
    color: "muted",
  },
  {
    name: "Acid",
    global: (e) => ({
      warp: rand(0.5, 0.8) * e, ripple: rand(0.25, 0.45),
      hueOrbit: rand(0.5, 0.8), solarize: rand(0.35, 0.6),
      feedback: rand(0.4, 0.6), trails: rand(0.7, 0.85), fbHue: rand(0.2, 0.4),
      saturation: rand(1.6, 1.95), contrast: rand(1.05, 1.2),
      vignette: rand(0.15, 0.3), speed: rand(1, 1.4),
    }),
    blends: ["difference", "exclusion", "add", "hue"],
    distorts: [
      { key: "warp", weight: 2.5, min: 0.3, max: 0.8 },
      { key: "ripple", weight: 2, min: 0.15, max: 0.45 },
      { key: "bulge", weight: 1.5, min: 0.3, max: 0.7 },
      { key: "kaleido", weight: 1, min: 0.25, max: 0.6 },
    ],
    motion: 1,
    color: "psycho",
  },
  {
    name: "Ghost",
    global: (e) => ({
      feedback: rand(0.85, 0.93), trails: rand(0.93, 0.97),
      fbZoom: rand(0.03, 0.09), fbRotate: rand(-0.07, 0.07),
      swirl: rand(0.05, 0.2) * e,
      saturation: rand(0.5, 0.75), contrast: rand(1.08, 1.2),
      grain: rand(0.12, 0.3), vignette: rand(0.45, 0.6), speed: rand(0.4, 0.7),
    }),
    blends: ["screen", "soft-light", "luminosity", "lighten"],
    distorts: [
      { key: "warp", weight: 2, min: 0.1, max: 0.35 },
      { key: "swirl", weight: 2, min: 0.1, max: 0.35 },
    ],
    motion: 0.3,
    color: "mono",
  },
  {
    name: "Prism",
    global: (e) => ({
      chroma: rand(0.7, 0.95) * e, ripple: rand(0.2, 0.35), warp: rand(0.2, 0.4),
      feedback: rand(0.45, 0.65), trails: rand(0.75, 0.85), fbZoom: rand(-0.2, -0.08),
      grain: rand(0.1, 0.25), strobe: chance(0.4) ? rand(0.06, 0.14) : 0,
      saturation: rand(1.1, 1.4), contrast: rand(1.1, 1.25),
      vignette: rand(0.2, 0.35), speed: rand(1.1, 1.5),
    }),
    blends: ["add", "screen", "color-dodge"],
    distorts: [
      { key: "ripple", weight: 2.5, min: 0.15, max: 0.45 },
      { key: "warp", weight: 2, min: 0.2, max: 0.5 },
      { key: "pixelate", weight: 1, min: 0.1, max: 0.4 },
    ],
    motion: 0.9,
    color: "vivid",
  },
  {
    name: "Vortex",
    global: (e) => ({
      swirl: rand(0.55, 0.85) * e, zoom: rand(0.1, 0.25),
      fbRotate: rand(0.12, 0.25) * (chance(0.5) ? -1 : 1),
      feedback: rand(0.55, 0.75), trails: rand(0.8, 0.9), hueOrbit: rand(0.3, 0.55),
      saturation: rand(1.2, 1.5), contrast: rand(1.05, 1.2),
      vignette: rand(0.3, 0.45), speed: rand(0.8, 1.25),
    }),
    blends: ["screen", "overlay", "add", "difference"],
    distorts: [
      { key: "swirl", weight: 3, min: 0.25, max: 0.7 },
      { key: "warp", weight: 2, min: 0.2, max: 0.5 },
      { key: "bulge", weight: 1.5, min: 0.3, max: 0.6 },
    ],
    motion: 0.8,
    color: "vivid",
  },
  {
    name: "Hall of mirrors",
    global: (e) => ({
      mirror: rand(0.35, 0.65) * e, zoom: rand(0.1, 0.3), warp: rand(0.1, 0.3),
      chroma: rand(0.1, 0.3), hueOrbit: rand(0.05, 0.2),
      feedback: rand(0.2, 0.45), trails: rand(0.55, 0.75), fbZoom: rand(0.05, 0.15),
      saturation: rand(1, 1.3), contrast: rand(1.15, 1.3),
      vignette: rand(0.3, 0.5), speed: rand(0.7, 1.15),
    }),
    blends: ["normal", "overlay", "hard-light", "difference"],
    distorts: [
      { key: "mirror", weight: 2.5, min: 0.25, max: 0.65 },
      { key: "kaleido", weight: 1.5, min: 0.25, max: 0.55 },
      { key: "bulge", weight: 1.5, min: 0.3, max: 0.6 },
    ],
    motion: 0.5,
    color: "muted",
  },
];

// Hue offsets (fractions of the wheel) for palettes that read as intentional:
// complementary, triadic, analogous, split-complementary.
const HARMONY_OFFSETS: number[][] = [
  [0, 0.5],
  [0, 1 / 3, 2 / 3],
  [0, 0.08, 0.92],
  [0, 0.5, 0.08],
];

/**
 * One theme is shared by the world roll and every layer roll so a chaos hit
 * reads as a single designed look: same archetype, same energy, and all hues
 * drawn from one harmony around a base hue.
 */
export type ChaosTheme = {
  archetype: ChaosArchetype;
  baseHue: number;
  energy: number;
  /** Palette hue for a layer slot (base hue + harmony offset + jitter). */
  hueFor: (slot: number) => number;
  tintFor: (slot: number) => string;
};

let lastArchetype = -1;

export function createChaosTheme(): ChaosTheme {
  let index = Math.floor(rand(0, CHAOS_ARCHETYPES.length));
  if (index === lastArchetype) {
    index = (index + 1 + Math.floor(rand(0, CHAOS_ARCHETYPES.length - 1))) %
      CHAOS_ARCHETYPES.length;
  }
  lastArchetype = index;
  const baseHue = Math.random();
  const offsets = HARMONY_OFFSETS[Math.floor(rand(0, HARMONY_OFFSETS.length))];
  const hueFor = (slot: number) => {
    const hue = baseHue + offsets[slot % offsets.length] + rand(-0.02, 0.02);
    return ((hue % 1) + 1) % 1;
  };
  return {
    archetype: CHAOS_ARCHETYPES[index],
    baseHue,
    energy: rand(0.6, 1),
    hueFor,
    tintFor: (slot) => hslToHex(hueFor(slot), 0.7, 0.62),
  };
}

export function randomGlobalFx(
  base: GlobalFx,
  theme: ChaosTheme = createChaosTheme(),
): GlobalFx {
  const next: GlobalFx = {
    ...DEFAULT_GLOBAL_FX,
    audioReact: base.audioReact,
    pointerForce: base.pointerForce,
    pointerSize: base.pointerSize,
    pointerMode: Math.floor(rand(0, 4)),
    bgMode: Math.floor(rand(0, 4)),
    bgA: hslToHex(theme.baseHue, rand(0.25, 0.5), rand(0.02, 0.06)),
    bgB: hslToHex(theme.hueFor(1), rand(0.35, 0.6), rand(0.07, 0.14)),
    ...theme.archetype.global(theme.energy),
  };
  // Guard rails: heavy feedback plus strobe/solarize washes out to white mush.
  next.feedback = Math.min(next.feedback, 0.93);
  if (next.feedback > 0.6) {
    next.strobe = Math.min(next.strobe, 0.1);
    next.solarize = Math.min(next.solarize, 0.5);
  }
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

/**
 * Randomize a layer's effect stack while keeping its placement + visibility.
 * Everything is drawn from the shared theme: the archetype's distortions and
 * blend modes, hues from the theme's harmony. Slot 0 is the base layer — it
 * mostly keeps a solid blend so the upper layers have something to blend into.
 */
export function randomLayerFx(
  current: LayerFx,
  theme: ChaosTheme = createChaosTheme(),
  slot = 0,
): LayerFx {
  const { archetype, energy } = theme;
  const isBase = slot === 0;
  const strength = (isBase ? 1 : rand(0.45, 0.65)) * energy;
  const next: LayerFx = { ...resetLayerFxEffects(current) };

  if (!isBase || chance(0.25)) {
    next.blend = archetype.blends[Math.floor(rand(0, archetype.blends.length))];
  }

  const distortPicks = pickDistinct(archetype.distorts, chance(0.45) ? 2 : 1);
  distortPicks.forEach((pick, index) => {
    let value = rand(pick.min, pick.max) * (index === 0 ? 1 : 0.55) * strength;
    if (pick.key === "bulge" && chance(0.5)) value = -value;
    (next as unknown as Record<string, number>)[pick.key] = value;
  });

  // Color: everything on the theme's palette; the base layer sometimes keeps
  // the image's natural hues so the source stays recognizable.
  if (!isBase || chance(0.6)) next.hue = theme.hueFor(slot);
  next.contrast = rand(0.95, 1.3);
  next.brightness = rand(0.95, 1.15);
  switch (archetype.color) {
    case "vivid":
      next.saturation = rand(1.1, 1.6);
      break;
    case "muted":
      next.saturation = rand(0.65, 0.95);
      break;
    case "mono":
      next.saturation = rand(0.2, 0.55);
      next.tintAmount = rand(0.35, 0.6);
      next.tintColor = theme.tintFor(slot);
      break;
    case "psycho":
      next.saturation = rand(1.4, 1.9);
      if (chance(0.35)) next.posterize = rand(0.25, 0.6);
      else if (chance(0.2)) next.invert = rand(0.6, 1);
      break;
  }
  if (chance(0.35)) next.chroma = rand(0.1, 0.45) * strength;
  if (archetype.color !== "mono" && chance(0.2)) {
    next.tintAmount = rand(0.15, 0.4);
    next.tintColor = theme.tintFor(slot);
  }
  if (!next.posterize && chance(0.12)) next.edges = rand(0.2, 0.6);

  // Motion character comes from the archetype; upper layers stay calmer so
  // the frame doesn't turn into everything-wiggling-at-once.
  const motion = archetype.motion * (isBase ? 1 : 0.7);
  if (chance(0.35)) next.spin = rand(0.04, 0.3) * motion * (chance(0.5) ? -1 : 1);
  if (chance(0.5)) next.drift = rand(0.08, 0.45) * motion;
  if (chance(0.4)) next.pulse = rand(0.1, 0.5) * motion;
  if (chance(0.5)) next.shimmer = rand(0.15, 0.7) * motion;
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
