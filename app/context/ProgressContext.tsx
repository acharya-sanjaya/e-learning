import {createContext, useState} from "react";
import {getLocalStorageData} from "~/lib/utils";

export type ProgressType = {[key: string]: string[]};
export interface ProgressContextType {
  progress: ProgressType;
  setProgress: React.Dispatch<React.SetStateAction<ProgressType>>;
}

export const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const ProgressProvider = ({children}: {children: React.ReactNode}) => {
  const initialProgress: ProgressType = getLocalStorageData("progress", true, "{}");
  const [progress, setProgress] = useState<ProgressType>(initialProgress);

  return (
    <ProgressContext.Provider value={{progress, setProgress}}>
      <div>{children}</div>
    </ProgressContext.Provider>
  );
};

export default ProgressProvider;
