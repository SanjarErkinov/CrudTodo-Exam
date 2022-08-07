import React, { useState } from 'react'
import './EditModal.css'

const EditModal = ({ editTodo, handleSaveTask, handleCloseModal }) => {
  const [item, setItem] = useState(editTodo)

  const handleEditInput = (e) => {
    let newObj = {
      ...item,
      task: e.target.value,
    }
    setItem(newObj)
  }

  const handleSave = () => {
    handleSaveTask(item)
  }

  return (
    <div className="main-modal">
      <div className="inner-modal">
        <div className="close">
          <button onClick={handleCloseModal}>&times;</button>
        </div>
        <input
          type="text"
          value={item.task}
          className="inp-edit"
          onChange={handleEditInput}  
          onKeyPress={e => e.key === 'Enter' && handleSave(item)}
        />
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  )
}

export default EditModal
