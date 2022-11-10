import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged ,signInWithEmailAndPassword , updateProfile, getIdToken} from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';



//initializeFirebase app
initializeFirebase()

const useFirebase = () => {
   const [user,setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [authError, setAuthError] = useState('');
   const [admin, setAdmin] = useState(false);
   const [token, setToken] = useState('');


   const auth = getAuth();
   const googleProvider = new GoogleAuthProvider();


  //------------------------ register user-----------------//

  const registerUser = (
    email,
    password,
    name,
    location,
    navigate
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in

        setAuthError("");
        const newUser = { email, displayName: name};
        setUser(newUser);
        // save user to database
       saveUser(email, name, 'POST');
        // send name to forebase after creation
        updateProfile(auth.currentUser, {
          displayName: name
        
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
          
          });

        navigate(location?.state?.from || "/");
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
       console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };


   // ---------------login ---------------//

   const loginUser =(email, password, location, navigate) =>{
    setIsLoading(true);

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate(location?.state?.from || "/")
      setAuthError('');
    })
    .catch((error) => {
      setAuthError (error.message);

    })
    .finally(() => setIsLoading(false));
   }


  //  -----------sign in with google------------//

   const signInWithGoogle = (location, navigate) =>{
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
    .then((result) => {
    const user = result.user;
    saveUser(user.email, user.displayName, 'PUT');
    setAuthError('');

    navigate(location?.state?.from || "/");

  }).catch((error) => {
   setAuthError(error.message);
  }).finally(() => setIsLoading(false));
   }

   //observe user state
   useEffect(() =>{
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        getIdToken(user)
        .then(idToken =>{
         setToken(idToken)
        })

      } else {
        setUser({})
      }

      setIsLoading(false);
    });

    return () => unsubsribe;
   }, [auth])
    
   useEffect(() =>{
       fetch(`http://localhost:5000/users/${user.email}`)
       .then(res => res.json())
       .then(data => setAdmin(data.admin))
   }, [user.email])
   

      //------------------------- logout--------------------//
     const logout =() =>{
      setIsLoading(true);
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
     };


     const saveUser = (email, displayName, method) =>{
      const user = {email, displayName};
      fetch('http://localhost:5000/users', {
        method: method,
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      .then()
      
     }

   return{
    user,
    admin,
    token,
    isLoading,
    authError,
    registerUser,
    logout,
    loginUser,
    signInWithGoogle
    
    
   }
};


export default useFirebase;