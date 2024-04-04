import React from "react";
import styles from "./pagination.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { TOTAL_PAGES } from "../../../../constants";

function Pagination(props) {
  const { page, setPage } = props;

  function handlePrev() {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(TOTAL_PAGES);
    }
  }

  function handleNext() {
    if (page < TOTAL_PAGES) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={handlePrev}>
        <FontAwesomeIcon icon={faArrowLeft} />
        &nbsp; Prev
      </button>
      <button onClick={handleNext}>
        Next&nbsp;
        <FontAwesomeIcon icon={faArrowRight} />
      </button>
    </div>
  );
}

export default Pagination;
