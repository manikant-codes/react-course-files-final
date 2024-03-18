import {
  faCloudRain,
  faDroplet,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/weatherApp/container.module.css";
import { getIcon, kelvinToCelcius } from "../../utils/weatherHelper";
import Searchbar from "./Searchbar";

function WeatherCardMain(props) {
  const { showMoreDays, city, handleChange, handleSearch, weather } = props;

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
        <p style={{ textAlign: "center" }}>Please search a city!</p>
      ) : (
        <>
          <div className={styles.tempInfoContainer}>
            <img
              className={styles.weatherImg}
              src={getIcon(weather.weather[0].icon)}
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
  );
}

export default WeatherCardMain;
