import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const singInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const singInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const singOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setLoading(false)
            setUser(currentUser)
            console.log("Observer --->", currentUser);
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        singOutUser,
        singInWithGoogle,
        singInWithGithub,

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;