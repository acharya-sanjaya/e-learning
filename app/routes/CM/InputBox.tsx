import {useEffect, useState} from "react";
import Button from "~/components/ShiningButton";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

interface InputBoxProps {
  label: string;
  value: string;
  onSave: (v: string) => void;
  separate?: boolean;
}

const InputBox = ({label, value, onSave, separate = false}: InputBoxProps) => {
  const [newValue, setNewValue] = useState(value);

  // Sync with prop whenever it changes
  useEffect(() => {
    setNewValue(value);
  }, [value]);

  const numberForm = Number(newValue);
  const isInvalid = value === newValue || isNaN(numberForm) || numberForm <= 0;

  return (
    <div className={cn("text-xl", separate && "mt-4")}>
      <div>{label}</div>
      <div className="flex items-center gap-2">
        <input
          className={cn(
            "w-full rounded-md border-2 border-gray-300 bg-black/5 p-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-white/10",
          )}
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
          inputMode="decimal"
        />
        <Button
          className="p-1"
          disabled={isInvalid}
          label={
            <Icon
              className={cn("size-9 stroke-white", isInvalid && "cursor-not-allowed")}
              iconName="save"
            />
          }
          onClick={() => onSave(newValue)}
        />
      </div>
    </div>
  );
};

export default InputBox;
