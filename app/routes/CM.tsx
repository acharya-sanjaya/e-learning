import {useEffect, useState} from "react";
import Clock from "./CM/Clock";
import Drawer from "~/components/Drawer";
import Header from "~/components/Header";
import InputBox from "./CM/InputBox";
import Stats from "./CM/Stats";
import Collect from "./CM/Collect";
import {getFromLS, setIntoLS} from "./CM/lib";
import Button from "~/components/ShiningButton";

const CM = () => {
  const [balance1, setBalance1] = useState("");
  const [balance2, setBalance2] = useState("");
  const [menuOn, setMenuOn] = useState(false);
  const [target1, setTarget1] = useState("");
  const [target2, setTarget2] = useState("");
  const [rpm, setRpm] = useState("");

  const loadDataFromLocalStorage = () => {
    setBalance1(getFromLS("b1"));
    setBalance2(getFromLS("b2"));
    setTarget1(getFromLS("t1"));
    setTarget2(getFromLS("t2"));
    setRpm(getFromLS("rpm"));
  };

  const handleCollect = (coins: number) => {
    const newBalance1 = Number(balance1) + coins;
    const newBalance2 = Number(balance2) + coins;

    saveData("b1", newBalance1.toString());
    saveData("b2", newBalance2.toString());
  };

  useEffect(() => {
    loadDataFromLocalStorage();
  }, []);

  const saveData = (key: string, value: string) => {
    setIntoLS(key, value);

    switch (key) {
      case "t1":
        setTarget1(value);
        break;
      case "t2":
        setTarget2(value);
        break;
      case "b1":
        setBalance1(value);
        break;
      case "b2":
        setBalance2(value);
        break;
      case "rpm":
        setRpm(value);
        break;
    }
  };

  return (
    <div>
      <Header label="CM Manager" menuOn={menuOn} onMenuClick={() => setMenuOn((m) => !m)} />
      <Collect rpm={Number(rpm)} onCollect={handleCollect} />
      <Drawer open={menuOn} onClose={() => setMenuOn(false)}>
        <Clock />
        <InputBox label="Rate per minute" value={rpm} onSave={(d: string) => saveData("rpm", d)} />
        <InputBox
          label="Target 1"
          value={target1}
          onSave={(d: string) => saveData("t1", d)}
          separate
        />
        <InputBox label="Balance 1" value={balance1} onSave={(d: string) => saveData("b1", d)} />
        <InputBox
          label="Target 2"
          value={target2}
          onSave={(d: string) => saveData("t2", d)}
          separate
        />
        <InputBox label="Balance 2" value={balance2} onSave={(d: string) => saveData("b2", d)} />
        <Button
          label="Clear LS"
          onClick={() => {
            localStorage.clear();
          }}
          variant="danger"
          className="mt-2"
        />
      </Drawer>
      <Stats
        targets={[Number(target1), Number(target2)]}
        amounts={[Number(balance1), Number(balance2)]}
        rpm={Number(rpm)}
      />
      <div
        onClick={() => window.open("coinmaster://main")}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e}
        className="fixed bottom-4 right-4 flex size-16 justify-center rounded-full"
      >
        <img
          src="https://d3go0ty1gy66wb.cloudfront.net/resources/vikings/1.0_fbmaster/cmShopScheduler_assets/1740056668534_goToGameBtn.png"
          alt="go to game"
          className="drop-shadow-[0_0_3px_#000] dark:drop-shadow-[0_0_10px_#FFF]"
        />
        <div className="text-md absolute bottom-[3px] flex h-4 w-full items-center justify-center rounded-full font-extrabold text-emerald-900">
          PLAY
        </div>
      </div>
    </div>
  );
};

export default CM;
