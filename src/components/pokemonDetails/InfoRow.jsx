import React, { useEffect, useState } from "react";
import styles from "../../styles/pokemonDetails/infoRow.module.css";
import {
  getPokemonAbilities,
  getPokemonCategory,
  getPokemonDesc,
  getPokemonImage,
} from "../../helpers/pokedexHelper";
import { getSpeciesDetails } from "../../services/apiServices";

function InfoRow(props) {
  const { pokemon } = props;
  const [species, setSpecies] = useState(null);

  console.log("species", species);

  useEffect(() => {
    getSpeciesDetails(pokemon.species.url).then((data) => {
      setSpecies(data);
    });
  }, [pokemon.species.url]);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.desc}>
          {getPokemonDesc(species?.flavor_text_entries)}
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
                <p>{getPokemonAbilities(pokemon.abilities)}</p>
              </td>
              <td>
                <p>Category</p>
                <p>{getPokemonCategory(species?.genera)}</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoRow;
