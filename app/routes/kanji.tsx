import FlipCard from "~/components/FlipCard";
import GridContainer from "~/components/GridContainer";
import PageHeader from "~/components/PageHeader";
import data from "~/data/kanji/170";
import usePreference from "~/hooks/usePreference";
import {cn} from "~/lib/utils";

export default function Kanji() {
  const {jpFont, isNepali} = usePreference();

  return (
    <div className="p-4">
      <PageHeader label="Kanji" />

      <GridContainer>
        {data.map((item, index) => (
          <FlipCard
            key={index}
            front={<div className={cn("text-center text-6xl", jpFont)}>{item.kanji}</div>}
            back={
              <div className="flex flex-col items-center justify-center gap-1 text-center text-lg">
                <div className={jpFont}>{item.jp}</div>
                {isNepali ? <div>{item.np}</div> : <div>{item.en}</div>}
              </div>
            }
          />
        ))}
      </GridContainer>
    </div>
  );
}
