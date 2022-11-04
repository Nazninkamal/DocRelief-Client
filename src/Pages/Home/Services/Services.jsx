import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Service from '../Service/Service';
import whitening from '../../../images/whitening.png';
import cavity from '../../../images/cavity.png';
import fluride from '../../../images/fluoride.png';
import titleIcon from '../../../images/title-icon.png';
import { Typography } from '@mui/material';


const services= [
  {
    name: "Dental Implants",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:fluride
  },
  {
    name: "Dental Root canal",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:cavity
  },
  {
    name: "Teeth Whitening",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:whitening
  },
  {
    name: "Wisdom Teeth",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:whitening
  },
  {
    name: "Crowns Bridges",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:whitening
  },
  {
    name: "Cosmetic Dentis",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum placeat quia recusandae eaque maxime ipsum omnis quos, ratione amet quibusdam .",
    img:whitening
  }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Typography variant='h4'  sx={{color:"272b41", fontWeight: 600,mt:5,mb:2}}>Services we provide</Typography>
          <img src={titleIcon} alt="" />
<br />
          <Typography variant='body1'  sx={{ color:"#757575", mt:3}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem autem
              <br /> voluptatem obcaecati!</Typography><br />
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