import React, { useState } from "react";
import InfoBar from "../components/recipeDetails/infoBar/InfoBar";
import About from "../components/recipeDetails/about/About";
import Ingredients from "../components/recipeDetails/ingredients/Ingredients";
import RecipeSteps from "../components/recipeDetails/recipeSteps/RecipeSteps";
import ExploreMore from "../components/recipeDetails/exploreMore/ExploreMore";
import { getRecipeDetails, getRecipeSteps } from "../services/apiServices";
import { useParams } from "react-router-dom";

function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState(null);
  const [recipeSteps, setRecipeSteps] = useState(null);

  const params = useParams();

  function fetchRecipeDetails() {
    getRecipeDetails(params.kuchbhi).then((data) => {
      setRecipeDetails(data);
    });
    getRecipeSteps(params.kuchbhi).then((data) => {
      setRecipeSteps(data[0]);
    });
  }

  if (!recipeDetails) {
    fetchRecipeDetails();
  }

  if (!recipeDetails) return null;

  console.log("recipeSteps", recipeSteps);

  return (
    <div>
      {/* <button
        onClick={fetchRecipeDetails}
        style={{ margin: "32px auto", display: "block" }}
      >
        Fetch Recipe Details
      </button> */}
      <InfoBar
        time={{
          prepTime: recipeDetails.preparationMinutes,
          cookTime: recipeDetails.cookingMinutes,
          readyTime: recipeDetails.readyInMinutes,
        }}
      />
      <About recipeDetails={recipeDetails} />
      <Ingredients ingredients={recipeDetails.extendedIngredients} />
      <RecipeSteps recipeSteps={recipeSteps} />
      <ExploreMore />
    </div>
  );
}

export default RecipeDetails;
