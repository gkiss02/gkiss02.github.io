import styles from './App.module.css';

import Header from './Header/Header'
import CurrentTemperature from './Current/CurrentTemperature';
import CurrentDatas from './Current/CurrentDatas';
import HourlyCard from './Hourly/HourlyCard';
import DailyCard from './Daily/DailyCard';

function App() {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles['current-container']}>
        <CurrentTemperature></CurrentTemperature>
        <div className={styles.line}></div>
        <CurrentDatas></CurrentDatas>
      </div>
      <p className={styles['section-title']}>Today's weather</p>
      <div className={styles['hourly-container']}>
        <HourlyCard hour='6am' temp='20°'></HourlyCard>
        <HourlyCard hour='7am' temp='20°'></HourlyCard>
        <HourlyCard hour='8am' temp='20°'></HourlyCard>
        <HourlyCard hour='9am' temp='20°'></HourlyCard>
        <HourlyCard hour='10am' temp='20°'></HourlyCard>
        <HourlyCard hour='11am' temp='20°'></HourlyCard>
        <HourlyCard hour='12am' temp='20°'></HourlyCard>
      </div>
      <p className={styles['section-title']}>Next 5 days</p>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
      <DailyCard></DailyCard>
    </div>
  );
}

export default App;
