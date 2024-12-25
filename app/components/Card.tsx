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
        "flex items-center justify-center text-center select-none bg-gray-200 dark:bg-slate-900 border-4 border-slate-800 rounded-xl text-2xl font-bold",
        href && "active:scale-95",
        heightTw
      )}
    >
      {label}
    </div>
  );
}
