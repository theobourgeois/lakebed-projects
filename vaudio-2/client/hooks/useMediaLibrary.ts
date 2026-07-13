import { useEffect, useRef, useState } from "preact/hooks";
import {
    DEFAULT_GENERATOR,
    DEFAULT_LAYER_FX,
    DEFAULT_MOTION,
    MAX_LAYERS,
    cleanName,
    isLiveKind,
    type AudioVisualId,
    type GeneratorId,
    type GeneratorSettings,
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
import { paintGenerator } from "../generators";
import { paintMotion, type MotionBuffers } from "../motion";
import type { SourceSignals } from "../modulation";
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
    motionBuffers?: MotionBuffers;
    signalCanvas?: HTMLCanvasElement;
    signalPixels?: Uint8ClampedArray;
    frame?: number;
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
    const signalsRef = useRef<SourceSignals>({});
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
        delete signalsRef.current[imageId];
        setImageInfo((info) => {
            const next = { ...info };
            delete next[imageId];
            return next;
        });
    }

    function activateGenerator(imageId: string, settings: GeneratorSettings): ImageInfo {
        disposeMediaRuntime(imageId);
        const canvas = document.createElement("canvas");
        paintGenerator(canvas, settings, 0);
        deps.engineRef.current?.setImage(imageId, canvas);
        mediaRuntimesRef.current.set(imageId, { kind: "generator", canvas });
        return {
            width: canvas.width,
            height: canvas.height,
            thumb: canvasThumb(canvas, canvas.width, canvas.height),
            missing: false,
            kind: "generator",
        };
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

    function rememberStaticSignal(imageId: string, source: CanvasImageSource) {
        const canvas = document.createElement("canvas");
        canvas.width = 24;
        canvas.height = 14;
        const context = canvas.getContext("2d", { willReadFrequently: true });
        if (!context) return;
        context.drawImage(source, 0, 0, canvas.width, canvas.height);
        const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
        let luma = 0;
        for (let p = 0; p < pixels.length; p += 4) {
            luma += pixels[p] * 0.299 + pixels[p + 1] * 0.587 + pixels[p + 2] * 0.114;
        }
        luma /= (pixels.length / 4) * 255;
        signalsRef.current[imageId] = { level: luma, luma, motion: 0 };
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
            rememberStaticSignal(imageId, decoded.canvas);
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
            rememberStaticSignal(imageId, canvas);
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
        motionMode = false,
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

            const canvas = motionMode ? document.createElement("canvas") : undefined;
            const width = motionMode ? 320 : Math.max(1, video.videoWidth);
            const height = motionMode ? 180 : Math.max(1, video.videoHeight);
            engine?.setImage(imageId, canvas ?? video);
            mediaRuntimesRef.current.set(imageId, {
                kind,
                video,
                stream,
                canvas,
                ...(motionMode
                    ? {
                          motionBuffers: {
                              sample: document.createElement("canvas"),
                              history: [],
                              write: 0,
                              count: 0,
                          },
                      }
                    : {}),
            });
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

    /** Switch a live camera between raw feed and motion extraction without restarting capture. */
    function setCameraMotionMode(imageId: string, enabled: boolean) {
        const runtime = mediaRuntimesRef.current.get(imageId);
        const engine = deps.engineRef.current;
        if (!runtime || runtime.kind !== "camera" || !runtime.video || !engine) return;

        if (enabled) {
            const canvas = runtime.canvas ?? document.createElement("canvas");
            runtime.canvas = canvas;
            runtime.motionBuffers = runtime.motionBuffers ?? {
                sample: document.createElement("canvas"),
                history: [],
                write: 0,
                count: 0,
            };
            engine.setImage(imageId, canvas);
            setImageInfo((previous) => ({
                ...previous,
                [imageId]: {
                    ...(previous[imageId] ?? {
                        thumb: "",
                        missing: false,
                        kind: "camera",
                    }),
                    width: 320,
                    height: 180,
                    kind: "camera",
                },
            }));
            return;
        }

        runtime.canvas = undefined;
        runtime.motionBuffers = undefined;
        const width = Math.max(1, runtime.video.videoWidth);
        const height = Math.max(1, runtime.video.videoHeight);
        engine.setImage(imageId, runtime.video);
        setImageInfo((previous) => ({
            ...previous,
            [imageId]: {
                ...(previous[imageId] ?? {
                    thumb: "",
                    missing: false,
                    kind: "camera",
                }),
                width,
                height,
                kind: "camera",
            },
        }));
    }

    /** Add a live camera or mic-line layer. */
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
                kind === "camera" ? "Camera was blocked" : "Microphone was blocked",
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

    function addGeneratorLayer(kind: GeneratorId = "gradient") {
        if (deps.sceneRef.current.layers.length >= MAX_LAYERS) {
            deps.showToast(`Layer limit is ${MAX_LAYERS}`);
            return;
        }
        const imageId = newId("gen");
        const generator = { ...DEFAULT_GENERATOR, kind };
        const info = activateGenerator(imageId, generator);
        setImageInfo((previous) => ({ ...previous, [imageId]: info }));
        const layer: SceneLayer = {
            id: newId("layer"),
            imageId,
            name: `${kind[0].toUpperCase()}${kind.slice(1)}`,
            mediaKind: "generator",
            generator,
            fx: { ...DEFAULT_LAYER_FX },
        };
        deps.setScene((previous) => ({ ...previous, layers: [...previous.layers, layer] }));
        deps.setSelectedId(layer.id);
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
        const generatorById = new Map<string, GeneratorSettings | undefined>();
        const motionById = new Map<string, boolean>();
        for (const layer of target.layers) {
            if (!layer.imageId) continue;
            if (!kindById.has(layer.imageId)) {
                kindById.set(layer.imageId, layer.mediaKind ?? "image");
                nameById.set(layer.imageId, layer.name);
                visualById.set(layer.imageId, layer.visual);
                deviceById.set(layer.imageId, layer.deviceId);
                generatorById.set(layer.imageId, layer.generator);
                motionById.set(layer.imageId, !!layer.motion);
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
                if (kind === "generator") {
                    const info = activateGenerator(
                        imageId,
                        generatorById.get(imageId) ?? DEFAULT_GENERATOR,
                    );
                    setImageInfo((previous) => ({ ...previous, [imageId]: info }));
                    continue;
                }
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
                        kind === "camera" && !!motionById.get(imageId),
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
        let layerByImage: Map<string, SceneLayer> | null = null;
        const layerFor = (imageId: string): SceneLayer | undefined => {
            if (!layerByImage) {
                layerByImage = new Map();
                for (const layer of deps.sceneRef.current.layers) {
                    if (!layerByImage.has(layer.imageId)) layerByImage.set(layer.imageId, layer);
                }
            }
            return layerByImage.get(imageId);
        };
        const visualFor = (imageId: string): AudioVisualId | undefined => {
            return layerFor(imageId)?.visual;
        };
        for (const [imageId, runtime] of mediaRuntimesRef.current) {
            if (runtime.kind === "generator" && runtime.canvas) {
                const luma = paintGenerator(
                    runtime.canvas,
                    layerFor(imageId)?.generator ?? DEFAULT_GENERATOR,
                    time,
                );
                signalsRef.current[imageId] = { level: luma, luma, motion: 0 };
                engine.setImage(imageId, runtime.canvas);
                continue;
            }
            if (
                runtime.kind === "camera" &&
                runtime.video &&
                runtime.canvas &&
                runtime.motionBuffers &&
                layerFor(imageId)?.motion &&
                runtime.video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA
            ) {
                const metrics = paintMotion(
                    runtime.canvas,
                    runtime.video,
                    runtime.motionBuffers,
                    layerFor(imageId)?.motion ?? DEFAULT_MOTION,
                );
                signalsRef.current[imageId] = { level: metrics.motion, ...metrics };
                engine.setImage(imageId, runtime.canvas);
                continue;
            }
            if (
                (runtime.kind === "video" || runtime.kind === "camera") &&
                runtime.video
            ) {
                if (
                    runtime.video.readyState >=
                    HTMLMediaElement.HAVE_CURRENT_DATA
                ) {
                    engine.setImage(imageId, runtime.video);
                    runtime.frame = (runtime.frame ?? 0) + 1;
                    if (runtime.frame % 5 === 0) {
                        const canvas = runtime.signalCanvas ?? document.createElement("canvas");
                        runtime.signalCanvas = canvas;
                        canvas.width = 24;
                        canvas.height = 14;
                        const context = canvas.getContext("2d", { willReadFrequently: true });
                        if (context) {
                            context.drawImage(runtime.video, 0, 0, canvas.width, canvas.height);
                            const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
                            let luma = 0;
                            let motion = 0;
                            for (let p = 0; p < pixels.length; p += 4) {
                                luma += pixels[p] * 0.299 + pixels[p + 1] * 0.587 + pixels[p + 2] * 0.114;
                                if (runtime.signalPixels) {
                                    motion += (Math.abs(pixels[p] - runtime.signalPixels[p]) +
                                        Math.abs(pixels[p + 1] - runtime.signalPixels[p + 1]) +
                                        Math.abs(pixels[p + 2] - runtime.signalPixels[p + 2])) / 3;
                                }
                            }
                            const count = pixels.length / 4;
                            const metrics = { luma: luma / count / 255, motion: motion / count / 255 };
                            signalsRef.current[imageId] = { level: metrics.motion, ...metrics };
                            runtime.signalPixels = new Uint8ClampedArray(pixels);
                        }
                    }
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
                signalsRef.current[imageId] = { level, luma: level, motion: level };
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
        signalsRef,
        audioContextRef,
        importFiles,
        addLiveLayer,
        addGeneratorLayer,
        setCameraMotionMode,
        hydrateSceneImages,
        syncLiveMediaTextures,
        disposeAllMediaRuntimes,
        forgetImage,
    };
}
