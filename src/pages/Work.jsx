import React, { useState } from "react";
import Title from "../components/common/Title";
import styles from "../styles/work/work.module.css";
import WorkTabs from "../components/work/workTabs.jsx/WorkTabs";
import WorkGallery from "../components/work/workGallery/WorkGallery";

function Work() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={styles.containerOuter}>
      <Title
        title="Our Work"
        desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, quo omnis repellendus est ratione animi."
      />
      <div className={styles.containerInner}>
        <WorkTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <WorkGallery activeTab={activeTab} />
      </div>
    </div>
  );
}

export default Work;
