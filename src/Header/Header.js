import { useRef } from 'react';

import styles from './Header.module.css'

function Header (props) {
    const search = useRef();

    function searchHandler(event) {
        if (event.key == 'Enter') props.func(search.current.value);
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
            <div>
                <input type='text' className={styles['search-bar']} placeholder='New York' onKeyDown={searchHandler} ref={search}></input>
            </div>
        </div>
    )
}

export default Header;