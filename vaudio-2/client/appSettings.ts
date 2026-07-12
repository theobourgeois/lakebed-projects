/** App-level settings persisted in localStorage. */

import {
    EXPORT_FORMATS,
    EXPORT_QUALITIES,
    type ExportFormatId,
    type ExportQualityId,
} from "./exporting";

export type PreviewQuality = "auto" | "sharp" | "performance";

export type AppSettings = {
    recordMicAudio: boolean;
    previewQuality: PreviewQuality;
    showPreviewHud: boolean;
    flashSafeMode: boolean;
    exportFormat: ExportFormatId;
    exportQuality: ExportQualityId;
};

const SETTINGS_KEY = "vaudio-2-settings";

export const DEFAULT_SETTINGS: AppSettings = {
    recordMicAudio: false,
    previewQuality: "auto",
    showPreviewHud: true,
    flashSafeMode: false,
    exportFormat: "landscape",
    exportQuality: "medium",
};

export function previewQualityCap(quality: PreviewQuality): number {
    if (quality === "sharp") return 2;
    if (quality === "performance") return 0.85;
    return 1.5;
}

function parseExportFormat(value: unknown): ExportFormatId {
    return EXPORT_FORMATS.some((format) => format.id === value)
        ? (value as ExportFormatId)
        : DEFAULT_SETTINGS.exportFormat;
}

function parseExportQuality(value: unknown): ExportQualityId {
    return EXPORT_QUALITIES.some((quality) => quality.id === value)
        ? (value as ExportQualityId)
        : DEFAULT_SETTINGS.exportQuality;
}

export function loadSettings(): AppSettings {
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (!raw) return { ...DEFAULT_SETTINGS };
        const parsed = JSON.parse(raw) as Partial<AppSettings>;
        const previewQuality: PreviewQuality =
            parsed.previewQuality === "sharp" ||
            parsed.previewQuality === "performance"
                ? parsed.previewQuality
                : "auto";
        return {
            recordMicAudio: Boolean(parsed.recordMicAudio),
            previewQuality,
            showPreviewHud: parsed.showPreviewHud !== false,
            flashSafeMode: Boolean(parsed.flashSafeMode),
            exportFormat: parseExportFormat(parsed.exportFormat),
            exportQuality: parseExportQuality(parsed.exportQuality),
        };
    } catch {
        return { ...DEFAULT_SETTINGS };
    }
}

export function saveSettings(settings: AppSettings) {
    try {
        localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    } catch {
        /* ignore quota / private mode */
    }
}
