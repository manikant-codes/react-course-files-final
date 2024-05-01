import React from "react";
import InfoBar from "../components/recipeDetails/infoBar/InfoBar";
import About from "../components/recipeDetails/about/About";
import Ingredients from "../components/recipeDetails/ingredients/Ingredients";
import RecipeSteps from "../components/recipeDetails/recipeSteps/RecipeSteps";
import ExploreMore from "../components/recipeDetails/exploreMore/ExploreMore";

function RecipeDetails() {
  return (
    <div>
      <InfoBar />
      <About />
      <Ingredients />
      <RecipeSteps />
      <ExploreMore />
    </div>
  );
}

export default RecipeDetails;
