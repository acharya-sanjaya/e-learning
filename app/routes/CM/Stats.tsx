import {useState} from "react";
import Button from "~/components/ShiningButton";
import {cn} from "~/lib/utils";
import {getDisplayValue} from "./lib";
import ShiningEffect from "./ShiningEffect";

interface StatsProps {
  targets?: [number, number];
  amounts?: [number, number];
  rpm?: number;
}

const Stats = ({targets = [0, 0], amounts = [0, 0], rpm = 38000}: StatsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTarget = targets[activeIndex] ?? 0;
  const activeBalance = amounts[activeIndex] ?? 0;
  const required = activeTarget - activeBalance;

  const resultText = required > 0 ? `${getDisplayValue(required)} Required` : "Target Achieved";

  const totalMinutes = Math.ceil(required / rpm);

  const estDays = Math.floor(totalMinutes / (24 * 60));
  const remainingMinutesAfterDays = totalMinutes % (24 * 60);

  const estHours = Math.floor(remainingMinutesAfterDays / 60);
  const estMinutes = remainingMinutesAfterDays % 60;

  const readyDate = new Date();
  readyDate.setMinutes(readyDate.getMinutes() + totalMinutes);
  const formattedReadyDate = readyDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div className="m-auto flex max-w-xl flex-col gap-4 p-4 text-xl">
      {/* Target Selection */}
      <div>Select Target:</div>
      <div className="flex gap-4">
        {targets.map((t, idx) => (
          <Button
            key={idx}
            label={getDisplayValue(t)}
            onClick={() => setActiveIndex(idx)}
            isActive={activeIndex === idx}
          />
        ))}
      </div>

      {/* Results */}
      <div className="rounded-2xl border p-4">
        <div
          className={cn(
            "text-center font-bold",
            resultText === "Target Achieved" ? "text-green-500" : "text-red-500",
          )}
        >
          {resultText}
        </div>
        <div className="flex items-center gap-4">
          Balance <ShiningEffect text={getDisplayValue(activeBalance)} />
        </div>

        {required > 0 && (
          <>
            <div className="mt-2">Estimated Time:</div>
            <div>
              {estDays}D : {estHours}H : {estMinutes}M
            </div>

            <br />

            <div>Ready In:</div>
            <div>{formattedReadyDate}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Stats;
