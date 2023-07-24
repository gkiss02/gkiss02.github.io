import styles from './CurrentDatas.module.css'

import CurrentDataItem from './CurrentDataItem';

function convertMillisecondsToTime(utc) {
    const date = new Date(utc)
    console.log(date);
  }
  

function CurrentDatas (props) {
    return (
        <div className={styles.container}>
            <CurrentDataItem data={Math.round(props.weather.main.temp_max) + '°'} description='Max temp'></CurrentDataItem>
            <CurrentDataItem data={Math.round(props.weather.wind.speed) + 'kph'} description='Wind'></CurrentDataItem>
            <CurrentDataItem data={convertMillisecondsToTime(props.city.sunrise)} description='Sunrise'></CurrentDataItem>
            <CurrentDataItem data={Math.round(props.weather.main.temp_min) + '°'} description='Min temp'></CurrentDataItem>
            <CurrentDataItem data={Math.round(props.weather.pop * 100) + '%'} description='Rain'></CurrentDataItem>
            <CurrentDataItem data={convertMillisecondsToTime(props.city.sunset)} description='Sunset'></CurrentDataItem>
        </div>
    )
}

export default CurrentDatas;