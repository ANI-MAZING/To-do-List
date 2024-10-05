import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"


function App() {

  const [ todos, setTodos ]  = useState([])

  const [todoValue, setTodoValue] = useState('')



  function handleTodo (newTodo) {
    const newTodoList = [...todos, newTodo]
    setTodos(newTodoList)
  }

  function handleDeleteTodo (index) {
    const newTodoList = todos.filter((todo, todoIndex) => {
      return todoIndex !== index
    })
    setTodos(newTodoList)
  }

  function handleEditTodo (index) {
    const newEditedTodo = todos[index]
    setTodoValue (newEditedTodo)
    handleDeleteTodo(index)
  }

  return (
    <>
    <TodoInput todoValue = {todoValue} setTodoValue={setTodoValue} handleTodo = {handleTodo}/>
    <TodoList handleDeleteTodo= {handleDeleteTodo} handleEditTodo= {handleEditTodo} todos = {todos}/>
    </>
  )
}

export default App
 