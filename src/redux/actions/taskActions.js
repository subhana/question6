import { CREATE_TASK,  COMPLETE_TASK, EDIT_TASK, DELETE_TASK, DELETE_COMPLETED_TASK} from './types'

export function createTask(taskName) {
  return {type: CREATE_TASK, taskName};
}

export function completeTask(taskIdx) {
  return {type: COMPLETE_TASK, taskIdx};
}

export function editTask(newTaskText, taskIdx) {
  return {type: EDIT_TASK, newTaskText, taskIdx};
}

export function deleteTask(taskIdx) {
  return {type: DELETE_TASK, taskIdx};
}

export function deleteCompletedTask() {
  return {type: DELETE_COMPLETED_TASK};
}
