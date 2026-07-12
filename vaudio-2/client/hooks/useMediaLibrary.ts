import { useEffect, useRef, useState } from "preact/hooks";
import {
    DEFAULT_LAYER_FX,
    MAX_LAYERS,
    cleanName,
    isLiveKind,
    type AudioVisualId,
    type MediaKind,
    type Scene,
    type SceneLayer,
} from "../../shared/types";
import type { EngineHandle } from "../engine";
import type { ImageInfo } from "../frame";
import {
    canvasThumb,
    classifyBlob,
    classifyFile,
    defaultLayerName,
    ensureSpectrumCanvas,
    levelFromSpectrum,
    mediaKindLabel,
    paintAudioVisual,
    paintDataBytes,
    randomAudioVisual,
    withAmbientFloor,
} from "../media";
import { decodeImageBlob, getImageBlob, newId, putImageBlob } from "../store";

export type MediaRuntime = {
    kind: MediaKind;
    objectUrl?: string;
    video?: HTMLVideoElement;
    audio?: HTMLAudioElement;
    canvas?: HTMLCanvasElement;
    analyser?: AnalyserNode;
    sourceNode?: MediaElementAudioSourceNode;
    spectrum?: Uint8Array;
    /** Device capture backing camera / mic layers. */
    stream?: MediaStream;
    streamSourceNode?: MediaStreamAudioSourceNode;
};

/**
 * Owns imported media: IndexedDB blobs, live <video>/<audio> runtimes, engine
 * textures, thumbnails, and the shared AudioContext for media analysers.
 */
