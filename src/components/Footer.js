import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ClearCompletedTask from './ClearCompletedTask';
import Filter from './Filter';
import IncompleteTask from './IncompleteTask';
import * as taskActions from '../redux/actions/taskActions';
import * as filterActions from '../redux/actions/filterActions';

const Footer = ({ tasks, deleteCompletedTask, selectedFilter, setSelectedFilter }) => {

  return tasks.length>0 && (
    <div className="footer-container">
      <IncompleteTask tasks={tasks} />
      <Filter selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
      <ClearCompletedTask tasks={tasks} deleteCompletedTask={deleteCompletedTask} />
    </div>
  );
}

function mapStateToProps(state, ownPorps) {
  return {
    tasks: state.tasks,
    selectedFilter: state.filters.selectedFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    deleteCompletedTask: bindActionCreators(taskActions.deleteCompletedTask, dispatch),
    setSelectedFilter: bindActionCreators(filterActions.setSelectedFilter, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
