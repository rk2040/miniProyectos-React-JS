import React from 'react'
import './MovieCard.css'

const MovieCard = ( {movie} ) => {
    const imageUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;


    return (
        <>
        <li className='movieCard'>
            <img className='movieImage' width={230} height={345} src={imageUrl} alt={movie.title}/>
            <div> {movie.title} </div>
        </li>
        </>
    )
}

export default MovieCard