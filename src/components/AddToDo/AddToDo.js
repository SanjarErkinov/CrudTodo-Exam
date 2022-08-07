import React, { useState } from 'react'
import './AddToDo.css'
import axios from 'axios';

const AddToDo = ({ handleTask }) => {
  const [task, setTask] = useState('')

  const handleAdd = () => {
    const newTask = {
      task,
      status: false,
      id: Date.now(),
    }
    handleTask(newTask)
    axios.post(' http://localhost:3001/users', newTask)

    setTask('')
  }
  return (
     <div className='AddToDoBlock'>
      <div>
      <h1 className='AddTodoTitle'>Todos</h1>
      </div>
      <input className='AddToDoInput'
       type="text"
       value={task}
       onChange={e => setTask(e.target.value)}
       onKeyPress={e => e.key === 'Enter' && handleAdd(task)}
       placeholder='Add todo'
      />
      <button className='AddToDoBtn' onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddToDo
