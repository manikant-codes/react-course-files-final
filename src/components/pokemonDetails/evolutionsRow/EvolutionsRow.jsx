import React, { useEffect, useState } from "react";
import styles from "../../../styles/pokemonDetails/evolutionsRow.module.css";
import EvolutionCard from "./EvolutionCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { getPokemonEvolutions } from "../../../services/apiServices";

function EvolutionsRow(props) {
  const { species } = props;
  const [evolutions, setEvolutions] = useState(null);

  useEffect(() => {
    getPokemonEvolutions(species.url).then((data) => {
      setEvolutions(data);
    });
  }, [species.url]);

  return (
    <div className={styles.rowContainer}>
      <h2 className={styles.title}>Evolutions</h2>
      <div className={styles.rowContainerInner}>
        {evolutions?.map((pokemon, index) => {
          return (
            <React.Fragment key={pokemon.id}>
              <EvolutionCard pokemon={pokemon} />;
              {index !== evolutions.length - 1 && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  fontSize="3rem"
                  color="white"
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default EvolutionsRow;
