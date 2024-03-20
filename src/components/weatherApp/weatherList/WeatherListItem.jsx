import React from "react";
import { getDay } from "../../../helpers/dateHelper";
import {
  getWeatherIcon,
  kelvinToCelcius,
} from "../../../helpers/weatherHelpers";
import styles from "../../../styles/weatherApp/weatherList.module.css";

function WeatherListItem(props) {
  const { weather, setWeather } = props;
  console.log("weather", weather);
  return (
    <li
      className={styles.listItem}
      onClick={() => {
        setWeather(weather);
      }}
    >
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
