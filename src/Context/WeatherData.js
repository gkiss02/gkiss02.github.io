import { WeatherDataCTX } from "./Context";
import { useContext, useState, useEffect } from 'react';
import { SettingsCTX } from "./Context";

function WeatherData(props) {
    const [weather, setWeather] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const [noFound, setNoFound] = useState(false)
    const [error, setError] = useState(false)
    const [failLocation, setFailLocation] = useState(false)
    const settings =  useContext(SettingsCTX);

    async function getWeather(link) {
        setFailLocation(false)
        const res = await fetch(link + '&lang=' + settings.language.toLowerCase())
        if (!res.ok) setError(true);
        const data = await res.json();
        if (!res.ok && data.error.code == 1006) setNoFound(true);
        if (res.ok) localStorage.setItem('recent', JSON.stringify(data.location.name));
        setWeather(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (localStorage.getItem('recent') == null) getLocation();
        else getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${JSON.parse(localStorage.getItem('recent'))}&days=3&key=0fe02bee81a74a74b8e122358212212`)
    }, [settings])

    function getLocation() {
        navigator.geolocation.getCurrentPosition(pos => {
            const long = pos.coords.longitude;
            const lat = pos.coords.latitude;
            getLocationLink(lat, long);
        }, error => {
            setIsLoading(false);
            setFailLocation(true);
        });
    }

    function getLocationLink(lat, long) {
        getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${lat}%2C%20${long}&days=3&key=0fe02bee81a74a74b8e122358212212`);
    }

    function goBackHandler () {
        setError(false)
        setNoFound(false)
        setIsLoading(true)
        getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${JSON.parse(localStorage.getItem('recent'))}&days=3&key=0fe02bee81a74a74b8e122358212212`)
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
        goBackHandler: goBackHandler,
        failLocation: failLocation
    }

    return (
        <WeatherDataCTX.Provider value={obj}>
            {props.children}
        </WeatherDataCTX.Provider>
    )
}

export default WeatherData;