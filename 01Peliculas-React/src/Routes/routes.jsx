import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import MovieDetails from '../pages/MovieDetails';

const MyRoutes = () => {
    return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='movies/:movieId' element={<MovieDetails/>} />
        </Routes>
    </BrowserRouter>
    </>
    )
}

export default MyRoutes;