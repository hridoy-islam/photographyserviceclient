import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const userContext = createContext();

const auth = getAuth(app);

const AuthContext = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerWithEmail = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const profileUpdate = (data) => {
        return updateProfile(auth.currentUser, data);
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }

    const logOut = () => {
        localStorage.removeItem('service-token');
        return signOut(auth);
    }


    useEffect(()=> {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
              setUser(currentUser);
              setLoading(false);
            }
          });

          return ()=> {
            return unsubscribe();
          }
    }, [])

    const authInfo = {
        user,
        loading,
        setUser,
        registerWithEmail,
        loginUser,
        googleLogin,
        logOut,
        profileUpdate,
    }
    return (
        <userContext.Provider value={authInfo}>
            {children}
        </userContext.Provider>
    );
};

export default AuthContext;