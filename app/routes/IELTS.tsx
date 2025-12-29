import {useState} from "react";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";
import Select from "~/components/Select";
import Button from "~/components/ShiningButton";

const IeltsPractice = () => {
  const defaultAnswers = Array(40).fill({answer: "", status: ""});
  const [answers, setAnswers] = useState(defaultAnswers);
  const [isChecking, setIsChecking] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isListening, setIsListening] = useState(true);

  const setAllStatus = (status: "" | "correct" | "incorrect") => {
    setAnswers((prev) => prev.map((a) => ({...a, status})));
  };

  const handleClear = () => {
    setAnswers(defaultAnswers);
    setIsChecking(false);
  };

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const newAnswers = [...answers];
    newAnswers[idx] = {...newAnswers[idx], answer: e.target.value};
    setAnswers(newAnswers);
  };

  const handleStatusChange = (idx: number, status: "correct" | "incorrect") => {
    const newAnswers = [...answers];
    newAnswers[idx] = {...newAnswers[idx], status};
    setAnswers(newAnswers);
  };

  const score = answers.filter((a) => a.status === "correct").length;

  const getBand = (score: number, isListening: boolean) => {
    if (isListening) {
      switch (true) {
        case score >= 39:
          return 9.0;
        case score >= 37:
          return 8.5;
        case score >= 35:
          return 8.0;
        case score >= 32:
          return 7.5;
        case score >= 30:
          return 7.0;
        case score >= 26:
          return 6.5;
        case score >= 23:
          return 6.0;
        case score >= 18:
          return 5.5;
        case score >= 16:
          return 5.0;
        case score >= 13:
          return 4.5;
        case score >= 11:
          return 4.0;
        default:
          return 0;
      }
    } else {
      switch (true) {
        case score >= 39:
          return 9.0;
        case score >= 37:
          return 8.5;
        case score >= 35:
          return 8.0;
        case score >= 33:
          return 7.5;
        case score >= 30:
          return 7.0;
        case score >= 27:
          return 6.5;
        case score >= 23:
          return 6.0;
        case score >= 19:
          return 5.5;
        case score >= 15:
          return 5.0;
        case score >= 13:
          return 4.5;
        case score >= 10:
          return 4.0;
        default:
          return 0;
      }
    }
  };

  return (
    <div className="relative z-[999] pb-20">
      {/* Page Header */}
      <div className="fixed inset-0 z-[9] flex h-20 w-full items-center justify-center border-b-2 border-b-gray-300 backdrop-blur-md transition-all dark:border-b-slate-700">
        <div className="mx-20 line-clamp-1 select-none text-center text-3xl font-bold">IELTS</div>
        <Icon
          onClick={() => setShowMenu(true)}
          iconName="hamburger"
          className="absolute right-4 size-10 rounded-lg border-2 border-slate-800 p-1.5 active:bg-blue-500 dark:border-gray-200"
        />
      </div>

      {/* Drawer */}
      <div
        className={cn(
          "fixed right-0 top-0 z-10 flex h-screen w-screen flex-col items-center gap-4 p-4 backdrop-blur-md transition-transform duration-500 md:w-[400px]",
          showMenu ? "translate-x-0" : "translate-x-full",
        )}
      >
        <Icon
          iconName="close"
          className="ml-auto size-10 backdrop:block"
          thickness={2}
          onClick={() => setShowMenu(false)}
        />

        {/* Mode Switch */}
        <Select
          switchSize={50}
          handleChange={() => setIsChecking((c) => !c)}
          labelOn="Checking"
          labelOff="Writing"
          bgOff="bg-cyan-500"
          borderOff="border-cyan-500"
          bgOn="bg-lime-500"
          borderOn="border-lime-500"
          value={isChecking}
          labelClassName={cn("text-2xl", isChecking ? "text-lime-500" : "text-cyan-500")}
          className="ml-auto flex-row-reverse"
        />

        {/* Listening / Reading Switch */}
        <Select
          switchSize={50}
          handleChange={() => setIsListening((prev) => !prev)}
          labelOn="Listening"
          labelOff="Reading"
          bgOn="bg-orange-500"
          borderOn="border-orange-500"
          bgOff="bg-violet-500"
          borderOff="border-violet-500"
          value={isListening}
          labelClassName={cn("text-2xl", isListening ? "text-orange-500" : "text-violet-500")}
          className="ml-auto flex-row-reverse"
        />

        <HLine />

        {/* Score & Band */}
        <div className="text-4xl font-bold">Score: {score}</div>
        <div className="text-4xl font-bold">Band: {getBand(score, isListening)}</div>

        <HLine />

        {/* Drawer Buttons */}
        <Button label="Clear All" onClick={handleClear} className="w-full" />
        {isChecking && (
          <>
            <Button
              label="Reset Checking"
              onClick={() => setAllStatus("")}
              variant="golden"
              className="w-full"
            />
            <Button
              label="Correct All"
              onClick={() => setAllStatus("correct")}
              className="w-full"
              variant="success"
            />
            <Button
              label="Incorrect All"
              onClick={() => setAllStatus("incorrect")}
              className="w-full"
              variant="danger"
            />
          </>
        )}
        <div
          className="h-20 w-full flex-1"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e}
          onClick={() => {
            setShowMenu(false);
          }}
        ></div>
      </div>

      {/* Spacer */}
      <div className="h-20" />

      {/* Content: 40 input fields */}
      <div className="flex flex-col gap-4 p-4">
        {answers.map((a, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <div className="flex items-center gap-2 text-2xl">
              <div className="w-10 text-right text-blue-500">{idx + 1}.</div>
              <input
                type="text"
                value={a.answer}
                onChange={(e) => handleAnswerChange(e, idx)}
                disabled={isChecking}
                className={cn(
                  "w-full rounded-xl border-2 border-blue-500/50 bg-transparent px-2 py-1 outline-none",
                  a.status === "correct" && "border-green-500/50 bg-green-500/30",
                  a.status === "incorrect" && "border-red-500/50 bg-red-500/30",
                )}
              />
            </div>
            {isChecking && (
              <div className="mt-1 flex justify-end gap-4">
                <Button
                  label={<Icon iconName="checked" thickness={4} className="stroke-white" />}
                  onClick={() => {
                    handleStatusChange(idx, "correct");
                  }}
                />
                <Button
                  label={<Icon iconName="close" thickness={4} className="stroke-white" />}
                  onClick={() => {
                    handleStatusChange(idx, "incorrect");
                  }}
                  variant="danger"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const HLine = () => (
  <div className="mb-4 mt-2 h-1 w-full rounded-full bg-gray-500 dark:bg-gray-300"></div>
);

export default IeltsPractice;
