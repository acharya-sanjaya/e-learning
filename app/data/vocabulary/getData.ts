import L01 from "./L01";
import L02 from "./L02";
import L03 from "./L03";
import L04 from "./L04";
import L05 from "./L05";
import L06 from "./L06";
import L07 from "./L07";
import L08 from "./L08";
import L09 from "./L09";
import L10 from "./L10";
import L11 from "./L11";
import L12 from "./L12";
import L13 from "./L13";
import L14 from "./L14";
import L15 from "./L15";
import L16 from "./L16";
import L17 from "./L17";
import L18 from "./L18";
import L19 from "./L19";
import L20 from "./L20";
import L21 from "./L21";
import L22 from "./L22";
import L23 from "./L23";
import L24 from "./L24";
import L25 from "./L25";

export type LessonType =
  | "L01"
  | "L02"
  | "L03"
  | "L04"
  | "L05"
  | "L06"
  | "L07"
  | "L08"
  | "L09"
  | "L10"
  | "L11"
  | "L12"
  | "L13"
  | "L14"
  | "L15"
  | "L16"
  | "L17"
  | "L18"
  | "L19"
  | "L20"
  | "L21"
  | "L22"
  | "L23"
  | "L24"
  | "L25";

export const getData = (lesson: LessonType) => {
  switch (lesson) {
    case "L01":
      return L01;
    case "L02":
      return L02;
    case "L03":
      return L03;
    case "L04":
      return L04;
    case "L05":
      return L05;
    case "L06":
      return L06;
    case "L07":
      return L07;
    case "L08":
      return L08;
    case "L09":
      return L09;
    case "L10":
      return L10;
    case "L11":
      return L11;
    case "L12":
      return L12;
    case "L13":
      return L13;
    case "L14":
      return L14;
    case "L15":
      return L15;
    case "L16":
      return L16;
    case "L17":
      return L17;
    case "L18":
      return L18;
    case "L19":
      return L19;
    case "L20":
      return L20;
    case "L21":
      return L21;
    case "L22":
      return L22;
    case "L23":
      return L23;
    case "L24":
      return L24;
    case "L25":
      return L25;
    default:
      return L01;
  }
};

export const lessonOptions = [
  {value: "L01", label: "Lesson 1"},
  {value: "L02", label: "Lesson 2"},
  {value: "L03", label: "Lesson 3"},
  {value: "L04", label: "Lesson 4"},
  {value: "L05", label: "Lesson 5"},
  {value: "L06", label: "Lesson 6"},
  {value: "L07", label: "Lesson 7"},
  {value: "L08", label: "Lesson 8"},
  {value: "L09", label: "Lesson 9"},
  {value: "L10", label: "Lesson 10"},
  {value: "L11", label: "Lesson 11"},
  {value: "L12", label: "Lesson 12"},
  {value: "L13", label: "Lesson 13"},
  {value: "L14", label: "Lesson 14"},
  {value: "L15", label: "Lesson 15"},
  {value: "L16", label: "Lesson 16"},
  {value: "L17", label: "Lesson 17"},
  {value: "L18", label: "Lesson 18"},
  {value: "L19", label: "Lesson 19"},
  {value: "L20", label: "Lesson 20"},
  {value: "L21", label: "Lesson 21"},
  {value: "L22", label: "Lesson 22"},
  {value: "L23", label: "Lesson 23"},
  {value: "L24", label: "Lesson 24"},
  {value: "L25", label: "Lesson 25"},
];

export interface WordType {
  meaning: string;
  word: string;
  kanji: string;
}

export interface QuizDataType {
  content: string;
  kanji?: string;
  cardType: "question" | "answer";
  id: string;
}

export const getQuizCards = (lesson: LessonType) => {
  const words = getData(lesson);

  const questions: QuizDataType[] = [];
  const answers: QuizDataType[] = [];

  words.forEach((entry) => {
    questions.push({
      content: entry.word,
      kanji: entry.kanji,
      cardType: "question",
      id: "QN-" + entry.word,
    });

    answers.push({
      content: entry.meaning,
      cardType: "answer",
      id: "AN-" + entry.word,
    });
  });

  return {questions, answers};
};
