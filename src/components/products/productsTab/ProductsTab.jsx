import React from "react";
import Tab from "./Tab";
import styles from "../../../styles/products/productsTab.module.css";
import { tabs } from "../../../data/productsPageData";

function ProductsTab(props) {
  const { activeTab, setActiveTab } = props;
  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabsList}>
        {tabs.map(function (tab, index) {
          return (
            <Tab
              key={index}
              tab={tab}
              index={index}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ProductsTab;
