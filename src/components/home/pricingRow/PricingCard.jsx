import React from "react";
import styles from "../../../styles/home/pricingRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faClose } from "@fortawesome/free-solid-svg-icons";

function PricingCard(props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.priceSection}>
        <h2 className={styles.title}>{props.pricing.title}</h2>
        <p>
          <span className={styles.price}>₹{props.pricing.price}</span> / month
        </p>
      </div>
      <ul className={styles.featuresList}>
        {props.pricing.features.map((value, index, array) => {
          return (
            <li
              style={{
                textDecoration:
                  value.isIncluded === false ? "line-through" : "none",
              }}
            >
              <FontAwesomeIcon
                icon={value.isIncluded === false ? faClose : faCheck}
                style={{ color: value.isIncluded === false ? "red" : "green" }}
              />
              {value.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default PricingCard;
