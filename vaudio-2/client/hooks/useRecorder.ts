import { useEffect, useRef, useState } from "preact/hooks";
import type { Scene } from "../../shared/types";
import type { AppSettings } from "../appSettings";
import type { EngineHandle, FrameState } from "../engine";
import {
    downloadBlob,
    exportFilename,
    pickRecorderMime,
    resolveExportSize,
    type ExportResolutionId,
} from "../exporting";
import type { StageSize } from "../frame";

/**
 * Video recording and PNG export. While capturing, the canvas is locked to
 * the chosen export resolution via `exportLockRef` (the engine loop skips
 * adaptive-quality changes while it is set).
 */
export function useRecorder(deps: {
    canvasRef: { current: HTMLCanvasElement | null };
    engineRef: { current: EngineHandle | null };
    stageRef: { current: HTMLDivElement | null };
    stageSizeRef: { current: StageSize };
    qualityRef: { current: number };
    sceneRef: { current: Scene };
    settingsRef: { current: AppSettings };
    micStreamRef: { current: MediaStream | null };
    ensureMic: (options?: {
        toastOnSuccess?: boolean;
        toastOnError?: boolean;
    }) => Promise<boolean>;
    /** Shared with useMic — true while recording includes mic audio. */
    recordingMicRef: { current: boolean };
    buildFrame: () => FrameState;
    showToast: (message: string) => void;
}) {
    const [recording, setRecording] = useState(false);
    const [recordingWithMic, setRecordingWithMic] = useState(false);
    const [exportRes, setExportRes] = useState<ExportResolutionId>("1080");
    const exportResRef = useRef<ExportResolutionId>(exportRes);
    exportResRef.current = exportRes;

    const exportLockRef = useRef<{ width: number; height: number } | null>(
        null,
    );
    const recorderRef = useRef<MediaRecorder | null>(null);
    const chunksRef = useRef<Blob[]>([]);

    useEffect(() => {
        return () => {
            if (recorderRef.current?.state === "recording")
                recorderRef.current.stop();
        };
    }, []);

    function restoreLiveCanvasSize() {
        const engine = deps.engineRef.current;
        const stage = deps.stageRef.current;
        if (!engine || !stage) return;
        const rect = stage.getBoundingClientRect();
        deps.stageSizeRef.current = { width: rect.width, height: rect.height };
        engine.resize(rect.width, rect.height);
        engine.setPixelRatioCap(deps.qualityRef.current);
    }

    function applyExportCanvasSize(
        resolutionId: ExportResolutionId,
        screenScale = 1,
    ) {
        const engine = deps.engineRef.current;
        if (!engine) return null;
        const size = resolveExportSize(
            resolutionId,
            deps.stageSizeRef.current,
            screenScale,
        );
        exportLockRef.current = size;
        engine.resize(size.width, size.height);
        engine.setPixelRatioCap(1);
        return size;
    }

    async function toggleRecording() {
        const canvas = deps.canvasRef.current;
        const engine = deps.engineRef.current;
        if (!canvas || !engine) return;
        if (recording) {
            recorderRef.current?.stop();
            return;
        }
        const size = applyExportCanvasSize(
            exportResRef.current,
            window.devicePixelRatio || 1,
        );
        if (!size) return;

        let includeMic = deps.settingsRef.current.recordMicAudio;
        if (includeMic) {
            const ok = await deps.ensureMic({
                toastOnSuccess: false,
                toastOnError: true,
            });
            if (!ok) includeMic = false;
        }

        // One frame at the locked size before captureStream reads dimensions.
        engine.render(deps.buildFrame());
        const stream = canvas.captureStream(60);
        if (includeMic) {
            for (const track of deps.micStreamRef.current?.getAudioTracks() ??
                []) {
                stream.addTrack(track);
            }
        }
        const mimeType = pickRecorderMime(includeMic);
        try {
            const recorder = new MediaRecorder(stream, {
                mimeType,
                videoBitsPerSecond: 18_000_000,
                ...(includeMic ? { audioBitsPerSecond: 256_000 } : {}),
            });
            chunksRef.current = [];
            deps.recordingMicRef.current = includeMic;
            recorder.ondataavailable = (event) => {
                if (event.data.size) chunksRef.current.push(event.data);
            };
            recorder.onstop = () => {
                const extension = (recorder.mimeType || "video/webm").includes(
                    "mp4",
                )
                    ? "mp4"
                    : "webm";
                const blob = new Blob(chunksRef.current, {
                    type: recorder.mimeType || "video/webm",
                });
                chunksRef.current = [];
                deps.recordingMicRef.current = false;
                exportLockRef.current = null;
                restoreLiveCanvasSize();
                downloadBlob(
                    blob,
                    exportFilename(deps.sceneRef.current.name, extension),
                );
                recorderRef.current = null;
                setRecordingWithMic(false);
                setRecording(false);
            };
            recorder.start(250);
            recorderRef.current = recorder;
            setRecordingWithMic(includeMic);
            setRecording(true);
            deps.showToast(
                includeMic
                    ? `Recording ${size.width}×${size.height} · mic`
                    : `Recording ${size.width}×${size.height}`,
            );
        } catch {
            deps.recordingMicRef.current = false;
            setRecordingWithMic(false);
            exportLockRef.current = null;
            restoreLiveCanvasSize();
            deps.showToast("Recording is not supported here");
        }
    }

    function exportPng() {
        const engine = deps.engineRef.current;
        const canvas = deps.canvasRef.current;
        if (!engine || !canvas) return;
        const size = applyExportCanvasSize(exportResRef.current, 3);
        if (!size) return;
        engine.render(deps.buildFrame());
        canvas.toBlob((blob) => {
            exportLockRef.current = null;
            restoreLiveCanvasSize();
            if (blob) {
                downloadBlob(
                    blob,
                    exportFilename(deps.sceneRef.current.name, "png"),
                );
                deps.showToast(`Exported ${size.width}×${size.height}`);
            } else deps.showToast("Export failed");
        }, "image/png");
    }

    return {
        recording,
        recordingWithMic,
        exportRes,
        setExportRes,
        exportLockRef,
        toggleRecording,
        exportPng,
    };
}
