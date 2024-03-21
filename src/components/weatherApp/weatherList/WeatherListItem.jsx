import React from "react";
import styles from "../../../styles/weatherApp/weatherList.module.css";
import {
  getDayFormDate,
  getWeatherCondition,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../../helpers/weatherHelper";

function WeatherListItem(props) {
  const { weather, setWeather } = props;

  console.log("weather", weather);

  return (
    <div
      className={styles.listItem}
      onClick={() => {
        setWeather(weather);
      }}
    >
      <p className={styles.day}>{getDayFormDate(weather.dt_txt)}</p>
      <div className={styles.iconContainer}>
        <img src={getWeatherIcon(weather)} alt="" />
        <p>{getWeatherCondition(weather)}</p>
      </div>
      <p className={styles.temp}>{kelvinToCelcius(weather.main.temp)}</p>
    </div>
  );
}

export default WeatherListItem;
