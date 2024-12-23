import {LoaderFunction} from "@remix-run/node";
import {json, MetaFunction, useLoaderData} from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    {title: "Word Meanings"},
    {name: "description", content: "This contains the word meaning for respective lesson"},
  ];
};

interface WordType {
  en: string;
  np: string;
  jp: string;
  kanji: string;
  romaji: string;
}

export const loader: LoaderFunction = async ({params}) => {
  const {id} = params;
  if (!id) throw new Error("Lesson ID is required.");

  try {
    const words = (await import(`../data/japanese/dictionary/Lesson${id}.ts`)).default;

    return json({words});
  } catch (e) {
    throw new Response("Lesson not found", {status: 404});
  }
};

export default function Meaning() {
  const {words} = useLoaderData<{words: WordType[]}>();
  return words.map((word, index) => (
    <div
      className="flex flex-col gap-2 mx-4 my-12 p-4 border border-white w-fit"
      key={"meaning" + index}
    >
      <div>{word.en}</div>
      <div>{word.np}</div>
      <div>{word.jp}</div>
      <div>{word.romaji}</div>
      <div>{word.kanji}</div>
    </div>
  ));
}
