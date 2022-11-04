import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';

const WhyChooseUs = () => {
    return (
        <Box>
 
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={2} sm={4} md={6} sx={{backgroundColor:"#5bc198"}}>
                <Container sx={{my:5}}>
                <Typography variant='h4'>Why Choose TeethRelief?</Typography>
                <hr />
                <Box sx={{display:"flex"}}>
                <Typography variant='body'>Advanced Care</Typography>
                <Typography variant='body'>Online Medicine</Typography>
                </Box>
                <hr />
                <Box sx={{display:"flex"}}>
                <Typography variant='body'>Medical & Surgical</Typography>
                <Typography variant='body'>Lab Tests</Typography>
                </Box>
                <hr />
                <Link to="/appoinment"  style={{textDecoration:"none", color:"white"}} >
              <Button variant="contained" size="large" 
              sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white", mt:3}}>Book Appoinment</Button>
              </Link>
                </Container>
            </Grid>

           <Grid item xs={2} sm={4} md={6} sx={{backgroundColor:"#4c71d0"}}>
           <Typography variant='h4'>Emergency?Contact Us.</Typography>
           <Typography variant='body'>Lorem ipsum dolor sit amet, consectetur adipisicing elit,
sed do eius mod tempor incididunt ut labore et dolore
magna aliqua. Ut enim ad minim veniam</Typography>
           

           </Grid>
        </Grid>
        </Box>
    );
};

export default WhyChooseUs;