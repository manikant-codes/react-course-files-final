import React from "react";
import styles from "../../../styles/recipeDetails/recipeSteps.module.css";

function RecipeStepCard() {
  return (
    <div className={styles.containerRecipeStepCard}>
      <h3 className={styles.containerRecipeStepCardTitle}>Step 1</h3>
      <p className={styles.containerRecipeStepCardDesc}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia adipisci
        eius reprehenderit maxime mollitia? Inventore quod optio accusantium
        accusamus hic excepturi exercitationem, necessitatibus, beatae eius
        molestias alias temporibus quia? Eius.
      </p>
      <div className={styles.containerRecipeStepCardImg}>
        <img
          src="https://images.carbmanager.com/0OKy2f0sOnA5BNvuP4bdMZbtpwVm1SpKR3P6vHrkSFE/resize:fit:1110/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2RiZmRjNzNhLTAxM2QtN2NiNy1mN2RkLWE5ZTNlMGIyOTNjYi5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0zN2JkYTZlNy03ZWI3LTRhMTQtOWVkZS02ZjdjNmMyNGRjYzE"
          alt=""
        />
      </div>
    </div>
  );
}

export default RecipeStepCard;
