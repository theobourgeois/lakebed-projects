// WebGL compositor. Pipeline per frame:
//   background shader -> scene FBO
//   for each layer: über-shader (distort + color + blend over dest) -> ping-pong scene FBO
//   post shader (space warp, feedback echo, grade) -> ping-pong post FBO
//   copy post FBO -> screen
// The post ping-pong doubles as the feedback buffer, which is what makes
// trails / echo-tunnel effects possible.

export type PointerState = {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  down: boolean;
  active: boolean;
};

export type LayerRenderState = {
  id: string;
  imageId: string;
  pos: [number, number];
  ext: [number, number];
  rot: number;
  opacity: number;
  blend: number;
  tile: number;
  warp: number;
  swirl: number;
  ripple: number;
  kaleido: number;
  pixelate: number;
  bulge: number;
  mirror: number;
  hue: number;
  saturation: number;
  contrast: number;
  brightness: number;
  invert: number;
  posterize: number;
  chroma: number;
  edges: number;
  tint: [number, number, number];
  tintAmount: number;
  shimmer: number;
  seed: number;
};

export type GlobalRenderState = {
  bgMode: number;
  bgA: [number, number, number];
  bgB: [number, number, number];
  feedback: number;
  trails: number;
  fbZoom: number;
  fbRotate: number;
  fbHue: number;
  warp: number;
  swirl: number;
  ripple: number;
  zoom: number;
  kaleido: number;
  mirror: number;
  chroma: number;
  hueOrbit: number;
  saturation: number;
  contrast: number;
  solarize: number;
  grain: number;
  scanlines: number;
  vignette: number;
  strobe: number;
  audioReact: number;
  pointerForce: number;
  pointerSize: number;
  pointerMode: number;
};

export type FrameState = {
  time: number;
  audio: number;
  pointer: PointerState;
  layers: LayerRenderState[];
  global: GlobalRenderState;
};

export type EngineHandle = {
  resize(cssWidth: number, cssHeight: number): void;
  setPixelRatioCap(cap: number): void;
  setImage(imageId: string, source: TexImageSource): void;
  removeImage(imageId: string): void;
  hasImage(imageId: string): boolean;
  render(state: FrameState): void;
  clearFeedback(): void;
  destroy(): void;
};

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

const GLSL_COMMON = `
precision highp float;
mat2 rot2(float a) { float c = cos(a); float s = sin(a); return mat2(c, -s, s, c); }
float hash21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123); }
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    v += amp * vnoise(p);
    p = p * 2.03 + vec2(17.3, 9.1);
    amp *= 0.5;
  }
  return v;
}
vec3 hueRotate(vec3 color, float angle) {
  const vec3 k = vec3(0.57735);
  float c = cos(angle);
  float s = sin(angle);
  return color * c + cross(k, color) * s + k * dot(k, color) * (1.0 - c);
}
float luma(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }
`;

const COPY_FRAG = `
precision mediump float;
varying vec2 v_uv;
uniform sampler2D u_tex;
void main() { gl_FragColor = vec4(texture2D(u_tex, v_uv).rgb, 1.0); }
`;

const BG_FRAG = `
${GLSL_COMMON}
varying vec2 v_uv;
uniform vec2 u_res;
uniform float u_time;
uniform float u_mode;
uniform vec3 u_color_a;
uniform vec3 u_color_b;
uniform float u_audio;

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 n = (v_uv - 0.5) * aspect;
  vec3 col = u_color_a;
  if (u_mode > 2.5) {
    // Tunnel rings
    float r = length(n) + 0.12;
    float a = atan(n.y, n.x);
    float wave = sin(2.4 / r - u_time * 1.6 + a * 3.0 + sin(u_time * 0.4) * 2.0);
    col = mix(u_color_a, u_color_b, 0.5 + 0.5 * wave);
    col *= smoothstep(0.0, 0.25, r) * (0.85 + u_audio * 0.5);
  } else if (u_mode > 1.5) {
    // Plasma
    float t = u_time * 0.25;
    float f = fbm(n * 2.2 + vec2(t, -t * 0.7));
    float g = fbm(n * 3.4 - vec2(t * 0.6, t) + f * 2.0);
    col = mix(u_color_a, u_color_b, clamp(g * 1.6 - 0.2 + u_audio * 0.3, 0.0, 1.0));
    col = hueRotate(col, f * 1.2 + t * 0.3);
  } else if (u_mode > 0.5) {
    // Drifting gradient
    vec2 dir = vec2(cos(u_time * 0.11), sin(u_time * 0.11));
    float g = clamp(dot(n, dir) * 0.9 + 0.5, 0.0, 1.0);
    col = mix(u_color_a, u_color_b, g);
  }
  gl_FragColor = vec4(col, 1.0);
}
`;

