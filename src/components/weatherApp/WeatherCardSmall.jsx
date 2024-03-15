import React from "react";
import styles from "../../styles/weatherApp/weatherCardSmall.module.css";
import { getDateObject, getDayOfWeek } from "../../utils/dateHelper";

function WeatherCardSmall(props) {
  const { temp, icon, dateTimeString } = props;

  const date = getDateObject(dateTimeString);
  const dayString = getDayOfWeek(date);

  return (
    <div className={styles.container}>
      <h5 className={styles.temp}>{temp}°</h5>
      <img
        src={`/images/${icon.slice(0, 2)}d.png`}
        alt=""
        className={styles.image}
      />
      <p className={styles.weatherCondition}>{dayString}</p>
    </div>
  );
}

export default WeatherCardSmall;
