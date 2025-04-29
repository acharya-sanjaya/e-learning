import {cn} from "~/lib/utils";
import {useQuiz} from "~/context/QuizContext";
import {WordType} from "~/data/vocabulary/getData";
import Button from "../ShiningButton";

export default function QuestionsSelection() {
  const {availableQuestions, selectedSet, selectedQuestions, setSelectedQuestions} = useQuiz();

  const toggleSelect = (question: WordType) => {
    if (selectedQuestions.includes(question)) {
      setSelectedQuestions(selectedQuestions.filter((q) => q.word !== question.word));
    } else {
      setSelectedQuestions([...selectedQuestions, question]);
    }
  };

  const pickAll = () => {
    setSelectedQuestions(availableQuestions);
  };

  const resetSelection = () => {
    setSelectedQuestions([]);
  };

  return (
    <>
      <div className="mb-4 mt-8 flex justify-between">
        <Button
          label="Pick All"
          disabled={selectedQuestions === availableQuestions}
          onClick={pickAll}
        />
        <Button
          variant="danger"
          disabled={selectedQuestions.length === 0}
          label="Reset"
          onClick={resetSelection}
        />
      </div>
      <div className="w-full flex-1 overflow-auto py-4">
        <table className="w-full select-none border border-b-0 border-gray-500/50">
          <thead></thead>
          <tbody>
            {availableQuestions.map((q, i) => (
              <tr
                key={`set: ${selectedSet} question:${q} index: ${i}`}
                className={cn(
                  "w-full cursor-pointer border-b border-gray-500/50 text-xl",
                  selectedQuestions.includes(q) && "bg-blue-500/30",
                )}
                onClick={() => toggleSelect(q)}
              >
                <td className="w-1/2 px-4 py-2">{q.word}</td>
                <td className="w-1/2 border-l border-gray-500/50 px-4 py-2">{q.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
