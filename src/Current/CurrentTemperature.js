import styles from './CurrentTemperature.module.css'

function CurrentTemperature () {
    return (
        <div className={styles.container}>

            <div>
                <p>21°</p>
                <p>Mostly sunny</p>
            </div>
        </div>
    )
}

export default CurrentTemperature;