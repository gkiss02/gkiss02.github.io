import { useRef, useState } from 'react';

import styles from './Header.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'

function Header (props) {
    const[visibility, setVisibility] = useState(true);

    const search = useRef();

    function searchHandler(event) {
        if (event.key == 'Enter') props.func(search.current.value);
    }

    function visibilityHandler() {
        setVisibility(!visibility)
    }

    const date = new Date(props.location.localtime);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.location}>{props.location.name}, {props.location.country}</p>
                <p className={styles.date}>{daysOfWeek[date.getDay()]} {date.getDate()} {months[date.getMonth()]}</p>
            </div>
            {visibility && 
            <div className={styles['search-icon_container']} onClick={visibilityHandler}>
                <FontAwesomeIcon icon={faMagnifyingGlass} size='3x' color='rgb(43,50,178)'/>
            </div>}
                {!visibility &&
                <div className={styles['search-bar_container']}>
                    <input type='text' className={styles['search-bar']} placeholder='New York' onKeyDown={searchHandler} ref={search}></input>
                    <span className={styles['search-close']} onClick={visibilityHandler}>
                        <FontAwesomeIcon icon={faX}/>
                    </span>
                </div>}
        </div>
    )
}

export default Header;