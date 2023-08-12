import styles from './CurrentDatas.module.css'
import CurrentDataItem from './CurrentDataItem';
import getValidDate from '../../HelperFunctions/getValidDate';
import { useContext } from 'react';
import { SettingsCTX } from '../../Context/Context';

function CurrentDatas (props) {
    const settings = useContext(SettingsCTX);
    const getHour = props.weather.hour[getValidDate(props.date).getHours()];
    const metric = settings.unit == 'Metric';
    const tempUnit = metric ? '°C' : '°F';

    function dateFormatter (date) {
        const time = date.toString().split(' ')[0];
        const section = date.toString().split(' ')[1];
    
        if (section === 'PM' && settings.timeFormat == '24') {
            const hour = Number(time.split(':')[0]) + 12;
            return hour + ':' +time.split(':')[1];
        }
        return time + (settings.timeFormat == 12 ? ' ' + section : '')
    }
    
    return (
        <div className={styles.container}>
            <CurrentDataItem 
                data={`${Math.round(metric ? props.weather.day.maxtemp_c : props.weather.day.maxtemp_f)}${tempUnit}`} 
                description='Max temp'>
            </CurrentDataItem>
            <CurrentDataItem 
                data={`${Math.round(metric ? getHour.wind_kph : getHour.wind_mph)}${metric ? 'kph' : 'mph'}`} 
                description='Wind'>
            </CurrentDataItem>
            <CurrentDataItem 
                data={dateFormatter(props.weather.astro.sunrise)} 
                description='Sunrise'>
            </CurrentDataItem>
            <CurrentDataItem 
                data={`${Math.round(metric ? props.weather.day.mintemp_c : props.weather.day.mintemp_f)}${tempUnit}`} 
                description='Min temp'>
            </CurrentDataItem>
            <CurrentDataItem 
                data={Math.round(props.weather.day.daily_chance_of_rain) + '%'} 
                description='Rain'>
            </CurrentDataItem>
            <CurrentDataItem 
                data={dateFormatter(props.weather.astro.sunset)} 
                description='Sunset'>
            </CurrentDataItem>
        </div>
    )
}

export default CurrentDatas;