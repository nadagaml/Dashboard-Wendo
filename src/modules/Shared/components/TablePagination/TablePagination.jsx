import React from "react";


const TablePagination = ({ currentPage, totalPages, onPageChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="custom-pagination">
      {pages.map((page) => (
        <button
          key={page}
          className={`page-btn ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page.toString().padStart(2, '0')}
        </button>
      ))}
    </div>
  );
};

export default TablePagination;
