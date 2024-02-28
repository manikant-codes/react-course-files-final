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

  console.log("selectedFaq", selectedFaq);

  return (
    <div className={styles.faqContainer}>
      <div>
        <p>
          <span>{number}</span>
          {question}
        </p>
        {selectedFaq === index ? (
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faChevronUp}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <FontAwesomeIcon
            onClick={handleClick}
            icon={faChevronDown}
            style={{ cursor: "pointer" }}
          />
        )}
      </div>
      {selectedFaq === index && <p>{answer}</p>}
    </div>
  );
}

export default Faq;
