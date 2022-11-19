import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from "firebase/auth"
import app from '../../firebase/firebase.config';

const auth=getAuth(app)

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)
	const [loading,setLoading]=useState(true)

	// user change obsurver 
	useEffect(() => {
		const unsuscribe = onAuthStateChanged(auth, curerntUser => {
			setUser(curerntUser)
			setLoading(false)
		})
		return ()=>unsuscribe()
	},[])
	

	// user singUp with email a & password 
	const singUp = (email, password) => {
		setLoading(true)
		return createUserWithEmailAndPassword(auth, email, password);
	}

	// user logIn wiht email & password 
	const logIn = (email, password) => {
		setLoading(true)
		return signInWithEmailAndPassword(auth, email, password);
	}

	//user logIn with provider
	const providerLogIn = (provider) => {
		setLoading(true)
		return signInWithPopup(auth,provider)
	}

	// update user profile 
	const profileUpdate = (profile) => {
		return updateProfile(auth.currentUser,profile)
	}

	// user logoun 
	const logOut = () => {
		setLoading(true)
		localStorage.removeItem("accessToken");
		return signOut(auth)
	}

	const authInfo = {
    singUp,
    logIn,
    providerLogIn,
    user,
		profileUpdate,
		loading,
	logOut
  };
	return (
		<AuthContext.Provider value={authInfo}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;