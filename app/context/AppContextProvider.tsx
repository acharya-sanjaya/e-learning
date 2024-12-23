import PreferenceProvider from "./PreferenceContext";

import {ReactNode} from "react";

const AppContextProvider = ({children}: {children: ReactNode}) => {
  return <PreferenceProvider>{children}</PreferenceProvider>;
};

export default AppContextProvider;
