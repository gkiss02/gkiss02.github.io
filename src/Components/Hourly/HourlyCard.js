import styles from './HourlyCard.module.css'
import { SettingsCTX } from '../../Context/Context';
import { useContext } from 'react';

function HourlyCard (props) {
    const timeFormat = useContext(SettingsCTX).timeFormat;

    function timeFormatter (date) {
        if (timeFormat == '24') return date;

        if (date < 12) return date + ' AM';
        if (date > 12) return date - 12 + ' PM';
    }

    return (
        <div className={styles.container}>
            <p>{timeFormatter(props.hour)}</p>
            <img src={props.src} className={styles.icon}></img>
            <p>{props.temp}</p>
        </div>
    )
}

export default HourlyCard;