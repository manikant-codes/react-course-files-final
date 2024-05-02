import React from "react";
import styles from "../../../styles/recipeDetails/infoBar.module.css";
import Info from "./Info";

function InfoBar({ time }) {
  return (
    <div className={styles.containerMain}>
      <Info
        title="prep time"
        number={time.prepTime === -1 ? "NA" : time.prepTime}
      />
      <Info
        title="cook time"
        number={time.cookTime === -1 ? "NA" : time.cookTime}
      />
      <Info
        title="ready time"
        number={time.readyTime === -1 ? "NA" : time.readyTime}
      />
    </div>
  );
}

export default InfoBar;
