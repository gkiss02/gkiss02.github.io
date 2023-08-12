import { useContext } from 'react';
import styles from './Weather.module.css';
import Header from '../Components/Header/Header'
import CurrentTemperature from '../Components/Current/CurrentTemperature';
import CurrentDatas from '../Components/Current/CurrentDatas';
import HourlyCard from '../Components/Hourly/HourlyCard';
import DailyCard from '../Components/Daily/DailyCard';
import getValidDate from '../HelperFunctions/getValidDate';
import { WeatherDataCTX } from '../Context/Context';

function Weather() {
    const weather = useContext(WeatherDataCTX);
    const weatherData =weather.weather;

    if (weather.isLoading) {
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

    if (weather.noFound) {
        return (
            <div className={styles['not-found_container']}>
                <p>City not found</p>
                <button onClick={weather.goBackHandler} className={styles['not-found_button']}>Go back</button>
        </div>
        )
    }

    if (weather.error) {
        return (
            <div className={styles['error-container']}>
                <p>Something went wrong</p>
            </div>
        )
    }

    return (
        <div className={styles.container}>
            <Header location={weatherData.location}></Header>
            <div className={styles['current-container']}>
                <CurrentTemperature current={weatherData.current}></CurrentTemperature>
                <div className={styles.line}></div>
                <CurrentDatas 
                    weather={weatherData.forecast.forecastday[0]} 
                    date={weatherData.location.localtime}>
                </CurrentDatas>
            </div>
            <p className={styles['section-title']}>Today's weather</p>
            <div className={styles['hourly-container']}>
                {weatherData.forecast.forecastday[0].hour.map((item, index) =>
                    getValidDate(weatherData.location.localtime) < getValidDate(item.time) && 
                    getValidDate(weatherData.location.localtime).setHours(getValidDate(weatherData.location.localtime).getHours() + 8) > getValidDate(item.time) && 
                    <HourlyCard 
                        key={index} 
                        hour={getValidDate(item.time).getHours()} 
                        src={item.condition.icon} temp={Math.round(item.temp_c) + '°'}>
                    </HourlyCard>
                )}
                {getValidDate(weatherData.location.localtime).getHours() >= 16 && weatherData.forecast.forecastday[1].hour.map((item, index) =>
                    getValidDate(weatherData.location.localtime).getHours() - 16 >= index && 
                    <HourlyCard 
                        key={index} 
                        hour={getValidDate(item.time).getHours()} 
                        src={item.condition.icon} temp={Math.round(item.temp_c) + '°'}>
                    </HourlyCard>
                )}  
            </div>
            <p className={styles['section-title']}>Next 4 days</p>
                {weatherData.forecast.forecastday.map((item, index) =>
                    index > 0 && 
                    <DailyCard 
                        key={index} 
                        weather={item}>
                    </DailyCard>
                )}
        </div>
    );
}

export default Weather;