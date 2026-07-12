/** App-level settings persisted in localStorage. */

export type AppSettings = {
    recordMicAudio: boolean;
};

const SETTINGS_KEY = "vaudio-2-settings";

export const DEFAULT_SETTINGS: AppSettings = { recordMicAudio: false };

export function loadSettings(): AppSettings {
    try {
        const raw = localStorage.getItem(SETTINGS_KEY);
        if (!raw) return { ...DEFAULT_SETTINGS };
        const parsed = JSON.parse(raw) as Partial<AppSettings>;
        return {
            recordMicAudio: Boolean(parsed.recordMicAudio),
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
