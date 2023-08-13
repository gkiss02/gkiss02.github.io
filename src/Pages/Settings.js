import styles from "./Settings.module.css";
import { Link, useNavigate } from "react-router-dom";
import Option from "../Components/Option/Option";
import { useContext, useState } from "react";
import { SettingsCTX, FavoriteCitiesCTX } from '../Context/Context';
import langDecider from "../HelperFunctions/langDecider";

function Settings() {
    const settings = useContext(SettingsCTX);
    const [editedTimeFormat, setEditedTimeFormat] = useState(settings.timeFormat);
    const [editedLanguage, setEditedLanguage] = useState(settings.language);
    const [editedUnit, setEditedUnit] = useState(settings.unit);
    const navigate = useNavigate();
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

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
                <Option 
                    name={actualJson["time-format"]} 
                    options={['12', '24']} 
                    func={getTimeFormat} 
                    default={settings.timeFormat}>
                </Option>
                <Option 
                    name={actualJson.language} 
                    options={['en', 'hu']} 
                    func={getLanguage} 
                    default={settings.language}>
                </Option>
                <Option 
                    name={actualJson.unit} 
                    options={[actualJson.metric, actualJson.imperial]} 
                    func={getMetric} 
                    default={settings.unit}>
                </Option>
                <button className={styles.clear}>{actualJson["clear-favorites"]}</button>
                <div className={styles['button-container']}>
                    <Link to={'/'} className={styles.link}>
                        <button className={`${styles.cancel} ${styles.button}`}>{actualJson.cancel}</button>
                    </Link>
                        <button className={`${styles.save} ${styles.button}`} onClick={saveHandler}>{actualJson.save}</button>
                </div>
            </div>
        </div>
    );
}

export default Settings;