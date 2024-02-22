import React from "react";
import styles from "../../../styles/home/pricingRow.module.css";
import CheckIcon from "../../common/icons/CheckIcon";

function PricingCard(props) {
  return (
    <div className={styles.pricingCardContainer + " " + props.className}>
      <div className={styles.pricingCardDescContainer}>
        <h3>{props.title}</h3>
        <p>₹{props.price}</p>
        <p>{props.desc}</p>
      </div>
      <ul className={styles.cardFeaturesList}>
        {props.features.map((value, index) => {
          return (
            <li key={index}>
              <CheckIcon />
              <span>{value}</span>
            </li>
          );
        })}
      </ul>
      <button>Choose Plan</button>
    </div>
  );
}

export default PricingCard;
