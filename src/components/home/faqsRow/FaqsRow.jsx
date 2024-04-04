import React from "react";
import Faq from "./Faq";
import Title from "../../common/Title";
import styles from "../../../styles/home/faqsRow.module.css";

function FaqsRow() {
  return (
    <div className={styles.rowContainer}>
      <Title
        title="FAQs"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem quia magnam earum libero perferendis!"
      />
      <div className={styles.faqsContainer}>
        <Faq />
        <Faq />
        <Faq />
      </div>
    </div>
  );
}

export default FaqsRow;
