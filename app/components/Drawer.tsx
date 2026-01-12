import {ReactNode} from "react";
import {cn} from "~/lib/utils";

interface DrawerProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  width?: string; // default drawer width
}

const Drawer = ({open, onClose, children, width = "400px"}: DrawerProps) => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Drawer overlay */}
      <div
        className={cn(
          "absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300",
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={onClose}
        onKeyDown={(e) => (e.key === "Escape" || e.key === "Enter") && onClose()}
        role="button"
        tabIndex={0}
      ></div>

      {/* Drawer panel */}
      <div
        className={cn(
          "fixed right-0 top-0 flex h-screen flex-col bg-white shadow-lg transition-transform duration-500 dark:bg-slate-900",
          open ? "pointer-events-auto translate-x-0" : "pointer-events-none translate-x-full",
        )}
        style={{width}}
      >
        {/* div to prevent drawer contents being covered by Header */}
        <div className="h-20"></div>
        {/* Drawer content */}
        <div className="flex flex-1 flex-col gap-2 overflow-y-auto px-4 py-2">
          <>
            {children}
            <div
              className="flex-1"
              onClick={onClose}
              onKeyDown={(e) => e.key === "Escape" && onClose()}
              role="button"
              tabIndex={0}
            ></div>
          </>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
