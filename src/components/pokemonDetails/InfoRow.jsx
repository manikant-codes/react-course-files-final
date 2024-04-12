import React, { useEffect, useState } from "react";
import styles from "../../styles/pokemonDetails/infoRow.module.css";
import {
  getPokemonAbilities,
  getPokemonCategory,
  getPokemonDesc,
  getPokemonHeight,
  getPokemonImage,
  getPokemonWeight,
} from "../../helpers/pokedexHelpers";
import { fetchSpeciesDetails } from "../../services/apiServices";

function InfoRow(props) {
  const { pokemon } = props;
  const [speciesDetails, setSpeciesDetails] = useState(null);

  useEffect(() => {
    fetchSpeciesDetails(pokemon.species.url).then((data) => {
      setSpeciesDetails(data);
    });
  }, [pokemon.species.url]);

  console.log("Species Details", speciesDetails);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.desc}>
          {getPokemonDesc(speciesDetails?.flavor_text_entries)}
        </p>
        <table className={styles.table}>
          <tbody>
            <tr>
              <td>
                <p>Height</p>
                <p>{getPokemonHeight(pokemon.height)}cm</p>
              </td>
              <td>
                <p>Weight</p>
                <p>{getPokemonWeight(pokemon.weight)}kg</p>
              </td>
            </tr>
            <tr>
              <td>
                <p>Abilities</p>
                <p>{getPokemonAbilities(pokemon.abilities)}</p>
              </td>
              <td>
                <p>Category</p>
                <p>{getPokemonCategory(speciesDetails?.genera)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoRow;
