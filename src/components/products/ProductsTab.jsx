import React from "react";
import styles from "../../styles/products/productsTab.module.css";

function ProductsTab(props) {
  const { activeTab, setActiveTab } = props;

  function handleClick(index) {
    setActiveTab(index);
  }

  console.log("activeTab", activeTab);

  return (
    <div className={styles.productsTabContainer}>
      <ul className={styles.productsTabList}>
        <li
          onClick={function () {
            handleClick(0);
          }}
          className={0 === activeTab ? styles.activeTab : ""}
        >
          All
        </li>
        <li
          onClick={function () {
            handleClick(1);
          }}
          className={1 === activeTab ? styles.activeTab : ""}
        >
          Lotions
        </li>
        <li
          onClick={function () {
            handleClick(2);
          }}
          className={2 === activeTab ? styles.activeTab : ""}
        >
          Serums
        </li>
        <li
          onClick={function () {
            handleClick(3);
          }}
          className={3 === activeTab ? styles.activeTab : ""}
        >
          Clensers
        </li>
      </ul>
    </div>
  );
}

export default ProductsTab;
