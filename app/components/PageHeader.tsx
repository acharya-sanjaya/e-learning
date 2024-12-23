import {useNavigate} from "@remix-run/react";
import {useState} from "react";
import Icon, {IconNameType} from "~/Icons";
import {cn} from "~/lib/utils";
import Button from "./Button";
import Select from "./Select";
import usePreference from "~/hooks/usePreference";
import {JpFontType} from "~/context/PreferenceContext";

interface PageHeaderProps {
  label: string;
  labelClassName?: string;
  iconName?: IconNameType;
}

const PageHeader = ({iconName = "arrowLeft", label, labelClassName}: PageHeaderProps) => {
  const navigate = useNavigate();
  const {
    romajiStatus,
    isNepali,
    showKanji,
    jpFont,
    toggleRomajiStatus,
    toggleIsNepali,
    toggleShowKanji,
    setJpFont,
  } = usePreference();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="relative z-[999]">
      <div className="fixed inset-0 w-screen flex justify-center items-center h-20 backdrop-blur-md">
        <Icon
          onClick={() => {
            navigate(-1);
          }}
          iconName={iconName}
          className="size-8 absolute left-4 active:stroke-blue-500"
        />
        <div className={cn("text-3xl font-bold select-none", labelClassName)}>{label}</div>
        <Icon
          onClick={() => {
            setShowMenu(true);
          }}
          iconName="hamburger"
          className="size-10 absolute right-8 border-2 border-gray-300 p-1.5 rounded-lg active:bg-blue-500"
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
          handleChange={toggleRomajiStatus}
          labelOn="Romaji"
          labelOff="Romaji"
          value={romajiStatus}
          labelClassName="text-2xl"
          className="ml-auto"
        />
        <Button
          variant={isNepali ? "standard" : "danger"}
          onClick={toggleIsNepali}
          label="Nepali"
          className="w-full"
        />
        <Button
          variant={showKanji ? "standard" : "danger"}
          onClick={toggleShowKanji}
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

      <div className="h-20">
        {/* This div is to prevent the header from being covered by the content */}
      </div>
    </div>
  );
};

const FontDropdown = ({
  activeFont,
  handleChangeFont,
}: {
  activeFont: JpFontType;
  handleChangeFont: (x: JpFontType) => void;
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

export default PageHeader;
