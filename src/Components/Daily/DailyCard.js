import styles from './DailyCard.module.css'
import { SettingsCTX } from '../../Context/Context';
import { useContext } from 'react';
import DailyData from './DailyData'
import langDecider from '../../HelperFunctions/langDecider';

function DailyCard (props) {
    const date = new Date(props.weather.date);
    const settings = useContext(SettingsCTX);
    const lang = settings.language;
    const actualJson = langDecider(lang);
    const metric = settings.unit == 'metric';
    const tempUnit = metric ? '°C' : '°F';

    return (
        <div className={styles.container}>
            <DailyData 
                data={actualJson['days-short'][date.getDay()]} 
                description={`${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}.`}>
            </DailyData>
            <img src={props.weather.day.condition.icon} className={styles.icon}></img>
            <DailyData 
                data={`${Math.round(metric ? props.weather.day.mintemp_c : props.weather.day.mintemp_f)}${tempUnit}`} 
                description={actualJson.min}>
            </DailyData>
            <DailyData 
                data={`${Math.round(metric ? props.weather.day.maxtemp_c : props.weather.day.maxtemp_f)}${tempUnit}`}
                description={actualJson.max}>
            </DailyData>
            <DailyData 
                data={`${Math.round(metric ? props.weather.day.maxwind_kph : props.weather.day.maxwind_mph)}${metric ? actualJson.kph : actualJson.mph}`} 
                description={actualJson.wind}>
            </DailyData>
            <DailyData 
                data={props.weather.day.daily_chance_of_rain + '%'}  
                description={actualJson.rain}>
            </DailyData>
        </div>
    )
}

export default DailyCard;