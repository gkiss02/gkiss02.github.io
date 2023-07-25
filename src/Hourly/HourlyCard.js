import styles from './HourlyCard.module.css'

function HourlyCard (props) {
    return (
        <div className={styles.container}>
            <p>{props.hour}</p>
            <img src={props.src} className={styles.icon}></img>
            <p>{props.temp}</p>
        </div>
    )
}

export default HourlyCard;