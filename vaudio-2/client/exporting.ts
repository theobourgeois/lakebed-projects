import { cleanName } from "../shared/types";

/** PNG-export / recording resolutions, all keeping the live stage aspect. */
export const EXPORT_RESOLUTIONS = [
    { id: "screen", label: "Screen", height: 0 },
    { id: "720", label: "720p", height: 720 },
    { id: "1080", label: "1080p", height: 1080 },
    { id: "1440", label: "1440p", height: 1440 },
    { id: "2160", label: "4K", height: 2160 },
] as const;

export type ExportResolutionId = (typeof EXPORT_RESOLUTIONS)[number]["id"];

const MAX_EXPORT_EDGE = 8192;

export function resolveExportSize(
    resolutionId: ExportResolutionId,
    stage: { width: number; height: number },
    /** For "screen" PNG exports — multiply the live stage by this. */
    screenScale = 1,
): { width: number; height: number } {
    const aspect = Math.max(0.05, stage.width / Math.max(1, stage.height));
    let height: number;
    let width: number;
    if (resolutionId === "screen") {
        height = Math.max(2, Math.round(stage.height * screenScale));
        width = Math.max(2, Math.round(stage.width * screenScale));
    } else {
        const preset = EXPORT_RESOLUTIONS.find(
            (item) => item.id === resolutionId,
        );
        height = preset?.height || 1080;
        width = Math.max(2, Math.round(height * aspect));
    }
    const longest = Math.max(width, height);
    if (longest > MAX_EXPORT_EDGE) {
        const scale = MAX_EXPORT_EDGE / longest;
        width = Math.max(2, Math.round(width * scale));
        height = Math.max(2, Math.round(height * scale));
    }
    // Keep even dimensions — friendlier for video encoders.
    return { width: width - (width % 2), height: height - (height % 2) };
}

export function pickRecorderMime(includeAudio: boolean): string | undefined {
    const withAudio = [
        "video/webm;codecs=vp9,opus",
        "video/webm;codecs=vp8,opus",
        "video/webm",
        "video/mp4",
    ];
    const videoOnly = [
        "video/webm;codecs=vp9",
        "video/webm;codecs=vp8",
        "video/webm",
        "video/mp4",
    ];
    return (includeAudio ? withAudio : videoOnly).find((type) =>
        MediaRecorder.isTypeSupported(type),
    );
}

export function downloadBlob(blob: Blob, filename: string) {
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
}

export function exportFilename(sceneName: string, extension: string): string {
    const project =
        cleanName(sceneName, "vaudio-2")
            .replace(/[^\w\-]+/g, "-")
            .replace(/-+/g, "-")
            .replace(/^-|-$/g, "") || "vaudio-2";
    const now = new Date();
    const pad = (n: number) => String(n).padStart(2, "0");
    const stamp = [
        now.getFullYear(),
        pad(now.getMonth() + 1),
        pad(now.getDate()),
        "-",
        pad(now.getHours()),
        pad(now.getMinutes()),
        pad(now.getSeconds()),
    ].join("");
    return `${project}-${stamp}.${extension}`;
}
