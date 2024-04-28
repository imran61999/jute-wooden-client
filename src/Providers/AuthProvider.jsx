import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebse.init";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
        .then(()=>{
            console.log('logged out successfully');
        })
    }
    const updateUserProfile =(name, photo)=>{
        updateProfile(auth.currentUser,{displayName:name, photoURL:photo})
        .then(()=>{
            console.log('user profile updated');
        })
        .catch(error =>{
            console.log(error)
        })
    }
    
        useEffect(()=>{
            const unSubscribe = onAuthStateChanged(auth, currentUser=>{
                
                setUser(currentUser)
                setLoading(false)
            })
            return ()=>{
                return unSubscribe();
            }
        },[])

    const authInfo ={
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;