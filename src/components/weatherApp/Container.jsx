import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";
import styles from "../../styles/weatherApp/container.module.css";
import { getUniqueDays, kelvinToCelcius } from "../../utils/weatherHelper";
import PopOver from "../common/PopOver";
import WeatherCardMain from "./WeatherCardMain";
import WeatherCardSmall from "./WeatherCardSmall";
import WeatherList from "./WeatherList";

function Container() {
  const [weather, setWeather] = useState(null);
  const [multiDayData, setMultiDayData] = useState(null);
  const [city, setCity] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState();
  const [showMoreDays, setShowMoreDays] = useState(false);

  function toggleShowMoreDays() {
    setShowMoreDays(!showMoreDays);
  }

  function hidePopOver() {
    setIsVisible(false);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    getWeatherData(city)
      .then((data) => {
        if (data.cod === "404") {
          throw new Error("City not found!");
        }
        getMultiDayWeatherData(data.id)
          .then((data) => {
            const list = getUniqueDays(data.list);
            setMultiDayData(list);
          })
          .catch((error) => {
            console.log("Error: ", error);
          });
        setWeather(data);
      })
      .catch((error) => {
        setIsVisible(true);
        setError(error.message);
      });
  }

  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <WeatherCardMain
          showMoreDays={showMoreDays}
          city={city}
          handleChange={handleChange}
          handleSearch={handleSearch}
          weather={weather}
        />
        <div>
          <button className={styles.btnMoreDays} onClick={toggleShowMoreDays}>
            {!showMoreDays ? "Show More" : "Show Less"}
            <FontAwesomeIcon icon={faAngleRight} />
          </button>
        </div>
        {!showMoreDays && (
          <div className={styles.listContainer}>
            {multiDayData?.slice(0, 4).map((value, index) => {
              return (
                <WeatherCardSmall
                  icon={value.weather[0].icon}
                  temp={kelvinToCelcius(value.main.temp)}
                  dateTimeString={value.dt_txt}
                />
              );
            })}
          </div>
        )}
        {showMoreDays && <WeatherList list={multiDayData} />}
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
