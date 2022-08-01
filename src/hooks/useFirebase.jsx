import { useEffect, useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, signOut, onAuthStateChanged ,signInWithEmailAndPassword , updateProfile} from "firebase/auth";
import initializeFirebase from '../Pages/Login/Firebase/firebase.init';



//initializeFirebase app
initializeFirebase()

const useFirebase = () => {
   const [user,setUser] = useState({});
   const [isLoading, setIsLoading] = useState(true);
   const [authError, setAuthError] = useState('');
   
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

       
        // updateProfile----------
        updateProfile(auth.currentUser, {
          displayName: name
        
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });

        navigate(location?.state?.from || "/");
        setAuthError("");
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setAuthError(error.message);
        // ..
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
    setAuthError('');

  }).catch((error) => {
   setAuthError(error.message);
  }).finally(() => setIsLoading(false));
   }

   //observe user state
   useEffect(() =>{
    const unsubsribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser({})
      }

      setIsLoading(false);
    });

    return () => unsubsribe;
   }, [])
       
     const logout =() =>{
      setIsLoading(true);
      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
     }

   return{
    user,
    isLoading,
    authError,
    registerUser,
    logout,
    loginUser,
    signInWithGoogle
    
    
   }
};


export default useFirebase;