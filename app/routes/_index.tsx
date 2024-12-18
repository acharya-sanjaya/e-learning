import type {MetaFunction} from "@remix-run/node";
// import Card from "~/components/Card";
import Test from "./test";

export const meta: MetaFunction = () => {
  return [{title: "E-Learning"}, {name: "description", content: "Welcome to E-learning App!"}];
};

export default function Index() {
  return (
    // <div className="m-auto p-4 flex flex-col h-svh gap-4">
    //   <Card href="kana" label="Kana" />
    //   <Card href="quiz/kana" label="Kana Quiz" />
    //   <Card href="translate" label="Translate" />
    //   <Card href="quiz" label="Quiz" />
    //   <Card href="learn/vocabulary" label="Vocabulary" />
    //   <Card href="learn/grammar" label="Grammar" />
    //   <Card href="learn/kanji" label="Kanji" />
    // </div>
    <Test />
  );
}
