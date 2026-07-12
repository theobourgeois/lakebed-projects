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
function endpoint(route, handler) {
  return {
    handler,
    kind: "endpoint",
    method: String(route?.method ?? "").toUpperCase(),
    path: String(route?.path ?? "")
  };
}
function response(body, { headers = {}, status = 200 } = {}) {
  return {
    body,
    headers,
    kind: "response",
    status
  };
}
function json(value, options = {}) {
  return response(JSON.stringify(value ?? null), {
    ...options,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...options.headers ?? {}
    }
  });
}
function text(value, options = {}) {
  return response(String(value ?? ""), {
    ...options,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      ...options.headers ?? {}
    }
  });
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
var MAX_INLINE_SRC_BYTES = 6e4;
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
  const text2 = sanitizeText(t.text);
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
    ...text2 ? { text: text2 } : {}
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
async function putObjectBytes(ctx, projectId, contentType, body) {
  const type = String(contentType || "").toLowerCase();
  if (!type.startsWith("image/")) throw new Error("Content type must be an image");
  if (body.byteLength < 1) throw new Error("Empty image body");
  if (body.byteLength > 12e6) throw new Error("Image is too large");
  const { accessKey, secretKey, bucket, region } = awsConfig(ctx);
  const key = objectKey(ctx.auth.userId, projectId, contentTypeExt(type));
  const host = `${bucket}.s3.${region}.amazonaws.com`;
  const uri = canonicalUri(key);
  const url = `https://${host}${uri}`;
  const { amzDate: amz, dateStamp } = amzDate(/* @__PURE__ */ new Date());
  const payloadHash = "UNSIGNED-PAYLOAD";
  const canonicalHeaders = `content-type:${type}
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
  ctx.log.info("Uploading image to S3", { key, bytes: body.byteLength, contentType: type });
  const response2 = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": type,
      "x-amz-content-sha256": payloadHash,
      "x-amz-date": amz,
      Authorization: authorization
    },
    body
  });
  if (!response2.ok) {
    const detail = await response2.text().catch(() => "");
    ctx.log.error("S3 upload failed", { status: response2.status, detail: detail.slice(0, 500), key });
    throw new Error(`S3 upload failed (${response2.status}): ${detail.slice(0, 200)}`);
  }
  const publicUrl = `${CLOUD_FRONT_URL}/${key}`;
  ctx.log.info("S3 upload ok", { url: publicUrl });
  return publicUrl;
}
async function uploadImageDataUrl(ctx, projectId, src) {
  const { contentType, body } = decodeDataUrl(src);
  if (body.byteLength > MAX_INLINE_SRC_BYTES) {
    throw new Error("Image is too large for server upload; use /assets/upload");
  }
  return putObjectBytes(ctx, projectId, contentType, body);
}

// lakebed-source:server/index.ts
var MAX_SRC_LENGTH = 12e6;
var MAX_THUMB_LENGTH = MAX_INLINE_SRC_BYTES;
var MAX_PAINT_BYTES = 4e4;
var MAX_UPLOAD_BYTES = 12e6;
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
        const response2 = await fetch(src);
        if (!response2.ok) return { src };
        const contentType = response2.headers.get("content-type") || "image/png";
        if (!contentType.toLowerCase().startsWith("image/")) return { src };
        const bytes = new Uint8Array(await response2.arrayBuffer());
        if (bytes.byteLength > MAX_PAINT_BYTES) return { src };
        return { src: `data:${contentType};base64,${bytesToBase64(bytes)}` };
      } catch {
        return { src };
      }
    })
  },
  endpoints: {
    // Same-origin binary upload — avoids S3 CORS and keeps large payloads out of mutations.
    uploadAsset: endpoint({ method: "POST", path: "/assets/upload" }, async (ctx, req) => {
      if (!ctx.auth?.userId) return text("Unauthorized", { status: 401 });
      if (!hasAwsEnv(ctx)) return text("AWS env not configured", { status: 503 });
      const projectId = String(req.query.get("projectId") ?? "");
      if (!projectId) return text("Missing projectId", { status: 400 });
      try {
        requireProject(ctx, projectId);
      } catch {
        return text("Project not found", { status: 404 });
      }
      const width = Number(req.query.get("width") ?? 0);
      const height = Number(req.query.get("height") ?? 0);
      const contentType = (req.headers.get("content-type") || "image/png").split(";")[0].trim().toLowerCase();
      if (!contentType.startsWith("image/")) return text("Content-Type must be an image", { status: 400 });
      const body = await req.bytes();
      if (body.byteLength < 1) return text("Empty body", { status: 400 });
      if (body.byteLength > MAX_UPLOAD_BYTES) return text("Image is too large", { status: 413 });
      try {
        const publicUrl = await putObjectBytes(ctx, projectId, contentType, body);
        const asset = ctx.db.assets.insert({
          ownerId: ctx.auth.userId,
          projectId,
          src: publicUrl,
          width: String(checkDim(width || 1)),
          height: String(checkDim(height || 1))
        });
        return json({ assetId: asset.id, publicUrl });
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        ctx.log.error("uploadAsset failed", { message });
        return text(message, { status: 502 });
      }
    })
  }
});
export {
  server_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS8zOTIzMmIxZDEzMDIyNTkzMmQxMDdiNThjM2NkZjY0NS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9zZXJ2ZXIudHMiLCAibGFrZWJlZC1zb3VyY2U6c2hhcmVkL3R5cGVzLnRzIiwgImxha2ViZWQtc291cmNlOnNlcnZlci9zMy50cyIsICJsYWtlYmVkLXNvdXJjZTpzZXJ2ZXIvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG4vKiogSG9zdGVkIExha2ViZWQgbWF4VmFsdWVCeXRlcyBpcyA2NTUzNiBcdTIwMTQgc3RheSB1bmRlciB0aGF0IGZvciBpbmxpbmUgYXNzZXQvdGh1bWIgc3RyaW5ncy4gKi9cbmV4cG9ydCBjb25zdCBNQVhfSU5MSU5FX1NSQ19CWVRFUyA9IDYwXzAwMDtcblxuZXhwb3J0IGNvbnN0IEJMRU5EX01PREVTID0gW1xuICBcIm5vcm1hbFwiLCBcIm11bHRpcGx5XCIsIFwic2NyZWVuXCIsIFwib3ZlcmxheVwiLCBcImRhcmtlblwiLCBcImxpZ2h0ZW5cIixcbiAgXCJjb2xvci1kb2RnZVwiLCBcImNvbG9yLWJ1cm5cIiwgXCJoYXJkLWxpZ2h0XCIsIFwic29mdC1saWdodFwiLCBcImRpZmZlcmVuY2VcIiwgXCJleGNsdXNpb25cIixcbiAgXCJodWVcIiwgXCJzYXR1cmF0aW9uXCIsIFwiY29sb3JcIiwgXCJsdW1pbm9zaXR5XCJcbl0gYXMgY29uc3Q7XG5leHBvcnQgdHlwZSBCbGVuZE1vZGUgPSAodHlwZW9mIEJMRU5EX01PREVTKVtudW1iZXJdO1xuXG5leHBvcnQgdHlwZSBMYXllclRyYW5zZm9ybSA9IHtcbiAgeDogbnVtYmVyO1xuICB5OiBudW1iZXI7XG4gIHc6IG51bWJlcjtcbiAgaDogbnVtYmVyO1xuICAvKiogRGVncmVlcywgY2xvY2t3aXNlLCBhYm91dCB0aGUgYm94IGNlbnRlci4gKi9cbiAgcm90YXRpb246IG51bWJlcjtcbiAgLyoqIDAuLjEgKi9cbiAgb3BhY2l0eTogbnVtYmVyO1xuICB2aXNpYmxlOiBib29sZWFuO1xuICBmbGlwWDogYm9vbGVhbjtcbiAgYmxlbmRNb2RlOiBCbGVuZE1vZGU7XG59O1xuXG5leHBvcnQgdHlwZSBUZXh0QWxpZ24gPSBcImxlZnRcIiB8IFwiY2VudGVyXCIgfCBcInJpZ2h0XCI7XG5cbmV4cG9ydCB0eXBlIFRleHRMYXllckRhdGEgPSB7XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZm9udEZhbWlseTogc3RyaW5nO1xuICBmb250U2l6ZTogbnVtYmVyO1xuICBmb250V2VpZ2h0OiBudW1iZXI7XG4gIGFsaWduOiBUZXh0QWxpZ247XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGxpbmVIZWlnaHQ6IG51bWJlcjtcbiAgLyoqIEludHJpbnNpYyByYXN0ZXIgZGltZW5zaW9ucyB1c2VkIHRvIHByZXNlcnZlIGxheWVyIHNjYWxlIGFjcm9zcyB0ZXh0IHJlcmVuZGVycy4gKi9cbiAgcmFzdGVyV2lkdGg/OiBudW1iZXI7XG4gIHJhc3RlckhlaWdodD86IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyRGF0YSA9IExheWVyVHJhbnNmb3JtICYgeyB0ZXh0PzogVGV4dExheWVyRGF0YSB9O1xuXG5leHBvcnQgdHlwZSBMYXllciA9IExheWVyRGF0YSAmIHtcbiAgaWQ6IHN0cmluZztcbiAgYXNzZXRJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG59O1xuXG4vKiogVGhlIGluLW1lbW9yeSBlZGl0aW5nIGRvY3VtZW50LiBsYXllcnNbMF0gaXMgdGhlIGJvdHRvbSBsYXllci4gKi9cbmV4cG9ydCB0eXBlIFByb2plY3REb2MgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxheWVyczogTGF5ZXJbXTtcbn07XG5cbmV4cG9ydCB0eXBlIFByb2plY3RNZXRhID0ge1xuICBpZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xuICBsYXllck9yZGVyOiBzdHJpbmdbXTtcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBMYXllclJvdyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgcHJvamVjdElkOiBzdHJpbmc7XG4gIGFzc2V0SWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBkYXRhOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9qZWN0VGh1bWIgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHRodW1iOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBBc3NldFBheWxvYWQgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIHNyYzogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFBhaW50QXNzZXRQYXlsb2FkID0geyBzcmM6IHN0cmluZyB9O1xuXG5mdW5jdGlvbiBmaW5pdGUodmFsdWU6IHVua25vd24sIGZhbGxiYWNrOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiICYmIE51bWJlci5pc0Zpbml0ZSh2YWx1ZSkgPyB2YWx1ZSA6IGZhbGxiYWNrO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2xhbXAodmFsdWU6IG51bWJlciwgbWluOiBudW1iZXIsIG1heDogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIE1hdGgubWluKG1heCwgTWF0aC5tYXgobWluLCB2YWx1ZSkpO1xufVxuXG5mdW5jdGlvbiBzYW5pdGl6ZVRleHQoaW5wdXQ6IFBhcnRpYWw8VGV4dExheWVyRGF0YT4gfCBudWxsIHwgdW5kZWZpbmVkKTogVGV4dExheWVyRGF0YSB8IHVuZGVmaW5lZCB7XG4gIGlmICghaW5wdXQgfHwgdHlwZW9mIGlucHV0LmNvbnRlbnQgIT09IFwic3RyaW5nXCIpIHJldHVybiB1bmRlZmluZWQ7XG4gIGNvbnN0IGFsaWduOiBUZXh0QWxpZ24gPSBpbnB1dC5hbGlnbiA9PT0gXCJjZW50ZXJcIiB8fCBpbnB1dC5hbGlnbiA9PT0gXCJyaWdodFwiID8gaW5wdXQuYWxpZ24gOiBcImxlZnRcIjtcbiAgY29uc3QgcmFzdGVyV2lkdGggPSBmaW5pdGUoaW5wdXQucmFzdGVyV2lkdGgsIDApO1xuICBjb25zdCByYXN0ZXJIZWlnaHQgPSBmaW5pdGUoaW5wdXQucmFzdGVySGVpZ2h0LCAwKTtcbiAgcmV0dXJuIHtcbiAgICBjb250ZW50OiBpbnB1dC5jb250ZW50LnNsaWNlKDAsIDQwMDApLFxuICAgIGZvbnRGYW1pbHk6IHR5cGVvZiBpbnB1dC5mb250RmFtaWx5ID09PSBcInN0cmluZ1wiID8gaW5wdXQuZm9udEZhbWlseS5zbGljZSgwLCA4MCkgOiBcIkludGVyXCIsXG4gICAgZm9udFNpemU6IGNsYW1wKGZpbml0ZShpbnB1dC5mb250U2l6ZSwgNDgpLCA2LCA1MDApLFxuICAgIGZvbnRXZWlnaHQ6IGNsYW1wKE1hdGgucm91bmQoZmluaXRlKGlucHV0LmZvbnRXZWlnaHQsIDQwMCkgLyAxMDApICogMTAwLCAxMDAsIDkwMCksXG4gICAgYWxpZ24sXG4gICAgY29sb3I6IHR5cGVvZiBpbnB1dC5jb2xvciA9PT0gXCJzdHJpbmdcIiAmJiAvXiNbMC05YS1mXXs2fSQvaS50ZXN0KGlucHV0LmNvbG9yKSA/IGlucHV0LmNvbG9yIDogXCIjMTExMTExXCIsXG4gICAgbGluZUhlaWdodDogY2xhbXAoZmluaXRlKGlucHV0LmxpbmVIZWlnaHQsIDEuMiksIDAuNiwgMyksXG4gICAgLi4uKHJhc3RlcldpZHRoID4gMCAmJiByYXN0ZXJIZWlnaHQgPiAwID8geyByYXN0ZXJXaWR0aCwgcmFzdGVySGVpZ2h0IH0gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVHJhbnNmb3JtKGlucHV0OiBQYXJ0aWFsPExheWVyRGF0YT4gfCBudWxsIHwgdW5kZWZpbmVkKTogTGF5ZXJEYXRhIHtcbiAgY29uc3QgdCA9IGlucHV0ID8/IHt9O1xuICBjb25zdCB0ZXh0ID0gc2FuaXRpemVUZXh0KHQudGV4dCk7XG4gIHJldHVybiB7XG4gICAgeDogZmluaXRlKHQueCwgMCksXG4gICAgeTogZmluaXRlKHQueSwgMCksXG4gICAgdzogTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIGZpbml0ZSh0LncsIE1JTl9MQVlFUl9TSVpFKSksXG4gICAgaDogTWF0aC5tYXgoTUlOX0xBWUVSX1NJWkUsIGZpbml0ZSh0LmgsIE1JTl9MQVlFUl9TSVpFKSksXG4gICAgcm90YXRpb246IGZpbml0ZSh0LnJvdGF0aW9uLCAwKSxcbiAgICBvcGFjaXR5OiBjbGFtcChmaW5pdGUodC5vcGFjaXR5LCAxKSwgMCwgMSksXG4gICAgdmlzaWJsZTogdHlwZW9mIHQudmlzaWJsZSA9PT0gXCJib29sZWFuXCIgPyB0LnZpc2libGUgOiB0cnVlLFxuICAgIGZsaXBYOiB0eXBlb2YgdC5mbGlwWCA9PT0gXCJib29sZWFuXCIgPyB0LmZsaXBYIDogZmFsc2UsXG4gICAgYmxlbmRNb2RlOiBCTEVORF9NT0RFUy5pbmNsdWRlcyh0LmJsZW5kTW9kZSBhcyBCbGVuZE1vZGUpID8gKHQuYmxlbmRNb2RlIGFzIEJsZW5kTW9kZSkgOiBcIm5vcm1hbFwiLFxuICAgIC4uLih0ZXh0ID8geyB0ZXh0IH0gOiB7fSlcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRyYW5zZm9ybSh0OiBMYXllckRhdGEpOiBzdHJpbmcge1xuICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoc2FuaXRpemVUcmFuc2Zvcm0odCkpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlVHJhbnNmb3JtKHJhdzogc3RyaW5nKTogTGF5ZXJEYXRhIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gc2FuaXRpemVUcmFuc2Zvcm0oSlNPTi5wYXJzZShyYXcpIGFzIFBhcnRpYWw8TGF5ZXJEYXRhPik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVRyYW5zZm9ybShudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nQXJyYXkocmF3OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpIGFzIHVua25vd247XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZC5maWx0ZXIoKHYpOiB2IGlzIHN0cmluZyA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikgOiBbXTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cbiIsICIvLyBNaW5pbWFsIFMzIGhlbHBlcnMgdmlhIFNpZ25hdHVyZSBWNCAobm8gQVdTIFNESykuXG4vLyBMYXJnZSBpbWFnZXMgUE9TVCB0byAvYXNzZXRzL3VwbG9hZDsgdGhlIHNlcnZlciBQdXRPYmplY3RzIHdpdGhcbi8vIFVOU0lHTkVELVBBWUxPQUQuIFRpbnkgYXNzZXRzIG1heSBzdGlsbCBiZSBzdG9yZWQgYXMgaW5saW5lIGRhdGEgVVJMcy5cblxuaW1wb3J0IHR5cGUgeyBTZXJ2ZXJDb250ZXh0IH0gZnJvbSBcImxha2ViZWQvc2VydmVyXCI7XG5pbXBvcnQgeyBNQVhfSU5MSU5FX1NSQ19CWVRFUyB9IGZyb20gXCIuLi9zaGFyZWQvdHlwZXNcIjtcblxuZXhwb3J0IHsgTUFYX0lOTElORV9TUkNfQllURVMgfTtcbmV4cG9ydCBjb25zdCBDTE9VRF9GUk9OVF9VUkwgPSBcImh0dHBzOi8vZDJwNnE5MTdtd3c0eWYuY2xvdWRmcm9udC5uZXRcIjtcbmNvbnN0IEtFWV9QUkVGSVggPSBcImltYWdlLWVkaXRvclwiO1xuXG5jb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnYoY3R4OiBTZXJ2ZXJDb250ZXh0LCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlID0gY3R4LmVudltrZXldO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzZXJ2ZXIgZW52OiAke2tleX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvSGV4KGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICByZXR1cm4gWy4uLm5ldyBVaW50OEFycmF5KGJ1ZmZlcildLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKFwiXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaGEyNTZIZXgoZGF0YTogVWludDhBcnJheSB8IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGJ5dGVzID0gdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgPyBlbmNvZGVyLmVuY29kZShkYXRhKSA6IGRhdGE7XG4gIHJldHVybiB0b0hleChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgYnl0ZXMpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaG1hYyhrZXk6IEFycmF5QnVmZmVyIHwgVWludDhBcnJheSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcInJhd1wiLCBrZXksIHsgbmFtZTogXCJITUFDXCIsIGhhc2g6IFwiU0hBLTI1NlwiIH0sIGZhbHNlLCBbXG4gICAgXCJzaWduXCJcbiAgXSk7XG4gIHJldHVybiBjcnlwdG8uc3VidGxlLnNpZ24oXCJITUFDXCIsIGNyeXB0b0tleSwgZW5jb2Rlci5lbmNvZGUoZGF0YSkpO1xufVxuXG4vKiogQVdTIFNpZ1Y0IFVSSSBlbmNvZGUgKHBhdGggc2VnbWVudCAvIHF1ZXJ5KS4gKi9cbmZ1bmN0aW9uIHVyaUVuY29kZSh2YWx1ZTogc3RyaW5nLCBlbmNvZGVTbGFzaCA9IHRydWUpOiBzdHJpbmcge1xuICBjb25zdCBlbmNvZGVkID0gZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKS5yZXBsYWNlKC9bIScoKSpdL2csIChjaCkgPT4gYCUke2NoLmNoYXJDb2RlQXQoMCkudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCl9YCk7XG4gIHJldHVybiBlbmNvZGVTbGFzaCA/IGVuY29kZWQgOiBlbmNvZGVkLnJlcGxhY2UoLyUyRi9naSwgXCIvXCIpO1xufVxuXG4vKiogS2VlcCBTMyBrZXlzIFVSTC1zYWZlIFx1MjAxNCBndWVzdCBpZHMgbGlrZSBcImd1ZXN0OmxvY2FsXCIgYnJlYWsgdW5zaWduZWQgcGF0aHMuICovXG5mdW5jdGlvbiBzYWZlU2VnbWVudCh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgY29uc3QgY2xlYW5lZCA9IFN0cmluZyh2YWx1ZSlcbiAgICAucmVwbGFjZSgvW15hLXpBLVowLTkuXy1dKy9nLCBcIl9cIilcbiAgICAucmVwbGFjZSgvXysvZywgXCJfXCIpXG4gICAgLnJlcGxhY2UoL15ffF8kL2csIFwiXCIpXG4gICAgLnNsaWNlKDAsIDgwKTtcbiAgcmV0dXJuIGNsZWFuZWQgfHwgXCJ4XCI7XG59XG5cbmZ1bmN0aW9uIGNvbnRlbnRUeXBlRXh0KGNvbnRlbnRUeXBlOiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCB0eXBlID0gY29udGVudFR5cGUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IHR5cGUgPT09IFwiaW1hZ2UvanBnXCIpIHJldHVybiBcImpwZ1wiO1xuICBpZiAodHlwZSA9PT0gXCJpbWFnZS93ZWJwXCIpIHJldHVybiBcIndlYnBcIjtcbiAgaWYgKHR5cGUgPT09IFwiaW1hZ2UvZ2lmXCIpIHJldHVybiBcImdpZlwiO1xuICByZXR1cm4gXCJwbmdcIjtcbn1cblxuZnVuY3Rpb24gZGVjb2RlRGF0YVVybChzcmM6IHN0cmluZyk6IHsgY29udGVudFR5cGU6IHN0cmluZzsgYm9keTogVWludDhBcnJheTsgZXh0OiBzdHJpbmcgfSB7XG4gIGNvbnN0IG1hdGNoID0gL15kYXRhOihpbWFnZVxcL1thLXowLTkuKy1dKyk7YmFzZTY0LChbXFxzXFxTXSspJC9pLmV4ZWMoc3JjKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIG11c3QgYmUgYSBkYXRhIFVSTFwiKTtcbiAgfVxuICBjb25zdCBjb250ZW50VHlwZSA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gIGNvbnN0IGJpbmFyeSA9IGF0b2IobWF0Y2hbMl0ucmVwbGFjZSgvXFxzL2csIFwiXCIpKTtcbiAgY29uc3QgYm9keSA9IG5ldyBVaW50OEFycmF5KGJpbmFyeS5sZW5ndGgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeS5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGJvZHlbaV0gPSBiaW5hcnkuY2hhckNvZGVBdChpKTtcbiAgfVxuICByZXR1cm4geyBjb250ZW50VHlwZSwgYm9keSwgZXh0OiBjb250ZW50VHlwZUV4dChjb250ZW50VHlwZSkgfTtcbn1cblxuZnVuY3Rpb24gYW16RGF0ZShub3c6IERhdGUpOiB7IGFtekRhdGU6IHN0cmluZzsgZGF0ZVN0YW1wOiBzdHJpbmcgfSB7XG4gIGNvbnN0IGlzbyA9IG5vdy50b0lTT1N0cmluZygpLnJlcGxhY2UoL1stOl0vZywgXCJcIikucmVwbGFjZSgvXFwuXFxkezN9WiQvLCBcIlpcIik7XG4gIHJldHVybiB7IGFtekRhdGU6IGlzbywgZGF0ZVN0YW1wOiBpc28uc2xpY2UoMCwgOCkgfTtcbn1cblxuZnVuY3Rpb24gb2JqZWN0S2V5KHVzZXJJZDogc3RyaW5nLCBwcm9qZWN0SWQ6IHN0cmluZywgZXh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICBjb25zdCBpZCA9XG4gICAgdHlwZW9mIGNyeXB0by5yYW5kb21VVUlEID09PSBcImZ1bmN0aW9uXCJcbiAgICAgID8gY3J5cHRvLnJhbmRvbVVVSUQoKVxuICAgICAgOiBgJHtEYXRlLm5vdygpLnRvU3RyaW5nKDM2KX1fJHtNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zbGljZSgyLCAxMCl9YDtcbiAgcmV0dXJuIGAke0tFWV9QUkVGSVh9LyR7c2FmZVNlZ21lbnQodXNlcklkKX0vJHtzYWZlU2VnbWVudChwcm9qZWN0SWQpfS8ke2lkfS4ke2V4dH1gO1xufVxuXG5mdW5jdGlvbiBjYW5vbmljYWxVcmkoa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gYC8ke2tleS5zcGxpdChcIi9cIikubWFwKChwYXJ0KSA9PiB1cmlFbmNvZGUocGFydCkpLmpvaW4oXCIvXCIpfWA7XG59XG5cbmZ1bmN0aW9uIGF3c0NvbmZpZyhjdHg6IFNlcnZlckNvbnRleHQpIHtcbiAgY29uc3QgYWNjZXNzS2V5ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX0FDQ0VTU19LRVlfSURcIik7XG4gIGNvbnN0IHNlY3JldEtleSA9IHJlcXVpcmVFbnYoY3R4LCBcIkFXU19TRUNSRVRfQUNDRVNTX0tFWVwiKTtcbiAgY29uc3QgYnVja2V0ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX0JVQ0tFVFwiKTtcbiAgY29uc3QgcmVnaW9uID0gdHlwZW9mIGN0eC5lbnYuQVdTX1JFR0lPTiA9PT0gXCJzdHJpbmdcIiAmJiBjdHguZW52LkFXU19SRUdJT04gPyBjdHguZW52LkFXU19SRUdJT04gOiBcInVzLWVhc3QtMlwiO1xuICByZXR1cm4geyBhY2Nlc3NLZXksIHNlY3JldEtleSwgYnVja2V0LCByZWdpb24gfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0F3c0VudihjdHg6IFNlcnZlckNvbnRleHQpOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgY3R4LmVudi5BV1NfQUNDRVNTX0tFWV9JRCA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICEhY3R4LmVudi5BV1NfQUNDRVNTX0tFWV9JRCAmJlxuICAgIHR5cGVvZiBjdHguZW52LkFXU19TRUNSRVRfQUNDRVNTX0tFWSA9PT0gXCJzdHJpbmdcIiAmJlxuICAgICEhY3R4LmVudi5BV1NfU0VDUkVUX0FDQ0VTU19LRVkgJiZcbiAgICB0eXBlb2YgY3R4LmVudi5BV1NfQlVDS0VUID09PSBcInN0cmluZ1wiICYmXG4gICAgISFjdHguZW52LkFXU19CVUNLRVRcbiAgKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gc2lnbmluZ0tleShzZWNyZXRLZXk6IHN0cmluZywgZGF0ZVN0YW1wOiBzdHJpbmcsIHJlZ2lvbjogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICBjb25zdCBrRGF0ZSA9IGF3YWl0IGhtYWMoZW5jb2Rlci5lbmNvZGUoYEFXUzQke3NlY3JldEtleX1gKSwgZGF0ZVN0YW1wKTtcbiAgY29uc3Qga1JlZ2lvbiA9IGF3YWl0IGhtYWMoa0RhdGUsIHJlZ2lvbik7XG4gIGNvbnN0IGtTZXJ2aWNlID0gYXdhaXQgaG1hYyhrUmVnaW9uLCBcInMzXCIpO1xuICByZXR1cm4gaG1hYyhrU2VydmljZSwgXCJhd3M0X3JlcXVlc3RcIik7XG59XG5cbi8qKiBCcm93c2VyIHVwbG9hZHMgZGlyZWN0bHkgdG8gUzM7IHNlcnZlciBvbmx5IHNpZ25zIChubyBpbWFnZSBieXRlcyBvbiBMYWtlYmVkKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcmVzaWduZWRQdXQoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIGNvbnRlbnRUeXBlOiBzdHJpbmdcbik6IFByb21pc2U8eyB1cGxvYWRVcmw6IHN0cmluZzsgcHVibGljVXJsOiBzdHJpbmc7IGtleTogc3RyaW5nIH0+IHtcbiAgY29uc3QgdHlwZSA9IFN0cmluZyhjb250ZW50VHlwZSB8fCBcIlwiKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAoIXR5cGUuc3RhcnRzV2l0aChcImltYWdlL1wiKSkgdGhyb3cgbmV3IEVycm9yKFwiQ29udGVudCB0eXBlIG11c3QgYmUgYW4gaW1hZ2VcIik7XG5cbiAgY29uc3QgeyBhY2Nlc3NLZXksIHNlY3JldEtleSwgYnVja2V0LCByZWdpb24gfSA9IGF3c0NvbmZpZyhjdHgpO1xuICBjb25zdCBrZXkgPSBvYmplY3RLZXkoY3R4LmF1dGgudXNlcklkLCBwcm9qZWN0SWQsIGNvbnRlbnRUeXBlRXh0KHR5cGUpKTtcbiAgY29uc3QgaG9zdCA9IGAke2J1Y2tldH0uczMuJHtyZWdpb259LmFtYXpvbmF3cy5jb21gO1xuICBjb25zdCB1cmkgPSBjYW5vbmljYWxVcmkoa2V5KTtcbiAgY29uc3QgeyBhbXpEYXRlOiBhbXosIGRhdGVTdGFtcCB9ID0gYW16RGF0ZShuZXcgRGF0ZSgpKTtcbiAgY29uc3QgZXhwaXJlcyA9IDkwMDtcbiAgY29uc3QgY3JlZGVudGlhbCA9IGAke2FjY2Vzc0tleX0vJHtkYXRlU3RhbXB9LyR7cmVnaW9ufS9zMy9hd3M0X3JlcXVlc3RgO1xuXG4gIGNvbnN0IHF1ZXJ5OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge1xuICAgIFwiWC1BbXotQWxnb3JpdGhtXCI6IFwiQVdTNC1ITUFDLVNIQTI1NlwiLFxuICAgIFwiWC1BbXotQ3JlZGVudGlhbFwiOiBjcmVkZW50aWFsLFxuICAgIFwiWC1BbXotRGF0ZVwiOiBhbXosXG4gICAgXCJYLUFtei1FeHBpcmVzXCI6IFN0cmluZyhleHBpcmVzKSxcbiAgICBcIlgtQW16LVNpZ25lZEhlYWRlcnNcIjogXCJjb250ZW50LXR5cGU7aG9zdFwiLFxuICAgIFwiWC1BbXotQ29udGVudC1TaGEyNTZcIjogXCJVTlNJR05FRC1QQVlMT0FEXCJcbiAgfTtcbiAgY29uc3QgY2Fub25pY2FsUXVlcnkgPSBPYmplY3Qua2V5cyhxdWVyeSlcbiAgICAuc29ydCgpXG4gICAgLm1hcCgoaykgPT4gYCR7dXJpRW5jb2RlKGspfT0ke3VyaUVuY29kZShxdWVyeVtrXSl9YClcbiAgICAuam9pbihcIiZcIik7XG5cbiAgY29uc3QgY2Fub25pY2FsSGVhZGVycyA9IGBjb250ZW50LXR5cGU6JHt0eXBlfVxcbmhvc3Q6JHtob3N0fVxcbmA7XG4gIGNvbnN0IGNhbm9uaWNhbFJlcXVlc3QgPSBbXG4gICAgXCJQVVRcIixcbiAgICB1cmksXG4gICAgY2Fub25pY2FsUXVlcnksXG4gICAgY2Fub25pY2FsSGVhZGVycyxcbiAgICBcImNvbnRlbnQtdHlwZTtob3N0XCIsXG4gICAgXCJVTlNJR05FRC1QQVlMT0FEXCJcbiAgXS5qb2luKFwiXFxuXCIpO1xuXG4gIGNvbnN0IGNyZWRlbnRpYWxTY29wZSA9IGAke2RhdGVTdGFtcH0vJHtyZWdpb259L3MzL2F3czRfcmVxdWVzdGA7XG4gIGNvbnN0IHN0cmluZ1RvU2lnbiA9IFtcIkFXUzQtSE1BQy1TSEEyNTZcIiwgYW16LCBjcmVkZW50aWFsU2NvcGUsIGF3YWl0IHNoYTI1NkhleChjYW5vbmljYWxSZXF1ZXN0KV0uam9pbihcbiAgICBcIlxcblwiXG4gICk7XG4gIGNvbnN0IHNpZ25hdHVyZSA9IHRvSGV4KGF3YWl0IGhtYWMoYXdhaXQgc2lnbmluZ0tleShzZWNyZXRLZXksIGRhdGVTdGFtcCwgcmVnaW9uKSwgc3RyaW5nVG9TaWduKSk7XG4gIGNvbnN0IHVwbG9hZFVybCA9IGBodHRwczovLyR7aG9zdH0ke3VyaX0/JHtjYW5vbmljYWxRdWVyeX0mWC1BbXotU2lnbmF0dXJlPSR7c2lnbmF0dXJlfWA7XG4gIHJldHVybiB7IHVwbG9hZFVybCwgcHVibGljVXJsOiBgJHtDTE9VRF9GUk9OVF9VUkx9LyR7a2V5fWAsIGtleSB9O1xufVxuXG4vKiogU2VydmVyLXNpZGUgUHV0T2JqZWN0IHdpdGggVU5TSUdORUQtUEFZTE9BRCAobm8gYm9keSBoYXNoIFx1MjAxNCBzYWZlIGZvciBsYXJnZSBmaWxlcykuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcHV0T2JqZWN0Qnl0ZXMoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIGNvbnRlbnRUeXBlOiBzdHJpbmcsXG4gIGJvZHk6IFVpbnQ4QXJyYXlcbik6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IHR5cGUgPSBTdHJpbmcoY29udGVudFR5cGUgfHwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgaWYgKCF0eXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHRocm93IG5ldyBFcnJvcihcIkNvbnRlbnQgdHlwZSBtdXN0IGJlIGFuIGltYWdlXCIpO1xuICBpZiAoYm9keS5ieXRlTGVuZ3RoIDwgMSkgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgaW1hZ2UgYm9keVwiKTtcbiAgaWYgKGJvZHkuYnl0ZUxlbmd0aCA+IDEyXzAwMF8wMDApIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZVwiKTtcblxuICBjb25zdCB7IGFjY2Vzc0tleSwgc2VjcmV0S2V5LCBidWNrZXQsIHJlZ2lvbiB9ID0gYXdzQ29uZmlnKGN0eCk7XG4gIGNvbnN0IGtleSA9IG9iamVjdEtleShjdHguYXV0aC51c2VySWQsIHByb2plY3RJZCwgY29udGVudFR5cGVFeHQodHlwZSkpO1xuICBjb25zdCBob3N0ID0gYCR7YnVja2V0fS5zMy4ke3JlZ2lvbn0uYW1hem9uYXdzLmNvbWA7XG4gIGNvbnN0IHVyaSA9IGNhbm9uaWNhbFVyaShrZXkpO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly8ke2hvc3R9JHt1cml9YDtcbiAgY29uc3QgeyBhbXpEYXRlOiBhbXosIGRhdGVTdGFtcCB9ID0gYW16RGF0ZShuZXcgRGF0ZSgpKTtcbiAgY29uc3QgcGF5bG9hZEhhc2ggPSBcIlVOU0lHTkVELVBBWUxPQURcIjtcblxuICBjb25zdCBjYW5vbmljYWxIZWFkZXJzID1cbiAgICBgY29udGVudC10eXBlOiR7dHlwZX1cXG5gICtcbiAgICBgaG9zdDoke2hvc3R9XFxuYCArXG4gICAgYHgtYW16LWNvbnRlbnQtc2hhMjU2OiR7cGF5bG9hZEhhc2h9XFxuYCArXG4gICAgYHgtYW16LWRhdGU6JHthbXp9XFxuYDtcbiAgY29uc3Qgc2lnbmVkSGVhZGVycyA9IFwiY29udGVudC10eXBlO2hvc3Q7eC1hbXotY29udGVudC1zaGEyNTY7eC1hbXotZGF0ZVwiO1xuICBjb25zdCBjYW5vbmljYWxSZXF1ZXN0ID0gW1wiUFVUXCIsIHVyaSwgXCJcIiwgY2Fub25pY2FsSGVhZGVycywgc2lnbmVkSGVhZGVycywgcGF5bG9hZEhhc2hdLmpvaW4oXCJcXG5cIik7XG5cbiAgY29uc3QgY3JlZGVudGlhbFNjb3BlID0gYCR7ZGF0ZVN0YW1wfS8ke3JlZ2lvbn0vczMvYXdzNF9yZXF1ZXN0YDtcbiAgY29uc3Qgc3RyaW5nVG9TaWduID0gW1wiQVdTNC1ITUFDLVNIQTI1NlwiLCBhbXosIGNyZWRlbnRpYWxTY29wZSwgYXdhaXQgc2hhMjU2SGV4KGNhbm9uaWNhbFJlcXVlc3QpXS5qb2luKFxuICAgIFwiXFxuXCJcbiAgKTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gdG9IZXgoYXdhaXQgaG1hYyhhd2FpdCBzaWduaW5nS2V5KHNlY3JldEtleSwgZGF0ZVN0YW1wLCByZWdpb24pLCBzdHJpbmdUb1NpZ24pKTtcbiAgY29uc3QgYXV0aG9yaXphdGlvbiA9XG4gICAgYEFXUzQtSE1BQy1TSEEyNTYgQ3JlZGVudGlhbD0ke2FjY2Vzc0tleX0vJHtjcmVkZW50aWFsU2NvcGV9LCBgICtcbiAgICBgU2lnbmVkSGVhZGVycz0ke3NpZ25lZEhlYWRlcnN9LCBTaWduYXR1cmU9JHtzaWduYXR1cmV9YDtcblxuICBjdHgubG9nLmluZm8oXCJVcGxvYWRpbmcgaW1hZ2UgdG8gUzNcIiwgeyBrZXksIGJ5dGVzOiBib2R5LmJ5dGVMZW5ndGgsIGNvbnRlbnRUeXBlOiB0eXBlIH0pO1xuXG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgbWV0aG9kOiBcIlBVVFwiLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IHR5cGUsXG4gICAgICBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI6IHBheWxvYWRIYXNoLFxuICAgICAgXCJ4LWFtei1kYXRlXCI6IGFteixcbiAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25cbiAgICB9LFxuICAgIGJvZHlcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGRldGFpbCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIlwiKTtcbiAgICBjdHgubG9nLmVycm9yKFwiUzMgdXBsb2FkIGZhaWxlZFwiLCB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLCBkZXRhaWw6IGRldGFpbC5zbGljZSgwLCA1MDApLCBrZXkgfSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTMyB1cGxvYWQgZmFpbGVkICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2RldGFpbC5zbGljZSgwLCAyMDApfWApO1xuICB9XG5cbiAgY29uc3QgcHVibGljVXJsID0gYCR7Q0xPVURfRlJPTlRfVVJMfS8ke2tleX1gO1xuICBjdHgubG9nLmluZm8oXCJTMyB1cGxvYWQgb2tcIiwgeyB1cmw6IHB1YmxpY1VybCB9KTtcbiAgcmV0dXJuIHB1YmxpY1VybDtcbn1cblxuLyoqIFNlcnZlci1zaWRlIHVwbG9hZCBmb3Igc21hbGwgZGF0YSBVUkxzIG9ubHkgKGJsYW5rIGxheWVycyAvIHRpbnkgaW1hZ2VzKS4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRJbWFnZURhdGFVcmwoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCB7IGNvbnRlbnRUeXBlLCBib2R5IH0gPSBkZWNvZGVEYXRhVXJsKHNyYyk7XG4gIGlmIChib2R5LmJ5dGVMZW5ndGggPiBNQVhfSU5MSU5FX1NSQ19CWVRFUykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZSBmb3Igc2VydmVyIHVwbG9hZDsgdXNlIC9hc3NldHMvdXBsb2FkXCIpO1xuICB9XG4gIHJldHVybiBwdXRPYmplY3RCeXRlcyhjdHgsIHByb2plY3RJZCwgY29udGVudFR5cGUsIGJvZHkpO1xufVxuXG4iLCAiaW1wb3J0IHsgY2Fwc3VsZSwgZW5kcG9pbnQsIGpzb24sIG11dGF0aW9uLCBxdWVyeSwgc3RyaW5nLCB0YWJsZSwgdGV4dCB9IGZyb20gXCJsYWtlYmVkL3NlcnZlclwiO1xuaW1wb3J0IHR5cGUgeyBTZXJ2ZXJDb250ZXh0IH0gZnJvbSBcImxha2ViZWQvc2VydmVyXCI7XG5pbXBvcnQge1xuICBNQVhfUFJPSkVDVF9ESU0sXG4gIE1BWF9JTkxJTkVfU1JDX0JZVEVTLFxuICBjbGVhbk5hbWUsXG4gIGNsYW1wLFxuICBkZWNvZGVTdHJpbmdBcnJheSxcbiAgZGVjb2RlVHJhbnNmb3JtLFxuICBlbmNvZGVUcmFuc2Zvcm1cbn0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHtcbiAgdXBsb2FkSW1hZ2VEYXRhVXJsLFxuICBjcmVhdGVQcmVzaWduZWRQdXQsXG4gIGhhc0F3c0VudixcbiAgcHV0T2JqZWN0Qnl0ZXNcbn0gZnJvbSBcIi4vczNcIjtcblxuLy8gVGlueSBhc3NldHMgY2FuIHRyYXZlbCBhcyBkYXRhIFVSTHMgaW4gbXV0YXRpb25zLiBMYXJnZSBpbWFnZXMgUE9TVCB0b1xuLy8gL2Fzc2V0cy91cGxvYWQgKHNhbWUtb3JpZ2luKSBzbyB0aGUgc2VydmVyIGNhbiBQdXRPYmplY3Qgd2l0aG91dCBicm93c2VyIENPUlMuXG5jb25zdCBNQVhfU1JDX0xFTkdUSCA9IDEyXzAwMF8wMDA7XG5jb25zdCBNQVhfVEhVTUJfTEVOR1RIID0gTUFYX0lOTElORV9TUkNfQllURVM7XG5jb25zdCBNQVhfUEFJTlRfQllURVMgPSA0MF8wMDA7XG5jb25zdCBNQVhfVVBMT0FEX0JZVEVTID0gMTJfMDAwXzAwMDtcblxuZnVuY3Rpb24gYnl0ZXNUb0Jhc2U2NChieXRlczogVWludDhBcnJheSk6IHN0cmluZyB7XG4gIGxldCBiaW5hcnkgPSBcIlwiO1xuICBjb25zdCBjaHVuayA9IDB4ODAwMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlcy5sZW5ndGg7IGkgKz0gY2h1bmspIHtcbiAgICBiaW5hcnkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSguLi5ieXRlcy5zdWJhcnJheShpLCBNYXRoLm1pbihpICsgY2h1bmssIGJ5dGVzLmxlbmd0aCkpKTtcbiAgfVxuICByZXR1cm4gYnRvYShiaW5hcnkpO1xufVxuXG5mdW5jdGlvbiByZXF1aXJlUHJvamVjdChjdHg6IFNlcnZlckNvbnRleHQsIGlkOiBzdHJpbmcpIHtcbiAgY29uc3Qgcm93ID0gY3R4LmRiLnByb2plY3RzLmdldChpZCk7XG4gIGlmICghcm93IHx8IHJvdy5vd25lcklkICE9PSBjdHguYXV0aC51c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlTGF5ZXIoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5sYXllcnMuZ2V0KGlkKTtcbiAgaWYgKCFyb3cgfHwgcm93Lm93bmVySWQgIT09IGN0eC5hdXRoLnVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxheWVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlQXNzZXQoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5hc3NldHMuZ2V0KGlkKTtcbiAgaWYgKCFyb3cgfHwgcm93Lm93bmVySWQgIT09IGN0eC5hdXRoLnVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiBjaGVja0RhdGFVcmwoc3JjOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwic3RyaW5nXCIgfHwgIXNyYy5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9cIikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBtdXN0IGJlIGEgZGF0YSBVUkxcIik7XG4gIH1cbiAgaWYgKHNyYy5sZW5ndGggPiBNQVhfU1JDX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0RpbSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGltZW5zaW9uXCIpO1xuICB9XG4gIHJldHVybiBjbGFtcChNYXRoLnJvdW5kKHZhbHVlKSwgMSwgTUFYX1BST0pFQ1RfRElNKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0QXNzZXQoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlclxuKSB7XG4gIC8vIENsaWVudCBhbHJlYWR5IHVwbG9hZGVkIHZpYSBwcmVzaWduZWQgUFVUIFx1MjAxNCBvbmx5IHN0b3JlIHRoZSBzaG9ydCBVUkwuXG4gIGlmICgvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHNyYykpIHtcbiAgICBjb25zdCBleGlzdGluZyA9IGN0eC5kYi5hc3NldHNcbiAgICAgIC53aGVyZShcInByb2plY3RJZFwiLCBwcm9qZWN0SWQpXG4gICAgICAuYWxsKClcbiAgICAgIC5maW5kKChyb3cpID0+IHJvdy5vd25lcklkID09PSBjdHguYXV0aC51c2VySWQgJiYgcm93LnNyYyA9PT0gc3JjKTtcbiAgICBpZiAoZXhpc3RpbmcpIHJldHVybiBleGlzdGluZztcbiAgICByZXR1cm4gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgcHJvamVjdElkLFxuICAgICAgc3JjLFxuICAgICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCkpLFxuICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSlcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRGF0YVVybChzcmMpO1xuICBpZiAoc3JjLmxlbmd0aCA+IE1BWF9JTkxJTkVfU1JDX0JZVEVTKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgXCJJbWFnZSBpcyB0b28gbGFyZ2UgdG8gc3RvcmUgaW5saW5lLiBVc2UgcHJlcGFyZUFzc2V0VXBsb2FkIGFuZCB1cGxvYWQgZnJvbSB0aGUgYnJvd3Nlci5cIlxuICAgICk7XG4gIH1cblxuICBsZXQgc3RvcmVkID0gc3JjO1xuICBpZiAoaGFzQXdzRW52KGN0eCkpIHtcbiAgICB0cnkge1xuICAgICAgc3RvcmVkID0gYXdhaXQgdXBsb2FkSW1hZ2VEYXRhVXJsKGN0eCwgcHJvamVjdElkLCBzcmMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBTdHJpbmcoZXJyb3IpO1xuICAgICAgY3R4LmxvZy5lcnJvcihcIlMzIHVwbG9hZCBmYWlsZWQ7IGtlZXBpbmcgaW5saW5lIGRhdGEgVVJMXCIsIHsgbWVzc2FnZSB9KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgY3R4LmxvZy53YXJuKFwiQVdTIGVudiBtaXNzaW5nOyBzdG9yaW5nIHNtYWxsIGltYWdlIGFzIGRhdGEgVVJMXCIpO1xuICB9XG5cbiAgcmV0dXJuIGN0eC5kYi5hc3NldHMuaW5zZXJ0KHtcbiAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgcHJvamVjdElkLFxuICAgIHNyYzogc3RvcmVkLFxuICAgIHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSxcbiAgICBoZWlnaHQ6IFN0cmluZyhjaGVja0RpbShoZWlnaHQpKVxuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0T3JkZXIoY3R4OiBTZXJ2ZXJDb250ZXh0LCBwcm9qZWN0SWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXSkge1xuICBjb25zdCB2YWxpZCA9IG5ldyBTZXQoXG4gICAgY3R4LmRiLmxheWVycy53aGVyZShcInByb2plY3RJZFwiLCBwcm9qZWN0SWQpLmFsbCgpLm1hcCgocm93KSA9PiByb3cuaWQpXG4gICk7XG4gIGNvbnN0IHNlZW4gPSBuZXcgU2V0PHN0cmluZz4oKTtcbiAgY29uc3Qgb3JkZXI6IHN0cmluZ1tdID0gW107XG4gIGZvciAoY29uc3QgaWQgb2YgaWRzKSB7XG4gICAgaWYgKHZhbGlkLmhhcyhpZCkgJiYgIXNlZW4uaGFzKGlkKSkge1xuICAgICAgb3JkZXIucHVzaChpZCk7XG4gICAgICBzZWVuLmFkZChpZCk7XG4gICAgfVxuICB9XG4gIC8vIExheWVycyBtaXNzaW5nIGZyb20gdGhlIHJlcXVlc3RlZCBvcmRlciBnbyBvbiB0b3AgcmF0aGVyIHRoYW4gdmFuaXNoaW5nLlxuICBmb3IgKGNvbnN0IGlkIG9mIHZhbGlkKSB7XG4gICAgaWYgKCFzZWVuLmhhcyhpZCkpIG9yZGVyLnB1c2goaWQpO1xuICB9XG4gIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdElkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2Fwc3VsZSh7XG4gIG5hbWU6IFwiaW1hZ2UtZWRpdG9yXCIsXG5cbiAgc2NoZW1hOiB7XG4gICAgcHJvamVjdHM6IHRhYmxlKHtcbiAgICAgIG93bmVySWQ6IHN0cmluZygpLFxuICAgICAgbmFtZTogc3RyaW5nKCksXG4gICAgICB3aWR0aDogc3RyaW5nKCksXG4gICAgICBoZWlnaHQ6IHN0cmluZygpLFxuICAgICAgbGF5ZXJPcmRlcjogc3RyaW5nKCkuZGVmYXVsdChcIltdXCIpLFxuICAgICAgdGh1bWI6IHN0cmluZygpLmRlZmF1bHQoXCJcIilcbiAgICB9KSxcbiAgICBsYXllcnM6IHRhYmxlKHtcbiAgICAgIG93bmVySWQ6IHN0cmluZygpLFxuICAgICAgcHJvamVjdElkOiBzdHJpbmcoKSxcbiAgICAgIGFzc2V0SWQ6IHN0cmluZygpLFxuICAgICAgLy8gQ2xpZW50LWdlbmVyYXRlZCBpZGVtcG90ZW5jeSBrZXkgc28gYSByZXRyaWVkIGFkZExheWVyIG5ldmVyIGR1cGxpY2F0ZXMuXG4gICAgICBjbGllbnRLZXk6IHN0cmluZygpLmRlZmF1bHQoXCJcIiksXG4gICAgICBuYW1lOiBzdHJpbmcoKSxcbiAgICAgIGRhdGE6IHN0cmluZygpXG4gICAgfSksXG4gICAgYXNzZXRzOiB0YWJsZSh7XG4gICAgICBvd25lcklkOiBzdHJpbmcoKSxcbiAgICAgIHByb2plY3RJZDogc3RyaW5nKCksXG4gICAgICBzcmM6IHN0cmluZygpLFxuICAgICAgd2lkdGg6IHN0cmluZygpLFxuICAgICAgaGVpZ2h0OiBzdHJpbmcoKVxuICAgIH0pXG4gIH0sXG5cbiAgcXVlcmllczoge1xuICAgIHByb2plY3RzOiBxdWVyeSgoY3R4KSA9PiAoe1xuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICBpdGVtczogY3R4LmRiLnByb2plY3RzXG4gICAgICAgIC53aGVyZShcIm93bmVySWRcIiwgY3R4LmF1dGgudXNlcklkKVxuICAgICAgICAub3JkZXJCeShcInVwZGF0ZWRBdFwiLCBcImRlc2NcIilcbiAgICAgICAgLmFsbCgpXG4gICAgICAgIC5tYXAoKHJvdykgPT4gKHtcbiAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICAgIHdpZHRoOiBOdW1iZXIocm93LndpZHRoKSxcbiAgICAgICAgICBoZWlnaHQ6IE51bWJlcihyb3cuaGVpZ2h0KSxcbiAgICAgICAgICBsYXllck9yZGVyOiBkZWNvZGVTdHJpbmdBcnJheShTdHJpbmcocm93LmxheWVyT3JkZXIpKSxcbiAgICAgICAgICB1cGRhdGVkQXQ6IHJvdy51cGRhdGVkQXRcbiAgICAgICAgfSkpXG4gICAgfSkpLFxuXG4gICAgLy8gVGh1bWJuYWlscyBhcmUgdGhlIG9uZSBidWxreSBwYXlsb2FkIHB1c2hlZCBieSBxdWVyaWVzOyBvbmx5IHRoZSBob21lXG4gICAgLy8gc2NyZWVuIHN1YnNjcmliZXMgdG8gdGhpcyBvbmUuXG4gICAgcHJvamVjdFRodW1iczogcXVlcnkoKGN0eCkgPT4gKHtcbiAgICAgIHJlYWR5OiB0cnVlLFxuICAgICAgaXRlbXM6IGN0eC5kYi5wcm9qZWN0c1xuICAgICAgICAud2hlcmUoXCJvd25lcklkXCIsIGN0eC5hdXRoLnVzZXJJZClcbiAgICAgICAgLmFsbCgpXG4gICAgICAgIC5tYXAoKHJvdykgPT4gKHsgaWQ6IHJvdy5pZCwgdGh1bWI6IHJvdy50aHVtYiB9KSlcbiAgICB9KSksXG5cbiAgICBsYXllcnM6IHF1ZXJ5KChjdHgpID0+ICh7XG4gICAgICByZWFkeTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBjdHguZGIubGF5ZXJzXG4gICAgICAgIC53aGVyZShcIm93bmVySWRcIiwgY3R4LmF1dGgudXNlcklkKVxuICAgICAgICAuYWxsKClcbiAgICAgICAgLm1hcCgocm93KSA9PiAoe1xuICAgICAgICAgIGlkOiByb3cuaWQsXG4gICAgICAgICAgcHJvamVjdElkOiByb3cucHJvamVjdElkLFxuICAgICAgICAgIGFzc2V0SWQ6IHJvdy5hc3NldElkLFxuICAgICAgICAgIG5hbWU6IHJvdy5uYW1lLFxuICAgICAgICAgIGRhdGE6IHJvdy5kYXRhXG4gICAgICAgIH0pKVxuICAgIH0pKVxuICB9LFxuXG4gIG11dGF0aW9uczoge1xuICAgIGNyZWF0ZVByb2plY3Q6IG11dGF0aW9uKChjdHgsIG5hbWU6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IGN0eC5kYi5wcm9qZWN0cy5pbnNlcnQoe1xuICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJVbnRpdGxlZFwiKSxcbiAgICAgICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCkpLFxuICAgICAgICBoZWlnaHQ6IFN0cmluZyhjaGVja0RpbShoZWlnaHQpKSxcbiAgICAgICAgbGF5ZXJPcmRlcjogXCJbXVwiLFxuICAgICAgICB0aHVtYjogXCJcIlxuICAgICAgfSk7XG4gICAgICByZXR1cm4geyBpZDogcm93LmlkIH07XG4gICAgfSksXG5cbiAgICBjcmVhdGVQcm9qZWN0RnJvbUltYWdlOiBtdXRhdGlvbihcbiAgICAgIGFzeW5jIChcbiAgICAgICAgY3R4LFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxuICAgICAgICBsYXllck5hbWU6IHN0cmluZyxcbiAgICAgICAgc3JjOiBzdHJpbmcsXG4gICAgICAgIGRhdGFKc29uOiBzdHJpbmdcbiAgICAgICkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gY3R4LmRiLnByb2plY3RzLmluc2VydCh7XG4gICAgICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJVbnRpdGxlZFwiKSxcbiAgICAgICAgICB3aWR0aDogU3RyaW5nKGNoZWNrRGltKHdpZHRoKSksXG4gICAgICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSksXG4gICAgICAgICAgbGF5ZXJPcmRlcjogXCJbXVwiLFxuICAgICAgICAgIHRodW1iOiBcIlwiXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBhc3NldCA9IGF3YWl0IGluc2VydEFzc2V0KGN0eCwgcHJvamVjdC5pZCwgU3RyaW5nKHNyYyA/PyBcIlwiKSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgIGNvbnN0IGxheWVyID0gY3R4LmRiLmxheWVycy5pbnNlcnQoe1xuICAgICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3QuaWQsXG4gICAgICAgICAgYXNzZXRJZDogYXNzZXQuaWQsXG4gICAgICAgICAgY2xpZW50S2V5OiBcIlwiLFxuICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobGF5ZXJOYW1lID8/IFwiXCIpLCBcIkltYWdlXCIpLFxuICAgICAgICAgIGRhdGE6IGVuY29kZVRyYW5zZm9ybShkZWNvZGVUcmFuc2Zvcm0oU3RyaW5nKGRhdGFKc29uID8/IFwiXCIpKSlcbiAgICAgICAgfSk7XG4gICAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdC5pZCwgeyBsYXllck9yZGVyOiBKU09OLnN0cmluZ2lmeShbbGF5ZXIuaWRdKSB9KTtcbiAgICAgICAgcmV0dXJuIHsgaWQ6IHByb2plY3QuaWQsIGxheWVySWQ6IGxheWVyLmlkLCBhc3NldElkOiBhc3NldC5pZCwgc3JjOiBhc3NldC5zcmMgfTtcbiAgICAgIH1cbiAgICApLFxuXG4gICAgcmVuYW1lUHJvamVjdDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIGlkKTtcbiAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUoaWQsIHsgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhuYW1lID8/IFwiXCIpLCBcIlVudGl0bGVkXCIpIH0pO1xuICAgIH0pLFxuXG4gICAgcmVzaXplUHJvamVjdDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpID0+IHtcbiAgICAgIHJlcXVpcmVQcm9qZWN0KGN0eCwgaWQpO1xuICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShpZCwgeyB3aWR0aDogU3RyaW5nKGNoZWNrRGltKHdpZHRoKSksIGhlaWdodDogU3RyaW5nKGNoZWNrRGltKGhlaWdodCkpIH0pO1xuICAgIH0pLFxuXG4gICAgc2V0UHJvamVjdFRodW1iOiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nLCB0aHVtYjogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIGlkKTtcbiAgICAgIGlmICh0eXBlb2YgdGh1bWIgIT09IFwic3RyaW5nXCIgfHwgdGh1bWIubGVuZ3RoID4gTUFYX1RIVU1CX0xFTkdUSCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKGlkLCB7IHRodW1iIH0pO1xuICAgIH0pLFxuXG4gICAgZGVsZXRlUHJvamVjdDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgcmVxdWlyZVByb2plY3QoY3R4LCBpZCk7XG4gICAgICBmb3IgKGNvbnN0IGxheWVyIG9mIGN0eC5kYi5sYXllcnMud2hlcmUoXCJwcm9qZWN0SWRcIiwgaWQpLmFsbCgpKSB7XG4gICAgICAgIGN0eC5kYi5sYXllcnMuZGVsZXRlKGxheWVyLmlkKTtcbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgYXNzZXQgb2YgY3R4LmRiLmFzc2V0cy53aGVyZShcInByb2plY3RJZFwiLCBpZCkuYWxsKCkpIHtcbiAgICAgICAgY3R4LmRiLmFzc2V0cy5kZWxldGUoYXNzZXQuaWQpO1xuICAgICAgfVxuICAgICAgY3R4LmRiLnByb2plY3RzLmRlbGV0ZShpZCk7XG4gICAgfSksXG5cbiAgICBhZGRMYXllcjogbXV0YXRpb24oXG4gICAgICBhc3luYyAoXG4gICAgICAgIGN0eCxcbiAgICAgICAgcHJvamVjdElkOiBzdHJpbmcsXG4gICAgICAgIGNsaWVudEtleTogc3RyaW5nLFxuICAgICAgICBuYW1lOiBzdHJpbmcsXG4gICAgICAgIGRhdGFKc29uOiBzdHJpbmcsXG4gICAgICAgIGFzc2V0OiB7IGFzc2V0SWQ/OiBzdHJpbmc7IHNyYz86IHN0cmluZzsgd2lkdGg/OiBudW1iZXI7IGhlaWdodD86IG51bWJlciB9XG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHJlcXVpcmVQcm9qZWN0KGN0eCwgcHJvamVjdElkKTtcbiAgICAgICAgaWYgKGNsaWVudEtleSkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gY3R4LmRiLmxheWVyc1xuICAgICAgICAgICAgLndoZXJlKFwib3duZXJJZFwiLCBjdHguYXV0aC51c2VySWQpXG4gICAgICAgICAgICAud2hlcmUoXCJjbGllbnRLZXlcIiwgY2xpZW50S2V5KVxuICAgICAgICAgICAgLmFsbCgpWzBdO1xuICAgICAgICAgIGlmIChleGlzdGluZykge1xuICAgICAgICAgICAgY29uc3Qgcm93ID0gY3R4LmRiLmFzc2V0cy5nZXQoU3RyaW5nKGV4aXN0aW5nLmFzc2V0SWQpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGxheWVySWQ6IGV4aXN0aW5nLmlkLFxuICAgICAgICAgICAgICBhc3NldElkOiBleGlzdGluZy5hc3NldElkLFxuICAgICAgICAgICAgICBzcmM6IHJvdyA/IFN0cmluZyhyb3cuc3JjKSA6IFwiXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGFzc2V0SWQgPSBhc3NldD8uYXNzZXRJZCA/PyBcIlwiO1xuICAgICAgICBsZXQgYXNzZXRTcmMgPSBcIlwiO1xuICAgICAgICBpZiAoYXNzZXRJZCkge1xuICAgICAgICAgIGNvbnN0IGV4aXN0aW5nID0gcmVxdWlyZUFzc2V0KGN0eCwgYXNzZXRJZCk7XG4gICAgICAgICAgYXNzZXRTcmMgPSBTdHJpbmcoZXhpc3Rpbmcuc3JjKTtcbiAgICAgICAgICBpZiAoZXhpc3RpbmcucHJvamVjdElkICE9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgICAgIC8vIFJlLWhvbWUgc2hhcmVkIGFzc2V0cyBieSBjb3B5aW5nIHRoZSBVUkwgc28gcHJvamVjdCBkZWxldGlvbiBzdGF5cyBzaW1wbGUuXG4gICAgICAgICAgICBhc3NldElkID0gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICAgICAgc3JjOiBleGlzdGluZy5zcmMsXG4gICAgICAgICAgICAgIHdpZHRoOiBleGlzdGluZy53aWR0aCxcbiAgICAgICAgICAgICAgaGVpZ2h0OiBleGlzdGluZy5oZWlnaHRcbiAgICAgICAgICAgIH0pLmlkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCBjcmVhdGVkID0gYXdhaXQgaW5zZXJ0QXNzZXQoXG4gICAgICAgICAgICBjdHgsXG4gICAgICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgICAgICBTdHJpbmcoYXNzZXQ/LnNyYyA/PyBcIlwiKSxcbiAgICAgICAgICAgIGFzc2V0Py53aWR0aCA/PyAwLFxuICAgICAgICAgICAgYXNzZXQ/LmhlaWdodCA/PyAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhc3NldElkID0gY3JlYXRlZC5pZDtcbiAgICAgICAgICBhc3NldFNyYyA9IFN0cmluZyhjcmVhdGVkLnNyYyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsYXllciA9IGN0eC5kYi5sYXllcnMuaW5zZXJ0KHtcbiAgICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgICAgcHJvamVjdElkLFxuICAgICAgICAgIGFzc2V0SWQsXG4gICAgICAgICAgY2xpZW50S2V5OiBTdHJpbmcoY2xpZW50S2V5ID8/IFwiXCIpLFxuICAgICAgICAgIG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJJbWFnZVwiKSxcbiAgICAgICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0oZGVjb2RlVHJhbnNmb3JtKFN0cmluZyhkYXRhSnNvbiA/PyBcIlwiKSkpXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBvcmRlciA9IGRlY29kZVN0cmluZ0FycmF5KFN0cmluZyhwcm9qZWN0LmxheWVyT3JkZXIpKTtcbiAgICAgICAgb3JkZXIucHVzaChsYXllci5pZCk7XG4gICAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdElkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSB9KTtcbiAgICAgICAgcmV0dXJuIHsgbGF5ZXJJZDogbGF5ZXIuaWQsIGFzc2V0SWQsIHNyYzogYXNzZXRTcmMgfTtcbiAgICAgIH1cbiAgICApLFxuXG4gICAgdXBkYXRlTGF5ZXI6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcsIGRhdGFKc29uOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcXVpcmVMYXllcihjdHgsIGlkKTtcbiAgICAgIGN0eC5kYi5sYXllcnMudXBkYXRlKGlkLCB7IGRhdGE6IGVuY29kZVRyYW5zZm9ybShkZWNvZGVUcmFuc2Zvcm0oU3RyaW5nKGRhdGFKc29uID8/IFwiXCIpKSkgfSk7XG4gICAgfSksXG5cbiAgICByZXBsYWNlTGF5ZXJBc3NldDogbXV0YXRpb24oYXN5bmMgKGN0eCwgaWQ6IHN0cmluZywgc3JjOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBsYXllciA9IHJlcXVpcmVMYXllcihjdHgsIGlkKTtcbiAgICAgIGNvbnN0IGFzc2V0ID0gYXdhaXQgaW5zZXJ0QXNzZXQoY3R4LCBTdHJpbmcobGF5ZXIucHJvamVjdElkKSwgU3RyaW5nKHNyYyA/PyBcIlwiKSwgd2lkdGgsIGhlaWdodCk7XG4gICAgICBjdHguZGIubGF5ZXJzLnVwZGF0ZShpZCwgeyBhc3NldElkOiBhc3NldC5pZCB9KTtcbiAgICAgIHJldHVybiB7IGFzc2V0SWQ6IGFzc2V0LmlkLCBzcmM6IFN0cmluZyhhc3NldC5zcmMpIH07XG4gICAgfSksXG5cbiAgICByZW5hbWVMYXllcjogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlTGF5ZXIoY3R4LCBpZCk7XG4gICAgICBjdHguZGIubGF5ZXJzLnVwZGF0ZShpZCwgeyBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKG5hbWUgPz8gXCJcIiksIFwiSW1hZ2VcIikgfSk7XG4gICAgfSksXG5cbiAgICBkZWxldGVMYXllcjogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgbGF5ZXIgPSByZXF1aXJlTGF5ZXIoY3R4LCBpZCk7XG4gICAgICBjdHguZGIubGF5ZXJzLmRlbGV0ZShpZCk7XG4gICAgICBjb25zdCBwcm9qZWN0ID0gY3R4LmRiLnByb2plY3RzLmdldChTdHJpbmcobGF5ZXIucHJvamVjdElkKSk7XG4gICAgICBpZiAocHJvamVjdCkge1xuICAgICAgICBjb25zdCBvcmRlciA9IGRlY29kZVN0cmluZ0FycmF5KFN0cmluZyhwcm9qZWN0LmxheWVyT3JkZXIpKS5maWx0ZXIoKGxheWVySWQpID0+IGxheWVySWQgIT09IGlkKTtcbiAgICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShwcm9qZWN0LmlkLCB7IGxheWVyT3JkZXI6IEpTT04uc3RyaW5naWZ5KG9yZGVyKSB9KTtcbiAgICAgIH1cbiAgICAgIC8vIFRoZSBhc3NldCBpcyBrZXB0OiBvdGhlciBsYXllcnMgbWF5IHJlZmVyZW5jZSBpdCBhbmQgdW5kbyBjYW4gcmVzdG9yZSBpdC5cbiAgICB9KSxcblxuICAgIHNldExheWVyT3JkZXI6IG11dGF0aW9uKChjdHgsIHByb2plY3RJZDogc3RyaW5nLCBpZHM6IHN0cmluZ1tdKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIHByb2plY3RJZCk7XG4gICAgICBzZXRPcmRlcihjdHgsIHByb2plY3RJZCwgQXJyYXkuaXNBcnJheShpZHMpID8gaWRzLm1hcChTdHJpbmcpIDogW10pO1xuICAgIH0pLFxuXG4gICAgLy8gUmVhZC1hcy1tdXRhdGlvbiBlc2NhcGUgaGF0Y2g6IHF1ZXJpZXMgY2Fubm90IHRha2UgYXJndW1lbnRzLCBhbmQgYXNzZXRcbiAgICAvLyBwYXlsb2FkcyBhcmUgdG9vIGxhcmdlIHRvIGxpdmUgaW4gYSBsaXZlIHF1ZXJ5IHJlc3VsdC5cbiAgICBnZXRBc3NldDogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3Qgcm93ID0gcmVxdWlyZUFzc2V0KGN0eCwgaWQpO1xuICAgICAgcmV0dXJuIHsgaWQ6IHJvdy5pZCwgc3JjOiByb3cuc3JjLCB3aWR0aDogTnVtYmVyKHJvdy53aWR0aCksIGhlaWdodDogTnVtYmVyKHJvdy5oZWlnaHQpIH07XG4gICAgfSksXG5cbiAgICAvLyBTaWduIGEgYnJvd3NlciBQVVQgdG8gUzMsIHRoZW4gY3JlYXRlIHRoZSBhc3NldCByb3cgcG9pbnRpbmcgYXQgQ2xvdWRGcm9udC5cbiAgICAvLyBMYXJnZSBpbWFnZXMgbmV2ZXIgZW50ZXIgTGFrZWJlZCBtdXRhdGlvbnMgYXMgZGF0YSBVUkxzLlxuICAgIHByZXBhcmVBc3NldFVwbG9hZDogbXV0YXRpb24oYXN5bmMgKGN0eCwgcHJvamVjdElkOiBzdHJpbmcsIGNvbnRlbnRUeXBlOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICByZXF1aXJlUHJvamVjdChjdHgsIHByb2plY3RJZCk7XG4gICAgICBpZiAoIWhhc0F3c0VudihjdHgpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgQVdTIHNlcnZlciBlbnY7IGNhbm5vdCBwcmVwYXJlIHVwbG9hZFwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHsgdXBsb2FkVXJsLCBwdWJsaWNVcmwgfSA9IGF3YWl0IGNyZWF0ZVByZXNpZ25lZFB1dChjdHgsIHByb2plY3RJZCwgU3RyaW5nKGNvbnRlbnRUeXBlID8/IFwiXCIpKTtcbiAgICAgIGNvbnN0IGFzc2V0ID0gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgc3JjOiBwdWJsaWNVcmwsXG4gICAgICAgIHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSxcbiAgICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSlcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgYXNzZXRJZDogYXNzZXQuaWQsIHVwbG9hZFVybCwgcHVibGljVXJsIH07XG4gICAgfSksXG5cbiAgICAvLyBDYW52YXMgb3BlcmF0aW9ucyBuZWVkIHBpeGVsIGRhdGEuIFByZWZlciByZXR1cm5pbmcgcmVtb3RlIFVSTHMgc28gdGhlXG4gICAgLy8gY2xpZW50IGNhbiBsb2FkIHdpdGggQ09SUyAoc2VydmVyIGJhc2U2NCBvZiBsYXJnZSBpbWFnZXMgZXhjZWVkcyBob3N0ZWQgbGltaXRzKS5cbiAgICBnZXRBc3NldFBhaW50OiBtdXRhdGlvbihhc3luYyAoY3R4LCBpZDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSByZXF1aXJlQXNzZXQoY3R4LCBpZCk7XG4gICAgICBjb25zdCBzcmMgPSBTdHJpbmcocm93LnNyYyk7XG4gICAgICBpZiAoc3JjLnN0YXJ0c1dpdGgoXCJkYXRhOmltYWdlL1wiKSkgcmV0dXJuIHsgc3JjIH07XG4gICAgICAvLyBPbmx5IGlubGluZSB0aW55IHJlbW90ZSBhc3NldHM7IG90aGVyd2lzZSB0aGUgY2xpZW50IGxvYWRzIHRoZSBVUkwgZGlyZWN0bHkuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHNyYyk7XG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spIHJldHVybiB7IHNyYyB9O1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiY29udGVudC10eXBlXCIpIHx8IFwiaW1hZ2UvcG5nXCI7XG4gICAgICAgIGlmICghY29udGVudFR5cGUudG9Mb3dlckNhc2UoKS5zdGFydHNXaXRoKFwiaW1hZ2UvXCIpKSByZXR1cm4geyBzcmMgfTtcbiAgICAgICAgY29uc3QgYnl0ZXMgPSBuZXcgVWludDhBcnJheShhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpKTtcbiAgICAgICAgaWYgKGJ5dGVzLmJ5dGVMZW5ndGggPiBNQVhfUEFJTlRfQllURVMpIHJldHVybiB7IHNyYyB9O1xuICAgICAgICByZXR1cm4geyBzcmM6IGBkYXRhOiR7Y29udGVudFR5cGV9O2Jhc2U2NCwke2J5dGVzVG9CYXNlNjQoYnl0ZXMpfWAgfTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4geyBzcmMgfTtcbiAgICAgIH1cbiAgICB9KVxuICB9LFxuXG4gIGVuZHBvaW50czoge1xuICAgIC8vIFNhbWUtb3JpZ2luIGJpbmFyeSB1cGxvYWQgXHUyMDE0IGF2b2lkcyBTMyBDT1JTIGFuZCBrZWVwcyBsYXJnZSBwYXlsb2FkcyBvdXQgb2YgbXV0YXRpb25zLlxuICAgIHVwbG9hZEFzc2V0OiBlbmRwb2ludCh7IG1ldGhvZDogXCJQT1NUXCIsIHBhdGg6IFwiL2Fzc2V0cy91cGxvYWRcIiB9LCBhc3luYyAoY3R4LCByZXEpID0+IHtcbiAgICAgIGlmICghY3R4LmF1dGg/LnVzZXJJZCkgcmV0dXJuIHRleHQoXCJVbmF1dGhvcml6ZWRcIiwgeyBzdGF0dXM6IDQwMSB9KTtcbiAgICAgIGlmICghaGFzQXdzRW52KGN0eCkpIHJldHVybiB0ZXh0KFwiQVdTIGVudiBub3QgY29uZmlndXJlZFwiLCB7IHN0YXR1czogNTAzIH0pO1xuXG4gICAgICBjb25zdCBwcm9qZWN0SWQgPSBTdHJpbmcocmVxLnF1ZXJ5LmdldChcInByb2plY3RJZFwiKSA/PyBcIlwiKTtcbiAgICAgIGlmICghcHJvamVjdElkKSByZXR1cm4gdGV4dChcIk1pc3NpbmcgcHJvamVjdElkXCIsIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgICB0cnkge1xuICAgICAgICByZXF1aXJlUHJvamVjdChjdHgsIHByb2plY3RJZCk7XG4gICAgICB9IGNhdGNoIHtcbiAgICAgICAgcmV0dXJuIHRleHQoXCJQcm9qZWN0IG5vdCBmb3VuZFwiLCB7IHN0YXR1czogNDA0IH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB3aWR0aCA9IE51bWJlcihyZXEucXVlcnkuZ2V0KFwid2lkdGhcIikgPz8gMCk7XG4gICAgICBjb25zdCBoZWlnaHQgPSBOdW1iZXIocmVxLnF1ZXJ5LmdldChcImhlaWdodFwiKSA/PyAwKTtcbiAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gKHJlcS5oZWFkZXJzLmdldChcImNvbnRlbnQtdHlwZVwiKSB8fCBcImltYWdlL3BuZ1wiKS5zcGxpdChcIjtcIilbMF0udHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgICBpZiAoIWNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoXCJpbWFnZS9cIikpIHJldHVybiB0ZXh0KFwiQ29udGVudC1UeXBlIG11c3QgYmUgYW4gaW1hZ2VcIiwgeyBzdGF0dXM6IDQwMCB9KTtcblxuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHJlcS5ieXRlcygpO1xuICAgICAgaWYgKGJvZHkuYnl0ZUxlbmd0aCA8IDEpIHJldHVybiB0ZXh0KFwiRW1wdHkgYm9keVwiLCB7IHN0YXR1czogNDAwIH0pO1xuICAgICAgaWYgKGJvZHkuYnl0ZUxlbmd0aCA+IE1BWF9VUExPQURfQllURVMpIHJldHVybiB0ZXh0KFwiSW1hZ2UgaXMgdG9vIGxhcmdlXCIsIHsgc3RhdHVzOiA0MTMgfSk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHB1YmxpY1VybCA9IGF3YWl0IHB1dE9iamVjdEJ5dGVzKGN0eCwgcHJvamVjdElkLCBjb250ZW50VHlwZSwgYm9keSk7XG4gICAgICAgIGNvbnN0IGFzc2V0ID0gY3R4LmRiLmFzc2V0cy5pbnNlcnQoe1xuICAgICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgICAgc3JjOiBwdWJsaWNVcmwsXG4gICAgICAgICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCB8fCAxKSksXG4gICAgICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0IHx8IDEpKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGpzb24oeyBhc3NldElkOiBhc3NldC5pZCwgcHVibGljVXJsIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogU3RyaW5nKGVycm9yKTtcbiAgICAgICAgY3R4LmxvZy5lcnJvcihcInVwbG9hZEFzc2V0IGZhaWxlZFwiLCB7IG1lc3NhZ2UgfSk7XG4gICAgICAgIHJldHVybiB0ZXh0KG1lc3NhZ2UsIHsgc3RhdHVzOiA1MDIgfSk7XG4gICAgICB9XG4gICAgfSlcbiAgfVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBNEZNLFNBQVUsUUFBVyxZQUFhO0FBQ3RDLFNBQU87QUFDVDtBQUVNLFNBQVUsTUFBZSxTQUF3QztBQUNyRSxTQUFPO0FBQ1Q7QUFFTSxTQUFVLFNBQ2QsU0FBd0Q7QUFFeEQsU0FBTztBQUNUO0FBRU0sU0FBVSxTQUNkLE9BQ0EsU0FBaUY7QUFFakYsU0FBTztJQUNMO0lBQ0EsTUFBTTtJQUNOLFFBQVEsT0FBTyxPQUFPLFVBQVUsRUFBRSxFQUFFLFlBQVc7SUFDL0MsTUFBTSxPQUFPLE9BQU8sUUFBUSxFQUFFOztBQUVsQztBQUVBLFNBQVMsU0FBUyxNQUFjLEVBQUUsVUFBVSxDQUFBLEdBQUksU0FBUyxJQUFHLElBQThCLENBQUEsR0FBRTtBQUMxRixTQUFPO0lBQ0w7SUFDQTtJQUNBLE1BQU07SUFDTjs7QUFFSjtBQUVNLFNBQVUsS0FBSyxPQUFnQixVQUFtQyxDQUFBLEdBQUU7QUFDeEUsU0FBTyxTQUFTLEtBQUssVUFBVSxTQUFTLElBQUksR0FBRztJQUM3QyxHQUFHO0lBQ0gsU0FBUztNQUNQLGdCQUFnQjtNQUNoQixHQUFJLFFBQVEsV0FBVyxDQUFBOztHQUUxQjtBQUNIO0FBRU0sU0FBVSxLQUFLLE9BQWdCLFVBQW1DLENBQUEsR0FBRTtBQUN4RSxTQUFPLFNBQVMsT0FBTyxTQUFTLEVBQUUsR0FBRztJQUNuQyxHQUFHO0lBQ0gsU0FBUztNQUNQLGdCQUFnQjtNQUNoQixHQUFJLFFBQVEsV0FBVyxDQUFBOztHQUUxQjtBQUNIO0FBaUJBLFNBQVMsTUFBUyxNQUFZO0FBQzVCLFNBQU87SUFDTDtJQUNBLGNBQWM7SUFDZCxRQUFRLE9BQVE7QUFDZCxhQUFPO1FBQ0wsR0FBRztRQUNILGNBQWM7O0lBRWxCOztBQUVKO0FBRU0sU0FBVSxNQUFNLFFBQWtDO0FBQ3RELFNBQU87SUFDTCxNQUFNO0lBQ047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
