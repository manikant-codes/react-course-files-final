import React from "react";
import styles from "../../../styles/recipeDetails/ingredients.module.css";

function IngredientsListItem() {
  return (
    <div className={styles.containerIngredientsListItem}>
      <div className={styles.containerListItemImg}>
        <img
          src="https://images.carbmanager.com/_e_LHqtXHKITImPblZolhgx-mrdWCYQKgzhbEaG2fo4/resize:fit:80/L2Fzc2V0cy5jYXJibWFuYWdlci5jb20vby9zdGF0aWMlMkZmb29kSWNvbnMlMkZpNzM2LnBuZz9hbHQ9bWVkaWE"
          alt=""
        />
      </div>
      <div className={styles.containerListItemDesc}>
        <p>Spinach Raw</p>
        <p>10 ounce</p>
      </div>
    </div>
  );
}

export default IngredientsListItem;
