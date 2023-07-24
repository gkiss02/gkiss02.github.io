import styles from './CurrentTemperature.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function CurrentTemperature (props) {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faSun} className={styles.icon}/>
            <div className={styles['text-container']}>
                <p className={styles.temperature}>{Math.round(props.weather.main.temp)}°</p>
                <p className={styles.description}>{props.weather.weather[0].description}</p>
            </div>
        </div>
    )
}

export default CurrentTemperature;