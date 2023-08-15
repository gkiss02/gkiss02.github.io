import styles from './MainNavigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain, faBars } from '@fortawesome/free-solid-svg-icons'
import NavigationDesktop from './NavigationDesktop';
import { useState, useContext } from 'react';
import HamburgerMenu from './HamburgerMenu';
import { useNavigate } from 'react-router-dom';
import { WeatherDataCTX } from '../../Context/Context';

function MainNavigation () {
    const [visible, setVisible] = useState(false);
    const navigate = useNavigate();
    const weatherData = useContext(WeatherDataCTX);

    function clickHandle () {
        setVisible(!visible);
    }

    function backToMyLocation () {
        weatherData.getLocation()
        navigate('/')
    }

    return(
        <>
        <div className={styles.container}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faCloudSunRain} size='2x' color='white'/>
                <p>Weather App</p>
            </div>
            <NavigationDesktop backToMyLocation={backToMyLocation}></NavigationDesktop>
            <FontAwesomeIcon icon={faBars} className={styles['hamburger-icon']} onClick={clickHandle}/>
        </div>
            {visible && <HamburgerMenu clickHandle={clickHandle} backToMyLocation={backToMyLocation}></HamburgerMenu>}
        </>
    )
}

export default MainNavigation;