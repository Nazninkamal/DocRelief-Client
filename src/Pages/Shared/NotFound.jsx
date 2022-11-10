import { Button} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../../images/404.png'
// import { ButtonStyle } from '../../Hooks/useStyle';
import Footer from '../Shared/Footer/Footer';
import Navigation from './Navigation/Navigation';

const NotFound = () => {
    return (
        <>
        <Navigation/>
        <Box sx={{ display:"flex", justifyContent:"center"}}>
            <img style={{width:"600px"}} src={notFound} alt="" />
        
            
            </Box>
            <Box  sx={{ display:"flex", justifyContent:"center"}}>
            <Link style={{textDecoration: "none"}} to= "/home"><Button >Go Home</Button></Link>
            </Box>
            <Footer/>
        </>
    );
};

export default NotFound;