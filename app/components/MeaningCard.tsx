import {useState} from "react";
import {cn} from "~/lib/utils";

interface SimpleCardProps {
  word: string;
  meaning: string;
  mode?: ModeType;
  kanji?: string;
  kanjiOn?: boolean;
}

type ModeType = "Normal" | "Invert" | "Dual";

export default function SimpleCard({
  word,
  meaning,
  mode = "Dual",
  kanji,
  kanjiOn = false,
}: SimpleCardProps) {
  const [reveal, setReveal] = useState(false);

  const Meaning = () => <div className="text-left font-mono text-lg">{meaning}</div>;
  const Word = () => (
    <div className="text-left font-sans-jp text-4xl">{kanjiOn && kanji ? kanji : word}</div>
  );

  return (
    <button
      className={cn(
        "flex w-full select-none border-b border-blue-500/50 px-6 py-4 text-2xl outline-none",
        mode !== "Dual" && "transition-colors active:bg-blue-900/50",
      )}
      onClick={() => setReveal((p) => !p)}
    >
      {mode === "Dual" && (
        <div className="flex flex-col items-start gap-2">
          <Word />
          <Meaning />
        </div>
      )}
      {mode === "Normal" && (reveal ? <Meaning /> : <Word />)}
      {mode === "Invert" && (reveal ? <Word /> : <Meaning />)}
    </button>
  );
}
