import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
import { baseURL } from "../utlis/baseURL";

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const singInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const singInWithGithub = () => {
        setLoading(true)
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
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = { email: userEmail }

            setLoading(false)
            setUser(currentUser)
            // console.log("Observer --->", currentUser);

            if (currentUser) {
                axios.post(`${baseURL}/jwt`, loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
            else {
                axios.post(`${baseURL}/logout`, loggedUser, { withCredentials: true })
                    .then(res => console.log(res.data))
            }
        })

        return () => {
            unsubscribe()
        }
    }, [])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
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