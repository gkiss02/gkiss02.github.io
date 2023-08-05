import { createContext } from "react";

export const  FavoriteCitiesCTX = createContext({
    arr: [],
    citySetter: (item) => {},
})