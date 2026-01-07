import {useEffect, useState} from "react";
import Button from "~/components/ShiningButton";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

interface TargetBlockProps {
  label: string;
  target: string;
  onSave: (t1: string) => void;
}

const TargetBlock = ({label, target, onSave}: TargetBlockProps) => {
  const [newTarget, setNewTarget] = useState(target);

  useEffect(() => {
    setNewTarget(target);
  }, [target]);

  const numberForm = Number(newTarget);
  const isInvalid = target === newTarget || isNaN(numberForm) || numberForm <= 0;

  return (
    <div className="text-xl">
      <div>{label}</div>
      <div className="flex items-center gap-2">
        <input
          className={cn(
            "w-full rounded-md border-2 border-gray-300 bg-black/5 p-2 outline-none focus:border-blue-500 dark:border-slate-700 dark:bg-white/10",
          )}
          type="text"
          value={newTarget}
          onChange={(e) => setNewTarget(e.target.value)}
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
          onClick={() => onSave(newTarget)}
        />
      </div>
    </div>
  );
};

export default TargetBlock;
