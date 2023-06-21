import React from 'react'
import './Tablero.css'
import MemoBlock from '../MemoBlock/MemoBlock'

const Tablero = ({memoBlocks}) => {
    return (
        <>
        <main className='board'>
            {memoBlocks.map( (item, index)=>{
                return <MemoBlock key={`${index}_${item.emoji}`} memoBlock={item} />
            })}
        </main>
        </>
    )
}

export default Tablero