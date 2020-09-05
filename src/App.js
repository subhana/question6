import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import TaskList from './components/TaskList';


function App() {

  const [tasks, setTasks] = useState([]);
  const [filterValue, setFilterValue] = useState('all');

  const createTask = (newTask) => {
    setTasks([...tasks, {text: newTask, isComplete: false}]);
  }

  const completeTask = (taskIdx) => {
    const taskList = tasks.map((task, idx) => {
      if(idx === taskIdx) task.isComplete = true;
      return task;
    });
    setTasks(taskList);
  }

  const editTask = (newTaskText, taskIdx) => {
    const taskList = tasks.map((task, idx) => {
      if(idx === taskIdx) task.text = newTaskText;
      return task;
    });
    setTasks(taskList);
  }

  const deleteTask = (taskIdx) => {
    const taskList = tasks.filter((task, idx) => idx !== taskIdx);
    setTasks(taskList);
  }

  const deletCompletedTask = () => {
    const incompletedTasks = [...tasks.filter(task => task.isComplete === false)];
    setTasks(incompletedTasks);
  }

  return (
    <div className="App">
      <div className="container">
        <AddTask createTask={createTask} tasks={tasks} />
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          editTask={editTask}
          deleteTask={deleteTask}
          filterValue={filterValue}
        />
        <Footer
          taskList={tasks}
          deletCompletedTask={deletCompletedTask}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      </div>
    </div>
  );
}

export default App;
