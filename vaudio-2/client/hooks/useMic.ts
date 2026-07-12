import { useEffect, useRef, useState } from "preact/hooks";
import type { GlobalFx, Scene } from "../../shared/types";

/** Microphone capture feeding the audio-react analyser. */
export function useMic(deps: {
    audioContextRef: { current: AudioContext | null };
    sceneRef: { current: Scene };
    audioLevelRef: { current: number };
    updateGlobal: (patch: Partial<GlobalFx>) => void;
    showToast: (message: string) => void;
    /** True while a recording that includes mic audio is running. */
    recordingMicRef: { current: boolean };
}) {
    const [micActive, setMicActive] = useState(false);
    const micStreamRef = useRef<MediaStream | null>(null);
    const analyserRef = useRef<AnalyserNode | null>(null);

    useEffect(() => {
        return () => {
            for (const track of micStreamRef.current?.getTracks() ?? [])
                track.stop();
        };
    }, []);

    async function ensureMic(options?: {
        toastOnSuccess?: boolean;
        toastOnError?: boolean;
    }): Promise<boolean> {
        if (micStreamRef.current) {
            setMicActive(true);
            return true;
        }
        try {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
                video: false,
            });
            micStreamRef.current = stream;
            if (!deps.audioContextRef.current)
                deps.audioContextRef.current = new AudioContext();
            await deps.audioContextRef.current.resume();
            const analyser = deps.audioContextRef.current.createAnalyser();
            analyser.fftSize = 256;
            analyser.smoothingTimeConstant = 0.68;
            deps.audioContextRef.current
                .createMediaStreamSource(stream)
                .connect(analyser);
            analyserRef.current = analyser;
            setMicActive(true);
            if (deps.sceneRef.current.global.audioReact < 0.3)
                deps.updateGlobal({ audioReact: 0.7 });
            if (options?.toastOnSuccess !== false)
                deps.showToast("Mic live — audio drives the shader");
            return true;
        } catch {
            if (options?.toastOnError !== false)
                deps.showToast("Microphone was blocked");
            return false;
        }
    }

    async function toggleMic() {
        if (micActive) {
            if (deps.recordingMicRef.current) {
                deps.showToast("Can't stop mic while recording with audio");
                return;
            }
            for (const track of micStreamRef.current?.getTracks() ?? [])
                track.stop();
            micStreamRef.current = null;
            analyserRef.current = null;
            deps.audioLevelRef.current = 0;
            setMicActive(false);
            return;
        }
        await ensureMic();
    }

    return { micActive, micStreamRef, analyserRef, ensureMic, toggleMic };
}
