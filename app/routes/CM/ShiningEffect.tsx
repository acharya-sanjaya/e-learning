import {cn} from "~/lib/utils";

interface ShiningEffectProps {
  text?: string;
  className?: string;
}

const ShiningEffect = ({text = "Shine", className}: ShiningEffectProps) => {
  return (
    <div
      className={cn(
        "animate-slide-bg bg-gradient-to-r from-yellow-200 via-yellow-400 via-40% to-yellow-200 to-100% bg-200p bg-clip-text text-4xl font-bold text-transparent",
        className,
      )}
    >
      {text}
    </div>
  );
};

export default ShiningEffect;
