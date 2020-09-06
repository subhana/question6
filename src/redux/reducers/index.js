import { combineReducers } from 'redux';

import filters from './filterReducer';
import tasks from './taskReducer';

const rootReducer = combineReducers({
  tasks,
  filters
})

export default rootReducer;
