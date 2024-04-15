import React, { useEffect, useState } from "react";
import { getPokemonImage } from "../../home/pokemonsList/pokemonCard/cardHelper";
import { getAbilities, getCategory, getDesc } from "./infoRowHelper";
import styles from "./infoRow.module.css";
import { getSpeciesDetails } from "../../../services/apiServices";

function InfoRow(props) {
  const { pokemon } = props;
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    getSpeciesDetails(pokemon.species.url).then((data) => {
      setSpeciesDetails(data);
    });
  }, [pokemon]);

  console.log("speciesDetails", speciesDetails);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.descPara}>
          {getDesc(speciesDetails?.flavor_text_entries)}
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <p>Height</p>
                <p>{pokemon.height}</p>
              </td>
              <td>
                <p>Weight</p>
                <p>{pokemon.weight}</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Abilities</p>
                <p>{getAbilities(pokemon.abilities)}</p>
              </td>
              <td>
                <p>Category</p>
                <p>{getCategory(speciesDetails?.genera)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoRow;
