import {useCallback, useEffect, useState} from "react";
import GridContainer from "~/components/GridContainer";
import MatchCard from "~/components/MatchCard";
import PageHeader from "~/components/PageHeader";
import Button from "~/components/ShiningButton";
import {
  getData,
  LessonType,
  QuizDataType,
  availableLessons,
  WordType,
} from "~/data/vocabulary/getData";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

const shuffleArray = (array: QuizDataType[]) => [...array].sort(() => Math.random() - 0.5);

export default function CustomQuiz() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [lesson, setLesson] = useState<LessonType>("L01");
  const [selectedData, setSelectedData] = useState<WordType[]>([]);
  const [quizCards, setQuizCards] = useState<QuizDataType[]>([]);
  const [kanjiOn, setKanjiOn] = useState(false);
  const [activeCards, setActiveCards] = useState({question: "", answer: ""});
  const [matchedCards, setMatchedCards] = useState<string[]>([]);
  const [incorrectCards, setIncorrectCards] = useState({question: "", answer: ""});

  const data = getData(lesson);

  const generateQuizCards = useCallback(() => {
    const newQuizCards: QuizDataType[] = selectedData.flatMap((entry) => [
      {content: entry.word, kanji: entry.kanji, cardType: "question", id: "QN-" + entry.word},
      {content: entry.meaning, cardType: "answer", id: "AN-" + entry.word},
    ]);
    setQuizCards(shuffleArray(newQuizCards));
  }, [selectedData]);

  useEffect(() => generateQuizCards(), [generateQuizCards]);
  useEffect(() => setSelectedData([]), [lesson]);

  const handleSelected = (d: WordType) => {
    setSelectedData((prev) =>
      prev.some((item) => item.word === d.word)
        ? prev.filter((item) => item.word !== d.word)
        : [...prev, d],
    );
  };

  const handleCardClick = (cardType: "question" | "answer", cardId: string) => {
    if (activeCards[cardType] === cardId) {
      setActiveCards((p) => ({...p, [cardType]: ""}));
      return;
    }

    const newActiveCards = {...activeCards, [cardType]: cardId};
    setActiveCards(newActiveCards);

    if (newActiveCards.question && newActiveCards.answer) {
      if (newActiveCards.question === newActiveCards.answer) {
        setMatchedCards((prev) => [...prev, newActiveCards.question]);
        setActiveCards({question: "", answer: ""});

        setTimeout(() => {
          setQuizCards((prev) => prev.filter((q) => q.id.slice(3) !== newActiveCards.question));
          setMatchedCards((prev) => prev.filter((id) => id !== newActiveCards.question));
        }, 500);
      } else {
        setIncorrectCards(newActiveCards);
        setTimeout(() => {
          setIncorrectCards({question: "", answer: ""});
          setActiveCards({question: "", answer: ""});
        }, 1000);
      }
    }
  };

  return (
    <div className="flex max-h-svh select-none flex-col gap-4 p-4">
      <PageHeader label="Quiz" menuOn={false} />
      <div className="fixed right-4 top-6 z-[1000] flex gap-4">
        <Button
          label="Kanji"
          onClick={() => setKanjiOn((prev) => !prev)}
          variant={kanjiOn ? "standard" : "danger"}
        />
        {openDrawer ? (
          <Icon onClick={() => setOpenDrawer(false)} className="size-8" iconName="close" />
        ) : (
          <Icon onClick={() => setOpenDrawer(true)} className="size-8" iconName="hamburger" />
        )}
      </div>

      {openDrawer && (
        <div className="fixed inset-0 flex h-svh w-svw flex-col gap-8 p-4 backdrop-blur-sm">
          <div className="mt-16">
            <div className="my-2 text-xl font-bold"> Select Lesson:</div>
            <div className="flex justify-between gap-4 overflow-auto">
              {availableLessons.map((l) => (
                <Button
                  key={l}
                  onClick={() => setLesson(l)}
                  label={l.slice(1)}
                  isActive={lesson === l}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <div className="text-xl font-bold">Words:</div>
            <div className="flex-1"></div>
            <Button
              disabled={selectedData.length === data.length}
              label="Pick All"
              onClick={() => setSelectedData(data)}
            />
            <Button
              variant="danger"
              disabled={selectedData.length === 0}
              label="Remove All"
              onClick={() => setSelectedData([])}
            />
          </div>

          <div className="flex-1 overflow-auto border-2 border-gray-500">
            {data.map((d, i) => (
              <button
                key={d.word + i}
                className={cn(
                  "flex w-full flex-col items-start border-b-2 border-b-gray-500 px-1 py-1",
                  selectedData.some((item) => item.word === d.word) && "bg-blue-500 text-white",
                  i === data.length - 1 && "border-b-0",
                )}
                onClick={() => handleSelected(d)}
              >
                <div className="font-sans-jp">{kanjiOn && d.kanji ? d.kanji : d.word}</div>
                <div className="text-left">{d.meaning}</div>
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="flex-1 overflow-auto">
        {selectedData.length > 0 ? (
          <GridContainer>
            {quizCards.map((card, i) => (
              <MatchCard
                key={card.id + i}
                cardId={card.id.slice(3)}
                content={kanjiOn && card.kanji ? card.kanji : card.content}
                cardType={card.cardType}
                matched={matchedCards.includes(card.id.slice(3))}
                handleCardClick={() => handleCardClick(card.cardType, card.id.slice(3))}
                {...{activeCards, incorrectCards}}
              />
            ))}
          </GridContainer>
        ) : (
          <div className="flex h-96 w-full items-center justify-center text-center text-2xl">
            Select some words to play quiz
          </div>
        )}

        {selectedData.length > 0 && quizCards.length === 0 && (
          <div className="flex h-96 w-full items-center justify-center text-center">
            <Button size="large" label="Play Again" onClick={() => generateQuizCards()} />
          </div>
        )}
      </div>
    </div>
  );
}
