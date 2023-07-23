import styles from './Header.module.css'

function Header () {
    return (
        <>
            <p className={styles.location}>Sitke, HU</p>
            <p className={styles.date}>Sunday 23 July</p>
        </>
    )
}

export default Header;