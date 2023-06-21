import React, { createContext, useEffect, useState } from 'react';
import {signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, getAuth,  signInWithEmailAndPassword,  signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const googleLogin = () => {
        return signInWithPopup(auth, googleProvider);
    };

    const createNewUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
  
    const emailSignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };


    const logOutUser =()=>{
        return signOut(auth);
    };

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
         
            if (currentUser) {
                axios.post('https://twelve-assignment-server-indol.vercel.app/validJWT',{email:currentUser.email})
                .then(data=>{
                    localStorage.setItem('valid-token' , data.data.token);
                })
                setLoading(false);
            }else{
                localStorage.removeItem('valid-token')
            }
        })
        return () => {
            unSubscribe();
        }
    }, []);


    const authInfo = {
        
        logOutUser,
        user,
        loading,
        emailSignIn,
        createNewUser,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;