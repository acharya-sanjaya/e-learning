import {useEffect, useState} from "react";
import Clock from "./CM/Clock";
import Drawer from "~/components/Drawer";
import Header from "~/components/Header";
import TargetBlock from "./CM/TargetBlock";
import Stats from "./CM/Stats";
import Collect from "./CM/Collect";
import RateBlock from "./CM/RateBlock";

const CM = () => {
  const [menuOn, setMenuOn] = useState(false);
  const [target1, setTarget1] = useState("");
  const [target2, setTarget2] = useState("");
  const [RPH, setRPH] = useState("");

  const loadDataFromLocalStorage = () => {
    const target1 = localStorage.getItem("target1") ?? "";
    const target2 = localStorage.getItem("target2") ?? "";
    const RPH = localStorage.getItem("rate") ?? "";

    setTarget1(target1);
    setTarget2(target2);
    setRPH(RPH);
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const saveRate = (r: string) => {
    localStorage.setItem("rate", r.toString());
    setRPH(r);
  };

  const saveTarget1 = (t1: string) => {
    localStorage.setItem("target1", t1.toString());
    setTarget1(t1);
  };

  const saveTarget2 = (t2: string) => {
    localStorage.setItem("target2", t2.toString());
    setTarget2(t2);
  };

  return (
    <div>
      <Header label="CM Manager" menuOn={menuOn} onMenuClick={() => setMenuOn((m) => !m)} />
      <Collect />
      <Drawer open={menuOn} onClose={() => setMenuOn(false)}>
        <Clock />
        <TargetBlock label="Target 1" target={target1} onSave={saveTarget1} />
        <TargetBlock label="Target 2" target={target2} onSave={saveTarget2} />
        <RateBlock rate={RPH} onSave={saveRate} />
      </Drawer>
      <Stats targets={[Number(target1), Number(target2)]} ratePerHour={Number(RPH)} />
    </div>
  );
};

export default CM;
