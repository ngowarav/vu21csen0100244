
import React from 'react';

const Sort = ({ onChange }) => {
  return (
    <div className="sort">
      <button onClick={() => onChange('sort criteria')}>Sort</button>
    </div>
  );
};

export default Sort;
