import {useNavigate} from "@remix-run/react";
import {useRef, useState} from "react";
import Button from "~/components/Button";
import Popup from "~/components/Popup";
import chapter1 from "~/data/japanese/verbs-part1";
import chapter2 from "~/data/japanese/verbs-part2";
import chapter3 from "~/data/japanese/verbs-part3";

import Icon from "~/Icons";
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
  const [jumpTo, setJumpTo] = useState(1);
  const answerRef = useRef<HTMLInputElement>(null);

  const changeChapter = (c: number) => {
    if (c === chapter) return;
    setChapter(c);
    setActiveIndex(0);
    setJumpTo(1);
    setAnswer("");
  };

  const triggerPopup = () => {
    setShowPopup(true);
    answer.toLowerCase() === questionList[activeIndex].answer.toLowerCase()
      ? setIsCorrect(true)
      : setIsCorrect(false);
    setRevealAnswer(false);
  };

  const navigate = useNavigate();
  return (
    <div
      className="w-svw h-svh max-w-[400px] m-auto flex flex-col
      gap-3
     dark:bg-slate-900 dark:text-white p-4 "
    >
      <div className="relative flex justify-center items-center">
        <Icon
          thickness={2}
          onClick={() => {
            navigate(-1);
          }}
          iconName="close"
          className="size-8 absolute left-0"
        />
        <div className="text-3xl font-bold">Verbs</div>
      </div>
      <div className="flex w-full gap-2 justify-end text-xl items-center">
        <Button
          visible={activeIndex !== jumpTo - 1}
          label="Save"
          variant="success"
          className="px-4 py-1 rounded-xl text-sm"
          onClick={() => {
            if (jumpTo <= 1) {
              setActiveIndex(0);
              setJumpTo(1);
            } else if (jumpTo >= questionList.length) {
              setActiveIndex(questionList.length - 1);
              setJumpTo(questionList.length);
            } else {
              setActiveIndex(jumpTo - 1);
            }
          }}
        />
        <input
          className="w-12 text-center bg-transparent outline-none focus:border focus:border-gray-500"
          type="number"
          value={jumpTo}
          onChange={(e) => {
            setJumpTo(parseInt(e.target.value, 10) || 1);
          }}
        />
        <div>/ {questionList.length}</div>
      </div>
      <div className="w-full h-2 bg-gray:400 dark:bg-gray-600 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 rounded-full transition-all duration-300"
          style={{width: `${((activeIndex + 1) * 100) / questionList.length}%`}}
        ></div>
      </div>
      <div className="bg-black/30 my-4 py-10 text-center text-lg">
        {questionList[activeIndex].question}
      </div>
      <div>
        <input
          ref={answerRef}
          type="text"
          className="w-full p-2 text-center text-lg outline-none border border-gray-500 rounded-xl focus:border-blue-500"
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
      <div className="mt-10 max-h-28 items-center flex w-full justify-between flex-wrap gap-4 overflow-y-auto overflow-x-hidden">
        <Button
          label="Set 1"
          variant="standard"
          isActive={chapter === 0}
          onClick={() => changeChapter(0)}
        />
        <Button
          label="Set 2"
          variant="standard"
          isActive={chapter === 1}
          onClick={() => changeChapter(1)}
        />
        <Button
          label="Set 2"
          variant="standard"
          isActive={chapter === 2}
          onClick={() => changeChapter(2)}
        />
      </div>
      <div className="mt-auto flex justify-between">
        <Button
          label="Prev"
          variant="standard"
          isDisabled={activeIndex <= 0}
          onClick={() => {
            setActiveIndex((prevIndex) => prevIndex - 1);
            setJumpTo((prev) => prev - 1);
            setAnswer("");
          }}
        />
        <Button
          label="Skip"
          variant="standard"
          isDisabled={activeIndex >= questionList.length - 1}
          onClick={() => {
            setActiveIndex((prevIndex) => prevIndex + 1);
            setJumpTo((prev) => prev + 1);
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
              setJumpTo((prev) => prev + 1);
            } else {
              setActiveIndex(0);
              setJumpTo(1);
            }

            setAnswer("");
          }
          answerRef.current?.focus();
        }}
      >
        <div className="flex flex-col gap-4 items-center">
          {!revealAnswer && (
            <div
              className={cn(
                "text-3xl font-bold py-5",
                isCorrect ? "text-green-500" : "text-red-500"
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
