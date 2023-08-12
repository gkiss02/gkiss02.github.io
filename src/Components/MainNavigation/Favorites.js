import styles from './Favorites.module.css'
import { useContext } from 'react';
import { FavoriteCitiesCTX } from '../../Context/Context';
import { Link } from 'react-router-dom';

function Favorites (props) {
    const cities = useContext(FavoriteCitiesCTX);

    function clickHandle (event) {
        props.func(event.currentTarget.id);
    }

    return (
        <div className={styles.container}>
            {cities.arr.length === 0 ? 
            <p className={styles['no-items']}>No favorites yet, add some!</p> :
            cities.arr.map(item =>
                <p key={item} className={styles.item} onClick={clickHandle} id={item}>
                    <Link to={'/'}>{item}</Link>
                </p>
            )}
        </div>
    )
}

export default Favorites;