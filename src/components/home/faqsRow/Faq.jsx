import React, { useState } from "react";
import styles from "../../../styles/home/faqsRow.module.css";

function Faq(props) {
  const { question, answer, number, index, selectedFaq, setSelectedFaq } =
    props;
  // const [isVisible, setIsVisible] = useState(false);

  // function handleClick() {
  //   setIsVisible(!isVisible);
  // }

  function handleClick() {
    setSelectedFaq(index);
  }

  console.log("selectedFaq", selectedFaq);

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqQueContainer}>
        <p>
          <span>{number}</span>
          {question}
        </p>
        {index === selectedFaq ? (
          <div className={styles.arrowIcon} onClick={handleClick}>
            <i className="fa-solid fa-chevron-up"></i>
          </div>
        ) : (
          <div className={styles.arrowIcon} onClick={handleClick}>
            <i className="fa-solid fa-chevron-down"></i>
          </div>
        )}
      </div>
      {index === selectedFaq && <p className={styles.faqAnsPara}>{answer}</p>}
    </div>
  );
}

export default Faq;
