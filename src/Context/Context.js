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

export const SettingsCTX = createContext({
    timeFormat: '24',
    language: 'ENG',
    unit: 'Imperial',
    timeFormatSetter: (item) => {},
    languageSetter: (item) => {},
    unitSetter: (item) => {},
})

