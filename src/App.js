import { useState, useEffect } from 'react';
import styles from './App.module.css';
import Menu from './Components/Menu/Menu'
import Header from './Components/Header/Header'
import CurrentTemperature from './Components/Current/CurrentTemperature';
import CurrentDatas from './Components/Current/CurrentDatas';
import HourlyCard from './Components/Hourly/HourlyCard';
import DailyCard from './Components/Daily/DailyCard';
import FavoriteCities from './Context/FavoriteCities';
import getValidDate from './HelperFunctions/getValidDate';

function App() {
  const [weather, setWeather] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [noFound, setNoFound] = useState(false)
  const [error, setError] = useState(false);

  function goBackHandler () {
    setError(false)
    setNoFound(false)
    setIsLoading(true)
    getLocation();
  }

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
    if (!res.ok) setError(true);
    const data = await res.json();
    if (!res.ok && data.error.code == 1006) setNoFound(true);
    setWeather(data);
    setIsLoading(false);
  }

  if (isLoading) {
    return (
      <div className={styles['loading-container']}>
        <div className={styles['lds-ring']}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>  
      </div>
    )
  }

  if (noFound) {
    return (
      <div className={styles['not-found_container']}>
        <p>City not found</p>
        <button onClick={goBackHandler} className={styles['not-found_button']}>Go back</button>
      </div>
    )
  }

  if (error) {
    return (
      <div className={styles['error-container']}>
        <p>Something went wrong</p>
      </div>
    )
  }

  return (
    <FavoriteCities>
    <Menu func={getSearchLink}></Menu>
    <div className={styles.container}>
      <Header location={weather.location}></Header>
      <div className={styles['current-container']}>
        <CurrentTemperature current={weather.current}></CurrentTemperature>
        <div className={styles.line}></div>
        <CurrentDatas 
          weather={weather.forecast.forecastday[0]} 
          date={weather.location.localtime}>
        </CurrentDatas>
      </div>
      <p className={styles['section-title']}>Today's weather</p>
      <div className={styles['hourly-container']}>
        {weather.forecast.forecastday[0].hour.map((item, index) =>
          getValidDate(weather.location.localtime) < getValidDate(item.time) && 
          getValidDate(weather.location.localtime).setHours(getValidDate(weather.location.localtime).getHours() + 8) > getValidDate(item.time) && 
          <HourlyCard 
            key={index} 
            hour={getValidDate(item.time).getHours()} 
            src={item.condition.icon} temp={Math.round(item.temp_c) + '°'}>
          </HourlyCard>
          )}
        {getValidDate(weather.location.localtime).getHours() >= 16 && weather.forecast.forecastday[1].hour.map((item, index) =>
          getValidDate(weather.location.localtime).getHours() - 16 >= index && 
          <HourlyCard 
            key={index} 
            hour={getValidDate(item.time).getHours()} 
            src={item.condition.icon} temp={Math.round(item.temp_c) + '°'}>
          </HourlyCard>
        )}  
      </div>
      <p className={styles['section-title']}>Next 4 days</p>
      {weather.forecast.forecastday.map((item, index) =>
        index > 0 && 
        <DailyCard 
          key={index} 
          weather={item}>
        </DailyCard>
      )}
    </div>
    </FavoriteCities>
  );
}

export default App;