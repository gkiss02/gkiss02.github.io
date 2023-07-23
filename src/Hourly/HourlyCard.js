import styles from './HourlyCard.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function HourlyCard (props) {
    return (
        <div className={styles.container}>
            <p>{props.hour}</p>
            <FontAwesomeIcon icon={faSun} size='3x'/>
            <p>{props.temp}</p>
        </div>
    )
}

export default HourlyCard;