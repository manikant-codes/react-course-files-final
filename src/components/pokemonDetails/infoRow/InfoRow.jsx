import React from "react";
import { getPokemonImage } from "../../home/pokemonsList/pokemonCard/cardHelper";
import { getAbilities } from "./infoRowHelper";
import styles from "./infoRow.module.css";

function InfoRow(props) {
  const { pokemon } = props;

  return (
    <div className={styles.containerMain}>
      <div className={styles.containerImg}>
        <img src={getPokemonImage(pokemon)} alt="" />
      </div>
      <div className={styles.containerInfo}>
        <p className={styles.descPara}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          dolorem dolor qui ratione iusto labore modi optio atque deserunt, illo
          veritatis laborum velit nisi maxime odio similique architecto
          voluptatibus rerum.
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
            </tr>
            {/* <tr>
              <td></td>
              <td></td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default InfoRow;
