import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/faqsRow.module.css";

function Faq(props) {
  const { number, question, answer, selectedFaq, setSelectedFaq, index } =
    props;

  function handleClick() {
    setSelectedFaq(index);
  }

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqQueContainer}>
        <p>
          <span>{number}</span>
          {question}
        </p>
        {selectedFaq === index ? (
          <div onClick={handleClick} className={styles.arrowIconContainer}>
            <FontAwesomeIcon icon={faChevronUp} />
          </div>
        ) : (
          <div onClick={handleClick} className={styles.arrowIconContainer}>
            <FontAwesomeIcon icon={faChevronDown} />
          </div>
        )}
      </div>
      {selectedFaq === index && <p className={styles.faqAnsPara}>{answer}</p>}
    </div>
  );
}

export default Faq;
