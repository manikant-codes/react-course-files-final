import React, { useState } from "react";
import Faq from "./Faq";
import Title from "../../common/Title";
import styles from "../../../styles/home/faqsRow.module.css";
import { faqs } from "../../../data/home";

function FaqsRow() {
  const [activeId, setActiveId] = useState(1);

  return (
    <div className={styles.rowContainer}>
      <Title
        title="FAQs"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptatem quia magnam earum libero perferendis!"
      />
      <div className={styles.faqsContainer}>
        {faqs.map((value) => {
          return (
            <Faq
              key={value.id}
              faq={value}
              activeId={activeId}
              setActiveId={setActiveId}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FaqsRow;
