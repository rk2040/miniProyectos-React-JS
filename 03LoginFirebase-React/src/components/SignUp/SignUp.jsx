import React from 'react'
import styles from './SignUp.module.css'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const SignUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({name:'', email:'', pass:''});
    const [erroMsg, setErrorMsg] = useState([]);
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
            </div>

        </div>
        </>
    )
}

export default SignUp