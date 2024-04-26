import React from "react";
import styles from "../../styles/home/tabs.module.css";

function Tabs() {
  return (
    <div className={styles.containerMain}>
      <button>Today</button>
      <button>Pending</button>
      <button>Overdue</button>
    </div>
  );
}

export default Tabs;
