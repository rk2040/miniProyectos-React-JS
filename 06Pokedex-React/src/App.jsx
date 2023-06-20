import { useState } from 'react'
import './App.css'
import TopBar from './components/TopBar/TopBar'
import BottomBar from './components/BottomBar/BottomBar'
import PokeList from './components/PokeList/PokeList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopBar/>
      <PokeList/>
      <BottomBar/>
    </>
  )
}

export default App
