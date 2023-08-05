import { useState } from 'react';
import { FavoriteCitiesCTX } from './Context'

function FavoriteCities(props) {
    const example =['Sárvár', 'Sitke', 'Vép']
    const [cities, setCities] = useState(
        localStorage.getItem('favoriteCities')  == null ? [] : JSON.parse(localStorage.getItem('favoriteCities'))
    )

    const obj = {
        arr: cities,
        citySetter: (item) => {
            setCities(item)
            localStorage.setItem('favoriteCities', JSON.stringify(item))
        },
    }

    return (
        <FavoriteCitiesCTX.Provider value={obj}>
            {props.children}
        </FavoriteCitiesCTX.Provider>
    )
}

export default  FavoriteCities;