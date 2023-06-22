import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Reports from '../pages/Reports'

const MyRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/reports' element={<Reports/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default MyRoutes