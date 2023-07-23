import styles from './CurrentTemperature.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function CurrentTemperature () {
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faSun} className={styles.icon}/>
            <div className={styles['text-container']}>
                <p className={styles.temperature}>21°</p>
                <p className={styles.description}>Mostly sunny</p>
            </div>
        </div>
    )
}

export default CurrentTemperature;