const LAYER_FRAG = `
${GLSL_COMMON}
varying vec2 v_uv;
uniform sampler2D u_dest;
uniform sampler2D u_img;
uniform vec2 u_res;
uniform vec2 u_img_texel;
uniform vec2 u_pos;
uniform vec2 u_ext;
uniform float u_rot;
uniform float u_time;
uniform float u_audio;
uniform float u_opacity;
uniform float u_blend;
uniform float u_tile;
uniform float u_warp;
uniform float u_swirl;
uniform float u_ripple;
uniform float u_kaleido;
uniform float u_pixelate;
uniform float u_bulge;
uniform float u_mirror;
uniform float u_hue;
uniform float u_sat;
uniform float u_con;
uniform float u_bri;
uniform float u_invert;
uniform float u_poster;
uniform float u_chroma;
uniform float u_edges;
uniform vec3 u_tint;
uniform float u_tint_amt;
uniform float u_shimmer;
uniform float u_seed;

vec2 tileUv(vec2 uv) {
  if (u_tile > 1.5) return abs(fract(uv * 0.5) * 2.0 - 1.0);
  if (u_tile > 0.5) return fract(uv);
  return uv;
}

float tileMask(vec2 uv) {
  if (u_tile > 0.5) return 1.0;
  vec2 inside = step(vec2(0.0), uv) * step(uv, vec2(1.0));
  return inside.x * inside.y;
}

vec4 tap(vec2 uv) {
  vec4 s = texture2D(u_img, clamp(tileUv(uv), 0.0, 1.0));
  s.a *= tileMask(uv);
  return s;
}

vec3 blendClipLum(vec3 c) {
  float l = luma(c);
  float n = min(c.r, min(c.g, c.b));
  float x = max(c.r, max(c.g, c.b));
  if (n < 0.0) c = l + (c - l) * l / (l - n + 1e-5);
  if (x > 1.0) c = l + (c - l) * (1.0 - l) / (x - l + 1e-5);
  return c;
}
vec3 blendSetLum(vec3 c, float l) {
  return blendClipLum(c + (l - luma(c)));
}
vec3 blendSetSat(vec3 c, float sat) {
  float mn = min(c.r, min(c.g, c.b));
  float mx = max(c.r, max(c.g, c.b));
  float d = mx - mn;
  if (d < 1e-5) return vec3(0.0);
  return (c - mn) * sat / d;
}
float blendSat(vec3 c) {
  return max(c.r, max(c.g, c.b)) - min(c.r, min(c.g, c.b));
}
vec3 blendSoftLight(vec3 d, vec3 s) {
  // W3C soft-light
  vec3 lo = d - (1.0 - 2.0 * s) * d * (1.0 - d);
  vec3 hi = d + (2.0 * s - 1.0) * (sqrt(max(d, vec3(0.0))) - d);
  return mix(lo, hi, step(0.5, s));
}
vec3 blendColorDodge(vec3 d, vec3 s) {
  return mix(min(vec3(1.0), d / max(1.0 - s, vec3(1e-4))), vec3(1.0), step(0.999, s));
}
vec3 blendColorBurn(vec3 d, vec3 s) {
  return mix(1.0 - min(vec3(1.0), (1.0 - d) / max(s, vec3(1e-4))), vec3(0.0), step(s, vec3(0.001)));
}
vec3 blendVividLight(vec3 d, vec3 s) {
  return mix(blendColorBurn(d, max(2.0 * s, vec3(1e-4))), blendColorDodge(d, min(2.0 * (s - 0.5), vec3(1.0))), step(0.5, s));
}
vec3 blendPix(vec3 d, vec3 s) {
  float m = u_blend;
  if (m < 0.5) return s; // normal
  if (m < 1.5) return d + s; // add / linear dodge
  if (m < 2.5) return 1.0 - (1.0 - d) * (1.0 - s); // screen
  if (m < 3.5) return d * s; // multiply
  if (m < 4.5) { // overlay
    vec3 lo = 2.0 * d * s;
    vec3 hi = 1.0 - 2.0 * (1.0 - d) * (1.0 - s);
    return mix(lo, hi, step(0.5, d));
  }
  if (m < 5.5) return abs(d - s); // difference
  if (m < 6.5) return max(d, s); // lighten
  if (m < 7.5) return min(d, s); // darken
  if (m < 8.5) return blendSoftLight(d, s); // soft-light
  if (m < 9.5) { // hard-light
    vec3 lo = 2.0 * d * s;
    vec3 hi = 1.0 - 2.0 * (1.0 - d) * (1.0 - s);
    return mix(lo, hi, step(0.5, s));
  }
  if (m < 10.5) return blendColorDodge(d, s); // color-dodge
  if (m < 11.5) return blendColorBurn(d, s); // color-burn
  if (m < 12.5) return d + s - 2.0 * d * s; // exclusion
  if (m < 13.5) return d - s; // subtract
  if (m < 14.5) return d / max(s, vec3(1e-4)); // divide
  if (m < 15.5) return d + s - 1.0; // linear-burn
  if (m < 16.5) return d + 2.0 * s - 1.0; // linear-light
  if (m < 17.5) return blendVividLight(d, s); // vivid-light
  if (m < 18.5) { // pin-light
    vec3 lo = min(d, 2.0 * s);
    vec3 hi = max(d, 2.0 * s - 1.0);
    return mix(lo, hi, step(0.5, s));
  }
  if (m < 19.5) return step(1.0, d + s); // hard-mix
  if (m < 20.5) return blendSetLum(blendSetSat(s, blendSat(d)), luma(d)); // hue
  if (m < 21.5) return blendSetLum(blendSetSat(d, blendSat(s)), luma(d)); // saturation
  if (m < 22.5) return blendSetLum(s, luma(d)); // color
  return blendSetLum(d, luma(s)); // luminosity
}

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 p = (v_uv - 0.5) * aspect;
  vec2 q = rot2(-u_rot) * (p - u_pos);
  vec2 c = q / max(u_ext, vec2(1e-5)) * 0.5;

  // Distort in aspect-normalized layer space so circular effects stay circular.
  vec2 la = vec2(max(u_ext.x, 1e-5) / max(u_ext.y, 1e-5), 1.0);
  vec2 n = c * la;
  float t = u_time + u_seed * 37.0;
  float shim = 1.0 + u_shimmer * 0.6 * sin(t * 0.9);

  n *= 1.0 + u_bulge * dot(n, n) * 3.2;

  if (u_swirl > 0.003) {
    float r = length(n);
    n = rot2(u_swirl * 6.0 * shim * exp(-r * 2.4)) * n;
  }
  if (u_kaleido > 0.003) {
    float seg = floor(2.0 + u_kaleido * 14.0);
    float slice = 6.2831853 / seg;
    float a = atan(n.y, n.x) + t * u_shimmer * 0.15;
    a = abs(mod(a, slice) - slice * 0.5);
    n = length(n) * vec2(cos(a), sin(a));
  }
  if (u_ripple > 0.003) {
    float r = length(n) + 1e-4;
    n += (n / r) * sin(r * 34.0 - t * 3.2) * u_ripple * 0.07 * shim;
  }
  if (u_warp > 0.003) {
    vec2 w = vec2(
      fbm(n * 3.0 + vec2(t * 0.22 * (0.3 + u_shimmer), u_seed)),
      fbm(n * 3.0 + vec2(u_seed + 7.3, -t * 0.19 * (0.3 + u_shimmer)))
    );
    n += (w - 0.5) * u_warp * 0.55;
  }
  n.x = mix(n.x, abs(n.x), clamp(u_mirror * 2.0, 0.0, 1.0));
  n.y = mix(n.y, abs(n.y), clamp(u_mirror * 2.0 - 1.0, 0.0, 1.0));

  c = n / la;
  vec2 uv = c + 0.5;

  if (u_pixelate > 0.003) {
    float cells = floor(mix(220.0, 6.0, pow(u_pixelate, 0.55)));
    uv = (floor(uv * cells) + 0.5) / cells;
  }

  vec2 cd = c * u_chroma * 0.1;
  vec4 sampleMid = tap(uv);
  vec3 col = vec3(tap(uv + cd).r, sampleMid.g, tap(uv - cd).b);
  float alpha = sampleMid.a;

  if (u_edges > 0.003) {
    vec2 e = max(u_img_texel * 1.5, vec2(0.0015));
    float gx = luma(tap(uv + vec2(e.x, 0.0)).rgb) - luma(tap(uv - vec2(e.x, 0.0)).rgb);
    float gy = luma(tap(uv + vec2(0.0, e.y)).rgb) - luma(tap(uv - vec2(0.0, e.y)).rgb);
    float g = clamp(length(vec2(gx, gy)) * 4.0, 0.0, 1.0);
    vec3 neon = g * (col * 1.6 + hueRotate(vec3(0.9, 0.2, 1.0), t * 0.5) * 0.7);
    col = mix(col, neon, u_edges);
  }

  // Grade
  col = (col - 0.5) * u_con + 0.5;
  col *= u_bri;
  col = mix(vec3(luma(col)), col, u_sat);
  col = hueRotate(col, u_hue * 6.2831853 + u_shimmer * 0.4 * sin(t * 0.6));
  if (u_poster > 0.003) {
    float levels = mix(14.0, 2.0, u_poster);
    col = mix(col, floor(col * levels + 0.5) / levels, clamp(u_poster * 4.0, 0.0, 1.0));
  }
  col = mix(col, 1.0 - col, u_invert);
  col = mix(col, vec3(luma(col)) * u_tint * 2.1, u_tint_amt);
  col = clamp(col, 0.0, 1.5);

  vec3 dest = texture2D(u_dest, v_uv).rgb;
  vec3 blended = clamp(blendPix(dest, col), 0.0, 1.0);
  float a = clamp(alpha * u_opacity * (1.0 + u_audio * 0.0), 0.0, 1.0);
  gl_FragColor = vec4(mix(dest, blended, a), 1.0);
}
`;

