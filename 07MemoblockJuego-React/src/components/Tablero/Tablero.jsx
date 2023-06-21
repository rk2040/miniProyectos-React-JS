import React from 'react'
import './Tablero.css'
import MemoBlock from '../MemoBlock/MemoBlock'

const Tablero = ({animating, handleMemoClick, memoBlocks}) => {
    return (
        <>
        <main className='board'>
            {memoBlocks.map( (item, index)=>{
                return <MemoBlock key={`${index}_${item.emoji}`} memoBlock={item} animating={animating} handleMemoClick={handleMemoClick} />
            })}
        </main>
        </>
    )
}

export default Tablero