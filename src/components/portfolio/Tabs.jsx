import React from "react";
import styles from "../../styles/portfolio/tabs.module.css";
import { tabs } from "../../data/portfolio";

function Tabs(props) {
  const { activeTab, setActiveTab } = props;

  function handleClick(id) {
    setActiveTab(id);
  }

  return (
    <ul className={styles.tabsList}>
      {tabs.map((value) => {
        return (
          <li
            key={value.id}
            onClick={function () {
              handleClick(value.id);
            }}
            className={activeTab === value.id ? styles.active : ""}
          >
            {value.name}
          </li>
        );
      })}
    </ul>
  );
}

export default Tabs;
