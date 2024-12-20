import {useState} from "react";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";

export default function Translate() {
  const [mode, setMode] = useState(false);
  const [textEn, setTextEn] = useState("");
  const kanaMapper = mode ? katakanaMapper : hiraganaMapper;

  const translateText = (input: string) => {
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    const noSpaceText = input
      .replace(/[\\-]+/g, "")
      .replace(/\s+/g, "")
      .toLowerCase();
    let result = "";
    let romajiChunk = "";

    for (let i = 0; i < noSpaceText.length; i++) {
      romajiChunk += noSpaceText[i];

      if (vowels.has(noSpaceText[i]) || i === noSpaceText.length - 1) {
        if (romajiChunk.length > 1 && romajiChunk[0] === romajiChunk[1]) {
          const actualChunk = romajiChunk.slice(1);
          result += kanaMapper[actualChunk]
            ? kanaMapper["chu"] + kanaMapper[actualChunk]
            : actualChunk[0] + actualChunk;
        } else {
          result += kanaMapper[romajiChunk] ?? romajiChunk;
        }
        romajiChunk = "";
      }
    }

    return result;
  };

  const translatedText = translateText(textEn);

  return (
    <div className="flex flex-col gap-2 p-4 m-auto w-full max-w-[400px]">
      <PageHeader label="Translate" labelClassName="text-3xl" />
      <Select
        value={mode}
        handleChange={() => setMode((prev) => !prev)}
        labelOff="ひらがな"
        labelOn="かたかな"
        labelClassName="text-5xl font-bold"
        className="mr-auto"
        switchSize={50}
        bgOff="bg-green-500"
        borderOff="border-green-500"
      />

      <div className="text-2xl">Enter english text</div>
      <input
        type="text"
        className="p-4 text-xl rounded-xl outline-none border border-gray-300 dark:border-gray-600 focus:border-blue-500"
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
        className="p-4 text-5xl rounded-xl font-sans outline-none border border-gray-300 dark:border-gray-600 focus:border-blue-500"
      ></textarea>
    </div>
  );
}
