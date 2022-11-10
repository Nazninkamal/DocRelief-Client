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
    description:"We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.",
    img:fluride
  },
  {
    name: "Dental Root canal",
    description:"We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.",
    img:cavity
  },
  {
    name: "Teeth Whitening",
    description:"We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.",
    img:whitening
  },
  {
    name: "Wisdom Teeth",
    description:"We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.",
    img:whitening
  },
  {
    name: "Crowns Bridges",
    description:"We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.",
    img:whitening
  },
  {
    name: "Cosmetic Dentis",
    description:"We are a team of dentists, hygienists and receptionists who work together to ensure that you receive the best treatment that you require at a very time that suits you.",
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
          <Typography variant='body1'  sx={{ color:"#757575", mt:3}}>A team of dentists working to ensure you receive the best treatment.</Typography><br />
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