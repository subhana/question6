import React from 'react';

const IncompleteTask = ({ taskList }) => {

  const getIncompleteTaskInfo = (taskList) => {

    const incompleteTasks = taskList.filter((task, idx) =>
      task.isComplete === false
    )
    const incompleteTaskCount = incompleteTasks.length;
    const incompleteInfo = incompleteTaskCount > 1 ? `${incompleteTaskCount} items` : `1 item`;

    return incompleteInfo;
  }

  return (
    <div className="items-left">
      {getIncompleteTaskInfo(taskList)} left
    </div>
  );
}

export default IncompleteTask;
