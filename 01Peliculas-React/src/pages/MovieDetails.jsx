import React from 'react';
import { get } from '../data/httpClient';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import getMovieImg from '../utils/getMovieImg';

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
        <div>
            <img src={imageUrl} alt={movie.title} />
        </div>
        <div>
            <p>
                <strong>Titulo: </strong>
                {movie.title}
            </p>
            <p>
                <strong>Genero: </strong>
                {generos.name}
            </p>
            <p>
                <strong>Descripción: </strong>
                {movie.overview}
            </p>
        </div>
        </>
    )
}

export default MovieDetails;