import React from "react";
import styles from "../../styles/weatherApp/weatherCardSmall.module.css";
import { getDateObject, getDayOfWeek } from "../../utils/dateHelper";
import { getIcon, kelvinToCelcius } from "../../utils/weatherHelper";

function WeatherThumbnail(props) {
  const { weather, setWeather } = props;
  const icon = weather.weather[0].icon;
  const temp = kelvinToCelcius(weather.main.temp);
  const dateTimeString = weather.dt_txt;

  const date = getDateObject(dateTimeString);
  const dayString = getDayOfWeek(date);

  return (
    <div
      className={styles.container}
      onClick={() => {
        setWeather(weather);
      }}
    >
      <h5 className={styles.temp}>{temp}°</h5>
      <img src={getIcon(icon)} alt="" className={styles.image} />
      <p className={styles.weatherCondition}>{dayString}</p>
    </div>
  );
}

export default WeatherThumbnail;
