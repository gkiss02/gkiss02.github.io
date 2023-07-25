import { useState, useEffect } from 'react';

import styles from './App.module.css';

import Header from './Header/Header'
import CurrentTemperature from './Current/CurrentTemperature';
import CurrentDatas from './Current/CurrentDatas';
import HourlyCard from './Hourly/HourlyCard';
import DailyCard from './Daily/DailyCard';

function App() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const currentDate = new Date();
  const subtractedDate = new Date().setHours(currentDate.getHours() + 7);

  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
      const long = pos.coords.longitude;
      const lat = pos.coords.latitude;
      getLocationLink(lat,long)
    })
  }

  function getLocationLink(lat, long) {
     getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${lat}%2C%20${long}&days=3&key=0fe02bee81a74a74b8e122358212212`);
  }

  function getSearchLink(search) {
    getWeather(`https://api.weatherapi.com/v1/forecast.json?q=${search}&days=3&key=0fe02bee81a74a74b8e122358212212`);
    setIsLoading(true);
  }
  
  async function getWeather(link) {
    const res = await fetch(link)
    const data = await res.json();
    setWeather(data);
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div>
        Loading...
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Header location={weather.location} func={getSearchLink}></Header>
      <div className={styles['current-container']}>
        <CurrentTemperature current={weather.current}></CurrentTemperature>
        <div className={styles.line}></div>
        <CurrentDatas weather={weather.forecast.forecastday[0]}></CurrentDatas>
      </div>
      <p className={styles['section-title']}>Today's weather</p>
      <div className={styles['hourly-container']}>
        {weather.forecast.forecastday[0].hour.map(item =>
          currentDate < new Date(item.time) && subtractedDate > new Date(item.time) && 
          <HourlyCard hour={new Date(item.time).getHours()} src={item.condition.icon} temp={Math.round(item.temp_c) + '°'}></HourlyCard>
          )}
        {currentDate.getHours() > 17 && weather.forecast.forecastday[1].hour.map((item, index) =>
          currentDate.getHours() - 17 >= index && 
          <HourlyCard hour={new Date(item.time).getHours()} temp={Math.round(item.temp_c) + '°'}></HourlyCard>
        )}  
      </div>
      <p className={styles['section-title']}>Next 4 days</p>
      {weather.forecast.forecastday.map((item, index) =>
        index > 0 && <DailyCard weather={item}></DailyCard>
      )}
    </div>
  );
}


export default App;
