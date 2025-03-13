import {Fragment, useEffect, useMemo, useState} from "react";
import Button from "~/components/ShiningButton";
import MatchCard from "~/components/MatchCard";
import {getQuizCards, QuizDataType, LessonType, lessonOptions} from "~/data/vocabulary/getData";
import PageHeader from "~/components/PageHeader";

export default function QuizMatchThePairs() {
  const [kanjiOn, setKanjiOn] = useState(false);
  const [activeLesson, setActiveLesson] = useState<LessonType>("L01");
  const [activeCards, setActiveCards] = useState({question: "", answer: ""});
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [incorrectCards, setIncorrectCards] = useState<{
    question: string;
    answer: string;
  }>({question: "", answer: ""});

  const [shuffledData, setShuffledData] = useState<{
    questions: QuizDataType[];
    answers: QuizDataType[];
  }>({
    questions: [],
    answers: [],
  });

  const initialData = useMemo(() => {
    return getQuizCards(activeLesson);
  }, [activeLesson]);

  const {questions, answers} = initialData;

  useEffect(() => {
    const shuffleArray = (array: QuizDataType[]) => {
      return [...array].sort(() => Math.random() - 0.5);
    };

    const shuffled = {
      questions: shuffleArray(questions),
      answers: shuffleArray(answers),
    };
    setShuffledData(shuffled);
  }, [questions, answers]);

  const handleCardClick = (cardType: "question" | "answer", cardId: string) => {
    if (activeCards[cardType] === cardId) {
      setActiveCards((p) => ({...p, [cardType]: ""}));
      return;
    }

    const newActiveCards = {...activeCards, [cardType]: cardId};
    setActiveCards(newActiveCards);

    if (newActiveCards.question && newActiveCards.answer) {
      const questionCard = newActiveCards.question;
      const answerCard = newActiveCards.answer;

      if (questionCard === answerCard) {
        setMatchedCards((prev) => [...prev, questionCard]);
        setActiveCards({question: "", answer: ""});
        setTimeout(() => {
          setShuffledData((prev) => ({
            questions: prev.questions.filter((q) => q.id.slice(3) !== questionCard),
            answers: prev.answers.filter((a) => a.id.slice(3) !== answerCard),
          }));
          setMatchedCards((prev) => prev.filter((id) => id !== questionCard)); // Cleanup matched cards
        }, 500);
      } else {
        setIncorrectCards({
          question: questionCard,
          answer: answerCard,
        });

        setTimeout(() => {
          setIncorrectCards({question: "", answer: ""});
          setActiveCards({question: "", answer: ""});
        }, 1000);
      }
    }
  };

  return (
    <div className="p-4">
      <PageHeader label="Match the Pairs" menuOn={false} />
      <div className="fixed left-0 top-20 flex w-full flex-col gap-4 border-b-2 border-b-gray-300 p-4 text-lg backdrop-blur-md dark:border-b-slate-700">
        <div className="flex items-center gap-4">
          <div>Mode:</div>
          <Button
            size="small"
            label="Kanji"
            onClick={() => setKanjiOn((prev) => !prev)}
            variant={kanjiOn ? "standard" : "danger"}
          />
        </div>
        <div className="flex items-center gap-4">
          <div>Lesson:</div>
          <select
            className="p-2 outline-none"
            value={activeLesson}
            onChange={(e) => setActiveLesson(e.target.value as LessonType)}
          >
            {lessonOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-28 grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
        {shuffledData.questions.map((_, i) => {
          const questionCard = shuffledData.questions[i];
          const answerCard = shuffledData.answers[i];
          return (
            <Fragment key={activeLesson + i + questionCard?.id}>
              <MatchCard
                cardId={questionCard?.id.slice(3)}
                content={
                  kanjiOn && questionCard?.kanji ? questionCard?.kanji : questionCard?.content
                }
                cardType={questionCard?.cardType}
                activeCards={activeCards}
                matched={matchedCards.includes(questionCard?.id.slice(3))}
                incorrectCards={incorrectCards}
                handleCardClick={() =>
                  handleCardClick(questionCard?.cardType, questionCard?.id.slice(3))
                }
              />
              <MatchCard
                cardId={answerCard?.id.slice(3)}
                content={answerCard?.content}
                cardType={answerCard?.cardType}
                activeCards={activeCards}
                matched={matchedCards.includes(answerCard?.id.slice(3))}
                incorrectCards={incorrectCards}
                handleCardClick={() =>
                  handleCardClick(answerCard?.cardType, answerCard?.id.slice(3))
                }
              />
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}
