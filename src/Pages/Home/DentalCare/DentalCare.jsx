import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import dental from "../../../images/2.jpg"
import p1 from "../../../images/1.png"
import p2 from "../../../images/2.png"
import p3 from "../../../images/3.png"
import { Link } from 'react-router-dom';

const DentalCare = () => {
    return (
        <Container sx={{my:10}}>
        <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={12} sm={4} md={6}>
             <img src={dental} alt="" width="90%"/>
          </Grid>
          <Grid item xs={12} sm={4} md={6}>
            <Box sx={{textAlign:"justify"}}>
              <Typography variant='h4' sx={{color:"#272b41", fontWeight:700}}>We Care About Your teeth</Typography>
              <Typography variant='subtitle1'  sx={{color:"#272b41", my:2}}>We sincerely believe that visiting a dentist shouldn’t be 
              a frightening or stressful experience! We provide an equally comfortable experience of relaxation for all our young and 
              adult customers visiting a dentist !Dentists are often the first health care professionals to recognize and identify a 
              wide variety of diseases, ranging from hypertension to oral cancer. They diagnose and treat problems affecting the teeth,
               gingival tissue, tongue, lips and jaws</Typography>

              <img src={p1} alt=""  width="80px"/>
              <img src={p2} alt="" width="80px"/>
              <img src={p3} alt="" width="80px"/>
                    <br /> 
              <Link to="/appoinment"  style={{textDecoration:"none", color:"white"}} >
              <Button variant="contained" size="large" 
              sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white", mt:3}}>Book Appoinment</Button>
              </Link>
             
              {/* <Divider/> */}

               
            </Box>

          </Grid>
        </Grid>
      </Container>
    );
};

export default DentalCare;