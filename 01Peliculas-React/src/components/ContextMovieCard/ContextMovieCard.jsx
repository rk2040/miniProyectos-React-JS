import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { useState, useEffect } from 'react'
import { get } from '../../data/httpClient'
import './ContextMovieCard.css'

const ContextMovieCard = () => {
    const [movies, setMovies] = useState( [] );

    useEffect( ()=>{
        get('/discover/movie').then( (data)=>{
            setMovies(data.results);
            //console.log(data)
        })
    }, [])


    return (
        <>
        <ul className='container'>
            {movies.map( (movie)=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
        </>
    );
}

export default ContextMovieCard