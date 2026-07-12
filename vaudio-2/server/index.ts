import { capsule, mutation, query, string, table } from "lakebed/server";
import type { ServerContext } from "lakebed/server";
import { SCENE_DATA_LIMIT, THUMB_LIMIT, cleanName } from "../shared/types";

// Scenes are small params-only JSON documents (layer transforms + effect
// stacks + world FX). Image pixels never reach the server — they live in the
// client's IndexedDB, so every stored value stays well under hosted limits.

function requireScene(ctx: ServerContext, id: string) {
  const row = ctx.db.scenes.get(id);
  if (!row || row.ownerId !== ctx.auth.userId) {
    throw new Error("Scene not found");
  }
  return row;
}

function checkData(data: string): string {
  if (typeof data !== "string" || !data) throw new Error("Missing scene data");
  if (data.length > SCENE_DATA_LIMIT) throw new Error("Scene is too large to save");
  return data;
}

function checkThumb(thumb: unknown): string {
  if (typeof thumb !== "string") return "";
  if (thumb && !thumb.startsWith("data:image/")) return "";
  return thumb.length > THUMB_LIMIT ? "" : thumb;
}

export default capsule({
  name: "vaudio-2",

  schema: {
    scenes: table({
      ownerId: string(),
      name: string(),
      data: string(),
      thumb: string().default(""),
    }),
  },

  queries: {
    scenes: query((ctx) => ({
      ready: true,
      items: ctx.db.scenes
        .where("ownerId", ctx.auth.userId)
        .orderBy("updatedAt", "desc")
        .all()
        .map((row) => ({
          id: row.id,
          name: row.name,
          updatedAt: row.updatedAt,
          thumb: row.thumb,
        })),
    })),
  },

  mutations: {
    saveScene: mutation((ctx, id: string, name: string, data: string, thumb: string) => {
      const cleaned = cleanName(String(name ?? ""), "Untitled");
      const payload = checkData(String(data ?? ""));
      const thumbValue = checkThumb(thumb);
      if (id) {
        requireScene(ctx, id);
        ctx.db.scenes.update(id, { name: cleaned, data: payload, thumb: thumbValue });
        return { id };
      }
      const row = ctx.db.scenes.insert({
        ownerId: ctx.auth.userId,
        name: cleaned,
        data: payload,
        thumb: thumbValue,
      });
      return { id: row.id };
    }),

    renameScene: mutation((ctx, id: string, name: string) => {
      requireScene(ctx, id);
      ctx.db.scenes.update(id, { name: cleanName(String(name ?? ""), "Untitled") });
    }),

    deleteScene: mutation((ctx, id: string) => {
      requireScene(ctx, id);
      ctx.db.scenes.delete(id);
    }),

    // Read-as-mutation: queries cannot take arguments, and scene payloads are
    // only needed on demand when the user loads one.
    getScene: mutation((ctx, id: string) => {
      const row = requireScene(ctx, id);
      return { id: row.id, name: String(row.name), data: String(row.data) };
    }),
  },
});
