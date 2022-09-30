import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/system';
import { Avatar, Box, Rating } from '@mui/material';
import Slider from 'react-slick';

const DentistCards = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        lazyLoad: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    
        autoplaySpeed: 4000,
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
       fetch(`http://localhost:5000/addDoctor`)
       .then(res => res.json())
       .then(data => setReviews(data))
    }, []);

    return (

     <Container>
      <Slider {...settings} style={{ margin: "15px" }}>
        {reviews.map((dt) => (
          <Box key={dt._id}>
            <Box
              sx={{
                background: "#fff",
                boxShadow: "0px 14px 22px rgb(42 135 158 / 14%)",
                borderRadius: "12px",
                m: "5px 20px",
              }}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Avatar
                  src={dt?.user?.photoURL}
                  sx={{
                    width: 120,
                    height: 120,
                    border: "1px solid lightgray",
                  }}
                />
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    mt: 4,
                    color: "#0c4b65",
                  }}
                  gutterBottom >{dt?.name}</Typography>

                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    color: "#0c4b65",
                    fontSize: "14px",
                    fontWeight: 200,
                    mt: 3, }} gutterBottom >{dt?.description} </Typography>
                <Box sx={{ textAlign: "center", mt: 3, color: "#faaf00" }}>
                  {" "}
                  <Rating
                    name="half-rating-read"
                    defaultValue={dt?.rating}
                    precision={0.5}
                    readOnly/> </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
        
        
     </Container>
    );
};

export default DentistCards;