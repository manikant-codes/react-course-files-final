import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import styles from "../../styles/weatherApp/container.module.css";
import { getWeatherData } from "../../services/apiServices";

function kelvinToCelcius(kelvin) {
  return Math.round(kelvin - 273.15);
}

function Container() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    getWeatherData(city)
      .then((data) => {
        setWeather(data);
        console.log("weather inner", weather);
      })
      .catch(() => {});
  }

  console.log("weather outer", weather);

  function render() {
    if (!weather) {
      return <h1>Please select a city!</h1>;
    }
    return (
      <>
        <div className={styles.tempInfoContainer}>
          <img
            className={styles.weatherImg}
            src={`/images/${weather.weather[0].icon.slice(0, 2)}d.png`}
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
    );
  }

  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <div className={styles.weatherInfoContainer}>
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
          {render()}
        </div>
        <div className={styles.listContainer}></div>
      </div>
    </div>
  );
}

export default Container;
