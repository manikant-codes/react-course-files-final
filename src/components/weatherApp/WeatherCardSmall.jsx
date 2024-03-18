import React from "react";
import styles from "../../styles/weatherApp/weatherCardSmall.module.css";
import { getDateObject, getDayOfWeek } from "../../utils/dateHelper";
import { getIcon } from "../../utils/weatherHelper";

function WeatherCardSmall(props) {
  const { temp, icon, dateTimeString } = props;
  const date = getDateObject(dateTimeString);
  const dayString = getDayOfWeek(date);

  return (
    <div className={styles.container}>
      <h5 className={styles.temp}>{temp}°</h5>
      <img src={getIcon(icon)} alt="" className={styles.image} />
      <p className={styles.weatherCondition}>{dayString}</p>
    </div>
  );
}

export default WeatherCardSmall;
