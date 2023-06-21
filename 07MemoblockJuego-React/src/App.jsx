import { useState, useEffect } from 'react'
import './App.css'
import Tablero from './components/Tablero/Tablero'
const emojiList = [... '💀👻🧛🌮🎱🍬🍕🦖']

function App() {
  const [memoBloquesBarajeados, setMemoBloquesBarajeados] = useState([])

  const [animating, setAnimating] = useState(false);

  const [selectedMemoBlock, setSelectedMemoBlock] = useState(null);


  useEffect( ()=>{
    const barajadoEmojiList = barajarArray([... emojiList, ... emojiList])
    setMemoBloquesBarajeados(barajadoEmojiList.map( (emoji, i)=>(
      {index: i, emoji, flipped: false}
    )))
  }, []);

  const barajarArray = (a)=>{
    for(let i=a.length-1; i>0; i--){
      const j = Math.floor(Math.random()*(i+1));
      [a[i], a[j]] = [a[j], a[i]];
      console.log(a)
    }
    return a;
  };

  const handleMemoClick = (memoBlock)=>{
    const memoBlockInvertido = {...memoBlock, flipped: true}
    let memoBloquesBarajeadosCopy = [...memoBloquesBarajeados];

    memoBloquesBarajeadosCopy.splice(memoBlock.index, 1, memoBlockInvertido);
    setMemoBloquesBarajeados(memoBloquesBarajeadosCopy);

    if(selectedMemoBlock === null){
      setSelectedMemoBlock(memoBlock);
    }
    else if(selectedMemoBlock.emoji === memoBlock.emoji){
      selectedMemoBlock(null);
    }
    else{
      setAnimating(true)
      setTimeout( ()=>{
        memoBloquesBarajeadosCopy.splice(memoBlock.index, 1, memoBlock);
        memoBloquesBarajeadosCopy.splice(selectedMemoBlock.index, 1, selectedMemoBlock);
        setMemoBloquesBarajeados(memoBloquesBarajeadosCopy);
        setSelectedMemoBlock(null);
        setAnimating(false);
      }, 500)
    }
  }

  return (
    <>
      <Tablero memoBlocks={memoBloquesBarajeados} handleMemoClick={handleMemoClick} animating={animating} />
    </>
  )
}

export default App
