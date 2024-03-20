import React from "react";
import Thumbnail from "./Thumbnail";
import styles from "../../styles/weatherApp/container.module.css";

function ThumbnailsList(props) {
  const { multiDayData, setWeather } = props;

  return (
    <div className={styles.containerAppInnerLower}>
      {multiDayData &&
        multiDayData.slice(0, 4).map((value, index) => {
          return (
            <Thumbnail
              key={index}
              // icon={value}
              // temp={value.main.temp}
              weather={value}
              setWeather={setWeather}
            />
          );
        })}
    </div>
  );
}

export default ThumbnailsList;
