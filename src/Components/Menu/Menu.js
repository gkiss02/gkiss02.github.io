import styles from './Menu.module.css'
import { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSunRain } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import Favorites from './Favorites';

function Menu (props) {
    const search = useRef()
    const [visibility, setVisibility] = useState(false)

    function searchHandler(event) {
        if (event.key == 'Enter' || event.type == 'click') props.getSearch(search.current.value);
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
                <FontAwesomeIcon icon={faLocationDot} className={styles.location} onClick={props.getLocation}title='Show my location'/>
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
                            <p>Favorites</p>
                            {visibility && <Favorites func={props.getSearch}></Favorites>}
                        </div>
                    </div>
                    <div className={styles['menu-item']}>
                        <p>Settings</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;