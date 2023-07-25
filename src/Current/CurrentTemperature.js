import styles from './CurrentTemperature.module.css'

function CurrentTemperature (props) {
    return (
        <div className={styles.container}>
            <img src={props.current.condition.icon} className={styles.icon}></img>
            <div className={styles['text-container']}>
                <p className={styles.temperature}>{Math.round(props.current.temp_c)}<span className={styles['celsius-sign']}>°</span></p>
                <p className={styles.description}>{props.current.condition.text}</p>
            </div>
        </div>
    )
}

export default CurrentTemperature;