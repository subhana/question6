import React from 'react';

import ClearCompletedTask from './ClearCompletedTask';
import Filter from './Filter';
import IncompleteTask from './IncompleteTask';

const Footer = ({ taskList, deletCompletedTask, filterValue, setFilterValue }) => {

  return taskList.length>0 && (
    <div className="footer-container">
      <IncompleteTask taskList={taskList} />
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <ClearCompletedTask tasks={taskList} deletCompletedTask={deletCompletedTask} />
    </div>
  );
}

export default Footer;
