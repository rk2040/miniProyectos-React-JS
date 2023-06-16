import { useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import Kanban from './components/Kanban/Kanban'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='title'>
      <h1>Kanban UI</h1>
      <h2>Arrastrar y Soltar - React JS</h2>
      <Kanban/>
    </div>
    
    </>
  )
}

export default App

// react-beautiful-dnd

