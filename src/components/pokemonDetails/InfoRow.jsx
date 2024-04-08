import React from "react";
import styles from "../../styles/pokemonDetails/infoRow.module.css";
import {
  getPokemonAbilities,
  getPokemonImage,
} from "../../helpers/pokemonCardHelper";

function InfoRow(props) {
  const { pokemon } = props;

  console.log(pokemon);

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          molestiae modi tenetur ab voluptatum accusantium et reprehenderit
          amet, ad laudantium beatae incidunt. Fuga ipsa labore eius nobis
          similique, aliquid sed.
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
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoRow;
