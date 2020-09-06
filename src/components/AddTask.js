import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as taskActions from '../redux/actions/taskActions';

const AddTask = ({ createTask, tasks }) => {
  const handleKeyPress = ((e) => {
    if (e.key === 'Enter') {
      createTask(e.target.value);
      e.target.value = '';
    }
  })

  const placeholderText = 'What needs to be done?';

  return (
    <div className="add-task">
      <span className="down-arrow">
        {tasks.length>0 && <span>v</span>}
      </span>
      <input type="text" placeholder={placeholderText} onKeyPress={(e) => handleKeyPress(e)} />
    </div>
  );
}

function mapStateToProps(state, ownPorps) {
  return {
    tasks: state.tasks
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTask: bindActionCreators(taskActions.createTask, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
