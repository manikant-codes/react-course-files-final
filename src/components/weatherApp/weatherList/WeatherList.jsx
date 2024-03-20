import React from "react";
import WeatherListItem from "./WeatherListItem";
import styles from "../../../styles/weatherApp/weatherList.module.css";

function WeatherList(props) {
  const { multiDayData, setWeather } = props;
  return (
    <ul className={styles.list}>
      {multiDayData.map((value, index) => {
        return (
          <WeatherListItem
            key={index}
            weather={value}
            setWeather={setWeather}
          />
        );
      })}
    </ul>
  );
}

export default WeatherList;
