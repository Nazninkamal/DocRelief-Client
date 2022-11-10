import { Button, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import DentistCards from './DentistCards';

const BookingDebtist = () => {
    
    return (
        <Container sx={{mt:5}} id="dentiest">
            <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }}>

               <Grid item xs={4} sm={8} md={4} lg={4} sx={{textAlign:"justify"}}>
                    <Typography variant='h4'  sx={{color: "#272b41", marginBottom:"1rem", fontWeight: 600}}>Book Our Doctor</Typography>
                    <Typography variant='subtitle1' > Dentists not only solve problems, they can prevent them. Potential problems they can 
                    spot include the onset of gum disease and dental decay. When it comes to your oral health it is important you are proactive 
                    and seeing your dentist regularly so that they can catch any issues early, before they become a problem.
                    </Typography>
                     <Button variant="contained" size="lg" sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white",mt:3}}>Read More...</Button>

               </Grid>

 
               <Grid item xs={4} sm={8} md={8} lg={8}>
                    <DentistCards/>
               </Grid>
            </Grid>
        </Container>
    );
};

export default BookingDebtist;