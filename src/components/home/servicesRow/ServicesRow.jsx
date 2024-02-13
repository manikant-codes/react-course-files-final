import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "../../../styles/home/servicesRow.module.css";
import Title from "../../common/Title";

function ServicesRow() {
  return (
    <div className={styles.servicesRowContainer}>
      <Title
        title="Our Service"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magnam."
      />
      <div className={styles.servicesContainer}>
        <ServiceCard
          src="/images/01.jpg"
          title="Camping"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?"
        />
        <ServiceCard
          src="/images/02.jpg"
          title="Treaking"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?"
        />
        <ServiceCard
          src="/images/03.jpg"
          title="Para Gliding"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?"
        />
        <ServiceCard
          src="/images/04.jpg"
          title="Hills"
          desc="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?"
        />
      </div>
    </div>
  );
}

export default ServicesRow;
