import { useRef, useState } from "preact/hooks";

/** Transient bottom-center notification. */
export function useToast() {
    const [toast, setToast] = useState("");
    const timerRef = useRef(0);

    function showToast(message: string) {
        setToast(message);
        window.clearTimeout(timerRef.current);
        timerRef.current = window.setTimeout(() => setToast(""), 2600);
    }

    return { toast, showToast };
}
