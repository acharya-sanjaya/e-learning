import {useState} from "react";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";

export default function Kana() {
  const [mode, setMode] = useState(false);
  const kanaMapper = mode ? katakanaMapper : hiraganaMapper;

  return (
    <div className="flex flex-col w-full p-4">
      <PageHeader label="Kana" labelClassName="text-3xl" />
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
      <Hr />

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
      <Hr />

      <Topic label="Tenten (“) and Maru (˚) (Dakuon and Handakuon)" />
      <Row mapper={kanaMapper} row={["ga", "gi", "gu", "ge", "go"]} />
      <Row mapper={kanaMapper} row={["ja", "ji", "ju", "je", "jo"]} />
      <Row mapper={kanaMapper} row={["da", "zi", "zu", "de", "do"]} />
      <Row mapper={kanaMapper} row={["ba", "bi", "bu", "be", "bo"]} />
      <Row mapper={kanaMapper} row={["pa", "pi", "pu", "pe", "po"]} />
      <Hr />

      <Topic label="Small letters (Yoon)" />
      <Row mapper={kanaMapper} row={["kya", "kyu", "kyo"]} />
      <Row mapper={kanaMapper} row={["sya", "syu", "syo"]} />
      <Row mapper={kanaMapper} row={["tya", "tyu", "tyo"]} />
      <Row mapper={kanaMapper} row={["nya", "nyu", "nyo"]} />
      <Row mapper={kanaMapper} row={["hya", "hyu", "hyo"]} />
      <Row mapper={kanaMapper} row={["mya", "myu", "myo"]} />
      <Row mapper={kanaMapper} row={["rya", "ryu", "ryo"]} />
      <Hr />

      <Topic label="Tenten (“) and Maru (˚) (Dakuon and Handakuon) of Small letters" />
      <Row mapper={kanaMapper} row={["gya", "gyu", "gyo"]} />
      <Row mapper={kanaMapper} row={["jya", "jyu", "jyo"]} />
      <Row mapper={kanaMapper} row={["bya", "byu", "byo"]} />
      <Row mapper={kanaMapper} row={["pya", "pyu", "pyo"]} />
      <Hr />
    </div>
  );
}

const Hr = () => (
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
            className="text-3xl font-sans hover:cursor-pointer hover:bg-gray-500 p-2 active:scale-90"
          >
            {mapper[letter]}
          </div>
        );
      })}
    </div>
  );
};
