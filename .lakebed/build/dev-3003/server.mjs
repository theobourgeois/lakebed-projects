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
function finite(value, fallback) {
  return typeof value === "number" && Number.isFinite(value) ? value : fallback;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function sanitizeTransform(input) {
  const t = input ?? {};
  return {
    x: finite(t.x, 0),
    y: finite(t.y, 0),
    w: Math.max(MIN_LAYER_SIZE, finite(t.w, MIN_LAYER_SIZE)),
    h: Math.max(MIN_LAYER_SIZE, finite(t.h, MIN_LAYER_SIZE)),
    rotation: finite(t.rotation, 0),
    opacity: clamp(finite(t.opacity, 1), 0, 1),
    visible: typeof t.visible === "boolean" ? t.visible : true
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
    })
  }
});
export {
  server_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJpdmF0ZS92YXIvZm9sZGVycy9ncC9kcWd6NmN0czZoOTZyeGQ1aGhreHR5ZHcwMDAwZ24vVC9jdXJzb3Itc2FuZGJveC1jYWNoZS9mYzVhZjZlMGFiOTY1Y2I2YzNlM2NiMTI5ZGQ2Yzk0ZS9ucG0vX25weC8zZWI4ZDNlYWFmNGVmMWI0L25vZGVfbW9kdWxlcy9sYWtlYmVkL3NyYy9zZXJ2ZXIudHMiLCAibGFrZWJlZC1zb3VyY2U6c2hhcmVkL3R5cGVzLnRzIiwgImxha2ViZWQtc291cmNlOnNlcnZlci9zMy50cyIsICJsYWtlYmVkLXNvdXJjZTpzZXJ2ZXIvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbbnVsbCwgIi8vIENvcmUgZG9jdW1lbnQgdHlwZXMgc2hhcmVkIGJ5IGNsaWVudCBhbmQgc2VydmVyLCBwbHVzIHRoZSBKU09OIGNvZGVjIGZvclxuLy8gbGF5ZXIgdHJhbnNmb3JtIGRhdGEgKG51bWJlcnMgbXVzdCBiZSBzZXJpYWxpemVkIGJlY2F1c2UgdGFibGUgY29sdW1ucyBhcmVcbi8vIHN0cmluZ3Mgb25seSkuXG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1BST0pFQ1RfV0lEVEggPSAxMjgwO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUFJPSkVDVF9IRUlHSFQgPSA4MDA7XG5leHBvcnQgY29uc3QgTUFYX0lNQUdFX0RJTSA9IDI1NjA7XG5leHBvcnQgY29uc3QgTUlOX0xBWUVSX1NJWkUgPSA4O1xuZXhwb3J0IGNvbnN0IE1BWF9QUk9KRUNUX0RJTSA9IDgwMDA7XG5cbmV4cG9ydCB0eXBlIExheWVyVHJhbnNmb3JtID0ge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgdzogbnVtYmVyO1xuICBoOiBudW1iZXI7XG4gIC8qKiBEZWdyZWVzLCBjbG9ja3dpc2UsIGFib3V0IHRoZSBib3ggY2VudGVyLiAqL1xuICByb3RhdGlvbjogbnVtYmVyO1xuICAvKiogMC4uMSAqL1xuICBvcGFjaXR5OiBudW1iZXI7XG4gIHZpc2libGU6IGJvb2xlYW47XG59O1xuXG5leHBvcnQgdHlwZSBMYXllciA9IExheWVyVHJhbnNmb3JtICYge1xuICBpZDogc3RyaW5nO1xuICBhc3NldElkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbn07XG5cbi8qKiBUaGUgaW4tbWVtb3J5IGVkaXRpbmcgZG9jdW1lbnQuIGxheWVyc1swXSBpcyB0aGUgYm90dG9tIGxheWVyLiAqL1xuZXhwb3J0IHR5cGUgUHJvamVjdERvYyA9IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICB3aWR0aDogbnVtYmVyO1xuICBoZWlnaHQ6IG51bWJlcjtcbiAgbGF5ZXJzOiBMYXllcltdO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvamVjdE1ldGEgPSB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIGxheWVyT3JkZXI6IHN0cmluZ1tdO1xuICB1cGRhdGVkQXQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIExheWVyUm93ID0ge1xuICBpZDogc3RyaW5nO1xuICBwcm9qZWN0SWQ6IHN0cmluZztcbiAgYXNzZXRJZDogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGRhdGE6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2plY3RUaHVtYiA9IHtcbiAgaWQ6IHN0cmluZztcbiAgdGh1bWI6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEFzc2V0UGF5bG9hZCA9IHtcbiAgaWQ6IHN0cmluZztcbiAgc3JjOiBzdHJpbmc7XG4gIHdpZHRoOiBudW1iZXI7XG4gIGhlaWdodDogbnVtYmVyO1xufTtcblxuZnVuY3Rpb24gZmluaXRlKHZhbHVlOiB1bmtub3duLCBmYWxsYmFjazogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBOdW1iZXIuaXNGaW5pdGUodmFsdWUpID8gdmFsdWUgOiBmYWxsYmFjaztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKHZhbHVlOiBudW1iZXIsIG1pbjogbnVtYmVyLCBtYXg6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdmFsdWUpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhbml0aXplVHJhbnNmb3JtKGlucHV0OiBQYXJ0aWFsPExheWVyVHJhbnNmb3JtPiB8IG51bGwgfCB1bmRlZmluZWQpOiBMYXllclRyYW5zZm9ybSB7XG4gIGNvbnN0IHQgPSBpbnB1dCA/PyB7fTtcbiAgcmV0dXJuIHtcbiAgICB4OiBmaW5pdGUodC54LCAwKSxcbiAgICB5OiBmaW5pdGUodC55LCAwKSxcbiAgICB3OiBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgZmluaXRlKHQudywgTUlOX0xBWUVSX1NJWkUpKSxcbiAgICBoOiBNYXRoLm1heChNSU5fTEFZRVJfU0laRSwgZmluaXRlKHQuaCwgTUlOX0xBWUVSX1NJWkUpKSxcbiAgICByb3RhdGlvbjogZmluaXRlKHQucm90YXRpb24sIDApLFxuICAgIG9wYWNpdHk6IGNsYW1wKGZpbml0ZSh0Lm9wYWNpdHksIDEpLCAwLCAxKSxcbiAgICB2aXNpYmxlOiB0eXBlb2YgdC52aXNpYmxlID09PSBcImJvb2xlYW5cIiA/IHQudmlzaWJsZSA6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuY29kZVRyYW5zZm9ybSh0OiBMYXllclRyYW5zZm9ybSk6IHN0cmluZyB7XG4gIHJldHVybiBKU09OLnN0cmluZ2lmeShzYW5pdGl6ZVRyYW5zZm9ybSh0KSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWNvZGVUcmFuc2Zvcm0ocmF3OiBzdHJpbmcpOiBMYXllclRyYW5zZm9ybSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHNhbml0aXplVHJhbnNmb3JtKEpTT04ucGFyc2UocmF3KSBhcyBQYXJ0aWFsPExheWVyVHJhbnNmb3JtPik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBzYW5pdGl6ZVRyYW5zZm9ybShudWxsKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVjb2RlU3RyaW5nQXJyYXkocmF3OiBzdHJpbmcpOiBzdHJpbmdbXSB7XG4gIHRyeSB7XG4gICAgY29uc3QgcGFyc2VkID0gSlNPTi5wYXJzZShyYXcpIGFzIHVua25vd247XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocGFyc2VkKSA/IHBhcnNlZC5maWx0ZXIoKHYpOiB2IGlzIHN0cmluZyA9PiB0eXBlb2YgdiA9PT0gXCJzdHJpbmdcIikgOiBbXTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjbGVhbk5hbWUodmFsdWU6IHN0cmluZywgZmFsbGJhY2s6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSB2YWx1ZS5yZXBsYWNlKC9cXHMrL2csIFwiIFwiKS50cmltKCkuc2xpY2UoMCwgODApO1xuICByZXR1cm4gY2xlYW5lZCB8fCBmYWxsYmFjaztcbn1cbiIsICIvLyBNaW5pbWFsIFMzIFB1dE9iamVjdCB2aWEgU2lnbmF0dXJlIFY0ICsgZmV0Y2ggKG5vIEFXUyBTREspLlxuLy8gVXBsb2FkcyBpbWFnZSBkYXRhIFVSTHMgYW5kIHJldHVybnMgYSBDbG91ZEZyb250IFVSTCBmb3IgdGhlIG9iamVjdC5cbi8vIE9iamVjdHMgbGFuZCB1bmRlciB0aGUgaW1hZ2UtZWRpdG9yLyBwcmVmaXggaW4gdGhlIGJ1Y2tldC5cblxuaW1wb3J0IHR5cGUgeyBTZXJ2ZXJDb250ZXh0IH0gZnJvbSBcImxha2ViZWQvc2VydmVyXCI7XG5cbmV4cG9ydCBjb25zdCBDTE9VRF9GUk9OVF9VUkwgPSBcImh0dHBzOi8vZDJwNnE5MTdtd3c0eWYuY2xvdWRmcm9udC5uZXRcIjtcbmNvbnN0IEtFWV9QUkVGSVggPSBcImltYWdlLWVkaXRvclwiO1xuXG5jb25zdCBlbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cbmZ1bmN0aW9uIHJlcXVpcmVFbnYoY3R4OiBTZXJ2ZXJDb250ZXh0LCBrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IHZhbHVlID0gY3R4LmVudltrZXldO1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiIHx8ICF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgTWlzc2luZyBzZXJ2ZXIgZW52OiAke2tleX1gKTtcbiAgfVxuICByZXR1cm4gdmFsdWU7XG59XG5cbmZ1bmN0aW9uIHRvSGV4KGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xuICByZXR1cm4gWy4uLm5ldyBVaW50OEFycmF5KGJ1ZmZlcildLm1hcCgoYikgPT4gYi50b1N0cmluZygxNikucGFkU3RhcnQoMiwgXCIwXCIpKS5qb2luKFwiXCIpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaGEyNTZIZXgoZGF0YTogVWludDhBcnJheSB8IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gIGNvbnN0IGJ5dGVzID0gdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgPyBlbmNvZGVyLmVuY29kZShkYXRhKSA6IGRhdGE7XG4gIHJldHVybiB0b0hleChhd2FpdCBjcnlwdG8uc3VidGxlLmRpZ2VzdChcIlNIQS0yNTZcIiwgYnl0ZXMpKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaG1hYyhrZXk6IEFycmF5QnVmZmVyIHwgVWludDhBcnJheSwgZGF0YTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xuICBjb25zdCBjcnlwdG9LZXkgPSBhd2FpdCBjcnlwdG8uc3VidGxlLmltcG9ydEtleShcInJhd1wiLCBrZXksIHsgbmFtZTogXCJITUFDXCIsIGhhc2g6IFwiU0hBLTI1NlwiIH0sIGZhbHNlLCBbXG4gICAgXCJzaWduXCJcbiAgXSk7XG4gIHJldHVybiBjcnlwdG8uc3VidGxlLnNpZ24oXCJITUFDXCIsIGNyeXB0b0tleSwgZW5jb2Rlci5lbmNvZGUoZGF0YSkpO1xufVxuXG4vKiogQVdTIFNpZ1Y0IFVSSSBlbmNvZGUgKHBhdGggc2VnbWVudCkuICovXG5mdW5jdGlvbiB1cmlFbmNvZGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpLnJlcGxhY2UoL1shJygpKl0vZywgKGNoKSA9PiBgJSR7Y2guY2hhckNvZGVBdCgwKS50b1N0cmluZygxNikudG9VcHBlckNhc2UoKX1gKTtcbn1cblxuLyoqIEtlZXAgUzMga2V5cyBVUkwtc2FmZSBcdTIwMTQgZ3Vlc3QgaWRzIGxpa2UgXCJndWVzdDpsb2NhbFwiIGJyZWFrIHVuc2lnbmVkIHBhdGhzLiAqL1xuZnVuY3Rpb24gc2FmZVNlZ21lbnQodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGNsZWFuZWQgPSBTdHJpbmcodmFsdWUpXG4gICAgLnJlcGxhY2UoL1teYS16QS1aMC05Ll8tXSsvZywgXCJfXCIpXG4gICAgLnJlcGxhY2UoL18rL2csIFwiX1wiKVxuICAgIC5yZXBsYWNlKC9eX3xfJC9nLCBcIlwiKVxuICAgIC5zbGljZSgwLCA4MCk7XG4gIHJldHVybiBjbGVhbmVkIHx8IFwieFwiO1xufVxuXG5mdW5jdGlvbiBkZWNvZGVEYXRhVXJsKHNyYzogc3RyaW5nKTogeyBjb250ZW50VHlwZTogc3RyaW5nOyBib2R5OiBVaW50OEFycmF5OyBleHQ6IHN0cmluZyB9IHtcbiAgY29uc3QgbWF0Y2ggPSAvXmRhdGE6KGltYWdlXFwvW2EtejAtOS4rLV0rKTtiYXNlNjQsKFtcXHNcXFNdKykkL2kuZXhlYyhzcmMpO1xuICBpZiAoIW1hdGNoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiSW1hZ2UgbXVzdCBiZSBhIGRhdGEgVVJMXCIpO1xuICB9XG4gIGNvbnN0IGNvbnRlbnRUeXBlID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcbiAgY29uc3QgYmluYXJ5ID0gYXRvYihtYXRjaFsyXS5yZXBsYWNlKC9cXHMvZywgXCJcIikpO1xuICBjb25zdCBib2R5ID0gbmV3IFVpbnQ4QXJyYXkoYmluYXJ5Lmxlbmd0aCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYmluYXJ5Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgYm9keVtpXSA9IGJpbmFyeS5jaGFyQ29kZUF0KGkpO1xuICB9XG4gIGNvbnN0IGV4dCA9XG4gICAgY29udGVudFR5cGUgPT09IFwiaW1hZ2UvanBlZ1wiIHx8IGNvbnRlbnRUeXBlID09PSBcImltYWdlL2pwZ1wiXG4gICAgICA/IFwianBnXCJcbiAgICAgIDogY29udGVudFR5cGUgPT09IFwiaW1hZ2Uvd2VicFwiXG4gICAgICAgID8gXCJ3ZWJwXCJcbiAgICAgICAgOiBjb250ZW50VHlwZSA9PT0gXCJpbWFnZS9naWZcIlxuICAgICAgICAgID8gXCJnaWZcIlxuICAgICAgICAgIDogXCJwbmdcIjtcbiAgcmV0dXJuIHsgY29udGVudFR5cGUsIGJvZHksIGV4dCB9O1xufVxuXG5mdW5jdGlvbiBhbXpEYXRlKG5vdzogRGF0ZSk6IHsgYW16RGF0ZTogc3RyaW5nOyBkYXRlU3RhbXA6IHN0cmluZyB9IHtcbiAgY29uc3QgaXNvID0gbm93LnRvSVNPU3RyaW5nKCkucmVwbGFjZSgvWy06XS9nLCBcIlwiKS5yZXBsYWNlKC9cXC5cXGR7M31aJC8sIFwiWlwiKTtcbiAgcmV0dXJuIHsgYW16RGF0ZTogaXNvLCBkYXRlU3RhbXA6IGlzby5zbGljZSgwLCA4KSB9O1xufVxuXG5mdW5jdGlvbiBvYmplY3RLZXkodXNlcklkOiBzdHJpbmcsIHByb2plY3RJZDogc3RyaW5nLCBleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gIGNvbnN0IGlkID1cbiAgICB0eXBlb2YgY3J5cHRvLnJhbmRvbVVVSUQgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgPyBjcnlwdG8ucmFuZG9tVVVJRCgpXG4gICAgICA6IGAke0RhdGUubm93KCkudG9TdHJpbmcoMzYpfV8ke01hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKDIsIDEwKX1gO1xuICByZXR1cm4gYCR7S0VZX1BSRUZJWH0vJHtzYWZlU2VnbWVudCh1c2VySWQpfS8ke3NhZmVTZWdtZW50KHByb2plY3RJZCl9LyR7aWR9LiR7ZXh0fWA7XG59XG5cbmZ1bmN0aW9uIGNhbm9uaWNhbFVyaShrZXk6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBgLyR7a2V5LnNwbGl0KFwiL1wiKS5tYXAodXJpRW5jb2RlKS5qb2luKFwiL1wiKX1gO1xufVxuXG4vKiogVXBsb2FkIGEgZGF0YS1VUkwgaW1hZ2UgdG8gUzM7IHJldHVybnMgdGhlIHB1YmxpYyBDbG91ZEZyb250IFVSTC4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRJbWFnZURhdGFVcmwoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBhY2Nlc3NLZXkgPSByZXF1aXJlRW52KGN0eCwgXCJBV1NfQUNDRVNTX0tFWV9JRFwiKTtcbiAgY29uc3Qgc2VjcmV0S2V5ID0gcmVxdWlyZUVudihjdHgsIFwiQVdTX1NFQ1JFVF9BQ0NFU1NfS0VZXCIpO1xuICBjb25zdCBidWNrZXQgPSByZXF1aXJlRW52KGN0eCwgXCJBV1NfQlVDS0VUXCIpO1xuICBjb25zdCByZWdpb24gPSB0eXBlb2YgY3R4LmVudi5BV1NfUkVHSU9OID09PSBcInN0cmluZ1wiICYmIGN0eC5lbnYuQVdTX1JFR0lPTiA/IGN0eC5lbnYuQVdTX1JFR0lPTiA6IFwidXMtZWFzdC0yXCI7XG5cbiAgY29uc3QgeyBjb250ZW50VHlwZSwgYm9keSwgZXh0IH0gPSBkZWNvZGVEYXRhVXJsKHNyYyk7XG4gIGNvbnN0IGtleSA9IG9iamVjdEtleShjdHguYXV0aC51c2VySWQsIHByb2plY3RJZCwgZXh0KTtcbiAgY29uc3QgaG9zdCA9IGAke2J1Y2tldH0uczMuJHtyZWdpb259LmFtYXpvbmF3cy5jb21gO1xuICBjb25zdCB1cmkgPSBjYW5vbmljYWxVcmkoa2V5KTtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vJHtob3N0fSR7dXJpfWA7XG4gIGNvbnN0IHsgYW16RGF0ZTogYW16LCBkYXRlU3RhbXAgfSA9IGFtekRhdGUobmV3IERhdGUoKSk7XG4gIGNvbnN0IHBheWxvYWRIYXNoID0gYXdhaXQgc2hhMjU2SGV4KGJvZHkpO1xuXG4gIGNvbnN0IGNhbm9uaWNhbEhlYWRlcnMgPVxuICAgIGBjb250ZW50LXR5cGU6JHtjb250ZW50VHlwZX1cXG5gICtcbiAgICBgaG9zdDoke2hvc3R9XFxuYCArXG4gICAgYHgtYW16LWNvbnRlbnQtc2hhMjU2OiR7cGF5bG9hZEhhc2h9XFxuYCArXG4gICAgYHgtYW16LWRhdGU6JHthbXp9XFxuYDtcbiAgY29uc3Qgc2lnbmVkSGVhZGVycyA9IFwiY29udGVudC10eXBlO2hvc3Q7eC1hbXotY29udGVudC1zaGEyNTY7eC1hbXotZGF0ZVwiO1xuICBjb25zdCBjYW5vbmljYWxSZXF1ZXN0ID0gW1wiUFVUXCIsIHVyaSwgXCJcIiwgY2Fub25pY2FsSGVhZGVycywgc2lnbmVkSGVhZGVycywgcGF5bG9hZEhhc2hdLmpvaW4oXCJcXG5cIik7XG5cbiAgY29uc3QgY3JlZGVudGlhbFNjb3BlID0gYCR7ZGF0ZVN0YW1wfS8ke3JlZ2lvbn0vczMvYXdzNF9yZXF1ZXN0YDtcbiAgY29uc3Qgc3RyaW5nVG9TaWduID0gW1wiQVdTNC1ITUFDLVNIQTI1NlwiLCBhbXosIGNyZWRlbnRpYWxTY29wZSwgYXdhaXQgc2hhMjU2SGV4KGNhbm9uaWNhbFJlcXVlc3QpXS5qb2luKFxuICAgIFwiXFxuXCJcbiAgKTtcblxuICBjb25zdCBrRGF0ZSA9IGF3YWl0IGhtYWMoZW5jb2Rlci5lbmNvZGUoYEFXUzQke3NlY3JldEtleX1gKSwgZGF0ZVN0YW1wKTtcbiAgY29uc3Qga1JlZ2lvbiA9IGF3YWl0IGhtYWMoa0RhdGUsIHJlZ2lvbik7XG4gIGNvbnN0IGtTZXJ2aWNlID0gYXdhaXQgaG1hYyhrUmVnaW9uLCBcInMzXCIpO1xuICBjb25zdCBrU2lnbmluZyA9IGF3YWl0IGhtYWMoa1NlcnZpY2UsIFwiYXdzNF9yZXF1ZXN0XCIpO1xuICBjb25zdCBzaWduYXR1cmUgPSB0b0hleChhd2FpdCBobWFjKGtTaWduaW5nLCBzdHJpbmdUb1NpZ24pKTtcblxuICBjb25zdCBhdXRob3JpemF0aW9uID1cbiAgICBgQVdTNC1ITUFDLVNIQTI1NiBDcmVkZW50aWFsPSR7YWNjZXNzS2V5fS8ke2NyZWRlbnRpYWxTY29wZX0sIGAgK1xuICAgIGBTaWduZWRIZWFkZXJzPSR7c2lnbmVkSGVhZGVyc30sIFNpZ25hdHVyZT0ke3NpZ25hdHVyZX1gO1xuXG4gIGN0eC5sb2cuaW5mbyhcIlVwbG9hZGluZyBpbWFnZSB0byBTM1wiLCB7IGtleSwgYnl0ZXM6IGJvZHkuYnl0ZUxlbmd0aCwgY29udGVudFR5cGUgfSk7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6IFwiUFVUXCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogY29udGVudFR5cGUsXG4gICAgICBcIngtYW16LWNvbnRlbnQtc2hhMjU2XCI6IHBheWxvYWRIYXNoLFxuICAgICAgXCJ4LWFtei1kYXRlXCI6IGFteixcbiAgICAgIEF1dGhvcml6YXRpb246IGF1dGhvcml6YXRpb25cbiAgICB9LFxuICAgIGJvZHlcbiAgfSk7XG5cbiAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgIGNvbnN0IGRldGFpbCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKS5jYXRjaCgoKSA9PiBcIlwiKTtcbiAgICBjdHgubG9nLmVycm9yKFwiUzMgdXBsb2FkIGZhaWxlZFwiLCB7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLCBkZXRhaWw6IGRldGFpbC5zbGljZSgwLCA1MDApLCBrZXkgfSk7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBTMyB1cGxvYWQgZmFpbGVkICgke3Jlc3BvbnNlLnN0YXR1c30pOiAke2RldGFpbC5zbGljZSgwLCAyMDApfWApO1xuICB9XG5cbiAgY29uc3QgcHVibGljVXJsID0gYCR7Q0xPVURfRlJPTlRfVVJMfS8ke2tleX1gO1xuICBjdHgubG9nLmluZm8oXCJTMyB1cGxvYWQgb2tcIiwgeyB1cmw6IHB1YmxpY1VybCB9KTtcbiAgcmV0dXJuIHB1YmxpY1VybDtcbn1cbiIsICJpbXBvcnQgeyBjYXBzdWxlLCBtdXRhdGlvbiwgcXVlcnksIHN0cmluZywgdGFibGUgfSBmcm9tIFwibGFrZWJlZC9zZXJ2ZXJcIjtcbmltcG9ydCB0eXBlIHsgU2VydmVyQ29udGV4dCB9IGZyb20gXCJsYWtlYmVkL3NlcnZlclwiO1xuaW1wb3J0IHtcbiAgTUFYX1BST0pFQ1RfRElNLFxuICBjbGVhbk5hbWUsXG4gIGNsYW1wLFxuICBkZWNvZGVTdHJpbmdBcnJheSxcbiAgZGVjb2RlVHJhbnNmb3JtLFxuICBlbmNvZGVUcmFuc2Zvcm1cbn0gZnJvbSBcIi4uL3NoYXJlZC90eXBlc1wiO1xuaW1wb3J0IHsgdXBsb2FkSW1hZ2VEYXRhVXJsIH0gZnJvbSBcIi4vczNcIjtcblxuLy8gQ2xpZW50cyBzdGlsbCBzZW5kIGltYWdlIGRhdGEgVVJMcyBvbiB1cGxvYWQ7IHRoZSBzZXJ2ZXIgcHV0cyB0aGUgYnl0ZXMgaW5cbi8vIFMzIGFuZCBzdG9yZXMgYSBDbG91ZEZyb250IFVSTCBvbiB0aGUgYXNzZXQgcm93LiBnZXRBc3NldCBzdGF5cyBhIG11dGF0aW9uXG4vLyAobm90IGEgcXVlcnkpIHNvIGxpdmUgcXVlcnkgcGF5bG9hZHMgc3RheSBzbWFsbC5cbmNvbnN0IE1BWF9TUkNfTEVOR1RIID0gMTJfMDAwXzAwMDtcbmNvbnN0IE1BWF9USFVNQl9MRU5HVEggPSAzMDBfMDAwO1xuXG5mdW5jdGlvbiByZXF1aXJlUHJvamVjdChjdHg6IFNlcnZlckNvbnRleHQsIGlkOiBzdHJpbmcpIHtcbiAgY29uc3Qgcm93ID0gY3R4LmRiLnByb2plY3RzLmdldChpZCk7XG4gIGlmICghcm93IHx8IHJvdy5vd25lcklkICE9PSBjdHguYXV0aC51c2VySWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJQcm9qZWN0IG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlTGF5ZXIoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5sYXllcnMuZ2V0KGlkKTtcbiAgaWYgKCFyb3cgfHwgcm93Lm93bmVySWQgIT09IGN0eC5hdXRoLnVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkxheWVyIG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiByZXF1aXJlQXNzZXQoY3R4OiBTZXJ2ZXJDb250ZXh0LCBpZDogc3RyaW5nKSB7XG4gIGNvbnN0IHJvdyA9IGN0eC5kYi5hc3NldHMuZ2V0KGlkKTtcbiAgaWYgKCFyb3cgfHwgcm93Lm93bmVySWQgIT09IGN0eC5hdXRoLnVzZXJJZCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkFzc2V0IG5vdCBmb3VuZFwiKTtcbiAgfVxuICByZXR1cm4gcm93O1xufVxuXG5mdW5jdGlvbiBjaGVja0RhdGFVcmwoc3JjOiBzdHJpbmcpIHtcbiAgaWYgKHR5cGVvZiBzcmMgIT09IFwic3RyaW5nXCIgfHwgIXNyYy5zdGFydHNXaXRoKFwiZGF0YTppbWFnZS9cIikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbWFnZSBtdXN0IGJlIGEgZGF0YSBVUkxcIik7XG4gIH1cbiAgaWYgKHNyYy5sZW5ndGggPiBNQVhfU1JDX0xFTkdUSCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkltYWdlIGlzIHRvbyBsYXJnZVwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjaGVja0RpbSh2YWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJudW1iZXJcIiB8fCAhTnVtYmVyLmlzRmluaXRlKHZhbHVlKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgZGltZW5zaW9uXCIpO1xuICB9XG4gIHJldHVybiBjbGFtcChNYXRoLnJvdW5kKHZhbHVlKSwgMSwgTUFYX1BST0pFQ1RfRElNKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gaW5zZXJ0QXNzZXQoXG4gIGN0eDogU2VydmVyQ29udGV4dCxcbiAgcHJvamVjdElkOiBzdHJpbmcsXG4gIHNyYzogc3RyaW5nLFxuICB3aWR0aDogbnVtYmVyLFxuICBoZWlnaHQ6IG51bWJlclxuKSB7XG4gIGNoZWNrRGF0YVVybChzcmMpO1xuICBjb25zdCB1cmwgPSBhd2FpdCB1cGxvYWRJbWFnZURhdGFVcmwoY3R4LCBwcm9qZWN0SWQsIHNyYyk7XG4gIHJldHVybiBjdHguZGIuYXNzZXRzLmluc2VydCh7XG4gICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgIHByb2plY3RJZCxcbiAgICBzcmM6IHVybCxcbiAgICB3aWR0aDogU3RyaW5nKGNoZWNrRGltKHdpZHRoKSksXG4gICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSlcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldE9yZGVyKGN0eDogU2VydmVyQ29udGV4dCwgcHJvamVjdElkOiBzdHJpbmcsIGlkczogc3RyaW5nW10pIHtcbiAgY29uc3QgdmFsaWQgPSBuZXcgU2V0KFxuICAgIGN0eC5kYi5sYXllcnMud2hlcmUoXCJwcm9qZWN0SWRcIiwgcHJvamVjdElkKS5hbGwoKS5tYXAoKHJvdykgPT4gcm93LmlkKVxuICApO1xuICBjb25zdCBzZWVuID0gbmV3IFNldDxzdHJpbmc+KCk7XG4gIGNvbnN0IG9yZGVyOiBzdHJpbmdbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xuICAgIGlmICh2YWxpZC5oYXMoaWQpICYmICFzZWVuLmhhcyhpZCkpIHtcbiAgICAgIG9yZGVyLnB1c2goaWQpO1xuICAgICAgc2Vlbi5hZGQoaWQpO1xuICAgIH1cbiAgfVxuICAvLyBMYXllcnMgbWlzc2luZyBmcm9tIHRoZSByZXF1ZXN0ZWQgb3JkZXIgZ28gb24gdG9wIHJhdGhlciB0aGFuIHZhbmlzaGluZy5cbiAgZm9yIChjb25zdCBpZCBvZiB2YWxpZCkge1xuICAgIGlmICghc2Vlbi5oYXMoaWQpKSBvcmRlci5wdXNoKGlkKTtcbiAgfVxuICBjdHguZGIucHJvamVjdHMudXBkYXRlKHByb2plY3RJZCwgeyBsYXllck9yZGVyOiBKU09OLnN0cmluZ2lmeShvcmRlcikgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNhcHN1bGUoe1xuICBuYW1lOiBcImltYWdlLWVkaXRvclwiLFxuXG4gIHNjaGVtYToge1xuICAgIHByb2plY3RzOiB0YWJsZSh7XG4gICAgICBvd25lcklkOiBzdHJpbmcoKSxcbiAgICAgIG5hbWU6IHN0cmluZygpLFxuICAgICAgd2lkdGg6IHN0cmluZygpLFxuICAgICAgaGVpZ2h0OiBzdHJpbmcoKSxcbiAgICAgIGxheWVyT3JkZXI6IHN0cmluZygpLmRlZmF1bHQoXCJbXVwiKSxcbiAgICAgIHRodW1iOiBzdHJpbmcoKS5kZWZhdWx0KFwiXCIpXG4gICAgfSksXG4gICAgbGF5ZXJzOiB0YWJsZSh7XG4gICAgICBvd25lcklkOiBzdHJpbmcoKSxcbiAgICAgIHByb2plY3RJZDogc3RyaW5nKCksXG4gICAgICBhc3NldElkOiBzdHJpbmcoKSxcbiAgICAgIC8vIENsaWVudC1nZW5lcmF0ZWQgaWRlbXBvdGVuY3kga2V5IHNvIGEgcmV0cmllZCBhZGRMYXllciBuZXZlciBkdXBsaWNhdGVzLlxuICAgICAgY2xpZW50S2V5OiBzdHJpbmcoKS5kZWZhdWx0KFwiXCIpLFxuICAgICAgbmFtZTogc3RyaW5nKCksXG4gICAgICBkYXRhOiBzdHJpbmcoKVxuICAgIH0pLFxuICAgIGFzc2V0czogdGFibGUoe1xuICAgICAgb3duZXJJZDogc3RyaW5nKCksXG4gICAgICBwcm9qZWN0SWQ6IHN0cmluZygpLFxuICAgICAgc3JjOiBzdHJpbmcoKSxcbiAgICAgIHdpZHRoOiBzdHJpbmcoKSxcbiAgICAgIGhlaWdodDogc3RyaW5nKClcbiAgICB9KVxuICB9LFxuXG4gIHF1ZXJpZXM6IHtcbiAgICBwcm9qZWN0czogcXVlcnkoKGN0eCkgPT4gKHtcbiAgICAgIHJlYWR5OiB0cnVlLFxuICAgICAgaXRlbXM6IGN0eC5kYi5wcm9qZWN0c1xuICAgICAgICAud2hlcmUoXCJvd25lcklkXCIsIGN0eC5hdXRoLnVzZXJJZClcbiAgICAgICAgLm9yZGVyQnkoXCJ1cGRhdGVkQXRcIiwgXCJkZXNjXCIpXG4gICAgICAgIC5hbGwoKVxuICAgICAgICAubWFwKChyb3cpID0+ICh7XG4gICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgICB3aWR0aDogTnVtYmVyKHJvdy53aWR0aCksXG4gICAgICAgICAgaGVpZ2h0OiBOdW1iZXIocm93LmhlaWdodCksXG4gICAgICAgICAgbGF5ZXJPcmRlcjogZGVjb2RlU3RyaW5nQXJyYXkoU3RyaW5nKHJvdy5sYXllck9yZGVyKSksXG4gICAgICAgICAgdXBkYXRlZEF0OiByb3cudXBkYXRlZEF0XG4gICAgICAgIH0pKVxuICAgIH0pKSxcblxuICAgIC8vIFRodW1ibmFpbHMgYXJlIHRoZSBvbmUgYnVsa3kgcGF5bG9hZCBwdXNoZWQgYnkgcXVlcmllczsgb25seSB0aGUgaG9tZVxuICAgIC8vIHNjcmVlbiBzdWJzY3JpYmVzIHRvIHRoaXMgb25lLlxuICAgIHByb2plY3RUaHVtYnM6IHF1ZXJ5KChjdHgpID0+ICh7XG4gICAgICByZWFkeTogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBjdHguZGIucHJvamVjdHNcbiAgICAgICAgLndoZXJlKFwib3duZXJJZFwiLCBjdHguYXV0aC51c2VySWQpXG4gICAgICAgIC5hbGwoKVxuICAgICAgICAubWFwKChyb3cpID0+ICh7IGlkOiByb3cuaWQsIHRodW1iOiByb3cudGh1bWIgfSkpXG4gICAgfSkpLFxuXG4gICAgbGF5ZXJzOiBxdWVyeSgoY3R4KSA9PiAoe1xuICAgICAgcmVhZHk6IHRydWUsXG4gICAgICBpdGVtczogY3R4LmRiLmxheWVyc1xuICAgICAgICAud2hlcmUoXCJvd25lcklkXCIsIGN0eC5hdXRoLnVzZXJJZClcbiAgICAgICAgLmFsbCgpXG4gICAgICAgIC5tYXAoKHJvdykgPT4gKHtcbiAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgIHByb2plY3RJZDogcm93LnByb2plY3RJZCxcbiAgICAgICAgICBhc3NldElkOiByb3cuYXNzZXRJZCxcbiAgICAgICAgICBuYW1lOiByb3cubmFtZSxcbiAgICAgICAgICBkYXRhOiByb3cuZGF0YVxuICAgICAgICB9KSlcbiAgICB9KSlcbiAgfSxcblxuICBtdXRhdGlvbnM6IHtcbiAgICBjcmVhdGVQcm9qZWN0OiBtdXRhdGlvbigoY3R4LCBuYW1lOiBzdHJpbmcsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCByb3cgPSBjdHguZGIucHJvamVjdHMuaW5zZXJ0KHtcbiAgICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgICBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKG5hbWUgPz8gXCJcIiksIFwiVW50aXRsZWRcIiksXG4gICAgICAgIHdpZHRoOiBTdHJpbmcoY2hlY2tEaW0od2lkdGgpKSxcbiAgICAgICAgaGVpZ2h0OiBTdHJpbmcoY2hlY2tEaW0oaGVpZ2h0KSksXG4gICAgICAgIGxheWVyT3JkZXI6IFwiW11cIixcbiAgICAgICAgdGh1bWI6IFwiXCJcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHsgaWQ6IHJvdy5pZCB9O1xuICAgIH0pLFxuXG4gICAgY3JlYXRlUHJvamVjdEZyb21JbWFnZTogbXV0YXRpb24oXG4gICAgICBhc3luYyAoXG4gICAgICAgIGN0eCxcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICB3aWR0aDogbnVtYmVyLFxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcbiAgICAgICAgbGF5ZXJOYW1lOiBzdHJpbmcsXG4gICAgICAgIHNyYzogc3RyaW5nLFxuICAgICAgICBkYXRhSnNvbjogc3RyaW5nXG4gICAgICApID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGN0eC5kYi5wcm9qZWN0cy5pbnNlcnQoe1xuICAgICAgICAgIG93bmVySWQ6IGN0eC5hdXRoLnVzZXJJZCxcbiAgICAgICAgICBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKG5hbWUgPz8gXCJcIiksIFwiVW50aXRsZWRcIiksXG4gICAgICAgICAgd2lkdGg6IFN0cmluZyhjaGVja0RpbSh3aWR0aCkpLFxuICAgICAgICAgIGhlaWdodDogU3RyaW5nKGNoZWNrRGltKGhlaWdodCkpLFxuICAgICAgICAgIGxheWVyT3JkZXI6IFwiW11cIixcbiAgICAgICAgICB0aHVtYjogXCJcIlxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgYXNzZXQgPSBhd2FpdCBpbnNlcnRBc3NldChjdHgsIHByb2plY3QuaWQsIFN0cmluZyhzcmMgPz8gXCJcIiksIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICBjb25zdCBsYXllciA9IGN0eC5kYi5sYXllcnMuaW5zZXJ0KHtcbiAgICAgICAgICBvd25lcklkOiBjdHguYXV0aC51c2VySWQsXG4gICAgICAgICAgcHJvamVjdElkOiBwcm9qZWN0LmlkLFxuICAgICAgICAgIGFzc2V0SWQ6IGFzc2V0LmlkLFxuICAgICAgICAgIGNsaWVudEtleTogXCJcIixcbiAgICAgICAgICBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKGxheWVyTmFtZSA/PyBcIlwiKSwgXCJJbWFnZVwiKSxcbiAgICAgICAgICBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0oZGVjb2RlVHJhbnNmb3JtKFN0cmluZyhkYXRhSnNvbiA/PyBcIlwiKSkpXG4gICAgICAgIH0pO1xuICAgICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKHByb2plY3QuaWQsIHsgbGF5ZXJPcmRlcjogSlNPTi5zdHJpbmdpZnkoW2xheWVyLmlkXSkgfSk7XG4gICAgICAgIHJldHVybiB7IGlkOiBwcm9qZWN0LmlkLCBsYXllcklkOiBsYXllci5pZCwgYXNzZXRJZDogYXNzZXQuaWQsIHNyYzogYXNzZXQuc3JjIH07XG4gICAgICB9XG4gICAgKSxcblxuICAgIHJlbmFtZVByb2plY3Q6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmVxdWlyZVByb2plY3QoY3R4LCBpZCk7XG4gICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKGlkLCB7IG5hbWU6IGNsZWFuTmFtZShTdHJpbmcobmFtZSA/PyBcIlwiKSwgXCJVbnRpdGxlZFwiKSB9KTtcbiAgICB9KSxcblxuICAgIHNldFByb2plY3RUaHVtYjogbXV0YXRpb24oKGN0eCwgaWQ6IHN0cmluZywgdGh1bWI6IHN0cmluZykgPT4ge1xuICAgICAgcmVxdWlyZVByb2plY3QoY3R4LCBpZCk7XG4gICAgICBpZiAodHlwZW9mIHRodW1iICE9PSBcInN0cmluZ1wiIHx8IHRodW1iLmxlbmd0aCA+IE1BWF9USFVNQl9MRU5HVEgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY3R4LmRiLnByb2plY3RzLnVwZGF0ZShpZCwgeyB0aHVtYiB9KTtcbiAgICB9KSxcblxuICAgIGRlbGV0ZVByb2plY3Q6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIHJlcXVpcmVQcm9qZWN0KGN0eCwgaWQpO1xuICAgICAgZm9yIChjb25zdCBsYXllciBvZiBjdHguZGIubGF5ZXJzLndoZXJlKFwicHJvamVjdElkXCIsIGlkKS5hbGwoKSkge1xuICAgICAgICBjdHguZGIubGF5ZXJzLmRlbGV0ZShsYXllci5pZCk7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGFzc2V0IG9mIGN0eC5kYi5hc3NldHMud2hlcmUoXCJwcm9qZWN0SWRcIiwgaWQpLmFsbCgpKSB7XG4gICAgICAgIGN0eC5kYi5hc3NldHMuZGVsZXRlKGFzc2V0LmlkKTtcbiAgICAgIH1cbiAgICAgIGN0eC5kYi5wcm9qZWN0cy5kZWxldGUoaWQpO1xuICAgIH0pLFxuXG4gICAgYWRkTGF5ZXI6IG11dGF0aW9uKFxuICAgICAgYXN5bmMgKFxuICAgICAgICBjdHgsXG4gICAgICAgIHByb2plY3RJZDogc3RyaW5nLFxuICAgICAgICBjbGllbnRLZXk6IHN0cmluZyxcbiAgICAgICAgbmFtZTogc3RyaW5nLFxuICAgICAgICBkYXRhSnNvbjogc3RyaW5nLFxuICAgICAgICBhc3NldDogeyBhc3NldElkPzogc3RyaW5nOyBzcmM/OiBzdHJpbmc7IHdpZHRoPzogbnVtYmVyOyBoZWlnaHQ/OiBudW1iZXIgfVxuICAgICAgKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSByZXF1aXJlUHJvamVjdChjdHgsIHByb2plY3RJZCk7XG4gICAgICAgIGlmIChjbGllbnRLZXkpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IGN0eC5kYi5sYXllcnNcbiAgICAgICAgICAgIC53aGVyZShcIm93bmVySWRcIiwgY3R4LmF1dGgudXNlcklkKVxuICAgICAgICAgICAgLndoZXJlKFwiY2xpZW50S2V5XCIsIGNsaWVudEtleSlcbiAgICAgICAgICAgIC5hbGwoKVswXTtcbiAgICAgICAgICBpZiAoZXhpc3RpbmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHJvdyA9IGN0eC5kYi5hc3NldHMuZ2V0KFN0cmluZyhleGlzdGluZy5hc3NldElkKSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBsYXllcklkOiBleGlzdGluZy5pZCxcbiAgICAgICAgICAgICAgYXNzZXRJZDogZXhpc3RpbmcuYXNzZXRJZCxcbiAgICAgICAgICAgICAgc3JjOiByb3cgPyBTdHJpbmcocm93LnNyYykgOiBcIlwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBhc3NldElkID0gYXNzZXQ/LmFzc2V0SWQgPz8gXCJcIjtcbiAgICAgICAgbGV0IGFzc2V0U3JjID0gXCJcIjtcbiAgICAgICAgaWYgKGFzc2V0SWQpIHtcbiAgICAgICAgICBjb25zdCBleGlzdGluZyA9IHJlcXVpcmVBc3NldChjdHgsIGFzc2V0SWQpO1xuICAgICAgICAgIGFzc2V0U3JjID0gU3RyaW5nKGV4aXN0aW5nLnNyYyk7XG4gICAgICAgICAgaWYgKGV4aXN0aW5nLnByb2plY3RJZCAhPT0gcHJvamVjdElkKSB7XG4gICAgICAgICAgICAvLyBSZS1ob21lIHNoYXJlZCBhc3NldHMgYnkgY29weWluZyB0aGUgVVJMIHNvIHByb2plY3QgZGVsZXRpb24gc3RheXMgc2ltcGxlLlxuICAgICAgICAgICAgYXNzZXRJZCA9IGN0eC5kYi5hc3NldHMuaW5zZXJ0KHtcbiAgICAgICAgICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgICAgICAgICBwcm9qZWN0SWQsXG4gICAgICAgICAgICAgIHNyYzogZXhpc3Rpbmcuc3JjLFxuICAgICAgICAgICAgICB3aWR0aDogZXhpc3Rpbmcud2lkdGgsXG4gICAgICAgICAgICAgIGhlaWdodDogZXhpc3RpbmcuaGVpZ2h0XG4gICAgICAgICAgICB9KS5pZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgY3JlYXRlZCA9IGF3YWl0IGluc2VydEFzc2V0KFxuICAgICAgICAgICAgY3R4LFxuICAgICAgICAgICAgcHJvamVjdElkLFxuICAgICAgICAgICAgU3RyaW5nKGFzc2V0Py5zcmMgPz8gXCJcIiksXG4gICAgICAgICAgICBhc3NldD8ud2lkdGggPz8gMCxcbiAgICAgICAgICAgIGFzc2V0Py5oZWlnaHQgPz8gMFxuICAgICAgICAgICk7XG4gICAgICAgICAgYXNzZXRJZCA9IGNyZWF0ZWQuaWQ7XG4gICAgICAgICAgYXNzZXRTcmMgPSBTdHJpbmcoY3JlYXRlZC5zcmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgbGF5ZXIgPSBjdHguZGIubGF5ZXJzLmluc2VydCh7XG4gICAgICAgICAgb3duZXJJZDogY3R4LmF1dGgudXNlcklkLFxuICAgICAgICAgIHByb2plY3RJZCxcbiAgICAgICAgICBhc3NldElkLFxuICAgICAgICAgIGNsaWVudEtleTogU3RyaW5nKGNsaWVudEtleSA/PyBcIlwiKSxcbiAgICAgICAgICBuYW1lOiBjbGVhbk5hbWUoU3RyaW5nKG5hbWUgPz8gXCJcIiksIFwiSW1hZ2VcIiksXG4gICAgICAgICAgZGF0YTogZW5jb2RlVHJhbnNmb3JtKGRlY29kZVRyYW5zZm9ybShTdHJpbmcoZGF0YUpzb24gPz8gXCJcIikpKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBkZWNvZGVTdHJpbmdBcnJheShTdHJpbmcocHJvamVjdC5sYXllck9yZGVyKSk7XG4gICAgICAgIG9yZGVyLnB1c2gobGF5ZXIuaWQpO1xuICAgICAgICBjdHguZGIucHJvamVjdHMudXBkYXRlKHByb2plY3RJZCwgeyBsYXllck9yZGVyOiBKU09OLnN0cmluZ2lmeShvcmRlcikgfSk7XG4gICAgICAgIHJldHVybiB7IGxheWVySWQ6IGxheWVyLmlkLCBhc3NldElkLCBzcmM6IGFzc2V0U3JjIH07XG4gICAgICB9XG4gICAgKSxcblxuICAgIHVwZGF0ZUxheWVyOiBtdXRhdGlvbigoY3R4LCBpZDogc3RyaW5nLCBkYXRhSnNvbjogc3RyaW5nKSA9PiB7XG4gICAgICByZXF1aXJlTGF5ZXIoY3R4LCBpZCk7XG4gICAgICBjdHguZGIubGF5ZXJzLnVwZGF0ZShpZCwgeyBkYXRhOiBlbmNvZGVUcmFuc2Zvcm0oZGVjb2RlVHJhbnNmb3JtKFN0cmluZyhkYXRhSnNvbiA/PyBcIlwiKSkpIH0pO1xuICAgIH0pLFxuXG4gICAgcmVuYW1lTGF5ZXI6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgcmVxdWlyZUxheWVyKGN0eCwgaWQpO1xuICAgICAgY3R4LmRiLmxheWVycy51cGRhdGUoaWQsIHsgbmFtZTogY2xlYW5OYW1lKFN0cmluZyhuYW1lID8/IFwiXCIpLCBcIkltYWdlXCIpIH0pO1xuICAgIH0pLFxuXG4gICAgZGVsZXRlTGF5ZXI6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGxheWVyID0gcmVxdWlyZUxheWVyKGN0eCwgaWQpO1xuICAgICAgY3R4LmRiLmxheWVycy5kZWxldGUoaWQpO1xuICAgICAgY29uc3QgcHJvamVjdCA9IGN0eC5kYi5wcm9qZWN0cy5nZXQoU3RyaW5nKGxheWVyLnByb2plY3RJZCkpO1xuICAgICAgaWYgKHByb2plY3QpIHtcbiAgICAgICAgY29uc3Qgb3JkZXIgPSBkZWNvZGVTdHJpbmdBcnJheShTdHJpbmcocHJvamVjdC5sYXllck9yZGVyKSkuZmlsdGVyKChsYXllcklkKSA9PiBsYXllcklkICE9PSBpZCk7XG4gICAgICAgIGN0eC5kYi5wcm9qZWN0cy51cGRhdGUocHJvamVjdC5pZCwgeyBsYXllck9yZGVyOiBKU09OLnN0cmluZ2lmeShvcmRlcikgfSk7XG4gICAgICB9XG4gICAgICAvLyBUaGUgYXNzZXQgaXMga2VwdDogb3RoZXIgbGF5ZXJzIG1heSByZWZlcmVuY2UgaXQgYW5kIHVuZG8gY2FuIHJlc3RvcmUgaXQuXG4gICAgfSksXG5cbiAgICBzZXRMYXllck9yZGVyOiBtdXRhdGlvbigoY3R4LCBwcm9qZWN0SWQ6IHN0cmluZywgaWRzOiBzdHJpbmdbXSkgPT4ge1xuICAgICAgcmVxdWlyZVByb2plY3QoY3R4LCBwcm9qZWN0SWQpO1xuICAgICAgc2V0T3JkZXIoY3R4LCBwcm9qZWN0SWQsIEFycmF5LmlzQXJyYXkoaWRzKSA/IGlkcy5tYXAoU3RyaW5nKSA6IFtdKTtcbiAgICB9KSxcblxuICAgIC8vIFJlYWQtYXMtbXV0YXRpb24gZXNjYXBlIGhhdGNoOiBxdWVyaWVzIGNhbm5vdCB0YWtlIGFyZ3VtZW50cywgYW5kIGFzc2V0XG4gICAgLy8gcGF5bG9hZHMgYXJlIHRvbyBsYXJnZSB0byBsaXZlIGluIGEgbGl2ZSBxdWVyeSByZXN1bHQuXG4gICAgZ2V0QXNzZXQ6IG11dGF0aW9uKChjdHgsIGlkOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IHJvdyA9IHJlcXVpcmVBc3NldChjdHgsIGlkKTtcbiAgICAgIHJldHVybiB7IGlkOiByb3cuaWQsIHNyYzogcm93LnNyYywgd2lkdGg6IE51bWJlcihyb3cud2lkdGgpLCBoZWlnaHQ6IE51bWJlcihyb3cuaGVpZ2h0KSB9O1xuICAgIH0pXG4gIH1cbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQTRGTSxTQUFVLFFBQVcsWUFBYTtBQUN0QyxTQUFPO0FBQ1Q7QUFFTSxTQUFVLE1BQWUsU0FBd0M7QUFDckUsU0FBTztBQUNUO0FBRU0sU0FBVSxTQUNkLFNBQXdEO0FBRXhELFNBQU87QUFDVDtBQTBEQSxTQUFTLE1BQVMsTUFBWTtBQUM1QixTQUFPO0lBQ0w7SUFDQSxjQUFjO0lBQ2QsUUFBUSxPQUFRO0FBQ2QsYUFBTztRQUNMLEdBQUc7UUFDSCxjQUFjOztJQUVsQjs7QUFFSjtBQUVNLFNBQVUsTUFBTSxRQUFrQztBQUN0RCxTQUFPO0lBQ0wsTUFBTTtJQUNOOztBQUVKO0FBRU0sU0FBVSxTQUFNO0FBQ3BCLFNBQU8sTUFBTSxRQUFRO0FBQ3ZCOzs7QUNqTE8sSUFBTSxpQkFBaUI7QUFDdkIsSUFBTSxrQkFBa0I7QUEwRC9CLFNBQVMsT0FBTyxPQUFnQixVQUEwQjtBQUN4RCxTQUFPLE9BQU8sVUFBVSxZQUFZLE9BQU8sU0FBUyxLQUFLLElBQUksUUFBUTtBQUN2RTtBQUVPLFNBQVMsTUFBTSxPQUFlLEtBQWEsS0FBcUI7QUFDckUsU0FBTyxLQUFLLElBQUksS0FBSyxLQUFLLElBQUksS0FBSyxLQUFLLENBQUM7QUFDM0M7QUFFTyxTQUFTLGtCQUFrQixPQUFtRTtBQUNuRyxRQUFNLElBQUksU0FBUyxDQUFDO0FBQ3BCLFNBQU87QUFBQSxJQUNMLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQ2hCLEdBQUcsT0FBTyxFQUFFLEdBQUcsQ0FBQztBQUFBLElBQ2hCLEdBQUcsS0FBSyxJQUFJLGdCQUFnQixPQUFPLEVBQUUsR0FBRyxjQUFjLENBQUM7QUFBQSxJQUN2RCxHQUFHLEtBQUssSUFB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
