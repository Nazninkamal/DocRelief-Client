import { Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import doctor from '../../../images/doctor-small.png'

const OurDoctor = () => {
    return (
       <Container sx={{my:5, py:5}}>
        <Typography variant='h6' sx={{color:'#4dabf5', fontWeight: 600, my:5}}>Our Doctors</Typography>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4}>
               <img style={{width:"100%"}}
               src={doctor} alt="" />
               <Typography variant='h6' sx={{fontWeight: 600}}>Dr. Abduk</Typography>
               <Typography variant='body' sx={{fontWeight: 600, color:'gray'}} >+880976655443</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
               <img  style={{width:"100%"}}
               src={doctor} alt="" />
                <Typography variant='h6' sx={{fontWeight: 600}}>Dr. Abduk</Typography>
               <Typography variant='body' sx={{fontWeight: 600, color:'gray'}} >+880976655443</Typography>
            </Grid>
            <Grid item xs={4} sm={4} md={4}>
               <img  style={{width:"100%"}}
               src={doctor} alt="" />
                <Typography variant='h6' sx={{fontWeight: 600}}>Dr. Abduk</Typography>
               <Typography variant='body' sx={{fontWeight: 600, color:'gray'}} >+880976655443</Typography>
            </Grid>
          </Grid>
        </Container>
    );
};

export default OurDoctor;