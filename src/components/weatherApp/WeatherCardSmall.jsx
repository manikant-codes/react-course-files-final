import React from "react";
import styles from "../../styles/weatherApp/weatherCardSmall.module.css";
import { getWeatherIcon, kelvinToCelcius } from "../../helpers/weatherHelpers";

function WeatherCardSmall(props) {
  const { temp, icon, weather } = props;
  return (
    <div className={styles.cardContainer}>
      <p className={styles.temp}>{kelvinToCelcius(temp)}°</p>
      <img src={getWeatherIcon(icon)} alt="" className={styles.icon} />
      <p className={styles.weather}>{weather}</p>
    </div>
  );
}

export default WeatherCardSmall;
