import React, { useState } from "react";
import Searchbar from "../components/home/Searchbar";
import PokemonsList from "../components/home/pokemonsList/PokemonsList";
import SearchedPokemon from "../components/home/SearchedPokemon";

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
          setQuery={setQuery}
          setSearchedPokemon={setSearchedPokemon}
        />
      ) : (
        <PokemonsList />
      )}
    </div>
  );
}

export default Home;
