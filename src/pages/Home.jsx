import React from "react";
import Searchbar from "../components/home/searchbar/Searchbar";
import PokemonsList from "../components/home/pokemonsList/PokemonsList";

function Home() {
  return (
    <div>
      <Searchbar />
      <PokemonsList />
    </div>
  );
}

export default Home;
