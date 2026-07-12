import type { ComponentChildren } from "preact";

type IconProps = { className?: string; title?: string };

function Icon({ children, className, title }: IconProps & { children: ComponentChildren }) {
  return (
    <svg
      aria-hidden={title ? undefined : "true"}
      className={className}
      fill="none"
      height="1em"
      role={title ? "img" : undefined}
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="1.8"
      viewBox="0 0 24 24"
      width="1em"
    >
      {title ? <title>{title}</title> : null}
      {children}
    </svg>
  );
}

// Kept as local components because Lakebed capsules only allow Lakebed and
// relative imports. The API mirrors the small icon components from react-icons.
export const FiArrowLeft = (props: IconProps) => <Icon {...props}><path d="m19 12H5m7 7-7-7 7-7" /></Icon>;
export const FiChevronDown = (props: IconProps) => <Icon {...props}><path d="m6 9 6 6 6-6" /></Icon>;
export const FiCopy = (props: IconProps) => <Icon {...props}><rect x="9" y="9" width="11" height="11" rx="1" /><path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" /></Icon>;
export const FiDownload = (props: IconProps) => <Icon {...props}><path d="M12 3v12m-4-4 4 4 4-4M4 20h16" /></Icon>;
export const FiEdit3 = (props: IconProps) => <Icon {...props}><path d="M12 20h9" /><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4Z" /></Icon>;
export const FiEye = (props: IconProps) => <Icon {...props}><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z" /><circle cx="12" cy="12" r="2.5" /></Icon>;
export const FiEyeOff = (props: IconProps) => <Icon {...props}><path d="m3 3 18 18M10.6 10.6a2 2 0 0 0 2.8 2.8M9.9 5.2A11 11 0 0 1 12 5c6.5 0 10 7 10 7a16 16 0 0 1-2.1 3.1M6.6 6.6C3.5 8.4 2 12 2 12s3.5 7 10 7a10 10 0 0 0 4.1-.9" /></Icon>;
export const FiHand = (props: IconProps) => <Icon {...props}><path d="M8 11V6a2 2 0 0 1 4 0v4-6a2 2 0 0 1 4 0v6-4a2 2 0 0 1 4 0v7a8 8 0 0 1-8 8h-1a7 7 0 0 1-5.7-3L2.5 14a2 2 0 0 1 3-2.6L8 14" /></Icon>;
export const FiImage = (props: IconProps) => <Icon {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" /></Icon>;
export const FiLayers = (props: IconProps) => <Icon {...props}><path d="m12 2 10 5-10 5L2 7l10-5Z" /><path d="m2 12 10 5 10-5M2 17l10 5 10-5" /></Icon>;
export const FiMinus = (props: IconProps) => <Icon {...props}><path d="M5 12h14" /></Icon>;
export const FiMoon = (props: IconProps) => <Icon {...props}><path d="M21 13A9 9 0 1 1 11 3a7 7 0 0 0 10 10Z" /></Icon>;
export const FiMousePointer = (props: IconProps) => <Icon {...props}><path d="m4 3 7 17 2.3-6.7L20 11 4 3Z" /></Icon>;
export const FiPlus = (props: IconProps) => <Icon {...props}><path d="M12 5v14M5 12h14" /></Icon>;
export const FiRedo2 = (props: IconProps) => <Icon {...props}><path d="m15 4 5 5-5 5" /><path d="M20 9h-9a7 7 0 0 0-7 7v1" /></Icon>;
export const FiSun = (props: IconProps) => <Icon {...props}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" /></Icon>;
export const FiTrash2 = (props: IconProps) => <Icon {...props}><path d="M3 6h18M8 6V4h8v2m3 0-1 15H6L5 6m5 4v7m4-7v7" /></Icon>;
export const FiUndo2 = (props: IconProps) => <Icon {...props}><path d="M9 4 4 9l5 5" /><path d="M4 9h9a7 7 0 0 1 7 7v1" /></Icon>;
export const FiUpload = (props: IconProps) => <Icon {...props}><path d="M12 15V3m-4 4 4-4 4 4M4 14v6h16v-6" /></Icon>;
export const FiBrush = (props: IconProps) => <Icon {...props}><path d="m14.5 4.5 5 5L10 19H5v-5Z" /><path d="m12 7 5 5M5 19c-1.5 0-2.5 1-2.5 2" /></Icon>;
export const FiCrop = (props: IconProps) => <Icon {...props}><path d="M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14" /></Icon>;
export const FiType = (props: IconProps) => <Icon {...props}><path d="M4 5V3h16v2M9 21h6M12 3v18" /></Icon>;
