import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../../firebase/firebase.config';


export const AuthContext = createContext()
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const AuthProviders = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user,setUser] = useState(null)
    const [error,setError] = useState('')

    const createUser = (email, password, name, photo) => {
        setLoading(true)
           createUserWithEmailAndPassword(auth, email, password)
          .then(userCredential => {
            const user = userCredential.user;
            console.log(user,name,photo)
            return updateProfile(user, {
              displayName: name,
              photoURL: photo
            }).then(() => {
              // Profile updated successfully
              console.log(user)
              setUser(user);
              setError('')
              return user;
            }).catch((error) => {
                setError( error.message);
              return null;
            });
          }).catch((error) => {
            setError(error.message);
            return null;
          });
      }
      const emailLogin = (email,password)=>{
        setLoading(true)
         return signInWithEmailAndPassword(auth,email,password)
      }

      const googleLogin =()=>{
        return signInWithPopup(auth, googleProvider)
      }

      const logOut =()=>{
        return signOut(auth)
      }

      useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (loggedUser)=>{
            setUser(loggedUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo ={
        createUser,
        loading,
        error,
        user,
        emailLogin,
        logOut,
        googleLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;