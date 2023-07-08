import React, { Children } from 'react'
import { UserAuth } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

const ProtectorRuta = ({Children}) => {
    const {user} = UserAuth();

    if(user==null){
        
        return <Navigate to={"/"} />
    }
    return Children;
}

export default ProtectorRuta