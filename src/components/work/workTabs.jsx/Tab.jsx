import React from "react";
import styles from "../../../styles/work/workTabs.module.css";

function Tab(props) {
  const { activeTab, setActiveTab, tab, index } = props;

  function handleClick() {
    setActiveTab(index);
  }

  return (
    <li
      className={index === activeTab ? styles.activeTab : ""}
      onClick={handleClick}
    >
      {tab}
    </li>
  );
}

export default Tab;
