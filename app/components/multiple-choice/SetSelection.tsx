import {useState} from "react";
import {availableLessons} from "~/data/vocabulary/getData";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";
import Button from "../ShiningButton";
import {useQuiz} from "~/context/QuizContext";

export default function SetSelection() {
  const [showSets, setShowSets] = useState(false);
  const availableSets = availableLessons;
  const {selectedSet, setSelectedSet, setSelectedQuestions} = useQuiz();

  return (
    <div className="flex flex-col">
      <button
        onClick={() => setShowSets((prev) => !prev)}
        className="flex items-center border border-gray-500/50 p-4"
      >
        <div className="w-full text-left text-2xl">Set: {selectedSet}</div>
        <div className="flex size-10">
          <Icon iconName="chevronDown" className={cn("transition-all", showSets && "rotate-180")} />
        </div>
      </button>
      {showSets && (
        <div className="grid w-full grid-cols-3 gap-4 border border-t-0 border-gray-500/50 p-4 backdrop-blur-sm">
          {availableSets.map((set) => (
            <Button
              key={set}
              label={set}
              onClick={() => {
                setSelectedSet(set);
                setSelectedQuestions([]);
              }}
              isActive={set === selectedSet}
            />
          ))}
        </div>
      )}
    </div>
  );
}
