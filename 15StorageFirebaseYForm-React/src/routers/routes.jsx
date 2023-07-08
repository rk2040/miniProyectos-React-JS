import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import ProductosConfig from '../pages/ProductosConfig'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home/>} />
                <Route path='/' element={<ProductosConfig/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes