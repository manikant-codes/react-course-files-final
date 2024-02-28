import React, { useState } from "react";
import Title from "../../common/Title";
import styles from "../../../styles/home/faqsRow.module.css";
import Faq from "./Faq";
import { faqs } from "../../../data/homePageData";

function FaqsRow() {
  const [selectedFaq, setSelectedFaq] = useState(-1);
  return (
    <div className={styles.faqsRowContainer}>
      <Title
        title="FAQs Row"
        desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque, natus?"
      />
      <div className={styles.faqsRowContainerInner}>
        {faqs.map(function (value, index) {
          return (
            <Faq
              key={value.number}
              number={value.number}
              question={value.question}
              answer={value.answer}
              index={index}
              selectedFaq={selectedFaq}
              setSelectedFaq={setSelectedFaq}
            />
          );
        })}
      </div>
    </div>
  );
}

export default FaqsRow;
