import React from 'react'
import { useState, useEffect } from 'react'
import PokemonCard from '../PokemonCard/PokemonCard';

const PokeList = () => {
    const [allPokemons, setAllPokemons] = useState([]);

    const getAllPokemons = async()=>{
        const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=25&offset=0');

        const data = await respuesta.json();

        function createPokemonObject(results){
            results.forEach(async (pokemon) => {
                const res = await fetch(
                    `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
                )
                const data = await res.json();
                setAllPokemons( (currentList)=> [...currentList, data]);
                await allPokemons.sort( (a, b)=> a.id - b.id )
            });
        }

        createPokemonObject(data.results);
    }
    useEffect( ()=>{
        getAllPokemons();
    }, []);

    return (
        <div className='app-container'>
            <div className='pokemon-container'>
                <div className='all-container'>
                    {allPokemons.map( (pokemonStats)=>(
                        <PokemonCard key={pokemonStats.id} id={pokemonStats.id.toString()} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PokeList