import {useEffect, useState} from "react";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";
import Tabs from "~/components/Tabs";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper, {KanaType} from "~/data/japanese/kana/katakana";
import {
  kanaKeyboardKeys,
  kanaKeys,
  smallLetterKeyboardKeys,
  smallLetterKeys,
  tentenMaruKeyboardKeys,
  tentenMaruKeys,
} from "~/data/japanese/kana/quizKeys";

import usePreference from "~/hooks/usePreference";
import {cn, getRandomInt} from "~/lib/utils";

export default function QuizKana() {
  const [mode, setMode] = useState(true);
  const [activeKey, setActiveKey] = useState("");
  const [testMode, setTestMode] = useState("Kana");
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  const kanaMapper = mode ? hiraganaMapper : katakanaMapper;
  const {jpFont, isNepali} = usePreference();
  const activeTestModeNumber = testMode === "Kana" ? 0 : testMode === "Tenten Maru" ? 1 : 2;

  let keys: string[];
  let keyboardKeys: string[][];

  switch (testMode) {
    case "Tenten Maru":
      keys = tentenMaruKeys;
      keyboardKeys = tentenMaruKeyboardKeys;
      break;
    case "Small Letters":
      keys = smallLetterKeys;
      keyboardKeys = smallLetterKeyboardKeys;
      break;
    default:
      keys = kanaKeys;
      keyboardKeys = kanaKeyboardKeys;
  }

  const changeQuestion = () => {
    const randomIndex = getRandomInt(keys.length);
    const randomKey = keys[randomIndex];
    setActiveKey(randomKey);
  };

  const handleKeyPress = (key: string) => {
    if (!kanaMapper[activeKey]) return;

    const selectedAnswer = kanaMapper[key]?.jp;
    const correctAnswer = kanaMapper[activeKey].jp;

    setIsCorrect(selectedAnswer === correctAnswer);
    setShowResult(true);

    setTimeout(() => setShowResult(false), 800);

    if (selectedAnswer === correctAnswer) {
      changeQuestion();
    }
  };

  useEffect(() => {
    changeQuestion();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode, testMode]);

  return (
    <div className="flex flex-col gap-4 h-svh p-4">
      <PageHeader iconName="close" label="Kana Quiz" labelClassName="text-3xl" />
      <Select
        value={!mode}
        handleChange={() => setMode((prev) => !prev)}
        labelOn="Katakana"
        labelOff="Hiragana"
        labelClassName="text-xl"
        className="mr-auto"
        switchSize={40}
        bgOff="bg-green-500"
        borderOff="border-green-500"
      />
      <Tabs
        options={["Kana", "Tenten Maru", "Small Letters"]}
        activeIndex={activeTestModeNumber}
        handleChange={(newTestMode) => setTestMode(newTestMode)}
      />
      <div className={cn("flex items-center justify-center my-8 text-5xl font-bold", jpFont)}>
        {kanaMapper[activeKey]?.jp}
      </div>
      {showResult && (
        <ResultBox
          isCorrect={isCorrect}
          answer={isNepali ? kanaMapper[activeKey]?.np : activeKey}
        />
      )}
      <Keyboard kanaMapper={kanaMapper} keys={keyboardKeys} onKeyPress={handleKeyPress} />
    </div>
  );
}

interface KeyboardProps {
  keys: string[][];
  kanaMapper: KanaType;
  onKeyPress: (key: string) => void;
}

const Keyboard = ({keys, kanaMapper, onKeyPress}: KeyboardProps) => {
  const {isNepali} = usePreference();

  return (
    <div className="flex flex-col w-full flex-1 overflow-auto">
      {keys?.map((row, i) => (
        <div key={"row-" + i} className="flex">
          {row.map((key, j) => (
            <div
              key={"col-" + j}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e}
              className={cn(
                "flex flex-1 m-1 rounded-lg justify-center text-lg select-none hover:cursor-pointer p-1",
                key === ""
                  ? "bg-gray-300 dark:bg-gray-800"
                  : "bg-blue-500 hover:bg-blue-600 active:scale-90"
              )}
              onClick={() => key && onKeyPress(key)}
            >
              {isNepali ? kanaMapper[key]?.np : key}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

const ResultBox = ({isCorrect, answer}: {isCorrect: boolean; answer: string}) => {
  return (
    <div
      className={cn(
        "absolute top-4 right-4 px-8 py-4 rounded-lg shadow-lg text-2xl transition-all z-[9999]",
        isCorrect ? "bg-green-500 text-white" : "bg-red-500 text-white"
      )}
    >
      <div>{isCorrect ? "Correct!" : "Incorrect!"}</div>
      {!isCorrect && <div className="text-2xl">Answer: {answer}</div>}
    </div>
  );
};
