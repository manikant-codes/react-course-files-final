import React from "react";
import styles from "../../../styles/recipeDetails/nutritionTable.module.css";

function NutritionName({ type, text }) {
  function getBgColor() {
    if (type === "carbs") {
      return "#f94642";
    } else if (type === "protein") {
      return "#3177bb";
    } else {
      return "#fda120";
    }
  }
  return (
    <div className={styles.containerNutritionName}>
      <div
        className={styles.circleNutritionName}
        style={{ backgroundColor: getBgColor() }}
      ></div>
      <p className={styles.textNutritionName}>{text}</p>
    </div>
  );
}

export default NutritionName;
