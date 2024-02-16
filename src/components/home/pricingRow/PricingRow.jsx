import React from "react";
import PricingCard from "./PricingCard";
import styles from "../../../styles/home/pricingRow.module.css";
import Title from "../../common/Title";

function PricingRow() {
  return (
    <div className={styles.pricingRowOuterContainer}>
      <Title
        title="Our Packages"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, consequatur?"
      />

      <div className={styles.pricingRowInnerContainer}>
        <PricingCard
          title="Package A"
          features={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          ]}
          price={100}
        />
        <PricingCard
          title="Package B"
          features={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          ]}
          price={500}
          activeCard
        />
        <PricingCard
          title="Package C"
          features={[
            "Lorem ipsum dolor sit amet.",
            "Lorem ipsum dolor sit amet.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing.",
            "Lorem ipsum dolor sit.",
            "Lorem, ipsum dolor sit amet consectetur adipisicing.",
          ]}
          price={1000}
        />
      </div>
    </div>
  );
}

export default PricingRow;
