import React from 'react'
import './Todo.css'
import { useState } from 'react'

const Todo = ({todo, handleDelete, toggleComplete, handleEdit}) => {
    const [newTitle, setNewTitle] = useState(todo.title)

    const handleChange = (e)=>{
        if(todo.complete === true){
            newTitle(todo.title)
        }
        else{
            todo.title = '';
            setNewTitle(e.target.value);
        }
    }

    return (
        <>
        <div className='todo'>
            <input className='inputTitle' type="text" 
            value={todo.title === '' ? newTitle : todo.title} onChange={handleChange}
            style={{textDecoration:todo.complete && 'line-through'}} />
        </div>
        <div>
            <button className='button-complete' onClick={()=>toggleComplete(todo)}>Marcar</button>
            <button onClick={()=>handleEdit(todo, newTitle)}>Editar</button>
            <button onClick={()=>handleDelete(todo.id)} >Eliminar</button>
        </div>
        </>
    )
}

export default Todo