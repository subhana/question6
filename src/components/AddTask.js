import React from 'react';

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

export default AddTask;
