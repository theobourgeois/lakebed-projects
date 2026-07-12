// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/fc5af6e0ab965cb6c3e3cb129dd6c94e/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/server.js
function capsule(definition) {
  return definition;
}
function query(handler) {
  return handler;
}
function mutation(handler) {
  return handler;
}
function field(kind) {
  return {
    kind,
    defaultValue: void 0,
    default(value) {
      return {
        ...this,
        defaultValue: value
      };
    }
  };
}
function table(fields) {
  return {
    kind: "table",
    fields
  };
}
function string() {
  return field("string");
}

// lakebed-source:shared/types.ts
var MIN_LAYER_SIZE = 8;
var MAX_PROJECT_DIM = 8e3;
var BLEND_MODES = [
  "normal",
  "multiply",
  "screen",
  "overlay",
  "darken",
  "lighten",
  "color-dodge",
  "color-burn",
  "hard-light",
  "soft-light",
  "difference",
  "exclusion",
  "hue",
  "saturation",
  "color",
  "luminosity"
];
function finite(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function sanitizeText(input) {
  if (!input || typeof input.content !== "string") return void 0;
  const align = input.align === "center" || input.align === "right" ? input.align : "left";
  const rasterWidth = finite(input.rasterWidth, 0);
  const rasterHeight = finite(input.rasterHeight, 0);
  return {
    content: input.content.slice(0, 4e3),
    fontFamily: typeof input.fontFamily === "string" ? input.fontFamily.slice(0, 80) : "Inter",
    fontSize: clamp(finite(input.fontSize, 48), 6, 500),
    fontWeight: clamp(Math.round(finite(input.fontWeight, 400) / 100) * 100, 100, 900),
    align,
    color: typeof input.color === "string" && /^#[0-9a-f]{6}$/i.test(input.color) ? input.color : "#111111",
    lineHeight: clamp(finite(input.lineHeight, 1.2), 0.6, 3),
    ...rasterWidth > 0 && rasterHeight > 0 ? { rasterWidth, rasterHeight } : {}
  };
}
function sanitizeTransform(input) {
  const t = input ?? {};
  const text = sanitizeText(t.text);
  return {
    x: finite(t.x, 0),
    y: finite(t.y, 0),
    w: Math.max(MIN_LAYER_SIZE, finite(t.w, MIN_LAYER_SIZE)),
    h: Math.max(MIN_LAYER_SIZE, finite(t.h, MIN_LAYER_SIZE)),
    rotation: finite(t.rotation, 0),
    opacity: clamp(finite(t.opacity, 1), 0, 1),
    visible: typeof t.visible === "boolean" ? t.visible : true,
    flipX: typeof t.flipX === "boolean" ? t.flipX : false,
    blendMode: BLEND_MODES.includes(t.blendMode) ? t.blendMode : "normal",
    ...text ? { text } : {}
  };
}
function encodeTransform(t) {
  return JSON.stringify(sanitizeTransform(t));
}
function decodeTransform(raw) {
  try {
    return sanitizeTransform(JSON.parse(raw));
  } catch {
    return sanitizeTransform(null);
  }
}
function decodeStringArray(raw) {
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((v) => typeof v === "string") : [];
  } catch {
    return [];
  }
}
function cleanName(value, fallback) {
  const cleaned = value.replace(/\s+/g, " ").trim().slice(0, 80);
  return cleaned || fallback;
}

