import React, { useState } from "react";
import styles from "../../styles/weatherApp/container.module.css";
import PopOver from "../common/PopOver";
import ThumbnailsList from "./ThumbnailsList";
import WeatherCardMain from "./WeatherCardMain";
import WeatherList from "./weatherList/WeatherList";

function Container() {
  const [error, setError] = useState("");
  // For PopOver
  const [isVisible, setIsVisible] = useState("");
  const [multiDayData, setMultiDayData] = useState(null);
  const [weather, setWeather] = useState(null);
  const [viewMore, setViewMore] = useState(false);

  function toggleViewMore() {
    setViewMore(!viewMore);
  }

  function hidePopOver() {
    setIsVisible(false);
    setError("");
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerApp}>
        <WeatherCardMain
          setIsVisible={setIsVisible}
          setMultiDayData={setMultiDayData}
          setError={setError}
          viewMore={viewMore}
          weather={weather}
          setWeather={setWeather}
        />
        {weather && (
          <div className={styles.viewMoreBtnContainer}>
            <button className={styles.viewMoreBtn} onClick={toggleViewMore}>
              {viewMore ? "View Less" : "View More"}
            </button>
          </div>
        )}
        {viewMore ? (
          <WeatherList multiDayData={multiDayData} setWeather={setWeather} />
        ) : (
          <ThumbnailsList multiDayData={multiDayData} setWeather={setWeather} />
        )}
      </div>
      <PopOver
        message={error}
        status="error"
        isVisible={isVisible}
        hidePopOver={hidePopOver}
      />
    </div>
  );
}

export default Container;
