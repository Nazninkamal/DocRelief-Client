import { Box, Button, Grid, Typography ,Container} from '@mui/material';
import React from 'react';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';

const appoinmentBanner = {
    background: `url(${bg})`,
    marginTop: 175,
    backgroundColor: 'rgba(45,58,74, 0.8)',
    backgroundBlendMode: 'darken'

}

const AppoinmentBanner = () => {
    return (
      
            <Box style={appoinmentBanner} sx={{flexGrow:1}}>
                <Container>
                <Grid container spacing={2} >

<Grid item xs={12} sm={6} md={6} >
<img src={doctor} alt="" 
 style={{width:"100%", marginTop: '-110px'}}
/>
</Grid>

<Grid item xs={12} sm={6} md={6} sx={{display:'flex', justifyContent:'flex-start',
 textAlign:"justify", alignItems:"center"}}>
<Box>
<Typography variant='h6' sx={{color:'#4dabf5',  my: 5}}>APPOINMENT</Typography>
<Typography variant='h4'  style={{color:"white"}}>Make an appoinment Today</Typography>
<Typography variant='h6' sx={{my:5}}  style={{color:"white", fontSize: 14, 
fontWaight: 300}}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa ex dolorem 
facilis neque nostrum error totam, cumque itaque et sequi minima maiores excepturi corrupti, 
dolor, animi in velit officiis? Inventore?</Typography>
<Button variant='contained' style={{backgroundColor: '#4dabf5'}}>Learn More</Button>
</Box>
</Grid>
</Grid>
                </Container>
           
            
        </Box>
       
     
    );
};

export default AppoinmentBanner;