import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

// IMPORT OTHERS HERE //
import "./Pagination.scss";

const Pagination = ({ totalItems, perPage, setOffset }) => {
  // STATE VARIABLES
  const [numOfPages, setNumOfPages] = useState(null);

  useEffect(() => {
    setNumOfPages(Math.ceil(totalItems / perPage));
  }, [totalItems, perPage]);

  const handlePageClick = (event) => {
    const offset = Math.ceil(event.selected * perPage);
    setOffset(offset);
    window.scrollTo(0, 0);
  };

  return (
    <div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={numOfPages}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName="pagination-container"
        activeClassName="active-page"
        pageClassName="any-page"
        previousClassName="previous-btn"
        nextClassName="next-btn"
      />
    </div>
  );
};

export default Pagination;
