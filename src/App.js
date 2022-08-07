import React, { useState } from 'react'
import AddToDo from './components/AddToDo/AddToDo'
import EditModal from './components/EditModal/EditModal'
import ToDoList from './components/ToDoList/ToDoList'
import axios from 'axios';


const App = () => {
  const [todos, setTodos] = useState([])
  const [modal, setModal] = useState(false)
  const [editTodo, setEditTodo] = useState({})

  const handleTask = (newObj) => {
    // setTodos(todos.push(newObj))

    let newTodos = [...todos]
    newTodos.push(newObj)
    setTodos(newTodos)
  }

  const changeStatus = (id) => {
    const newTodos = todos.map((item) => {
      if (item.id === id) {
        item.status = !item.status
      }
      return item
    })
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    let newTodos = todos.filter((item) => item.id !== id)
    axios.delete(`http://localhost:3001/users/${id}`)
    setTodos(newTodos)
  }

  const handleEdit = (index) => {
    setModal(true)
    setEditTodo(todos[index])
  }

  const handleSaveTask = (newTask) => {
    const newTodos = todos.map((item) => {
      if (item.id === newTask.id) {
        return newTask
      }
      return item
    })
    setTodos(newTodos)
    handleCloseModal()
  }

  function handleCloseModal() {
    setModal(false)
  }

  return (
    <div>
      <AddToDo handleTask={handleTask} />
      <ToDoList
        todos={todos}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />

      {modal ? (
        <EditModal
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  )
}

export default App
