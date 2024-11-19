import {useNavigate} from "@remix-run/react";
import {useState} from "react";
import Button from "~/components/Button";
import q1 from "~/data/japanese/verbs-part1";
import q2 from "~/data/japanese/verbs-part2";
import q3 from "~/data/japanese/verbs-part3";
import Icon from "~/Icons";
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

  const navigate = useNavigate();

  return (
    <div className="p-4 flex flex-col gap-4">
      <div className="relative">
        <Icon
          thickness={2}
          onClick={() => {
            navigate(-1);
          }}
          iconName="close"
          className="size-8 absolute left-0"
        />
      </div>
      <div className="mt-10 max-h-28 items-center flex w-full justify-between flex-wrap gap-4 overflow-y-auto overflow-x-hidden">
        <Button label="Set 1" isActive={chapter === 0} onClick={() => changeChapter(0)} />
        <Button label="Set 2" isActive={chapter === 1} onClick={() => changeChapter(1)} />
        <Button label="Set 3" isActive={chapter === 2} onClick={() => changeChapter(2)} />
      </div>
      <table className="table-auto w-full text-center text-3xl border border-gray-500">
        <thead>
          <tr className="bg-gray-300 dark:bg-black">
            <th className="p-4">Verb</th>
            <th className="p-4 border-l border-l-gray-500">Japanese</th>
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
              <td className="p-4 w-1/2 text-5xl font-sans font-thin border-l border-l-gray-500">
                {verb.display}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lesson;
