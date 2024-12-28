import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";
import {chapters} from "~/data/nec/contentList";

export default function QuizNec() {
  return (
    <div className="p-4">
      <PageHeader label="NEC Quiz" menuOn={false} />
      <div className="flex flex-col gap-4">
        {chapters.map((chapter, index) => (
          <Card
            key={index}
            href={`../necQuizSubChapters/${index + 1}`}
            label={chapter}
            heightTw="p-10 h-fit"
          />
        ))}
      </div>
    </div>
  );
}
