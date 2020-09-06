import React from 'react';

const IncompleteTask = ({ tasks }) => {

  const getIncompleteTaskInfo = (tasks) => {

    const incompleteTasks = tasks.filter((task, idx) =>
      task.isComplete === false
    )
    const incompleteTaskCount = incompleteTasks.length;
    const incompleteInfo = incompleteTaskCount > 1 ? `${incompleteTaskCount} items` : `1 item`;

    return incompleteInfo;
  }

  return (
    <div className="items-left">
      {getIncompleteTaskInfo(tasks)} left
    </div>
  );
}

export default IncompleteTask;
