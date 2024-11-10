import {createContext, useState} from "react";
import {getLocalStorageData} from "~/lib/utils";

export type FavouritesType = {[key: string]: string[]};
export interface FavouritesContextType {
  favourites: FavouritesType;
  setFavourites: React.Dispatch<React.SetStateAction<FavouritesType>>;
}

export const FavouritesContext = createContext<FavouritesContextType | undefined>(undefined);

const FavouritesContextProvider = ({children}: {children: React.ReactNode}) => {
  const initialFavourites: FavouritesType = getLocalStorageData("favourites", true, "{}");
  const [favourites, setFavourites] = useState<FavouritesType>(initialFavourites);

  return (
    <FavouritesContext.Provider value={{favourites, setFavourites}}>
      <div>{children}</div>
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
