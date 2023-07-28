import { useContext, useState } from "react";
import { createContext } from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({childre})=>{
    const [user, setUser] = useState([]);

    async function signInWithGoogle(){
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
            });
            if(error) throw new Error('A ocurrido un error durante la autenticación'); 
        } 
        catch (error) {
            console.log(error);
        }
    }

    async function singout(){
        const { error } = await supabase.auth.signOut()
        if(error) throw new Error('A ocurrido un error durante el cierre de sesión');
    }

    return (
        <AuthContext.Provider value={{signInWithGoogle, singout, user}}>
            {childre}
        </AuthContext.Provider>
    )
};

export const UserAuth = ()=>{
    return useContext(AuthContext)
};