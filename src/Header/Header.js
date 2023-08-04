import { useRef, useState } from 'react';

import styles from './Header.module.css'

import getValidDate from '../HelperFunctions/getValidDate';

function Header (props) {

    const date = getValidDate(props.location.localtime);
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.location}>{props.location.name}, {props.location.country}</p>
                <p className={styles.date}>{daysOfWeek[date.getDay()]} {date.getDate()} {months[date.getMonth()]}</p>
            </div>
        </div>
    )
}

export default Header;