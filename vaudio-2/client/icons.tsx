import type { ComponentChildren } from "preact";

export type IconProps = { class?: string };

const svg = (props: IconProps, children: ComponentChildren) => (
    <svg
        class={props.class ?? "w-[15px] h-[15px]"}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
    >
        {children}
    </svg>
);

export const IPlus = (p: IconProps) => svg(p, <path d="M12 5v14M5 12h14" />);
export const IDice = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="4" y="4" width="16" height="16" rx="2.5" />
            <circle cx="9" cy="9" r="0.6" fill="currentColor" />
            <circle cx="15" cy="15" r="0.6" fill="currentColor" />
            <circle cx="15" cy="9" r="0.6" fill="currentColor" />
            <circle cx="9" cy="15" r="0.6" fill="currentColor" />
        </>,
    );
export const IWand = (p: IconProps) =>
    svg(
        p,
        <path d="M5 19 17 7m2-2-1.5 1.5M17 7l1.5 1.5M9 5.5 9.8 7.3 11.6 8 9.8 8.7 9 10.5 8.2 8.7 6.4 8 8.2 7.3Zm9 7 .6 1.4 1.4.6-1.4.6-.6 1.4-.6-1.4-1.4-.6 1.4-.6Z" />,
    );
export const ISave = (p: IconProps) =>
    svg(p, <path d="M12 3v12m0 0 4-4m-4 4-4-4M4 17v3h16v-3" />);
export const IFolder = (p: IconProps) =>
    svg(
        p,
        <path d="M3 6.5A1.5 1.5 0 0 1 4.5 5h4l2 2.5h9A1.5 1.5 0 0 1 21 9v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 18Z" />,
    );
export const IMic = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="9" y="3" width="6" height="11" rx="3" />
            <path d="M5.5 11.5a6.5 6.5 0 0 0 13 0M12 18v3" />
        </>,
    );
export const ICamera = (p: IconProps) =>
    svg(
        p,
        <>
            <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7H8l1.5-2.5h5L16 7h3.5A1.5 1.5 0 0 1 21 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 17.5Z" />
            <circle cx="12" cy="13" r="3.2" />
        </>,
    );
export const IFile = (p: IconProps) =>
    svg(
        p,
        <path d="M6 3.5h8L18 7.5v13H6ZM14 3.5v4h4" />,
    );
export const IDownload = (p: IconProps) =>
    svg(p, <path d="M12 4v11m0 0 4.5-4.5M12 15 7.5 10.5M4 19h16" />);
export const IExpand = (p: IconProps) =>
    svg(p, <path d="M4 9V4h5M20 9V4h-5M4 15v5h5m11-5v5h-5" />);
export const IEye = (p: IconProps) =>
    svg(
        p,
        <>
            <path d="M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z" />
            <circle cx="12" cy="12" r="2.6" />
        </>,
    );
export const IEyeOff = (p: IconProps) =>
    svg(
        p,
        <>
            <path d="M4 4l16 16M9.9 5.9A9.5 9.5 0 0 1 12 5.5c6 0 9.5 6.5 9.5 6.5a17 17 0 0 1-3.3 4M6 7.5A16 16 0 0 0 2.5 12S6 18.5 12 18.5a9 9 0 0 0 3-.6" />
        </>,
    );
export const ITrash = (p: IconProps) =>
    svg(p, <path d="M4.5 6.5h15m-11-2h7m-9.5 2 1 13h10l1-13M10 10v6m4-6v6" />);
export const ICopy = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="8" y="8" width="12" height="12" rx="1.5" />
            <path d="M16 5V5.5M16 5a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 4 5v9A1.5 1.5 0 0 0 5.5 15.5H6" />
        </>,
    );
export const IUp = (p: IconProps) => svg(p, <path d="m6 14 6-6 6 6" />);
export const IDown = (p: IconProps) => svg(p, <path d="m6 10 6 6 6-6" />);
export const IPause = (p: IconProps) => svg(p, <path d="M9 5v14M15 5v14" />);
export const IPlay = (p: IconProps) => svg(p, <path d="M7 5v14l12-7Z" />);
export const IPanel = (p: IconProps) =>
    svg(
        p,
        <>
            <rect x="3" y="4.5" width="18" height="15" rx="1.5" />
            <path d="M15.5 4.5v15" />
        </>,
    );
export const IMove = (p: IconProps) =>
    svg(
        p,
        <path d="M12 3v18M3 12h18M12 3 9.5 5.5M12 3l2.5 2.5M12 21l-2.5-2.5M12 21l2.5-2.5M3 12l2.5-2.5M3 12l2.5 2.5M21 12l-2.5-2.5M21 12l-2.5 2.5" />,
    );
export const ISpark = (p: IconProps) =>
    svg(
        p,
        <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8Zm7 11 .8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8Z" />,
    );
export const ISettings = (p: IconProps) =>
    svg(
        p,
        <>
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
        </>,
    );
export const IChevronDown = (p: IconProps) => svg(p, <path d="m6 9 6 6 6-6" />);
export const ICheck = (p: IconProps) => svg(p, <path d="m5 12.5 4.5 4.5L19 7" />);
