import React from "react";
import styles from "../../../styles/home/pricingRow.module.css";

function PricingCard(props) {
  return (
    <div className={styles.pricingCardContainer}>
      <div className={styles.priceContainer}>
        <h3>{props.title}</h3>
        <p>
          ₹{props.price}
          <span>/ month</span>
        </p>
      </div>

      <ul className={styles.featuresList}>
        {props.features.map(function (value, index) {
          return (
            <li key={index}>
              <i className="fa-solid fa-check"></i> {value}
            </li>
          );
        })}
        {/* <li>
          <i class="fa-solid fa-xmark"></i> Lorem ipsum dolor sit amet.
        </li> */}
      </ul>

      <button>Get Started</button>
    </div>
  );
}

export default PricingCard;
