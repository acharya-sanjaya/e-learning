import {useContext, useEffect} from "react";
import {
  PreferenceContext,
  defaultPreference,
  JpFontType,
  PreferenceType,
} from "~/context/PreferenceContext";

const usePreference = () => {
  const contextData = useContext(PreferenceContext);
  if (!contextData) {
    throw new Error("usePreference must be used within a PreferenceProvider");
  }
  const {preference, setPreference} = contextData;

  const isValidPreference = (preference: PreferenceType) => {
    return (
      typeof preference.romajiStatus === "boolean" &&
      typeof preference.isNepali === "boolean" &&
      typeof preference.showKanji === "boolean" &&
      (preference.jpFont === "font-sans" || preference.jpFont === "font-serif")
    );
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("preference") ?? "{}");
    if (isValidPreference(data)) {
      setPreference(data);
    } else {
      localStorage.setItem("preference", JSON.stringify(defaultPreference));
    }
  }, [setPreference]);

  const toggleRomajiStatus = () => {
    const newPreference = {...preference, romajiStatus: !preference.romajiStatus};
    setPreference(newPreference);
    localStorage.setItem("preference", JSON.stringify(newPreference));
  };

  const toggleIsNepali = () => {
    const newPreference = {...preference, isNepali: !preference.isNepali};
    setPreference(newPreference);
    localStorage.setItem("preference", JSON.stringify(newPreference));
  };

  const toggleShowKanji = () => {
    const newPreference = {...preference, showKanji: !preference.showKanji};
    setPreference(newPreference);
    localStorage.setItem("preference", JSON.stringify(newPreference));
  };

  const setJpFont = (font: JpFontType) => {
    const newPreference = {...preference, jpFont: font};
    setPreference(newPreference);
    localStorage.setItem("preference", JSON.stringify(newPreference));
  };

  return {...preference, toggleRomajiStatus, toggleIsNepali, toggleShowKanji, setJpFont};
};

export default usePreference;
