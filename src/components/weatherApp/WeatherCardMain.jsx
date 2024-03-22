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
import Loader from "../common/Loader";

function WeatherCardMain(props) {
  const {
    weather,
    setIsVisible,
    setError,
    setMultiDayData,
    viewMore,
    setWeather,
    setMultiDayLoading,
  } = props;
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    setLoading(true);
    getWeatherData(city)
      .then((data) => {
        const statusCode = Number(data.cod);
        if (statusCode >= 400) {
          throw new Error(data.message);
        }

        setWeather(data);

        setMultiDayLoading(true);
        getMultiDayWeatherData(data.id)
          .then((data) => {
            setMultiDayData(getFourDaysData(data.list));
          })
          .catch((error) => {
            console.log("Error: ", error);
          })
          .finally(() => {
            setMultiDayLoading(false);
          });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setIsVisible(true);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  function render() {
    if (loading) {
      return (
        <Loader
          iconSize="3rem"
          containerHeight="100%"
          containerWidth="100%"
          iconStyles={{
            marginBottom: "60px",
          }}
        />
      );
    }
    if (!weather) {
      return (
        <div style={{ padding: "16px" }}>
          <img src="/images/main.webp" alt="" style={{ width: "100%" }} />
          <h2
            style={{ textAlign: "center", fontSize: "1.5rem", color: "white" }}
          >
            Please search a city!
          </h2>
        </div>
      );
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
    <>
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
    </>
  );
}

export default WeatherCardMain;
