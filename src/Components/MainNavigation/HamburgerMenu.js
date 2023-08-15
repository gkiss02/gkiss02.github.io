import styles from './HamburgerMenu.module.css';
import { NavLink } from 'react-router-dom';
import Search from '../Search/Search';
import langDecider from '../../HelperFunctions/langDecider';
import { useContext } from 'react';
import { SettingsCTX } from '../../Context/Context';

function HamburgerMenu (props) {
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

    function clickHandle () {
        props.clickHandle();
        props.backToMyLocation();
    }

    return (
        <div className={styles['click-out']} onClick={props.clickHandle}>
            <div className={styles.container} onClick={event => event.stopPropagation()}>
                <Search clickHandle={props.clickHandle}></Search>
                <div className={styles['menu-list']}>
                    <div className={styles.line}></div>
                    <div className={styles['menu-item']} onClick={clickHandle}>{actualJson['show-my-location']}</div>
                    <div className={styles.line}></div>
                    <NavLink to={'/favorites'} onClick={props.clickHandle}>
                        <div className={styles['menu-item']}>
                            <div>{actualJson.favorites}</div>
                        </div>
                    </NavLink>
                    <div className={styles.line}></div>
                    <NavLink to={'/settings'} onClick={props.clickHandle}>
                        <div className={styles['menu-item']}>
                            <div>{actualJson.settings}</div>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default HamburgerMenu;