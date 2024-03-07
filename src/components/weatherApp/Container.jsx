import React from "react";
import styles from "../../styles/home/container.module.css";

function Container() {
  return (
    <div className={styles.containerOuter}>
      <div className={styles.containerInner}>
        <div className={styles.weatherInfoContainer}>
          <div></div>
          <div className={styles.tempInfoContainer}>
            <img className={styles.weatherImg} src="/images/sunny.png" alt="" />
            <h2>27°</h2>
            <p>Thunderstorm</p>
          </div>
          <div></div>
        </div>
        <div className={styles.listContainer}></div>
      </div>
    </div>
  );
}

export default Container;
