import React from "react";
import styles from "../../styles/pokemonDetails/navigations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { fetchSinglePokemon } from "../../services/apiServices";

function Navigations(props) {
  const { pokemon, setPokemon } = props;

  function handleNext() {
    if (pokemon.id < 1024) {
      fetchSinglePokemon(pokemon.id + 1).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 1025) {
      fetchSinglePokemon(10001).then((data) => {
        setPokemon(data);
      });
    } else {
      fetchSinglePokemon(pokemon.id + 1).then((data) => {
        setPokemon(data);
      });
    }
  }

  function handlePrev() {
    if (pokemon.id > 1) {
      fetchSinglePokemon(pokemon.id - 1).then((data) => {
        setPokemon(data);
      });
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} /> Prev
      </button>
      <button onClick={handleNext}>
        Next <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Navigations;
