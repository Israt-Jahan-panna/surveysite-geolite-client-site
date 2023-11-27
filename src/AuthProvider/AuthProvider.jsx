import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/firebase.config';

const auth = getAuth(app)

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user , setUser] =useState(null);
    const [loading , setLoading ] = useState(true);

    const createUser = (email , password ) => {
        setLoading(true);
        return  createUserWithEmailAndPassword (auth , email , password)
    }
    const signIn = (email , password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth , email , password)
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth);
    }
    useEffect ( () => {
      const unSubscribe =   onAuthStateChanged(auth , createUser => {
            console.log('user in the auth state changed ' , createUser);
            setUser(createUser);
            setLoading(false);
        });
        return() =>{
            unSubscribe();
        }
    }, [])
        const authInfo ={
               user,
               loading,
            createUser,
            signIn,
            logOut}
   
    return (
        <AuthContext.Provider value={authInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;