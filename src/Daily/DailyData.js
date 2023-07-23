import styles from './DailyData.module.css'

function DailyData(props) {
    return (
        <div className={styles.container}>
            <p>{props.data}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default DailyData;