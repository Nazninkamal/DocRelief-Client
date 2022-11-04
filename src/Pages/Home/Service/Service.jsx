import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';




const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ minWidth: 275 , border: 0, boxShadow: 0, display:"flex", textAlign:"justify", backgroundColor: "transparent"}}>

        <CardMedia
        component="img"
        sx={{width:"auto", height:"70px",mt:2 }}
        image={img}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary" sx={{mb:2}}>
          {name}
        </Typography>
        <Typography variant="body2" component="div">
          { description}
        </Typography>
       
      </CardContent>
     
    </Card>
        </Grid>
    );
};

export default Service;