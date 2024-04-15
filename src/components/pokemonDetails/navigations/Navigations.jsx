import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./navigations.module.css";
import { getSinglePokemon } from "../../../services/apiServices";
import { useNavigate } from "react-router-dom";

function Navigations(props) {
  const { pokemon, setPokemon } = props;
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  function handlePrev() {
    if ((pokemon.id > 1 && pokemon.id <= 1025) || pokemon.id > 10001) {
      getSinglePokemon(pokemon.id - 1).then((data) => {
        setPokemon(data);
      });
    } else if (pokemon.id === 10001) {
      getSinglePokemon(1025).then((data) => {
        setPokemon(data);
      });
    }
  }

  function handleNext() {
    if (pokemon.id < 1025 || pokemon.id >= 10001) {
      getSinglePokemon(pokemon.id + 1).then((data) => {
        console.log("data", data);
        setPokemon(data);
      });
    } else if (pokemon.id === 1025) {
      getSinglePokemon(10001).then((data) => {
        console.log("data", data);
        setPokemon(data);
      });
    }
  }

  return (
    <div
      className={styles.container}
      style={{
        position: "sticky",
        top: "calc(100vh - 40px)",
        left: "0px",
        zIndex: 1000,
      }}
    >
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} /> Prev
      </button>
      <button
        onClick={goBack}
        // style={{ position: "fixed", right: "50px", bottom: "50px" }}
      >
        Go Back
      </button>
      <button onClick={handleNext}>
        Next <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Navigations;
