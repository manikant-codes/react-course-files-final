import React from "react";
import Thumbnail from "./Thumbnail";
import styles from "../../../styles/weatherApp/thumbnailList.module.css";
import { getDayWiseData } from "../../../helpers/weatherHelper";

function ThumbnailsList(props) {
  const { multiDayData, setWeather } = props;

  if (!multiDayData) return null;

  return (
    <div className={styles.listContainer}>
      {multiDayData.slice(0, 4).map((value, index) => {
        return (
          <Thumbnail key={index} weather={value} setWeather={setWeather} />
        );
      })}
    </div>
  );
}

export default ThumbnailsList;
