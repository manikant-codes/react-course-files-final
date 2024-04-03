import React, { useEffect, useState } from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../../../services/apiServices";
import Pagination from "./Pagination";

function PokemonsList() {
  const [pokemons, setPokemons] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    fetchPokemons(page).then((data) => {
      console.log("data", data);
      setPokemons(data);
    });
  }, [page]);

  if (!pokemons) return null;

  return (
    <>
      <div className={styles.listContainer}>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <Pagination setPage={setPage} page={page} />
    </>
  );
}

export default PokemonsList;
