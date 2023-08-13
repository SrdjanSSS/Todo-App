
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import { useState } from 'react';
import TaskBox from './components/TaskBox';






function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Dentist appointment',
      day: 'Jan 20th at 6:30pm',
    },

    {
      id: 2,
      text: 'Football training',
      day: 'Feb 12th ar 11:00am'
    }
  ])

  const addTask = (task) => {
  const id = Math.floor(Math.random() * 100)

  const newTask = {id, ...task}
  setTasks([...tasks, newTask])

  console.log(tasks);
}

const deleteTask = (deleteElement) => {
  const newTask = tasks.filter((task) => task !== deleteElement);
  setTasks(newTask);

}


  return (
    <div className="app">
      <div className="card">
        <Header />
        <Form onAdd={addTask}/>
        <TaskBox tasks={tasks} onDelete={deleteTask}/>
      </div>
    </div>
  );
}





export default App;


