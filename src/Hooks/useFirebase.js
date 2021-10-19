import { useState, useEffect } from "react";
import firebaseInit from "../Firebase/firebase.init";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// Call Firebase Initialize Function
firebaseInit();

const useFirebase = () => {
  //   Google Provider
  const googleProvider = new GoogleAuthProvider();

  //   Get Auth
  const auth = getAuth();

  // User State
  const [user, setUser] = useState({});
  // Error State
  const [error, setError] = useState("");

  // Email & Password Login/Registration State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   Register E-mail
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  //   Register Password
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //   Register Account Using E-mail & Password
  const registerUsingEmailAndPassword = (e) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);

        handleEmail("");
        handlePassword("");
      })
      .catch((error) => {
        setError(error?.message);
      });
    e.preventDefault();
  };

  //   Login Handler
  const handleLoginEmail = (e) => {
    setUser(e.target.value);
  };

  //   Password Handler
  const handleLoginPassword = (e) => {
    setUser(e.target.value);
  };

  //   Handle Login
  const handleLogin = (e) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
      })
      .catch((error) => {
        setError(error?.message);
      });
    e.preventDefault();
  };

  //   User State Change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  return {
    user,
    error,
    logOut,
    signInUsingGoogle,
    handleLogin,
    handleEmail,
    handlePassword,
    handleLoginPassword,
    handleLoginEmail,
    registerUsingEmailAndPassword,
    email,
    password,
  };
};

export default useFirebase;
