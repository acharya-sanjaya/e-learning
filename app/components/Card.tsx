import {useNavigate} from "@remix-run/react";
import {cn} from "~/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: "v1" | "v2" | "v3" | "v4" | "v5" | "v6" | "v7" | "v8" | "v9" | "v10";
  gap?: number;
  href?: string;
}

const Card = ({label, href, className, variant = "v1", gap = 0}: CardProps) => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        href && navigate(href);
      }}
      className={cn(
        className,
        "flex h-32 items-center justify-center rounded-2xl border-[3px] transition-transform active:scale-95 text-xl p-4 font-bold hover:scale-105",
        variant === "v1" &&
          "border-red-600 bg-gradient-to-tr from-red-900 via-red-800 to-red-300 text-white",
        variant === "v2" &&
          "border-green-900 bg-gradient-to-tr from-green-900 via-green-800 to-green-300 text-white",
        variant === "v3" &&
          "border-blue-600 bg-gradient-to-tr from-blue-900 via-blue-800 to-blue-300 text-white",
        variant === "v4" &&
          "border-yellow-600 bg-gradient-to-tr from-yellow-800 via-yellow-800 to-yellow-400 text-white",
        variant === "v5" &&
          "border-purple-600 bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-300 text-white",
        variant === "v6" &&
          "border-indigo-700 bg-gradient-to-tr from-indigo-900 via-indigo-800 to-indigo-300 text-white",
        variant === "v7" &&
          "border-pink-600 bg-gradient-to-tr from-pink-900 via-pink-800 to-pink-300 text-white",
        variant === "v8" &&
          "border-orange-600 bg-gradient-to-tr from-orange-900 via-orange-800 to-orange-300 text-white",
        variant === "v9" &&
          "border-teal-700 bg-gradient-to-tr from-teal-900 via-teal-800 to-teal-300 text-white",
        variant === "v10" &&
          "border-gray-700 bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-500 text-white"
      )}
      style={{
        width: gap > 0 ? `calc(50% - ${gap}px)` : "100%",
        boxShadow: "-6px 6px 15px 0 #fff8",
      }}
    >
      <div className="line-clamp-3 w-full text-ellipsis text-center">{label}</div>
    </button>
  );
};
export default Card;
