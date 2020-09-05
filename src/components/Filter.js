import React from 'react';

const Filter = ({ filterValue, setFilterValue }) => {

  const handleFilterClick = (status) => {
    setFilterValue(status);
  }

  return (
    <div className="filter-buttons">
      <button
        type="button"
        className={`${filterValue === 'all' ? 'active-filter' : ''}`}
        onClick={() => {handleFilterClick('all')}}>

        All
      </button>
      <button
        type="button"
        className={`${filterValue === 'active' ? 'active-filter' : ''}`}
        onClick={() => {handleFilterClick('active')}}>

        Active
      </button>
      <button
        type="button"
        className={`${filterValue === 'completed' ? 'active-filter' : ''}`}
        onClick={() => {handleFilterClick('completed')}}>

        Completed
      </button>
    </div>
  );
}

export default Filter;
