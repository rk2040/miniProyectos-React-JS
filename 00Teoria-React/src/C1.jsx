import React from 'react'
import { useContext } from 'react'
import { userContext } from './App'

const C1 = () => {
    const user = useContext(userContext)

    return (
        <div>
            <h1>Componente1 {user} </h1>
        </div>
    )
}

export default C1