import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Grid } from '@mui/material';
import img from '../../../images/doctor-small.png'

const DentistCard = () => {
    return (

     <Container>
        <Grid item  xs={12} sm={6} md={4} >
        {/* <Card sx={{ maxWidth: 345 }}> */}
        <Card sx={{maxWidth: 345 , border:"rounded",boxShadow:"2px 2px 13px rgb(0 0 0 / 10%)"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image={img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            degree
          </Typography>
          <Typography variant="body2" color="text.secondary">
            rattings
          </Typography>

          <Typography gutterBottom variant="h5" component="div">
           location
          </Typography>
          <Typography variant="body2" color="text.secondary">
            time
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
          fee
          </Typography>
          
        </CardContent>
        <CardActions>
          <Button variant="outlined" size="small" sx={{textAlign: "left", borderColor: "#09e5ab", color:"#09e5ab"}}>View Profile</Button>
          <Button variant="contained" size="small" sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white"}}>Book Now</Button>
        </CardActions>
      </Card>
        </Grid> 
     </Container>
    );
};

export default DentistCard;