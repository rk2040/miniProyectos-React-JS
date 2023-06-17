import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/Login/Login'
import Home from '../components/Home/Home'
import SignUp from '../components/SignUp/SignUp'
import { auth } from '../firebase'
import { useState, useEffect } from 'react'

const MyRoutes = () => {
    const [userName, setUserName] = useState([]);

    useEffect( ()=>{
        auth.onAuthStateChanged((user)=>{
            if(user){
                setUserName(user.displayName);
            }
            else setUserName('');
        });
    }, []);

    return (
        <>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home name={userName} /> }/>
                <Route path='/login' element={ <Login/> }/>
                <Route path='/signup' element={ <SignUp/> }/>
            </Routes>
        </BrowserRouter>
        </>
    )
}

export default MyRoutes