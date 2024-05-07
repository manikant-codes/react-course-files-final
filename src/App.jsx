import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layouts/Layout";
import RecipeDetails from "./pages/RecipeDetails";
import { useState } from "react";
import { getRandomRecepies } from "./services/apiServices";

function App() {
  const [recipes, setRecipes] = useState(null);

  function fetchRandomRecipies() {
    getRandomRecepies().then((result) => {
      setRecipes(result?.recipes);
    });
  }

  if (!recipes) {
    fetchRandomRecipies();
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout setRecipes={setRecipes} />}>
          <Route index element={<Home recipes={recipes} />} />
          <Route path="details/:kuchbhi" element={<RecipeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
