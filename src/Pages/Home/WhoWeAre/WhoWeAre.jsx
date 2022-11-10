import { Divider, Grid, Typography, Container,  Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import weImg from '../../../images/Researchers-bro.png'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const WhoWeAre = () => {
    return (
        <Container sx={{my:10}}>
          <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            <Grid item xs={12} sm={4} md={6}>
               <img src={weImg} alt="" width="90%"/>
            </Grid>
            <Grid item xs={12} sm={4} md={6}>
              <Box sx={{textAlign:"justify"}}>
              <Typography variant='h6' sx={{color:"#4d72d0", my:2}}>Who we are -----</Typography>
                <Typography variant='h4' sx={{color:"#272b41", fontWeight:700}}>We Have Advanced Technologies</Typography>
                <Typography variant='subtitle1'  sx={{color:"#272b41", my:3}}>We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.
                Globally incubate standards compliant channels before scalable benefits. Quickly disseminate superior deliverables whereas web-enabled applications.

                A team of dentists working to ensure you receive the best treatment.</Typography>
               
                <Divider/>
                <Typography variant="h6"  sx={{color:"#272b41", mt:3}}>Subscribe to our Newsletter</Typography>
                <input placeholder='Enter Your Email' style={{border:" 2px solid #09e5ab",borderRadius: "50px",  padding: "20px", width:"50%"}}/>

                <Button variant="contained"  sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white", py:2, borderRadius:30, ml:-8}}>
                 <Box display={{md: "none"}}>Search </Box>
                  <ArrowForwardIosIcon/>
               </Button> 
              </Box>

            </Grid>
          </Grid>
        </Container>
    );
};

export default WhoWeAre;