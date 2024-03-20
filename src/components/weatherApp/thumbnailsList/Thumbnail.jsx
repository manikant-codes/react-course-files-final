import React from "react";
import styles from "../../../styles/weatherApp/thumbnailList.module.css";
import {
  getWeatherIcon,
  kelvinToCelcius,
} from "../../../helpers/weatherHelper";

function Thumbnail(props) {
  const { weather } = props;
  console.log("weather", weather);

  const temp = kelvinToCelcius(weather.main.temp);
  const icon = getWeatherIcon(weather);
  const condition = weather.weather[0].main;

  return (
    <div className={styles.thumbnail}>
      <p className={styles.temp}>{temp}</p>
      <img src={icon} alt="" className={styles.icon} />
      <p className={styles.weather}>{condition}</p>
    </div>
  );
}

export default Thumbnail;
