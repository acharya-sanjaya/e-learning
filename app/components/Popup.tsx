import {ReactNode, useEffect, useRef, useState} from "react";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

const Popup = ({
  visible = false,
  className,
  onClose,
  children,
}: {
  visible: boolean;
  className?: string;
  onClose: () => void;
  children: ReactNode;
}) => {
  const transitionTime = 300;
  const [slideUp, setSlideUp] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSlideUp(visible);
    popupRef.current?.focus();
  }, [visible]);

  const closePopup = () => {
    setSlideUp(false);
    // Sliding down may take a while
    // So, call onClose after a delay
    setTimeout(() => {
      onClose();
    }, transitionTime);
  };

  if (!visible) return null;
  return (
    <div
      ref={popupRef}
      role="button"
      tabIndex={0}
      onClick={closePopup}
      onKeyDown={(e) => e.key === "Escape" && closePopup()}
      className={cn(
        "fixed left-1/2 top-0 flex h-svh w-svw -translate-x-1/2 justify-center bg-white/30 pt-[100svh] backdrop-blur-2xl dark:bg-black/30",
        className,
      )}
      style={{
        zIndex: 9999,
      }}
    >
      <div
        role="none"
        onClick={(event) => event.stopPropagation()}
        className="relative flex cursor-default items-center justify-center overflow-hidden rounded-lg border-2 border-gray-600 bg-white/70 p-10 dark:bg-black/70"
        style={{
          width: "90%",
          height: "fit-content",
          maxHeight: "100svh",
          transform: slideUp ? "scale(1) translateY(calc(-50svh - 50%))" : "scale(0) translateY(0)",
          transition: `transform ${transitionTime}ms ease-in-out`,
        }}
      >
        <Icon
          iconName="close"
          thickness={2}
          className="absolute right-0.5 top-0.5 size-10 cursor-pointer p-2 active:stroke-red-500"
          onClick={closePopup}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
