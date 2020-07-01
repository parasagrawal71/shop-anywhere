import React, { useState } from "react";
import ReactPaginate from "react-paginate";

// IMPORT OTHERS HERE //
import "./Pagination.scss";

const Pagination = ({ data, perPage }) => {
  // eslint-disable-next-line no-unused-vars
  const [pageCount, setPageCount] = useState(Math.ceil(data.length / perPage));

  // const handlePageClick = (data) => {
  //   let selected = data.selected;
  //   let offset = Math.ceil(selected * perPage);
  //   this.setState({ offset: offset }, () => {
  //     this.loadCommentsFromServer();
  //   });
  // };

  return (
    <div>
      <ReactPaginate
        previousLabel="Previous"
        nextLabel="Next"
        breakLabel="..."
        breakClassName="break-me"
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={() => {}}
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
