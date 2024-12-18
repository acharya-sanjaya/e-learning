import {useState} from "react";
import Button from "~/components/Button";
import FlipCard from "~/components/FlipCard";
import Select from "~/components/Select";
import words from "~/data/japanese/dictionary/Lesson01";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

type jpFontType = "font-sans" | "font-serif";

const Test = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showRomaji, setShowRomaji] = useState(false);
  const [showNepali, setShowNepali] = useState(true);
  const [showKanji, setShowKanji] = useState(false);
  const [jpFont, setJpFont] = useState<jpFontType>("font-serif");

  const toggleNepali = () => setShowNepali((x) => !x);
  const toggleKanji = () => setShowKanji((x) => !x);
  const toggleRomaji = () => setShowRomaji((x) => !x);

  return (
    <div className="p-4 bg-gray-100 dark:bg-slate-900">
      <div className="fixed top-2 right-2 flex justify-end z-10 backdrop-blur-3xl border border-gray-400 rounded-lg">
        <Icon
          iconName="hamburger"
          thickness={2}
          onClick={() => setShowMenu(true)}
          className="p-2 size-12"
        />
      </div>
      <div
        className={cn(
          "fixed top-0 right-0 p-4 flex flex-col items-center gap-2 w-screen md:w-[400px] h-screen z-10 backdrop-blur-md transition-transform duration-500",
          showMenu ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Icon
          iconName="close"
          className="size-10 ml-auto backdrop:block"
          thickness={2}
          onClick={() => {
            setShowMenu(false);
          }}
        />
        <Select
          switchSize={50}
          handleChange={toggleRomaji}
          labelOn="Romaji"
          labelOff="Romaji"
          value={showRomaji}
          labelClassName="text-2xl"
          className="ml-auto"
        />
        <Button
          variant={showNepali ? "standard" : "danger"}
          onClick={toggleNepali}
          label="Nepali"
          className="w-full"
        />
        <Button
          variant={showKanji ? "standard" : "danger"}
          onClick={toggleKanji}
          label="Kanji"
          className="w-full"
        />
        <FontDropdown activeFont={jpFont} handleChangeFont={setJpFont} />
        <div
          className="flex-1 w-full"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e}
          onClick={() => {
            setShowMenu(false);
          }}
        ></div>
      </div>

      <div className="flex justify-evenly md:justify-between flex-wrap gap-4">
        {words.map((word, index) => (
          <FlipCard
            key={index}
            front={
              <>
                {showKanji ? (
                  <div className={cn("text-center text-2xl", jpFont)}>{word.kanji}</div>
                ) : (
                  <div className={cn("text-center", jpFont, showRomaji ? "text-lg" : "text-2xl")}>
                    {word.jp}
                  </div>
                )}
                {showRomaji && !showKanji && <div className="text-center">{word.romaji}</div>}
              </>
            }
            back={
              <>
                {showNepali ? (
                  <div className="text-center text-xl">{word.np}</div>
                ) : (
                  <div className="text-center text-xl">{word.en}</div>
                )}
              </>
            }
          />
        ))}
      </div>
    </div>
  );
};

export const FontDropdown = ({
  activeFont,
  handleChangeFont,
}: {
  activeFont: jpFontType;
  handleChangeFont: (x: jpFontType) => void;
}) => {
  const [dropFonts, setDropFonts] = useState(false);

  return (
    <div className="relative w-full my-2">
      <div
        className="flex justify-between items-center py-2"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key in ["Enter", " "] && setDropFonts((x) => !x)}
        onClick={() => {
          setDropFonts((x) => !x);
        }}
      >
        <div className="text-3xl select-none">Fonts</div>
        <Icon
          iconName="chevronDown"
          thickness={2}
          className={cn("transition-transform duration-300", dropFonts ? "-rotate-180" : "")}
        />
      </div>
      <div className="absolute w-full h-fit overflow-hidden">
        <div
          className={cn(
            "flex flex-col gap-2 transition-transform duration-300",
            dropFonts ? "translate-y-0" : "-translate-y-full"
          )}
        >
          <Button
            label="Sans"
            variant="standard"
            isActive={activeFont === "font-sans"}
            onClick={() => handleChangeFont("font-sans")}
          />
          <Button
            label="Serif"
            variant="standard"
            isActive={activeFont === "font-serif"}
            onClick={() => handleChangeFont("font-serif")}
          />
        </div>
      </div>
    </div>
  );
};

export default Test;
