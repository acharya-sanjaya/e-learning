import {useEffect, useState} from "react";
import Button from "~/components/ShiningButton";
import Icon from "~/Icons";
import {cn} from "~/lib/utils";

interface StatsProps {
  targets?: [number, number]; // optional for SSR
  ratePerHour?: number; // optional, default 1.5
}

const STORAGE_BALANCE = "stats_balance";

const Stats = ({targets = [0, 0], ratePerHour = 1.5}: StatsProps) => {
  const ratePerMinute = ratePerHour / 60;

  /* ===== SSR-safe dummy states ===== */
  const [now, setNow] = useState(new Date(0));
  const [balance, setBalance] = useState(""); // persisted value
  const [newBalance, setNewBalance] = useState(""); // editable input
  const [activeIndex, setActiveIndex] = useState(0);
  const [resultText, setResultText] = useState("");

  /* ===== Load balance from localStorage ===== */
  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem(STORAGE_BALANCE);
    if (saved !== null) {
      setBalance(saved);
      setNewBalance(saved);
    } else {
      localStorage.setItem(STORAGE_BALANCE, "");
    }
  }, []);

  /* ===== Update result whenever balance or target changes ===== */
  useEffect(() => {
    const currentTime = new Date();
    setNow(currentTime);

    const activeTarget = targets[activeIndex] ?? 0;
    const balanceNum = Number(newBalance);

    if (!isNaN(balanceNum) && balanceNum >= activeTarget) {
      setResultText("Target Achieved");
    } else if (!isNaN(balanceNum) && balanceNum < activeTarget) {
      const required = Math.round((activeTarget - balanceNum) * 100) / 100;
      setResultText(`${required} M Required`);
    } else {
      setResultText(""); // invalid or empty input
    }
  }, [newBalance, activeIndex, targets]);

  /* ===== Save button state ===== */
  const balanceNum = Number(newBalance);
  const isSaveDisabled =
    newBalance === balance || newBalance === "" || isNaN(balanceNum) || balanceNum < 0;

  /* ===== Estimated time ===== */
  const activeTarget = targets[activeIndex] ?? 0;
  const balanceNumber = Number(newBalance);
  const remaining = !isNaN(balanceNumber) ? Math.max(activeTarget - balanceNumber, 0) : 0;
  const totalMinutes = Math.ceil(remaining / ratePerMinute);
  const estHours = Math.floor(totalMinutes / 60);
  const estMinutes = totalMinutes % 60;

  const readyDate = new Date(now);
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
            label={`${t} M`}
            onClick={() => setActiveIndex(idx)}
            isActive={activeIndex === idx}
          />
        ))}
      </div>

      {/* Balance Input */}
      <div>Balance (in Millions):</div>
      <div className="flex w-full items-center gap-2">
        <input
          type="text"
          inputMode="decimal"
          value={newBalance}
          onChange={(e) => setNewBalance(e.target.value)}
          className="flex-1 rounded-md border-2 border-gray-300 p-2 outline-none focus:border-blue-500"
        />
        <Button
          className="p-1"
          disabled={isSaveDisabled}
          label={
            <Icon
              className={cn("size-9 stroke-white", isSaveDisabled && "cursor-not-allowed")}
              iconName="save"
            />
          }
          onClick={() => {
            localStorage.setItem(STORAGE_BALANCE, newBalance);
            setBalance(newBalance);
          }}
        />
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

        {!isNaN(balanceNumber) && balanceNumber < activeTarget && (
          <>
            <div className="mt-2">Estimated Time:</div>
            <div>
              {estHours} H : {estMinutes} M
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
