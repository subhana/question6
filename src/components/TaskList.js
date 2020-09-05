import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, completeTask, editTask, deleteTask, filterValue }) => {

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

        switch (filterValue) {
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

export default TaskList;
