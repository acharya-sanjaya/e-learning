import {createContext, ReactNode, useState} from "react";

export type JpFontType = "font-sans" | "font-serif";
export interface PreferenceType {
  romajiStatus: boolean;
  isNepali: boolean;
  showKanji: boolean;
  jpFont: JpFontType;
}
export interface PreferenceContextType {
  preference: PreferenceType;
  setPreference: React.Dispatch<React.SetStateAction<PreferenceType>>;
}

export const PreferenceContext = createContext<PreferenceContextType | undefined>(undefined);

export const defaultPreference = {
  romajiStatus: true,
  isNepali: true,
  showKanji: false,
  jpFont: "font-sans" as JpFontType,
};

const PreferenceContextProvider = ({children}: {children: ReactNode}) => {
  const [preference, setPreference] = useState<PreferenceType>(defaultPreference);

  return (
    <PreferenceContext.Provider value={{preference, setPreference}}>
      <div>{children}</div>
    </PreferenceContext.Provider>
  );
};

export default PreferenceContextProvider;
