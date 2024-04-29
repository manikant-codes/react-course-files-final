import React from "react";
import styles from "../../../styles/recipeDetails/infoBar.module.css";
import Info from "./Info";

function InfoBar() {
  return (
    <div className={styles.containerMain}>
      <Info title="prep time" number={20} />
      <Info title="cook time" number={10} />
      <Info title="ready time" number={30} />
    </div>
  );
}

export default InfoBar;
