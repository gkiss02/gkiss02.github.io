import styles from './CurrentDataItem.module.css'

function CurrentDataItem (props) {
    return (
        <div className={styles.container}>
            <p className={styles.data}>{props.data}</p>
            <p className={styles.description}>{props.description}</p> 
        </div>
    )
}

export default CurrentDataItem;