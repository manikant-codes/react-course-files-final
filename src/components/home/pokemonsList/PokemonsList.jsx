import React, { useEffect, useState } from "react";
import PokemonCard from "./pokemonCard/PokemonCard";
import styles from "./pokemonsList.module.css";
import { getPokemons } from "../../../services/apiServices";
import Pagination from "./pagination/Pagination";

function PokemonsList() {
  const [pokemons, setPokemons] = useState(null);
  const [page, setPage] = useState(1);

  console.log("page", page);

  useEffect(() => {
    const promise = getPokemons(page);
    promise.then((data) => {
      setPokemons(data);
    });
  }, [page]);

  if (!pokemons) return null;

  return (
    <>
      <div className={styles.container}>
        {pokemons.map((pokemon) => {
          return <PokemonCard key={pokemon.id} pokemon={pokemon} />;
        })}
      </div>
      <Pagination page={page} setPage={setPage} />
    </>
  );
}

export default PokemonsList;
