import {ReactNode, useState} from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
}

export default function FlipCard({front, back}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="relative w-full h-56 text-[14px]"
      style={{
        perspective: "1000px",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(_) => _}
      onClick={() => setIsFlipped((x) => !x)}
    >
      <div
        className="absolute w-full h-full transition-transform duration-500"
        style={{
          userSelect: "none",
          transformStyle: "preserve-3d",
          transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
        }}
      >
        <div
          className="absolute w-full h-full flex flex-col gap-4 items-center justify-center rounded-lg p-4 overflow-hidden border-2 border-gray-400 dark:border-slate-700"
          style={{
            backfaceVisibility: "hidden",
            wordBreak: "break-word",
          }}
        >
          {front}
        </div>

        <div
          className="absolute w-full h-full bg-gray-300 dark:bg-slate-800 flex flex-col gap-1 items-center justify-center rounded-lg p-5 overflow-hidden border-2 border-gray-400 dark:border-slate-700"
          style={{
            backfaceVisibility: "hidden",
            transform: `rotateY(180deg)`,
          }}
        >
          {back}
        </div>
      </div>
    </div>
  );
}
