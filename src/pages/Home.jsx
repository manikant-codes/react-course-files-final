import React, { useState } from "react";
import Searchbar from "../components/home/Searchbar";
import PokemonsList from "../components/home/pokemonsList/PokemonsList";
import SearchedPokemon from "../components/home/SearchedPokemon";

function Home() {
  const [searched, setSearched] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Searchbar query={query} setQuery={setQuery} setSearched={setSearched} />
      {searched ? (
        <SearchedPokemon
          pokemon={searched}
          setSearched={setSearched}
          setQuery={setQuery}
        />
      ) : (
        <PokemonsList />
      )}
    </div>
  );
}

export default Home;
