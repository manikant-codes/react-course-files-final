import React from "react";
import styles from "../../../styles/home/pricingRow.module.css";
import FeatureListItem from "./FeatureListItem";

function PricingCard(props) {
  return (
    <div
      className={`${styles.pricingCardContainer} ${
        props.activeCard ? styles.activeCard : ""
      }`}
    >
      <div className={styles.pricingCardPriceContainer}>
        <h3>{props.title}</h3>
        <p>
          ₹{props.price} <span>/ Month</span>
        </p>
      </div>
      <div className={styles.pricingCardFeaturesContainer}>
        {props.features.map((value, index) => {
          return (
            <FeatureListItem
              key={index}
              feature={value.feature}
              hasFeature={value.hasFeature}
            />
          );
        })}
      </div>
      <button>Know More</button>
    </div>
  );
}

export default PricingCard;
