import { useState } from 'react'
import './App.css'
import MyRoutes from './routers/routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyRoutes/>
    </>
  )
}

export default App
