import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/login.png';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';

const Login = () => {
    const [loginData, setLoginData] = useState({})
    const {user, loginUser, isLoading, authError,signInWithGoogle} = useAuth();
   
    const location = useLocation();
    const navigate = useNavigate();



    const handleOnBlur = e =>{
         const field = e.target.name;
         const value = e.target.value;
         console.log(field, value)
        const newLoginData ={...loginData};
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
       loginUser(loginData.email, loginData.password, location, navigate);
        e.preventDefault();
        
    }

    const handleGoogleSignIn =() =>{
         signInWithGoogle(location, navigate)
    }

    return (
        <>
        <Navigation/>
       <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt:15}} xs={12} md={6}>
               <Typography variant='h5' gutterBottom>Login</Typography>
           <form onSubmit={handleLoginSubmit}>
            <TextField 
                sx={{width:"75%", m:1}}
                id='standard-basic' 
                label='Your Email' 
                name='email'
                onBlur={handleOnBlur}
                variant='standard'/>

            <TextField 
                sx={{width:"75%", m:1}}
                id='standard-basic' 
                label='Your Password' 
                type='password'
                name='password'
                onBlur={handleOnBlur}
                variant='standard'
                />

            
           <Button  sx={{width:"75%", m:1}} type="submit"
            variant='contained'>Login</Button>

           <NavLink to="/register"
           style={{textDecoration:'none'}}>
            <Button variant='text'> New User? Please Register</Button>
            </NavLink>

            {isLoading && <CircularProgress />}
           {user?.email && <Alert severity="success">
             Login Successfully!</Alert>}

           {authError && <Alert severity="error">
            {authError}</Alert>}
            </form>
              
         <p>-----------🎗----------</p>
         <Button onClick={ handleGoogleSignIn} variant="contained">Sign in With Google</Button>

            </Grid>
            <Grid item xs={12} md={6}>
             <img style={{width:'100%'}}  src={login} alt=""   />
            </Grid>
        </Grid>
       </Container>
       <Footer/>
       </>
    );
};

export default Login;