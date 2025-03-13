import {cn} from "./lib/utils";

const iconMapper = {
  circle: <circle cx="12" cy="12" r="10" />,
  square: <rect x="2" y="2" width="20" height="20" />,
  triangle: <polygon points="12,2 2,22 22,22" />,
  close: <path d="M18 6 6 18 M6 6 18 18" />,
  arrowLeft: (
    <>
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="m8 18-6-6 6-6" />
    </>
  ),
  home: (
    <>
      <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <path d="M1 21 H23 M20 21 V 9 M23 11 12 2 1 11 M4 9 V 21" />
    </>
  ),
  gear: (
    <>
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </>
  ),
  star: (
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  ),
  check: (
    <>
      <path
        stroke="transparent"
        d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"
      />
      <path d="m9 12 2 2 4-4" strokeWidth="2" />
    </>
  ),
  chevronDown: <path d="m6 9 6 6 6-6" />,
  hamburger: (
    <>
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </>
  ),
  refresh: (
    <>
      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />{" "}
    </>
  ),
} as const;

export type IconNameType = keyof typeof iconMapper;

interface IconProps {
  className?: string;
  thickness?: number;
  iconName: keyof typeof iconMapper;
  onClick?: () => void;
}

const Icon = ({thickness = 2, ...props}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={thickness}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn(
      "cursor-pointer stroke-gray-800 dark:stroke-gray-200",
      props.className,
      props.onClick && "active:scale-90",
    )}
    onClick={props.onClick}
  >
    {iconMapper[props.iconName] ?? (
      <div className={cn(props.className, "flex size-full items-center justify-center")}>
        Icon not found
      </div>
    )}
  </svg>
);

export default Icon;
