import React, { useEffect, useState } from "react";
import styles from "../../../styles/home/pokemonsList.module.css";
import PokemonCard from "./PokemonCard";
import { fetchPokemons } from "../../../services/apiServices";
import Pagination from "./Pagination";
import Loader from "../../common/Loader";
import Error from "../../common/Error";
import useCustomFetch from "../../../customHooks/useCustomFetch";

function PokemonsList() {
  // const [pokemons, setPokemons] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  function fetchPokemonsList(setLoading, setData, setError) {
    setLoading(true);
    fetchPokemons(page)
      .then((data) => {
        console.log("data", data);
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }

  const {
    loading,
    data: pokemons,
    error,
  } = useCustomFetch(fetchPokemonsList, [page]);

  // useEffect(() => {
  //   fetchPokemons(page)
  //     .then((data) => {
  //       console.log("data", data);
  //       setPokemons(data);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }, [page]);

  if (loading)
    return (
      <Loader
        loaderSize="3rem"
        containerHeight="calc(100vh - 220.39px)"
        containerWidth="100%"
      />
    );

  if (error) {
    return <Error message={error?.message} />;
  }

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
