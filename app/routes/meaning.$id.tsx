import {LoaderFunction} from "@remix-run/node";
import {json, MetaFunction, useLoaderData} from "@remix-run/react";
import FlipCard from "~/components/FlipCard";
import PageHeader from "~/components/PageHeader";
import usePreference from "~/hooks/usePreference";
import {cn} from "~/lib/utils";

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

    return json({words, id: Number(id)});
  } catch (e) {
    throw new Response("Lesson not found", {status: 404});
  }
};

export default function Meaning() {
  const {words, id} = useLoaderData<{words: WordType[]; id: number}>();
  const {isNepali, romajiStatus, jpFont, showKanji} = usePreference();

  return (
    <div className="p-4">
      <PageHeader iconName="close" label={`Lesson ${id}`} />
      <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
        {words.map((word, index) => (
          <FlipCard
            key={index}
            front={
              <>
                {showKanji ? (
                  <div className={cn("text-center text-2xl", jpFont)}>{word.kanji}</div>
                ) : (
                  <div className={cn("text-center", jpFont, romajiStatus ? "text-lg" : "text-2xl")}>
                    {word.jp}
                  </div>
                )}
                {romajiStatus && !showKanji && <div className="text-center">{word.romaji}</div>}
              </>
            }
            back={
              <>
                {isNepali ? (
                  <div className="text-center text-xl">{word.np}</div>
                ) : (
                  <div className="text-center text-xl">{word.en}</div>
                )}
              </>
            }
          />
        ))}
      </div>
    </div>
  );
}
