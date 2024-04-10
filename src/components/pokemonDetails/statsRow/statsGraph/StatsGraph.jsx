import React from "react";
import styles from "./statsGraph.module.css";
import { getBarHeight, getStatsPercentage } from "./statsHelper";

function StatsGraph(props) {
  const { stats } = props;

  return (
    <div className={styles.graphContainer}>
      <ul className={styles.graphList}>
        {stats.map((value, index) => {
          return (
            <li key={index}>
              <div className={styles.barContainer}>
                <div
                  className={styles.bar}
                  style={{ height: getBarHeight(value.base_stat) }}
                >
                  <p>{getStatsPercentage(value.base_stat)}%</p>
                </div>
              </div>
              <p className={styles.statName}>{value.stat.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StatsGraph;
