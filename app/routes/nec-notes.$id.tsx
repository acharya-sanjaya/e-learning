import {LoaderFunction} from "@remix-run/node";
import {json, MetaFunction, useLoaderData} from "@remix-run/react";
import PageHeader from "~/components/PageHeader";
import {ChapterType, NoteType} from "~/data/nec/notes/01";
import {cn} from "~/lib/utils";

export const meta: MetaFunction = () => {
  return [
    {title: "NEC Summary"},
    {name: "description", content: "This page contains the summarized notes for NEC"},
  ];
};

export const loader: LoaderFunction = async ({params}) => {
  const {id} = params;
  if (!id) throw new Error("Lesson ID is required.");

  try {
    const notes = (await import(`../data/nec/notes/${id}.ts`)).default;

    return json({notes, id: Number(id)});
  } catch (e) {
    throw new Response("Lesson not found", {status: 404});
  }
};

export default function Note() {
  const {notes, id} = useLoaderData<{notes: NoteType; id: number}>();

  return (
    <div className="p-4">
      <PageHeader iconName="close" label={`Lesson ${id}`} menuOn={false} />
      {notes.chapters.map((chapter, index) => (
        <Chapter key={index} cNo={index + 1} topic={chapter.topic} contents={chapter.contents} />
      ))}
    </div>
  );
}

const Separator = ({height}: {height: string}) => {
  return (
    <div
      className={cn("mt-2 mb-8 w-full bg-gray-300 dark:bg-slate-700 rounded-full", height)}
    ></div>
  );
};

interface LabeledChapterType extends ChapterType {
  cNo: number;
}
const Chapter = ({cNo, topic, contents}: LabeledChapterType) => (
  <>
    <div className="flex flex-col md:flex-row items-center gap-0 md:gap-3 text-2xl font-bold mb-4 bg-black/15 dark:bg-white/15 rounded-xl p-4 select-none">
      <div className="flex gap-2">
        <div className="block md:hidden">Chapter</div>
        <div className="flex">
          {cNo}
          <div className="hidden md:block"> :</div>
        </div>
      </div>
      <div className="text-center md:text-left">{topic}</div>
    </div>
    {contents.map((content, index) => (
      <ChapterContent key={index} topic={content.topic} description={content.description} />
    ))}
    <Separator height="h-0.5 mb-20" />
  </>
);

export const ChapterContent = ({topic, description}: {topic: string; description: string[]}) => {
  if (topic === "INTENDED_GAP")
    return (
      <div className="select-none h-28 border-t-2 border-t-gray-300 dark:border-t-slate-700"></div>
    );
  if (description.length === 0) return null;

  return (
    <div className="mb-4">
      <div className="font-bold text-2xl">{topic}</div>
      <ul className="list-inside list-disc ml-2">
        <Description description={description} />
      </ul>
    </div>
  );
};

export const Description = ({description}: {description: string[]}) =>
  description.map((desc, index) => {
    if (desc === "") return <div key={index} className="h-5"></div>;
    return (
      <li
        key={index}
        className={cn(
          "text-sm",
          desc[0] === "-" && "list-none ml-4",
          desc[0] === " " && "list-none",
          desc.endsWith(":") && "text-lg font-bold"
        )}
      >
        {desc}
      </li>
    );
  });
