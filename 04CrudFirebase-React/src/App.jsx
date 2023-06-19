import { useState } from 'react'
import './App.css'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc } from 'firebase/firestore'
import { db } from './data/firebase'

function App() {
  const [todos, setTodos] = useState([]);
  const handleEdit = async(todo, title)=>{
    await updateDoc(db, 'todos', todo.id), {title: title}
  }

  return (
    <>
      
    </>
  )
}

export default App
