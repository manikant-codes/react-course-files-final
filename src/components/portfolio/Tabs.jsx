import React from "react";
import styles from "../../styles/portfolio/tabs.module.css";
import { tabs } from "../../data/portfolio";

function Tabs() {
  return (
    <ul className={styles.tabsList}>
      {tabs.map((value) => {
        return <li key={value.id}>{value.name}</li>;
      })}
    </ul>
  );
}

export default Tabs;
