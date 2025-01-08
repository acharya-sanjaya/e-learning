import {useState} from "react";
import Option from "~/components/quiz/Option";
import {QuestionType, AnswerType} from "~/data/san-quiz/QuizTypes";
import Explanation from "./Explanation";

interface QuestionProps {
  question: QuestionType;
}

export default function Question({question}: QuestionProps) {
  const [selected, setSelected] = useState<AnswerType | null>(null);

  const handleOptionClick = (id: AnswerType) => {
    if (selected === id) setSelected(null);
    else setSelected(id);
  };

  const options: AnswerType[] = ["a", "b", "c", "d"];

  return (
    <div className="flex flex-col gap-4">
      <div className="text-xl font-bold">{question.q}</div>
      {options.map((id) => (
        <Option
          key={id}
          id={id}
          selected={selected}
          answer={question.ans}
          text={question[id]}
          handleClick={() => handleOptionClick(id)}
        />
      ))}
      <Explanation text={question?.e} />
    </div>
  );
}
