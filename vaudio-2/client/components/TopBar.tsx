import type { SceneMeta } from "../../shared/types";
import {
    EXPORT_FORMATS,
    EXPORT_QUALITIES,
    type ExportFormatId,
    type ExportQualityId,
} from "../exporting";
import {
    IDice,
    IDownload,
    IMove,
    IPanel,
    IPause,
    IPlay,
    ISave,
    ISettings,
    ISpark,
    IWand,
} from "../icons";
import { Button, ButtonGroup } from "../ui";
import { RecordOptionsMenu } from "./RecordOptionsMenu";
import { ScenesMenu } from "./ScenesMenu";

export type StageMode = "arrange" | "play";

export function TopBar(props: {
    sceneName: string;
    onRename: (name: string) => void;
    onRenameCommit: (name: string) => void;
    stageMode: StageMode;
    onStageMode: (mode: StageMode) => void;
    frozen: boolean;
    onToggleFrozen: () => void;
    onChaos: () => void;
    onMutate: () => void;
    onSave: () => void;
    scenesOpen: boolean;
    onToggleScenes: () => void;
    onCloseScenes: () => void;
    scenes: SceneMeta[];
    isGuest: boolean;
    onNewScene: () => void;
    onLoadScene: (id: string) => void;
    onDeleteScene: (id: string) => void;
    recording: boolean;
    recordMicAudio: boolean;
    onToggleRecording: () => void;
    exportFormat: ExportFormatId;
    exportQuality: ExportQualityId;
    onExportFormat: (id: ExportFormatId) => void;
    onExportQuality: (id: ExportQualityId) => void;
    onExportPng: () => void;
    settingsOpen: boolean;
    onToggleSettings: () => void;
    helpOpen: boolean;
    onToggleHelp: () => void;
    fullscreen: boolean;
    onToggleFullscreen: () => void;
    onHideUi: () => void;
}) {
    return (
        <header class="relative z-50 flex h-11 flex-shrink-0 items-center gap-1.5 border-b border-[var(--line)] bg-[var(--panel)] px-2.5">
            <span
                class="mr-1 text-[1.15rem] font-bold leading-none tracking-[-0.08em] text-[var(--acid)]"
                style={{ fontFamily: '"Space Grotesk", sans-serif' }}
            >
                vaudio-2
            </span>
            <input
                class="h-[26px] w-36 border border-transparent bg-transparent px-1.5 text-[12px] font-medium text-[var(--paper)] outline-none hover:border-[var(--line)] focus:border-[var(--acid)]/60"
                value={props.sceneName}
                onInput={(event) =>
                    props.onRename(
                        (event.currentTarget as HTMLInputElement).value,
                    )
                }
                onBlur={(event) =>
                    props.onRenameCommit(
                        (event.currentTarget as HTMLInputElement).value,
                    )
                }
            />
            <span class="mx-1 h-4 w-px bg-[var(--line)]" />
            <Button
                title="Arrange layers"
                active={props.stageMode === "arrange"}
                onClick={() => props.onStageMode("arrange")}
                label="Arrange"
            >
                <IMove />
            </Button>
            <Button
                title="Play the canvas with your cursor (P)"
                active={props.stageMode === "play"}
                onClick={() => props.onStageMode("play")}
                label="Play"
            >
                <ISpark />
            </Button>
            <span class="mx-1 h-4 w-px bg-[var(--line)]" />
            <Button
                title="Randomize everything (=)"
                onClick={props.onChaos}
                label="Chaos"
            >
                <IDice />
            </Button>
            <Button
                title="Nudge the world somewhere new (-)"
                onClick={props.onMutate}
                label="Mutate"
            >
                <IWand />
            </Button>
            <Button
                title={
                    props.frozen ? "Resume time (Space)" : "Freeze time (Space)"
                }
                active={props.frozen}
                onClick={props.onToggleFrozen}
            >
                {props.frozen ? <IPlay /> : <IPause />}
            </Button>
            <span class="flex-1" />
            <Button
                title="Save scene to your library"
                onClick={props.onSave}
                label="Save"
            >
                <ISave />
            </Button>
            <ScenesMenu
                open={props.scenesOpen}
                onToggle={props.onToggleScenes}
                onClose={props.onCloseScenes}
                scenes={props.scenes}
                isGuest={props.isGuest}
                onNew={props.onNewScene}
                onLoad={props.onLoadScene}
                onDelete={props.onDeleteScene}
            />
            <span class="mx-1 h-4 w-px bg-[var(--line)]" />
            <ButtonGroup>
                <Button
                    title={
                        props.recording
                            ? "Stop recording (Enter)"
                            : props.recordMicAudio
                              ? "Record canvas + mic (Enter)"
                              : "Record the canvas to video (Enter)"
                    }
                    danger={props.recording}
                    onClick={props.onToggleRecording}
                >
                    {props.recording ? (
                        <span class="rec-dot inline-block h-2.5 w-2.5 rounded-full bg-[#c45b6a]" />
                    ) : (
                        <span class="inline-block h-2.5 w-2.5 rounded-full border-[1.5px] border-current" />
                    )}
                </Button>
                <Button
                    title={`Export PNG as ${EXPORT_QUALITIES.find((item) => item.id === props.exportQuality)?.label ?? "selected"} ${EXPORT_FORMATS.find((item) => item.id === props.exportFormat)?.label ?? "format"} (⇧Enter)`}
                    onClick={props.onExportPng}
                >
                    <IDownload />
                </Button>
                <RecordOptionsMenu
                    format={props.exportFormat}
                    quality={props.exportQuality}
                    disabled={props.recording}
                    onFormat={props.onExportFormat}
                    onQuality={props.onExportQuality}
                />
            </ButtonGroup>
            <Button
                title="Settings"
                active={props.settingsOpen}
                onClick={props.onToggleSettings}
            >
                <ISettings />
            </Button>
            <Button
                title="Instrument manual (?)"
                active={props.helpOpen}
                onClick={props.onToggleHelp}
            >
                <span class="grid h-[15px] w-[15px] place-items-center font-mono text-[11px] font-bold leading-none">
                    ?
                </span>
            </Button>
            <Button title="Hide interface (Tab)" onClick={props.onHideUi}>
                <IPanel />
            </Button>
        </header>
    );
}
