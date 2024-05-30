import { Pagination } from "flowbite-react";
import React, { useContext } from "react";
import { newsContext } from "../../providers/NewsProvider";

function PaginationComponent() {
  const { currentPage, onPageChange } = useContext(newsContext);
  return (
    <div className="flex overflow-x-auto sm:justify-center mt-8">
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default PaginationComponent;
