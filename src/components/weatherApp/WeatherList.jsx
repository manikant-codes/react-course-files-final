import React from "react";
import WeatherListItem from "./WeatherListItem";
import styles from "../../styles/weatherApp/weatherList.module.css";

function WeatherList(props) {
  const { list, setWeather } = props;

  // If !list show appropriate message!
  if (!list) {
    return null;
  }

  return (
    <ul className={styles.list}>
      {list.map((value, index) => {
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
