import React from "react";
import styles from "./statsGraph.module.css";
import { getBarHeight, getStatsPercentage } from "./statsHelper";

function StatsGraph(props) {
  const { stats } = props;

  return (
    <div className={styles.graphContainer}>
      <ul className={styles.graphList}>
        {stats.map((value) => {
          return (
            <li>
              <div style={{ height: getBarHeight(value.base_stat) }}>
                <p>{getStatsPercentage(value.base_stat)}%</p>
              </div>
              <p>{value.stat.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default StatsGraph;
