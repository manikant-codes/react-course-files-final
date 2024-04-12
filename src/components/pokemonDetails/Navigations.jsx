import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../styles/pokemonDetails/navigations.module.css";
import { getSinglePokemon } from "../../services/apiServices";

function Navigations(props) {
  const { pokemon, setPokemon } = props;

  function handlePrev() {
    if (pokemon.id > 1) {
      getSinglePokemon(pokemon.id - 1).then((data) => {
        setPokemon(data);
      });
    }
  }

  function handleNext() {
    if (pokemon.id < 1024) {
      getSinglePokemon(pokemon.id + 1).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 1025) {
      getSinglePokemon(10001).then((data) => {
        setPokemon(data);
      });
    } else {
      if (pokemon.id < 10277) {
        getSinglePokemon(pokemon.id + 1).then((data) => {
          setPokemon(data);
        });
      }
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
