import {useState} from "react";
import Button from "~/components/ShiningButton";

const CM = () => {
  const ratePerHour = 1.5;
  const ratePerMinute = ratePerHour / 60;

  const [balance, setBalance] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [target, setTarget] = useState(106.25); // default target

  const balanceNum = Number(balance);

  // Handle balance input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBalance(value);
    setShowResults(false);

    if (value === "" || isNaN(Number(value)) || Number(value) < 0) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  };

  // Show results
  const calculate = () => {
    if (!invalid) setShowResults(true);
  };

  const reset = () => {
    setBalance("");
    setShowResults(false);
    setInvalid(false);
    setTarget(106.25); // reset to default
  };

  // Compute results
  let resultTitle = "";
  let timeText = "";
  let dateText = "";

  if (showResults && invalid) resultTitle = "Invalid Input";
  else if (showResults && !invalid && balanceNum >= target) resultTitle = "Target Achieved";
  else if (showResults && !invalid && balanceNum < target) {
    const remaining = target - balanceNum;
    const totalMinutes = Math.ceil(remaining / ratePerMinute);

    const days = Math.floor(totalMinutes / (24 * 60));
    const hours = Math.floor((totalMinutes % (24 * 60)) / 60);
    const minutes = totalMinutes % 60;

    timeText = `${days} D : ${hours} H : ${minutes} M`;

    const targetDate = new Date();
    targetDate.setMinutes(targetDate.getMinutes() + totalMinutes);

    dateText = targetDate.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  }

  return (
    <div className="flex flex-col gap-4 p-4 text-xl">
      {/* Balance Input */}
      <div className="flex flex-col items-center">
        <div>Balance (in Millions):</div>
        <input
          type="number"
          inputMode="decimal"
          value={balance}
          onChange={handleChange}
          className={`w-full rounded border p-2 outline-none ${invalid ? "border-red-500" : "border-gray-600"}`}
        />
      </div>

      {/* Calculate / Reset */}
      <div className="flex gap-4">
        <Button label="Calculate" onClick={calculate} />
        {balance !== "" && <Button label="Reset" onClick={reset} variant="danger" />}
      </div>

      {/* Results */}
      {showResults && (
        <div className="rounded-xl border bg-black/20 p-4 dark:bg-white/20">
          <div className="mb-4 text-center font-bold">
            {/* Target selection inside results */}
            {!invalid && (
              <div className="mb-4 flex w-full gap-4">
                <div>Target:</div>
                <Button
                  label="106.25 M"
                  onClick={() => setTarget(106.25)}
                  isActive={target === 106.25} // shiny when active
                />
                <Button
                  label="350 M"
                  onClick={() => setTarget(350)}
                  isActive={target === 350} // shiny when active
                />
              </div>
            )}

            <M text={invalid ? "Invalid Input" : resultTitle} />
          </div>

          {/* Stats */}
          <div className="mb-4 flex flex-col gap-2">
            <div>
              <span>Balance: </span>
              <M text={String(balanceNum)} />
            </div>
            {resultTitle !== "Target Achieved" && !invalid && (
              <div>
                <span>Required: </span>
                <M text={String((Number((target - balanceNum).toFixed(2)) * 100) / 100)} />
              </div>
            )}
          </div>

          {resultTitle !== "Target Achieved" && !invalid && (
            <>
              <div>Estimated Time:</div>
              <div>{timeText}</div>
              <br />
              <div>Ready In:</div>
              <div>{dateText}</div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

// Shining M component
const M = ({text}: {text?: string}) => {
  return (
    <>
      <span className="animate-shine bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 bg-[length:200%_100%] bg-clip-text font-bold text-transparent">
        {text}
      </span>
      {text && !isNaN(Number(text)) && <span> M</span>}
      <style>{`
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shine {
          animation: shine 2s linear infinite;
        }
      `}</style>
    </>
  );
};

export default CM;
