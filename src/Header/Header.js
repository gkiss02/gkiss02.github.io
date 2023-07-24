import styles from './Header.module.css'

function Header (props) {
    const date = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return (
        <>
            <p className={styles.location}>{props.location.name}, {props.location.country}</p>
            <p className={styles.date}>{daysOfWeek[date.getDay()]} {date.getDate()} {months[date.getMonth()]}</p>
        </>
    )
}

export default Header;