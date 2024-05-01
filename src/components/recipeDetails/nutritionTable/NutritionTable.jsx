import React from "react";
import styles from "../../../styles/recipeDetails/nutritionTable.module.css";
import NutritionName from "./NutritionName";

function NutritionTable() {
  return (
    <table className={styles.containerNutritionTable}>
      <tbody>
        <tr>
          <td>
            <NutritionName type={"carbs"} text={"Net Carbs"} />
          </td>
          <td>4.2g</td>
        </tr>
        <tr>
          <td className={styles.subCarbs}>Fiber</td>
          <td>1.8g</td>
        </tr>
        <tr>
          <td className={styles.subCarbs}>Total Carbs</td>
          <td>6g</td>
        </tr>
        <tr>
          <td>
            <NutritionName type={"protein"} text={"Protein"} />
          </td>
          <td>7.2g</td>
        </tr>
        <tr>
          <td>
            <NutritionName type={"fats"} text={"Fats"} />
          </td>
          <td>13.9g</td>
        </tr>
      </tbody>
    </table>
  );
}

export default NutritionTable;
