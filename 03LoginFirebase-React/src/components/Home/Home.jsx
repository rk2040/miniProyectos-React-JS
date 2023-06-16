import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
    return (
        <>
        <div>
            <div>
                <h1>
                    <Link to='/login'>Login</Link>
                </h1>
                <br />
                <h1>
                    <Link to='/signup'>SignUp</Link>
                </h1>
            </div>
            <h2> {props.name ? `Bienvenido - ${props.name}` : 'Iniciar sesión' } </h2>
        </div>
        </>
    )
}

export default Home