import React from "react";
import styles from "../../../styles/recipeDetails/recipeSteps.module.css";
import { getRecipeImage } from "./stepHelper";

function RecipeStepCard({ step }) {
  return (
    <div className={styles.containerRecipeStepCard}>
      <h3 className={styles.containerRecipeStepCardTitle}>
        Step {step.number}
      </h3>
      <p className={styles.containerRecipeStepCardDesc}>{step.step}</p>
      <div className={styles.containerRecipeStepCardImg}>
        <img src={getRecipeImage(step)} alt="" />
      </div>
    </div>
  );
}

export default RecipeStepCard;
