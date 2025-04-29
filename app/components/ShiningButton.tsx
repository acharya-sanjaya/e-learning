import {cn} from "~/lib/utils";

interface ButtonProps {
  label: string;
  size?: "x-small" | "small" | "medium" | "large";
  onClick?: () => void;
  variant?: "standard" | "danger" | "success" | "golden";
  showBorder?: boolean;
  className?: string;
  removePressingEffect?: boolean;
  removeShiningEffect?: boolean;
  disabled?: boolean;
  isActive?: boolean;
}

export default function Button({
  label,
  size = "small",
  onClick,
  variant = "standard",
  showBorder = false,
  removePressingEffect = false,
  removeShiningEffect = false,
  disabled = false,
  isActive = false,
  className,
}: ButtonProps) {
  if (isActive || disabled) {
    removeShiningEffect = true;
    removePressingEffect = true;
    onClick = undefined;
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "flex min-w-fit flex-col text-white",
        size === "x-small" && "rounded-sm border px-2 py-0.5 text-sm",
        size === "small" && "rounded-md border-2 px-2 py-1 text-base",
        size === "medium" && "rounded-md border-2 px-3 py-1 text-lg",
        size === "large" && "rounded-lg border-4 px-4 py-2 text-2xl",

        variant === "standard" && "border-blue-400 bg-blue-500",
        variant === "danger" && "border-red-400 bg-red-500",
        variant === "success" && "border-green-400 bg-green-500",
        variant === "golden" && "border-yellow-400 bg-yellow-500",

        isActive && "border-none bg-black text-white dark:bg-white dark:text-black",

        !removePressingEffect && "active:scale-95",

        !showBorder && "border-0",

        className,

        disabled && "cursor-not-allowed opacity-70",
        !removeShiningEffect && "group relative flex items-center justify-center overflow-hidden",
      )}
    >
      {label}
      {!removeShiningEffect && (
        <div className="absolute -left-7 h-3 w-full origin-center -translate-x-1/2 rotate-45 bg-white/30 backdrop-blur-sm duration-300 group-hover:left-7 group-hover:translate-x-1/2"></div>
      )}
    </button>
  );
}
