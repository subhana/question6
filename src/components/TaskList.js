import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import TaskItem from './TaskItem';
import * as taskActions from '../redux/actions/taskActions';

const TaskList = ({ tasks, completeTask, editTask, deleteTask, selectedFilter }) => {

  return tasks.length>0 && (
    <div className="task-list">
      {tasks.map((task, index) => {

        let taskListTemplate = (<TaskItem
          key={`${index}`}
          task={task}
          taskIdx={index}
          completeTask={completeTask}
          editTask={editTask}
          deleteTask={deleteTask}
        />)

        switch (selectedFilter) {
          case 'active':
            return (task.isComplete === false) && taskListTemplate;
          case 'completed':
            return (task.isComplete === true) && taskListTemplate;
          default:
            return taskListTemplate
        }
      })}
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
    completeTask: bindActionCreators(taskActions.completeTask, dispatch),
    editTask: bindActionCreators(taskActions.editTask, dispatch),
    deleteTask: bindActionCreators(taskActions.deleteTask, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
