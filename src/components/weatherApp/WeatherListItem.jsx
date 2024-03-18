import React from "react";
import styles from "../../styles/weatherApp/weatherList.module.css";
import { getDateObject, getDayOfWeek } from "../../utils/dateHelper";
import { getIcon, kelvinToCelcius } from "../../utils/weatherHelper";

function WeatherListItem(props) {
  const { weather } = props;

  // If !weather show some message and return.
  if (!weather) {
    return null;
  }

  const date = getDateObject(weather.dt_txt);
  const day = getDayOfWeek(date);

  return (
    <li className={styles.listItem}>
      <p>{day}</p>
      <div className={styles.iconContainer}>
        <img
          src={getIcon(weather.weather[0].icon)}
          alt=""
          className={styles.listItemIcon}
        />
        <p>{weather.weather[0].main}</p>
      </div>
      <p>{kelvinToCelcius(weather.main.temp)}°</p>
    </li>
  );
}

export default WeatherListItem;
