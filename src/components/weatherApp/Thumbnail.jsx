import React from "react";
import styles from "../../styles/weatherApp/thumbnail.module.css";
import { getWeatherIcon, kelvinToCelcius } from "../../helpers/weatherHelpers";

function Thumbnail(props) {
  const { weather, setWeather } = props;
  return (
    <div
      className={styles.cardContainer}
      onClick={() => {
        setWeather(weather);
      }}
    >
      <p className={styles.temp}>{kelvinToCelcius(weather.main.temp)}</p>
      <img src={getWeatherIcon(weather)} alt="" className={styles.icon} />
      <p className={styles.weather}>{weather.weather[0].main}</p>
    </div>
  );
}

export default Thumbnail;
