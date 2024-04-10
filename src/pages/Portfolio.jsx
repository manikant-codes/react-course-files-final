import React, { useState } from "react";
import Title from "../components/common/Title";
import styles from "../styles/portfolio/portfolio.module.css";
import Tabs from "../components/portfolio/Tabs";
import Gallery from "../components/portfolio/Gallery";

function Portfolio() {
  const [activeTab, setActiveTab] = useState(1);

  console.log("activeTab", activeTab);

  return (
    <div className={styles.containerMain}>
      <div className={styles.titleContainer}>
        <Title
          title="Portfolio"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt a numquam eius voluptatum nam fugiat, repellendus quas iste ea laborum, laboriosam doloribus officiis maiores inventore dolorem explicabo commodi, magnam natus."
        />
      </div>
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
      <Gallery activeTab={activeTab} />
    </div>
  );
}

export default Portfolio;
