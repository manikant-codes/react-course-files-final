import React from "react";
import styles from "../../styles/weatherApp/container.module.css";

function Container() {
  return (
    <div className={styles.containerMain}>
      <div className={styles.containerApp}>
        <div className={styles.containerAppInnerUpper}>
          <div className={styles.searchBar}></div>
          <div className={styles.tempInfo}>
            <img src="/images/sunny.png" alt="" />
            <div>
              <p className={styles.temperature}>23°</p>
              <p className={styles.weather}>Thunderstorm</p>
            </div>
          </div>
          <div className={styles.extraInfo}></div>
        </div>
        <div className={styles.containerAppInnerLower}></div>
      </div>
    </div>
  );
}

export default Container;
