import React from 'react'
import './ToDoList.css'
import { BsTrash } from 'react-icons/bs'


const ToDoList = ({ todos, changeStatus, handleDelete, handleEdit }) => {  
  return (
    <div className='ToDoList'>
      <div className='ToDoItem' >
        {todos.map((item, index) => (
          <div key={item.id}  className={item.status ? 'completed' : null } >
            <div className='ToDoBlock'>
              <div className='TeamChek'>
            <input className='ToDoChek' type="checkbox" onChange={() => changeStatus(item.id)} />
            {item.task}
              </div>
              <div className='TeamBtn'>
            <button className='ToDoBtnExit' onClick={() => handleEdit(index)}>Edit</button>
            <button className='ToDoBtnDelete' onClick={() => handleDelete(item.id)}>
              <BsTrash size={25}/>
            </button>
              </div>
            </div>
			</div>
        ))}
      </div>
    </div>
  )
}

export default ToDoList
