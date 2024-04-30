import React from "react";
import InfoBar from "../components/recipeDetails/infoBar/InfoBar";
import About from "../components/recipeDetails/about/About";
import Ingredients from "../components/recipeDetails/ingredients/Ingredients";
import RecipeSteps from "../components/recipeDetails/recipeSteps/RecipeSteps";

function RecipeDetails() {
  return (
    <div>
      <InfoBar />
      <About />
      <Ingredients />
      <RecipeSteps />
    </div>
  );
}

export default RecipeDetails;
