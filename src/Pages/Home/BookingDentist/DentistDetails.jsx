import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../../Shared/Navigation/Navigation';
import StarIcon from '@mui/icons-material/Star';
// import LocationOnIcon from '@mui/icons-material/LocationOn';


const DentistDetails = () => {

    const {dentistId} = useParams()
    const [details, setdetails] = useState({})
    useEffect(() =>{
        fetch(`http://localhost:5000/addDoctor/${dentistId}`)
        .then((res) => res.json())
          .then((data) => setdetails(data))
    } , [])
    return (
        <Box>
            <Navigation/>
            <Container>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12, lg:12 }} >
              <Grid item xs={4} sm={4} md={5} lg={5} sx={{ textAlign: "start", mt:10}}>
                 <img src={details?.image} alt="" style={{
                 width:"250px",
                 borderRadius:5
                 }}
                 />
                 <Typography variant='h5' sx={{color:"#272b41"}}>{details?.name}</Typography>
                 <Typography variant='body' sx={{color:"#757575"}}>{details?.experience}</Typography>
                 <Typography variant='h6' sx={{color:"#20c0f3"}}>Dentist</Typography>
                 <Typography variant='h6' sx={{color: "#faaf00"}}>< StarIcon/>< StarIcon/>< StarIcon/>< StarIcon/>< StarIcon/>({details?.ratting})</Typography>
                 <Typography variant='body' sx={{color:"#757575"}}>Email: {details?.email}</Typography><br />
                 
                 <Link to="/appoinment"  style={{textDecoration:"none", color:"white"}} >

                 <Button variant="contained" size="large"  sx={{ backgroundColor: "#09e5ab", color:"white", mt:3}}>
                    Book Now
                </Button>
                </Link>
              </Grid>

              <Grid item  xs={4} sm={4} md={7} lg={7} sx={{textAlign:"left"}}>
              <Typography variant='h4' sx={{color:"#272b41",fontWeight:700, mt:10, mb:1}}>{details?.name}</Typography>
              <Typography variant='h6' sx={{color:"#272b41", mb:5}}>{details?.currentPosition}</Typography>
              <Typography variant='body' sx={{color:"#272b41"}}><span style={{fontSize:"19px", fontWeight:700}}> Degree: </span>{details?.degree}</Typography><br /><br />
              <Typography variant='body' sx={{color:"#272b41"}}><span style={{fontSize:"19px", fontWeight:700}}>Fee: </span> {details?.fee}</Typography><br /><br />
              <Typography variant='body' sx={{color:"#272b41"}}><span style={{fontSize:"19px", fontWeight:700}}>Location: </span>{details?.location}</Typography><br /><br />
              <Typography variant='body' sx={{color:"#272b41"}}><span style={{fontSize:"19px", fontWeight:700}}>Phone: </span>{details?.phone}</Typography><br /><br />
              <Typography variant='body' sx={{color:"#272b41"}}><span style={{fontSize:"19px", fontWeight:700}}>Time: </span>{details?.time}</Typography>
             

              </Grid>
            
            </Grid>
            
            </Container>
        </Box>
    );
};

export default DentistDetails;