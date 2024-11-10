import {createContext, useState} from "react";
import {getLocalStorageData} from "~/lib/utils";

export type StatisticsType = {
  courseName: string;
  chapterName: string;
  score: number;
  testDate: number;
};
export interface StatisticsContextType {
  statistics: StatisticsType[];
  setStatistics: React.Dispatch<React.SetStateAction<StatisticsType[]>>;
}

export const StatisticsContext = createContext<StatisticsContextType | undefined>(undefined);

const StatisticsContextProvider = ({children}: {children: React.ReactNode}) => {
  const initialStatistics = getLocalStorageData("Statistics", true, "[]");
  const [statistics, setStatistics] = useState<StatisticsType[]>(initialStatistics);

  return (
    <StatisticsContext.Provider value={{statistics, setStatistics}}>
      <div>{children}</div>
    </StatisticsContext.Provider>
  );
};

export default StatisticsContextProvider;
