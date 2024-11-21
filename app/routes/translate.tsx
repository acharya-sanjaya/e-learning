import {useEffect, useState} from "react";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";

export default function Translate() {
  const [mode, setMode] = useState(true);
  // true for hiragana, false for katakana
  const [textEn, setTextEn] = useState("");
  const [textJp, setTextJp] = useState("");
  const kanaMapper = mode ? hiraganaMapper : katakanaMapper;

  useEffect(() => {
    const handleTranslation = (latestText: string) => {
      const words = latestText.split(" ");
      const translatedWords = words.map((word) => kanaMapper[word] ?? word);
      setTextJp(translatedWords.join(""));
    };

    handleTranslation(textEn);
  }, [textEn, kanaMapper]);

  return (
    <div className="flex flex-col mt-10 gap-2 p-4 m-auto w-full max-w-[400px]">
      <select
        className="p-2 text-xl rounded-md focus:border focus:border-blue-500"
        name="mode"
        id="kana-mode"
        onChange={(e) => setMode(e.target.value === "hiragana")}
      >
        <option className="p-2" value="hiragana">
          Hiragana
        </option>
        <option className="p-2" value="katakana">
          Katakana
        </option>
      </select>
      <div className="text-2xl">Enter english text</div>
      <input
        type="text"
        className="p-4 text-xl rounded-xl outline-none focus:border focus:border-blue-500"
        value={textEn}
        onChange={(e) => setTextEn(e.target.value)}
      />
      <div className="mt-10 text-2xl">Translated text</div>
      <textarea
        name="text"
        id="text"
        cols={30}
        rows={8}
        value={textJp}
        className="p-4 text-5xl rounded-xl font-sans outline-none focus:border focus:border-blue-500"
      ></textarea>
    </div>
  );
}
