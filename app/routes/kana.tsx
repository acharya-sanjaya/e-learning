import {useState} from "react";
import hiraganaMapper from "~/data/japanese/kana/hiragana";
import katakanaMapper from "~/data/japanese/kana/katakana";
import {
  kanaKeyboardKeys,
  tentenMaruKeyboardKeys,
  yoonKeyboardKeys,
  yoonTenTenMaruKeyboardKeys,
} from "~/data/japanese/kana/quizKeys";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";

import usePreference from "~/hooks/usePreference";
import {cn} from "~/lib/utils";

export default function Kana() {
  const [mode, setMode] = useState(false);
  const kanaMapper = mode ? katakanaMapper : hiraganaMapper;
  const {jpFont} = usePreference();

  return (
    <div className="flex flex-col w-full p-4">
      <PageHeader iconName="close" label="Kana" labelClassName="text-3xl" />
      <Select
        value={mode}
        handleChange={() => setMode((prev) => !prev)}
        labelOff="Hiragana"
        labelOn="Katakana"
        labelClassName={jpFont}
        className="mr-auto pb-4"
        switchSize={40}
        bgOff="bg-green-500"
        borderOff="border-green-500"
      />

      <Topic label="Basic Kana (Gojuon)" />
      <KanaTableWrapper>
        {kanaKeyboardKeys.map((row, i) => (
          <Row key={i} mapper={kanaMapper} row={row} bt={i !== 0} />
        ))}
      </KanaTableWrapper>

      <Topic label="Tenten (“) and Maru (˚) (Dakuon and Handakuon)" />
      <KanaTableWrapper>
        {tentenMaruKeyboardKeys.map((row, i) => (
          <Row key={i} mapper={kanaMapper} row={row} bt={i !== 0} />
        ))}
      </KanaTableWrapper>

      <Topic label="Small letters (Yoon)" />
      <KanaTableWrapper>
        {yoonKeyboardKeys.map((row, i) => (
          <Row key={i} mapper={kanaMapper} row={row} bt={i !== 0} />
        ))}
      </KanaTableWrapper>

      <Topic label="Tenten (“) and Maru (˚) (Dakuon and Handakuon) of Small letters" />
      <KanaTableWrapper>
        {yoonTenTenMaruKeyboardKeys.map((row, i) => (
          <Row key={i} mapper={kanaMapper} row={row} bt={i !== 0} />
        ))}
      </KanaTableWrapper>
    </div>
  );
}

const Topic = ({label}: {label: string}) => <div className="text-3xl font-bold my-1">{label}</div>;

interface RowProps {
  row: string[];
  mapper: Record<string, {jp: string; np: string}>;
  bt: boolean;
}

const Row = ({row, mapper, bt}: RowProps) => {
  const {jpFont, romajiStatus, isNepali} = usePreference();

  return (
    <div className={cn("flex", jpFont, bt && "border-t border-t-gray-300 dark:border-t-gray-700")}>
      {row.map((letter, i) => {
        return (
          <div
            key={letter}
            className={cn(
              "flex flex-col flex-1 items-center justify-center text-3xl p-2",
              jpFont,
              i > 0 && "border-l border-l-gray-300 dark:border-l-gray-700",
              letter !== "" && "hover:cursor-pointer hover:bg-blue-500 hover:text-white"
            )}
          >
            {romajiStatus && (isNepali ? <div>{mapper[letter]?.np}</div> : <div>{letter}</div>)}
            {mapper[letter]?.jp}
          </div>
        );
      })}
    </div>
  );
};

const KanaTableWrapper = ({children}: {children: React.ReactNode}) => (
  <div className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl mt-2 mb-20 overflow-hidden">
    {children}
  </div>
);
