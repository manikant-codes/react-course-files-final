import React from "react";
import styles from "../../styles/pokemonDetails/navigations.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Navigations() {
  return (
    <div className={styles.container}>
      <button>
        <FontAwesomeIcon icon={faArrowLeft} /> Prev
      </button>
      <button>
        Next <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Navigations;
