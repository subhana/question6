import { createStore, compose } from 'redux';
import rootReducer from './reducers';

export default function configureStore(initialState) {
  const composeEnahncers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    rootReducer,
    initialState,
    composeEnahncers()
  );
}
