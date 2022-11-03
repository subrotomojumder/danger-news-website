import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

    const providerLogin = (provider) => {
        setIsLoading(true)
        return signInWithPopup(auth, provider);
    }
    const logOut = () => {
        setIsLoading(true)
        return signOut(auth);
    }
    const createUser = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const signIn = (email, password) => {
        setIsLoading(true) 
        return signInWithEmailAndPassword(auth, email, password);
    }
    const updateUserProfile = (profile) => {
       return updateProfile(auth.currentUser, profile)
    }
    const emailVerify = () => {
        return sendEmailVerification(auth.currentUser);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            if (currentUser === null || currentUser.emailVerified) {
                setUser(currentUser)
    
            }
            setIsLoading(false);
        })
        
        return () => unSubscribe();
    } ,[])

    // console.log(user, isLoading)
    const authInfo = { user, isLoading, setIsLoading , providerLogin, logOut, createUser, signIn, updateUserProfile, emailVerify}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;