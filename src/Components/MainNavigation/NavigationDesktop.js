import Search from '../Search/Search';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Favorites from './Favorites';
import { NavLink } from 'react-router-dom';
import { WeatherDataCTX, SettingsCTX } from '../../Context/Context';
import langDecider from '../../HelperFunctions/langDecider';
import { useContext, useState } from 'react';
import styles from './NavigationDesktop.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function NavigationDesktop (props) {
    const [visibility, setVisibility] = useState(false)
    const weatherData = useContext(WeatherDataCTX);
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

    function mouseEnterHandler () {
        setVisibility(true)
    }

    function mouseLeaveHandler () {
        setVisibility(false)
    }
    return (
        <div className={styles.container}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.location} onClick={props.backToMyLocation} title='Show my location'/>
            <Search></Search>
            <div className={styles['menu-items_container']}>
                <div 
                    className={styles['menu-item']}
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}>
                    <div className={styles.favorites}>
                        <p>{actualJson.favorites}</p>
                        {visibility && <Favorites func={weatherData.getSearchLink}></Favorites>}
                    </div>
                </div>
                <NavLink to={'/settings'}>
                    <div className={styles['menu-item']}>
                        <li>{actualJson.settings}</li>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default NavigationDesktop;