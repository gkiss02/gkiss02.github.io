import styles from './DailyCard.module.css'

import DailyData from './DailyData'

function DailyCard (props) {
    const date = new Date(props.weather.date);
    return (
        <div className={styles.container}>
            <DailyData 
                data={date.toString().split(' ')[0]} 
                description={`${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}.`}>
            </DailyData>
            <img src={props.weather.day.condition.icon} className={styles.icon}></img>
            <DailyData data={Math.round(props.weather.day.mintemp_c) + '°'} description='Low'></DailyData>
            <DailyData data={Math.round(props.weather.day.maxtemp_c) + '°'} description='High'></DailyData>
            <DailyData data={Math.round(props.weather.day.maxwind_kph) + 'kph'} description='Wind'></DailyData>
            <DailyData data={props.weather.day.daily_chance_of_rain + '%'}  description='Rain'></DailyData>
        </div>
    )
}

export default DailyCard;