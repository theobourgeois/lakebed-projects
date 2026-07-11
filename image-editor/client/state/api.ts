// Typed wrappers over the capsule's mutations. Lakebed's useMutation performs
// no hook calls internally (it just binds the WebSocket request), so it is
// safe to create these bindings once at module scope and call them from
// non-component code like the persist queue.

import { useMutation } from "lakebed/client";
import type { AssetPayload } from "../../shared/types";

export const api = {
  createProject: useMutation<[name: string, width: number, height: number], { id: string }>("createProject"),
  createProjectFromImage: useMutation<
    [name: string, width: number, height: number, layerName: string, src: string, dataJson: string],
    { id: string; layerId: string; assetId: string; src: string }
  >("createProjectFromImage"),
  renameProject: useMutation<[id: string, name: string], void>("renameProject"),
  setProjectThumb: useMutation<[id: string, thumb: string], void>("setProjectThumb"),
  deleteProject: useMutation<[id: string], void>("deleteProject"),
  addLayer: useMutation<
    [
      projectId: string,
      clientKey: string,
      name: string,
      dataJson: string,
      asset: { assetId?: string; src?: string; width?: number; height?: number }
    ],
    { layerId: string; assetId: string; src?: string }
  >("addLayer"),
  updateLayer: useMutation<[id: string, dataJson: string], void>("updateLayer"),
  renameLayer: useMutation<[id: string, name: string], void>("renameLayer"),
  deleteLayer: useMutation<[id: string], void>("deleteLayer"),
  setLayerOrder: useMutation<[projectId: string, ids: string[]], void>("setLayerOrder"),
  getAsset: useMutation<[id: string], AssetPayload>("getAsset")
};

/**
 * Queries arrive as `[]` before the first WebSocket result, then as
 * `{ ready: true, items }`. This normalizes both shapes.
 */
export function queryResult<T>(raw: unknown): { ready: boolean; items: T[] } {
  if (raw && typeof raw === "object" && !Array.isArray(raw) && (raw as { ready?: boolean }).ready) {
    const items = (raw as { items?: T[] }).items;
    return { ready: true, items: Array.isArray(items) ? items : [] };
  }
  return { ready: false, items: [] };
}
