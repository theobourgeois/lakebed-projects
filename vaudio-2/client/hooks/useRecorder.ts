import { useEffect, useRef, useState } from "preact/hooks";
import type { Scene } from "../../shared/types";
import type { AppSettings } from "../appSettings";
import type { EngineHandle, FrameState } from "../engine";
import {
    downloadBlob,
    exportFilename,
    pickRecorderMime,
    resolveExportSize,
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

    function applyExportCanvasSize() {
        const engine = deps.engineRef.current;
        if (!engine) return null;
        const { exportFormat, exportQuality } = deps.settingsRef.current;
        const size = resolveExportSize(exportFormat, exportQuality);
        exportLockRef.current = size;
        // Frame layout must use the output aspect, not the editor's aspect.
        deps.stageSizeRef.current = size;
        // Set the cap first so a high-DPI display never briefly allocates an
        // oversized (for example 3240×5760) WebGL target.
        engine.setPixelRatioCap(1);
        engine.resize(size.width, size.height);
        return size;
    }

    async function toggleRecording() {
        const canvas = deps.canvasRef.current;
        const engine = deps.engineRef.current;
        if (!canvas || !engine) return;
        // Prefer the live MediaRecorder over React state so keyboard
        // shortcuts still stop capture with a stale effect closure.
        if (recorderRef.current) {
            if (recorderRef.current.state === "recording") {
                recorderRef.current.stop();
            }
            return;
        }
        const size = applyExportCanvasSize();
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
                // Scale the bitrate with the chosen frame size for clean 4K.
                videoBitsPerSecond: Math.min(
                    50_000_000,
                    Math.max(24_000_000, size.width * size.height * 6),
                ),
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
        const size = applyExportCanvasSize();
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
        exportLockRef,
        toggleRecording,
        exportPng,
    };
}
