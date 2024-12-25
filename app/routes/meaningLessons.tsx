import Card from "~/components/Card";
import GridContainer from "~/components/GridContainer";
import PageHeader from "~/components/PageHeader";

export default function MeaningLessons() {
  return (
    <div className="p-4">
      <PageHeader label="Meanings" />
      <GridContainer>
        <>
          <Card href="../meaning/01" label="Lesson 1" />
          <Card label="Working on other Lessons" />
        </>
      </GridContainer>
    </div>
  );
}
