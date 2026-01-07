import {useEffect, useState} from "react";
import Button from "~/components/ShiningButton";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

interface RateBlockProps {
  rate: string;
  onSave: (r: string) => void;
}

const RateBlock = ({rate, onSave}: RateBlockProps) => {
  const [newRate, setNewRate] = useState(rate);

  // Sync with prop whenever it changes
  useEffect(() => {
    setNewRate(rate);
  }, [rate]);

  const numberForm = Number(newRate);
  const isInvalid = rate === newRate || isNaN(numberForm) || numberForm <= 0;

  return (
    <div className="text-xl">
      <div>Rate per hour</div>
      <div className="flex items-center gap-2">
        <input
          className={cn(
            "w-full rounded-md border-2 border-gray-300 bg-black/5 p-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-white/10",
          )}
          type="text"
          value={newRate}
          onChange={(e) => setNewRate(e.target.value)}
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
          onClick={() => onSave(newRate)}
        />
      </div>
    </div>
  );
};

export default RateBlock;
