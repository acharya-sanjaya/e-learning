import {useState} from "react";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";
import usePreference from "~/hooks/usePreference";
import {cn} from "~/lib/utils";

export default function Translate() {
  const [mode, setMode] = useState(false);
  const [textEn, setTextEn] = useState("");
  const kanaMapper = mode ? katakanaMapper : hiraganaMapper;
  const {jpFont} = usePreference();

  const translateText = (input: string) => {
    const vowels = new Set(["a", "e", "i", "o", "u", "."]);
    const noSpaceText = input
      .replace(/[\\-]+/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
    let result = "";
    let romajiChunk = "";

    for (let i = 0; i < noSpaceText.length; i++) {
      romajiChunk += noSpaceText[i];

      if (vowels.has(noSpaceText[i]) || i === noSpaceText.length - 1) {
        if (romajiChunk.endsWith(".")) {
          romajiChunk = romajiChunk.slice(0, -1);
        }
        if (romajiChunk.length > 1 && romajiChunk[0] === romajiChunk[1]) {
          const actualChunk = romajiChunk.slice(1);
          result += kanaMapper[actualChunk]?.jp
            ? kanaMapper["s_tsu"]?.jp + kanaMapper[actualChunk]?.jp
            : actualChunk[0] + actualChunk;
        } else {
          result += kanaMapper[romajiChunk]?.jp ?? romajiChunk;
        }
        romajiChunk = "";
      }
    }

    return result;
  };

  const translatedText = translateText(textEn);
  return (
    <div className="flex flex-col gap-2 p-4 m-auto w-full max-w-[400px]">
      <PageHeader iconName="close" label="Translate" labelClassName="text-3xl" />
      <Select
        value={mode}
        handleChange={() => setMode((prev) => !prev)}
        labelOff="ひらがな"
        labelOn="かたかな"
        labelClassName={jpFont}
        className="mr-auto"
        switchSize={50}
        bgOff="bg-green-500"
        borderOff="border-green-500"
      />

      <div className="text-2xl">Enter Romaji</div>
      <input
        type="text"
        className="p-4 text-xl rounded-xl outline-none border border-gray-300 dark:border-slate-700 focus:border-blue-500 bg-gray-200 dark:bg-slate-800"
        value={textEn}
        onChange={(e) => setTextEn(e.target.value)}
      />
      <div className="mt-10 text-2xl">Translated text</div>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={5}
        readOnly
        value={translatedText}
        className={cn(
          "p-4 text-5xl rounded-xl outline-none border border-gray-300 dark:border-slate-700 focus:border-blue-500 bg-gray-200 dark:bg-slate-800",
          jpFont
        )}
      ></textarea>
    </div>
  );
}
