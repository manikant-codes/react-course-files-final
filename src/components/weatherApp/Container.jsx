import React, { useState } from "react";
import styles from "../../styles/weatherApp/container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";

function kelvinToCelcius(temperature) {
  if (!temperature) return 0;
  return Math.round(temperature - 273.15);
}

function Container() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [multiDayData, setMultiDayData] = useState(null);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    getWeatherData(city)
      .then((data) => {
        setWeather(data);
        getMultiDayWeatherData(data.coord.lat, data.coord.lon, 4)
          .then((data) => {
            setMultiDayData(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  console.log("weather", weather);
  console.log("multiDayData", multiDayData);

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
          <div className={styles.tempInfo}>
            <img
              src={`/images/${
                weather?.weather[0]?.icon.slice(0, 2) + "d" || "01d"
              }.png`}
              alt=""
            />
            <div>
              <p className={styles.temperature}>
                {kelvinToCelcius(weather?.main?.temp)}°
              </p>
              <p className={styles.weather}>{weather?.weather[0]?.main}</p>
            </div>
          </div>
          <div className={styles.extraInfo}>
            <div>
              <FontAwesomeIcon icon={faWind} />
              <p>{weather?.wind?.speed} km/h</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faDroplet} />
              <p>{weather?.main?.humidity}</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faCloudRain} />
              <p>15 km/h</p>
            </div>
          </div>
        </div>
        <div className={styles.containerAppInnerLower}></div>
      </div>
    </div>
  );
}

export default Container;
