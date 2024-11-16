import {ReactNode, useEffect, useState} from "react";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

const Popup = ({
  className,
  onClose,
  children,
}: {
  className?: string;
  onClose: () => void;
  children: ReactNode;
}) => {
  const [applyInitialValue, setApplyInitialValue] = useState(true);
  const [popupTranslation, setPopupTranslation] = useState(
    "scale(1) translateY(calc(-50svh - 50%))"
  );
  const transitionTime = 300;

  useEffect(() => {
    // This is to force transition effect on load
    const timeout = setTimeout(() => {
      setApplyInitialValue(false);
    }, 100);
    return () => clearTimeout(timeout);
  }, []);

  const closePopup = () => {
    setPopupTranslation("scale(0) translate(0)");

    setTimeout(() => {
      onClose && onClose();
    }, transitionTime);
  };

  return (
    <div
      role="button"
      tabIndex={-1}
      onClick={closePopup}
      onKeyDown={(e) => e.key === "Enter" && closePopup()}
      className={cn(
        "fixed pt-[100svh] bg-black/40 backdrop-blur-xl w-svw h-svh top-0 left-1/2 -translate-x-1/2 flex justify-center",
        className
      )}
      style={{
        zIndex: 9999,
      }}
    >
      <div
        role="none"
        onClick={(event) => event.stopPropagation()}
        className="cursor-default relative border-2 border-gray-600 rounded-lg p-10 flex justify-center items-center overflow-hidden bg-white/20"
        style={{
          width: "90%",
          height: "fit-content",
          maxHeight: "100svh",
          transform: applyInitialValue ? "scale(0) translateY(0)" : popupTranslation,
          transition: `transform ${transitionTime}ms ease-in-out`,
        }}
      >
        <Icon
          iconName="close"
          thickness={2}
          className="cursor-pointer size-10 p-2 absolute top-0.5 right-0.5 stroke-white active:stroke-red-500"
          onClick={closePopup}
        />
        {children}
      </div>
    </div>
  );
};

export default Popup;
