import React from "react";
import styles from "../../styles/weatherApp/container.module.css";
import WeatherThumbnail from "./WeatherThumbnail";

function WeatherThumbnailsList(props) {
  const { multiDayData, setWeather } = props;

  if (!multiDayData) return null;

  return (
    <div className={styles.listContainer}>
      {multiDayData.slice(0, 4).map((value, index) => {
        return <WeatherThumbnail weather={value} setWeather={setWeather} />;
      })}
    </div>
  );
}

export default WeatherThumbnailsList;
