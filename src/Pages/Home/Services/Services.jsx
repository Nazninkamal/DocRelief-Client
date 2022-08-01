import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import whitening from '../../../images/whitening.png';
import cavity from '../../../images/cavity.png';
import fluride from '../../../images/fluoride.png';
import { Typography } from '@mui/material';


const services= [
  {
    name: "Fluoride Treatment",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:fluride
  },
  {
    name: "Cavity Filling",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:cavity
  },
  {
    name: "Cluoride Treatment",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:whitening
  }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography variant='h6' sx={{color:'#4dabf5', fontWeight: 600, margin: 2}}>OUR SERVICES</Typography>
          <Typography variant='h4'  sx={{ fontWeight: 600,  margin: 5}}>Services we provide</Typography>
               <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
               
               {
                services.map(service => <Service
                key={service.name}
                service={service}
                ></Service>)
               }
        </Grid>
        </Container>
      </Box>
    );
};

export default Services;