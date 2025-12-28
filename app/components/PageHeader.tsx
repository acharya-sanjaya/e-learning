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
  goBack?: boolean;
  menuOn?: boolean;
}

const PageHeader = ({
  goBack = true,
  menuOn = true,
  iconName = "arrowLeft",
  label,
  labelClassName,
}: PageHeaderProps) => {
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
      <div className="fixed inset-0 flex h-20 w-full items-center justify-center border-b-2 border-b-gray-300 backdrop-blur-md dark:border-b-slate-700">
        {goBack && (
          <Icon
            onClick={() => {
              navigate(-1);
            }}
            iconName={iconName}
            className="absolute left-4 size-8 active:stroke-blue-500"
          />
        )}
        <div
          className={cn(
            "mx-20 line-clamp-1 select-none text-center text-3xl font-bold",
            labelClassName,
          )}
        >
          {label}
        </div>
        {menuOn && (
          <Icon
            onClick={() => {
              setShowMenu(true);
            }}
            iconName="hamburger"
            className="absolute right-4 size-10 rounded-lg border-2 border-slate-800 p-1.5 active:bg-blue-500 dark:border-gray-200"
          />
        )}
      </div>
      <div
        className={cn(
          "fixed right-0 top-0 z-10 flex h-screen w-screen flex-col items-center gap-2 p-4 backdrop-blur-md transition-transform duration-500 md:w-[400px]",
          showMenu ? "translate-x-0" : "translate-x-full",
        )}
      >
        <Icon
          iconName="close"
          className="ml-auto size-10 backdrop:block"
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
          className="w-full flex-1"
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
    <div className="relative my-2 w-full">
      <div
        className="mb-2 flex items-center justify-between rounded-md bg-white/10 px-4 py-2"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key in ["Enter", " "] && setDropFonts((x) => !x)}
        onClick={() => {
          setDropFonts((x) => !x);
        }}
      >
        <div className="select-none text-3xl">Fonts</div>
        <div>
          <Icon
            iconName="chevronDown"
            thickness={2}
            className={cn("transition-transform duration-300", dropFonts ? "-rotate-180" : "")}
          />
        </div>
      </div>
      <div className="absolute h-fit w-full overflow-hidden">
        <div
          className={cn(
            "flex flex-col gap-2 transition-transform duration-300",
            dropFonts ? "translate-y-0" : "-translate-y-full",
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
