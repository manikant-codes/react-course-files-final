import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "../../../styles/home/servicesRow.module.css";
import Title from "../../common/Title";

function ServicesRow() {
  return (
    <div className={styles.rowContainer}>
      <Title
        title="Our Services"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat!"
      />
      <div className={styles.innerContainer}>
        <ServiceCard
          src="/images/01.jpg"
          title="Service 1"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat!"
        />
        <ServiceCard
          src="/images/02.jpg"
          title="Service 2"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat!"
        />
        <ServiceCard
          src="/images/03.jpg"
          title="Service 3"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat!"
        />
        <ServiceCard
          src="/images/04.jpg"
          title="Service 4"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, repellat!"
        />
      </div>
    </div>
  );
}

export default ServicesRow;
