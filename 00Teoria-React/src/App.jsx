import { useRef } from 'react'
import './App.css'
import { useContext, useState, createContext } from 'react'
import C1 from './C1';

export const userContext = createContext();

function App() {
  const [user, setUser] = useState('Rob');

  return (
    <>
    <userContext.Provider value={user} >
      <div className='App'>
        <C1/>
      </div>

    </userContext.Provider>
    </>
  )
}

export default App
