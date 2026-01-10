import {useEffect, useState} from "react";
import Button from "~/components/ShiningButton";
import ShiningEffect from "./ShiningEffect";
import {cn} from "~/lib/utils";

const getDisplayValue = (value: number) => {
  const displayValue = new Intl.NumberFormat("en", {
    notation: "compact",
    maximumFractionDigits: 2,
  }).format(value);

  return displayValue;
};

const STORAGE_LAST_COLLECTED_MIN = "collect_last_min";
const STORAGE_BALANCE = "stats_balance";
const STORAGE_POCKET = "collect_pocket";

interface CollectProps {
  ratePerMinute?: number;
}

const MAX_MINUTES = 360; // 6 hours

const getCurrentMinute = () => Math.floor(Date.now() / 60000);
const getCurrentSecond = () => new Date().getSeconds();

const Collect = ({ratePerMinute = 25000}: CollectProps) => {
  const [pocket, setPocket] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(60 - getCurrentSecond());

  /* ===== Initial load (offline collection) ===== */
  useEffect(() => {
    const nowMin = getCurrentMinute();

    const savedLastMin = Number(localStorage.getItem(STORAGE_LAST_COLLECTED_MIN));
    const lastMin = isNaN(savedLastMin) ? nowMin : savedLastMin;

    const passedMinutes = Math.min(nowMin - lastMin, MAX_MINUTES);
    const offlineCoins = Math.max(passedMinutes, 0) * ratePerMinute;

    const savedPocket = Number(localStorage.getItem(STORAGE_POCKET)) || 0;
    const newPocket = savedPocket + offlineCoins;

    setPocket(newPocket);
    localStorage.setItem(STORAGE_POCKET, String(newPocket));
    localStorage.setItem(STORAGE_LAST_COLLECTED_MIN, String(nowMin));
  }, [ratePerMinute]);

  /* ===== Second sync (UI only) ===== */
  useEffect(() => {
    const t = setInterval(() => {
      setSecondsLeft(60 - getCurrentSecond());
    }, 1000);

    return () => clearInterval(t);
  }, []);

  /* ===== Add coins every new minute ===== */
  useEffect(() => {
    if (secondsLeft !== 60) return;

    setPocket((p) => {
      const next = p + ratePerMinute;
      localStorage.setItem(STORAGE_POCKET, String(next));
      localStorage.setItem(STORAGE_LAST_COLLECTED_MIN, String(getCurrentMinute()));
      return next;
    });
  }, [secondsLeft, ratePerMinute]);

  /* ===== Collect ===== */
  const handleCollect = () => {
    const savedBalance = Number(localStorage.getItem(STORAGE_BALANCE)) || 0;
    const newBalance = (savedBalance + pocket / 1000000).toFixed(2);

    localStorage.setItem(STORAGE_BALANCE, newBalance);
    localStorage.setItem(STORAGE_POCKET, "0");
    localStorage.setItem(STORAGE_LAST_COLLECTED_MIN, String(getCurrentMinute()));

    setPocket(0);
  };

  return (
    <div className="m-auto my-2 flex max-w-sm flex-col items-center gap-2 text-xl">
      <Pocket max={ratePerMinute * MAX_MINUTES} value={pocket} />

      {/* <Pocket max={ratePerMinute * MAX_MINUTES} value={9000000} /> */}
      <Button label="Collect" onClick={handleCollect} disabled={pocket === 0} variant="golden" />
      <ShiningEffect text={`${getDisplayValue(ratePerMinute)} in ${secondsLeft}s`} />
    </div>
  );
};

interface PocketProps {
  max: number;
  value: number;
}

const Pocket = ({max, value}: PocketProps) => {
  const isCritical = value >= max * 0.3;
  const displayValue = getDisplayValue(value);

  return (
    <div className="flex w-full items-center gap-1 px-4">
      <div className="relative flex h-20 w-full overflow-hidden rounded-xl shadow-[inset_0_0_2px_0]">
        <div
          className={cn(
            "bg-gradient-to-r transition-all",
            isCritical
              ? "from-red-500 via-red-600 to-red-700"
              : "from-yellow-500 via-yellow-300 to-yellow-200",
          )}
          style={{width: `${(value * 100) / max}%`}}
        ></div>
        <div className="flex-1 transition-all"></div>
        <ShiningEffect
          text={`${displayValue}`}
          className="absolute flex size-full items-center justify-center text-3xl"
        />
      </div>
      <div
        className={cn(
          "h-12 w-1.5 rounded-full shadow-[inset_0_0_2px_0]",
          value >= max && "bg-red-700",
        )}
      ></div>
    </div>
  );
};

export default Collect;
