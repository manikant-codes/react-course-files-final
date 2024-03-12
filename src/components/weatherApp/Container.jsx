import React from "react";
import styles from "../../styles/home/container.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCloudRain,
  faDroplet,
  faSearch,
  faWind,
} from "@fortawesome/free-solid-svg-icons";

function Container() {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <div className={styles.weatherInfoContainer}>
          <div className={styles.searchbarContainer}>
            <input type="text" placeholder="Enter city..." />
            <button>
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
          <div className={styles.tempInfoContainer}>
            <img className={styles.weatherImg} src="/images/sunny.png" alt="" />
            <div>
              <h2>27°</h2>
              <p>Thunderstorm</p>
            </div>
          </div>
          <div className={styles.extraInfoContainer}>
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
        <div className={styles.listContainer}></div>
      </div>
    </div>
  );
}

export default Container;
