import styles from './DailyCard.module.css'

import DailyData from './DailyData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-regular-svg-icons'

function DailyCard () {
    return (
        <div className={styles.container}>
            <DailyData data='Tue' description='07.30'></DailyData>
            <FontAwesomeIcon icon={faSun} size='3x'/>
            <DailyData data='10°' description='Low'></DailyData>
            <DailyData data='21°' description='High'></DailyData>
            <DailyData data='12mph' description='Wind'></DailyData>
            <DailyData data='0%' description='Rain'></DailyData>
        </div>
    )
}

export default DailyCard;