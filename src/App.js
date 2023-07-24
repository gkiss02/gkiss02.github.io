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

  useEffect(() => {
    getLocation();
  }, []);

  function getLocation() {
    navigator.geolocation.getCurrentPosition(pos => {
      const long = pos.coords.longitude;
      const lat = pos.coords.latitude;
      getWeather(lat,long)
    })
  }
  
  async function getWeather(lat, long) {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=a3b33f459b2defd8cb549f46a5a5b35c`)
    const data = await res.json();
    console.log(data);
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
      <Header location={weather.city}></Header>
      <div className={styles['current-container']}>
        <CurrentTemperature weather={weather.list[0]}></CurrentTemperature>
        <div className={styles.line}></div>
        <CurrentDatas weather={weather.list[0]} city={weather.city}></CurrentDatas>
      </div>
      <p className={styles['section-title']}>Today's weather</p>
      <div className={styles['hourly-container']}>
        <HourlyCard hour='6am' temp='20°'></HourlyCard>
        <HourlyCard hour='7am' temp='20°'></HourlyCard>
        <HourlyCard hour='8am' temp='20°'></HourlyCard>
        <HourlyCard hour='9am' temp='20°'></HourlyCard>
        <HourlyCard hour='10am' temp='20°'></HourlyCard>
        <HourlyCard hour='11am' temp='20°'></HourlyCard>
        <HourlyCard hour='12am' temp='20°'></HourlyCard>
      </div>
      <p className={styles['section-title']}>Next 5 days</p>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
    </div>
  );
}


export default App;
