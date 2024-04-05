import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "../../../styles/home/pagination.module.css";
import { TOTAL_PAGES } from "../../../constants";

function Pagination(props) {
  const { page, setPage } = props;

  // function getPages() {
  //   const pages = [];
  //   for (let i = page; i < page + 5; i++) {
  //     if (i <= TOTAL_PAGES) {
  //       pages.push(i);
  //     } else {
  //       pages.push(i - TOTAL_PAGES);
  //     }
  //   }
  //   return pages;
  // }

  // function handlePageClick(value) {
  //   setPage(value);
  // }

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
        <FontAwesomeIcon icon={faAngleLeft} /> Prev
      </button>
      {/* {getPages().map((value) => {
        return (
          <button
            key={value}
            onClick={() => {
              handlePageClick(value);
            }}
          >
            {value}
          </button>
        );
      })} */}
      <button onClick={handleNext}>
        Next <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
}

export default Pagination;
