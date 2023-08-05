import styles from './CurrentDatas.module.css'

import CurrentDataItem from './CurrentDataItem';

import getValidDate from '../../HelperFunctions/getValidDate';

function dateFormatter (date) {
    const time = date.toString().split(' ')[0];
    const section = date.toString().split(' ')[1];

    if (section === 'PM') {
        const hour = Number(time.split(':')[0]) + 12;
        return hour + ':' +time.split(':')[1];
    }
    return time;
}

function CurrentDatas (props) {
    return (
        <div className={styles.container}>
            <CurrentDataItem data={Math.round(props.weather.day.maxtemp_c) + '°'} description='Max temp'></CurrentDataItem>
            <CurrentDataItem data={Math.round(props.weather.hour[getValidDate(props.date).getHours()].wind_kph) + 'kph'} description='Wind'></CurrentDataItem>
            <CurrentDataItem data={dateFormatter(props.weather.astro.sunrise)} description='Sunrise'></CurrentDataItem>
            <CurrentDataItem data={Math.round(props.weather.day.mintemp_c) + '°'} description='Min temp'></CurrentDataItem>
            <CurrentDataItem data={Math.round(props.weather.day.daily_chance_of_rain) + '%'} description='Rain'></CurrentDataItem>
            <CurrentDataItem data={dateFormatter(props.weather.astro.sunset)} description='Sunset'></CurrentDataItem>
        </div>
    )
}

export default CurrentDatas;