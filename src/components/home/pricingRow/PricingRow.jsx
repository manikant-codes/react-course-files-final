import React from "react";
import Title from "../../common/Title";
import PricingCard from "./PricingCard";
import styles from "../../../styles/home/pricingRow.module.css";

const arr = ["feature 1", "feature 2", "feature 3", "feature 4"];

function PricingRow() {
  const components = [
    <PricingCard
      key={0}
      title="Plan 1"
      price="100"
      features={[
        { feature: "Feature 1", isIncluded: true },
        { feature: "Feature 2", isIncluded: true },
        { feature: "Feature 3", isIncluded: false },
        { feature: "Feature 4", isIncluded: false },
        { feature: "Feature 5", isIncluded: false },
      ]}
    />,
    <PricingCard
      key={1}
      title="Plan 2"
      price="200"
      features={[
        { feature: "Feature 1", isIncluded: true },
        { feature: "Feature 2", isIncluded: true },
        { feature: "Feature 3", isIncluded: true },
        { feature: "Feature 4", isIncluded: false },
        { feature: "Feature 5", isIncluded: false },
      ]}
    />,
    <PricingCard
      key={2}
      title="Plan 3"
      price="300"
      features={[
        { feature: "Feature 1", isIncluded: true },
        { feature: "Feature 2", isIncluded: true },
        { feature: "Feature 3", isIncluded: true },
        { feature: "Feature 4", isIncluded: true },
        { feature: "Feature 5", isIncluded: true },
      ]}
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
