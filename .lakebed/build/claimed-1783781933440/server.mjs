// ../../../../private/var/folders/gp/dqgz6cts6h96rxd5hhkxtydw0000gn/T/cursor-sandbox-cache/39232b1d130225932d107b58c3cdf645/npm/_npx/3eb8d3eaaf4ef1b4/node_modules/lakebed/dist/server.js
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
var MAX_INLINE_SRC_BYTES = 6e4;
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
function uriEncode(value, encodeSlash = true) {
  const encoded = encodeURIComponent(value).replace(/[!'()*]/g, (ch) => `%${ch.charCodeAt(0).toString(16).toUpperCase()}`);
  return encodeSlash ? encoded : encoded.replace(/%2F/gi, "/");
}
function safeSegment(value) {
  const cleaned = String(value).replace(/[^a-zA-Z0-9._-]+/g, "_").replace(/_+/g, "_").replace(/^_|_$/g, "").slice(0, 80);
  return cleaned || "x";
}
function contentTypeExt(contentType) {
  const type = contentType.toLowerCase();
  if (type === "image/jpeg" || type === "image/jpg") return "jpg";
  if (type === "image/webp") return "webp";
  if (type === "image/gif") return "gif";
  return "png";
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
  return { contentType, body, ext: contentTypeExt(contentType) };
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
  return `/${key.split("/").map((part) => uriEncode(part)).join("/")}`;
}
function awsConfig(ctx) {
  const accessKey = requireEnv(ctx, "AWS_ACCESS_KEY_ID");
  const secretKey = requireEnv(ctx, "AWS_SECRET_ACCESS_KEY");
  const bucket = requireEnv(ctx, "AWS_BUCKET");
  const region = typeof ctx.env.AWS_REGION === "string" && ctx.env.AWS_REGION ? ctx.env.AWS_REGION : "us-east-2";
  return { accessKey, secretKey, bucket, region };
}
function hasAwsEnv(ctx) {
  return typeof ctx.env.AWS_ACCESS_KEY_ID === "string" && !!ctx.env.AWS_ACCESS_KEY_ID && typeof ctx.env.AWS_SECRET_ACCESS_KEY === "string" && !!ctx.env.AWS_SECRET_ACCESS_KEY && typeof ctx.env.AWS_BUCKET === "string" && !!ctx.env.AWS_BUCKET;
}
async function signingKey(secretKey, dateStamp, region) {
  const kDate = await hmac(encoder.encode(`AWS4${secretKey}`), dateStamp);
  const kRegion = await hmac(kDate, region);
  const kService = await hmac(kRegion, "s3");
  return hmac(kService, "aws4_request");
}
async function createPresignedPut(ctx, projectId, contentType) {
  const type = String(contentType || "").toLowerCase();
  if (!type.startsWith("image/")) throw new Error("Content type must be an image");
  const { accessKey, secretKey, bucket, region } = awsConfig(ctx);
  const key = objectKey(ctx.auth.userId, projectId, contentTypeExt(type));
  const host = `${bucket}.s3.${region}.amazonaws.com`;
  const uri = canonicalUri(key);
  const { amzDate: amz, dateStamp } = amzDate(/* @__PURE__ */ new Date());
  const expires = 900;
  const credential = `${accessKey}/${dateStamp}/${region}/s3/aws4_request`;
  const query2 = {
    "X-Amz-Algorithm": "AWS4-HMAC-SHA256",
    "X-Amz-Credential": credential,
    "X-Amz-Date": amz,
    "X-Amz-Expires": String(expires),
    "X-Amz-SignedHeaders": "content-type;host",
    "X-Amz-Content-Sha256": "UNSIGNED-PAYLOAD"
  };
  const canonicalQuery = Object.keys(query2).sort().map((k) => `${uriEncode(k)}=${uriEncode(query2[k])}`).join("&");
  const canonicalHeaders = `content-type:${type}
host:${host}
`;
  const canonicalRequest = [
    "PUT",
    uri,
    canonicalQuery,
    canonicalHeaders,
    "content-type;host",
    "UNSIGNED-PAYLOAD"
  ].join("\n");
  const credentialScope = `${dateStamp}/${region}/s3/aws4_request`;
  const stringToSign = ["AWS4-HMAC-SHA256", amz, credentialScope, await sha256Hex(canonicalRequest)].join(
    "\n"
  );
  const signature = toHex(await hmac(await signingKey(secretKey, dateStamp, region), stringToSign));
  const uploadUrl = `https://${host}${uri}?${canonicalQuery}&X-Amz-Signature=${signature}`;
  return { uploadUrl, publicUrl: `${CLOUD_FRONT_URL}/${key}`, key };
}
async function uploadImageDataUrl(ctx, projectId, src) {
  const { accessKey, secretKey, bucket, region } = awsConfig(ctx);
  const { contentType, body, ext } = decodeDataUrl(src);
  if (body.byteLength > MAX_INLINE_SRC_BYTES) {
    throw new Error("Image is too large for server upload; use prepareAssetUpload");
  }
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
  const signature = toHex(await hmac(await signingKey(secretKey, dateStamp, region), stringToSign));
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
var MAX_THUMB_LENGTH = MAX_INLINE_SRC_BYTES;
var MAX_PAINT_BYTES = 4e4;
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
  if (/^https?:\/\//i.test(src)) {
    const existing = ctx.db.assets.where("projectId", projectId).all().find((row) => row.ownerId === ctx.auth.userId && row.src === src);
    if (existing) return existing;
    return ctx.db.assets.insert({
      ownerId: ctx.auth.userId,
      projectId,
      src,
      width: String(checkDim(width)),
      height: String(checkDim(height))
    });
  }
  checkDataUrl(src);
  if (src.length > MAX_INLINE_SRC_BYTES) {
    throw new Error(
      "Image is too large to store inline. Use prepareAssetUpload and upload from the browser."
    );
  }
  let stored = src;
  if (hasAwsEnv(ctx)) {
    try {
      stored = await uploadImageDataUrl(ctx, projectId, src);
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      ctx.log.error("S3 upload failed; keeping inline data URL", { message });
    }
  } else {
    ctx.log.warn("AWS env missing; storing small image as data URL");
  }
  return ctx.db.assets.insert({
    ownerId: ctx.auth.userId,
    projectId,
    src: stored,
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
    // Sign a browser PUT to S3, then create the asset row pointing at CloudFront.
    // Large images never enter Lakebed mutations as data URLs.
    prepareAssetUpload: mutation(async (ctx, projectId, contentType, width, height) => {
      requireProject(ctx, projectId);
      if (!hasAwsEnv(ctx)) {
        throw new Error("Missing AWS server env; cannot prepare upload");
      }
      const { uploadUrl, publicUrl } = await createPresignedPut(ctx, projectId, String(contentType ?? ""));
      const asset = ctx.db.assets.insert({
        ownerId: ctx.auth.userId,
        projectId,
        src: publicUrl,
        width: String(checkDim(width)),
        height: String(checkDim(height))
      });
      return { assetId: asset.id, uploadUrl, publicUrl };
    }),
    // Canvas operations need pixel data. Prefer returning remote URLs so the
    // client can load with CORS (server base64 of large images exceeds hosted limits).
    getAssetPaint: mutation(async (ctx, id) => {
      const row = requireAsset(ctx, id);
      const src = String(row.src);
      if (src.startsWith("data:image/")) return { src };
      try {
        const response = await fetch(src);
        if (!response.ok) return { src };
        const contentType = response.headers.get("content-type") || "image/png";
        if (!contentType.toLowerCase().startsWith("image/")) return { src };
        const bytes = new Uint8Array(await response.arrayBuffer());
        if (bytes.byteLength > MAX_PAINT_BYTES) return { src };
        return { src: `data:${contentType};base64,${bytesToBase64(bytes)}` };
      } catch {
        return { src };
      }
    })
  }
});
export {
  server_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9zZXJ2ZXIudHMiLCAibGFrZWJlZC1zb3VyY2U6c2hhcmVkL3R5cGVzLnRzIiwgImxha2ViZWQtc291cmNlOnNlcnZlci9zMy50cyIsICJsYWtlYmVkLXNvdXJjZTpzZXJ2ZXIvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG5cbmV4cG9ydCBjb25zdCBCTEVORF9NT0RFUyA9IFtcbiAgXCJub3JtYWxcIiwgXCJtdWx0aXBseVwiLCBcInNjcmVlblwiLCBcIm92ZXJsYXlcIiwgXCJkYXJrZW5cIiwgXCJsaWdodGVuXCIsXG4gIFwiY29sb3ItZG9kZ2VcIiwgXCJjb2xvci1idXJuXCIsIFwiaGFyZC1saWdodFwiLCBcInNvZnQtbGlnaHRcIiwgXCJkaWZmZXJlbmNlXCIsIFwiZXhjbHVzaW9uXCIsXG4gIFwiaHVlXCIsIFwic2F0dXJhdGlvblwiLCBcImNvbG9yXCIsIFwibHVtaW5vc2l0eVwiXG5dIGFzIGNvbnN0O1xuZXhwb3J0IHR5cGUgQmxlbmRNb2RlID0gKHR5cGVvZiBCTEVORF9NT0RFUylbbnVtYmVyXTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJUcmFuc2Zvcm0gPSB7XG4gIHg6IG51bWJlcjtcbiAgeTogbnVtYmVyO1xuICB3OiBudW1iZXI7XG4gIGg6IG51bWJlcjtcbiAgLyoqIERlZ3JlZXMsIGNsb2Nrd2lzZSwgYWJvdXQgdGhlIGJveCBjZW50ZXIuICovXG4gIHJvdGF0aW9uOiBudW1iZXI7XG4gIC8qKiAwLi4xICovXG4gIG9wYWNpdHk6IG51bWJlcjtcbiAgdmlzaWJsZTogYm9vbGVhbjtcbiAgZmxpcFg6IGJvb2xlYW47XG4gIGJsZW5kTW9kZTogQmxlbmRNb2RlO1xufTtcblxuZXhwb3J0IHR5cGUgVGV4dEFsaWduID0gXCJsZWZ0XCIgfCBcImNlbnRlclwiIHwgXCJyaWdodFwiO1xuXG5leHBvcnQgdHlwZSBUZXh0TGF5ZXJEYXRhID0ge1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGZvbnRGYW1pbHk6IHN0cmluZztcbiAgZm9udFNpemU6IG51bWJlcjtcbiAgZm9udFdlaWdodDogbnVtYmVyO1xuICBhbGlnbjogVGV4dEFsaWduO1xuICBjb2xvcjogc3RyaW5nO1xuICBsaW5lSGVpZ2h0OiBudW1iZXI7XG4gIC8qKiBJbnRyaW5zaWMgcmFzdGVyIGRpbWVuc2lvbnMgdXNlZCB0byBwcmVzZXJ2ZSBsYXllciBzY2FsZSBhY3Jvc3MgdGV4dCByZXJlbmRlcnMuICovXG4gIHJhc3RlcldpZHRoPzogbnVtYmVyO1xuICByYXN0ZXJIZWlnaHQ/OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllckRhdGEgPSBMYXllclRyYW5zZm9ybSAmIHsgdGV4dD86IFRleHRMYXllckRhdGEgfTtcblxuZXhwb3J0IHR5cGUgTGF5ZXIgPSBMYXllckRhdGEgJiB7XG4gIGlkOiBzdHJpbmc7XG4gIGFzc2V0SWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xufTtcblxuLyoqIFRoZSBpbi1tZW1vcnkgZWRpdGluZyBkb2N1bWVudC4gbGF5ZXJzWzBdIGlzIHRoZSBib3R0b20gbGF5ZXIuICovXG5leHBvcnQgdHlwZSBQcm9qZWN0RG9jID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYXllcnM6IExheWVyW107XG59O1xuXG5leHBvcnQgdHlwZSBQcm9qZWN0TWV0YSA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF5ZXJPcmRlcjogc3RyaW5nW107XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgTGF5ZXJSb3cgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHByb2plY3RJZDogc3RyaW5nO1xuICBhc3NldElkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGF0YTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvamVjdFRodW1iID0ge1xuICBpZDogc3RyaW5nO1xuICB0aHVtYjogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQXNzZXRQYXlsb2FkID0ge1xuICBpZDogc3RyaW5nO1xuICBzcmM6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBQYWludEFzc2V0UGF5bG9hZCA9IHsgc3JjOiBzdHJpbmcgfTtcblxuZnVuY3Rpb24gZmluaXRlKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdmFsdWUpKTtcbn1cblxuZnVuY3Rpb24gc2FuaXRpemVUZXh0KGlucHV0OiBQYXJ0aWFsPFRleHRMYXllckRhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IFRleHRMYXllckRhdGEgfCB1bmRlZmluZWQge1xuICBpZiAoIWlucHV0IHx8IHR5cGVvZiBpbnB1dC5jb250ZW50ICE9PSBcInN0cmluZ1wiKSByZXR1cm4gdW5kZWZpbmVkO1xuICBjb25zdCBhbGlnbjogVGV4dEFsaWduID0gaW5wdXQuYWxpZ24gPT09IFwiY2VudGVyXCIgfHwgaW5wdXQuYWxpZ24gPT09IFwicmlnaHRcIiA/IGlucHV0LmFsaWduIDogXCJsZWZ0XCI7XG4gIGNvbnN0IHJhc3RlcldpZHRoID0gZmluaXRlKGlucHV0LnJhc3RlcldpZHRoLCAwKTtcbiAgY29uc3QgcmFzdGVySGVpZ2h0ID0gZmluaXRlKGlucHV0LnJhc3RlckhlaWdodCwgMCk7XG4gIHJldHVybiB7XG4gICAgY29udGVudDogaW5wdXQuY29udGVudC5zbGljZSgwLCA0MDAwKSxcbiAgICBmb250RmFtaWx5OiB0eXBlb2YgaW5wdXQuZm9udEZhbWlseSA9PT0gXCJzdHJpbmdcIiA/IGlucHV0LmZvbnRGYW1pbHkuc2xpY2UoMCwgODApIDogXCJJbnRlclwiLFxuICAgIGZvbnRTaXplOiBjbGFtcChmaW5pdGUoaW5wdXQuZm9udFNpemUsIDQ4KSwgNiwgNTAwKSxcbiAgICBmb250V2VpZ2h0OiBjbGFtcChNYXRoLnJvdW5kKGZpbml0ZShpbnB1dC5mb250V2VpZ2h0LCA0MDApIC8gMTAwKSAqIDEwMCwgMTAwLCA5MDApLFxuICAgIGFsaWduLFxuICAgIGNvbG9yOiB0eXBlb2YgaW5wdXQuY29sb3IgPT09IFwic3RyaW5nXCIgJiYgL14jWzAtOWEtZl17Nn0kL2kudGVzdChpbnB1dC5jb2xvcikgPyBpbnB1dC5jb2xvciA6IFwiIzExMTExMVwiLFxuICAgIGxpbmVIZWlnaHQ6IGNsYW1wKGZpbml0ZShpbnB1dC5saW5lSGVpZ2h0LCAxLjIpLCAwLjYsIDMpLFxuICAgIC4uLihyYXN0ZXJXaWR0aCA+IDAgJiYgcmFzdGVySGVpZ2h0ID4gMCA/IHsgcmFzdGVyV2lkdGgsIHJhc3RlckhlaWdodCB9IDoge30pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYW5pdGl6ZVRyYW5zZm9ybShpbnB1dDogUGFydGlhbDxMYXllckRhdGE+IHwgbnVsbCB8IHVuZGVmaW5lZCk6IExheWVyRGF0YSB7XG4gIGNvbnN0IHQgPSBpbnB1dCA/PyB7fTtcbiAgY29uc3QgdGV4dCA9IHNhbml0aXplVGV4dCh0LnRleHQpO1xuICByZXR1cm4ge1xuICAgIHg6IGZpbml0ZSh0LngsIDApLFxuICAgIHk6IGZpbml0ZSh0LnksIDApLFxuICAgIHc6IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBmaW5pdGUodC53LCBNSU5fTEFZRVJfU0laRSkpLFxuICAgIGg6IE1hdGgubWF4KE1JTl9MQVlFUl9TSVpFLCBmaW5pdGUodC5oLCBNSU5fTEFZRVJfU0laRSkpLFxuICAgIHJvdGF0aW9uOiBmaW5pdGUodC5yb3RhdGlvbiwgMCksXG4gICAgb3BhY2l0eTogY2xhbXAoZmluaXRlKHQub3BhY2l0eSwgMSksIDAsIDEpLFxuICAgIHZpc2libGU6IHR5cGVvZiB0LnZpc2libGUgPT09IFwiYm9vbGVhblwiID8gdC52aXNpYmxlIDogdHJ1ZSxcbiAgICBmbGlwWDogdHlwZW9mIHQuZmxpcFggPT09IFwiYm9vbGVhblwiID8gdC5mbGlwWCA6IGZhbHNlLFxuICAgIGJsZW5kTW9kZTogQkxFTkRfTU9ERVMuaW5jbHVkZXModC5ibGVuZE1vZGUgYXMgQmxlbmRNb2RlKSA/ICh0LmJsZW5kTW9kZSBhcyBCbGVuZE1vZGUpIDogXCJub3JtYWxcIixcbiAgICAuLi4odGV4dCA/IHsgdGV4dCB9IDoge30pXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlbmNvZGVUcmFuc2Zvcm0odDogTGF5ZXJEYXRhKTogc3RyaW5nIHtcbiAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHNhbml0aXplVHJhbnNmb3JtKHQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVRyYW5zZm9ybShyYXc6IHN0cmluZyk6IExheWVyRGF0YSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNhbml0aXplVHJhbnNmb3JtKEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPExheWVyRGF0YT4pO1xuICB9IGNhdGNoIHtcbiAgICByZXR1cm4gc2FuaXRpemVUcmFuc2Zvcm0obnVsbCk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY29kZVN0cmluZ0FycmF5KHJhdzogc3RyaW5nKTogc3RyaW5nW10ge1xuICB0cnkge1xuICAgIGNvbnN0IHBhcnNlZCA9IEpTT04ucGFyc2UocmF3KSBhcyB1bmtub3duO1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KHBhcnNlZCkgPyBwYXJzZWQuZmlsdGVyKCh2KTogdiBpcyBzdHJpbmcgPT4gdHlwZW9mIHYgPT09IFwic3RyaW5nXCIpIDogW107XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xlYW5OYW1lKHZhbHVlOiBzdHJpbmcsIGZhbGxiYWNrOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBjbGVhbmVkID0gdmFsdWUucmVwbGFjZSgvXFxzKy9nLCBcIiBcIikudHJpbSgpLnNsaWNlKDAsIDgwKTtcbiAgcmV0dXJuIGNsZWFuZWQgfHwgZmFsbGJhY2s7XG59XG4iLCAiLy8gTWluaW1hbCBTMyBoZWxwZXJzIHZpYSBTaWduYXR1cmUgVjQgKG5vIEFXUyBTREspLlxuLy8gTGFyZ2UgaW1hZ2VzIG11c3QgYmUgdXBsb2FkZWQgZnJvbSB0aGUgYnJvd3NlciB3aXRoIGEgcHJlc2lnbmVkIFBVVCBcdTIwMTRcbi8vIGhvc3RlZCBMYWtlYmVkIGNhcHMgREIgdmFsdWVzIGF0IDY0S0IgYW5kIGluc3RydWN0aW9uIGJ1ZGdldCB+NTBrLCBzb1xuLy8gc2VydmVyLXNpZGUgZGF0YS1VUkwgZGVjb2RlICsgaGFzaCArIHVwbG9hZCBjYW5ub3Qgd29yayBmb3IgcmVhbCBwaG90b3MuXG5cbmltcG9ydCB0eXBlIHsgU2VydmVyQ29udGV4dCB9IGZyb20gXCJsYWtlYmVkL3NlcnZlclwiO1xuXG5leHBvcnQgY29uc3QgQ0xPVURfRlJPTlRfVVJMID0gXCJodHRwczovL2QycDZxOTE3bXd3NHlmLmNsb3VkZnJvbnQubmV0XCI7XG5jb25zdCBLRVlfUFJFRklYID0gXCJpbWFnZS1lZGl0b3JcIjtcbi8qKiBTdGF5IHVuZGVyIExha2ViZWQncyBob3N0ZWQgbWF4VmFsdWVCeXRlcyAoNjU1MzYpLiAqL1xuZXhwb3J0IGNvbnN0IE1BWF9JTkxJTkVfU1JDX0JZVEVTID0gNjBfMDAwO1xuXG5jb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnYoY3R4OiBTZXJ2ZXJDb250ZXh0LCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlID0gY3R4LmVudltrZXldO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzZXJ2ZXIgZW52OiAke2tleX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvSGV4KGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICByZXR1cm4gWy4uLm5ldyBVaW50OEFycmF5KGJ1ZmZlcildLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKFwiXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaGEyNTZIZXgoZGF0YTogVWludDhBcnJheSB8IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGJ5dGVzID0gdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgPyBlbmNvZGVyLmVuY29kZShkYXRhKSA6IGRhdGE7XG4gIHJldHVybiB0b0hleChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgYnl0ZXMpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaG1hYyhrZXk6IEFycmF5QnVmZmVyIHwgVWludDhBcnJheSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcInJhd1wiLCBrZXksIHsgbmFtZTogXCJITUFDXCIsIGhhc2g6IFwiU0hBLTI1NlwiIH0sIGZhbHNlLCBbXG4gICAgXCJzaWduXCJcbiAgXSk7XG4gIHJldHVybiBjcnlwdG8uc3VidGxlLnNpZ24oXCJITUFDXCIsIGNyeXB0b0tleSwgZW5jb2Rlci5lbmNvZGUoZGF0YSkpO1xufVxuXG4vKiogQVdTIFNpZ1Y0IFVSSSBlbmNvZGUgKHBhdGggc2VnbWVudCAvIHF1ZXJ5KS4gKi9cbmZ1bmN0aW9uIHVyaUVuY29kZSh2YWx1ZTogc3RyaW5nLCBlbmNvZGVTbGFzaCA9IHRydWUpOiBzdHJpbmcge1xuICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC9bIScoKSpdL2csIChjaCkgPT4gYCUke2NoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4gIHJldHVybiBlbmNvZGVTbGFzaCA/IGVuY29kZWQgOiBlbmNvZGVkLnJlcGxhY2UoLyUyRi9naSwgXCIvXCIpO1xufVxuXG4vKiogS2VlcCBTMyBrZXlzIFVSTC1zYWZlIFx1MjAxNCBndWVzdCBpZHMgbGlrZSBcImd1ZXN0OmxvY2FsXCIgYnJlYWsgdW5zaWduZWQgcGF0aHMuICovXG5mdW5jdGlvbiBzYWZlU2VnbWVudCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY2xlYW5lZCA9IFN0cmluZyh2YWx1ZSlcbiAgICAucmVwbGFjZSgvW15hLXpBLVowLTkuXy1dKy9nLCBcIl9cIilcbiAgICAucmVwbGFjZSgvXysvZywgXCJfXCIpXG4gICAgLnJlcGxhY2UoL15ffF8kL2csIFwiXCIpXG4gICAgLnNsaWNlKDAsIDgwKTtcbiAgcmV0dXJuIGNsZWFuZWQgfHwgXCJ4XCI7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRUeXBlRXh0KGNvbnRlbnRUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0eXBlID0gY29udGVudFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IHR5cGUgPT09IFwiaW1hZ2UvanBnXCIpIHJldHVybiBcImpwZ1wiO1xuICBpZiAodHlwZSA9PT0gXCJpbWFnZS93ZWJwXCIpIHJldHVybiBcIndlYnBcIjtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2UvZ2lmXCIpIHJldHVybiBcImdpZlwiO1xuICByZXR1cm4gXCJwbmdcIjtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRGF0YVVybChzcmM6IHN0cmluZyk6IHsgY29udGVudFR5cGU6IHN0cmluZzsgYm9keTogVWludDhBcnJheTsgZXh0OiBzdHJpbmcgfSB7XG4gIGNvbnN0IG1hdGNoID0gL15kYXRhOihpbWFnZVxcL1thLXowLTkuKy1dKyk7YmFzZTY0LChbXFxzXFxTXSspJC9pLmV4ZWMoc3JjKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIG11c3QgYmUgYSBkYXRhIFVSTFwiKTtcbiAgfVxuICBjb25zdCBjb250ZW50VHlwZSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGJpbmFyeSA9IGF0b2IobWF0Y2hbMl0ucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgY29uc3QgYm9keSA9IG5ldyBVaW50OEFycmF5KGJpbmFyeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvZHlbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4geyBjb250ZW50VHlwZSwgYm9keSwgZXh0OiBjb250ZW50VHlwZUV4dChjb250ZW50VHlwZSkgfTtcbn1cblxuZnVuY3Rpb24gYW16RGF0ZShub3c6IERhdGUpOiB7IGFtekRhdGU6IHN0cmluZzsgZGF0ZVN0YW1wOiBzdHJpbmcgfSB7XG4gIGNvbnN0IGlzbyA9IG5vdy50b0lTT1N0cmluZygpLnJlcGxhY2UoL1stOl0vZywgXCJcIikucmVwbGFjZSgvXFwuXFxkezN9WiQvLCBcIlpcIik7XG4gIHJldHVybiB7IGFtekRhdGU6IGlzbywgZGF0ZVN0YW1wOiBpc28uc2xpY2UoMCwgOCkgfTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0S2V5KHVzZXJJZDogc3RyaW5nLCBwcm9qZWN0SWQ6IHN0cmluZywgZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpZCA9XG4gICAgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgICAgOiBgJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMCl9YDtcbiAgcmV0dXJuIGAke0tFWV9QUkVGSVh9LyR7c2FmZVNlZ21lbnQodXNlcklkKX0vJHtzYWZlU2VnbWVudChwcm9qZWN0SWQpfS8ke2lkfS4ke2V4dH1gO1xufVxuXG5mdW5jdGlvbiBjYW5vbmljYWxVcmkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYC8ke2tleS5zcGxpdChcIi9cIikubWFwKChwYXJ0KSA9PiB1cmlFbmNvZGUocGFydCkpLmpvaW4oXCIvXCIpfWA7XG59XG5cbmZ1bmN0aW9uIGF3c0NvbmZpZyhjdHg6IFNlcnZlckNvbnRleHQpIHtcbiAgY29uc3QgYWNjZXNzS2V5ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX0FDQ0VTU19LRVlfSURcIik7XG4gIGNvbnN0IHNlY3JldEtleSA9IHJlcXVpcmVFbnYoY3R4LCBcIkFXU19TRUNSRVRfQUNDRVNTX0tFWVwiKTtcbiAgY29uc3QgYnVja2V0ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX0JVQ0tFVFwiKTtcbiAgY29uc3QgcmVnaW9uID0gdHlwZW9mIGN0eC5lbnYuQVdTX1JFR0lPTiA9PT0gXCJzdHJpbmdcIiAmJiBjdHguZW52LkFXU19SRUdJT04gPyBjdHguZW52LkFXU19SRUdJT04gOiBcInVzLWVhc3QtMlwiO1xuICByZXR1cm4geyBhY2Nlc3NLZXksIHNlY3JldEtleSwgYnVja2V0LCByZWdpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0F3c0VudihjdHg6IFNlcnZlckNvbnRleHQpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgY3R4LmVudi5BV1NfQUNDRVNTX0tFWV9JRCA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICEhY3R4LmVudi5BV1NfQUNDRVNTX0tFWV9JRCAmJlxuICAgIHR5cGVvZiBjdHguZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICEhY3R4LmVudi5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgJiZcbiAgICB0eXBlb2YgY3R4LmVudi5BV1NfQlVDS0VUID09PSBcInN0cmluZ1wiICYmXG4gICAgISFjdHguZW52LkFXU19CVUNLRVRcbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2lnbmluZ0tleShzZWNyZXRLZXk6IHN0cmluZywgZGF0ZVN0YW1wOiBzdHJpbmcsIHJlZ2lvbjogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICBjb25zdCBrRGF0ZSA9IGF3YWl0IGhtYWMoZW5jb2Rlci5lbmNvZGUoYEFXUzQke3NlY3JldEtleX1gKSwgZGF0ZVN0YW1wKTtcbiAgY29uc3Qga1JlZ2lvbiA9IGF3YWl0IGhtYWMoa0RhdGUsIHJlZ2lvbik7XG4gIGNvbnN0IGtTZXJ2aWNlID0gYXdhaXQgaG1hYyhrUmVnaW9uLCBcInMzXCIpO1xuICByZXR1cm4gaG1hYyhrU2VydmljZSwgXCJhd3M0X3JlcXVlc3RcIik7XG59XG5cbi8qKiBCcm93c2VyIHVwbG9hZHMgZGlyZWN0bHkgdG8gUzM7IHNlcnZlciBvbmx5IHNpZ25zIChubyBpbWFnZSBieXRlcyBvbiBMYWtlYmVkKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcmVzaWduZWRQdXQoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIGNvbnRlbnRUeXBlOiBzdHJpbmdcbik6IFByb21pc2U8eyB1cGxvYWRVcmw6IHN0cmluZzsgcHVibGljVXJsOiBzdHJpbmc7IGtleTogc3RyaW5nIH0+IHtcbiAgY29uc3QgdHlwZSA9IFN0cmluZyhjb250ZW50VHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIXR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgdGhyb3cgbmV3IEVycm9yKFwiQ29udGVudCB0eXBlIG11c3QgYmUgYW4gaW1hZ2VcIik7XG5cbiAgY29uc3QgeyBhY2Nlc3NLZXksIHNlY3JldEtleSwgYnVja2V0LCByZWdpb24gfSA9IGF3c0NvbmZpZyhjdHgpO1xuICBjb25zdCBrZXkgPSBvYmplY3RLZXkoY3R4LmF1dGgudXNlcklkLCBwcm9qZWN0SWQsIGNvbnRlbnRUeXBlRXh0KHR5cGUpKTtcbiAgY29uc3QgaG9zdCA9IGAke2J1Y2tldH0uczMuJHtyZWdpb259LmFtYXpvbmF3cy5jb21gO1xuICBjb25zdCB1cmkgPSBjYW5vbmljYWxVcmkoa2V5KTtcbiAgY29uc3QgeyBhbXpEYXRlOiBhbXosIGRhdGVTdGFtcCB9ID0gYW16RGF0ZShuZXcgRGF0ZSgpKTtcbiAgY29uc3QgZXhwaXJlcyA9IDkwMDtcbiAgY29uc3QgY3JlZGVudGlhbCA9IGAke2FjY2Vzc0tleX0vJHtkYXRlU3RhbXB9LyR7cmVnaW9ufS9zMy9hd3M0X3JlcXVlc3RgO1xuXG4gIGNvbnN0IHF1ZXJ5OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIFwiWC1BbXotQWxnb3JpdGhtXCI6IFwiQVdTNC1ITUFDLVNIQTI1NlwiLFxuICAgIFwiWC1BbXotQ3JlZGVudGlhbFwiOiBjcmVkZW50aWFsLFxuICAgIFwiWC1BbXotRGF0ZVwiOiBhbXosXG4gICAgXCJYLUFtei1FeHBpcmVzXCI6IFN0cmluZyhleHBpcmVzKSxcbiAgICBcIlgtQW16LVNpZ25lZEhlYWRlcnNcIjogXCJjb250ZW50LXR5cGU7aG9zdFwiLFxuICAgIFwiWC1BbXotQ29udGVudC1TaGEyNTZcIjogXCJVTlNJR05FRC1QQVlMT0FEXCJcbiAgfTtcbiAgY29uc3QgY2Fub25pY2FsUXVlcnkgPSBPYmplY3Qua2V5cyhxdWVyeSlcbiAgICAuc29ydCgpXG4gICAgLm1hcCgoaykgPT4gYCR7dXJpRW5jb2RlKGspfT0ke3VyaUVuY29kZShxdWVyeVtrXSl9YClcbiAgICAuam9pbihcIiZcIik7XG5cbiAgY29uc3QgY2Fub25pY2FsSGVhZGVycyA9IGBjb250ZW50LXR5cGU6JHt0eXBlfVxcbmhvc3Q6JHtob3N0fVxcbmA7XG4gIGNvbnN0IGNhbm9uaWNhbFJlcXVlc3QgPSBbXG4gICAgXCJQVVRcIixcbiAgICB1cmksXG4gICAgY2Fub25pY2FsUXVlcnksXG4gICAgY2Fub25pY2FsSGVhZGVycyxcbiAgICBcImNvbnRlbnQtdHlwZTtob3N0XCIsXG4gICAgXCJVTlNJR05FRC1QQVlMT0FEXCJcbiAgXS5qb2luKFwiXFxuXCIpO1xuXG4gIGNvbnN0IGNyZWRlbnRpYWxTY29wZSA9IGAke2RhdGVTdGFtcH0vJHtyZWdpb259L3MzL2F3czRfcmVxdWVzdGA7XG4gIGNvbnN0IHN0cmluZ1RvU2lnbiA9IFtcIkFXUzQtSE1BQy1TSEEyNTZcIiwgYW16LCBjcmVkZW50aWFsU2NvcGUsIGF3YWl0IHNoYTI1NkhleChjYW5vbmljYWxSZXF1ZXN0KV0uam9pbihcbiAgICBcIlxcblwiXG4gICk7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IHRvSGV4KGF3YWl0IGhtYWMoYXdhaXQgc2lnbmluZ0tleShzZWNyZXRLZXksIGRhdGVTdGFtcCwgcmVnaW9uKSwgc3RyaW5nVG9TaWduKSk7XG4gIGNvbnN0IHVwbG9hZFVybCA9IGBodHRwczovLyR7aG9zdH0ke3VyaX0/JHtjYW5vbmljYWxRdWVyeX0mWC1BbXotU2lnbmF0dXJlPSR7c2lnbmF0dXJlfWA7XG4gIHJldHVybiB7IHVwbG9hZFVybCwgcHVibGljVXJsOiBgJHtDTE9VRF9GUk9OVF9VUkx9LyR7a2V5fWAsIGtleSB9O1xufVxuXG4vKiogU2VydmVyLXNpZGUgdXBsb2FkIGZvciBzbWFsbCBkYXRhIFVSTHMgb25seSAoYmxhbmsgbGF5ZXJzIC8gdGlueSBpbWFnZXMpLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwbG9hZEltYWdlRGF0YVVybChcbiAgY3R4OiBTZXJ2ZXJDb250ZXh0LFxuICBwcm9qZWN0SWQ6IHN0cmluZyxcbiAgc3JjOiBzdHJpbmdcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHsgYWNjZXNzS2V5LCBzZWNyZXRLZXksIGJ1Y2tldCwgcmVnaW9uIH0gPSBhd3NDb25maWcoY3R4KTtcbiAgY29uc3QgeyBjb250ZW50VHlwZSwgYm9keSwgZXh0IH0gPSBkZWNvZGVEYXRhVXJsKHNyYyk7XG4gIGlmIChib2R5LmJ5dGVMZW5ndGggPiBNQVhfSU5MSU5FX1NSQ19CWVRFUykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZSBmb3Igc2VydmVyIHVwbG9hZDsgdXNlIHByZXBhcmVBc3NldFVwbG9hZFwiKTtcbiAgfVxuXG4gIGNvbnN0IGtleSA9IG9iamVjdEtleShjdHguYXV0aC51c2VySWQsIHByb2plY3RJZCwgZXh0KTtcbiAgY29uc3QgaG9zdCA9IGAke2J1Y2tldH0uczMuJHtyZWdpb259LmFtYXpvbmF3cy5jb21gO1xuICBjb25zdCB1cmkgPSBjYW5vbmljYWxVcmkoa2V5KTtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vJHtob3N0fSR7dXJpfWA7XG4gIGNvbnN0IHsgYW16RGF0ZTogYW16LCBkYXRlU3RhbXAgfSA9IGFtekRhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IHBheWxvYWRIYXNoID0gYXdhaXQgc2hhMjU2SGV4KGJvZHkpO1xuXG4gIGNvbnN0IGNhbm9uaWNhbEhlYWRlcnMgPVxuICAgIGBjb250ZW50LXR5cGU6JHtjb250ZW50VHlwZX1cXG5gICtcbiAgICBgaG9zdDoke2hvc3R9XFxuYCArXG4gICAgYHgtYW16LWNvbnRlbnQtc2hhMjU2OiR7cGF5bG9hZEhhc2h9XFxuYCArXG4gICAgYHgtYW16LWRhdGU6JHthbXp9XFxuYDtcbiAgY29uc3Qgc2lnbmVkSGVhZGVycyA9IFwiY29udGVudC10eXBlO2hvc3Q7eC1hbXotY29udGVudC1zaGEyNTY7eC1hbXotZGF0ZVwiO1xuICBjb25zdCBjYW5vbmljYWxSZXF1ZXN0ID0gW1wiUFVUXCIsIHVyaSwgXCJcIiwgY2Fub25pY2FsSGVhZGVycywgc2lnbmVkSGVhZGVycywgcGF5bG9hZEhhc2hdLmpvaW4oXCJcXG5cIik7XG5cbiAgY29uc3QgY3JlZGVudGlhbFNjb3BlID0gYCR7ZGF0ZVN0YW1wfS8ke3JlZ2lvbn0vczMvYXdzNF9yZXF1ZXN0YDtcbiAgY29uc3Qgc3RyaW5nVG9TaWduID0gW1wiQVdTNC1ITUFDLVNIQTI1NlwiLCBhbXosIGNyZWRlbnRpYWxTY29wZSwgYXdhaXQgc2hhMjU2SGV4KGNhbm9uaWNhbFJlcXVlc3QpXS5qb2luKFxuICAgIFwiXFxuXCJcbiAgKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gdG9IZXgoYXdhaXQgaG1hYyhhd2FpdCBzaWduaW5nS2V5KHNlY3JldEtleSwgZGF0ZVN0YW1wLCByZWdpb24pLCBzdHJpbmdUb1NpZ24pKTtcbiAgY29uc3QgYXV0aG9yaXphdGlvbiA9XG4gICAgYEFXUzQtSE1BQy1TSEEyNTYgQ3JlZGVudGlhbD0ke2FjY2Vzc0tleX0vJHtjcmVkZW50aWFsU2NvcGV9LCBgICtcbiAgICBgU2lnbmVkSGVhZGVycz0ke3NpZ25lZEhlYWRlcnN9LCBTaWduYXR1cmU9JHtzaWduYXR1cmV9YDtcblxuICBjdHgubG9nLmluZm8oXCJVcGxvYWRpbmcgaW1hZ2UgdG8gUzNcIiwgeyBrZXksIGJ5dGVzOiBib2R5LmJ5dGVMZW5ndGgsIGNvbnRlbnRUeXBlIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IGNvbnRlbnRUeXBlLFxuICAgICAgXCJ4LWFtei1jb250ZW50LXNoYTI1NlwiOiBwYXlsb2FkSGFzaCxcbiAgICAgIFwieC1hbXotZGF0ZVwiOiBhbXosXG4gICAgICBBdXRob3JpemF0aW9uOiBhdXRob3JpemF0aW9uXG4gICAgfSxcbiAgICBib2R5XG4gIH0pO1xuXG4gIGlmICghcmVzcG9uc2Uub2spIHtcbiAgICBjb25zdCBkZXRhaWwgPSBhd2FpdCByZXNwb25zZS50ZXh0KCkuY2F0Y2goKCkgPT4gXCJcIik7XG4gICAgY3R4LmxvZy5lcnJvcihcIlMzIHVwbG9hZCBmYWlsZWRcIiwgeyBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cywgZGV0YWlsOiBkZXRhaWwuc2xpY2UoMCwgNTAwKSwga2V5IH0pO1xuICAgIHRocm93IG5ldyBFcnJvcihgUzMgdXBsb2FkIGZhaWxlZCAoJHtyZXNwb25zZS5zdGF0dXN9KTogJHtkZXRhaWwuc2xpY2UoMCwgMjAwKX1gKTtcbiAgfVxuXG4gIGNvbnN0IHB1YmxpY1VybCA9IGAke0NMT1VEX0ZST05UX1VSTH0vJHtrZXl9YDtcbiAgY3R4LmxvZy5pbmZvKFwiUzMgdXBsb2FkIG9rXCIsIHsgdXJsOiBwdWJsaWNVcmwgfSk7XG4gIHJldHVybiBwdWJsaWNVcmw7XG59XG4iLCAiaW1wb3J0IHsgY2Fwc3VsZSwgbXV0YXRpb24sIHF1ZXJ5LCBzdHJpbmcsIHRhYmxlIH0gZnJvbSBcImxha2ViZWQvc2VydmVyXCI7XG5pbXBvcnQgdHlwZSB7IFNlcnZlckNvbnRleHQgfSBmcm9tIFwibGFrZWJlZC9zZXJ2ZXJcIjtcbmltcG9ydCB7XG4gIE1BWF9QUk9KRUNUX0RJTSxcbiAgY2xlYW5OYW1lLFxuICBjbGFtcCxcbiAgZGVjb2RlU3RyaW5nQXJyYXksXG4gIGRlY29kZVRyYW5zZm9ybSxcbiAgZW5jb2RlVHJhbnNmb3JtXG59IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcbmltcG9ydCB7IHVwbG9hZEltYWdlRGF0YVVybCwgY3JlYXRlUHJlc2lnbmVkUHV0LCBoYXNBd3NFbnYsIE1BWF9JTkxJTkVfU1JDX0JZVEVTIH0gZnJvbSBcIi4vczNcIjtcblxuLy8gQ2xpZW50cyBzdGlsbCBzZW5kIGltYWdlIGRhdGEgVVJMcyBvbiB1cGxvYWQgZm9yIHRpbnkgYXNzZXRzOyBsYXJnZSBpbWFnZXNcbi8vIHVzZSBwcmVwYXJlQXNzZXRVcGxvYWQgKyBhIGJyb3dzZXIgUFVUIHRvIFMzIChob3N0ZWQgTGFrZWJlZCBjYXBzIHZhbHVlc1xuLy8gYXQgNjRLQiBhbmQgY2Fubm90IGRlY29kZSBtdWx0aS1NQiBkYXRhIFVSTHMgaW4gbXV0YXRpb25zKS5cbmNvbnN0IE1BWF9TUkNfTEVOR1RIID0gMTJfMDAwXzAwMDtcbmNvbnN0IE1BWF9USFVNQl9MRU5HVEggPSBNQVhfSU5MSU5FX1NSQ19CWVRFUztcbmNvbnN0IE1BWF9QQUlOVF9CWVRFUyA9IDQwXzAwMDtcblxuZnVuY3Rpb24gYnl0ZXNUb0Jhc2U2NChieXRlczogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGxldCBiaW5hcnkgPSBcIlwiO1xuICBjb25zdCBjaHVuayA9IDB4ODAwMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gY2h1bmspIHtcbiAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSguLi5ieXRlcy5zdWJhcnJheShpLCBNYXRoLm1pbihpICsgY2h1bmssIGJ5dGVzLmxlbmd0aCkpKTtcbiAgfVxuICByZXR1cm4gYnRvYShiaW5hcnkpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlUHJvamVjdChjdHg6IFNlcnZlckNvbnRleHQsIGlkOiBzdHJpbmcpIHtcbiAgY29uc3Qgcm93ID0gY3R4LmRiLnByb2plY3RzLmdldChpZCk7XG4gIGlmICghcm93IHx8IHJvdy5vd25lcklkICE9PSBjdHguYXV0aC51c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlTGF5ZXIoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5sYXllcnMuZ2V0KGlkKTtcbiAgaWYgKCFyb3cgfHwgcm93Lm93bmVySWQgIT09IGN0eC5hdXRoLnVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxheWVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlQXNzZXQoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5hc3NldHMuZ2V0KGlkKTtcbiAgaWYgKCFyb3cgfHwgcm93Lm93bmVySWQgIT09IGN0eC5hdXRoLnVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiBjaGVja0RhdGFVcmwoc3JjOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwic3RyaW5nXCIgfHwgIXNyYy5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9cIikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBtdXN0IGJlIGEgZGF0YSBVUkxcIik7XG4gIH1cbiAgaWYgKHNyYy5sZW5ndGggPiBNQVhfU1JDX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0RpbSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGltZW5zaW9uXCIpO1xuICB9XG4gIHJldHVybiBjbGFtcChNYXRoLnJvdW5kKHZhbHVlKSwgMSwgTUFYX1BST0pFQ1RfRElNKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0QXNzZXQoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlclxuKSB7XG4gIC8vIENsaWVudCBhbHJlYWR5IHVwbG9hZGVkIHZpYSBwcmVzaWduZWQgUFVUIFx1MjAxNCBvbmx5IHN0b3JlIHRoZSBzaG9ydCBVUkwuXG4gIGlmICgvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHNyYykpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGN0eC5kYi5hc3NldHNcbiAgICAgIC53aGVyZShcInByb2plY3RJZFwiLCBwcm9qZWN0SWQpXG4gICAgICAuYWxsKClcbiAgICAgIC5maW5kKChyb3cpID0+IHJvdy5vd25lcklkID09PSBjdHguYXV0aC51c2VySWQgJiYgcm93LnNyYyA9PT0gc3JjKTtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgICByZXR1cm4gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgcHJvamVjdElkLFxuICAgICAgc3JjLFxuICAgICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCkpLFxuICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSlcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRGF0YVVybChzcmMpO1xuICBpZiAoc3JjLmxlbmd0aCA+IE1BWF9JTkxJTkVfU1JDX0JZVEVTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJJbWFnZSBpcyB0b28gbGFyZ2UgdG8gc3RvcmUgaW5saW5lLiBVc2UgcHJlcGFyZUFzc2V0VXBsb2FkIGFuZCB1cGxvYWQgZnJvbSB0aGUgYnJvd3Nlci5cIlxuICAgICk7XG4gIH1cblxuICBsZXQgc3RvcmVkID0gc3JjO1xuICBpZiAoaGFzQXdzRW52KGN0eCkpIHtcbiAgICB0cnkge1xuICAgICAgc3RvcmVkID0gYXdhaXQgdXBsb2FkSW1hZ2VEYXRhVXJsKGN0eCwgcHJvamVjdElkLCBzcmMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpO1xuICAgICAgY3R4LmxvZy5lcnJvcihcIlMzIHVwbG9hZCBmYWlsZWQ7IGtlZXBpbmcgaW5saW5lIGRhdGEgVVJMXCIsIHsgbWVzc2FnZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY3R4LmxvZy53YXJuKFwiQVdTIGVudiBtaXNzaW5nOyBzdG9yaW5nIHNtYWxsIGltYWdlIGFzIGRhdGEgVVJMXCIpO1xuICB9XG5cbiAgcmV0dXJuIGN0eC5kYi5hc3NldHMuaW5zZXJ0KHtcbiAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgcHJvamVjdElkLFxuICAgIHNyYzogc3RvcmVkLFxuICAgIHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSxcbiAgICBoZWlnaHQ6IFN0cmluZyhjaGVja0RpbShoZWlnaHQpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0T3JkZXIoY3R4OiBTZXJ2ZXJDb250ZXh0LCBwcm9qZWN0SWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXSkge1xuICBjb25zdCB2YWxpZCA9IG5ldyBTZXQoXG4gICAgY3R4LmRiLmxheWVycy53aGVyZShcInByb2plY3RJZFwiLCBwcm9qZWN0SWQpLmFsbCgpLm1hcCgocm93KSA9PiByb3cuaWQpXG4gICk7XG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3Qgb3JkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgaWYgKHZhbGlkLmhhcyhpZCkgJiYgIXNlZW4uaGFzKGlkKSkge1xuICAgICAgb3JkZXIucHVzaChpZCk7XG4gICAgICBzZWVuLmFkZChpZCk7XG4gICAgfVxuICB9XG4gIC8vIExheWVycyBtaXNzaW5nIGZyb20gdGhlIHJlcXVlc3RlZCBvcmRlciBnbyBvbiB0b3AgcmF0aGVyIHRoYW4gdmFuaXNoaW5nLlxuICBmb3IgKGNvbnN0IGlkIG9mIHZhbGlkKSB7XG4gICAgaWYgKCFzZWVuLmhhcyhpZCkpIG9yZGVyLnB1c2goaWQpO1xuICB9XG4gIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdElkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2Fwc3VsZSh7XG4gIG5hbWU6IFwiaW1hZ2UtZWRpdG9yXCIsXG5cbiAgc2NoZW1hOiB7XG4gICAgcHJvamVjdHM6IHRhYmxlKHtcbiAgICAgIG93bmVySWQ6IHN0cmluZygpLFxuICAgICAgbmFtZTogc3RyaW5nKCksXG4gICAgICB3aWR0aDogc3RyaW5nKCksXG4gICAgICBoZWlnaHQ6IHN0cmluZygpLFxuICAgICAgbGF5ZXJPcmRlcjogc3RyaW5nKCkuZGVmYXVsdChcIltdXCIpLFxuICAgICAgdGh1bWI6IHN0cmluZygpLmRlZmF1bHQoXCJcIilcbiAgICB9KSxcbiAgICBsYXllcnM6IHRhYmxlKHtcbiAgICAgIG93bmVySWQ6IHN0cmluZygpLFxuICAgICAgcHJvamVjdElkOiBzdHJpbmcoKSxcbiAgICAgIGFzc2V0SWQ6IHN0cmluZygpLFxuICAgICAgLy8gQ2xpZW50LWdlbmVyYXRlZCBpZGVtcG90ZW5jeSBrZXkgc28gYSByZXRyaWVkIGFkZExheWVyIG5ldmVyIGR1cGxpY2F0ZXMuXG4gICAgICBjbGllbnRLZXk6IHN0cmluZygpLmRlZmF1bHQoXCJcIiksXG4gICAgICBuYW1lOiBzdHJpbmcoKSxcbiAgICAgIGRhdGE6IHN0cmluZygpXG4gICAgfSksXG4gICAgYXNzZXRzOiB0YWJsZSh7XG4gICAgICBvd25lcklkOiBzdHJpbmcoKSxcbiAgICAgIHByb2plY3RJZDogc3RyaW5nKCksXG4gICAgICBzcmM6IHN0cmluZygpLFxuICAgICAgd2lkdGg6IHN0cmluZygpLFxuICAgICAgaGVpZ2h0OiBzdHJpbmcoKVxuICAgIH0pXG4gIH0sXG5cbiAgcXVlcmllczoge1xuICAgIHByb2plY3RzOiBxdWVyeSgoY3R4KSA9PiAoe1xuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICBpdGVtczogY3R4LmRiLnByb2plY3RzXG4gICAgICAgIC53aGVyZShcIm93bmVySWRcIiwgY3R4LmF1dGgudXNlcklkKVxuICAgICAgICAub3JkZXJCeShcInVwZGF0ZWRBdFwiLCBcImRlc2NcIilcbiAgICAgICAgLmFsbCgpXG4gICAgICAgIC5tYXAoKHJvdykgPT4gKHtcbiAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICAgIHdpZHRoOiBOdW1iZXIocm93LndpZHRoKSxcbiAgICAgICAgICBoZWlnaHQ6IE51bWJlcihyb3cuaGVpZ2h0KSxcbiAgICAgICAgICBsYXllck9yZGVyOiBkZWNvZGVTdHJpbmdBcnJheShTdHJpbmcocm93LmxheWVyT3JkZXIpKSxcbiAgICAgICAgICB1cGRhdGVkQXQ6IHJvdy51cGRhdGVkQXRcbiAgICAgICAgfSkpXG4gICAgfSkpLFxuXG4gICAgLy8gVGh1bWJuYWlscyBhcmUgdGhlIG9uZSBidWxreSBwYXlsb2FkIHB1c2hlZCBieSBxdWVyaWVzOyBvbmx5IHRoZSBob21lXG4gICAgLy8gc2NyZWVuIHN1YnNjcmliZXMgdG8gdGhpcyBvbmUuXG4gICAgcHJvamVjdFRodW1iczogcXVlcnkoKGN0eCkgPT4gKHtcbiAgICAgIHJlYWR5OiB0cnVlLFxuICAgICAgaXRlbXM6IGN0eC5kYi5wcm9qZWN0c1xuICAgICAgICAud2hlcmUoXCJvd25lcklkXCIsIGN0eC5hdXRoLnVzZXJJZClcbiAgICAgICAgLmFsbCgpXG4gICAgICAgIC5tYXAoKHJvdykgPT4gKHsgaWQ6IHJvdy5pZCwgdGh1bWI6IHJvdy50aHVtYiB9KSlcbiAgICB9KSksXG5cbiAgICBsYXllcnM6IHF1ZXJ5KChjdHgpID0+ICh7XG4gICAgICByZWFkeTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBjdHguZGIubGF5ZXJzXG4gICAgICAgIC53aGVyZShcIm93bmVySWRcIiwgY3R4LmF1dGgudXNlcklkKVxuICAgICAgICAuYWxsKClcbiAgICAgICAgLm1hcCgocm93KSA9PiAoe1xuICAgICAgICAgIGlkOiByb3cuaWQsXG4gICAgICAgICAgcHJvamVjdElkOiByb3cucHJvamVjdElkLFxuICAgICAgICAgIGFzc2V0SWQ6IHJvdy5hc3NldElkLFxuICAgICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICAgIGRhdGE6IHJvdy5kYXRhXG4gICAgICAgIH0pKVxuICAgIH0pKVxuICB9LFxuXG4gIG11dGF0aW9uczoge1xuICAgIGNyZWF0ZVByb2plY3Q6IG11dGF0aW9uKChjdHgsIG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGN0eC5kYi5wcm9qZWN0cy5pbnNlcnQoe1xuICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJVbnRpdGxlZFwiKSxcbiAgICAgICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCkpLFxuICAgICAgICBoZWlnaHQ6IFN0cmluZyhjaGVja0RpbShoZWlnaHQpKSxcbiAgICAgICAgbGF5ZXJPcmRlcjogXCJbXVwiLFxuICAgICAgICB0aHVtYjogXCJcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBpZDogcm93LmlkIH07XG4gICAgfSksXG5cbiAgICBjcmVhdGVQcm9qZWN0RnJvbUltYWdlOiBtdXRhdGlvbihcbiAgICAgIGFzeW5jIChcbiAgICAgICAgY3R4LFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxuICAgICAgICBsYXllck5hbWU6IHN0cmluZyxcbiAgICAgICAgc3JjOiBzdHJpbmcsXG4gICAgICAgIGRhdGFKc29uOiBzdHJpbmdcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3R4LmRiLnByb2plY3RzLmluc2VydCh7XG4gICAgICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJVbnRpdGxlZFwiKSxcbiAgICAgICAgICB3aWR0aDogU3RyaW5nKGNoZWNrRGltKHdpZHRoKSksXG4gICAgICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSksXG4gICAgICAgICAgbGF5ZXJPcmRlcjogXCJbXVwiLFxuICAgICAgICAgIHRodW1iOiBcIlwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IGluc2VydEFzc2V0KGN0eCwgcHJvamVjdC5pZCwgU3RyaW5nKHNyYyA/PyBcIlwiKSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGxheWVyID0gY3R4LmRiLmxheWVycy5pbnNlcnQoe1xuICAgICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXG4gICAgICAgICAgY2xpZW50S2V5OiBcIlwiLFxuICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobGF5ZXJOYW1lID8/IFwiXCIpLCBcIkltYWdlXCIpLFxuICAgICAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShkZWNvZGVUcmFuc2Zvcm0oU3RyaW5nKGRhdGFKc29uID8/IFwiXCIpKSlcbiAgICAgICAgfSk7XG4gICAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdC5pZCwgeyBsYXllck9yZGVyOiBKU09OLnN0cmluZ2lmeShbbGF5ZXIuaWRdKSB9KTtcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHByb2plY3QuaWQsIGxheWVySWQ6IGxheWVyLmlkLCBhc3NldElkOiBhc3NldC5pZCwgc3JjOiBhc3NldC5zcmMgfTtcbiAgICAgIH1cbiAgICApLFxuXG4gICAgcmVuYW1lUHJvamVjdDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIGlkKTtcbiAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUoaWQsIHsgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhuYW1lID8/IFwiXCIpLCBcIlVudGl0bGVkXCIpIH0pO1xuICAgIH0pLFxuXG4gICAgcmVzaXplUHJvamVjdDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgIHJlcXVpcmVQcm9qZWN0KGN0eCwgaWQpO1xuICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShpZCwgeyB3aWR0aDogU3RyaW5nKGNoZWNrRGltKHdpZHRoKSksIGhlaWdodDogU3RyaW5nKGNoZWNrRGltKGhlaWdodCkpIH0pO1xuICAgIH0pLFxuXG4gICAgc2V0UHJvamVjdFRodW1iOiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nLCB0aHVtYjogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIGlkKTtcbiAgICAgIGlmICh0eXBlb2YgdGh1bWIgIT09IFwic3RyaW5nXCIgfHwgdGh1bWIubGVuZ3RoID4gTUFYX1RIVU1CX0xFTkdUSCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKGlkLCB7IHRodW1iIH0pO1xuICAgIH0pLFxuXG4gICAgZGVsZXRlUHJvamVjdDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmVxdWlyZVByb2plY3QoY3R4LCBpZCk7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGN0eC5kYi5sYXllcnMud2hlcmUoXCJwcm9qZWN0SWRcIiwgaWQpLmFsbCgpKSB7XG4gICAgICAgIGN0eC5kYi5sYXllcnMuZGVsZXRlKGxheWVyLmlkKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgYXNzZXQgb2YgY3R4LmRiLmFzc2V0cy53aGVyZShcInByb2plY3RJZFwiLCBpZCkuYWxsKCkpIHtcbiAgICAgICAgY3R4LmRiLmFzc2V0cy5kZWxldGUoYXNzZXQuaWQpO1xuICAgICAgfVxuICAgICAgY3R4LmRiLnByb2plY3RzLmRlbGV0ZShpZCk7XG4gICAgfSksXG5cbiAgICBhZGRMYXllcjogbXV0YXRpb24oXG4gICAgICBhc3luYyAoXG4gICAgICAgIGN0eCxcbiAgICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICAgIGNsaWVudEtleTogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGRhdGFKc29uOiBzdHJpbmcsXG4gICAgICAgIGFzc2V0OiB7IGFzc2V0SWQ/OiBzdHJpbmc7IHNyYz86IHN0cmluZzsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHJlcXVpcmVQcm9qZWN0KGN0eCwgcHJvamVjdElkKTtcbiAgICAgICAgaWYgKGNsaWVudEtleSkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gY3R4LmRiLmxheWVyc1xuICAgICAgICAgICAgLndoZXJlKFwib3duZXJJZFwiLCBjdHguYXV0aC51c2VySWQpXG4gICAgICAgICAgICAud2hlcmUoXCJjbGllbnRLZXlcIiwgY2xpZW50S2V5KVxuICAgICAgICAgICAgLmFsbCgpWzBdO1xuICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3R4LmRiLmFzc2V0cy5nZXQoU3RyaW5nKGV4aXN0aW5nLmFzc2V0SWQpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxheWVySWQ6IGV4aXN0aW5nLmlkLFxuICAgICAgICAgICAgICBhc3NldElkOiBleGlzdGluZy5hc3NldElkLFxuICAgICAgICAgICAgICBzcmM6IHJvdyA/IFN0cmluZyhyb3cuc3JjKSA6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0SWQgPSBhc3NldD8uYXNzZXRJZCA/PyBcIlwiO1xuICAgICAgICBsZXQgYXNzZXRTcmMgPSBcIlwiO1xuICAgICAgICBpZiAoYXNzZXRJZCkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gcmVxdWlyZUFzc2V0KGN0eCwgYXNzZXRJZCk7XG4gICAgICAgICAgYXNzZXRTcmMgPSBTdHJpbmcoZXhpc3Rpbmcuc3JjKTtcbiAgICAgICAgICBpZiAoZXhpc3RpbmcucHJvamVjdElkICE9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgIC8vIFJlLWhvbWUgc2hhcmVkIGFzc2V0cyBieSBjb3B5aW5nIHRoZSBVUkwgc28gcHJvamVjdCBkZWxldGlvbiBzdGF5cyBzaW1wbGUuXG4gICAgICAgICAgICBhc3NldElkID0gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICAgICAgc3JjOiBleGlzdGluZy5zcmMsXG4gICAgICAgICAgICAgIHdpZHRoOiBleGlzdGluZy53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBleGlzdGluZy5oZWlnaHRcbiAgICAgICAgICAgIH0pLmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgaW5zZXJ0QXNzZXQoXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgICAgICBTdHJpbmcoYXNzZXQ/LnNyYyA/PyBcIlwiKSxcbiAgICAgICAgICAgIGFzc2V0Py53aWR0aCA/PyAwLFxuICAgICAgICAgICAgYXNzZXQ/LmhlaWdodCA/PyAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhc3NldElkID0gY3JlYXRlZC5pZDtcbiAgICAgICAgICBhc3NldFNyYyA9IFN0cmluZyhjcmVhdGVkLnNyYyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXllciA9IGN0eC5kYi5sYXllcnMuaW5zZXJ0KHtcbiAgICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgICAgcHJvamVjdElkLFxuICAgICAgICAgIGFzc2V0SWQsXG4gICAgICAgICAgY2xpZW50S2V5OiBTdHJpbmcoY2xpZW50S2V5ID8/IFwiXCIpLFxuICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJJbWFnZVwiKSxcbiAgICAgICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0oZGVjb2RlVHJhbnNmb3JtKFN0cmluZyhkYXRhSnNvbiA/PyBcIlwiKSkpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcmRlciA9IGRlY29kZVN0cmluZ0FycmF5KFN0cmluZyhwcm9qZWN0LmxheWVyT3JkZXIpKTtcbiAgICAgICAgb3JkZXIucHVzaChsYXllci5pZCk7XG4gICAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdElkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSB9KTtcbiAgICAgICAgcmV0dXJuIHsgbGF5ZXJJZDogbGF5ZXIuaWQsIGFzc2V0SWQsIHNyYzogYXNzZXRTcmMgfTtcbiAgICAgIH1cbiAgICApLFxuXG4gICAgdXBkYXRlTGF5ZXI6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcsIGRhdGFKc29uOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcXVpcmVMYXllcihjdHgsIGlkKTtcbiAgICAgIGN0eC5kYi5sYXllcnMudXBkYXRlKGlkLCB7IGRhdGE6IGVuY29kZVRyYW5zZm9ybShkZWNvZGVUcmFuc2Zvcm0oU3RyaW5nKGRhdGFKc29uID8/IFwiXCIpKSkgfSk7XG4gICAgfSksXG5cbiAgICByZXBsYWNlTGF5ZXJBc3NldDogbXV0YXRpb24oYXN5bmMgKGN0eCwgaWQ6IHN0cmluZywgc3JjOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IHJlcXVpcmVMYXllcihjdHgsIGlkKTtcbiAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgaW5zZXJ0QXNzZXQoY3R4LCBTdHJpbmcobGF5ZXIucHJvamVjdElkKSwgU3RyaW5nKHNyYyA/PyBcIlwiKSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICBjdHguZGIubGF5ZXJzLnVwZGF0ZShpZCwgeyBhc3NldElkOiBhc3NldC5pZCB9KTtcbiAgICAgIHJldHVybiB7IGFzc2V0SWQ6IGFzc2V0LmlkLCBzcmM6IFN0cmluZyhhc3NldC5zcmMpIH07XG4gICAgfSksXG5cbiAgICByZW5hbWVMYXllcjogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlTGF5ZXIoY3R4LCBpZCk7XG4gICAgICBjdHguZGIubGF5ZXJzLnVwZGF0ZShpZCwgeyBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKG5hbWUgPz8gXCJcIiksIFwiSW1hZ2VcIikgfSk7XG4gICAgfSksXG5cbiAgICBkZWxldGVMYXllcjogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSByZXF1aXJlTGF5ZXIoY3R4LCBpZCk7XG4gICAgICBjdHguZGIubGF5ZXJzLmRlbGV0ZShpZCk7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3R4LmRiLnByb2plY3RzLmdldChTdHJpbmcobGF5ZXIucHJvamVjdElkKSk7XG4gICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBjb25zdCBvcmRlciA9IGRlY29kZVN0cmluZ0FycmF5KFN0cmluZyhwcm9qZWN0LmxheWVyT3JkZXIpKS5maWx0ZXIoKGxheWVySWQpID0+IGxheWVySWQgIT09IGlkKTtcbiAgICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShwcm9qZWN0LmlkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZSBhc3NldCBpcyBrZXB0OiBvdGhlciBsYXllcnMgbWF5IHJlZmVyZW5jZSBpdCBhbmQgdW5kbyBjYW4gcmVzdG9yZSBpdC5cbiAgICB9KSxcblxuICAgIHNldExheWVyT3JkZXI6IG11dGF0aW9uKChjdHgsIHByb2plY3RJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIHByb2plY3RJZCk7XG4gICAgICBzZXRPcmRlcihjdHgsIHByb2plY3RJZCwgQXJyYXkuaXNBcnJheShpZHMpID8gaWRzLm1hcChTdHJpbmcpIDogW10pO1xuICAgIH0pLFxuXG4gICAgLy8gUmVhZC1hcy1tdXRhdGlvbiBlc2NhcGUgaGF0Y2g6IHF1ZXJpZXMgY2Fubm90IHRha2UgYXJndW1lbnRzLCBhbmQgYXNzZXRcbiAgICAvLyBwYXlsb2FkcyBhcmUgdG9vIGxhcmdlIHRvIGxpdmUgaW4gYSBsaXZlIHF1ZXJ5IHJlc3VsdC5cbiAgICBnZXRBc3NldDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcmVxdWlyZUFzc2V0KGN0eCwgaWQpO1xuICAgICAgcmV0dXJuIHsgaWQ6IHJvdy5pZCwgc3JjOiByb3cuc3JjLCB3aWR0aDogTnVtYmVyKHJvdy53aWR0aCksIGhlaWdodDogTnVtYmVyKHJvdy5oZWlnaHQpIH07XG4gICAgfSksXG5cbiAgICAvLyBTaWduIGEgYnJvd3NlciBQVVQgdG8gUzMsIHRoZW4gY3JlYXRlIHRoZSBhc3NldCByb3cgcG9pbnRpbmcgYXQgQ2xvdWRGcm9udC5cbiAgICAvLyBMYXJnZSBpbWFnZXMgbmV2ZXIgZW50ZXIgTGFrZWJlZCBtdXRhdGlvbnMgYXMgZGF0YSBVUkxzLlxuICAgIHByZXBhcmVBc3NldFVwbG9hZDogbXV0YXRpb24oYXN5bmMgKGN0eCwgcHJvamVjdElkOiBzdHJpbmcsIGNvbnRlbnRUeXBlOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIHByb2plY3RJZCk7XG4gICAgICBpZiAoIWhhc0F3c0VudihjdHgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgQVdTIHNlcnZlciBlbnY7IGNhbm5vdCBwcmVwYXJlIHVwbG9hZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdXBsb2FkVXJsLCBwdWJsaWNVcmwgfSA9IGF3YWl0IGNyZWF0ZVByZXNpZ25lZFB1dChjdHgsIHByb2plY3RJZCwgU3RyaW5nKGNvbnRlbnRUeXBlID8/IFwiXCIpKTtcbiAgICAgIGNvbnN0IGFzc2V0ID0gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgc3JjOiBwdWJsaWNVcmwsXG4gICAgICAgIHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSxcbiAgICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgYXNzZXRJZDogYXNzZXQuaWQsIHVwbG9hZFVybCwgcHVibGljVXJsIH07XG4gICAgfSksXG5cbiAgICAvLyBDYW52YXMgb3BlcmF0aW9ucyBuZWVkIHBpeGVsIGRhdGEuIFByZWZlciByZXR1cm5pbmcgcmVtb3RlIFVSTHMgc28gdGhlXG4gICAgLy8gY2xpZW50IGNhbiBsb2FkIHdpdGggQ09SUyAoc2VydmVyIGJhc2U2NCBvZiBsYXJnZSBpbWFnZXMgZXhjZWVkcyBob3N0ZWQgbGltaXRzKS5cbiAgICBnZXRBc3NldFBhaW50OiBtdXRhdGlvbihhc3luYyAoY3R4LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSByZXF1aXJlQXNzZXQoY3R4LCBpZCk7XG4gICAgICBjb25zdCBzcmMgPSBTdHJpbmcocm93LnNyYyk7XG4gICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL1wiKSkgcmV0dXJuIHsgc3JjIH07XG4gICAgICAvLyBPbmx5IGlubGluZSB0aW55IHJlbW90ZSBhc3NldHM7IG90aGVyd2lzZSB0aGUgY2xpZW50IGxvYWRzIHRoZSBVUkwgZGlyZWN0bHkuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNyYyk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybiB7IHNyYyB9O1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpIHx8IFwiaW1hZ2UvcG5nXCI7XG4gICAgICAgIGlmICghY29udGVudFR5cGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSByZXR1cm4geyBzcmMgfTtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggPiBNQVhfUEFJTlRfQllURVMpIHJldHVybiB7IHNyYyB9O1xuICAgICAgICByZXR1cm4geyBzcmM6IGBkYXRhOiR7Y29udGVudFR5cGV9O2Jhc2U2NCwke2J5dGVzVG9CYXNlNjQoYnl0ZXMpfWAgfTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4geyBzcmMgfTtcbiAgICAgIH1cbiAgICB9KVxuICB9XG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUE0Rk0sU0FBVSxRQUFXLFlBQWE7QUFDdEMsU0FBTztBQUNUO0FBRU0sU0FBVSxNQUFlLFNBQXdDO0FBQ3JFLFNBQU87QUFDVDtBQUVNLFNBQVUsU0FDZCxTQUF3RDtBQUV4RCxTQUFPO0FBQ1Q7QUEwREEsU0FBUyxNQUFTLE1BQVk7QUFDNUIsU0FBTztJQUNMO0lBQ0EsY0FBYztJQUNkLFFBQVEsT0FBUTtBQUNkLGFBQU87UUFDTCxHQUFHO1FBQ0gsY0FBYzs7SUFFbEI7O0FBRUo7QUFFTSxTQUFVLE1BQU0sUUFBa0M7QUFDdEQsU0FBTztJQUNMLE1BQU07SUFDTjs7QUFFSjtBQUVNLFNBQVUsU0FBTTtBQUNwQixTQUFPLE1BQU0sUUFBUTtBQUN2Qjs7O0FDakxPLElBQU0saUJBQWlCO0FBQ3ZCLElBQU0sa0JBQWtCO0FBRXhCLElBQU0sY0FBYztBQUFBLEVBQ3pCO0FBQUEsRUFBVTtBQUFBLEVBQVk7QUFBQSxFQUFVO0FBQUEsRUFBVztBQUFBLEVBQVU7QUFBQSxFQUNyRDtBQUFBLEVBQWU7QUFBQSxFQUFjO0FBQUEsRUFBYztBQUFBLEVBQWM7QUFBQSxFQUFjO0FBQUEsRUFDdkU7QUFBQSxFQUFPO0FBQUEsRUFBYztBQUFBLEVBQVM7QUFDaEM7QUFnRkEsU0FBUyxPQUFPLE9BQWdCLFVBQTBCO0FBQ3hELFNBQU8sT0FBTyxVQUFVLFlBQVksT0FBTyxTQUFTLEtBQUssSUFBSSxRQUFRO0FBQ3ZFO0FBRU8sU0FBUyxNQUFNLE9BQWUsS0FBYSxLQUFxQjtBQUNyRSxT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
