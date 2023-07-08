import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Perfil from '../pages/Perfil'
import { UserAuth } from '../context/AuthContext'
import ProtectorRuta from '../components/ProtectorRuta'

const MyRoutes = () => {
    const {user} = UserAuth();
    // funcion para proteger la ruta a home
    const RequireAuth = ({children})=>{
        return user ? children : <Navigate to={'/login'} />;
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <RequireAuth> <Home/> </RequireAuth>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/perfil' element={<ProtectorRuta> <Perfil/> </ProtectorRuta> } />
            </Routes>
        </BrowserRouter>
    )
}

export default MyRoutes