import {cn} from "~/lib/utils";

interface ButtonProps {
  visible?: boolean;
  variant?: "standard" | "primary" | "success" | "golden" | "danger" | "info" | "warning";
  isActive?: boolean;
  isDisabled?: boolean;
  onClick?: () => void;
  label: string;
  className?: string;
}

const Button = ({
  visible = true,
  variant = "standard",
  isActive = false,
  isDisabled = false,
  onClick,
  label,
  className,
}: ButtonProps) => {
  variant;

  if (!visible) return null;

  const variantStyles: Record<string, string> = {
    standard: "bg-gradient-to-tr from-blue-400 to-blue-600 text-white",
    primary: "bg-gradient-to-tr from-indigo-500 to-purple-600 text-white",
    success: "bg-gradient-to-tr from-green-400 to-green-600 text-white",
    golden: "bg-gradient-to-tr from-yellow-400 to-yellow-600 text-white",
    danger: "bg-gradient-to-tr from-red-400 to-red-600 text-white",
    info: "bg-gradient-to-tr from-teal-400 to-cyan-500 text-white",
    warning: "bg-gradient-to-tr from-orange-400 to-amber-500 text-white",
  };

  const shouldUseVariant = !isDisabled && !isActive;
  const isFunctional = isActive || isDisabled;

  return (
    <button
      className={cn(
        "py-2 px-5 text-lg rounded-xl font-bold",
        shouldUseVariant && variantStyles[variant],
        shouldUseVariant && "active:scale-90",
        isActive &&
          "bg-gradient-to-tr from-gray-600 to-gray-800 dark:from-gray-100 dark:to-gray-300 text-white dark:text-black ",
        isDisabled && "cursor-not-allowed bg-gray-400/70 text-white",
        className
      )}
      onClick={isFunctional ? undefined : onClick}
    >
      {label}
    </button>
  );
};

export default Button;
