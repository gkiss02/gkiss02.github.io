import styles from './DailyCard.module.css'
import { SettingsCTX } from '../../Context/Context';
import { useContext } from 'react';
import DailyData from './DailyData'

function DailyCard (props) {
    const date = new Date(props.weather.date);
    const metric = useContext(SettingsCTX).unit == 'Metric';
    const tempUnit = metric ? '°C' : '°F';
    return (
        <div className={styles.container}>
            <DailyData 
                data={date.toString().split(' ')[0]} 
                description={`${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}.`}>
            </DailyData>
            <img src={props.weather.day.condition.icon} className={styles.icon}></img>
            <DailyData 
                data={`${Math.round(metric ? props.weather.day.mintemp_c : props.weather.day.mintemp_f)}${tempUnit}`} 
                description='Low'>
            </DailyData>
            <DailyData 
                data={`${Math.round(metric ? props.weather.day.maxtemp_c : props.weather.day.maxtemp_f)}${tempUnit}`}
                description='High'>
            </DailyData>
            <DailyData 
                data={`${Math.round(metric ? props.weather.day.maxwind_kph : props.weather.day.maxwind_mph)}${metric ? 'kph' : 'mph'}`} 
                description='Wind'>
            </DailyData>
            <DailyData 
                data={props.weather.day.daily_chance_of_rain + '%'}  
                description='Rain'>
            </DailyData>
        </div>
    )
}

export default DailyCard;