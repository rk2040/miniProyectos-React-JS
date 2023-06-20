import React from 'react'
import './PokemonCard.css'
import pokeball from '../../img/pokeball.png'
import { useState } from 'react'

const PokemonCard = ({id, name, image, type, weight, height, stats, statsName}) => {
    const [isShow, setIsShow] = useState(false);

    return (
        <>
        <div className='container'>
            {isShow && (
                <div className='show'>
                    <div className='stat-container-title'>
                        <p> {id} - {name} </p>
                        <img src={image} alt={name} />
                    </div>
                </div>
            )}
            

            <div className='right' 
            onMouseEnter={ ()=> setIsShow(true)}
            onMouseLeave={ ()=> setIsShow(false)} >
                <img
                    src={image}
                    alt={name}
                    style={{maxHeight: '50px', marginRight: '10px', width: '50px'}} 
                />
                <p style={{width: '270px'}}> No. {id} </p>
                <p> {name} </p>
                <img src={pokeball} alt="Pokeball" style={{marginLeft: 'auto', width: '40px'}} />
            </div>

        </div>
        </>
    )
}

export default PokemonCard