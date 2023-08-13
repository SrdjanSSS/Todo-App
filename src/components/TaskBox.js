import React from 'react'
import { FaTimes } from 'react-icons/fa'

const TaskBox = (props) => {
 
 


 
  return (
    <>
    {props.tasks.map((task) => (
        <div key={task.id} className='task-box'>
            <h3 className="task-name" >{task.text} <FaTimes className='x' onClick={ () => props.onDelete(task)} /></h3>
            <p className="date-time" >{task.day}</p>
        </div>
        
    ))}
    </>
  )
}

export default TaskBox