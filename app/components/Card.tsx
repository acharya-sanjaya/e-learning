import {useNavigate} from "@remix-run/react";
import {cn} from "~/lib/utils";
interface CardProps {
  label: string;
  href?: string;
  heightTw?: string;
}

export default function Card({label, href, heightTw = "h-40"}: CardProps) {
  const navigate = useNavigate();

  const visit = () => {
    if (!href) return;
    navigate(href);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key in ["Enter", " "] && visit()}
      onClick={visit}
      className={cn(
        "flex select-none items-center justify-center rounded-xl border-2 border-gray-300 bg-gray-200 text-center text-2xl font-bold dark:border-slate-700 dark:bg-slate-800",
        href && "active:scale-95",
        heightTw,
      )}
    >
      {label}
    </div>
  );
}
