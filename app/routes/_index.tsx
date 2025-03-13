import type {MetaFunction} from "@remix-run/node";
import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";

export const meta: MetaFunction = () => {
  return [{title: "E-Learning"}, {name: "description", content: "Welcome to E-learning App!"}];
};

export default function Index() {
  return (
    <div className="p-4">
      <PageHeader goBack={false} label="Nihongo" />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,1fr))] gap-4">
        <Card href="kana" label="Kana" />
        <Card href="quiz/kana" label="Kana Quiz" />
        <Card label="Numbers" />
        <Card label="Time" />
        <Card label="Particles" />
        <Card label="Greetings" />
        <Card href="Vocabulary" label="Meanings" />
        <Card href="bookLessons" label="Lesson" />
        <Card href="translate" label="Translate" />
        <Card label="Quiz" href="quiz/vocab/match" />
      </div>
    </div>
  );
}
