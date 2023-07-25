import styles from './DailyData.module.css'

function DailyData(props) {
    return (
        <div className={styles.container}>
            <p>{props.data}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}

export default DailyData;