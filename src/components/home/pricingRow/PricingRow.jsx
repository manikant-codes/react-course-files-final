import React from "react";
import styles from "../../../styles/home/pricingRow.module.css";
import Title from "../../common/Title";
import PricingCard from "./PricingCard";
import { plans } from "../../../data/home";

function PricingRow() {
  //   const arr = [
  //     <PricingCard key={0} princing={plans[0]} />,
  //     <PricingCard key={1} princing={plans[1]} />,
  //     <PricingCard key={2} princing={plans[2]} />,
  //   ];

  return (
    <div className={styles.containerOuter}>
      <Title
        title="Our Plans"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, aperiam repellendus eaque hic temporibus consequuntur."
      />
      <div className={styles.containerInner}>
        {plans.map(function (value, index, array) {
          return <PricingCard key={index} pricing={value} />;
        })}
      </div>
    </div>
  );
}

export default PricingRow;
