import type {MetaFunction} from "@remix-run/node";
import {useState} from "react";
import Button from "~/components/ShiningButton";
import MeaningCard from "~/components/MeaningCard";
import {getData, LessonType, lessonOptions} from "~/data/vocabulary/getData";
import PageHeader from "~/components/PageHeader";

export const meta: MetaFunction = () => {
  return [
    {title: "日本語"},
    {name: "description", content: "This website is a tutorial for JLPT N5."},
  ];
};

type ModeType = "Normal" | "Invert" | "Dual";

export default function Vocabulary() {
  const modes: ModeType[] = ["Normal", "Invert", "Dual"];
  const [mode, setMode] = useState<ModeType>("Normal");
  const [kanjiOn, setKanjiOn] = useState(false);
  const [activeLesson, setActiveLesson] = useState<LessonType>("L01");

  const data = getData(activeLesson);

  return (
    <div className="p-4">
      <PageHeader menuOn={false} label="Vocabulary" />
      <div className="fixed left-0 top-20 flex w-full flex-col gap-4 border-b-2 border-b-gray-300 p-4 text-lg backdrop-blur-md dark:border-b-slate-700">
        <div className="flex items-center gap-4">
          <div>Mode:</div>
          {modes.map((m) => (
            <Button
              size="x-small"
              label={m}
              onClick={() => setMode(m)}
              isActive={mode === m}
              key={m}
            />
          ))}
          <Button
            size="x-small"
            label="Kanji"
            onClick={() => setKanjiOn((p) => !p)}
            variant={kanjiOn ? "standard" : "danger"}
          />
        </div>
        <div className="flex items-center gap-4">
          <div>Lesson:</div>
          <select
            className="p-2 outline-none"
            value={activeLesson}
            onChange={(e) => setActiveLesson(e.target.value as LessonType)}
          >
            {lessonOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-2 h-24"></div>

      <div className="flex flex-col border border-b-0 border-blue-500/50">
        {data.map((w, i) => (
          <MeaningCard
            key={i + w.word + mode}
            word={w.word}
            meaning={w.meaning}
            kanji={w.kanji}
            kanjiOn={kanjiOn}
            mode={mode}
          />
        ))}
      </div>
    </div>
  );
}
