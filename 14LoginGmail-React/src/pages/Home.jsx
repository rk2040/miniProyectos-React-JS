import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useEffect } from 'react';
import styled from 'styled-components'

const Home = () => {
    const {user, logOut} = UserAuth();

    const cerrarSesion = async()=>{
        try{
            await logOut();
        }
        catch(error){
            console.log(error);
        }
    }


    return (
        <>
        <Container>
            <div>Home</div>
            <h1>Bienvenido {user.displayName} </h1>
            <button onClick={cerrarSesion} >Cerrar sesión</button>
        </Container>
        </>
    )
}

export default Home


const Container = styled.div`
    
`