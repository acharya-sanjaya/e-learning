import {useEffect, useState, useRef} from "react";
import Button from "~/components/ShiningButton";
import ShiningEffect from "./ShiningEffect";
import {cn} from "~/lib/utils";

const STORAGE_LAST_COLLECTED = "collect_last_collected";
const STORAGE_BALANCE = "stats_balance";

interface CollectProps {
  ratePerHour?: number; // default rate if not provided
}

const Collect = ({ratePerHour = 1.5}: CollectProps) => {
  const [collectedAt, setCollectedAt] = useState<Date>(new Date(0)); // SSR-safe dummy
  const [timeLeftMs, setTimeLeftMs] = useState(6 * 60 * 60 * 1000); // 6 hr countdown
  const [balance, setBalance] = useState("0"); // balance string
  const intervalRef = useRef<number>();

  // ===== Load from localStorage or initialize =====
  useEffect(() => {
    const savedTime = localStorage.getItem(STORAGE_LAST_COLLECTED);
    if (savedTime) {
      setCollectedAt(new Date(savedTime));
    } else {
      const now = new Date();
      setCollectedAt(now);
      localStorage.setItem(STORAGE_LAST_COLLECTED, now.toISOString());
    }

    const savedBalance = localStorage.getItem(STORAGE_BALANCE);
    if (savedBalance !== null) {
      setBalance(savedBalance);
    } else {
      localStorage.setItem(STORAGE_BALANCE, "0");
    }
  }, []);

  // ===== Countdown timer =====
  useEffect(() => {
    const update = () => {
      const now = new Date().getTime();
      const target = collectedAt.getTime() + 6 * 60 * 60 * 1000; // 6 hr from last collect
      const diff = target - now;
      setTimeLeftMs(diff > 0 ? diff : 0);
    };

    update(); // initial call
    intervalRef.current = window.setInterval(update, 1000);
    return () => clearInterval(intervalRef.current);
  }, [collectedAt]);

  // ===== Countdown display =====
  const hours = Math.floor(timeLeftMs / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeftMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeftMs % (1000 * 60)) / 1000);
  const formattedCountdown = `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  // ===== Conditions =====
  const isCritical = timeLeftMs <= 3 * 60 * 60 * 1000; // less than 3 hours
  const isLessThan1Min = new Date().getTime() - collectedAt.getTime() < 60 * 1000;

  const handleCollect = () => {
    const now = new Date();

    // Calculate elapsed time in hours
    const elapsedMs = now.getTime() - collectedAt.getTime();
    const elapsedHours = elapsedMs / (1000 * 60 * 60);

    // Update balance
    const currentBalance = parseFloat(balance) || 0;
    const newBalance = (currentBalance + elapsedHours * ratePerHour).toFixed(2);

    setBalance(newBalance);
    localStorage.setItem(STORAGE_BALANCE, newBalance);

    // Update last collected time
    setCollectedAt(now);
    localStorage.setItem(STORAGE_LAST_COLLECTED, now.toISOString());

    // Navigate to external link
    window.location.href = "https://getcoinmaster.com/~pytqPBcD62?u=c";
  };

  return (
    <div className="m-auto mt-2 flex max-w-sm flex-col items-center gap-2 text-xl">
      <ShiningEffect
        text={formattedCountdown}
        className={cn(isCritical ? "text-red-500" : "text-blue-400")}
      />

      <div>
        <Button
          label="Collect"
          onClick={handleCollect}
          disabled={isLessThan1Min}
          variant="golden"
        />
      </div>

      <div className="mt-2">
        Balance: <span className="font-bold">{balance} M</span>
      </div>
    </div>
  );
};

export default Collect;
