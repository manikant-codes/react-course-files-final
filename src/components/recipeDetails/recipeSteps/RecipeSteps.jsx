import React from "react";
import RecipeStepCard from "./RecipeStepCard";
import styles from "../../../styles/recipeDetails/recipeSteps.module.css";

function RecipeSteps({ recipeSteps }) {
  return (
    <div className={styles.containerRecipeSteps}>
      <div className={styles.containerRecipeStepsTitle}>
        <h2>Recipe Steps</h2>
      </div>
      {recipeSteps?.steps?.map((step) => {
        return <RecipeStepCard key={step.number} step={step} />;
      })}
    </div>
  );
}

export default RecipeSteps;
