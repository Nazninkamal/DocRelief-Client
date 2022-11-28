import { Box, Card, Grid, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import img1 from '../../../images/service-thumbnail01.png'
import img2 from '../../../images/service-thumbnail02.png'
import img3 from '../../../images/service-thumbnail03.png'

const MultiColumn = () => {
    return (
        <Container sx={{mt:5}}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={4} sm={4} md={4} sx={{display:"flex"}}>
               <img src={img1} alt="" />
              <Box sx={{mt:2, ml:3, textAlign:"left"}}>
              <Typography variant='h6' sx={{color:"#272b41"}}> Specialised Service</Typography>
               <Typography variant='body1' sx={{color:"#757575"}}>We are a team of dentists</Typography>
              </Box>
            </Grid>
            {/* <Box sx={{width:" 1px",height:" 60px",background: "#3c3f42" }}></Box> */}

            <Grid item xs={4} sm={4} md={4} sx={{display:"flex"}}>
            <img src={img2} alt="" />
              <Box sx={{mt:2, ml:3, textAlign:"left"}}>
              <Typography variant='h6' sx={{color:"#272b41"}}> 24/7 Advanced Care</Typography>
               <Typography variant='body1' sx={{color:"#757575"}}>We are a team of hygienists</Typography>
              </Box>

            </Grid>
            {/* <Box sx={{width:" 1px",height:" 60px",background: "#3c3f42" }}></Box> */}

            <Grid item xs={4} sm={4} md={4} sx={{display:"flex"}}>
            <img src={img3} alt="" />
              <Box sx={{mt:2, ml:3, textAlign:"left"}}>
              <Typography variant='h6' sx={{color:"#272b41"}}> Get Result Online</Typography>
               <Typography variant='body1' sx={{color:"#757575"}}>We are a team of receptionists</Typography>
              </Box>
            </Grid>


          </Grid>

        </Container>
    );
};

export default MultiColumn;