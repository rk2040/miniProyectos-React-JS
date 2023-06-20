import React from 'react'
import { db } from '../../data/firebase'
import { collection, addDoc } from 'firebase/firestore'
import { useState } from 'react'

const AddTodo = () => {
    const [title, setTitle] = useState([])

    const insertar = async(e)=>{
        e.preventDefault();
        if(title !== ''){
            await addDoc(collection(db, 'todos'), {
                title,
                complete: false
            })
            setTitle('')
        }
    }

    return (
        <form onSubmit={insertar}>
            <div className='input_container'>
                <input className='txtTodo' type="text" placeholder='Ingresar Tarea...' value={title} onChange={(e)=>setTitle(e.target.value)} />
            </div>
            <div className='btn_container'>
                <button>Insertar</button>
            </div>
        </form>
    )
}

export default AddTodo