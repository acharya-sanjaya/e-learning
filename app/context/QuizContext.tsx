import {createContext, useContext, useState} from "react";
import {WordType, LessonType, availableLessons, getData} from "~/data/vocabulary/getData";

interface QuizContextType {
  selectedSet: LessonType;
  setSelectedSet: (set: LessonType) => void;
  selectedQuestions: WordType[];
  setSelectedQuestions: (questions: WordType[]) => void;
  availableQuestions: WordType[];
}

const QuizContext = createContext<QuizContextType | null>(null);

export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) throw new Error("useQuiz must be used inside QuizProvider");

  return {...context, a: "Test"};
}

export function QuizProvider({children}: {children: React.ReactNode}) {
  const [selectedSet, setSelectedSet] = useState<LessonType>(availableLessons[0]);
  const [selectedQuestions, setSelectedQuestions] = useState<WordType[]>([]);
  const availableQuestions = getData(selectedSet);

  return (
    <QuizContext.Provider
      value={{
        selectedSet,
        setSelectedSet,
        selectedQuestions,
        setSelectedQuestions,
        availableQuestions,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}
