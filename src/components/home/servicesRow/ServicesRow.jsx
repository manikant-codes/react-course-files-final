import React from "react";
import ServiceCard from "./ServiceCard";
import styles from "../../../styles/home/servicesRow.module.css";
import Title from "../../common/Title";

function ServicesRow() {
  const arr = [
    {
      src: "/images/01.jpg",
      title: "Camping",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?",
    },
    {
      src: "/images/02.jpg",
      title: "Treaking",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?",
    },
    {
      src: "/images/03.jpg",
      title: "Para Gliding",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?",
    },
    {
      src: "/images/04.jpg",
      title: "Hills",
      desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, quidem?",
    },
  ];

  return (
    <div className={styles.servicesRowContainer}>
      <Title
        title="Our Service"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, magnam."
      />
      <div className={styles.servicesContainer}>
        {arr.map(function (value, index, array) {
          return (
            <ServiceCard
              key={index}
              src={value.src}
              title={value.title}
              desc={value.desc}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ServicesRow;
