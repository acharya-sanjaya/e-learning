import {LoaderFunction} from "@remix-run/node";
import {json, MetaFunction, useLoaderData} from "@remix-run/react";
import {useState} from "react";
import PageHeader from "~/components/PageHeader";
import quizMapper, {ValidPath} from "~/data/quizMapper";
import {cn} from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    {title: "Word Meanings"},
    {name: "description", content: "This contains the word meaning for respective lesson"},
  ];
};

interface QuestionType {
  qn: string;
  a: string;
  b: string;
  c: string;
  d: string;
  answer: "a" | "b" | "c" | "d";
}

export const loader: LoaderFunction = async ({params}) => {
  const {path} = params;
  if (!path) throw new Error("Question path is required.");

  try {
    if (!Object.hasOwn(quizMapper, path as ValidPath)) {
      throw new Error("Invalid path");
    }

    const module = await quizMapper[path as ValidPath]();
    const data = module.default;
    return json({data});
  } catch (e) {
    throw new Response("Questions not found", {status: 404});
  }
};

export default function MultipleChoice() {
  const {data} = useLoaderData<{data: {questions: QuestionType[]; pageTitle: string}}>();
  const {questions, pageTitle} = data;

  return (
    <div className="p-4">
      <PageHeader iconName="close" label={pageTitle} menuOn={false} />
      <div className="flex flex-col gap-8">
        {questions.map((question, index) => (
          <QuizQuestion key={index} question={question} />
        ))}
      </div>
    </div>
  );
}

type AnswerType = "a" | "b" | "c" | "d";

export const QuizQuestion = ({question}: {question: QuestionType}) => {
  const {qn, a, b, c, d, answer} = question;
  const [choice, setChoice] = useState<null | AnswerType>(null);

  const makeChoice = (id: AnswerType) => {
    if (!choice) setChoice(id);
  };

  return (
    <div className="px-4 py-8 flex flex-col gap-2 border-2 border-gray-300 dark:border-slate-700 rounded-xl text-2xl font-bold">
      <div className="text-center mb-2">{qn}</div>
      <Option
        choice={choice}
        id="a"
        answer={answer}
        handleClick={() => makeChoice("a")}
        value={a}
      />
      <Option
        choice={choice}
        id="b"
        answer={answer}
        handleClick={() => makeChoice("b")}
        value={b}
      />
      <Option
        choice={choice}
        id="c"
        answer={answer}
        handleClick={() => makeChoice("c")}
        value={c}
      />
      <Option
        choice={choice}
        id="d"
        answer={answer}
        handleClick={() => makeChoice("d")}
        value={d}
      />
    </div>
  );
};

interface OptionProps {
  id: AnswerType;
  choice: null | AnswerType;
  answer: AnswerType;
  handleClick: () => void;
  value: string;
}

const Option = ({id, choice, answer, handleClick, value}: OptionProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key in ["Enter", " "] && handleClick()}
      onClick={choice ? undefined : handleClick}
      className={cn(
        "font-bold text-sm text-center sm:text-left px-4 py-2 bg-black/10 dark:bg-white/10 rounded-lg",
        choice && "cursor-not-allowed",
        id === choice && id !== answer && "bg-red-500 dark:bg-red-600 text-white",
        choice && id === answer && "bg-green-500 dark:bg-green-600"
      )}
    >
      {value}
    </div>
  );
};
