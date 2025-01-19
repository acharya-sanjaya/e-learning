import Card from "~/components/Card";
import GridContainer from "~/components/GridContainer";
import PageHeader from "~/components/PageHeader";
import availavleLessons from "~/data/dictionary/availableLessons";

export default function MeaningLessons() {
  return (
    <div className="p-4">
      <PageHeader label="Meanings" />
      <GridContainer>
        {availavleLessons.map((lesson) => (
          <Card key={`lesson-${lesson}`} href={`../meaning/${lesson}`} label={`Lesson ${lesson}`} />
        ))}
        <Card label="Working on other Lessons" />
      </GridContainer>
    </div>
  );
}