const POST_FRAG = `
${GLSL_COMMON}
varying vec2 v_uv;
uniform sampler2D u_scene;
uniform sampler2D u_prev;
uniform vec2 u_res;
uniform float u_time;
uniform float u_audio;
uniform vec2 u_pointer;
uniform vec2 u_pointer_vel;
uniform float u_pointer_down;
uniform float u_pointer_active;
uniform float u_feedback;
uniform float u_trails;
uniform float u_fb_zoom;
uniform float u_fb_rotate;
uniform float u_fb_hue;
uniform float u_warp;
uniform float u_swirl;
uniform float u_ripple;
uniform float u_zoom;
uniform float u_kaleido;
uniform float u_mirror;
uniform float u_chroma;
uniform float u_hue_orbit;
uniform float u_sat;
uniform float u_con;
uniform float u_solarize;
uniform float u_grain;
uniform float u_scanlines;
uniform float u_vignette;
uniform float u_strobe;
uniform float u_pointer_force;
uniform float u_pointer_size;
uniform float u_pointer_mode;

void main() {
  vec2 aspect = vec2(u_res.x / max(u_res.y, 1.0), 1.0);
  vec2 n = (v_uv - 0.5) * aspect;
  float t = u_time;
  float chromaAmt = u_chroma;

  // Space
  n *= 1.0 - u_zoom * (0.3 + 0.1 * sin(t * 0.7)) - u_audio * u_zoom * 0.15;
  if (u_swirl > 0.003) {
    float r = length(n);
    n = rot2(u_swirl * (3.4 + u_audio * 1.5) * exp(-r * 1.7) * sin(t * 0.23 + 1.9)) * n;
  }
  if (u_kaleido > 0.003) {
    float seg = floor(2.0 + u_kaleido * 15.0);
    float slice = 6.2831853 / seg;
    float a = atan(n.y, n.x) + t * 0.05;
    a = abs(mod(a, slice) - slice * 0.5);
    n = length(n) * vec2(cos(a), sin(a));
  }
  if (u_ripple > 0.003) {
    float r = length(n) + 1e-4;
    n += (n / r) * sin(r * 26.0 - t * 2.6) * u_ripple * 0.05;
  }
  if (u_warp > 0.003) {
    vec2 w = vec2(fbm(n * 2.4 + t * 0.16), fbm(n * 2.4 - t * 0.13 + 5.2));
    n += (w - 0.5) * u_warp * (0.34 + u_audio * 0.2);
  }
  n.x = mix(n.x, abs(n.x), clamp(u_mirror * 2.0, 0.0, 1.0));
  n.y = mix(n.y, abs(n.y), clamp(u_mirror * 2.0 - 1.0, 0.0, 1.0));

  vec2 uv = n / aspect + 0.5;

  vec2 cd = (uv - 0.5) * chromaAmt * 0.05;
  vec3 col = vec3(
    texture2D(u_scene, uv + cd).r,
    texture2D(u_scene, uv).g,
    texture2D(u_scene, uv - cd).b
  );

  // Feedback echo
  if (u_feedback > 0.003) {
    vec2 fp = (v_uv - 0.5) * aspect;
    fp = rot2(u_fb_rotate * 0.055) * fp;
    fp *= 1.0 - u_fb_zoom * 0.045;
    vec3 prev = texture2D(u_prev, fp / aspect + 0.5).rgb;
    prev = hueRotate(prev, u_fb_hue * 0.5);
    vec3 echo = prev * mix(0.55, 0.985, u_trails);
    col = mix(col, max(col, echo), u_feedback);
  }

  // Grade
  col = hueRotate(col, u_hue_orbit * t * 0.9);
  col = (col - 0.5) * u_con + 0.5;
  col = mix(vec3(luma(col)), col, u_sat);
  if (u_solarize > 0.003) {
    vec3 sol = mix(col, 1.0 - col, smoothstep(0.5 - 0.25, 0.5 + 0.25, col));
    col = mix(col, sol, u_solarize);
  }
  col *= 1.0 + u_strobe * (0.45 * sin(t * 11.0) + u_audio * 0.8);

  // Texture
  if (u_scanlines > 0.003) {
    col *= 1.0 - u_scanlines * 0.32 * (0.5 + 0.5 * sin(v_uv.y * u_res.y * 2.4));
  }
  if (u_grain > 0.003) {
    col += (hash21(v_uv * u_res + fract(t) * 61.7) - 0.5) * u_grain * 0.3;
  }
  vec2 vp = (v_uv - 0.5) * aspect;
  col *= 1.0 - u_vignette * smoothstep(0.35, 1.15, length(vp) * 1.35);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

type Target = {
  framebuffer: WebGLFramebuffer;
  texture: WebGLTexture;
  width: number;
  height: number;
};

type Program = {
  program: WebGLProgram;
  uniforms: Record<string, WebGLUniformLocation | null>;
};

function compile(gl: WebGLRenderingContext, type: number, source: string): WebGLShader {
  const shader = gl.createShader(type);
  if (!shader) throw new Error("Could not create shader");
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const info = gl.getShaderInfoLog(shader) ?? "unknown";
    gl.deleteShader(shader);
    throw new Error(`Shader compile failed: ${info}`);
  }
  return shader;
}

function makeProgram(gl: WebGLRenderingContext, frag: string): Program {
  const program = gl.createProgram();
  if (!program) throw new Error("Could not create program");
  gl.attachShader(program, compile(gl, gl.VERTEX_SHADER, VERT));
  gl.attachShader(program, compile(gl, gl.FRAGMENT_SHADER, frag));
  gl.bindAttribLocation(program, 0, "a_pos");
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    throw new Error(`Program link failed: ${gl.getProgramInfoLog(program) ?? "unknown"}`);
  }
  const uniforms: Record<string, WebGLUniformLocation | null> = {};
  const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
  for (let i = 0; i < count; i++) {
    const info = gl.getActiveUniform(program, i);
    if (info) uniforms[info.name] = gl.getUniformLocation(program, info.name);
  }
  return { program, uniforms };
}

export function hexToRgb(hex: string): [number, number, number] {
  const match = /^#([0-9a-f]{6})$/i.exec(hex);
  if (!match) return [0, 0, 0];
  const value = parseInt(match[1], 16);
  return [((value >> 16) & 255) / 255, ((value >> 8) & 255) / 255, (value & 255) / 255];
}

function textureSourceSize(source: TexImageSource): { width: number; height: number } {
  if (typeof HTMLVideoElement !== "undefined" && source instanceof HTMLVideoElement) {
    return {
      width: Math.max(1, source.videoWidth || source.width || 1),
      height: Math.max(1, source.videoHeight || source.height || 1),
    };
  }
  if (typeof HTMLImageElement !== "undefined" && source instanceof HTMLImageElement) {
    return {
      width: Math.max(1, source.naturalWidth || source.width || 1),
      height: Math.max(1, source.naturalHeight || source.height || 1),
    };
  }
  if (typeof HTMLCanvasElement !== "undefined" && source instanceof HTMLCanvasElement) {
    return { width: Math.max(1, source.width), height: Math.max(1, source.height) };
  }
  if (typeof ImageBitmap !== "undefined" && source instanceof ImageBitmap) {
    return { width: Math.max(1, source.width), height: Math.max(1, source.height) };
  }
  const anySource = source as { width?: number; height?: number };
  return {
    width: Math.max(1, anySource.width ?? 1),
    height: Math.max(1, anySource.height ?? 1),
  };
}

export function createEngine(canvas: HTMLCanvasElement): EngineHandle {
  const gl = canvas.getContext("webgl", {
    antialias: false,
    alpha: false,
    depth: false,
    stencil: false,
    preserveDrawingBuffer: false,
    powerPreference: "high-performance",
  }) as WebGLRenderingContext | null;
  if (!gl) throw new Error("WebGL is not available in this browser");

  const quad = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, quad);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

  const programs = {
    bg: makeProgram(gl, BG_FRAG),
    layer: makeProgram(gl, LAYER_FRAG),
    post: makeProgram(gl, POST_FRAG),
    copy: makeProgram(gl, COPY_FRAG),
  };

  function makeTexture(): WebGLTexture {
    const texture = gl!.createTexture();
    if (!texture) throw new Error("Could not create texture");
    gl!.bindTexture(gl!.TEXTURE_2D, texture);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MIN_FILTER, gl!.LINEAR);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_MAG_FILTER, gl!.LINEAR);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_S, gl!.CLAMP_TO_EDGE);
    gl!.texParameteri(gl!.TEXTURE_2D, gl!.TEXTURE_WRAP_T, gl!.CLAMP_TO_EDGE);
    return texture;
  }

  function makeTarget(width: number, height: number): Target {
    const texture = makeTexture();
    gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, width, height, 0, gl!.RGBA, gl!.UNSIGNED_BYTE, null);
    const framebuffer = gl!.createFramebuffer();
    if (!framebuffer) throw new Error("Could not create framebuffer");
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, framebuffer);
    gl!.framebufferTexture2D(gl!.FRAMEBUFFER, gl!.COLOR_ATTACHMENT0, gl!.TEXTURE_2D, texture, 0);
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, null);
    return { framebuffer, texture, width, height };
  }

  function resizeTarget(target: Target, width: number, height: number) {
    if (target.width === width && target.height === height) return;
    gl!.bindTexture(gl!.TEXTURE_2D, target.texture);
    gl!.texImage2D(gl!.TEXTURE_2D, 0, gl!.RGBA, width, height, 0, gl!.RGBA, gl!.UNSIGNED_BYTE, null);
    target.width = width;
    target.height = height;
  }

  let width = Math.max(2, canvas.width || 2);
  let height = Math.max(2, canvas.height || 2);
  let pixelRatioCap = 1.5;
  let cssWidth = width;
  let cssHeight = height;

  const targets = {
    sceneA: makeTarget(width, height),
    sceneB: makeTarget(width, height),
    postA: makeTarget(width, height),
    postB: makeTarget(width, height),
  };
  let postFlip = false;
  let needFeedbackClear = true;

  // Placeholder texture for layers whose image is missing (e.g. a scene loaded
  // on another device): an animated-looking magenta/deep-blue grid.
  const missingTexture = makeTexture();
  {
    const size = 64;
    const data = new Uint8Array(size * size * 4);
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const i = (y * size + x) * 4;
        const grid = (x % 16 < 1 || y % 16 < 1) ? 1 : 0;
        data[i] = grid ? 255 : 30 + ((x * 3) % 60);
        data[i + 1] = grid ? 40 : 8;
        data[i + 2] = grid ? 170 : 46 + ((y * 3) % 70);
        data[i + 3] = 255;
      }
    }
    gl.bindTexture(gl.TEXTURE_2D, missingTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, size, size, 0, gl.RGBA, gl.UNSIGNED_BYTE, data);
  }

  const images = new Map<string, { texture: WebGLTexture; width: number; height: number }>();

  function drawQuad() {
    gl!.drawArrays(gl!.TRIANGLES, 0, 3);
  }

  function bindTargetOutput(target: Target | null) {
    gl!.bindFramebuffer(gl!.FRAMEBUFFER, target ? target.framebuffer : null);
    gl!.viewport(0, 0, target ? target.width : width, target ? target.height : height);
  }

  function u1(p: Program, name: string, value: number) {
    const loc = p.uniforms[name];
    if (loc) gl!.uniform1f(loc, value);
  }
  function u2(p: Program, name: string, x: number, y: number) {
    const loc = p.uniforms[name];
    if (loc) gl!.uniform2f(loc, x, y);
  }
  function u3(p: Program, name: string, v: [number, number, number]) {
    const loc = p.uniforms[name];
    if (loc) gl!.uniform3f(loc, v[0], v[1], v[2]);
  }
  function uTex(p: Program, name: string, texture: WebGLTexture, unit: number) {
    const loc = p.uniforms[name];
    if (!loc) return;
    gl!.activeTexture(gl!.TEXTURE0 + unit);
    gl!.bindTexture(gl!.TEXTURE_2D, texture);
    gl!.uniform1i(loc, unit);
  }

  function render(state: FrameState) {
    if (gl!.isContextLost()) return;
    const g = state.global;

    // Background
    const bg = programs.bg;
    gl!.useProgram(bg.program);
    bindTargetOutput(targets.sceneA);
    u2(bg, "u_res", width, height);
    u1(bg, "u_time", state.time);
    u1(bg, "u_mode", g.bgMode);
    u3(bg, "u_color_a", g.bgA);
    u3(bg, "u_color_b", g.bgB);
    u1(bg, "u_audio", state.audio * g.audioReact);
    drawQuad();

    // Layers: ping-pong composite
    let source = targets.sceneA;
    let dest = targets.sceneB;
    const layerProgram = programs.layer;
    gl!.useProgram(layerProgram.program);
    for (const layer of state.layers) {
      const image = images.get(layer.imageId);
      bindTargetOutput(dest);
      uTex(layerProgram, "u_dest", source.texture, 0);
      uTex(layerProgram, "u_img", image ? image.texture : missingTexture, 1);
      u2(layerProgram, "u_res", width, height);
      u2(
        layerProgram,
        "u_img_texel",
        image ? 1 / image.width : 1 / 64,
        image ? 1 / image.height : 1 / 64
      );
      u2(layerProgram, "u_pos", layer.pos[0], layer.pos[1]);
      u2(layerProgram, "u_ext", layer.ext[0], layer.ext[1]);
      u1(layerProgram, "u_rot", layer.rot);
      u1(layerProgram, "u_time", state.time);
      u1(layerProgram, "u_audio", state.audio * g.audioReact);
      u1(layerProgram, "u_opacity", layer.opacity);
      u1(layerProgram, "u_blend", layer.blend);
      u1(layerProgram, "u_tile", layer.tile);
      u1(layerProgram, "u_warp", layer.warp);
      u1(layerProgram, "u_swirl", layer.swirl);
      u1(layerProgram, "u_ripple", layer.ripple);
      u1(layerProgram, "u_kaleido", layer.kaleido);
      u1(layerProgram, "u_pixelate", layer.pixelate);
      u1(layerProgram, "u_bulge", layer.bulge);
      u1(layerProgram, "u_mirror", layer.mirror);
      u1(layerProgram, "u_hue", layer.hue);
      u1(layerProgram, "u_sat", layer.saturation);
      u1(layerProgram, "u_con", layer.contrast);
      u1(layerProgram, "u_bri", layer.brightness);
      u1(layerProgram, "u_invert", layer.invert);
      u1(layerProgram, "u_poster", layer.posterize);
      u1(layerProgram, "u_chroma", layer.chroma);
      u1(layerProgram, "u_edges", layer.edges);
      u3(layerProgram, "u_tint", layer.tint);
      u1(layerProgram, "u_tint_amt", layer.tintAmount);
      u1(layerProgram, "u_shimmer", layer.shimmer);
      u1(layerProgram, "u_seed", layer.seed);
      drawQuad();
      const swap = source;
      source = dest;
      dest = swap;
    }

    // Post + feedback
    if (needFeedbackClear) {
      for (const target of [targets.postA, targets.postB]) {
        bindTargetOutput(target);
        gl!.clearColor(0, 0, 0, 1);
        gl!.clear(gl!.COLOR_BUFFER_BIT);
      }
      needFeedbackClear = false;
    }
    const prev = postFlip ? targets.postA : targets.postB;
    const out = postFlip ? targets.postB : targets.postA;
    postFlip = !postFlip;

    const post = programs.post;
    gl!.useProgram(post.program);
    bindTargetOutput(out);
    uTex(post, "u_scene", source.texture, 0);
    uTex(post, "u_prev", prev.texture, 1);
    u2(post, "u_res", width, height);
    u1(post, "u_time", state.time);
    u1(post, "u_audio", state.audio * g.audioReact);
    u2(post, "u_pointer", state.pointer.x, state.pointer.y);
    u2(post, "u_pointer_vel", state.pointer.velocityX, state.pointer.velocityY);
    u1(post, "u_pointer_down", state.pointer.down ? 1 : 0);
    u1(post, "u_pointer_active", state.pointer.active ? 1 : 0);
    u1(post, "u_feedback", g.feedback);
    u1(post, "u_trails", g.trails);
    u1(post, "u_fb_zoom", g.fbZoom);
    u1(post, "u_fb_rotate", g.fbRotate);
    u1(post, "u_fb_hue", g.fbHue);
    u1(post, "u_warp", g.warp);
    u1(post, "u_swirl", g.swirl);
    u1(post, "u_ripple", g.ripple);
    u1(post, "u_zoom", g.zoom);
    u1(post, "u_kaleido", g.kaleido);
    u1(post, "u_mirror", g.mirror);
    u1(post, "u_chroma", g.chroma);
    u1(post, "u_hue_orbit", g.hueOrbit);
    u1(post, "u_sat", g.saturation);
    u1(post, "u_con", g.contrast);
    u1(post, "u_solarize", g.solarize);
    u1(post, "u_grain", g.grain);
    u1(post, "u_scanlines", g.scanlines);
    u1(post, "u_vignette", g.vignette);
    u1(post, "u_strobe", g.strobe);
    u1(post, "u_pointer_force", g.pointerForce);
    u1(post, "u_pointer_size", g.pointerSize);
    u1(post, "u_pointer_mode", g.pointerMode);
    drawQuad();

    // Present
    const copy = programs.copy;
    gl!.useProgram(copy.program);
    bindTargetOutput(null);
    uTex(copy, "u_tex", out.texture, 0);
    drawQuad();
  }

  function applySize() {
    const ratio = Math.min(window.devicePixelRatio || 1, pixelRatioCap);
    const nextWidth = Math.max(2, Math.round(cssWidth * ratio));
    const nextHeight = Math.max(2, Math.round(cssHeight * ratio));
    if (nextWidth === width && nextHeight === height) return;
    width = nextWidth;
    height = nextHeight;
    canvas.width = width;
    canvas.height = height;
    for (const target of Object.values(targets)) resizeTarget(target, width, height);
    needFeedbackClear = true;
  }

  return {
    resize(nextCssWidth, nextCssHeight) {
      cssWidth = Math.max(1, nextCssWidth);
      cssHeight = Math.max(1, nextCssHeight);
      applySize();
    },
    setPixelRatioCap(cap) {
      pixelRatioCap = Math.max(0.5, cap);
      applySize();
    },
    setImage(imageId, sourceImage) {
      let entry = images.get(imageId);
      if (!entry) {
        entry = { texture: makeTexture(), width: 1, height: 1 };
        images.set(imageId, entry);
      }
      gl.bindTexture(gl.TEXTURE_2D, entry.texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sourceImage);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, false);
      const size = textureSourceSize(sourceImage);
      entry.width = size.width;
      entry.height = size.height;
    },
    removeImage(imageId) {
      const entry = images.get(imageId);
      if (!entry) return;
      gl.deleteTexture(entry.texture);
      images.delete(imageId);
    },
    hasImage(imageId) {
      return images.has(imageId);
    },
    render,
    clearFeedback() {
      needFeedbackClear = true;
    },
    destroy() {
      for (const entry of images.values()) gl.deleteTexture(entry.texture);
      images.clear();
      gl.deleteTexture(missingTexture);
      for (const target of Object.values(targets)) {
        gl.deleteFramebuffer(target.framebuffer);
        gl.deleteTexture(target.texture);
      }
      for (const { program } of Object.values(programs)) gl.deleteProgram(program);
      if (quad) gl.deleteBuffer(quad);
    },
  };
}
