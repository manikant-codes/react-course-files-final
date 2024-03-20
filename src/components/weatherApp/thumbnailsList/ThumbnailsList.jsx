import React from "react";
import Thumbnail from "./Thumbnail";
import styles from "../../../styles/weatherApp/thumbnailList.module.css";
import { getDayWiseData } from "../../../helpers/weatherHelper";

function ThumbnailsList(props) {
  const { multiDayData } = props;

  if (!multiDayData) return null;

  const dayWiseData = getDayWiseData(multiDayData);
  return (
    <div className={styles.listContainer}>
      {dayWiseData.slice(0, 4).map((value, index) => {
        return <Thumbnail key={index} weather={value} />;
      })}
    </div>
  );
}

export default ThumbnailsList;
