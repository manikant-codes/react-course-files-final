import {
  faCloudRain,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../styles/weatherApp/container.module.css";
import {
  getIcon,
  getUniqueDays,
  kelvinToCelcius,
} from "../../utils/weatherHelper";
import Searchbar from "./Searchbar";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";

function WeatherCardMain(props) {
  const {
    showMoreDays,
    weather,
    setMultiDayData,
    setWeather,
    setIsVisible,
    setError,
  } = props;
  const [city, setCity] = useState("");

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    getWeatherData(city)
      .then((data) => {
        if (data.cod === "404" || data.cod === "400") {
          throw new Error(data.message);
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
    <div className={styles.weatherInfoContainer}>
      {!showMoreDays && (
        <Searchbar
          city={city}
          handleChange={handleChange}
          handleSearch={handleSearch}
        />
      )}
      {!weather ? (
        <div
          style={{
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <img
            src="/images/illustration.svg"
            alt=""
            style={{ width: "100%" }}
          />
          <p
            style={{ textAlign: "center", fontSize: "1.5rem", color: "white" }}
          >
            Please search a city!
          </p>
        </div>
      ) : (
        <>
          <div className={styles.tempInfoContainer}>
            <img
              className={styles.weatherImg}
              src={getIcon(weather.weather[0].icon)}
              alt=""
              style={{ height: showMoreDays ? "100px" : "150px" }}
            />
            <div>
              <h2
                style={{
                  fontSize: showMoreDays ? "4rem" : "5rem",
                }}
              >
                {kelvinToCelcius(weather.main.temp)}°
              </h2>
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
  );
}

export default WeatherCardMain;
