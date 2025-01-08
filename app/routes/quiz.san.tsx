import {useState} from "react";
import Menu from "~/components/quiz/Menu";
import Question from "~/components/quiz/Question";
import dsaData from "~/data/san-quiz/dsa";
import javaData from "~/data/san-quiz/java";
const questions = [dsaData, javaData];
const sets = ["DSA", "Java"];
export default function QuizSan() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeQuestions, setActiveQuestions] = useState(questions[0]);

  const handleQuestionSetChange = (x: number) => {
    setActiveIndex(x);
    setActiveQuestions(questions[x]);
  };

  return (
    <div className="p-4">
      <Menu items={sets} activeIndex={activeIndex} handleChangeItem={handleQuestionSetChange} />
      <div className="flex flex-col gap-8">
        {activeQuestions.map((question, index) => (
          <Question key={sets[activeIndex] + index} question={question} />
        ))}
      </div>
    </div>
  );
}
