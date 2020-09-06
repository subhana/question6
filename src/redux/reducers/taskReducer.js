export default function taskReducer(state = [], action) {
  switch(action.type) {
    case "CREATE_TASK":
      return [...state, { text: action.taskName, isComplete: false }];

    case "COMPLETE_TASK":
      return state.map((task, idx) => {
        if(idx === action.taskIdx) task.isComplete = true;
        return task;
      });

    case "EDIT_TASK":
      return state.map((task, idx) => {
        if(idx === action.taskIdx) task.text = action.newTaskText;
        return task;
      });

    case "DELETE_TASK":
      return state.filter((task, idx) => idx !== action.taskIdx);

    case "DELETE_COMPLETED_TASK":
      return state.filter(task => task.isComplete === false);

    default:
      return state;
  }
}
