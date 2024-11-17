import {useNavigate} from "@remix-run/react";
import {useState} from "react";
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

  const changeChapter = (c: number) => {
    if (c === chapter) return;
    setChapter(c);
    setActiveIndex(0);
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
     bg-slate-900 p-4 "
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
        {activeIndex !== jumpTo - 1 && (
          <button
            className="bg-green-600 px-4 py-1 rounded-xl text-sm font-bold"
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
          >
            Save
          </button>
        )}
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
      <div className="w-full h-2 bg-gray-500 rounded-full overflow-hidden">
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
      <button
        className="mt-2 p-2 bg-blue-500 text-white text-lg font-bold rounded-xl active:scale-90"
        onClick={() => triggerPopup()}
      >
        Submit
      </button>
      <div className="mt-10 max-h-28 items-center flex w-full justify-between flex-wrap gap-4 overflow-y-auto overflow-x-hidden">
        <button
          className={cn(
            "py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90",
            chapter === 0 && "bg-white/95 text-black active:scale-100 cursor-not-allowed"
          )}
          onClick={() => {
            changeChapter(0);
          }}
        >
          Set 1
        </button>
        <button
          className={cn(
            "py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90",
            chapter === 1 && "bg-white/95 text-black active:scale-100 cursor-not-allowed"
          )}
          onClick={() => {
            changeChapter(1);
          }}
        >
          Set 2
        </button>
        <button
          className={cn(
            "py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90",
            chapter === 2 && "bg-white/95 text-black active:scale-100 cursor-not-allowed"
          )}
          onClick={() => {
            changeChapter(2);
          }}
        >
          Set 3
        </button>
      </div>
      <div className="mt-auto flex justify-between">
        <button
          className={cn(
            "py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90",
            activeIndex <= 0 && "bg-gray-500 cursor-not-allowed active:scale-100"
          )}
          onClick={() => {
            if (activeIndex <= 0) return;
            setActiveIndex((prevIndex) => prevIndex - 1);
            setAnswer("");
          }}
        >
          Prev
        </button>
        <button
          className={cn(
            "py-2 px-5 bg-blue-500 text-white text-lg rounded-xl font-bold active:scale-90",
            activeIndex >= questionList.length - 1 &&
              "bg-gray-500 cursor-not-allowed active:scale-100"
          )}
          onClick={() => {
            if (activeIndex >= questionList.length - 1) return;
            setActiveIndex((prevIndex) => prevIndex + 1);
            setAnswer("");
          }}
        >
          Skip
        </button>
      </div>
      {showPopup && (
        <Popup
          className="max-w-[400px]"
          onClose={() => {
            setShowPopup(false);
            setRevealAnswer(false);
            if (isCorrect) {
              activeIndex < questionList.length - 1
                ? setActiveIndex((prevIndex) => prevIndex + 1)
                : setActiveIndex(0);

              setAnswer("");
            }
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
              <button
                className="px-6 py-3 bg-blue-500 text-white text-md font-bold rounded-xl active:scale-90"
                onClick={() => setRevealAnswer(true)}
              >
                Reveal Answer
              </button>
            )}
          </div>
        </Popup>
      )}
    </div>
  );
};

export default Quiz;
