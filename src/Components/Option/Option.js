import styles from './Option.module.css';

function Option(props) {
    function changeHandler(event) {
        props.func(event.target.value)
        console.log(event.target.value);
    }

    return (
        <div className={styles.container}>
            <p>{props.name}:</p>
            <select className={styles.select} onChange={changeHandler}>
                {props.options.map(item => 
                    <option key={item} value={item[0]} selected={props.default == item[0]}>{item[1]}</option>
                )}
            </select>
        </div>
    )
}

export default Option;