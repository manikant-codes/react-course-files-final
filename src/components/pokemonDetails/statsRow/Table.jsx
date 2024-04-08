import React from "react";
import styles from "../../../styles/pokemonDetails/statsRow.module.css";

function Table(props) {
  const { stats } = props;
  console.log("stats", stats);
  return (
    <div className={styles.tableContainer}>
      <ul className={styles.list}>
        {stats.map((value) => {
          return (
            <li>
              <div style={{ height: value.base_stat }}>
                <p className={styles.statNumber}>
                  {Math.round((value.base_stat * 100) / 255)}
                </p>
              </div>
              <p className={styles.statName}>{value.stat.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
