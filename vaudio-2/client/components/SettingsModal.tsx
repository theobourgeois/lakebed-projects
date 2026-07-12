import type { AppSettings, PreviewQuality } from "../appSettings";
import { Modal, Select, Toggle } from "../ui";

const PREVIEW_QUALITY_OPTIONS = [
    { value: "auto", label: "Automatic" },
    { value: "sharp", label: "Sharp" },
    { value: "performance", label: "Performance" },
] as const;

export function SettingsModal(props: {
    settings: AppSettings;
    recording: boolean;
    onChange: (patch: Partial<AppSettings>) => void;
    onClose: () => void;
}) {
    return (
        <Modal title="Settings" onClose={props.onClose}>
            <div class="space-y-3 border-b border-[var(--line)] p-4">
                <p class="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    Preview
                </p>
                <div class="flex items-center gap-3 border border-[var(--line)] bg-[var(--panel)] px-3 py-3">
                    <span class="min-w-0 flex-1">
                        <span class="block font-mono text-[11px] text-[var(--paper)]">
                            Rendering quality
                        </span>
                        <span class="mt-1 block font-mono text-[9.5px] leading-relaxed text-[var(--mute)]">
                            Automatic balances sharpness and frame rate. Export
                            quality is unaffected.
                        </span>
                    </span>
                    <Select<PreviewQuality>
                        value={props.settings.previewQuality}
                        options={PREVIEW_QUALITY_OPTIONS}
                        onChange={(previewQuality) =>
                            props.onChange({ previewQuality })
                        }
                        class="w-[116px]"
                    />
                </div>
                <Toggle
                    label="Show preview HUD"
                    hint="Shows recording status, play-mode effect messages, and the Show UI button on the preview."
                    checked={props.settings.showPreviewHud}
                    onChange={(checked) =>
                        props.onChange({ showPreviewHud: checked })
                    }
                />
            </div>
            <div class="space-y-3 border-b border-[var(--line)] p-4">
                <p class="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    Accessibility
                </p>
                <Toggle
                    label="Flash-safe mode"
                    hint="Suppresses strobe and performance flash hits without changing the scene."
                    checked={props.settings.flashSafeMode}
                    onChange={(checked) =>
                        props.onChange({ flashSafeMode: checked })
                    }
                />
            </div>
            <div class="space-y-3 p-4">
                <p class="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    Recording
                </p>
                <Toggle
                    label="Mic audio in recording"
                    hint="Requests microphone access when a recording starts."
                    checked={props.settings.recordMicAudio}
                    disabled={props.recording}
                    onChange={(checked) =>
                        props.onChange({ recordMicAudio: checked })
                    }
                />
            </div>
        </Modal>
    );
}
