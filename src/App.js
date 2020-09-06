import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import './App.css';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import TaskList from './components/TaskList';
import configureStore from './redux/configureStore';

function App() {
  const store = configureStore();

  return (
    <ReduxProvider store={store}>
      <div className="App">
        <div className="header"><h1>todos</h1></div>
        <div className="container">
          <AddTask />
          <TaskList />
          <Footer />
        </div>
      </div>
    </ReduxProvider>
  )
}

export default App;
