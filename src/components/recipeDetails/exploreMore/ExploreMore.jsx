import React from "react";
import styles from "../../../styles/recipeDetails/exploreMore.module.css";
import ExploreMoreCard from "./ExploreMoreCard";

function ExploreMore() {
  return (
    <div className={styles.mainExploreMore}>
      <h2 className={styles.titleExploreMore}>Explore More Recipes</h2>
      <div className={styles.cardsExploreMore}>
        <ExploreMoreCard
          src="https://assets.cms.carbmanager.com/cm-website/151794ae-12c4-4742-9075-9111c0f224b7_recipes-cat-3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          title="Easy"
        />
        <ExploreMoreCard
          src="https://assets.cms.carbmanager.com/cm-website/151794ae-12c4-4742-9075-9111c0f224b7_recipes-cat-3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          title="Easy"
        />
        <ExploreMoreCard
          src="https://assets.cms.carbmanager.com/cm-website/151794ae-12c4-4742-9075-9111c0f224b7_recipes-cat-3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          title="Easy"
        />
        <ExploreMoreCard
          src="https://assets.cms.carbmanager.com/cm-website/151794ae-12c4-4742-9075-9111c0f224b7_recipes-cat-3%402x.jpg?auto=compress%2Cformat&w=0.5&auto=format&fit=max"
          title="Easy"
        />
      </div>
    </div>
  );
}

export default ExploreMore;
