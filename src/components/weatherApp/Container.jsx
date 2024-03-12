import React from "react";
import styles from "../../styles/weatherApp/container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function Container() {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=surat&appid=2927389bf8b98ec157aee52c9c1f5b73"
  ).then((res) => {
    console.log(res);
  });

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
