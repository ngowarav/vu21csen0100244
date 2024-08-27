
import React from 'react';

const Filter = ({ onChange }) => {
  return (
    <div className="filter">
      <button onClick={() => onChange('filter criteria')}>Apply Filter</button>
    </div>
  );
};

export default Filter;
