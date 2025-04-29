import {useCallback, useEffect, useState} from "react";
import {QuizProvider, useQuiz} from "~/context/QuizContext";
import {QuizDataType} from "~/data/vocabulary/getData";
import Icon from "~/Icons";
import MatchCard from "~/components/MatchCard";
import SetSelection from "~/components/multiple-choice/SetSelection";
import QuestionsSelection from "~/components/multiple-choice/QuestionSelection";
import Button from "~/components/ShiningButton";
import PageHeader from "~/components/PageHeader";

const shuffleArray = (array: QuizDataType[]) => [...array].sort(() => Math.random() - 0.5);

export default function QuizTest() {
  return (
    <QuizProvider>
      <QuizTestConsumer />
    </QuizProvider>
  );
}

const QuizTestConsumer = () => {
  const {selectedQuestions, setSelectedQuestions} = useQuiz();
  const [drawer, setDrawer] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [kanjiOn, setKanjiOn] = useState(false);
  const [questionCards, setQuestionCards] = useState<QuizDataType[]>([]);
  const [answerCards, setAnswerCards] = useState<QuizDataType[]>([]);
  const [activeQuestionId, setActiveQuestionId] = useState<string>("");
  const [activeAnswerId, setActiveAnswerId] = useState<string>("");
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [incorrectCards, setIncorrectCards] = useState({question: "", answer: ""});

  const generateQuizCards = useCallback(() => {
    const questions = selectedQuestions.map((q) => ({
      content: inverted ? q.meaning : kanjiOn && q.kanji ? q.kanji : q.word,
      id: "QN-" + q.word,
      cardType: "question" as const,
    }));

    const answers = selectedQuestions.map((q) => ({
      content: inverted ? (kanjiOn && q.kanji ? q.kanji : q.word) : q.meaning,
      id: "AN-" + q.word,
      cardType: "answer" as const,
    }));

    setQuestionCards(questions);
    setAnswerCards(answers);
    setActiveQuestionId("");
  }, [selectedQuestions, inverted, kanjiOn]);

  useEffect(() => {
    generateQuizCards();
  }, [generateQuizCards]);

  const handleCardClick = (cardId: string) => {
    if (activeQuestionId === "") {
      setActiveQuestionId(cardId);
      setAnswerCards((prev) => shuffleArray(prev));
    } else {
      setActiveQuestionId("");
    }
  };

  return (
    <div className="flex h-svh flex-col p-4">
      {!drawer && (
        <div className="fixed z-[9999] size-10 self-end">
          <Icon
            iconName="hamburger"
            onClick={() => {
              setSelectedQuestions([]);
              setDrawer(true);
            }}
          />
        </div>
      )}

      <PageHeader label="Quiz" menuOn={false} />
      {drawer && (
        <div className="fixed inset-0 z-[9999] flex h-full w-full flex-col p-4 backdrop-blur-md">
          <div className="mb-4 size-10 self-end">
            <Icon iconName="close" onClick={() => setDrawer(false)} />
          </div>
          <div className="mb-4 flex gap-4">
            <Button
              label="Kanji"
              onClick={() => setKanjiOn((prev) => !prev)}
              variant={kanjiOn ? "standard" : "danger"}
            />
            <Button
              label={inverted ? "Normal" : "Invert"}
              onClick={() => setInverted((prev) => !prev)}
              variant={inverted ? "standard" : "success"}
            />
          </div>
          <SetSelection />
          <QuestionsSelection />
        </div>
      )}

      <div className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {questionCards.map((card) => {
          if (activeQuestionId && activeQuestionId !== card.id.slice(3)) return;
          return (
            <MatchCard
              key={"Question: " + card.id}
              content={card.content}
              cardId={card.id.slice(3)}
              cardType="question"
              matched={matchedCards.includes(card.id.slice(3))}
              activeCards={{question: activeQuestionId, answer: activeAnswerId}}
              incorrectCards={incorrectCards}
              handleCardClick={() => handleCardClick(card.id.slice(3))}
            />
          );
        })}
      </div>
      <div className="mt-4 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-4">
        {activeQuestionId !== "" &&
          answerCards.map((card) => (
            <MatchCard
              key={"Answer: " + card.id}
              content={card.content}
              cardId={card.id}
              cardType="answer"
              matched={matchedCards.includes(card.id.slice(3))}
              activeCards={{question: activeQuestionId, answer: activeAnswerId}}
              incorrectCards={incorrectCards}
              handleCardClick={() => {
                setActiveAnswerId(card.id.slice(3));
                const newActiveCards = {question: activeQuestionId, answer: card.id.slice(3)};

                if (newActiveCards.question && newActiveCards.answer) {
                  if (newActiveCards.question === newActiveCards.answer) {
                    setMatchedCards((prev) => [...prev, newActiveCards.question]);
                    setActiveQuestionId("");
                    setActiveAnswerId("");

                    setTimeout(() => {
                      setQuestionCards((prev) =>
                        prev.filter((q) => q.id.slice(3) !== newActiveCards.question),
                      );
                      setAnswerCards((prev) =>
                        prev.filter((a) => a.id.slice(3) !== newActiveCards.answer),
                      );
                      setMatchedCards((prev) =>
                        prev.filter((id) => id !== newActiveCards.question),
                      );
                    }, 500);
                  } else {
                    setIncorrectCards(newActiveCards);
                    setTimeout(() => {
                      setIncorrectCards({question: "", answer: ""});
                      setActiveQuestionId("");
                      setActiveAnswerId("");
                    }, 1000);
                  }
                }
              }}
            />
          ))}
      </div>
      {questionCards.length <= 0 && (
        <>
          <div className="flex w-full flex-1 items-center justify-center p-4 text-center text-2xl font-bold">
            Select Questions to start playing the quiz
          </div>
          <div className="h-80"></div>
        </>
      )}
    </div>
  );
};
