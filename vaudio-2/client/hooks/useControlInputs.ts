import { useEffect, useRef, useState } from "preact/hooks";

export type LearnedControl = { key: string; label: string };

type MidiInputLike = {
    id: string;
    name?: string | null;
    onmidimessage: ((event: { data: Uint8Array }) => void) | null;
};
type MidiAccessLike = {
    inputs: Map<string, MidiInputLike>;
    onstatechange: (() => void) | null;
};
type MidiNavigator = Navigator & {
    requestMIDIAccess?: (options?: { sysex?: boolean }) => Promise<MidiAccessLike>;
};

/** Browser-native MIDI/gamepad input with one-shot learn callbacks. */
export function useControlInputs(showToast: (message: string) => void) {
    const valuesRef = useRef(new Map<string, number>());
    const midiAccessRef = useRef<MidiAccessLike | null>(null);
    const learnMidiRef = useRef<((control: LearnedControl) => void) | null>(null);
    const learnGamepadRef = useRef<((control: LearnedControl) => void) | null>(null);
    const gamepadBaselineRef = useRef(new Map<string, number>());
    const [midiInputs, setMidiInputs] = useState<string[]>([]);
    const [gamepads, setGamepads] = useState<string[]>([]);
    const gamepadNamesRef = useRef<string[]>([]);
    const [learning, setLearning] = useState<"midi" | "gamepad" | null>(null);

    function attachMidi(access: MidiAccessLike) {
        const refresh = () => {
            const names: string[] = [];
            for (const input of access.inputs.values()) {
                names.push(input.name || "MIDI input");
                input.onmidimessage = (event) => {
                    const [status = 0, control = 0, raw = 0] = event.data;
                    const command = status & 0xf0;
                    const channel = (status & 0x0f) + 1;
                    if (command !== 0xb0 && command !== 0x90 && command !== 0x80) return;
                    const kind = command === 0xb0 ? "cc" : "note";
                    const key = `midi:${input.id}:${kind}:${channel}:${control}`;
                    const value = command === 0x80 ? 0 : raw / 127;
                    valuesRef.current.set(key, value);
                    const learn = learnMidiRef.current;
                    if (learn && (command === 0xb0 || value > 0)) {
                        learnMidiRef.current = null;
                        setLearning(null);
                        learn({
                            key,
                            label: `${input.name || "MIDI"} · ${kind.toUpperCase()} ${control} · ch ${channel}`,
                        });
                    }
                };
            }
            setMidiInputs(names);
        };
        access.onstatechange = refresh;
        refresh();
    }

    async function ensureMidi(): Promise<boolean> {
        if (midiAccessRef.current) return true;
        const midiNavigator = navigator as MidiNavigator;
        if (!midiNavigator.requestMIDIAccess) {
            showToast("Web MIDI is not supported in this browser");
            return false;
        }
        try {
            const access = await midiNavigator.requestMIDIAccess({ sysex: false });
            midiAccessRef.current = access;
            attachMidi(access);
            return true;
        } catch {
            showToast("MIDI access was blocked");
            return false;
        }
    }

    async function learnMidi(callback: (control: LearnedControl) => void) {
        if (!(await ensureMidi())) return;
        learnGamepadRef.current = null;
        learnMidiRef.current = callback;
        setLearning("midi");
        showToast("Move a MIDI knob, fader, pad, or key");
    }

    function learnGamepad(callback: (control: LearnedControl) => void) {
        learnMidiRef.current = null;
        learnGamepadRef.current = callback;
        gamepadBaselineRef.current.clear();
        for (const pad of navigator.getGamepads?.() ?? []) {
            if (!pad) continue;
            pad.axes.forEach((value, index) => gamepadBaselineRef.current.set(`${pad.index}:a:${index}`, value));
            pad.buttons.forEach((button, index) => gamepadBaselineRef.current.set(`${pad.index}:b:${index}`, button.value));
        }
        setLearning("gamepad");
        showToast("Move a gamepad stick, trigger, or button");
    }

    function pollGamepads() {
        const names: string[] = [];
        for (const pad of navigator.getGamepads?.() ?? []) {
            if (!pad) continue;
            names.push(pad.id || `Gamepad ${pad.index + 1}`);
            pad.axes.forEach((raw, index) => {
                const value = Math.abs(raw) < 0.08 ? 0.5 : raw * 0.5 + 0.5;
                const key = `gamepad:${pad.index}:axis:${index}`;
                valuesRef.current.set(key, value);
                const baseline = gamepadBaselineRef.current.get(`${pad.index}:a:${index}`) ?? 0;
                if (learnGamepadRef.current && Math.abs(raw - baseline) > 0.35) {
                    const learn = learnGamepadRef.current;
                    learnGamepadRef.current = null;
                    setLearning(null);
                    learn({ key, label: `${pad.id || "Gamepad"} · axis ${index + 1}` });
                }
            });
            pad.buttons.forEach((button, index) => {
                const key = `gamepad:${pad.index}:button:${index}`;
                valuesRef.current.set(key, button.value);
                const baseline = gamepadBaselineRef.current.get(`${pad.index}:b:${index}`) ?? 0;
                if (learnGamepadRef.current && button.value - baseline > 0.5) {
                    const learn = learnGamepadRef.current;
                    learnGamepadRef.current = null;
                    setLearning(null);
                    learn({ key, label: `${pad.id || "Gamepad"} · button ${index + 1}` });
                }
            });
        }
        if (names.join("\0") !== gamepadNamesRef.current.join("\0")) {
            gamepadNamesRef.current = names;
            setGamepads(names);
        }
    }

    useEffect(() => () => {
        const access = midiAccessRef.current;
        if (access) for (const input of access.inputs.values()) input.onmidimessage = null;
    }, []);

    return { valuesRef, midiInputs, gamepads, learning, ensureMidi, learnMidi, learnGamepad, pollGamepads };
}
