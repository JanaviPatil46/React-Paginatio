

import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
import './App.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
  };

  const data = Array.from(Array(500).keys());
  const perPage = 5;
  const startIndex = currentPage * perPage;
  const paginatedData = data.slice(startIndex, startIndex + perPage);

  // Calculate total number of pages
  const totalPages = Math.ceil(data.length / perPage);

  return (
    <div>
      <h1>Pagination Example</h1>
      <ul>
        {paginatedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <ReactPaginate
        previousLabel={<FaChevronLeft />}
        nextLabel={<FaChevronRight />}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={totalPages}
        marginPagesDisplayed={2}
        // pageRangeDisplayed={totalPages > 5 ? 0 : 5} 
        // Hide page numbers if total pages > 5
        onPageChange={handlePageClick}
        containerClassName={'pagination'}
        activeClassName={'active'}
      />
    </div>
  );
};

export default App;


