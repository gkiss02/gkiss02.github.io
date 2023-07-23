import styles from './App.module.css';

import Header from './Header/Header'
import CurrentTemperature from './Current/CurrentTemperature';
import CurrentDatas from './Current/CurrentDatas';

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles['current-container']}>
        <CurrentTemperature></CurrentTemperature>
        <div className={styles.line}></div>
        <CurrentDatas></CurrentDatas>
      </div>
    </div>
  );
}

export default App;
