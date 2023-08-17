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
    goBackHandler: () => {},
    failLocation: false,
})

export const SettingsCTX = createContext({
    timeFormat: '24',
    language: 'EN',
    unit: 'metric',
    timeFormatSetter: (item) => {},
    languageSetter: (item) => {},
    unitSetter: (item) => {},
})

