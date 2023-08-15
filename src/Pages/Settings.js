import styles from "./Settings.module.css";
import { Link, useNavigate } from "react-router-dom";
import Option from "../Components/Option/Option";
import { useContext, useState } from "react";
import { SettingsCTX, FavoriteCitiesCTX } from '../Context/Context';
import langDecider from "../HelperFunctions/langDecider";
import Modal from "../Components/Modal/Modal";

function Settings() {
    const settings = useContext(SettingsCTX);
    const favoriteCities = useContext(FavoriteCitiesCTX);
    const [editedTimeFormat, setEditedTimeFormat] = useState(settings.timeFormat);
    const [editedLanguage, setEditedLanguage] = useState(settings.language);
    const [editedUnit, setEditedUnit] = useState(settings.unit);
    const [modal, setModal] = useState(false);
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

    function modalHandler () {
        setModal(!modal);
    }

    function clearLocalStorage () {
        setModal(!modal);
        settings.languageSetter('EN')
        settings.timeFormatSetter('24')
        settings.unitSetter('metric')
        favoriteCities.citySetter([]);
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
                    options={[['12', '12'], ['24', '24']]} 
                    func={getTimeFormat} 
                    default={settings.timeFormat}>
                </Option>
                <Option 
                    name={actualJson.language} 
                    options={[['EN', 'EN'], ['HU', 'HU']]} 
                    func={getLanguage} 
                    default={settings.language}>
                </Option>
                <Option 
                    name={actualJson.unit} 
                    options={[['metric', actualJson.metric], ['imperial', actualJson.imperial]]} 
                    func={getMetric} 
                    default={settings.unit}>
                </Option>
                <button className={styles.clear} onClick={modalHandler}>{actualJson["clear-local-storage"]}</button>
                {modal && <Modal modalHandler={modalHandler} clearLocalStorage={clearLocalStorage}></Modal>}
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