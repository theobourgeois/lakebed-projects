import type { AppSettings } from "../appSettings";
import { Modal, Toggle } from "../ui";

export function SettingsModal(props: {
    settings: AppSettings;
    recording: boolean;
    onChange: (patch: Partial<AppSettings>) => void;
    onClose: () => void;
}) {
    return (
        <Modal title="Settings" onClose={props.onClose}>
            <div class="space-y-3 p-4">
                <p class="font-mono text-[9px] uppercase tracking-[0.14em] text-[var(--mute)]">
                    Recording
                </p>
                <Toggle
                    label="Mic audio in recording"
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
