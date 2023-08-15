import styles from './FavoritesPage.module.css';
import {FavoriteCitiesCTX, WeatherDataCTX, SettingsCTX} from "../Context/Context";
import { useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import langDecider from '../HelperFunctions/langDecider';

function FavoritesPage () {
    const favoriteCities = useContext(FavoriteCitiesCTX);
    const weatherData = useContext(WeatherDataCTX);
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

    function clickHandle (event) {
        weatherData.getSearchLink(event.target.innerText);
    }

    function removeCityHandler (event) {
        const arr = favoriteCities.arr.filter(item => item != event.target.id)
        favoriteCities.citySetter(arr)
    }

    return (
        <div className={styles.container}>
            <Link to={'/'} className={styles.link}>
                <span>&larr;</span>
            </Link>
            {favoriteCities.arr.length === 0 ? 
                <p className={styles['no-items']}>{actualJson['no-favorites']}</p> :
                <div className={styles['favorites-container']}>
                {favoriteCities.arr.map(item => 
                <div className={styles['item-container']}>
                    <p onClick={clickHandle}>
                        <Link to={'/'}>{item}</Link>
                    </p>
                    <FontAwesomeIcon icon={faX} className={styles.icon} onClick={removeCityHandler} id={item}/>
                </div>)}
        </div>}
        </div>
    )
}

export default FavoritesPage;