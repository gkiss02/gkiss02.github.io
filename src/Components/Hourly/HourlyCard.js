import styles from './HourlyCard.module.css'
import { SettingsCTX } from '../../Context/Context';
import { useContext } from 'react';
import langDecider from '../../HelperFunctions/langDecider';

function HourlyCard (props) {
    const settings = useContext(SettingsCTX);
    const timeFormat = settings.timeFormat;
    const actualJson = langDecider(settings.language);

    function timeFormatter (date) {
        if (timeFormat == '24') return date;

        if (date < 12) return date + ' ' + actualJson.am;
        if (date > 12) return date - 12 + ' ' + actualJson.pm;
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