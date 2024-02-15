import React from "react";
import Title from "../../common/Title";
import styles from "../../../styles/home/figuresRow.module.css";
import Figure from "./Figure";

function FiguresRow() {
  // const arrJSX = [
  //   <Figure figure={100} desc="Lorem ipsum dolor sit amet." />,
  //   <Figure figure={200} desc="Lorem ipsum dolor sit amet." />,
  //   <Figure figure={300} desc="Lorem ipsum dolor sit amet." />,
  // ];

  const data = [
    { figure: 100, desc: "Lorem ipsum dolor sit amet." },
    { figure: 200, desc: "Lorem ipsum dolor sit amet." },
    { figure: 300, desc: "Lorem ipsum dolor sit amet." },
  ];

  // const figures = data.map((value, index) => {
  //   return <Figure figure={value.figure} desc={value.desc} />;
  // });

  return (
    <div className={styles.container}>
      <Title
        title="Our Journey So Far"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error, consequatur?"
      />
      <div className={styles.innerContainer}>
        {data.map((value, index) => {
          return <Figure key={index} figure={value.figure} desc={value.desc} />;
        })}
      </div>
    </div>
  );
}

export default FiguresRow;
