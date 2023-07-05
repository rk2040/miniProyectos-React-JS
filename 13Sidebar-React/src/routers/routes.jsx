import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Estadisticas from '../pages/Estadisticas'
import Productos from '../pages/Productos'
import Diagramas from '../pages/Diagramas'
import Reportes from '../pages/Reportes'
import Configuracion from '../pages/Configuracion'
import Salir from '../pages/Salir'

const MyRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/estadisticas' element={<Estadisticas/>} />
            <Route path='/productos' element={<Productos/>} />
            <Route path='/diagramas' element={<Diagramas/>} />
            <Route path='/reportes' element={<Reportes/>} />
            <Route path='/configuracion' element={<Configuracion/>} />
            <Route path='/salir' element={<Salir/>} />
        </Routes>
    )
}

export default MyRoutes