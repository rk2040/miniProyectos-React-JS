import React, { useState } from 'react'
import styles from './Login.module.css'
import { Link, useNavigate } from 'react-router-dom'
import InputControl from '../InputControl/InputControl'
import { auth } from '../../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({email:'', pass:''});
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const loguearse = ()=>{
        if(!values.email || !values.pass){
            setErrorMsg('Complete todos los campos')
            return;
        }
        setErrorMsg('')
        setSubmitButtonDisable(true)

        signInWithEmailAndPassword(auth, values.email, values.pass)
        .then(async(res)=>{
            setSubmitButtonDisable(false);
            navigate('/');
        })
        .catch((err)=>{
            setSubmitButtonDisable(false);
            setErrorMsg(err.message);
        });
    }

    return (
        <>
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Login</h1>

                <InputControl label='email' onChange={(event)=> setValues((prev)=>({...prev, email:event.target.value}))} placeholder='Ingrese su correo' />
                
                <InputControl label='Pass' onChange={(event)=> setValues((prev)=>({...prev, pass:event.target.value}))} placeholder='Ingrese su contraseña' />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button>Login btn</button>
                    <p>
                        Crear cuenta
                        <span>
                            <Link to='/signup'>Registrar</Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login