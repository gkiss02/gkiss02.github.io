import styles from './Search.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { WeatherDataCTX } from '../../Context/Context';


function Search (props) {
    const navigate = useNavigate();
    const search = useRef()
    const weatherData = useContext(WeatherDataCTX);

    function searchHandler(event) {
        if (event.key == 'Enter' || event.type == 'click') {
            weatherData.getSearchLink(search.current.value);
            search.current.value = '';
            navigate('/')
            if (props.clickHandle != undefined) props.clickHandle();
        }
    }

    return (
        <div className={styles['search-container']}>
            <input type='text' className={styles['search-bar']} placeholder='New York' onKeyDown={searchHandler} ref={search}></input>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={styles['search-icon']} onClick={searchHandler}/>
        </div>
    )
}

export default Search;