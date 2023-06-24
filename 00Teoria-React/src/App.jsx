import { useRef } from 'react'
import './App.css'

function App() {
  const colorRef = useRef(null);

  const cambiarColor = ()=>{
    // colorRef.current.className='verde';
    colorRef.current.style=`
    width: 500px`;
  }

  return (
    <>
    <div className='app'>
      <div className='caja' ref={colorRef} >
        Hola Mundo
      </div>
      <button onClick={cambiarColor}>Cambiar</button>
    </div>
    </>
  )
}

export default App
