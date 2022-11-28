import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import {  Box, Button, IconButton, Rating } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';


const DentistCards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    
        autoplaySpeed: 10000,
        cssEase: "linear",
    
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };

    const [reviews, setReviews] = React.useState([]);
    React.useEffect(() =>{
       fetch(`https://docrefief-server.vercel.app/addDoctor`)
       .then(res => res.json())
       .then(data => setReviews(data))
    }, []);

    return (

     <Container>
      <Slider {...settings} style={{  }}>
        {reviews.map((dt) => (
          <Box key={dt._id}>
            <Box
              sx={{
                background: "#f8f9fa",
                boxShadow: "5px 5px 5px 5px gray",
                borderRadius: "8px",
                 m: "5px 7px",
                height: "380px"
              }}
            >
              <Box sx={{my:3}}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                
                <img  src={dt?.image} alt=""  style={{ width: 200, height: 120, border: "1px solid lightgray"}}/>
              
              </Box>

              <Box sx={{marginX:2}}>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "start",
                    mt: 2,
                    color: "#0c4b65",
                    
                  }}
                  gutterBottom >{dt?.name}</Typography>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "start",
                    color: "#0c4b65",
                    fontSize: "14px",
                    fontWeight: 200,
                    }} gutterBottom >{dt?.experience  } </Typography>

                <Box sx={{ textAlign: "start", color: "#faaf00" }}>
                 
                  <IconButton sx={{p:0, m:0}}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={dt?.ratting}
                    precision={0.5}
                    readOnly/> 
                    </IconButton>
                    ({dt?.ratting}) </Box>
                  
                <Typography sx={{
                    textAlign: "start",
                    color: "#0c4b65",
                    fontSize: "14px",
                    fontWeight: 200,
                    mt:1
                    }} > 
                    <IconButton sx={{p:0, m:0}}>
                    <LocationOnIcon/>
                  </IconButton>
                    {dt?.location}</Typography>

                    <Typography sx={{
                    textAlign: "start",
                    color: "#0c4b65",
                    fontSize: "14px",
                    fontWeight: 200,
                    mt:1
                    }} > 
                    <IconButton sx={{p:0, m:0}}>
                    <AccessTimeIcon/> 
                  </IconButton>
                    {dt?.time}</Typography>
              </Box>
             <Box sx={{my:2}}  gutterBottom>
             <Link style={{textDecoration:"none", color:"white"}}  to={`/dentistDetails/${dt._id}`}><Button variant="outlined" size="small" sx={{borderColor:"#09e5ab", borderWidth:2}}>
                  View Profile
              </Button></Link>
              <Link to="/appoinment"  style={{textDecoration:"none", color:"white"}} >
              <Button variant="contained" size="small"  sx={{ backgroundColor: "#09e5ab", color:"white", marginLeft:1}}>
                    Book Now
             </Button>
             </Link>
             </Box>
              </Box>
             
            </Box>
          </Box>
        ))}
      </Slider>
        
        
     </Container>
    );
};

export default DentistCards;

