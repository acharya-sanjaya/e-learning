export type AnswerType = "a" | "b" | "c" | "d";
export interface QuestionType {
  q: string;
  a: string;
  b: string;
  c: string;
  d: string;
  ans: AnswerType;
  e: string;
}
