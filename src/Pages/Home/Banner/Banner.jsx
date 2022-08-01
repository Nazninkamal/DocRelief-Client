import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import chair from  '../../../images/chair.png';
import bg from '../../../images/bg.png'

const bannerBg={
  background: `url(${bg})`,
}

const varticalCenter={
  display:'flex',
  alignItems: 'center',
  height: 450

}

const Banner = () => {
    return (
    <Container style={bannerBg} sx={{ flexGrow: 1 }}>
       <Grid container spacing={2} >
        <Grid item xs={12} sm={6} md={6} sx={{...varticalCenter  ,textAlign:'left'}}>
          <Box>
          <Typography variant='h3'>Your New Smile <br /> 
          Start Here</Typography>
          <Typography variant='h6' sx={{fontSize:14, color:'gray', fontWaight: 300, my:3}} >Lorem ipsum dolor sit 
            amet, consectetur adipisicing elit. Veritatis, nulla? 
            Incidunt ea blanditiis ullam asperiores, nesciunt a atque placeat 
            quibusdam aliquid quia, eveniet molestiae nemo repudiandae 
            dignissimos rerum excepturi nihil.
            </Typography>
         
            <Button variant='contained' style={{backgroundColor: '#4dabf5'}}>GET APPOINMENT</Button>
            </Box>
        </Grid>

        <Grid item xs={12} sm={6} md={6} sx={varticalCenter}>
         <img
         style={{width:'90%'}}
         src={chair} alt="" />
        </Grid>
        
      </Grid>
    </Container>
    );
};

export default Banner;