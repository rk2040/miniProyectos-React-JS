import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import styles from './Home.module.css'

function salir(){
    return auth.signOut();
    navigate('/');
}

const Home = (props) => {

    return (
        <>
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>
                    <Link to='/login'>Login</Link>
                </h1>
                <br />
                <h1>
                    <Link to='/signup'>Registrar</Link>
                </h1>
                <div className={styles.footer}>
                    <h2> {props.name ? `Bienvenido - ${props.name}` : 'Iniciar sesión' } </h2>
                    <button onClick={salir}>Salir</button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home