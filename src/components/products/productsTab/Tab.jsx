import React from "react";
import styles from "../../../styles/products/productsTab.module.css";

function Tab(props) {
  const { tab, index, activeTab, setActiveTab } = props;

  function handleClick() {
    setActiveTab(index);
  }

  console.log("activeTab", activeTab);

  return (
    <li
      className={`${styles.tab} ${activeTab === index ? styles.activeTab : ""}`}
      onClick={handleClick}
    >
      {tab}
    </li>
  );
}

export default Tab;
