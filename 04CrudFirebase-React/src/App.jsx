import { useState, useEffect } from 'react'
import './App.css'
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, QuerySnapshot } from 'firebase/firestore'
import { db } from './data/firebase'
import AddTodo from './components/AddTodo/AddTodo'
import Todo from './components/Todo/Todo'
import Title from './components/Title/Title'

function App() {
  const [todos, setTodos] = useState([]);

useEffect( ()=>{
  const q = query(collection(db, 'todos'))

  const unsub = onSnapshot(q, (querySnapshot)=>{
    const todoArray = []
    querySnapshot.forEach((doc)=>{
      todoArray.push({ id: doc.id, ...doc.data() })
    })
    setTodos(todoArray);
  });
  return ()=> { unsub() }
},[]);

  const handleEdit = async(todo, title)=>{
    await updateDoc(doc(db, 'todos', todo.id), {title: title})
  }

  const handleDelete = async(id)=>{
    await deleteDoc(doc(db, 'todos', id))
  }

  const toggleComplete = async(todo)=>{
    await updateDoc(doc(db, 'todos', todo.id), {complete: !todo.complete})
  }

  return (
    <>
    <div className="App">
      <div>
        <Title/>
      </div>
      <div>
        <AddTodo/>
      </div>
      <div className='todo_container'>
        {todos.map((todo)=>(
          <Todo todo={todo} handleDelete={handleDelete} handleEdit={handleEdit} toggleComplete={toggleComplete} />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
