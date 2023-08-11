import { createContext } from "react";

export const  FavoriteCitiesCTX = createContext({
    arr: [],
    citySetter: (item) => {},
})

export const WeatherDataCTX = createContext({
    weather: {},
    getSearchLink: (city) => {},
    getLocation: () => {},
    isLoading: true,
    noFound: false,
    error: false,
    goBackHandler: () => {}
})
