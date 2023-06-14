import { useState } from 'react'
import reactLogo from "./assets/react.svg";
import './App.css'
import MyRoutes from './routes/routes';
function App() {

  return (
    <>
      <header>
        <h1 className='title'>🎬Películas</h1>
      </header>
      <MyRoutes/>
    </>
  )
}

export default App
