import React, { useState } from 'react';

const TaskItem = ({ task, taskIdx, completeTask, editTask, deleteTask }) => {

  let [isHovering, setIsHovering] = useState(false);
  let [isEditing, setIsEditing] = useState(false);
  let [taskText, setTaskText] = useState(task.text);

  const handleTaskCheck = () => {
    if(task.isComplete === false)
      completeTask(taskIdx);
  }

  const handleTaskClick = () => {
    setIsEditing(true);
  }

  const handleTaskEditing = (e) => {
    setTaskText(e.target.value);
  }

  const handleTaskEditDone = (e) => {
    setIsEditing(false);
    editTask(taskText, taskIdx);
  }

  const handleTaskRemove = () => {
    deleteTask(taskIdx);
  }

  const handleMouseEnter = () => {
    setIsHovering(true);
  }

  const handleMouseLeave = () => {
    setIsHovering(false);
  }

  return (
    <div className={`task-item ${task.isComplete ? 'completed' : 'not-completed'}`}
         onMouseEnter={() => handleMouseEnter()}
         onMouseLeave={() => handleMouseLeave()}>

        {!isEditing
          && <div className="check-complete">
                {isHovering &&
                  <input type="checkbox"
                         checked={task.isComplete}
                         onChange={() => {handleTaskCheck()}}
                         name="complete-task"/>
                }
              </div>
        }
        {!isEditing
          && <div className="text" onClick={() => {handleTaskClick()}}>
                {task.text}
              </div>
        }
        {isEditing
          &&
          <form onSubmit={(e) => {e.preventDefault(); handleTaskEditDone(e)}}>
            <input type="text"
                   value={taskText}
                   onChange={(e) => {handleTaskEditing(e)}}
                   onMouseOut={(e) => {handleTaskEditDone(e)}}
                   name="task-edit"
                   className="edit"/>
          </form>
        }
        {!isEditing && <div className="remove">
          {isHovering && <button type="button" onClick={() => {handleTaskRemove()}}>X</button>}
        </div>}
    </div>
  );
}

export default TaskItem;
