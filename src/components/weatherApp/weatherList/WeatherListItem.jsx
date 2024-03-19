import React from "react";
import styles from "../../../styles/weatherApp/weatherList.module.css";
import { getDay } from "../../../helpers/dateHelper";
import {
  getWeatherIcon,
  kelvinToCelcius,
} from "../../../helpers/weatherHelpers";

function WeatherListItem(props) {
  const { weather } = props;
  console.log("weather", weather);
  return (
    <li className={styles.listItem}>
      <p className={styles.listItemDay}>{getDay(weather.dt_txt)}</p>
      <div className={styles.listItemIconContainer}>
        <img src={getWeatherIcon(weather)} alt="" />
        <p>{weather.weather[0].main}</p>
      </div>
      <p className={styles.listItemTemp}>
        {kelvinToCelcius(weather.main.temp)}
      </p>
    </li>
  );
}

export default WeatherListItem;
