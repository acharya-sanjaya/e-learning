import {cn} from "~/lib/utils";
6;
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
    standard: "from-blue-400 to-blue-600 text-gray-100",
    primary: "from-indigo-500 to-purple-600 text-gray-100",
    success: "from-green-400 to-green-600 text-gray-100",
    golden: "from-yellow-400 to-yellow-600 text-gray-100",
    danger: "from-red-400 to-red-600 text-gray-100",
    info: "from-teal-400 to-cyan-500 text-gray-100",
    warning: "from-orange-400 to-amber-500 text-gray-100",
  };

  const shouldUseVariant = !isDisabled && !isActive;
  const isNonFunctional = isActive || isDisabled || onClick === undefined;

  return (
    <button
      className={cn(
        "rounded-xl bg-gradient-to-tr px-5 py-2 text-lg font-bold",
        shouldUseVariant && variantStyles[variant],
        !isNonFunctional && "active:scale-90",
        isActive &&
          "from-slate-600 to-slate-800 text-gray-300 dark:from-gray-200 dark:to-gray-200 dark:text-slate-900",
        isDisabled &&
          "cursor-not-allowed from-gray-300 to-gray-300 text-gray-400 dark:from-slate-800 dark:to-slate-800 dark:text-slate-500",
        className,
      )}
      onClick={isNonFunctional ? undefined : onClick}
    >
      {label}
    </button>
  );
};

export default Button;
