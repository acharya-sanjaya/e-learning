import {useEffect, useState} from "react";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";

export default function Translate() {
  const [mode, setMode] = useState(false);
  const [textEn, setTextEn] = useState("");
  const [textJp, setTextJp] = useState("");
  const kanaMapper = mode ? katakanaMapper : hiraganaMapper;

  useEffect(() => {
    const handleTranslation = (latestText: string) => {
      const words = latestText.split(" ");
      const translatedWords = words.map((word) => {
        if (word.length > 1 && word[0] === word[1]) {
          const actualWord = word.slice(1);
          if (kanaMapper[actualWord]) {
            return kanaMapper["chu"] + kanaMapper[actualWord];
          } else {
            return word;
          }
        }

        return kanaMapper[word] ?? word;
      });
      setTextJp(translatedWords.join(""));
    };

    handleTranslation(textEn);
  }, [textEn, kanaMapper]);

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
        value={textJp}
        className="p-4 text-5xl rounded-xl font-sans outline-none border border-gray-300 dark:border-gray-600 focus:border-blue-500"
        onChange={(e) => e}
      ></textarea>
    </div>
  );
}
