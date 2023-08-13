import { useState } from "react"


const Form = ({onAdd}) => {

  const [text, setText] = useState ('')
  const [day, setDay] = useState ('')
  const [dayTimeError, setDayTimeError] = useState(false)
  const [taskError, setTaskError] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
     
     if(!day) {
      setDayTimeError(true)
      
  
     } else {
      setDayTimeError(false)
     }

      if(!text) {
        setTaskError(true)
      
    
      } else {
        setTaskError(false)
      }
    
     if(!text || !day) {
      console.log('test')
      return
     } 
    
   
   
    onAdd({text,day})

    setText('')
    setDay('')
  
  }

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  return (
    <form className='form-box' onSubmit={onSubmit} >
      <div className='form-element'>
        <label>Task</label>
        <input
        className={taskError ? 'input-error' : 'input' }
          type='text'
          placeholder='Add Task'
          value={text}
          onChange={(e) => setText(capitalizeFirstLetter(e.target.value))}
            
    
        />
        {taskError && (
          <div className="error">
            Please add a task.
          </div>
        )} 
        
      </div>
      <div className='form-element'>
        <label>Day & Time</label>
        <input className={dayTimeError ? 'input-error' : 'input' }
          type='text'
          placeholder='Add Day & Time'
          value={day}
          onChange={(e) => setDay(capitalizeFirstLetter(e.target.value)) }

          
          
        />
        {dayTimeError && (
          <div className="error">
            Please add day & time.
          </div>
        )} 


      </div>

      <input type='submit' className='btn btn-save-task'/>
    </form>
  )
}

export default Form;