import React from 'react';

const Filter = ({ selectedFilter, setSelectedFilter }) => {

  const handleFilterClick = (newFilter) => {
    setSelectedFilter(newFilter);
  }

  return (
    <div className="filter-buttons">
      <button
        type="button"
        className={`${selectedFilter === 'all' ? 'active-filter' : ''}`}
        onClick={() => {handleFilterClick('all')}}>

        All
      </button>
      <button
        type="button"
        className={`${selectedFilter === 'active' ? 'active-filter' : ''}`}
        onClick={() => {handleFilterClick('active')}}>

        Active
      </button>
      <button
        type="button"
        className={`${selectedFilter === 'completed' ? 'active-filter' : ''}`}
        onClick={() => {handleFilterClick('completed')}}>

        Completed
      </button>
    </div>
  );
}

export default Filter;
