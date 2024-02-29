import React, { useState } from "react";
import { faqs } from "../../../data/homePageData";
import Faq from "./Faq";
import Title from "../../common/Title";
import styles from "../../../styles/home/faqsRow.module.css";

function FaqsRow() {
  const [selectedFaq, setSelectedFaq] = useState(0);

  return (
    <div className={styles.faqsRowContainer}>
      <Title
        title="FAQs"
        desc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ipsam."
      />
      <div className={styles.faqsRowContainerInner}>
        {faqs.map(function (faq, index) {
          return (
            <Faq
              key={index}
              question={faq.question}
              answer={faq.answer}
              number={faq.number}
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
