import {useState} from "react";
import Select from "~/components/Select";
import {cn} from "~/lib/utils";

const data = [
  {
    jp: "こんにちは",
    en: "Hello",
    np: " ",
    Kanji: "こんにちは",
    romajiEn: "",
    romajiNp: "",
  },
];

data;

export default function Practice() {
  const [KRJ, setKRJ] = useState<1 | 2 | 3>(1);
  const [en, setEn] = useState(true);

  return (
    <div>
      <Menu KRJ={KRJ} setKRJ={setKRJ} en={en} setEn={setEn} />
    </div>
  );
}

interface MenuProps {
  KRJ: 1 | 2 | 3;
  setKRJ: React.Dispatch<React.SetStateAction<1 | 2 | 3>>;
  en: boolean;
  setEn: React.Dispatch<React.SetStateAction<boolean>>;
}

const Menu = ({KRJ, setKRJ, en, setEn}: MenuProps) => (
  <>
    <div className="flex gap-4">
      <Checkbox label="Kana" checked={KRJ === 1} onChange={() => setKRJ(1)} />
      <Checkbox label="Kanji" checked={KRJ === 2} onChange={() => setKRJ(2)} />
      <Checkbox label="Romaji" checked={KRJ === 3} onChange={() => setKRJ(3)} />
    </div>
    {KRJ === 3 && (
      <Select
        className=""
        switchSize={40}
        labelClassName="text-2xl font-normal"
        labelOn="English"
        labelOff="नेपाली"
        value={en}
        handleChange={() => setEn(!en)}
        bgOff="bg-yellow-500"
        borderOff="border-yellow-500"
      />
    )}
  </>
);

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

const Checkbox = ({label, checked, onChange}: CheckboxProps) => (
  <div className="flex items-center text-2xl">
    <button
      className={cn(
        "flex size-6 items-center justify-center rounded-[20%] border-2",
        checked && "border-blue-500",
      )}
      onClick={onChange}
    >
      <div
        className={cn(
          "size-4 scale-0 rounded-[20%] bg-blue-500",
          checked && "scale-100 transition-transform",
        )}
      ></div>
    </button>
    <button className="pl-2" onClick={onChange}>
      {label}
    </button>
  </div>
);
