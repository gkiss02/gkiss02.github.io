import { WeatherDataCTX } from "./Context";
import { useState } from 'react';

function WeatherData(props) {
    const [weather, setWeather] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [noFound, setNoFound] = useState(false)
    const [error, setError] = useState(false)

    async function getWeather(link) {
        const res = await fetch(link)
        if (!res.ok) setError(true);
        const data = await res.json();
        if (!res.ok && data.error.code == 1006) setNoFound(true);
        setWeather(data);
        setIsLoading(false);
    }

    function getLocation() {
        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(pos => {
            const long = pos.coords.longitude;
            const lat = pos.coords.latitude;
            getLocationLink(lat,long)
        })
    }

    function getLocationLink(lat, long) {
        getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${lat}%2C%20${long}&days=3&key=0fe02bee81a74a74b8e122358212212`);
    }

    function goBackHandler () {
        setError(false)
        setNoFound(false)
        setIsLoading(true)
        getLocation();
    }

    const obj = {
        weather: weather,
        getSearchLink: (city) => {
            setIsLoading(true);
            getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${city}&days=3&key=0fe02bee81a74a74b8e122358212212`)
        },
        getLocation: getLocation,
        isLoading: isLoading,
        noFound: noFound,
        error: error,
        goBackHandler: goBackHandler
    }

    return (
        <WeatherDataCTX.Provider value={obj}>
            {props.children}
        </WeatherDataCTX.Provider>
    )
}

export default WeatherData;