import React from "react";
import WeatherListItem from "./WeatherListItem";
import styles from "../../../styles/weatherApp/weatherList.module.css";

function WeatherList(props) {
  const { multiDayData, setWeather } = props;

  if (!multiDayData) return null;

  return (
    <div className={styles.list}>
      {multiDayData.map((value, index) => {
        return <WeatherListItem weather={value} setWeather={setWeather} />;
      })}
    </div>
  );
}

export default WeatherList;
