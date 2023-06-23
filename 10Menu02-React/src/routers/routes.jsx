import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from '../components/NavBar/NavBar'
import Home from '../pages/Home'
import Products from '../pages/Products'
import { Reports, R1, R2 } from '../pages/Reports'

const MyRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/products' element={<Products/>} />
                <Route path='/reports' element={<Reports/>} />

                <Route path='/reports/reports01' element={<R1/>} />
                <Route path='/reports/reports02' element={<R2/>} />
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default MyRoutes