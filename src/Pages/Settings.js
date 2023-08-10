import styles from "./Settings.module.css";
import { Link } from "react-router-dom";
import Option from "../Components/Option/Option";
import { FavoriteCitiesCTX } from '../Context/Context';
import { useContext } from "react";

function Settings() {
    return (
        <div className={styles.container}>
            <Link to={'/'} className={styles.link}>
                <span>&larr;</span>
            </Link>
            <div className={styles['settings-container']}>
                <Option name={'Time format'} options={['12', '24']}></Option>
                <Option name={'Language'} options={['ENG', 'HUN']}></Option>
                <Option name={'Unit'} options={['Imperial', 'Metric']}></Option>
                <button className={styles.clear}>Clear favorites</button>
                <div className={styles['button-container']}>
                    <Link to={'/'} className={styles.link}>
                        <button className={`${styles.cancel} ${styles.button}`}>Cancel</button>
                    </Link>
                    <Link to={'/'} className={styles.link}>
                        <button className={`${styles.save} ${styles.button}`}>Save</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Settings;