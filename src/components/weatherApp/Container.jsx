import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";
import styles from "../../styles/weatherApp/container.module.css";
import PopOver from "../common/PopOver";
import WeatherCardSmall from "./WeatherCardSmall";

function kelvinToCelcius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function Container() {
  const [weather, setWeather] = useState(null);
  const [multiDayData, setMultiDayData] = useState(null);
  const [city, setCity] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState();

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
            let lst = data.list;
            lst = lst.filter((value, index, array) => {
              if (index === 0) {
                return true;
              }
              if (index % 8 === 0) {
                return true;
              }
              return false;
            });
            setMultiDayData(lst);
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

  console.log("weather", weather);
  console.log("multiday", multiDayData);

  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <div className={styles.weatherInfoContainer}>
          <div className={styles.searchbarContainer}>
            <input
              type="text"
              placeholder="Enter city..."
              value={city}
              onChange={handleChange}
              required={true}
            />
            <button onClick={handleSearch}>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          {!weather ? (
            <h1>Please search a city</h1>
          ) : (
            <>
              <div className={styles.tempInfoContainer}>
                <img
                  className={styles.weatherImg}
                  src={`/images/${
                    weather.weather[0].icon.slice(0, 2) + "d"
                  }.png`}
                  alt=""
                />
                <div>
                  <h2>{kelvinToCelcius(weather.main.temp)}°</h2>
                  <p>{weather.weather[0].main}</p>
                </div>
              </div>
              <div className={styles.extraInfoContainer}>
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
          )}
        </div>
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
