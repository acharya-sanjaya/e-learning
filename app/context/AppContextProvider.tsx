import {createContext, ReactNode, useState} from "react";

export type ThemeType = "light" | "dark" | "system";
export type ProgressType = {[key: string]: string[]};
export type FavouritesType = {[key: string]: string[]};
export type StatisticsType = {
  courseId: string;
  chapterId: string;
  score: number;
  testDate: number;
};

export interface AppContextType {
  theme: ThemeType;
  progress: ProgressType;
  favourites: FavouritesType;
  statistics: StatisticsType[];

  setTheme: (theme: ThemeType) => void;
  setProgress: (progress: ProgressType) => void;
  setFavourites: (favourites: FavouritesType) => void;
  setStatistics: (statistics: StatisticsType[]) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const AppContextProvider = ({children}: {children: ReactNode}) => {
  // While running in server

  // eslint-disable-next-line
  let initialValues: Pick<AppContextType, "theme" | "progress" | "favourites" | "statistics"> = {
    theme: "system",
    progress: {},
    favourites: {},
    statistics: [],
  };

  //   While running in browsers
  if (typeof window !== "undefined") {
    try {
      initialValues = {
        theme: (localStorage.getItem("theme") as ThemeType) ?? "system",
        progress: JSON.parse(localStorage.getItem("progress") ?? "{}"),
        favourites: JSON.parse(localStorage.getItem("favourites") ?? "{}"),
        statistics: JSON.parse(localStorage.getItem("statistics") ?? "[]"),
      };
    } catch (error) {
      console.log("Error parsing the local storage:/n", error);
    }
  }

  const [theme, setTheme] = useState<ThemeType>(initialValues.theme);
  const [progress, setProgress] = useState<ProgressType>(initialValues.progress);
  const [favourites, setFavourites] = useState<FavouritesType>(initialValues.favourites);
  const [statistics, setStatistics] = useState<StatisticsType[]>(initialValues.statistics);

  return (
    <AppContext.Provider
      value={{
        theme,
        progress,
        favourites,
        statistics,
        setTheme,
        setProgress,
        setFavourites,
        setStatistics,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
