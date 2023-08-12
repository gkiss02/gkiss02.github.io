import styles from "./Settings.module.css";
import { Link, useNavigate } from "react-router-dom";
import Option from "../Components/Option/Option";
import { useContext, useState } from "react";
import { SettingsCTX, FavoriteCitiesCTX } from '../Context/Context';

function Settings() {
    const settings = useContext(SettingsCTX);
    const [editedTimeFormat, setEditedTimeFormat] = useState(settings.timeFormat);
    const [editedLanguage, setEditedLanguage] = useState(settings.language);
    const [editedUnit, setEditedUnit] = useState(settings.unit);
    const navigate = useNavigate();

    function getTimeFormat (edit) {
        setEditedTimeFormat(edit);
    }

    function getLanguage (edit) {
        setEditedLanguage(edit);
    }

    function getMetric (edit) {
        setEditedUnit(edit);
    }

    function saveHandler () {
        settings.timeFormatSetter(editedTimeFormat);
        settings.languageSetter(editedLanguage);
        settings.unitSetter(editedUnit);
        navigate('/');
    }

    return (
        <div className={styles.container}>
            <Link to={'/'} className={styles.link}>
                <span>&larr;</span>
            </Link>
            <div className={styles['settings-container']}>
                <Option name={'Time format'} options={['12', '24']} func={getTimeFormat} default={settings.timeFormat}></Option>
                <Option name={'Language'} options={['eng', 'hu']} func={getLanguage} default={settings.language}></Option>
                <Option name={'Unit'} options={['Imperial', 'Metric']} func={getMetric} default={settings.unit}></Option>
                <button className={styles.clear}>Clear favorites</button>
                <div className={styles['button-container']}>
                    <Link to={'/'} className={styles.link}>
                        <button className={`${styles.cancel} ${styles.button}`}>Cancel</button>
                    </Link>
                        <button className={`${styles.save} ${styles.button}`} onClick={saveHandler} >Save</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;