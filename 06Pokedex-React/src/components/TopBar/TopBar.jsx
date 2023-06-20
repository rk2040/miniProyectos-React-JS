import React from 'react'
import './TopBar.css'
import pokeball from '../../img/pokeball.png'
import pokeballcolor from '../../img/pokeballcolor.png'

const TopBar = () => {
    return (
        <>
        <div className='title'>
            <div className="title__left">
                <p>Pokedex</p>
                <div className='caught-seen'>
                    <div className='caught'>
                        <img src={pokeballcolor} alt="Pokeball" style={{width:'30px', marginRight:'10px'}} />
                        <p>438</p>
                    </div>
                    <div className='seen'>
                        <img src={pokeball} alt="Pokeball" style={{width:'30px', marginRight:'10px'}} />
                        <p>649</p>

                    </div>
                </div>

            </div>
            <p style={{color:'white'}}>A ➔ Z</p>
        </div>
        </>
    )
}

export default TopBar