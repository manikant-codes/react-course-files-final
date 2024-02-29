import React from "react";
import styles from "../../../styles/work/workTabs.module.css";
import Tab from "./Tab";
import { workTabs } from "../../../data/workPageData";

function WorkTabs(props) {
  const { activeTab, setActiveTab } = props;
  return (
    <div className={styles.tabsContainer}>
      <ul className={styles.tabsList}>
        {workTabs.map(function (tab, index) {
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

export default WorkTabs;
