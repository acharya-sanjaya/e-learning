import Card from "~/components/Card";
import GridContainer from "~/components/GridContainer";
import PageHeader from "~/components/PageHeader";

export default function MeaningLessons() {
  return (
    <div className="p-4">
      <PageHeader label="Lessons" />
      <div className="mb-4 flex flex-col rounded-xl bg-red-500 p-4 px-6">
        <div className="text-2xl font-bold">Recommendation:</div>
        <div className="text-justify text-lg">
          Read word meanings for each lesson before starting.{" "}
        </div>
      </div>
      <GridContainer>
        <>
          {/* <Card href="../meaning/01" label="Lesson 1" /> */}
          <Card label="Working on other Lessons" />
        </>
      </GridContainer>
    </div>
  );
}
