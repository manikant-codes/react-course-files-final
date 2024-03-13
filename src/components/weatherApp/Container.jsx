import React from "react";
import styles from "../../styles/weatherApp/container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import { getWeatherData } from "../../services/apiServices";

function Container() {
  const data = getWeatherData("delhi");

  console.log("data", data);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerApp}>
        <div className={styles.containerAppInnerUpper}>
          <div className={styles.searchBar}>
            <input type="text" />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={styles.tempInfo}>
            <img src="/images/sunny.png" alt="" />
            <div>
              <p className={styles.temperature}>23°</p>
              <p className={styles.weather}>Thunderstorm</p>
            </div>
          </div>
          <div className={styles.extraInfo}>
            <div>
              <FontAwesomeIcon icon={faWind} />
              <p>15 km/h</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faDroplet} />
              <p>15 km/h</p>
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
