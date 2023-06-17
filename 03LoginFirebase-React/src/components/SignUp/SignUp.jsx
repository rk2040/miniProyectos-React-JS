import React from 'react'
import styles from './SignUp.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { async } from '@firebase/util'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import InputControl from '../InputControl/InputControl'

const SignUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({name:'', email:'', pass:''});
    const [errorMsg, setErrorMsg] = useState([]);
    const [submitButtonDisable, setSubmitButtonDisable] = useState(false);

    const registro = ()=>{
        if(!values.name || !values.email || !values.pass){
            setErrorMsg('Complete todos los campos')
            return;
        }
        setErrorMsg('')
        setSubmitButtonDisable(true)
        createUserWithEmailAndPassword(auth, values.email, values.pass)
        .then(async (res)=>{
            setSubmitButtonDisable(false)
            const user = res.user
            await updateProfile(user, {
                displayName: values.name,
            });
            navigate('/')
        })
        .catch((err)=>{
            setSubmitButtonDisable(false);
            setErrorMsg(err.message);
        });
    };

    return (
        <>
        <div className={styles.container}>
            <div className={styles.innerBox}>
                <h1 className={styles.heading}>Registro</h1>
                <InputControl label='Nombre' placeholder='Ingrese nombre' onChange={ (event)=> setValues((prev)=> ({ ...prev, name: event.target.value }))} />

                <InputControl label='e-mail' placeholder='Ingrese correo' onChange={ (event)=> setValues((prev)=> ({ ...prev, email: event.target.value }))} />

                <InputControl label='Password' placeholder='Ingrese una contraseña' onChange={ (event)=> setValues((prev)=> ({ ...prev, pass: event.target.value }))} />

                <div className={styles.footer}>
                    <b className={styles.error}>{errorMsg}</b>
                    <button onClick={registro} disabled={submitButtonDisable} >Registrar</button>
                    <p>
                        Si ya tienes cuenta
                        <span>
                            <Link to={'/login'}>Login</Link>
                        </span>
                        </p>
                </div>
            </div>

        </div>
        </>
    )
}

export default SignUp