import {useEffect, useState} from "react";
import Button from "~/components/ShiningButton";
import ShiningEffect from "./ShiningEffect";
import {cn} from "~/lib/utils";
import {getFromLS, setIntoLS, getDisplayValue} from "../CM/lib";

const STORAGE_LAST_COLLECTED = "lastCollected";

interface CollectProps {
  rpm: number;
  onCollect: (coins: number) => void;
}

const MAX_MINUTES = 360;

const getSecondsLeft = () => (typeof window === "undefined" ? 60 : 60 - new Date().getSeconds());

const calculateOfflineMinutes = () => {
  const saved = new Date(getFromLS(STORAGE_LAST_COLLECTED));
  const now = new Date();

  const timeDiff = {
    day: now.getDate() - saved.getDate(),
    hrs: now.getHours() - saved.getHours(),
    min: now.getMinutes() - saved.getMinutes(),
  };

  const offMins = timeDiff.day * 24 * 60 + timeDiff.hrs * 60 + timeDiff.min;

  return offMins;
};

const Collect = ({rpm, onCollect}: CollectProps) => {
  const [pocket, setPocket] = useState(0);
  const [secondsLeft, setSecondsLeft] = useState(60);
  const [started, setStarted] = useState(false);

  // ===== Client: check if collecting already started =====
  useEffect(() => {
    if (typeof window === "undefined") return;

    const saved = getFromLS(STORAGE_LAST_COLLECTED);
    if (!saved) return;
    setStarted(true);

    const t = setInterval(() => {
      setSecondsLeft(getSecondsLeft());
      setPocket(calculateOfflineMinutes() * rpm);
    }, 1000);

    return () => clearInterval(t);
  }, [rpm]);

  // ===== Seconds sync (UI only) =====
  useEffect(() => {
    if (typeof window === "undefined") return;
  }, [rpm]);

  // ===== Start collecting =====
  const handleStart = () => {
    const now = new Date().toJSON();
    setIntoLS(STORAGE_LAST_COLLECTED, now);
    setStarted(true);
    setPocket(0);
  };

  // ===== Collect =====
  const handleCollect = () => {
    if (pocket === 0) return;

    onCollect(pocket);

    setPocket(0);
    setIntoLS(STORAGE_LAST_COLLECTED, new Date().toJSON());
  };

  return (
    <div className="m-auto my-2 flex max-w-sm flex-col items-center gap-2 text-xl">
      <Pocket value={pocket} max={rpm * MAX_MINUTES} />

      {!started ? (
        <Button label="Start Collecting" onClick={handleStart} variant="golden" />
      ) : (
        <Button label="Collect" onClick={handleCollect} disabled={pocket === 0} variant="golden" />
      )}

      {started && (
        <ShiningEffect
          text={`${getDisplayValue(rpm)} in ${secondsLeft}s`}
          className="from-blue-400 via-blue-500 to-blue-600"
        />
      )}
    </div>
  );
};

export default Collect;

/* ===== Pocket bar ===== */

interface PocketProps {
  value: number;
  max: number;
}

const Pocket = ({value, max}: PocketProps) => {
  const isCritical = value >= max * 0.3;

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
          style={{width: `${Math.min(100, (value / max) * 100)}%`}}
        />
        <ShiningEffect
          text={getDisplayValue(value)}
          className="absolute flex size-full items-center justify-center text-3xl"
        />
      </div>
    </div>
  );
};
