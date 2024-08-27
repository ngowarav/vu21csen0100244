
import React from 'react';

const Pagination = ({ onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange('page number')}>Next Page</button>
    </div>
  );
};

export default Pagination;
