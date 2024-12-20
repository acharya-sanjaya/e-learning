import type {MetaFunction} from "@remix-run/node";
import Card from "~/components/Card";
import PageHeader from "~/components/PageHeader";
// import Test from "./test";

export const meta: MetaFunction = () => {
  return [{title: "E-Learning"}, {name: "description", content: "Welcome to E-learning App!"}];
};

export default function Index() {
  return (
    <div className="p-4">
      <PageHeader label="Nihongo" labelClassName="text-4xl" />
      <div className="grid  gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
        {/* <div className="p-4 flex flex-wrap justify-evenly gap-8"> */}
        <Card href="kana" label="Kana" />
        <Card label="Numbers" />
        <Card label="Time" />
        <Card label="Particles" />

        <Card label="Greetings" />
        <Card label="Meanings" />
        <Card label="Lesson" />

        <Card href="translate" label="Translate" />
        <Card label="Quiz" href="quiz" />

        {/* <div className="grid p-4 gap-4 grid-cols-[repeat(auto-fill,minmax(150px,1fr))]">
        <div className="bg-blue-500 h-32">Item 1</div>
        <div className="bg-green-500 h-32">Item 2</div>
        <div className="bg-red-500 h-32">Item 3</div>
        <div className="bg-yellow-500 h-32">Item 4</div>
        <div className="bg-purple-500 h-32">Item 5</div>
        </div> */}

        {/* <Card href="quiz" label="Quiz" /> */}
        {/* <Card href="learn/vocabulary" label="Vocabulary" /> */}
        {/* <Card href="learn/grammar" label="Grammar" /> */}
        {/* <Card href="learn/kanji" label="Kanji" /> */}
      </div>
    </div>
  );
}
