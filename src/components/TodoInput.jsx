import { useState } from "react"

export default function TodoInput (props) {

    const {handleTodo, todoValue, setTodoValue} = props


    return(

    <header>
        <input value = {todoValue} onChange={(event) => {
            setTodoValue(event.target.value)}} 
            placeholder="list your items here...."
        />
        <button onClick = {() => {
            handleTodo(todoValue)
            setTodoValue('')
        }} >Add</button>
    </header>
    )
}