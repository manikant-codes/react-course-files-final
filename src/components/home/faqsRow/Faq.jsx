import React from "react";
import styles from "../../../styles/home/faqsRow.module.css";

function Faq(props) {
  const { number, question, answer, index, selectedFaq, setSelectedFaq } =
    props;
  //   const [isExpanded, setIsExpanded] = useState(false);

  //   function handleClick() {
  //     setIsExpanded(!isExpanded);
  //   }

  function handleClick() {
    if (selectedFaq === index) {
      setSelectedFaq(-1);
    } else {
      setSelectedFaq(index);
    }
  }

  console.log("selected faq", selectedFaq);

  return (
    <div className={styles.faqContainer}>
      <div className={styles.faqQueContainer}>
        <p>
          <span>{number}</span>
          {question}
        </p>
        {index === selectedFaq ? (
          <div className={styles.iconContainer} onClick={handleClick}>
            <i className="fa-solid fa-angle-up"></i>
          </div>
        ) : (
          <div className={styles.iconContainer} onClick={handleClick}>
            <i className="fa-solid fa-angle-down"></i>
          </div>
        )}
      </div>
      {index === selectedFaq && <p className={styles.faqAnsPara}>{answer}</p>}
    </div>
  );
}

export default Faq;
