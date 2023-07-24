import { createContext, useEffect, useState } from "react";
import { app } from "../Firebase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const auth = getAuth(app);

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
}

const signIn = (email, password) => {
  setLoading(true)
  return signInWithEmailAndPassword(auth, email, password)
}

const logOut = () => {
  setLoading(true);
  return signOut(auth);
}

 //update user profile image url 
 const updateUserProfile = (name, photo) => {
  return updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photo
  })
}

const googleProvider = new GoogleAuthProvider();
const googleSignIn = () => {
  setLoading(true)
  return signInWithPopup(auth, googleProvider)
}


  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, loginUser => {
        setUser(loginUser)
        setLoading(false)

    })
    return () => {
        unSubscribe()
    }
},[])

const authInfo = {
  user,
  loading,
  createUser,
  signIn,
  updateUserProfile,
  logOut,
  googleSignIn

}

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;