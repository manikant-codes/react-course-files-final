import React from "react";
import PricingCard from "./PricingCard";
import styles from "../../../styles/home/pricingRow.module.css";
import Title from "../../common/Title";

function PricingRow() {
  const data = [
    {
      title: "Product 1",
      price: 100,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, totam?",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Product 2",
      price: 200,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, totam?",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Product 3",
      price: 300,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, totam?",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      title: "Product 4",
      price: 400,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt, totam?",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
  ];

  const components = data.map((value, index) => {
    return (
      <PricingCard
        title={value.title}
        price={value.price}
        desc={value.desc}
        features={value.features}
        className={index === 2 ? styles.activeCard : ""}
      />
    );
  });

  return (
    <div className={styles.pricingRowContainer}>
      <Title
        title="Pricing"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, quidem."
      />
      <div className={styles.pricingRowInnerContainer}>{components}</div>
    </div>
  );
}

export default PricingRow;
