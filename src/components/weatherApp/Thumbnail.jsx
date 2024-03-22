import React from "react";
import styles from "../../styles/weatherApp/thumbnail.module.css";
import { getWeatherIcon, kelvinToCelcius } from "../../helpers/weatherHelpers";
import Loader from "../common/Loader";

function Thumbnail(props) {
  const { weather, setWeather, multiDayLoading } = props;

  function render() {
    if (multiDayLoading) {
      return <Loader color="white" />;
    }
    return (
      <>
        <p className={styles.temp}>{kelvinToCelcius(weather.main.temp)}</p>
        <img src={getWeatherIcon(weather)} alt="" className={styles.icon} />
        <p className={styles.weather}>{weather.weather[0].main}</p>
      </>
    );
  }

  return (
    <div
      className={styles.cardContainer}
      onClick={() => {
        setWeather(weather);
      }}
    >
      {render()}
    </div>
  );
}

export default Thumbnail;
