import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
  getDayWiseData,
  getWeatherCondition,
  getWeatherIcon,
  kelvinToCelcius,
} from "../../helpers/weatherHelper";
import {
  getMultiDayWeatherData,
  getWeatherData,
} from "../../services/apiServices";
import styles from "../../styles/weatherApp/container.module.css";
import ThumbnailsList from "./thumbnailsList/ThumbnailsList";
import WeatherList from "./weatherList/WeatherList";
import Loader from "../common/Loader";
import PopOver from "../common/PopOver";

function Container() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingMultiDay, setLoadingMultiDay] = useState(false);
  const [multiDayData, setMultiDayData] = useState(null);
  const [viewMore, setViewMore] = useState(false);
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  function hidePopOver() {
    setIsVisible(false);
    setError("");
    setWeather(null);
    setMultiDayData(null);
  }

  function toggleViewMore() {
    setViewMore(!viewMore);
  }

  function handleChange(e) {
    setCity(e.target.value);
  }

  function handleSearch() {
    setLoading(true);
    getWeatherData(city)
      .then((data) => {
        if (Number(data.cod) >= 400) {
          setError(data.message);
          setIsVisible(true);
        }
        setWeather(data);
        setLoadingMultiDay(true);
        getMultiDayWeatherData(data.id)
          .then((data) => {
            const fiveDaysData = getDayWiseData(data.list);
            setMultiDayData(fiveDaysData);
          })
          .catch((error) => {
            setError(error.message);
            setIsVisible(true);
          })
          .finally(() => {
            setLoadingMultiDay(false);
          });

        console.log("weather inner", weather);
      })
      .catch((error) => {
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
          containerWidth="100%"
          containerHeight="100%"
          loaderSize="3rem"
          loaderStyles={{
            marginBottom: "60px",
          }}
        />
      );
    }
    if (!loading && !weather) {
      return <h1>Please select a city!</h1>;
    }
    if (error) {
      return <h1>Something went wrong!</h1>;
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

  function renderList() {
    if (loadingMultiDay) {
      return (
        <Loader
          loaderStyles={{ padding: "2rem" }}
          containerWidth="100%"
          containerHeight="100%"
          loaderSize="2rem"
          loaderColor="white"
        />
      );
    } else {
      if (weather) {
        if (viewMore) {
          return (
            <WeatherList multiDayData={multiDayData} setWeather={setWeather} />
          );
        }
        return (
          <ThumbnailsList multiDayData={multiDayData} setWeather={setWeather} />
        );
      }
      return null;
    }
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
        {renderList()}
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
