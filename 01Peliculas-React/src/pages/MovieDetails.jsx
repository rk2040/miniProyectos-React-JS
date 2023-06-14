import React from 'react';
import { get } from '../data/httpClient';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieImg from '../utils/getMovieImg';
import '../pages/MovieDetails.css'

const MovieDetails = () => {
    const {movieId} = useParams();
    const [movie, setMovie] = useState([]);
    const [generos, setGeneros] = useState([]);

    useEffect( ()=>{
        get('/movie/' + movieId).then( (data)=>{
            setMovie(data);
            setGeneros(data.genres[0]);
            console.log(data)
            console.log(data.genres[0])
        })
    }, [movieId]); //ada que movieId cambie
    
    const imageUrl = getMovieImg(movie.poster_path, 500);

    return (
        <>
        <div className='detailContainer'>
            <div>
                <img className='col movieImage' src={imageUrl} alt={movie.title} />
            </div>
            <div className='col movieDetail'>
                <p className='title'>
                    <strong>Título: </strong>
                    {movie.title}
                </p>
                <p>
                    <strong>Género: </strong>
                    {generos.name}
                </p>
                <p>
                    <strong>Descripción: </strong>
                    {movie.overview}
                </p>
            </div>
        </div>
        </>
    )
}

export default MovieDetails;