export function useMediaLibrary(deps: {
    engineRef: { current: EngineHandle | null };
    sceneRef: { current: Scene };
    setScene: (updater: (previous: Scene) => Scene) => void;
    setSelectedId: (id: string | null) => void;
    showToast: (message: string) => void;
    /** Called when an audio file lands and the scene barely reacts to audio. */
    onAudioImported: () => void;
}) {
    const [imageInfo, setImageInfo] = useState<Record<string, ImageInfo>>({});
    const imageInfoRef = useRef<Record<string, ImageInfo>>(imageInfo);
    imageInfoRef.current = imageInfo;

    const mediaRuntimesRef = useRef(new Map<string, MediaRuntime>());
    const audioContextRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        return () => {
            void audioContextRef.current?.close();
        };
    }, []);

    function disposeMediaRuntime(imageId: string) {
        const runtime = mediaRuntimesRef.current.get(imageId);
        if (!runtime) return;
        runtime.video?.pause();
        runtime.audio?.pause();
        for (const track of runtime.stream?.getTracks() ?? []) track.stop();
        if (runtime.video) {
            runtime.video.srcObject = null;
            runtime.video.removeAttribute("src");
            runtime.video.load();
        }
        if (runtime.audio) {
            runtime.audio.removeAttribute("src");
            runtime.audio.load();
        }
        try {
            runtime.sourceNode?.disconnect();
        } catch {
            // already disconnected
        }
        try {
            runtime.streamSourceNode?.disconnect();
        } catch {
            // already disconnected
        }
        try {
            runtime.analyser?.disconnect();
        } catch {
            // already disconnected
        }
        if (runtime.objectUrl) URL.revokeObjectURL(runtime.objectUrl);
        mediaRuntimesRef.current.delete(imageId);
    }

    function disposeAllMediaRuntimes() {
        for (const imageId of [...mediaRuntimesRef.current.keys()]) {
            disposeMediaRuntime(imageId);
        }
    }

    /** Drop the runtime, engine texture, and info entry for an unused image. */
    function forgetImage(imageId: string) {
        // The IndexedDB blob is kept so undo can bring the layer back.
        disposeMediaRuntime(imageId);
        deps.engineRef.current?.removeImage(imageId);
        setImageInfo((info) => {
            const next = { ...info };
            delete next[imageId];
            return next;
        });
    }

    async function ensureMediaAudioContext(): Promise<AudioContext> {
        if (!audioContextRef.current) {
            audioContextRef.current = new AudioContext();
        }
        if (audioContextRef.current.state === "suspended") {
            await audioContextRef.current.resume();
        }
        return audioContextRef.current;
    }

    async function activateMedia(
        imageId: string,
        blob: Blob,
        kind: MediaKind,
    ): Promise<ImageInfo> {
        disposeMediaRuntime(imageId);
        const engine = deps.engineRef.current;

        if (kind === "image") {
            const decoded = await decodeImageBlob(blob);
            engine?.setImage(imageId, decoded.canvas);
            mediaRuntimesRef.current.set(imageId, { kind });
            return {
                width: decoded.width,
                height: decoded.height,
                thumb: decoded.thumb,
                missing: false,
                kind,
            };
        }

        if (kind === "data") {
            const canvas = document.createElement("canvas");
            const buffer = await blob.slice(0, 1024 * 1024).arrayBuffer();
            paintDataBytes(canvas, new Uint8Array(buffer));
            engine?.setImage(imageId, canvas);
            mediaRuntimesRef.current.set(imageId, { kind, canvas });
            return {
                width: canvas.width,
                height: canvas.height,
                thumb: canvasThumb(canvas, canvas.width, canvas.height),
                missing: false,
                kind,
            };
        }

        if (kind === "video") {
            const objectUrl = URL.createObjectURL(blob);
            const video = document.createElement("video");
            video.playsInline = true;
            video.muted = true;
            video.loop = true;
            video.preload = "auto";
            video.setAttribute("playsinline", "");
            video.setAttribute("webkit-playsinline", "");
            video.src = objectUrl;

            await new Promise<void>((resolve, reject) => {
                const onReady = () => {
                    cleanup();
                    resolve();
                };
                const onError = () => {
                    cleanup();
                    reject(new Error("Could not decode that video"));
                };
                const cleanup = () => {
                    video.removeEventListener("loadeddata", onReady);
                    video.removeEventListener("error", onError);
                };
                video.addEventListener("loadeddata", onReady);
                video.addEventListener("error", onError);
                video.load();
            });

            const width = Math.max(1, video.videoWidth);
            const height = Math.max(1, video.videoHeight);
            engine?.setImage(imageId, video);
            mediaRuntimesRef.current.set(imageId, { kind, objectUrl, video });
            void video.play().catch(() => undefined);

            return {
                width,
                height,
                thumb: canvasThumb(video, width, height),
                missing: false,
                kind,
            };
        }

        // audio
        const objectUrl = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.loop = true;
        audio.preload = "auto";
        audio.src = objectUrl;

        const canvas = document.createElement("canvas");
        ensureSpectrumCanvas(canvas);
        paintAudioVisual(canvas, new Uint8Array(128), 0.25, 0);

        const context = await ensureMediaAudioContext();
        const sourceNode = context.createMediaElementSource(audio);
        const analyser = context.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.72;
        sourceNode.connect(analyser);
        analyser.connect(context.destination);

        engine?.setImage(imageId, canvas);
        mediaRuntimesRef.current.set(imageId, {
            kind,
            objectUrl,
            audio,
            canvas,
            analyser,
            sourceNode,
            spectrum: new Uint8Array(analyser.frequencyBinCount),
        });
        void audio.play().catch(() => undefined);

        return {
            width: canvas.width,
            height: canvas.height,
            thumb: canvasThumb(canvas, canvas.width, canvas.height),
            missing: false,
            kind,
        };
    }

    /** Wire a getUserMedia stream up as a layer texture runtime. */
    async function activateLive(
        imageId: string,
        kind: "camera" | "mic",
        stream: MediaStream,
        visual?: AudioVisualId,
    ): Promise<ImageInfo> {
        disposeMediaRuntime(imageId);
        const engine = deps.engineRef.current;

        if (kind === "camera") {
            const video = document.createElement("video");
            video.playsInline = true;
            video.muted = true;
            video.setAttribute("playsinline", "");
            video.setAttribute("webkit-playsinline", "");
            video.srcObject = stream;

            await new Promise<void>((resolve, reject) => {
                const onReady = () => {
                    cleanup();
                    resolve();
                };
                const onError = () => {
                    cleanup();
                    reject(new Error("Could not read the camera"));
                };
                const cleanup = () => {
                    video.removeEventListener("loadeddata", onReady);
                    video.removeEventListener("error", onError);
                };
                video.addEventListener("loadeddata", onReady);
                video.addEventListener("error", onError);
            });
            await video.play().catch(() => undefined);

            const width = Math.max(1, video.videoWidth);
            const height = Math.max(1, video.videoHeight);
            engine?.setImage(imageId, video);
            mediaRuntimesRef.current.set(imageId, { kind, video, stream });
            return {
                width,
                height,
                thumb: canvasThumb(video, width, height),
                missing: false,
                kind,
            };
        }

        // mic — analyser only, never routed to the speakers (feedback).
        const canvas = document.createElement("canvas");
        ensureSpectrumCanvas(canvas);
        // Warm the canvas with ambient frames so the thumb isn't black.
        const silent = new Uint8Array(128);
        for (let i = 0; i < 30; i += 1) {
            const t = i * 0.14;
            const floored = withAmbientFloor(silent, 0, t);
            paintAudioVisual(canvas, floored.spectrum, floored.level, t, visual);
        }

        const context = await ensureMediaAudioContext();
        const streamSourceNode = context.createMediaStreamSource(stream);
        const analyser = context.createAnalyser();
        analyser.fftSize = 256;
        analyser.smoothingTimeConstant = 0.72;
        streamSourceNode.connect(analyser);

        engine?.setImage(imageId, canvas);
        mediaRuntimesRef.current.set(imageId, {
            kind,
            stream,
            canvas,
            analyser,
            streamSourceNode,
            spectrum: new Uint8Array(analyser.frequencyBinCount),
        });
        return {
            width: canvas.width,
            height: canvas.height,
            thumb: canvasThumb(canvas, canvas.width, canvas.height),
            missing: false,
            kind,
        };
    }

    function requestLiveStream(
        kind: "camera" | "mic",
        deviceId?: string,
    ): Promise<MediaStream> {
        const source = deviceId ? { deviceId: { exact: deviceId } } : true;
        return navigator.mediaDevices.getUserMedia(
            kind === "camera"
                ? { video: source, audio: false }
                : { audio: source, video: false },
        );
    }

    /** Add a live camera / mic-line layer backed by device capture. */
    async function addLiveLayer(
        kind: "camera" | "mic",
        deviceId?: string,
        deviceLabel?: string,
    ) {
        if (deps.sceneRef.current.layers.length >= MAX_LAYERS) {
            deps.showToast(`Layer limit is ${MAX_LAYERS}`);
            return;
        }
        let stream: MediaStream;
        try {
            stream = await requestLiveStream(kind, deviceId);
        } catch {
            deps.showToast(
                kind === "camera"
                    ? "Camera was blocked"
                    : "Microphone was blocked",
            );
            return;
        }
        try {
            const imageId = newId("live");
            const visual = kind === "mic" ? randomAudioVisual() : undefined;
            const info = await activateLive(imageId, kind, stream, visual);
            setImageInfo((previous) => ({ ...previous, [imageId]: info }));
            const layer: SceneLayer = {
                id: newId("layer"),
                imageId,
                name: cleanName(
                    deviceLabel ?? "",
                    mediaKindLabel(kind),
                ),
                mediaKind: kind,
                ...(visual ? { visual } : {}),
                ...(deviceId ? { deviceId } : {}),
                fx: { ...DEFAULT_LAYER_FX },
            };
            deps.setScene((previous) => ({
                ...previous,
                layers: [...previous.layers, layer],
            }));
            deps.setSelectedId(layer.id);
            if (
                kind === "mic" &&
                deps.sceneRef.current.global.audioReact < 0.25
            ) {
                deps.onAudioImported();
            }
        } catch {
            for (const track of stream.getTracks()) track.stop();
            deps.showToast(
                kind === "camera"
                    ? "Could not start the camera"
                    : "Could not start the mic",
            );
        }
    }

    async function importFiles(files: Iterable<File>) {
        const list = Array.from(files);
        if (!list.length) return;
        let added = 0;
        let importedAudio = false;
        for (const file of list) {
            if (deps.sceneRef.current.layers.length + added >= MAX_LAYERS) {
                deps.showToast(`Layer limit is ${MAX_LAYERS}`);
                break;
            }
            const kind = classifyFile(file);
            try {
                const imageId = newId("img");
                await putImageBlob(imageId, file).catch(() => undefined);
                const info = await activateMedia(imageId, file, kind);
                setImageInfo((previous) => ({ ...previous, [imageId]: info }));
                const layer: SceneLayer = {
                    id: newId("layer"),
                    imageId,
                    name: cleanName(
                        defaultLayerName(kind, file.name),
                        mediaKindLabel(kind),
                    ),
                    mediaKind: kind,
                    fx: {
                        ...DEFAULT_LAYER_FX,
                        x: added * 0.07,
                        y: added * -0.07,
                    },
                };
                deps.setScene((previous) => ({
                    ...previous,
                    layers: [...previous.layers, layer],
                }));
                deps.setSelectedId(layer.id);
                if (kind === "audio") importedAudio = true;
                added++;
            } catch {
                deps.showToast(
                    `Could not import ${mediaKindLabel(kind).toLowerCase()}`,
                );
            }
        }
        if (importedAudio && deps.sceneRef.current.global.audioReact < 0.25) {
            deps.onAudioImported();
        }
    }

    /** Bring engine textures and runtimes in line with a (re)loaded scene. */
    async function hydrateSceneImages(target: Scene) {
        const engine = deps.engineRef.current;
        if (!engine) return;
        const kindById = new Map<string, MediaKind>();
        const nameById = new Map<string, string>();
        const visualById = new Map<string, AudioVisualId | undefined>();
        const deviceById = new Map<string, string | undefined>();
        for (const layer of target.layers) {
            if (!layer.imageId) continue;
            if (!kindById.has(layer.imageId)) {
                kindById.set(layer.imageId, layer.mediaKind ?? "image");
                nameById.set(layer.imageId, layer.name);
                visualById.set(layer.imageId, layer.visual);
                deviceById.set(layer.imageId, layer.deviceId);
            }
        }

        for (const imageId of [...mediaRuntimesRef.current.keys()]) {
            if (!kindById.has(imageId)) {
                disposeMediaRuntime(imageId);
                engine.removeImage(imageId);
            }
        }

        for (const [imageId, kind] of kindById) {
            if (
                mediaRuntimesRef.current.has(imageId) &&
                engine.hasImage(imageId)
            ) {
                continue;
            }
            try {
                if (isLiveKind(kind)) {
                    // Live sources have no blob — reconnect to the device,
                    // falling back to the default if the saved one is gone.
                    const savedDevice = deviceById.get(imageId);
                    const stream = await requestLiveStream(
                        kind,
                        savedDevice,
                    ).catch(() =>
                        savedDevice
                            ? requestLiveStream(kind)
                            : Promise.reject(new Error("blocked")),
                    );
                    const info = await activateLive(
                        imageId,
                        kind,
                        stream,
                        visualById.get(imageId),
                    );
                    setImageInfo((previous) => ({
                        ...previous,
                        [imageId]: info,
                    }));
                    continue;
                }
                const blob = await getImageBlob(imageId);
                if (!blob) throw new Error("missing");
                const resolved: MediaKind =
                    kind === "image" ||
                    kind === "video" ||
                    kind === "audio" ||
                    kind === "data"
                        ? kind
                        : classifyBlob(blob, nameById.get(imageId) ?? "");
                const info = await activateMedia(imageId, blob, resolved);
                setImageInfo((previous) => ({ ...previous, [imageId]: info }));
            } catch {
                setImageInfo((previous) => ({
                    ...previous,
                    [imageId]: {
                        width: 1,
                        height: 1,
                        thumb: "",
                        missing: true,
                        kind,
                    },
                }));
            }
        }
    }

    /** Push fresh video frames / audio spectra to the engine; returns peak level. */
    function syncLiveMediaTextures(engine: EngineHandle, time: number): number {
        let mediaLevel = 0;
        let visualById: Map<string, AudioVisualId | undefined> | null = null;
        const visualFor = (imageId: string): AudioVisualId | undefined => {
            if (!visualById) {
                visualById = new Map();
                for (const layer of deps.sceneRef.current.layers) {
                    if (!visualById.has(layer.imageId))
                        visualById.set(layer.imageId, layer.visual);
                }
            }
            return visualById.get(imageId);
        };
        for (const [imageId, runtime] of mediaRuntimesRef.current) {
            if (
                (runtime.kind === "video" || runtime.kind === "camera") &&
                runtime.video
            ) {
                if (
                    runtime.video.readyState >=
                    HTMLMediaElement.HAVE_CURRENT_DATA
                ) {
                    engine.setImage(imageId, runtime.video);
                }
                continue;
            }
            if (
                (runtime.kind === "audio" || runtime.kind === "mic") &&
                runtime.canvas &&
                runtime.analyser
            ) {
                const spectrum =
                    runtime.spectrum &&
                    runtime.spectrum.length ===
                        runtime.analyser.frequencyBinCount
                        ? runtime.spectrum
                        : new Uint8Array(runtime.analyser.frequencyBinCount);
                runtime.spectrum = spectrum;
                runtime.analyser.getByteFrequencyData(spectrum);
                let level = levelFromSpectrum(spectrum);
                mediaLevel = Math.max(mediaLevel, level);
                let bins: Uint8Array = spectrum;
                if (runtime.kind === "mic") {
                    // Keep the mic line alive through silence.
                    const floored = withAmbientFloor(spectrum, level, time);
                    bins = floored.spectrum;
                    level = floored.level;
                }
                paintAudioVisual(
                    runtime.canvas,
                    bins,
                    level,
                    time,
                    visualFor(imageId),
                );
                engine.setImage(imageId, runtime.canvas);
            }
        }
        return mediaLevel;
    }

    return {
        imageInfo,
        imageInfoRef,
        audioContextRef,
        importFiles,
        addLiveLayer,
        hydrateSceneImages,
        syncLiveMediaTextures,
        disposeAllMediaRuntimes,
        forgetImage,
    };
}
