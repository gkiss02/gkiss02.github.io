import styles from './Favorites.module.css'
import { useContext } from 'react';
import { FavoriteCitiesCTX, SettingsCTX } from '../../Context/Context';
import { Link } from 'react-router-dom';
import langDecider from '../../HelperFunctions/langDecider';

function Favorites (props) {
    const cities = useContext(FavoriteCitiesCTX);
    const lang = useContext(SettingsCTX).language;
    const actualJson = langDecider(lang);

    function clickHandle (event) {
        props.func(event.currentTarget.id);
    }

    return (
        <div className={styles.container}>
            {cities.arr.length === 0 ? 
            <p className={styles['no-items']}>{actualJson['no-favorites']}</p> :
            cities.arr.map(item =>
                <p key={item} className={styles.item} onClick={clickHandle} id={item}>
                    <Link to={'/'}>{item}</Link>
                </p>
            )}
        </div>
    )
}

export default Favorites;