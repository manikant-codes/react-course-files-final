import React, { useState } from "react";
import Searchbar from "../components/home/searchbar/Searchbar";
import PokemonsList from "../components/home/pokemonsList/PokemonsList";
import SearchedPokemon from "../components/home/searchedPokemon/SearchedPokemon";

function Home() {
  const [searchedPokemon, setSearchedPokemon] = useState(null);
  const [query, setQuery] = useState("");

  return (
    <div>
      <Searchbar
        query={query}
        setQuery={setQuery}
        setSearchedPokemon={setSearchedPokemon}
      />
      {searchedPokemon ? (
        <SearchedPokemon
          pokemon={searchedPokemon}
          setSearchedPokemon={setSearchedPokemon}
          setQuery={setQuery}
        />
      ) : (
        <PokemonsList />
      )}
    </div>
  );
}

export default Home;
