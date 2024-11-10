import {createContext, useState} from "react";
import {getLocalStorageData} from "~/lib/utils";

export type ThemeType = "light" | "dark" | "system";
export interface ThemeContextType {
  theme: ThemeType;
  setTheme: React.Dispatch<React.SetStateAction<ThemeType>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const ThemeProvider = ({children}: {children: React.ReactNode}) => {
  const initialTheme: ThemeType = getLocalStorageData("theme", false, "system");
  const [theme, setTheme] = useState<ThemeType>(initialTheme);

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
