import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import SignUp from '../components/SignUp/SignUp'

const MyRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home/> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/signup' element={ <SignUp/> }/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default MyRoutes