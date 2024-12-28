import {json, LoaderFunction} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";

import {subChapters} from "~/data/nec/contentList";

export const loader: LoaderFunction = async ({params}) => {
  const {id} = params;
  if (!id) throw new Error("Chapter ID is required.");

  try {
    return json({subChapterList: subChapters[Number(id) - 1], chapter: Number(id)});
  } catch (e) {
    throw new Response("Chapters not found", {status: 404});
  }
};

export default function SubChapters() {
  const {subChapterList, chapter: chapterNumber} = useLoaderData<{
    subChapterList: string[];
    chapter: number;
  }>();

  return (
    <div className="p-4">
      <PageHeader label={`Chapter ${chapterNumber}`} menuOn={false} />
      <div className="flex flex-col gap-4">
        {subChapterList.map((chapter, index) => (
          <Card
            key={index}
            href={`../multipleChoice/nec-${chapterNumber}-${index + 1}`}
            label={chapter}
            heightTw="p-10 h-fit"
          />
        ))}
      </div>
    </div>
  );
}
