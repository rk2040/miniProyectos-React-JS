import React from 'react'
import './Card.css'
import Kanban from '../Kanban/Kanban'

const Card = (props) => {
    return (
        <div className='card'>
            Card
            { props.children }
        </div>
    )
}

export default Card