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
    // Sliding down make take a while
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
        "fixed pt-[100svh] bg-white/30 dark:bg-black/30 backdrop-blur-2xl w-svw h-svh top-0 left-1/2 -translate-x-1/2 flex justify-center",
        className
      )}
      style={{
        zIndex: 9999,
      }}
    >
      <div
        role="none"
        onClick={(event) => event.stopPropagation()}
        className="cursor-default relative border-2 border-gray-600 rounded-lg p-10 flex justify-center items-center overflow-hidden bg-white/70 dark:bg-black/70"
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
          className="cursor-pointer size-10 p-2 absolute top-0.5 right-0.5 active:stroke-red-500"
          onClick={closePopup}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
