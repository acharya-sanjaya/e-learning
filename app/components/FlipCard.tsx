import {ReactNode, useState} from "react";

interface FlipCardProps {
  front: ReactNode;
  back: ReactNode;
}

export default function FlipCard({front, back}: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="relative h-56 w-full text-[14px]"
      style={{
        perspective: "1000px",
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(_) => _}
      onClick={() => setIsFlipped((x) => !x)}
    >
      <div
        className="absolute h-full w-full transition-transform duration-500"
        style={{
          userSelect: "none",
          transformStyle: "preserve-3d",
          transform: `rotateY(${isFlipped ? -180 : 0}deg)`,
        }}
      >
        <div
          className="absolute flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border-2 border-gray-400 p-4 dark:border-slate-700"
          style={{
            backfaceVisibility: "hidden",
            wordBreak: "break-word",
          }}
        >
          {front}
        </div>

        <div
          className="absolute flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden rounded-lg border-2 border-gray-400 bg-gray-300 p-5 dark:border-slate-700 dark:bg-slate-800"
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
