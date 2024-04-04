import React, { useEffect, useRef, useState } from "react";
import styles from "../../../styles/home/faqsRow.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";

function Faq() {
  const [isExpanded, setIsExpanded] = useState(false);

  function handleShowHide(e) {
    setIsExpanded(!isExpanded);
  }

  function getHeight() {
    if (isExpanded) {
      return 50 + "px";
    } else {
      return "0px";
    }
  }

  return (
    <div className={styles.singleFaqContainer}>
      <p className={styles.que}>
        <span className={styles.queAndIcon}>
          <FontAwesomeIcon icon={faCircleQuestion} fontSize={"1.25rem"} />
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            molestias?
          </span>
        </span>
        <button className={styles.moreBtn} onClick={handleShowHide}>
          <FontAwesomeIcon icon={faChevronDown} />
        </button>
      </p>

      <p className={`${styles.ans}`} style={{ height: getHeight() }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nisi nobis
        consectetur itaque ullam nihil officia eligendi rem minima blanditiis.
      </p>
    </div>
  );
}

export default Faq;