// lakebed-source:server/s3.ts
var CLOUD_FRONT_URL = "https://d2p6q917mww4yf.cloudfront.net";
var KEY_PREFIX = "image-editor";
var encoder = new TextEncoder();
function requireEnv(ctx, key) {
  const value = ctx.env[key];
  if (typeof value !== "string" || !value) {
    throw new Error(`Missing server env: ${key}`);
  }
  return value;
}
function toHex(buffer) {
  return [...new Uint8Array(buffer)].map((b) => b.toString(16).padStart(2, "0")).join("");
}
async function sha256Hex(data) {
  const bytes = typeof data === "string" ? encoder.encode(data) : data;
  return toHex(await crypto.subtle.digest("SHA-256", bytes));
}
async function hmac(key, data) {
  const cryptoKey = await crypto.subtle.importKey("raw", key, { name: "HMAC", hash: "SHA-256" }, false, [
    "sign"
  ]);
  return crypto.subtle.sign("HMAC", cryptoKey, encoder.encode(data));
}
function uriEncode(value) {
  return encodeURIComponent(value).replace(/[!'()*]/g, (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`);
}
function safeSegment(value) {
  const cleaned = String(value).replace(/[^a-zA-Z0-9._-]+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 80);
  return cleaned || "x";
}
function decodeDataUrl(src) {
  const match = /^data:(image\/[a-z0-9.+-]+);base64,([\s\S]+)$/i.exec(src);
  if (!match) {
    throw new Error("Image must be a data URL");
  }
  const contentType = match[1].toLowerCase();
  const binary = atob(match[2].replace(/\s/g, ""));
  const body = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    body[i] = binary.charCodeAt(i);
  }
  const ext = contentType === "image/jpeg" || contentType === "image/jpg" ? "jpg" : contentType === "image/webp" ? "webp" : contentType === "image/gif" ? "gif" : "png";
  return { contentType, body, ext };
}
function amzDate(now) {
  const iso = now.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
  return { amzDate: iso, dateStamp: iso.slice(0, 8) };
}
function objectKey(userId, projectId, ext) {
  const id = typeof crypto.randomUUID === "function" ? crypto.randomUUID() : `${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 10)}`;
  return `${KEY_PREFIX}/${safeSegment(userId)}/${safeSegment(projectId)}/${id}.${ext}`;
}
function canonicalUri(key) {
  return `/${key.split("/").map(uriEncode).join("/")}`;
}
async function uploadImageDataUrl(ctx, projectId, src) {
  const accessKey = requireEnv(ctx, "AWS_ACCESS_KEY_ID");
  const secretKey = requireEnv(ctx, "AWS_SECRET_ACCESS_KEY");
  const bucket = requireEnv(ctx, "AWS_BUCKET");
  const region = typeof ctx.env.AWS_REGION === "string" && ctx.env.AWS_REGION ? ctx.env.AWS_REGION : "us-east-2";
  const { contentType, body, ext } = decodeDataUrl(src);
  const key = objectKey(ctx.auth.userId, projectId, ext);
  const host = `${bucket}.s3.${region}.amazonaws.com`;
  const uri = canonicalUri(key);
  const url = `https://${host}${uri}`;
  const { amzDate: amz, dateStamp } = amzDate(/* @__PURE__ */ new Date());
  const payloadHash = await sha256Hex(body);
  const canonicalHeaders = `content-type:${contentType}
host:${host}
x-amz-content-sha256:${payloadHash}
x-amz-date:${amz}
`;
  const signedHeaders = "content-type;host;x-amz-content-sha256;x-amz-date";
  const canonicalRequest = ["PUT", uri, "", canonicalHeaders, signedHeaders, payloadHash].join("\n");
  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amz, credentialScope, await sha256Hex(canonicalRequest)].join(
    "\n"
  );
  const kDate = await hmac(encoder.encode(`AWS4${secretKey}`), dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, "s3");
  const kSigning = await hmac(kService, "aws4_request");
  const signature = toHex(await hmac(kSigning, stringToSign));
  const authorization = `AWS4-HMAC-SHA256 Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;
  ctx.log.info("Uploading image to S3", { key, bytes: body.byteLength, contentType });
  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": contentType,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amz,
      Authorization: authorization
    },
    body
  });
  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    ctx.log.error("S3 upload failed", { status: response.status, detail: detail.slice(0, 500), key });
    throw new Error(`S3 upload failed (${response.status}): ${detail.slice(0, 200)}`);
  }
  const publicUrl = `${CLOUD_FRONT_URL}/${key}`;
  ctx.log.info("S3 upload ok", { url: publicUrl });
  return publicUrl;
}

// lakebed-source:server/index.ts
var MAX_SRC_LENGTH = 12e6;
var MAX_THUMB_LENGTH = 3e5;
var MAX_PAINT_BYTES = 12e6;
function bytesToBase64(bytes) {
  let binary = "";
  const chunk = 32768;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, Math.min(i + chunk, bytes.length)));
  }
  return btoa(binary);
}
function requireProject(ctx, id) {
  const row = ctx.db.projects.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Project not found");
  }
  return row;
}
function requireLayer(ctx, id) {
  const row = ctx.db.layers.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Layer not found");
  }
  return row;
}
function requireAsset(ctx, id) {
  const row = ctx.db.assets.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Asset not found");
  }
  return row;
}
function checkDataUrl(src) {
  if (typeof src !== "string" || !src.startsWith("data:image/")) {
    throw new Error("Image must be a data URL");
  }
  if (src.length > MAX_SRC_LENGTH) {
    throw new Error("Image is too large");
  }
}
function checkDim(value) {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error("Invalid dimension");
  }
  return clamp(Math.round(value), 1, MAX_PROJECT_DIM);
}
async function insertAsset(ctx, projectId, src, width, height) {
  checkDataUrl(src);
  const url = await uploadImageDataUrl(ctx, projectId, src);
  return ctx.db.assets.insert({
    ownerId: ctx.auth.userId,
    projectId,
    src: url,
    width: String(checkDim(width)),
    height: String(checkDim(height))
  });
}
function setOrder(ctx, projectId, ids) {
  const valid = new Set(
    ctx.db.layers.where("projectId", projectId).all().map((row) => row.id)
  );
  const seen = /* @__PURE__ */ new Set();
  const order = [];
  for (const id of ids) {
    if (valid.has(id) && !seen.has(id)) {
      order.push(id);
      seen.add(id);
    }
  }
  for (const id of valid) {
    if (!seen.has(id)) order.push(id);
  }
  ctx.db.projects.update(projectId, { layerOrder: JSON.stringify(order) });
}
var server_default = capsule({
  name: "image-editor",
  schema: {
    projects: table({
      ownerId: string(),
      name: string(),
      width: string(),
      height: string(),
      layerOrder: string().default("[]"),
      thumb: string().default("")
    }),
    layers: table({
      ownerId: string(),
      projectId: string(),
      assetId: string(),
      // Client-generated idempotency key so a retried addLayer never duplicates.
      clientKey: string().default(""),
      name: string(),
      data: string()
    }),
    assets: table({
      ownerId: string(),
      projectId: string(),
      src: string(),
      width: string(),
      height: string()
    })
  },
  queries: {
    projects: query((ctx) => ({
      ready: true,
      items: ctx.db.projects.where("ownerId", ctx.auth.userId).orderBy("updatedAt", "desc").all().map((row) => ({
        id: row.id,
        name: row.name,
        width: Number(row.width),
        height: Number(row.height),
        layerOrder: decodeStringArray(String(row.layerOrder)),
        updatedAt: row.updatedAt
      }))
    })),
    // Thumbnails are the one bulky payload pushed by queries; only the home
    // screen subscribes to this one.
    projectThumbs: query((ctx) => ({
      ready: true,
      items: ctx.db.projects.where("ownerId", ctx.auth.userId).all().map((row) => ({ id: row.id, thumb: row.thumb }))
    })),
    layers: query((ctx) => ({
      ready: true,
      items: ctx.db.layers.where("ownerId", ctx.auth.userId).all().map((row) => ({
        id: row.id,
        projectId: row.projectId,
        assetId: row.assetId,
        name: row.name,
        data: row.data
      }))
    }))
  },
  mutations: {
    createProject: mutation((ctx, name, width, height) => {
      const row = ctx.db.projects.insert({
        ownerId: ctx.auth.userId,
        name: cleanName(String(name ?? ""), "Untitled"),
        width: String(checkDim(width)),
        height: String(checkDim(height)),
        layerOrder: "[]",
        thumb: ""
      });
      return { id: row.id };
    }),
    createProjectFromImage: mutation(
      async (ctx, name, width, height, layerName, src, dataJson) => {
        const project = ctx.db.projects.insert({
          ownerId: ctx.auth.userId,
          name: cleanName(String(name ?? ""), "Untitled"),
          width: String(checkDim(width)),
          height: String(checkDim(height)),
          layerOrder: "[]",
          thumb: ""
        });
        const asset = await insertAsset(ctx, project.id, String(src ?? ""), width, height);
        const layer = ctx.db.layers.insert({
          ownerId: ctx.auth.userId,
          projectId: project.id,
          assetId: asset.id,
          clientKey: "",
          name: cleanName(String(layerName ?? ""), "Image"),
          data: encodeTransform(decodeTransform(String(dataJson ?? "")))
        });
        ctx.db.projects.update(project.id, { layerOrder: JSON.stringify([layer.id]) });
        return { id: project.id, layerId: layer.id, assetId: asset.id, src: asset.src };
      }
    ),
    renameProject: mutation((ctx, id, name) => {
      requireProject(ctx, id);
      ctx.db.projects.update(id, { name: cleanName(String(name ?? ""), "Untitled") });
    }),
    resizeProject: mutation((ctx, id, width, height) => {
      requireProject(ctx, id);
      ctx.db.projects.update(id, { width: String(checkDim(width)), height: String(checkDim(height)) });
    }),
    setProjectThumb: mutation((ctx, id, thumb) => {
      requireProject(ctx, id);
      if (typeof thumb !== "string" || thumb.length > MAX_THUMB_LENGTH) {
        return;
      }
      ctx.db.projects.update(id, { thumb });
    }),
    deleteProject: mutation((ctx, id) => {
      requireProject(ctx, id);
      for (const layer of ctx.db.layers.where("projectId", id).all()) {
        ctx.db.layers.delete(layer.id);
      }
      for (const asset of ctx.db.assets.where("projectId", id).all()) {
        ctx.db.assets.delete(asset.id);
      }
      ctx.db.projects.delete(id);
    }),
    addLayer: mutation(
      async (ctx, projectId, clientKey, name, dataJson, asset) => {
        const project = requireProject(ctx, projectId);
        if (clientKey) {
          const existing = ctx.db.layers.where("ownerId", ctx.auth.userId).where("clientKey", clientKey).all()[0];
          if (existing) {
            const row = ctx.db.assets.get(String(existing.assetId));
            return {
              layerId: existing.id,
              assetId: existing.assetId,
              src: row ? String(row.src) : ""
            };
          }
        }
        let assetId = asset?.assetId ?? "";
        let assetSrc = "";
        if (assetId) {
          const existing = requireAsset(ctx, assetId);
          assetSrc = String(existing.src);
          if (existing.projectId !== projectId) {
            assetId = ctx.db.assets.insert({
              ownerId: ctx.auth.userId,
              projectId,
              src: existing.src,
              width: existing.width,
              height: existing.height
            }).id;
          }
        } else {
          const created = await insertAsset(
            ctx,
            projectId,
            String(asset?.src ?? ""),
            asset?.width ?? 0,
            asset?.height ?? 0
          );
          assetId = created.id;
          assetSrc = String(created.src);
        }
        const layer = ctx.db.layers.insert({
          ownerId: ctx.auth.userId,
          projectId,
          assetId,
          clientKey: String(clientKey ?? ""),
          name: cleanName(String(name ?? ""), "Image"),
          data: encodeTransform(decodeTransform(String(dataJson ?? "")))
        });
        const order = decodeStringArray(String(project.layerOrder));
        order.push(layer.id);
        ctx.db.projects.update(projectId, { layerOrder: JSON.stringify(order) });
        return { layerId: layer.id, assetId, src: assetSrc };
      }
    ),
    updateLayer: mutation((ctx, id, dataJson) => {
      requireLayer(ctx, id);
      ctx.db.layers.update(id, { data: encodeTransform(decodeTransform(String(dataJson ?? ""))) });
    }),
    replaceLayerAsset: mutation(async (ctx, id, src, width, height) => {
      const layer = requireLayer(ctx, id);
      const asset = await insertAsset(ctx, String(layer.projectId), String(src ?? ""), width, height);
      ctx.db.layers.update(id, { assetId: asset.id });
      return { assetId: asset.id, src: String(asset.src) };
    }),
    renameLayer: mutation((ctx, id, name) => {
      requireLayer(ctx, id);
      ctx.db.layers.update(id, { name: cleanName(String(name ?? ""), "Image") });
    }),
    deleteLayer: mutation((ctx, id) => {
      const layer = requireLayer(ctx, id);
      ctx.db.layers.delete(id);
      const project = ctx.db.projects.get(String(layer.projectId));
      if (project) {
        const order = decodeStringArray(String(project.layerOrder)).filter((layerId) => layerId !== id);
        ctx.db.projects.update(project.id, { layerOrder: JSON.stringify(order) });
      }
    }),
    setLayerOrder: mutation((ctx, projectId, ids) => {
      requireProject(ctx, projectId);
      setOrder(ctx, projectId, Array.isArray(ids) ? ids.map(String) : []);
    }),
    // Read-as-mutation escape hatch: queries cannot take arguments, and asset
    // payloads are too large to live in a live query result.
    getAsset: mutation((ctx, id) => {
      const row = requireAsset(ctx, id);
      return { id: row.id, src: row.src, width: Number(row.width), height: Number(row.height) };
    }),
    // Canvas operations need same-origin pixel data. CloudFront images are fine
    // for <img>, but deployments may not expose CORS headers, so fetch the
    // owned asset server-side and return a data URL only when pixels are needed.
    getAssetPaint: mutation(async (ctx, id) => {
      const row = requireAsset(ctx, id);
      const response = await fetch(String(row.src));
      if (!response.ok) throw new Error(`Could not load image pixels (${response.status})`);
      const contentType = response.headers.get("content-type") || "image/png";
      if (!contentType.toLowerCase().startsWith("image/")) throw new Error("Asset is not an image");
      const bytes = new Uint8Array(await response.arrayBuffer());
      if (bytes.byteLength > MAX_PAINT_BYTES) throw new Error("Image is too large to combine");
      return { src: `data:${contentType};base64,${bytesToBase64(bytes)}` };
    })
  }
});
export {
  server_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9zZXJ2ZXIudHMiLCAibGFrZWJlZC1zb3VyY2U6c2hhcmVkL3R5cGVzLnRzIiwgImxha2ViZWQtc291cmNlOnNlcnZlci9zMy50cyIsICJsYWtlYmVkLXNvdXJjZTpzZXJ2ZXIvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG5cbmV4cG9ydCBjb25zdCBCTEVORF9NT0RFUyA9IFtcbiAgXCJub3JtYWxcIiwgXCJtdWx0aXBseVwiLCBcInNjcmVlblwiLCBcIm92ZXJsYXlcIiwgXCJkYXJrZW5cIiwgXCJsaWdodGVuXCIsXG4gIFwiY29sb3ItZG9kZ2VcIiwgXCJjb2xvci1idXJuXCIsIFwiaGFyZC1saWdodFwiLCBcInNvZnQtbGlnaHRcIiwgXCJkaWZmZXJlbmNlXCIsIFwiZXhjbHVzaW9uXCIsXG4gIFwiaHVlXCIsIFwic2F0dXJhdGlvblwiLCBcImNvbG9yXCIsIFwibHVtaW5vc2l0eVwiXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJUcmFuc2Zvcm0gPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3OiBudW1iZXI7XG4gIGg6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMsIGNsb2Nrd2lzZSwgYWJvdXQgdGhlIGJveCBjZW50ZXIuICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4xICovXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgZmxpcFg6IGJvb2xlYW47XG4gIGJsZW5kTW9kZTogQmxlbmRNb2RlO1xufTtcblxuZXhwb3J0IHR5cGUgVGV4dEFsaWduID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xuXG5leHBvcnQgdHlwZSBUZXh0TGF5ZXJEYXRhID0ge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udFdlaWdodDogbnVtYmVyO1xuICBhbGlnbjogVGV4dEFsaWduO1xuICBjb2xvcjogc3RyaW5nO1xuICBsaW5lSGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJbnRyaW5zaWMgcmFzdGVyIGRpbWVuc2lvbnMgdXNlZCB0byBwcmVzZXJ2ZSBsYXllciBzY2FsZSBhY3Jvc3MgdGV4dCByZXJlbmRlcnMuICovXG4gIHJhc3RlcldpZHRoPzogbnVtYmVyO1xuICByYXN0ZXJIZWlnaHQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllckRhdGEgPSBMYXllclRyYW5zZm9ybSAmIHsgdGV4dD86IFRleHRMYXllckRhdGEgfTtcblxuZXhwb3J0IHR5cGUgTGF5ZXIgPSBMYXllckRhdGEgJiB7XG4gIGlkOiBzdHJpbmc7XG4gIGFzc2V0SWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuLyoqIFRoZSBpbi1tZW1vcnkgZWRpdGluZyBkb2N1bWVudC4gbGF5ZXJzWzBdIGlzIHRoZSBib3R0b20gbGF5ZXIuICovXG5leHBvcnQgdHlwZSBQcm9qZWN0RG9jID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYXllcnM6IExheWVyW107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9qZWN0TWV0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF5ZXJPcmRlcjogc3RyaW5nW107XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJSb3cgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHByb2plY3RJZDogc3RyaW5nO1xuICBhc3NldElkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvamVjdFRodW1iID0ge1xuICBpZDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQXNzZXRQYXlsb2FkID0ge1xuICBpZDogc3RyaW5nO1xuICBzcmM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQYWludEFzc2V0UGF5bG9hZCA9IHsgc3JjOiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gZmluaXRlKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVUZXh0KGlucHV0OiBQYXJ0aWFsPFRleHRMYXllckRhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRleHRMYXllckRhdGEgfCB1bmRlZmluZWQge1xuICBpZiAoIWlucHV0IHx8IHR5cGVvZiBpbnB1dC5jb250ZW50ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBhbGlnbjogVGV4dEFsaWduID0gaW5wdXQuYWxpZ24gPT09IFwiY2VudGVyXCIgfHwgaW5wdXQuYWxpZ24gPT09IFwicmlnaHRcIiA/IGlucHV0LmFsaWduIDogXCJsZWZ0XCI7XG4gIGNvbnN0IHJhc3RlcldpZHRoID0gZmluaXRlKGlucHV0LnJhc3RlcldpZHRoLCAwKTtcbiAgY29uc3QgcmFzdGVySGVpZ2h0ID0gZmluaXRlKGlucHV0LnJhc3RlckhlaWdodCwgMCk7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogaW5wdXQuY29udGVudC5zbGljZSgwLCA0MDAwKSxcbiAgICBmb250RmFtaWx5OiB0eXBlb2YgaW5wdXQuZm9udEZhbWlseSA9PT0gXCJzdHJpbmdcIiA/IGlucHV0LmZvbnRGYW1pbHkuc2xpY2UoMCwgODApIDogXCJJbnRlclwiLFxuICAgIGZvbnRTaXplOiBjbGFtcChmaW5pdGUoaW5wdXQuZm9udFNpemUsIDQ4KSwgNiwgNTAwKSxcbiAgICBmb250V2VpZ2h0OiBjbGFtcChNYXRoLnJvdW5kKGZpbml0ZShpbnB1dC5mb250V2VpZ2h0LCA0MDApIC8gMTAwKSAqIDEwMCwgMTAwLCA5MDApLFxuICAgIGFsaWduLFxuICAgIGNvbG9yOiB0eXBlb2YgaW5wdXQuY29sb3IgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdChpbnB1dC5jb2xvcikgPyBpbnB1dC5jb2xvciA6IFwiIzExMTExMVwiLFxuICAgIGxpbmVIZWlnaHQ6IGNsYW1wKGZpbml0ZShpbnB1dC5saW5lSGVpZ2h0LCAxLjIpLCAwLjYsIDMpLFxuICAgIC4uLihyYXN0ZXJXaWR0aCA+IDAgJiYgcmFzdGVySGVpZ2h0ID4gMCA/IHsgcmFzdGVyV2lkdGgsIHJhc3RlckhlaWdodCB9IDoge30pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVRyYW5zZm9ybShpbnB1dDogUGFydGlhbDxMYXllckRhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRGF0YSB7XG4gIGNvbnN0IHQgPSBpbnB1dCA/PyB7fTtcbiAgY29uc3QgdGV4dCA9IHNhbml0aXplVGV4dCh0LnRleHQpO1xuICByZXR1cm4ge1xuICAgIHg6IGZpbml0ZSh0LngsIDApLFxuICAgIHk6IGZpbml0ZSh0LnksIDApLFxuICAgIHc6IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBmaW5pdGUodC53LCBNSU5fTEFZRVJfU0laRSkpLFxuICAgIGg6IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBmaW5pdGUodC5oLCBNSU5fTEFZRVJfU0laRSkpLFxuICAgIHJvdGF0aW9uOiBmaW5pdGUodC5yb3RhdGlvbiwgMCksXG4gICAgb3BhY2l0eTogY2xhbXAoZmluaXRlKHQub3BhY2l0eSwgMSksIDAsIDEpLFxuICAgIHZpc2libGU6IHR5cGVvZiB0LnZpc2libGUgPT09IFwiYm9vbGVhblwiID8gdC52aXNpYmxlIDogdHJ1ZSxcbiAgICBmbGlwWDogdHlwZW9mIHQuZmxpcFggPT09IFwiYm9vbGVhblwiID8gdC5mbGlwWCA6IGZhbHNlLFxuICAgIGJsZW5kTW9kZTogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZE1vZGUgYXMgQmxlbmRNb2RlKSA/ICh0LmJsZW5kTW9kZSBhcyBCbGVuZE1vZGUpIDogXCJub3JtYWxcIixcbiAgICAuLi4odGV4dCA/IHsgdGV4dCB9IDoge30pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVUcmFuc2Zvcm0odDogTGF5ZXJEYXRhKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNhbml0aXplVHJhbnNmb3JtKHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVRyYW5zZm9ybShyYXc6IHN0cmluZyk6IExheWVyRGF0YSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNhbml0aXplVHJhbnNmb3JtKEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPExheWVyRGF0YT4pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc2FuaXRpemVUcmFuc2Zvcm0obnVsbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmluZ0FycmF5KHJhdzogc3RyaW5nKTogc3RyaW5nW10ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KSBhcyB1bmtub3duO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQuZmlsdGVyKCh2KTogdiBpcyBzdHJpbmcgPT4gdHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIDogW107XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5OYW1lKHZhbHVlOiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjbGVhbmVkID0gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnNsaWNlKDAsIDgwKTtcbiAgcmV0dXJuIGNsZWFuZWQgfHwgZmFsbGJhY2s7XG59XG4iLCAiLy8gTWluaW1hbCBTMyBQdXRPYmplY3QgdmlhIFNpZ25hdHVyZSBWNCArIGZldGNoIChubyBBV1MgU0RLKS5cbi8vIFVwbG9hZHMgaW1hZ2UgZGF0YSBVUkxzIGFuZCByZXR1cm5zIGEgQ2xvdWRGcm9udCBVUkwgZm9yIHRoZSBvYmplY3QuXG4vLyBPYmplY3RzIGxhbmQgdW5kZXIgdGhlIGltYWdlLWVkaXRvci8gcHJlZml4IGluIHRoZSBidWNrZXQuXG5cbmltcG9ydCB0eXBlIHsgU2VydmVyQ29udGV4dCB9IGZyb20gXCJsYWtlYmVkL3NlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQ0xPVURfRlJPTlRfVVJMID0gXCJodHRwczovL2QycDZxOTE3bXd3NHlmLmNsb3VkZnJvbnQubmV0XCI7XG5jb25zdCBLRVlfUFJFRklYID0gXCJpbWFnZS1lZGl0b3JcIjtcblxuY29uc3QgZW5jb2RlciA9IG5ldyBUZXh0RW5jb2RlcigpO1xuXG5mdW5jdGlvbiByZXF1aXJlRW52KGN0eDogU2VydmVyQ29udGV4dCwga2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB2YWx1ZSA9IGN0eC5lbnZba2V5XTtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIiB8fCAhdmFsdWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3Npbmcgc2VydmVyIGVudjogJHtrZXl9YCk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5mdW5jdGlvbiB0b0hleChidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIFsuLi5uZXcgVWludDhBcnJheShidWZmZXIpXS5tYXAoKGIpID0+IGIudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsIFwiMFwiKSkuam9pbihcIlwiKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2hhMjU2SGV4KGRhdGE6IFVpbnQ4QXJyYXkgfCBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBieXRlcyA9IHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiID8gZW5jb2Rlci5lbmNvZGUoZGF0YSkgOiBkYXRhO1xuICByZXR1cm4gdG9IZXgoYXdhaXQgY3J5cHRvLnN1YnRsZS5kaWdlc3QoXCJTSEEtMjU2XCIsIGJ5dGVzKSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGhtYWMoa2V5OiBBcnJheUJ1ZmZlciB8IFVpbnQ4QXJyYXksIGRhdGE6IHN0cmluZyk6IFByb21pc2U8QXJyYXlCdWZmZXI+IHtcbiAgY29uc3QgY3J5cHRvS2V5ID0gYXdhaXQgY3J5cHRvLnN1YnRsZS5pbXBvcnRLZXkoXCJyYXdcIiwga2V5LCB7IG5hbWU6IFwiSE1BQ1wiLCBoYXNoOiBcIlNIQS0yNTZcIiB9LCBmYWxzZSwgW1xuICAgIFwic2lnblwiXG4gIF0pO1xuICByZXR1cm4gY3J5cHRvLnN1YnRsZS5zaWduKFwiSE1BQ1wiLCBjcnlwdG9LZXksIGVuY29kZXIuZW5jb2RlKGRhdGEpKTtcbn1cblxuLyoqIEFXUyBTaWdWNCBVUkkgZW5jb2RlIChwYXRoIHNlZ21lbnQpLiAqL1xuZnVuY3Rpb24gdXJpRW5jb2RlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC9bIScoKSpdL2csIChjaCkgPT4gYCUke2NoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG59XG5cbi8qKiBLZWVwIFMzIGtleXMgVVJMLXNhZmUgXHUyMDE0IGd1ZXN0IGlkcyBsaWtlIFwiZ3Vlc3Q6bG9jYWxcIiBicmVhayB1bnNpZ25lZCBwYXRocy4gKi9cbmZ1bmN0aW9uIHNhZmVTZWdtZW50KHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjbGVhbmVkID0gU3RyaW5nKHZhbHVlKVxuICAgIC5yZXBsYWNlKC9bXmEtekEtWjAtOS5fLV0rL2csIFwiX1wiKVxuICAgIC5yZXBsYWNlKC9fKy9nLCBcIl9cIilcbiAgICAucmVwbGFjZSgvXl98XyQvZywgXCJcIilcbiAgICAuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBcInhcIjtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRGF0YVVybChzcmM6IHN0cmluZyk6IHsgY29udGVudFR5cGU6IHN0cmluZzsgYm9keTogVWludDhBcnJheTsgZXh0OiBzdHJpbmcgfSB7XG4gIGNvbnN0IG1hdGNoID0gL15kYXRhOihpbWFnZVxcL1thLXowLTkuKy1dKyk7YmFzZTY0LChbXFxzXFxTXSspJC9pLmV4ZWMoc3JjKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIG11c3QgYmUgYSBkYXRhIFVSTFwiKTtcbiAgfVxuICBjb25zdCBjb250ZW50VHlwZSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGJpbmFyeSA9IGF0b2IobWF0Y2hbMl0ucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgY29uc3QgYm9keSA9IG5ldyBVaW50OEFycmF5KGJpbmFyeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvZHlbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgfVxuICBjb25zdCBleHQgPVxuICAgIGNvbnRlbnRUeXBlID09PSBcImltYWdlL2pwZWdcIiB8fCBjb250ZW50VHlwZSA9PT0gXCJpbWFnZS9qcGdcIlxuICAgICAgPyBcImpwZ1wiXG4gICAgICA6IGNvbnRlbnRUeXBlID09PSBcImltYWdlL3dlYnBcIlxuICAgICAgICA/IFwid2VicFwiXG4gICAgICAgIDogY29udGVudFR5cGUgPT09IFwiaW1hZ2UvZ2lmXCJcbiAgICAgICAgICA/IFwiZ2lmXCJcbiAgICAgICAgICA6IFwicG5nXCI7XG4gIHJldHVybiB7IGNvbnRlbnRUeXBlLCBib2R5LCBleHQgfTtcbn1cblxuZnVuY3Rpb24gYW16RGF0ZShub3c6IERhdGUpOiB7IGFtekRhdGU6IHN0cmluZzsgZGF0ZVN0YW1wOiBzdHJpbmcgfSB7XG4gIGNvbnN0IGlzbyA9IG5vdy50b0lTT1N0cmluZygpLnJlcGxhY2UoL1stOl0vZywgXCJcIikucmVwbGFjZSgvXFwuXFxkezN9WiQvLCBcIlpcIik7XG4gIHJldHVybiB7IGFtekRhdGU6IGlzbywgZGF0ZVN0YW1wOiBpc28uc2xpY2UoMCwgOCkgfTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0S2V5KHVzZXJJZDogc3RyaW5nLCBwcm9qZWN0SWQ6IHN0cmluZywgZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpZCA9XG4gICAgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgICAgOiBgJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMCl9YDtcbiAgcmV0dXJuIGAke0tFWV9QUkVGSVh9LyR7c2FmZVNlZ21lbnQodXNlcklkKX0vJHtzYWZlU2VnbWVudChwcm9qZWN0SWQpfS8ke2lkfS4ke2V4dH1gO1xufVxuXG5mdW5jdGlvbiBjYW5vbmljYWxVcmkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYC8ke2tleS5zcGxpdChcIi9cIikubWFwKHVyaUVuY29kZSkuam9pbihcIi9cIil9YDtcbn1cblxuLyoqIFVwbG9hZCBhIGRhdGEtVVJMIGltYWdlIHRvIFMzOyByZXR1cm5zIHRoZSBwdWJsaWMgQ2xvdWRGcm9udCBVUkwuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkSW1hZ2VEYXRhVXJsKFxuICBjdHg6IFNlcnZlckNvbnRleHQsXG4gIHByb2plY3RJZDogc3RyaW5nLFxuICBzcmM6IHN0cmluZ1xuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3QgYWNjZXNzS2V5ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX0FDQ0VTU19LRVlfSURcIik7XG4gIGNvbnN0IHNlY3JldEtleSA9IHJlcXVpcmVFbnYoY3R4LCBcIkFXU19TRUNSRVRfQUNDRVNTX0tFWVwiKTtcbiAgY29uc3QgYnVja2V0ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX0JVQ0tFVFwiKTtcbiAgY29uc3QgcmVnaW9uID0gdHlwZW9mIGN0eC5lbnYuQVdTX1JFR0lPTiA9PT0gXCJzdHJpbmdcIiAmJiBjdHguZW52LkFXU19SRUdJT04gPyBjdHguZW52LkFXU19SRUdJT04gOiBcInVzLWVhc3QtMlwiO1xuXG4gIGNvbnN0IHsgY29udGVudFR5cGUsIGJvZHksIGV4dCB9ID0gZGVjb2RlRGF0YVVybChzcmMpO1xuICBjb25zdCBrZXkgPSBvYmplY3RLZXkoY3R4LmF1dGgudXNlcklkLCBwcm9qZWN0SWQsIGV4dCk7XG4gIGNvbnN0IGhvc3QgPSBgJHtidWNrZXR9LnMzLiR7cmVnaW9ufS5hbWF6b25hd3MuY29tYDtcbiAgY29uc3QgdXJpID0gY2Fub25pY2FsVXJpKGtleSk7XG4gIGNvbnN0IHVybCA9IGBodHRwczovLyR7aG9zdH0ke3VyaX1gO1xuICBjb25zdCB7IGFtekRhdGU6IGFteiwgZGF0ZVN0YW1wIH0gPSBhbXpEYXRlKG5ldyBEYXRlKCkpO1xuICBjb25zdCBwYXlsb2FkSGFzaCA9IGF3YWl0IHNoYTI1NkhleChib2R5KTtcblxuICBjb25zdCBjYW5vbmljYWxIZWFkZXJzID1cbiAgICBgY29udGVudC10eXBlOiR7Y29udGVudFR5cGV9XFxuYCArXG4gICAgYGhvc3Q6JHtob3N0fVxcbmAgK1xuICAgIGB4LWFtei1jb250ZW50LXNoYTI1Njoke3BheWxvYWRIYXNofVxcbmAgK1xuICAgIGB4LWFtei1kYXRlOiR7YW16fVxcbmA7XG4gIGNvbnN0IHNpZ25lZEhlYWRlcnMgPSBcImNvbnRlbnQtdHlwZTtob3N0O3gtYW16LWNvbnRlbnQtc2hhMjU2O3gtYW16LWRhdGVcIjtcbiAgY29uc3QgY2Fub25pY2FsUmVxdWVzdCA9IFtcIlBVVFwiLCB1cmksIFwiXCIsIGNhbm9uaWNhbEhlYWRlcnMsIHNpZ25lZEhlYWRlcnMsIHBheWxvYWRIYXNoXS5qb2luKFwiXFxuXCIpO1xuXG4gIGNvbnN0IGNyZWRlbnRpYWxTY29wZSA9IGAke2RhdGVTdGFtcH0vJHtyZWdpb259L3MzL2F3czRfcmVxdWVzdGA7XG4gIGNvbnN0IHN0cmluZ1RvU2lnbiA9IFtcIkFXUzQtSE1BQy1TSEEyNTZcIiwgYW16LCBjcmVkZW50aWFsU2NvcGUsIGF3YWl0IHNoYTI1NkhleChjYW5vbmljYWxSZXF1ZXN0KV0uam9pbihcbiAgICBcIlxcblwiXG4gICk7XG5cbiAgY29uc3Qga0RhdGUgPSBhd2FpdCBobWFjKGVuY29kZXIuZW5jb2RlKGBBV1M0JHtzZWNyZXRLZXl9YCksIGRhdGVTdGFtcCk7XG4gIGNvbnN0IGtSZWdpb24gPSBhd2FpdCBobWFjKGtEYXRlLCByZWdpb24pO1xuICBjb25zdCBrU2VydmljZSA9IGF3YWl0IGhtYWMoa1JlZ2lvbiwgXCJzM1wiKTtcbiAgY29uc3Qga1NpZ25pbmcgPSBhd2FpdCBobWFjKGtTZXJ2aWNlLCBcImF3czRfcmVxdWVzdFwiKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gdG9IZXgoYXdhaXQgaG1hYyhrU2lnbmluZywgc3RyaW5nVG9TaWduKSk7XG5cbiAgY29uc3QgYXV0aG9yaXphdGlvbiA9XG4gICAgYEFXUzQtSE1BQy1TSEEyNTYgQ3JlZGVudGlhbD0ke2FjY2Vzc0tleX0vJHtjcmVkZW50aWFsU2NvcGV9LCBgICtcbiAgICBgU2lnbmVkSGVhZGVycz0ke3NpZ25lZEhlYWRlcnN9LCBTaWduYXR1cmU9JHtzaWduYXR1cmV9YDtcblxuICBjdHgubG9nLmluZm8oXCJVcGxvYWRpbmcgaW1hZ2UgdG8gUzNcIiwgeyBrZXksIGJ5dGVzOiBib2R5LmJ5dGVMZW5ndGgsIGNvbnRlbnRUeXBlIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IGNvbnRlbnRUeXBlLFxuICAgICAgXCJ4LWFtei1jb250ZW50LXNoYTI1NlwiOiBwYXlsb2FkSGFzaCxcbiAgICAgIFwieC1hbXotZGF0ZVwiOiBhbXosXG4gICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uXG4gICAgfSxcbiAgICBib2R5XG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJcIik7XG4gICAgY3R4LmxvZy5lcnJvcihcIlMzIHVwbG9hZCBmYWlsZWRcIiwgeyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cywgZGV0YWlsOiBkZXRhaWwuc2xpY2UoMCwgNTAwKSwga2V5IH0pO1xuICAgIHRocm93IG5ldyBFcnJvcihgUzMgdXBsb2FkIGZhaWxlZCAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtkZXRhaWwuc2xpY2UoMCwgMjAwKX1gKTtcbiAgfVxuXG4gIGNvbnN0IHB1YmxpY1VybCA9IGAke0NMT1VEX0ZST05UX1VSTH0vJHtrZXl9YDtcbiAgY3R4LmxvZy5pbmZvKFwiUzMgdXBsb2FkIG9rXCIsIHsgdXJsOiBwdWJsaWNVcmwgfSk7XG4gIHJldHVybiBwdWJsaWNVcmw7XG59XG4iLCAiaW1wb3J0IHsgY2Fwc3VsZSwgbXV0YXRpb24sIHF1ZXJ5LCBzdHJpbmcsIHRhYmxlIH0gZnJvbSBcImxha2ViZWQvc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFNlcnZlckNvbnRleHQgfSBmcm9tIFwibGFrZWJlZC9zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIE1BWF9QUk9KRUNUX0RJTSxcbiAgY2xlYW5OYW1lLFxuICBjbGFtcCxcbiAgZGVjb2RlU3RyaW5nQXJyYXksXG4gIGRlY29kZVRyYW5zZm9ybSxcbiAgZW5jb2RlVHJhbnNmb3JtXG59IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IHVwbG9hZEltYWdlRGF0YVVybCB9IGZyb20gXCIuL3MzXCI7XG5cbi8vIENsaWVudHMgc3RpbGwgc2VuZCBpbWFnZSBkYXRhIFVSTHMgb24gdXBsb2FkOyB0aGUgc2VydmVyIHB1dHMgdGhlIGJ5dGVzIGluXG4vLyBTMyBhbmQgc3RvcmVzIGEgQ2xvdWRGcm9udCBVUkwgb24gdGhlIGFzc2V0IHJvdy4gZ2V0QXNzZXQgc3RheXMgYSBtdXRhdGlvblxuLy8gKG5vdCBhIHF1ZXJ5KSBzbyBsaXZlIHF1ZXJ5IHBheWxvYWRzIHN0YXkgc21hbGwuXG5jb25zdCBNQVhfU1JDX0xFTkdUSCA9IDEyXzAwMF8wMDA7XG5jb25zdCBNQVhfVEhVTUJfTEVOR1RIID0gMzAwXzAwMDtcbmNvbnN0IE1BWF9QQUlOVF9CWVRFUyA9IDEyXzAwMF8wMDA7XG5cbmZ1bmN0aW9uIGJ5dGVzVG9CYXNlNjQoYnl0ZXM6IFVpbnQ4QXJyYXkpOiBzdHJpbmcge1xuICBsZXQgYmluYXJ5ID0gXCJcIjtcbiAgY29uc3QgY2h1bmsgPSAweDgwMDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYnl0ZXMubGVuZ3RoOyBpICs9IGNodW5rKSB7XG4gICAgYmluYXJ5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoLi4uYnl0ZXMuc3ViYXJyYXkoaSwgTWF0aC5taW4oaSArIGNodW5rLCBieXRlcy5sZW5ndGgpKSk7XG4gIH1cbiAgcmV0dXJuIGJ0b2EoYmluYXJ5KTtcbn1cblxuZnVuY3Rpb24gcmVxdWlyZVByb2plY3QoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5wcm9qZWN0cy5nZXQoaWQpO1xuICBpZiAoIXJvdyB8fCByb3cub3duZXJJZCAhPT0gY3R4LmF1dGgudXNlcklkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiUHJvamVjdCBub3QgZm91bmRcIik7XG4gIH1cbiAgcmV0dXJuIHJvdztcbn1cblxuZnVuY3Rpb24gcmVxdWlyZUxheWVyKGN0eDogU2VydmVyQ29udGV4dCwgaWQ6IHN0cmluZykge1xuICBjb25zdCByb3cgPSBjdHguZGIubGF5ZXJzLmdldChpZCk7XG4gIGlmICghcm93IHx8IHJvdy5vd25lcklkICE9PSBjdHguYXV0aC51c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJMYXllciBub3QgZm91bmRcIik7XG4gIH1cbiAgcmV0dXJuIHJvdztcbn1cblxuZnVuY3Rpb24gcmVxdWlyZUFzc2V0KGN0eDogU2VydmVyQ29udGV4dCwgaWQ6IHN0cmluZykge1xuICBjb25zdCByb3cgPSBjdHguZGIuYXNzZXRzLmdldChpZCk7XG4gIGlmICghcm93IHx8IHJvdy5vd25lcklkICE9PSBjdHguYXV0aC51c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJBc3NldCBub3QgZm91bmRcIik7XG4gIH1cbiAgcmV0dXJuIHJvdztcbn1cblxuZnVuY3Rpb24gY2hlY2tEYXRhVXJsKHNyYzogc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3JjICE9PSBcInN0cmluZ1wiIHx8ICFzcmMuc3RhcnRzV2l0aChcImRhdGE6aW1hZ2UvXCIpKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2UgbXVzdCBiZSBhIGRhdGEgVVJMXCIpO1xuICB9XG4gIGlmIChzcmMubGVuZ3RoID4gTUFYX1NSQ19MRU5HVEgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBpcyB0b28gbGFyZ2VcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tEaW0odmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gIGlmICh0eXBlb2YgdmFsdWUgIT09IFwibnVtYmVyXCIgfHwgIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIGRpbWVuc2lvblwiKTtcbiAgfVxuICByZXR1cm4gY2xhbXAoTWF0aC5yb3VuZCh2YWx1ZSksIDEsIE1BWF9QUk9KRUNUX0RJTSk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGluc2VydEFzc2V0KFxuICBjdHg6IFNlcnZlckNvbnRleHQsXG4gIHByb2plY3RJZDogc3RyaW5nLFxuICBzcmM6IHN0cmluZyxcbiAgd2lkdGg6IG51bWJlcixcbiAgaGVpZ2h0OiBudW1iZXJcbikge1xuICBjaGVja0RhdGFVcmwoc3JjKTtcbiAgY29uc3QgdXJsID0gYXdhaXQgdXBsb2FkSW1hZ2VEYXRhVXJsKGN0eCwgcHJvamVjdElkLCBzcmMpO1xuICByZXR1cm4gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICBwcm9qZWN0SWQsXG4gICAgc3JjOiB1cmwsXG4gICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCkpLFxuICAgIGhlaWdodDogU3RyaW5nKGNoZWNrRGltKGhlaWdodCkpXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRPcmRlcihjdHg6IFNlcnZlckNvbnRleHQsIHByb2plY3RJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IHZhbGlkID0gbmV3IFNldChcbiAgICBjdHguZGIubGF5ZXJzLndoZXJlKFwicHJvamVjdElkXCIsIHByb2plY3RJZCkuYWxsKCkubWFwKChyb3cpID0+IHJvdy5pZClcbiAgKTtcbiAgY29uc3Qgc2VlbiA9IG5ldyBTZXQ8c3RyaW5nPigpO1xuICBjb25zdCBvcmRlcjogc3RyaW5nW10gPSBbXTtcbiAgZm9yIChjb25zdCBpZCBvZiBpZHMpIHtcbiAgICBpZiAodmFsaWQuaGFzKGlkKSAmJiAhc2Vlbi5oYXMoaWQpKSB7XG4gICAgICBvcmRlci5wdXNoKGlkKTtcbiAgICAgIHNlZW4uYWRkKGlkKTtcbiAgICB9XG4gIH1cbiAgLy8gTGF5ZXJzIG1pc3NpbmcgZnJvbSB0aGUgcmVxdWVzdGVkIG9yZGVyIGdvIG9uIHRvcCByYXRoZXIgdGhhbiB2YW5pc2hpbmcuXG4gIGZvciAoY29uc3QgaWQgb2YgdmFsaWQpIHtcbiAgICBpZiAoIXNlZW4uaGFzKGlkKSkgb3JkZXIucHVzaChpZCk7XG4gIH1cbiAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShwcm9qZWN0SWQsIHsgbGF5ZXJPcmRlcjogSlNPTi5zdHJpbmdpZnkob3JkZXIpIH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjYXBzdWxlKHtcbiAgbmFtZTogXCJpbWFnZS1lZGl0b3JcIixcblxuICBzY2hlbWE6IHtcbiAgICBwcm9qZWN0czogdGFibGUoe1xuICAgICAgb3duZXJJZDogc3RyaW5nKCksXG4gICAgICBuYW1lOiBzdHJpbmcoKSxcbiAgICAgIHdpZHRoOiBzdHJpbmcoKSxcbiAgICAgIGhlaWdodDogc3RyaW5nKCksXG4gICAgICBsYXllck9yZGVyOiBzdHJpbmcoKS5kZWZhdWx0KFwiW11cIiksXG4gICAgICB0aHVtYjogc3RyaW5nKCkuZGVmYXVsdChcIlwiKVxuICAgIH0pLFxuICAgIGxheWVyczogdGFibGUoe1xuICAgICAgb3duZXJJZDogc3RyaW5nKCksXG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZygpLFxuICAgICAgYXNzZXRJZDogc3RyaW5nKCksXG4gICAgICAvLyBDbGllbnQtZ2VuZXJhdGVkIGlkZW1wb3RlbmN5IGtleSBzbyBhIHJldHJpZWQgYWRkTGF5ZXIgbmV2ZXIgZHVwbGljYXRlcy5cbiAgICAgIGNsaWVudEtleTogc3RyaW5nKCkuZGVmYXVsdChcIlwiKSxcbiAgICAgIG5hbWU6IHN0cmluZygpLFxuICAgICAgZGF0YTogc3RyaW5nKClcbiAgICB9KSxcbiAgICBhc3NldHM6IHRhYmxlKHtcbiAgICAgIG93bmVySWQ6IHN0cmluZygpLFxuICAgICAgcHJvamVjdElkOiBzdHJpbmcoKSxcbiAgICAgIHNyYzogc3RyaW5nKCksXG4gICAgICB3aWR0aDogc3RyaW5nKCksXG4gICAgICBoZWlnaHQ6IHN0cmluZygpXG4gICAgfSlcbiAgfSxcblxuICBxdWVyaWVzOiB7XG4gICAgcHJvamVjdHM6IHF1ZXJ5KChjdHgpID0+ICh7XG4gICAgICByZWFkeTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBjdHguZGIucHJvamVjdHNcbiAgICAgICAgLndoZXJlKFwib3duZXJJZFwiLCBjdHguYXV0aC51c2VySWQpXG4gICAgICAgIC5vcmRlckJ5KFwidXBkYXRlZEF0XCIsIFwiZGVzY1wiKVxuICAgICAgICAuYWxsKClcbiAgICAgICAgLm1hcCgocm93KSA9PiAoe1xuICAgICAgICAgIGlkOiByb3cuaWQsXG4gICAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgICAgd2lkdGg6IE51bWJlcihyb3cud2lkdGgpLFxuICAgICAgICAgIGhlaWdodDogTnVtYmVyKHJvdy5oZWlnaHQpLFxuICAgICAgICAgIGxheWVyT3JkZXI6IGRlY29kZVN0cmluZ0FycmF5KFN0cmluZyhyb3cubGF5ZXJPcmRlcikpLFxuICAgICAgICAgIHVwZGF0ZWRBdDogcm93LnVwZGF0ZWRBdFxuICAgICAgICB9KSlcbiAgICB9KSksXG5cbiAgICAvLyBUaHVtYm5haWxzIGFyZSB0aGUgb25lIGJ1bGt5IHBheWxvYWQgcHVzaGVkIGJ5IHF1ZXJpZXM7IG9ubHkgdGhlIGhvbWVcbiAgICAvLyBzY3JlZW4gc3Vic2NyaWJlcyB0byB0aGlzIG9uZS5cbiAgICBwcm9qZWN0VGh1bWJzOiBxdWVyeSgoY3R4KSA9PiAoe1xuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICBpdGVtczogY3R4LmRiLnByb2plY3RzXG4gICAgICAgIC53aGVyZShcIm93bmVySWRcIiwgY3R4LmF1dGgudXNlcklkKVxuICAgICAgICAuYWxsKClcbiAgICAgICAgLm1hcCgocm93KSA9PiAoeyBpZDogcm93LmlkLCB0aHVtYjogcm93LnRodW1iIH0pKVxuICAgIH0pKSxcblxuICAgIGxheWVyczogcXVlcnkoKGN0eCkgPT4gKHtcbiAgICAgIHJlYWR5OiB0cnVlLFxuICAgICAgaXRlbXM6IGN0eC5kYi5sYXllcnNcbiAgICAgICAgLndoZXJlKFwib3duZXJJZFwiLCBjdHguYXV0aC51c2VySWQpXG4gICAgICAgIC5hbGwoKVxuICAgICAgICAubWFwKChyb3cpID0+ICh7XG4gICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICBwcm9qZWN0SWQ6IHJvdy5wcm9qZWN0SWQsXG4gICAgICAgICAgYXNzZXRJZDogcm93LmFzc2V0SWQsXG4gICAgICAgICAgbmFtZTogcm93Lm5hbWUsXG4gICAgICAgICAgZGF0YTogcm93LmRhdGFcbiAgICAgICAgfSkpXG4gICAgfSkpXG4gIH0sXG5cbiAgbXV0YXRpb25zOiB7XG4gICAgY3JlYXRlUHJvamVjdDogbXV0YXRpb24oKGN0eCwgbmFtZTogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gY3R4LmRiLnByb2plY3RzLmluc2VydCh7XG4gICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhuYW1lID8/IFwiXCIpLCBcIlVudGl0bGVkXCIpLFxuICAgICAgICB3aWR0aDogU3RyaW5nKGNoZWNrRGltKHdpZHRoKSksXG4gICAgICAgIGhlaWdodDogU3RyaW5nKGNoZWNrRGltKGhlaWdodCkpLFxuICAgICAgICBsYXllck9yZGVyOiBcIltdXCIsXG4gICAgICAgIHRodW1iOiBcIlwiXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB7IGlkOiByb3cuaWQgfTtcbiAgICB9KSxcblxuICAgIGNyZWF0ZVByb2plY3RGcm9tSW1hZ2U6IG11dGF0aW9uKFxuICAgICAgYXN5bmMgKFxuICAgICAgICBjdHgsXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgd2lkdGg6IG51bWJlcixcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXG4gICAgICAgIGxheWVyTmFtZTogc3RyaW5nLFxuICAgICAgICBzcmM6IHN0cmluZyxcbiAgICAgICAgZGF0YUpzb246IHN0cmluZ1xuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBjdHguZGIucHJvamVjdHMuaW5zZXJ0KHtcbiAgICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgICAgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhuYW1lID8/IFwiXCIpLCBcIlVudGl0bGVkXCIpLFxuICAgICAgICAgIHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSxcbiAgICAgICAgICBoZWlnaHQ6IFN0cmluZyhjaGVja0RpbShoZWlnaHQpKSxcbiAgICAgICAgICBsYXllck9yZGVyOiBcIltdXCIsXG4gICAgICAgICAgdGh1bWI6IFwiXCJcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgaW5zZXJ0QXNzZXQoY3R4LCBwcm9qZWN0LmlkLCBTdHJpbmcoc3JjID8/IFwiXCIpLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBjdHguZGIubGF5ZXJzLmluc2VydCh7XG4gICAgICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgICAgIHByb2plY3RJZDogcHJvamVjdC5pZCxcbiAgICAgICAgICBhc3NldElkOiBhc3NldC5pZCxcbiAgICAgICAgICBjbGllbnRLZXk6IFwiXCIsXG4gICAgICAgICAgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhsYXllck5hbWUgPz8gXCJcIiksIFwiSW1hZ2VcIiksXG4gICAgICAgICAgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGRlY29kZVRyYW5zZm9ybShTdHJpbmcoZGF0YUpzb24gPz8gXCJcIikpKVxuICAgICAgICB9KTtcbiAgICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShwcm9qZWN0LmlkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KFtsYXllci5pZF0pIH0pO1xuICAgICAgICByZXR1cm4geyBpZDogcHJvamVjdC5pZCwgbGF5ZXJJZDogbGF5ZXIuaWQsIGFzc2V0SWQ6IGFzc2V0LmlkLCBzcmM6IGFzc2V0LnNyYyB9O1xuICAgICAgfVxuICAgICksXG5cbiAgICByZW5hbWVQcm9qZWN0OiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcXVpcmVQcm9qZWN0KGN0eCwgaWQpO1xuICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShpZCwgeyBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKG5hbWUgPz8gXCJcIiksIFwiVW50aXRsZWRcIikgfSk7XG4gICAgfSksXG5cbiAgICByZXNpemVQcm9qZWN0OiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikgPT4ge1xuICAgICAgcmVxdWlyZVByb2plY3QoY3R4LCBpZCk7XG4gICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKGlkLCB7IHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSwgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSkgfSk7XG4gICAgfSksXG5cbiAgICBzZXRQcm9qZWN0VGh1bWI6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcsIHRodW1iOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcXVpcmVQcm9qZWN0KGN0eCwgaWQpO1xuICAgICAgaWYgKHR5cGVvZiB0aHVtYiAhPT0gXCJzdHJpbmdcIiB8fCB0aHVtYi5sZW5ndGggPiBNQVhfVEhVTUJfTEVOR1RIKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUoaWQsIHsgdGh1bWIgfSk7XG4gICAgfSksXG5cbiAgICBkZWxldGVQcm9qZWN0OiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIGlkKTtcbiAgICAgIGZvciAoY29uc3QgbGF5ZXIgb2YgY3R4LmRiLmxheWVycy53aGVyZShcInByb2plY3RJZFwiLCBpZCkuYWxsKCkpIHtcbiAgICAgICAgY3R4LmRiLmxheWVycy5kZWxldGUobGF5ZXIuaWQpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBhc3NldCBvZiBjdHguZGIuYXNzZXRzLndoZXJlKFwicHJvamVjdElkXCIsIGlkKS5hbGwoKSkge1xuICAgICAgICBjdHguZGIuYXNzZXRzLmRlbGV0ZShhc3NldC5pZCk7XG4gICAgICB9XG4gICAgICBjdHguZGIucHJvamVjdHMuZGVsZXRlKGlkKTtcbiAgICB9KSxcblxuICAgIGFkZExheWVyOiBtdXRhdGlvbihcbiAgICAgIGFzeW5jIChcbiAgICAgICAgY3R4LFxuICAgICAgICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgICAgICAgY2xpZW50S2V5OiBzdHJpbmcsXG4gICAgICAgIG5hbWU6IHN0cmluZyxcbiAgICAgICAgZGF0YUpzb246IHN0cmluZyxcbiAgICAgICAgYXNzZXQ6IHsgYXNzZXRJZD86IHN0cmluZzsgc3JjPzogc3RyaW5nOyB3aWR0aD86IG51bWJlcjsgaGVpZ2h0PzogbnVtYmVyIH1cbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcmVxdWlyZVByb2plY3QoY3R4LCBwcm9qZWN0SWQpO1xuICAgICAgICBpZiAoY2xpZW50S2V5KSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSBjdHguZGIubGF5ZXJzXG4gICAgICAgICAgICAud2hlcmUoXCJvd25lcklkXCIsIGN0eC5hdXRoLnVzZXJJZClcbiAgICAgICAgICAgIC53aGVyZShcImNsaWVudEtleVwiLCBjbGllbnRLZXkpXG4gICAgICAgICAgICAuYWxsKClbMF07XG4gICAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBjb25zdCByb3cgPSBjdHguZGIuYXNzZXRzLmdldChTdHJpbmcoZXhpc3RpbmcuYXNzZXRJZCkpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgbGF5ZXJJZDogZXhpc3RpbmcuaWQsXG4gICAgICAgICAgICAgIGFzc2V0SWQ6IGV4aXN0aW5nLmFzc2V0SWQsXG4gICAgICAgICAgICAgIHNyYzogcm93ID8gU3RyaW5nKHJvdy5zcmMpIDogXCJcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgYXNzZXRJZCA9IGFzc2V0Py5hc3NldElkID8/IFwiXCI7XG4gICAgICAgIGxldCBhc3NldFNyYyA9IFwiXCI7XG4gICAgICAgIGlmIChhc3NldElkKSB7XG4gICAgICAgICAgY29uc3QgZXhpc3RpbmcgPSByZXF1aXJlQXNzZXQoY3R4LCBhc3NldElkKTtcbiAgICAgICAgICBhc3NldFNyYyA9IFN0cmluZyhleGlzdGluZy5zcmMpO1xuICAgICAgICAgIGlmIChleGlzdGluZy5wcm9qZWN0SWQgIT09IHByb2plY3RJZCkge1xuICAgICAgICAgICAgLy8gUmUtaG9tZSBzaGFyZWQgYXNzZXRzIGJ5IGNvcHlpbmcgdGhlIFVSTCBzbyBwcm9qZWN0IGRlbGV0aW9uIHN0YXlzIHNpbXBsZS5cbiAgICAgICAgICAgIGFzc2V0SWQgPSBjdHguZGIuYXNzZXRzLmluc2VydCh7XG4gICAgICAgICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgICAgICAgcHJvamVjdElkLFxuICAgICAgICAgICAgICBzcmM6IGV4aXN0aW5nLnNyYyxcbiAgICAgICAgICAgICAgd2lkdGg6IGV4aXN0aW5nLndpZHRoLFxuICAgICAgICAgICAgICBoZWlnaHQ6IGV4aXN0aW5nLmhlaWdodFxuICAgICAgICAgICAgfSkuaWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IGNyZWF0ZWQgPSBhd2FpdCBpbnNlcnRBc3NldChcbiAgICAgICAgICAgIGN0eCxcbiAgICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICAgIFN0cmluZyhhc3NldD8uc3JjID8/IFwiXCIpLFxuICAgICAgICAgICAgYXNzZXQ/LndpZHRoID8/IDAsXG4gICAgICAgICAgICBhc3NldD8uaGVpZ2h0ID8/IDBcbiAgICAgICAgICApO1xuICAgICAgICAgIGFzc2V0SWQgPSBjcmVhdGVkLmlkO1xuICAgICAgICAgIGFzc2V0U3JjID0gU3RyaW5nKGNyZWF0ZWQuc3JjKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGxheWVyID0gY3R4LmRiLmxheWVycy5pbnNlcnQoe1xuICAgICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgICAgYXNzZXRJZCxcbiAgICAgICAgICBjbGllbnRLZXk6IFN0cmluZyhjbGllbnRLZXkgPz8gXCJcIiksXG4gICAgICAgICAgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhuYW1lID8/IFwiXCIpLCBcIkltYWdlXCIpLFxuICAgICAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShkZWNvZGVUcmFuc2Zvcm0oU3RyaW5nKGRhdGFKc29uID8/IFwiXCIpKSlcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG9yZGVyID0gZGVjb2RlU3RyaW5nQXJyYXkoU3RyaW5nKHByb2plY3QubGF5ZXJPcmRlcikpO1xuICAgICAgICBvcmRlci5wdXNoKGxheWVyLmlkKTtcbiAgICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShwcm9qZWN0SWQsIHsgbGF5ZXJPcmRlcjogSlNPTi5zdHJpbmdpZnkob3JkZXIpIH0pO1xuICAgICAgICByZXR1cm4geyBsYXllcklkOiBsYXllci5pZCwgYXNzZXRJZCwgc3JjOiBhc3NldFNyYyB9O1xuICAgICAgfVxuICAgICksXG5cbiAgICB1cGRhdGVMYXllcjogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgZGF0YUpzb246IHN0cmluZykgPT4ge1xuICAgICAgcmVxdWlyZUxheWVyKGN0eCwgaWQpO1xuICAgICAgY3R4LmRiLmxheWVycy51cGRhdGUoaWQsIHsgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGRlY29kZVRyYW5zZm9ybShTdHJpbmcoZGF0YUpzb24gPz8gXCJcIikpKSB9KTtcbiAgICB9KSxcblxuICAgIHJlcGxhY2VMYXllckFzc2V0OiBtdXRhdGlvbihhc3luYyAoY3R4LCBpZDogc3RyaW5nLCBzcmM6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gcmVxdWlyZUxheWVyKGN0eCwgaWQpO1xuICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCBpbnNlcnRBc3NldChjdHgsIFN0cmluZyhsYXllci5wcm9qZWN0SWQpLCBTdHJpbmcoc3JjID8/IFwiXCIpLCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIGN0eC5kYi5sYXllcnMudXBkYXRlKGlkLCB7IGFzc2V0SWQ6IGFzc2V0LmlkIH0pO1xuICAgICAgcmV0dXJuIHsgYXNzZXRJZDogYXNzZXQuaWQsIHNyYzogU3RyaW5nKGFzc2V0LnNyYykgfTtcbiAgICB9KSxcblxuICAgIHJlbmFtZUxheWVyOiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcXVpcmVMYXllcihjdHgsIGlkKTtcbiAgICAgIGN0eC5kYi5sYXllcnMudXBkYXRlKGlkLCB7IG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJJbWFnZVwiKSB9KTtcbiAgICB9KSxcblxuICAgIGRlbGV0ZUxheWVyOiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IHJlcXVpcmVMYXllcihjdHgsIGlkKTtcbiAgICAgIGN0eC5kYi5sYXllcnMuZGVsZXRlKGlkKTtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBjdHguZGIucHJvamVjdHMuZ2V0KFN0cmluZyhsYXllci5wcm9qZWN0SWQpKTtcbiAgICAgIGlmIChwcm9qZWN0KSB7XG4gICAgICAgIGNvbnN0IG9yZGVyID0gZGVjb2RlU3RyaW5nQXJyYXkoU3RyaW5nKHByb2plY3QubGF5ZXJPcmRlcikpLmZpbHRlcigobGF5ZXJJZCkgPT4gbGF5ZXJJZCAhPT0gaWQpO1xuICAgICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKHByb2plY3QuaWQsIHsgbGF5ZXJPcmRlcjogSlNPTi5zdHJpbmdpZnkob3JkZXIpIH0pO1xuICAgICAgfVxuICAgICAgLy8gVGhlIGFzc2V0IGlzIGtlcHQ6IG90aGVyIGxheWVycyBtYXkgcmVmZXJlbmNlIGl0IGFuZCB1bmRvIGNhbiByZXN0b3JlIGl0LlxuICAgIH0pLFxuXG4gICAgc2V0TGF5ZXJPcmRlcjogbXV0YXRpb24oKGN0eCwgcHJvamVjdElkOiBzdHJpbmcsIGlkczogc3RyaW5nW10pID0+IHtcbiAgICAgIHJlcXVpcmVQcm9qZWN0KGN0eCwgcHJvamVjdElkKTtcbiAgICAgIHNldE9yZGVyKGN0eCwgcHJvamVjdElkLCBBcnJheS5pc0FycmF5KGlkcykgPyBpZHMubWFwKFN0cmluZykgOiBbXSk7XG4gICAgfSksXG5cbiAgICAvLyBSZWFkLWFzLW11dGF0aW9uIGVzY2FwZSBoYXRjaDogcXVlcmllcyBjYW5ub3QgdGFrZSBhcmd1bWVudHMsIGFuZCBhc3NldFxuICAgIC8vIHBheWxvYWRzIGFyZSB0b28gbGFyZ2UgdG8gbGl2ZSBpbiBhIGxpdmUgcXVlcnkgcmVzdWx0LlxuICAgIGdldEFzc2V0OiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSByZXF1aXJlQXNzZXQoY3R4LCBpZCk7XG4gICAgICByZXR1cm4geyBpZDogcm93LmlkLCBzcmM6IHJvdy5zcmMsIHdpZHRoOiBOdW1iZXIocm93LndpZHRoKSwgaGVpZ2h0OiBOdW1iZXIocm93LmhlaWdodCkgfTtcbiAgICB9KSxcblxuICAgIC8vIENhbnZhcyBvcGVyYXRpb25zIG5lZWQgc2FtZS1vcmlnaW4gcGl4ZWwgZGF0YS4gQ2xvdWRGcm9udCBpbWFnZXMgYXJlIGZpbmVcbiAgICAvLyBmb3IgPGltZz4sIGJ1dCBkZXBsb3ltZW50cyBtYXkgbm90IGV4cG9zZSBDT1JTIGhlYWRlcnMsIHNvIGZldGNoIHRoZVxuICAgIC8vIG93bmVkIGFzc2V0IHNlcnZlci1zaWRlIGFuZCByZXR1cm4gYSBkYXRhIFVSTCBvbmx5IHdoZW4gcGl4ZWxzIGFyZSBuZWVkZWQuXG4gICAgZ2V0QXNzZXRQYWludDogbXV0YXRpb24oYXN5bmMgKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcmVxdWlyZUFzc2V0KGN0eCwgaWQpO1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChTdHJpbmcocm93LnNyYykpO1xuICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDb3VsZCBub3QgbG9hZCBpbWFnZSBwaXhlbHMgKCR7cmVzcG9uc2Uuc3RhdHVzfSlgKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoXCJjb250ZW50LXR5cGVcIikgfHwgXCJpbWFnZS9wbmdcIjtcbiAgICAgIGlmICghY29udGVudFR5cGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSB0aHJvdyBuZXcgRXJyb3IoXCJBc3NldCBpcyBub3QgYW4gaW1hZ2VcIik7XG4gICAgICBjb25zdCBieXRlcyA9IG5ldyBVaW50OEFycmF5KGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCkpO1xuICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggPiBNQVhfUEFJTlRfQllURVMpIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZSB0byBjb21iaW5lXCIpO1xuICAgICAgcmV0dXJuIHsgc3JjOiBgZGF0YToke2NvbnRlbnRUeXBlfTtiYXNlNjQsJHtieXRlc1RvQmFzZTY0KGJ5dGVzKX1gIH07XG4gICAgfSlcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBNEZNLFNBQVUsUUFBVyxZQUFhO0FBQ3RDLFNBQU87QUFDVDtBQUVNLFNBQVUsTUFBZSxTQUF3QztBQUNyRSxTQUFPO0FBQ1Q7QUFFTSxTQUFVLFNBQ2QsU0FBd0Q7QUFFeEQsU0FBTztBQUNUO0FBMERBLFNBQVMsTUFBUyxNQUFZO0FBQzVCLFNBQU87SUFDTDtJQUNBLGNBQWM7SUFDZCxRQUFRLE9BQVE7QUFDZCxhQUFPO1FBQ0wsR0FBRztRQUNILGNBQWM7O0lBRWxCOztBQUVKO0FBRU0sU0FBVSxNQUFNLFFBQWtDO0FBQ3RELFNBQU87SUFDTCxNQUFNO0lBQ047O0FBRUo7QUFFTSxTQUFVLFNBQU07QUFDcEIsU0FBTyxNQUFNLFFBQVE7QUFDdkI7OztBQ2pMTyxJQUFNLGlCQUFpQjtBQUN2QixJQUFNLGtCQUFrQjtBQUV4QixJQUFNLGNBQWM7QUFBQSxFQUN6QjtBQUFBLEVBQVU7QUFBQSxFQUFZO0FB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
