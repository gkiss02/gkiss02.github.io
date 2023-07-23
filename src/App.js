import styles from './App.module.css';

import Header from './Header/Header'
import CurrentTemperature from './Current/CurrentTemperature';

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <CurrentTemperature></CurrentTemperature>
    </div>
  );
}

export default App;
