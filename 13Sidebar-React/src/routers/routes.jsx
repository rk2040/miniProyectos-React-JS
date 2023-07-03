import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Estadisticas from '../pages/Estadisticas'
import Productos from '../pages/Productos'
import Sidebar from '../components/Sidebar/Sidebar'

const MyRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/estadisticas' element={<Estadisticas/>} />
                <Route path='/productos' element={<Productos/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes