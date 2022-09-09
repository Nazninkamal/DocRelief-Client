import { Button, Container, Grid, InputAdornment, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import bottomimg from '../../../images/bottom-bg.png'
import SearchIcon from '@mui/icons-material/Search';
import LocationOnIcon from '@mui/icons-material/LocationOn';


// const varticalCenter={
//   display:'flex',
//   alignItems: 'center',
//   height: 450

// }

const Banner = () => {
    return (
    <Box sx={{ flexGrow: 1 }}>
     
      <Box sx={{mt: 10}}>
         <Typography variant='h3' sx={{color: "#272b41", marginBottom:"1rem", fontSize: "40px", fontWeight: 600}}>Search Dentist, Make an Appointment</Typography>
         <Typography variant='h5' sx={{color: "#757575",  fontSize: "20px", marginBottom:"1rem"}}>Discover the best Dentist, clinic & hospital the city nearest to you.</Typography>
      </Box>
    
  
  <Container sx={{mb: 5, mt:3}}>
  <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12, lg: 12 }} paddingX={{md: 20}}>
  <Grid item xs={4} sm={8} md={3}>
  <TextField  id="filled-basic" fullWidth placeholder="Search Location"  InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LocationOnIcon/>
            </InputAdornment>
          ),
        }} />
  
  </Grid>

  <Grid item xs={4}  sm={8} md={8}>
  <TextField  id="filled-basic" fullWidth placeholder="Search Doctors, Clinics, Hospitals, Diseases Etc" 
   InputProps={{
    startAdornment: (
      <InputAdornment position="start">
         <SearchIcon />
      </InputAdornment>
    ),
  }}/>
  </Grid>

  <Grid item xs={4}  sm={8} md={1}>
   <Button variant="contained" size="large" fullWidth sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white", py:2}}>
      <Box display={{md: "none"}}>Search </Box>
      <SearchIcon />
   </Button> 
  </Grid>
  
</Grid>
  </Container>
  
      

      <img src={ bottomimg} alt=""  style={{width: '100%'}}/>

    </Box>
   
    );
};

export default Banner;