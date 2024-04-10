import React from "react";
import styles from "../../../styles/pokemonDetails/table.module.css";
import { getStatName } from "../../../helpers/pokedexHelper";

function Table(props) {
  const { stats } = props;
  return (
    <div className={styles.tableContainer}>
      <ul className={styles.list}>
        {stats.map((value, index) => {
          return (
            <li key={index}>
              <div className={styles.barContainer}>
                <div className={styles.bar} style={{ height: value.base_stat }}>
                  <p className={styles.statNumber}>
                    {Math.round((value.base_stat * 100) / 255)}
                  </p>
                </div>
              </div>
              <p className={styles.statName}>{getStatName(value.stat.name)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Table;
