import ThemeProvider from "./ThemeContext";
import FavouritesProvider from "./FavouritesContext";
import ProgressProvider from "./ProgressContext";
import StatisticsProvider from "./StatisticsContext";

import {ReactNode} from "react";

const AppContextProvider = ({children}: {children: ReactNode}) => {
  return (
    <ThemeProvider>
      <FavouritesProvider>
        <ProgressProvider>
          <StatisticsProvider>{children}</StatisticsProvider>
        </ProgressProvider>
      </FavouritesProvider>
    </ThemeProvider>
  );
};

export default AppContextProvider;
