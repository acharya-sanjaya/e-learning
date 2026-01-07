import {useEffect, useState} from "react";
import ShiningEffect from "./ShiningEffect";

const Clock = () => {
  const [now, setNow] = useState(new Date("0"));

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const rawHr = now.getHours() % 12;
  const hr = (rawHr === 0 ? 12 : rawHr).toString();
  const min = now.getMinutes().toString();
  const sec = now.getSeconds().toString();
  const amPm = now.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="flex items-center justify-center gap-1 rounded-xl border-4 border-blue-500/10 p-4 text-4xl font-bold">
      <BlockWrapper>
        <ShiningEffect text={hr} />
      </BlockWrapper>
      <div>:</div>
      <BlockWrapper>
        <ShiningEffect text={min} />
      </BlockWrapper>
      <div>:</div>
      <BlockWrapper>
        <ShiningEffect text={sec} />
      </BlockWrapper>
      <div className="ml-2">{amPm}</div>
    </div>
  );
};

const BlockWrapper = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-16 rounded-xl bg-black/5 p-2 text-center dark:bg-white/10">{children}</div>
  );
};

export default Clock;
