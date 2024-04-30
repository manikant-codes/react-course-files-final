import React from "react";
import RecipeStepCard from "./RecipeStepCard";
import styles from "../../../styles/recipeDetails/recipeSteps.module.css";

function RecipeSteps() {
  return (
    <div className={styles.containerRecipeSteps}>
      <div className={styles.containerRecipeStepsTitle}>
        <h2>Recipe Steps</h2>
      </div>
      <RecipeStepCard />
    </div>
  );
}

export default RecipeSteps;
