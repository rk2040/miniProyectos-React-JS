import { useState } from 'react'
import './App.css'
import Tablero from './components/Tablero/Tablero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tablero/>
    </>
  )
}

export default App
