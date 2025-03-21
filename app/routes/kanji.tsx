import FlipCard from "~/components/FlipCard";
import GridContainer from "~/components/GridContainer";
import PageHeader from "~/components/PageHeader";
import data from "~/data/kanji/170";
import usePreference from "~/hooks/usePreference";
import {cn} from "~/lib/utils";

export default function Kanji() {
  const {isNepali} = usePreference();

  return (
    <div className="p-4">
      <PageHeader label="Kanji" />

      <GridContainer width="large">
        {data.map((item, index) => (
          <FlipCard
            key={index}
            front={<div className={cn("text-center font-sans-jp text-7xl")}>{item.kanji}</div>}
            back={
              <div className="flex flex-col items-center justify-center gap-1 text-center text-xl">
                <div className="font-sans-jp">{item.jp}</div>
                {isNepali ? <div>{item.np}</div> : <div>{item.en}</div>}
              </div>
            }
          />
        ))}
      </GridContainer>
    </div>
  );
}
