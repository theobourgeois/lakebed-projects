import { capsule, mutation, query, string, table } from "lakebed/server";
import type { ServerContext } from "lakebed/server";
import {
  MAX_PROJECT_DIM,
  cleanName,
  clamp,
  decodeStringArray,
  decodeTransform,
  encodeTransform
} from "../shared/types";
import { uploadImageDataUrl } from "./s3";

// Clients still send image data URLs on upload; the server puts the bytes in
// S3 and stores a CloudFront URL on the asset row. getAsset stays a mutation
// (not a query) so live query payloads stay small.
const MAX_SRC_LENGTH = 12_000_000;
const MAX_THUMB_LENGTH = 300_000;

function requireProject(ctx: ServerContext, id: string) {
  const row = ctx.db.projects.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Project not found");
  }
  return row;
}

function requireLayer(ctx: ServerContext, id: string) {
  const row = ctx.db.layers.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Layer not found");
  }
  return row;
}

function requireAsset(ctx: ServerContext, id: string) {
  const row = ctx.db.assets.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Asset not found");
  }
  return row;
}

function checkDataUrl(src: string) {
  if (typeof src !== "string" || !src.startsWith("data:image/")) {
    throw new Error("Image must be a data URL");
  }
  if (src.length > MAX_SRC_LENGTH) {
    throw new Error("Image is too large");
  }
}

function checkDim(value: number): number {
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error("Invalid dimension");
  }
  return clamp(Math.round(value), 1, MAX_PROJECT_DIM);
}

async function insertAsset(
  ctx: ServerContext,
  projectId: string,
  src: string,
  width: number,
  height: number
) {
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

function setOrder(ctx: ServerContext, projectId: string, ids: string[]) {
  const valid = new Set(
    ctx.db.layers.where("projectId", projectId).all().map((row) => row.id)
  );
  const seen = new Set<string>();
  const order: string[] = [];
  for (const id of ids) {
    if (valid.has(id) && !seen.has(id)) {
      order.push(id);
      seen.add(id);
    }
  }
  // Layers missing from the requested order go on top rather than vanishing.
  for (const id of valid) {
    if (!seen.has(id)) order.push(id);
  }
  ctx.db.projects.update(projectId, { layerOrder: JSON.stringify(order) });
}

export default capsule({
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
      items: ctx.db.projects
        .where("ownerId", ctx.auth.userId)
        .orderBy("updatedAt", "desc")
        .all()
        .map((row) => ({
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
      items: ctx.db.projects
        .where("ownerId", ctx.auth.userId)
        .all()
        .map((row) => ({ id: row.id, thumb: row.thumb }))
    })),

    layers: query((ctx) => ({
      ready: true,
      items: ctx.db.layers
        .where("ownerId", ctx.auth.userId)
        .all()
        .map((row) => ({
          id: row.id,
          projectId: row.projectId,
          assetId: row.assetId,
          name: row.name,
          data: row.data
        }))
    }))
  },

  mutations: {
    createProject: mutation((ctx, name: string, width: number, height: number) => {
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
      async (
        ctx,
        name: string,
        width: number,
        height: number,
        layerName: string,
        src: string,
        dataJson: string
      ) => {
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

    renameProject: mutation((ctx, id: string, name: string) => {
      requireProject(ctx, id);
      ctx.db.projects.update(id, { name: cleanName(String(name ?? ""), "Untitled") });
    }),

    setProjectThumb: mutation((ctx, id: string, thumb: string) => {
      requireProject(ctx, id);
      if (typeof thumb !== "string" || thumb.length > MAX_THUMB_LENGTH) {
        return;
      }
      ctx.db.projects.update(id, { thumb });
    }),

    deleteProject: mutation((ctx, id: string) => {
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
      async (
        ctx,
        projectId: string,
        clientKey: string,
        name: string,
        dataJson: string,
        asset: { assetId?: string; src?: string; width?: number; height?: number }
      ) => {
        const project = requireProject(ctx, projectId);
        if (clientKey) {
          const existing = ctx.db.layers
            .where("ownerId", ctx.auth.userId)
            .where("clientKey", clientKey)
            .all()[0];
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
            // Re-home shared assets by copying the URL so project deletion stays simple.
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

    updateLayer: mutation((ctx, id: string, dataJson: string) => {
      requireLayer(ctx, id);
      ctx.db.layers.update(id, { data: encodeTransform(decodeTransform(String(dataJson ?? ""))) });
    }),

    renameLayer: mutation((ctx, id: string, name: string) => {
      requireLayer(ctx, id);
      ctx.db.layers.update(id, { name: cleanName(String(name ?? ""), "Image") });
    }),

    deleteLayer: mutation((ctx, id: string) => {
      const layer = requireLayer(ctx, id);
      ctx.db.layers.delete(id);
      const project = ctx.db.projects.get(String(layer.projectId));
      if (project) {
        const order = decodeStringArray(String(project.layerOrder)).filter((layerId) => layerId !== id);
        ctx.db.projects.update(project.id, { layerOrder: JSON.stringify(order) });
      }
      // The asset is kept: other layers may reference it and undo can restore it.
    }),

    setLayerOrder: mutation((ctx, projectId: string, ids: string[]) => {
      requireProject(ctx, projectId);
      setOrder(ctx, projectId, Array.isArray(ids) ? ids.map(String) : []);
    }),

    // Read-as-mutation escape hatch: queries cannot take arguments, and asset
    // payloads are too large to live in a live query result.
    getAsset: mutation((ctx, id: string) => {
      const row = requireAsset(ctx, id);
      return { id: row.id, src: row.src, width: Number(row.width), height: Number(row.height) };
    })
  }
});
