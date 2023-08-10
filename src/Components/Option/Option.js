import styles from './Option.module.css';

function Option(props) {
    return (
        <div className={styles.container}>
            <p>{props.name}:</p>
            <select className={styles.select}>
                {props.options.map(item => 
                    <option key={item} value={item}>{item}</option>
                )}
            </select>
        </div>
    )
}

export default Option;