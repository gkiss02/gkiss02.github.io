import styles from './Modal.module.css'
import { createPortal } from "react-dom"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { useContext } from 'react';
import langDecider from '../../HelperFunctions/langDecider';
import {SettingsCTX} from '../../Context/Context';

function Modal (props) {
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

    return (
        createPortal(
            <div className={styles.container} onClick={props.modalHandler}>
                <div className={styles['modal-container']} onClick={event => event.stopPropagation()}>
                    <div className={styles['header-container']}>
                        <h2>{actualJson['are-you-sure']}</h2>
                        <FontAwesomeIcon icon={faX} color='black' style={{cursor: 'pointer'}} onClick={props.modalHandler}/>
                    </div>
                    <p className={styles.text}>{actualJson['modal-text']}</p>
                    <div className={styles['button-container']}>
                        <button className={`${styles.button} ${styles['no-button']}`} onClick={props.modalHandler}>{actualJson.no}</button>
                        <button className={`${styles.button} ${styles['yes-button']}`} onClick={props.clearLocalStorage}>{actualJson.yes}</button>
                    </div>
                </div>
            </div>
            ,document.body
        )
    )
}

export default Modal;