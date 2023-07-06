import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebaseConfig/firebase.config';
import axios from 'axios';

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {

    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })
    }

    const loginWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, GoogleProvider)
    }

    const logout = () => {
        return signOut(auth)
    }

    const sendVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)

            //get and set token
            if (currentUser) {
                axios.post('https://bistro-boss-server-jade.vercel.app/jwt', { email: currentUser.email })
                    .then(data => {
                        console.log(data.data.token)
                        localStorage.setItem('access-token', data.data.token)
                        setLoading(false)
                    })
            }
            else {
                localStorage.removeItem('access-token')
            }
        })
        return () => unSubscribe()
    }, [])

    const userInfo = {
        user,
        loading,
        createUser,
        updateUserProfile,
        loginWithGoogle,
        sendVerification,
        loginUser,
        logout
    }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;