import {useState} from "react";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";

export default function Table() {
  const [mode, setMode] = useState(true);
  const kanaMapper = mode ? hiraganaMapper : katakanaMapper;

  return (
    <div className="flex flex-col w-full p-4">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <input
            className="size-5 hover:cursor-pointer"
            onChange={(e) => e.target.checked && setMode(true)}
            type="radio"
            name="mode"
            id="hiragana"
            value="hiragana"
            checked={mode}
          />
          <label className="text-xl hover:cursor-pointer" htmlFor="hiragana">
            Hiragana
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            className="size-5 hover:cursor-pointer"
            onChange={(e) => e.target.checked && setMode(false)}
            type="radio"
            name="mode"
            id="katakana"
            value="katakana"
            checked={!mode}
          />
          <label className="text-xl hover:cursor-pointer" htmlFor="katakana">
            Katakana
          </label>
        </div>
      </div>
      <Br />

      <Topic label="Basic Kana (Gojuon)" />
      <Row mapper={kanaMapper} row={["a", "i", "u", "e", "o"]} />
      <Row mapper={kanaMapper} row={["ka", "ki", "ku", "ke", "ko"]} />
      <Row mapper={kanaMapper} row={["sa", "shi", "su", "se", "so"]} />
      <Row mapper={kanaMapper} row={["ta", "chi", "tsu", "te", "to"]} />
      <Row mapper={kanaMapper} row={["na", "ni", "nu", "ne", "no"]} />
      <Row mapper={kanaMapper} row={["ha", "hi", "fu", "he", "ho"]} />
      <Row mapper={kanaMapper} row={["ma", "mi", "mu", "me", "mo"]} />
      <Row mapper={kanaMapper} id="y" row={["ya", "", "yu", "", "yo"]} />
      <Row mapper={kanaMapper} row={["ra", "ri", "ru", "re", "ro"]} />
      <Row mapper={kanaMapper} id="w" row={["wa", "wo", "n"]} />
      <Br />

      <Topic label="Tenten (“) and Maru (˚) (Dakuon and Handakuon)" />
      <Row mapper={kanaMapper} row={["ga", "gi", "gu", "ge", "go"]} />
      <Row mapper={kanaMapper} row={["ja", "ji", "ju", "je", "jo"]} />
      <Row mapper={kanaMapper} row={["da", "zi", "zu", "de", "do"]} />
      <Row mapper={kanaMapper} row={["ba", "bi", "bu", "be", "bo"]} />
      <Row mapper={kanaMapper} row={["pa", "pi", "pu", "pe", "po"]} />
      <Br />

      <Topic label="Small letters (Yoon)" />
      <Row mapper={kanaMapper} row={["kya", "kyu", "kyo"]} />
      <Row mapper={kanaMapper} row={["sya", "syu", "syo"]} />
      <Row mapper={kanaMapper} row={["tya", "tyu", "tyo"]} />
      <Row mapper={kanaMapper} row={["nya", "nyu", "nyo"]} />
      <Row mapper={kanaMapper} row={["hya", "hyu", "hyo"]} />
      <Row mapper={kanaMapper} row={["mya", "myu", "myo"]} />
      <Row mapper={kanaMapper} row={["rya", "ryu", "ryo"]} />
      <Br />
    </div>
  );
}

const Br = () => (
  <div className="mt-2 mb-4 w-full h-0.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
);

const Topic = ({label}: {label: string}) => <div className="text-3xl font-bold my-1">{label}</div>;

const Row = ({row, id, mapper}: {row: string[]; id?: string; mapper: Record<string, string>}) => {
  return (
    <div className="flex justify-between">
      {row.map((letter, i) => {
        if (letter === "") return <div key={(id as string) + i}></div>;
        return (
          <div
            key={letter}
            className="text-3xl font-sans hover:cursor-pointer hover:bg-blue-500 p-2"
          >
            {mapper[letter]}
          </div>
        );
      })}
    </div>
  );
};
