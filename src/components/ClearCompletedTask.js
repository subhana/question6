import React from 'react';

const ClearCompletedTask = ({ tasks, deletCompletedTask }) => {

  const hasCompletedTasks = () => {
    const completedTasks = tasks.filter((task) =>
      task.isComplete === true
    )
    return completedTasks.length > 0;
  }

  const handleClearCompletedClick = () => {
    deletCompletedTask();
  }

  return (
    hasCompletedTasks()
     && <div className="clear-completed">
          <a onClick={() => {handleClearCompletedClick()}}>Clear completed</a>
        </div>
  );
}

export default ClearCompletedTask;
