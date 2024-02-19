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
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: false },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: false },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: false },
          ]}
          price={100}
        />
        <PricingCard
          title="Package B"
          features={[
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: false },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: false },
          ]}
          price={500}
          activeCard
        />
        <PricingCard
          title="Package C"
          features={[
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
            { feature: "Lorem ipsum dolor sit amet.", hasFeature: true },
          ]}
          price={1000}
        />
      </div>
    </div>
  );
}

export default PricingRow;
