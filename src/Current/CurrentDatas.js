import styles from './CurrentDatas.module.css'

import CurrentDataItem from './CurrentDataItem';

function CurrentDatas () {
    return (
        <div className={styles.container}>
            <CurrentDataItem data='23°' description='Max temp'></CurrentDataItem>
            <CurrentDataItem data='7mph' description='Wind'></CurrentDataItem>
            <CurrentDataItem data='05:27' description='Sunrise'></CurrentDataItem>
            <CurrentDataItem data='14°' description='Min temp'></CurrentDataItem>
            <CurrentDataItem data='0%' description='Rain'></CurrentDataItem>
            <CurrentDataItem data='20:57' description='Sunset'></CurrentDataItem>
        </div>
    )
}

export default CurrentDatas;