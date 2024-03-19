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

function WeatherCardMain(props) {
  const { setIsVisible, setMultiDayData, setError, viewMore } = props;
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

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
          <img src={getWeatherIcon(weather)} alt="" />
          <div>
            <p
              className={styles.temperature}
              style={{ fontSize: viewMore ? "4rem" : "5rem" }}
            >
              {kelvinToCelcius(weather.main.temp)}
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
    <div className={styles.containerAppInnerUpper}>
      {!viewMore && (
        <div className={styles.searchBar}>
          <input type="text" value={city} onChange={handleChange} />
          <button onClick={handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      )}
      {render()}
    </div>
  );
}

export default WeatherCardMain;
