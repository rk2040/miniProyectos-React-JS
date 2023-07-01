import React from 'react'
import { useWindowSizes } from 'react-use-window-sizes'
import Confetti from 'react-confetti'

const ConfettiComponent = () => {
    const { width, height } = useWindowSizes()

    return (
        <Confetti
            numberOfPieces={150}
            gravity={0.03}
            width={width}
            height={height}
        />
    )
}

export default ConfettiComponent