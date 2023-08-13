import styles from './Header.module.css'
import { useState, useContext } from 'react';
import { FavoriteCitiesCTX, SettingsCTX } from '../../Context/Context';
import getValidDate from '../../HelperFunctions/getValidDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty} from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartFilled} from '@fortawesome/free-solid-svg-icons'
import langDecider from '../../HelperFunctions/langDecider';

function Header (props) {
    const date = getValidDate(props.location.localtime);

    const [visibility, setVisibility] = useState(true)
    const cities = useContext(FavoriteCitiesCTX);
    const cityName = props.location.name
    const isFavorite = cities.arr.includes(cityName)
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

    function addCityHandler () {
        const arr = []
        for (let i = 0; i < cities.arr.length; i++) {
            arr[i] = cities.arr[i]
        }
        arr.push(cityName);
        cities.citySetter(arr)
    }

    function removeCityHandler () {
        const arr = cities.arr.filter(item => item != cityName)
        cities.citySetter(arr)
    }
    
    function mouseEnterHandler () {
        setVisibility(false)
    }

    function mouseLeaveHandler () {
        setVisibility(true)
    }

    return (
        <div className={styles.container}>
            <div>
                <p className={styles.location}>{cityName}, {props.location.country}</p>
                <p className={styles.date}>{actualJson.days[date.getDay()]} {date.getDate()} {actualJson.months[date.getMonth()]}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={heartEmpty} 
                    className={styles.icon} 
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler}  
                    style={{visibility: !isFavorite || visibility ? 'visible' : 'hidden'}}/>
                <FontAwesomeIcon icon={heartFilled} 
                    className={styles.icon} 
                    onMouseEnter={mouseEnterHandler}
                    onMouseLeave={mouseLeaveHandler} 
                    onClick={isFavorite ? removeCityHandler : addCityHandler}
                    style={{visibility: isFavorite || !visibility ? 'visible' : 'hidden'}}
                    color='red'/>    
            </div>
        </div>
    )
}

export default Header;