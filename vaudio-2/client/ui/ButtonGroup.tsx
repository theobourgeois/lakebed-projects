import type { ComponentChildren } from "preact";

/**
 * Joined toolbar controls. Adjacent items overlap by 1px so shared edges stay
 * a single line; hover / open / active items rise and show a full four-sided
 * border without changing width (no layout shift).
 */
export function ButtonGroup(props: {
    children: ComponentChildren;
    class?: string;
}) {
    return (
        <div
            role="group"
            class={`inline-flex items-center [&>*]:relative [&>*+*]:-ml-px [&>*:hover]:z-[1] [&>*:has(:hover)]:z-[1] [&>*:has([aria-expanded="true"])]:z-[1] [&>*:has([data-group-active])]:z-[1] ${props.class ?? ""}`}
        >
            {props.children}
        </div>
    );
}
