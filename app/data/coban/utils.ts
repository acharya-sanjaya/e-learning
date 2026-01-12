import cvn001 from "~/data/coban/vocabulary/noun/001";
import cvn002 from "~/data/coban/vocabulary/noun/002";
import cvn003 from "~/data/coban/vocabulary/noun/003";
import cvn004 from "~/data/coban/vocabulary/noun/004";

export const QuizData = {
  cvn001,
  cvn002,
  cvn003,
  cvn004,
};

export type SetNameType = keyof typeof QuizData;

export const getData = (setName: SetNameType) => {
  return QuizData[setName];
};

export type QuizWordType = {
  romaji: string;
  jp: string;
  kanji: string;
  meaning: string;
};

export type QuizDataType = QuizWordType[];
