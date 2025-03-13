import {AnswerType} from "~/data/san-quiz/QuizTypes";
import {cn} from "~/lib/utils";

interface OptionProps {
  id: AnswerType;
  selected: AnswerType | null;
  answer: AnswerType;
  text: string;
  handleClick: (choice: AnswerType) => void;
}

export default function Option({id, selected, answer, text, handleClick}: OptionProps) {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key in ["Enter", " "] && handleClick(id)}
      onClick={selected ? undefined : () => handleClick(id)}
      className={cn(
        "rounded-lg bg-black/10 px-4 py-3 text-center font-bold sm:text-left dark:bg-white/10",
        selected && "cursor-not-allowed",
        id === selected && id !== answer && "bg-red-500 text-white dark:bg-red-600",
        selected && id === answer && "bg-green-500 dark:bg-green-600",
      )}
    >
      {text}
    </div>
  );
}
