import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  getFourDaysData,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../helpers/weatherHelpers";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";
import styles from "../../styles/weatherApp/container.module.css";
import PopOver from "../common/PopOver";
import WeatherCardSmall from "./WeatherCardSmall";

function Container() {
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState("");
  const [multiDayData, setMultiDayData] = useState(null);

  function hidePopOver() {
    setIsVisible(false);
    setError("");
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    getWeatherData(city)
      .then((data) => {
        const statusCode = Number(data.cod);
        if (statusCode >= 400 && statusCode < 600) {
          throw new Error(data.message);
        }

        getMultiDayWeatherData(data.id)
          .then((data) => {
            setMultiDayData(getFourDaysData(data.list));
          })
          .catch((error) => {
            console.log("Error: ", error);
          });

        setWeather(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsVisible(true);
      });
  }

  function render() {
    if (!weather) {
      return <h2>Please search a city!</h2>;
    }
    return (
      <>
        <div className={styles.tempInfo}>
          <img
            // src={`/images/${
            //   weather.weather[0].icon.slice(0, 2) + "d" || "01d"
            // }.png`}
            src={getWeatherIcon(weather)}
            alt=""
          />
          <div>
            <p className={styles.temperature}>
              {kelvinToCelcius(weather.main.temp)}°
            </p>
            <p className={styles.weather}>{weather.weather[0].main}</p>
          </div>
        </div>
        <div className={styles.extraInfo}>
          <div>
            <FontAwesomeIcon icon={faWind} />
            <p>{weather.wind.speed} km/h</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faDroplet} />
            <p>{weather.main.humidity}</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faCloudRain} />
            <p>15 km/h</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerApp}>
        <div className={styles.containerAppInnerUpper}>
          <div className={styles.searchBar}>
            <input type="text" value={city} onChange={handleChange} />
            <button onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {render()}
        </div>
        <div className={styles.containerAppInnerLower}>
          {multiDayData &&
            multiDayData.map((value, index) => {
              return (
                <WeatherCardSmall
                  key={index}
                  icon={value}
                  temp={value.main.temp}
                  weather={value.weather[0].main}
                />
              );
            })}
        </div>
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
