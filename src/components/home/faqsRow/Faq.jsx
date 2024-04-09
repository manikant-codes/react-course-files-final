import {
  faChevronDown,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/faqsRow.module.css";

function Faq(props) {
  // const [isExpanded, setIsExpanded] = useState(false);
  const { faq, activeId, setActiveId } = props;

  function handleShowHide(id) {
    setActiveId(id);
  }

  function getHeight(id) {
    console.log("id", id, activeId);
    if (id === activeId) {
      if (id === 1) {
        return "50px";
      }
      const height = document.getElementById("faq_" + id)?.clientHeight + "px";
      return height;
    } else {
      return "0px";
    }
  }

  return (
    <div className={styles.singleFaqContainer}>
      <p className={styles.que}>
        <span className={styles.queAndIcon}>
          <FontAwesomeIcon icon={faCircleQuestion} fontSize={"1.25rem"} />
          <span>{faq.que}</span>
        </span>
        <button
          className={styles.moreBtn}
          onClick={function () {
            handleShowHide(faq.id);
          }}
        >
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </p>
      <div
        className={styles.ansContainer}
        style={{ height: getHeight(faq.id) }}
      >
        <p id={"faq_" + faq.id} className={`${styles.ans}`}>
          {faq.ans}
        </p>
      </div>
    </div>
  );
}

export default Faq;
