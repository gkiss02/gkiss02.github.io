import styles from './MainNavigation.module.css';
import { useContext, useRef, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Favorites from './Favorites';
import { NavLink, useNavigate } from 'react-router-dom';
import { WeatherDataCTX, SettingsCTX } from '../../Context/Context';
import langDecider from '../../HelperFunctions/langDecider';

function Menu () {
    const search = useRef()
    const [visibility, setVisibility] = useState(false)
    const weatherData = useContext(WeatherDataCTX);
    const navigate = useNavigate();
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);
    
    function searchHandler(event) {
        if (event.key == 'Enter' || event.type == 'click') {
            weatherData.getSearchLink(search.current.value);
            search.current.value = '';
            navigate('/')
        }
    }

    function backToMyLocation () {
        weatherData.getLocation()
        navigate('/')
    }

    function mouseEnterHandler () {
        setVisibility(true)
    }

    function mouseLeaveHandler () {
        setVisibility(false)
    }

    return(
        <div className={styles.container}>
            <div className={styles.logo}>
                <FontAwesomeIcon icon={faCloudSunRain} size='2x' color='white'/>
                <p>Weather App</p>
            </div>
            <div className={styles['menu-container']}>
                <FontAwesomeIcon icon={faLocationDot} className={styles.location} onClick={backToMyLocation}title='Show my location'/>
                <div className={styles['search-container']}>
                    <input type='text' className={styles['search-bar']} placeholder='New York' onKeyDown={searchHandler} ref={search}></input>
                    <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} onClick={searchHandler}/>
                </div>
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
        </div>
    )
}

export default Menu;