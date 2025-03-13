import {useState} from "react";
import hiraganaMapper from "~/data/kana/hiragana";
import katakanaMapper from "~/data/kana/katakana";
import {
  kanaKeyboardKeys,
  tentenMaruKeyboardKeys,
  yoonKeyboardKeys,
  yoonTenTenMaruKeyboardKeys,
} from "~/data/kana/quizKeys";
import PageHeader from "~/components/PageHeader";
import Select from "~/components/Select";

import usePreference from "~/hooks/usePreference";
import {cn} from "~/lib/utils";

export default function Kana() {
  const [mode, setMode] = useState(false);
  const kanaMapper = mode ? katakanaMapper : hiraganaMapper;
  const {jpFont} = usePreference();

  return (
    <div className="flex w-full flex-col p-4">
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

      <Topic label="Tenten (“) and Maru (˚) of Small letters" />
      <KanaTableWrapper>
        {yoonTenTenMaruKeyboardKeys.map((row, i) => (
          <Row key={i} mapper={kanaMapper} row={row} bt={i !== 0} />
        ))}
      </KanaTableWrapper>
    </div>
  );
}

const Topic = ({label}: {label: string}) => <div className="my-1 text-3xl font-bold">{label}</div>;

interface RowProps {
  row: string[];
  mapper: Record<string, {jp: string; np: string}>;
  bt: boolean;
}

const Row = ({row, mapper, bt}: RowProps) => {
  const {jpFont, romajiStatus, isNepali} = usePreference();

  return (
    <div
      className={cn("flex", jpFont, bt && "border-t-2 border-t-gray-400 dark:border-t-slate-700")}
    >
      {row.map((letter, i) => {
        return (
          <div
            key={letter}
            className={cn(
              "flex flex-1 flex-col items-center justify-center p-2 text-3xl",
              jpFont,
              i > 0 && "border-l-2 border-l-gray-400 dark:border-l-slate-700",
              letter !== "" && "hover:cursor-pointer hover:bg-blue-500 hover:text-gray-300",
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
  <div className="mb-20 mt-2 flex flex-col overflow-hidden rounded-xl border-2 border-gray-400 dark:border-slate-700">
    {children}
  </div>
);
