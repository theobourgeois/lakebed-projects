import { cleanName } from "../shared/types";

/** Output shapes, expressed at the medium (1080p-class) quality level. */
export const EXPORT_FORMATS = [
    {
        id: "landscape",
        label: "Landscape",
        aspect: "16:9",
        width: 1920,
        height: 1080,
    },
    {
        id: "vertical",
        label: "Vertical",
        aspect: "9:16",
        width: 1080,
        height: 1920,
    },
    {
        id: "square",
        label: "Square",
        aspect: "1:1",
        width: 1080,
        height: 1080,
    },
    {
        id: "portrait",
        label: "Portrait",
        aspect: "4:5",
        width: 1080,
        height: 1350,
    },
    {
        id: "classic",
        label: "Classic",
        aspect: "4:3",
        width: 1440,
        height: 1080,
    },
] as const;

export const EXPORT_QUALITIES = [
    { id: "low", label: "Low", detail: "720p", scale: 2 / 3 },
    { id: "medium", label: "Medium", detail: "1080p", scale: 1 },
    { id: "high", label: "High", detail: "4K", scale: 2 },
] as const;

export type ExportFormatId = (typeof EXPORT_FORMATS)[number]["id"];
export type ExportQualityId = (typeof EXPORT_QUALITIES)[number]["id"];

export function resolveExportSize(
    formatId: ExportFormatId,
    qualityId: ExportQualityId,
): { width: number; height: number } {
    const format =
        EXPORT_FORMATS.find((item) => item.id === formatId) ??
        EXPORT_FORMATS[0];
    const quality =
        EXPORT_QUALITIES.find((item) => item.id === qualityId) ??
        EXPORT_QUALITIES[1];
    return {
        width: Math.round(format.width * quality.scale),
        height: Math.round(format.height * quality.scale),
    };
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
