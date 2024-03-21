import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../styles/weatherApp/container.module.css";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";
import ThumbnailsList from "./thumbnailsList/ThumbnailsList";
import {
  getDayWiseData,
  getWeatherCondition,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../helpers/weatherHelper";
import WeatherList from "./weatherList/WeatherList";

function Container() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [multiDayData, setMultiDayData] = useState(null);
  const [viewMore, setViewMore] = useState(false);

  function toggleViewMore() {
    setViewMore(!viewMore);
  }

  console.log("multiDayData", multiDayData);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    getWeatherData(city)
      .then((data) => {
        setWeather(data);
        getMultiDayWeatherData(data.id)
          .then((data) => {
            const fiveDaysData = getDayWiseData(data.list);
            setMultiDayData(fiveDaysData);
          })
          .catch((error) => {
            console.log("Error: ", error);
          });

        console.log("weather inner", weather);
      })
      .catch(() => {});
  }

  console.log("View More", viewMore);

  function render() {
    if (!weather) {
      return <h1>Please select a city!</h1>;
    }
    return (
      <>
        <div className={styles.tempInfoContainer}>
          <img
            className={styles.weatherImg}
            src={getWeatherIcon(weather)}
            alt=""
            style={{ height: viewMore ? "100px" : "150px" }}
          />
          <div>
            <h2 style={{ fontSize: viewMore ? "4rem" : "6rem" }}>
              {kelvinToCelcius(weather.main.temp)}
            </h2>
            <p>{getWeatherCondition(weather)}</p>
          </div>
        </div>
        <div
          className={styles.extraInfoContainer}
          style={{ padding: viewMore ? "4px" : "8px" }}
        >
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
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <div className={styles.weatherInfoContainer}>
          {viewMore === false && (
            <div className={styles.searchbarContainer}>
              <input
                type="text"
                placeholder="Enter city..."
                required={true}
                value={city}
                onChange={handleChange}
              />
              <button onClick={handleSearch}>
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          )}
          {render()}
        </div>
        {weather && (
          <div className={styles.viewMoreBtnContainer}>
            <button className={styles.viewMoreBtn} onClick={toggleViewMore}>
              View More
            </button>
          </div>
        )}

        {viewMore ? (
          <WeatherList multiDayData={multiDayData} setWeather={setWeather} />
        ) : (
          <ThumbnailsList multiDayData={multiDayData} setWeather={setWeather} />
        )}
      </div>
    </div>
  );
}

export default Container;
