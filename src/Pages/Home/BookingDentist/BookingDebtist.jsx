import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import DentistCard from './DentistCard';

const BookingDebtist = () => {
    return (
        <Container sx={{mt:5}}>
            <Grid container spacing={2}  xs={4} sm={8} md={12} lg={12}>

               <Grid item xs={4} sm={3} md={4} lg={4} sx={{textAlign:"justify"}}>
                    <Typography variant='h4'  sx={{color: "#272b41", marginBottom:"1rem", fontWeight: 600}}>Book Our Doctor</Typography>
                    <Typography variant='subtitle1' >It is a long established fact that a reader will be distracted by the
                     readable content of a page when looking at its layout. The point of using Lorem Ipsum.
                   <br /> web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover
                     many web sites still in their infancy. Various versions have evolved over the years, sometimes</Typography>
                     <Button variant="contained" size="lg" sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white",mt:3}}>Read More...</Button>

               </Grid>

 
               <Grid item xs={4} sm={5} md={8} lg={8}>
                    <DentistCard/>
               </Grid>
            </Grid>
        </Container>
    );
};

export default BookingDebtist;