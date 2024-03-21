import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../styles/weatherApp/container.module.css";
import PopOver from "../common/PopOver";
import WeatherCardMain from "./WeatherCardMain";
import WeatherList from "./WeatherList";
import WeatherThumbnailsList from "./WeatherThumbnailsList";
import Loader from "../common/Loader";

function Container() {
  const [weather, setWeather] = useState(null);
  const [multiDayData, setMultiDayData] = useState(null);
  const [multiDayLoading, setMultiDayLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState();
  const [showMoreDays, setShowMoreDays] = useState(false);

  function toggleShowMoreDays() {
    setShowMoreDays(!showMoreDays);
  }

  function hidePopOver() {
    setIsVisible(false);
  }

  function render() {
    if (multiDayLoading) {
      return (
        <Loader
          containerWidth="100%"
          containerHeight="100%"
          iconSize="2rem"
          color="white"
          containerStyles={{ padding: "16px" }}
        />
      );
    }
    if (!multiDayLoading) {
      if (showMoreDays) {
        return <WeatherList list={multiDayData} setWeather={setWeather} />;
      }
      return (
        <WeatherThumbnailsList
          multiDayData={multiDayData}
          setWeather={setWeather}
        />
      );
    }
  }

  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <WeatherCardMain
          showMoreDays={showMoreDays}
          weather={weather}
          setMultiDayData={setMultiDayData}
          setWeather={setWeather}
          setIsVisible={setIsVisible}
          setError={setError}
          setMultiDayLoading={setMultiDayLoading}
        />
        {weather && !multiDayLoading && (
          <div>
            <button className={styles.btnMoreDays} onClick={toggleShowMoreDays}>
              {!showMoreDays ? "Show More" : "Show Less"}
              <FontAwesomeIcon
                icon={faAngleRight}
                style={{
                  transform: showMoreDays ? "rotate(270deg)" : "rotate(90deg)",
                  transition: "all 0.3s ease",
                }}
              />
            </button>
          </div>
        )}
        {render()}
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
