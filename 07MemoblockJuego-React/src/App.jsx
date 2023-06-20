import { useState, useEffect } from 'react'
import './App.css'
import Tablero from './components/Tablero/Tablero'
const emojiList = [... '💀👻🧛🌮🎱🍬🍕🦖']

function App() {
  const [memoBloquesBarajeados, setMemoBloquesBarajeados] = useState([])

  useEffect( ()=>{
    const barajadoEmojiList = barajarArray([... emojiList, ... emojiList])
    setMemoBloquesBarajeados(barajadoEmojiList.map( (emoji, i)=>(
      {index: i, emoji, flipped: false}
    )))
  }, [])

  const barajarArray = (a)=>{
    for(let i=a.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a)
    }
    return a;
  }

  return (
    <>
      <Tablero memoBlocks={memoBloquesBarajeados} />
    </>
  )
}

export default App
