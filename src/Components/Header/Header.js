import styles from './Header.module.css'
import { useContext } from 'react';
import { FavoriteCitiesCTX, SettingsCTX } from '../../Context/Context';
import getValidDate from '../../HelperFunctions/getValidDate';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as heartEmpty} from '@fortawesome/free-regular-svg-icons'
import { faHeart as heartFilled} from '@fortawesome/free-solid-svg-icons'
import langDecider from '../../HelperFunctions/langDecider';

function Header (props) {
    const date = getValidDate(props.location.localtime);
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

    return (
        <div className={styles.container}>
            <div className={styles['location-container']}>
                <p className={styles.location}>{cityName}, {props.location.country}</p>
                <p className={styles.date}>{actualJson.days[date.getDay()]} {date.getDate()} {actualJson.months[date.getMonth()]}</p>
            </div>
            <div>
                <FontAwesomeIcon icon={isFavorite ? heartFilled: heartEmpty} 
                    className={styles.icon} 
                    onClick={isFavorite ? removeCityHandler : addCityHandler}
                    color={isFavorite ? 'red' : 'white'}/>  
            </div>
        </div>
    )
}

export default Header;