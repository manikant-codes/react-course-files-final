import React from "react";
import styles from "../../../styles/recipeDetails/about.module.css";

function RecipeImg() {
  return (
    <div className={styles.containerRecipeImg}>
      <img
        src="https://images.carbmanager.com/c1A6ScnaUT0a1OpP2RnxI5u7DUPPwADmf8nq5o5qlbI/resize:fit:1200/L25jYWNoZS01NzkzZC5hcHBzcG90LmNvbS9vL2JkMGVmOTVmLTU2MWUtMzlkYy04OTE4LWEzZjkxOWY3MTEwMC5qcGVnP2FsdD1tZWRpYSZ0b2tlbj0xODUyNzg5ZC0zYjAzLTQ2NGMtOTk2My1jZDBhM2U2ZDBmOTQ"
        alt=""
      />
    </div>
  );
}

export default RecipeImg;
