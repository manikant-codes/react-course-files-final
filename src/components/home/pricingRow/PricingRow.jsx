import React from "react";
import Title from "../../common/Title";
import PricingCard from "./PricingCard";
import styles from "../../../styles/home/pricingRow.module.css";

function PricingRow() {
  const components = [
    <PricingCard
      title="Plan 1"
      price="100"
      features={["Featrue 1", "Feature 2", "Feature 3"]}
    />,
    <PricingCard
      title="Plan 2"
      price="200"
      features={["Featrue 1", "Feature 2", "Feature 3"]}
    />,
    <PricingCard
      title="Plan 3"
      price="300"
      features={["Featrue 1", "Feature 2", "Feature 3"]}
    />,
  ];
  return (
    <div className={styles.pricingRowContainer}>
      <Title
        title="Pricing"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, dolorem."
      />
      <div className={styles.pricingCards}>{components}</div>
    </div>
  );
}

export default PricingRow;
