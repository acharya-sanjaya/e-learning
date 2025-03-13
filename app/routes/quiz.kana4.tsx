import {useRef, useState} from "react";
import Button from "~/components/Button";
import PageHeader from "~/components/PageHeader";
import Popup from "~/components/Popup";
import chapter1 from "~/data/verbs-part1";
import chapter2 from "~/data/verbs-part2";
import chapter3 from "~/data/verbs-part3";

import {cn} from "~/lib/utils";

const questions = [chapter1, chapter2, chapter3];
const Quiz = () => {
  const [chapter, setChapter] = useState(0);
  const questionList = questions[chapter];
  const [activeIndex, setActiveIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [jumpTo, setJumpTo] = useState<number>(1);
  const answerRef = useRef<HTMLInputElement>(null);

  const changeChapter = (c: number) => {
    if (c === chapter) return;
    setChapter(c);
    setActiveIndex(0);
    setJumpTo(1);
    setAnswer("");
  };

  const removeSpaces = (str: string) => {
    return str.replaceAll(/\s/g, "");
  };

  const triggerPopup = () => {
    setShowPopup(true);
    removeSpaces(answer.toLowerCase()) === questionList[activeIndex].answer.toLowerCase()
      ? setIsCorrect(true)
      : setIsCorrect(false);
    setRevealAnswer(false);
  };

  return (
    <div className="m-auto flex h-svh w-svw max-w-[400px] flex-col gap-3 p-4 dark:bg-slate-900 dark:text-white">
      <PageHeader iconName="close" label="Quiz" labelClassName="text-3xl" />
      <div className="flex w-full items-center justify-end gap-2 text-xl">
        <Button
          visible={activeIndex !== (jumpTo as number) - 1}
          label="Save"
          variant="success"
          className="rounded-xl px-4 py-1 text-sm"
          // no onClick event as  inputfield's onBlur event handles everything
        />
        <input
          className="w-12 bg-transparent text-center outline-none focus:border focus:border-gray-500"
          type="text"
          inputMode="numeric"
          value={jumpTo}
          onChange={(e) => {
            const value = e.target.value;
            const numberOnly = value.match(/^\d+$/);
            const validInput = value === "" || numberOnly;
            if (!validInput) return;
            else setJumpTo(e.target.value as unknown as number);
          }}
          onBlur={() => {
            if ((jumpTo as unknown) === "" || Number(jumpTo) <= 0) {
              setJumpTo(1);
              setActiveIndex(0);
            } else {
              if (Number(jumpTo) > questionList.length) {
                setJumpTo(questionList.length);
                setActiveIndex(questionList.length - 1);
              } else {
                setJumpTo(Number(jumpTo));
                setActiveIndex((jumpTo as number) - 1);
              }
            }
          }}
        />
        <div>/ {questionList.length}</div>
      </div>
      <div className="h-2 w-full overflow-hidden rounded-full bg-gray-300 dark:bg-gray-700">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-300"
          style={{width: `${((activeIndex + 1) * 100) / questionList.length}%`}}
        ></div>
      </div>
      <div className="my-4 rounded-lg bg-gray-300 py-10 text-center text-lg dark:bg-slate-800">
        {questionList[activeIndex].question}
      </div>
      <div>
        <input
          ref={answerRef}
          type="text"
          className="w-full rounded-xl border border-gray-500 p-2 text-center text-lg outline-none focus:border-blue-500"
          placeholder="Answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              triggerPopup();
            }
          }}
        />
      </div>
      <Button label="Submit" onClick={() => triggerPopup()} />
      <div className="mt-10 flex max-h-28 w-full flex-wrap items-center justify-between gap-4 overflow-y-auto overflow-x-hidden">
        <Button label="Set 1" isActive={chapter === 0} onClick={() => changeChapter(0)} />
        <Button label="Set 2" isActive={chapter === 1} onClick={() => changeChapter(1)} />
        <Button label="Set 3" isActive={chapter === 2} onClick={() => changeChapter(2)} />
      </div>
      <div className="mt-auto flex justify-between">
        <Button
          label="Prev"
          variant="standard"
          isDisabled={activeIndex <= 0}
          onClick={() => {
            setActiveIndex((prevIndex) => prevIndex - 1);
            setJumpTo((prev) => (prev as number) - 1);
            setAnswer("");
          }}
        />
        <Button
          label="Skip"
          variant="standard"
          isDisabled={activeIndex >= questionList.length - 1}
          onClick={() => {
            setActiveIndex((prevIndex) => prevIndex + 1);
            setJumpTo((prev) => (prev as number) + 1);
            setAnswer("");
          }}
        />
      </div>
      <Popup
        visible={showPopup}
        className="max-w-[400px]"
        onClose={() => {
          setShowPopup(false);
          setRevealAnswer(false);
          if (isCorrect) {
            if (activeIndex < questionList.length - 1) {
              setActiveIndex((prevIndex) => prevIndex + 1);
              setJumpTo((prev) => (prev as number) + 1);
            } else {
              setActiveIndex(0);
              setJumpTo(1);
            }

            setAnswer("");
          }
          answerRef.current?.focus();
        }}
      >
        <div className="flex flex-col items-center gap-4">
          {!revealAnswer && (
            <div
              className={cn(
                "py-5 text-3xl font-bold",
                isCorrect ? "text-green-500" : "text-red-500",
              )}
            >
              {isCorrect ? "Correct" : "Incorrect"}
            </div>
          )}
          {isCorrect || revealAnswer ? (
            <>
              <div className="text-xl">{questionList[activeIndex].question}</div>
              <div className="text-4xl">{questionList[activeIndex].display}</div>
            </>
          ) : (
            <Button variant="danger" label="Reveal Answer" onClick={() => setRevealAnswer(true)} />
          )}
        </div>
      </Popup>
    </div>
  );
};

export default Quiz;
