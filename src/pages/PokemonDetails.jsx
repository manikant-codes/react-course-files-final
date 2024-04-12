import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import InfoRow from "../components/pokemonDetails/InfoRow";
import Navigations from "../components/pokemonDetails/Navigations";
import Title from "../components/pokemonDetails/Title";
import StatsRow from "../components/pokemonDetails/statsRow/StatsRow";
import { getSinglePokemon } from "../services/apiServices";
import EvolutionsRow from "../components/pokemonDetails/evolutionsRow/EvolutionsRow";
import styles from "../styles/pokemonDetails/pokemonDetails.module.css";
import { useNavigate } from "react-router-dom";

function PokemonDetails() {
  const params = useParams();
  const [pokemon, setPokemon] = useState(null);
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  useEffect(() => {
    getSinglePokemon(params.id).then((data) => {
      setPokemon(data);
    });
  }, [params.id]);

  if (!pokemon) return null;

  console.log("pokemon", pokemon);

  return (
    <div>
      <Navigations pokemon={pokemon} setPokemon={setPokemon} />
      <Title name={pokemon.name} number={pokemon.id} />
      <InfoRow pokemon={pokemon} />
      <StatsRow pokemon={pokemon} />
      <EvolutionsRow species={pokemon.species} />
      <button className={styles.goBackBtn} onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
}

export default PokemonDetails;
