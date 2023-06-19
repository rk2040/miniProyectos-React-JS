import React from 'react'
import './Todo.css'

const Todo = ({todo, handleDelete}) => {
    return (
        <>
        <div className='todo'>
            <input className='inputTitle' type="text" value={todo.title} style={{textDecoration:todo.complete && 'line-through'}} />
        </div>
        <div>
            <button onClick={()=>handleDelete(todo.id)} >Eliminar</button>
        </div>
        </>
    )
}

export default Todo