import {useState} from "react";
import Button from "../Button";

interface ExplanationProps {
  text: string;
}

export default function Explanation({text}: ExplanationProps) {
  const [show, setShow] = useState(false);
  const toogleShow = () => setShow(!show);

  return (
    <div className="flex flex-col items-start gap-1">
      <Button
        className="text-sm px-4 py-2 rounded-md"
        variant="primary"
        label="Explanation"
        onClick={toogleShow}
      />
      {show && <div>{text}</div>}
    </div>
  );
}
