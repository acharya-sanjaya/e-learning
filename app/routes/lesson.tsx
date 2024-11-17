import {useState} from "react";
import q1 from "~/data/japanese/verbs-part1";
import q2 from "~/data/japanese/verbs-part2";
import q3 from "~/data/japanese/verbs-part3";
import {cn} from "~/lib/utils";

const qns = [q1, q2, q3];

const Lesson = () => {
  const [chapter, setChapter] = useState(0);
  const [verbs, setVerbs] = useState(qns[0]);

  const changeChapter = (c: number) => {
    if (c === chapter) return;
    setChapter(c);
    setVerbs(qns[c]);
  };

  return (
    <div className="p-4">
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
      <table className="table-auto w-full text-center text-3xl">
        <thead>
          <tr className="bg-gray-300 dark:bg-black">
            <th className="p-4">Verb</th>
            <th className="p-4">Japanese</th>
          </tr>
        </thead>
        <tbody>
          {verbs.map((verb, i) => (
            <tr
              key={verb.question}
              className={cn(
                i % 2 === 0 ? "bg-gray-200 dark:bg-gray-800" : "bg-gray-300 dark:bg-gray-700"
              )}
            >
              <td className="p-4 w-1/2 text-xl font-bold">{verb.question}</td>
              <td className="p-4 w-1/2 text-5xl font-sans font-thin">{verb.display}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lesson;
