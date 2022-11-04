import React from 'react';
import footerBg from '../../../images/footer-bg.jpg'
import logo from '../../../images/Screenshot_49-removebg-preview.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Box, Button, Grid, Typography ,Container} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import { Link } from 'react-router-dom';

const footerBanner = {
    background: `url(${footerBg})`,
    // marginTop: 175,
    // height: 400,
    backgroundColor: '#333538',

    // backgroundBlendMode: 'darken'

}

const Footer = () => {
    return (
       <Box style={footerBanner}>
         <Container >
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{mb:5}}>
            <Grid item xs={3} sm={4} md={5} >
              
                <Box sx={{backgroundColor:"#33363a",width:"75%",textAlign:"justify",  boxShadow: "rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset"}}>
                  <Container>
                   <Box sx={{my:-8}}>
                   <img src={logo} alt="" width="60%" style={{marginTop:"10px"}}/>
                   
                   <Typography variant='subtitle1' sx={{ color:"#b5b5b6",my:2}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius modtempor incididunt ut labore et dolore
                        magna aliua. Ut enim ad minim</Typography>
                   <Box sx={{pb:3}}>
                   <a href="tel:31234567890" style={{textDecoration:"none"}}>
                     <Typography variant='body' sx={{color:"#b5b5b6"}}>
                       <LocalPhoneIcon sx={{backgroundColor:"#5bc198", color:"white", padding:1, borderRadius:5}}/>
                       31234567890
                     </Typography>
                   </a>
                   <br/>
                   <a href="mailto:info@mededin.com" style={{textDecoration:"none"}}>
                     <Typography variant='body' sx={{color:"#b5b5b6"}}>
                       <MailOutlineIcon sx={{backgroundColor:"#5bc198", color:"white", padding:1, borderRadius:5}}/>
                       info@mededin.com
                     </Typography>
                   </a>
                   </Box>
                   </Box>
                   
               </Container>
              </Box>
            
            </Grid>
         

            <Grid item xs={1} sm={4} md={2} sx={{textAlign:"left", mt:5}}>
              <Typography variant='h6' sx={{color:"#5bc198"}}>Quick Links</Typography>
                <Box sx={{position:" absolute",width:" 70px",height:" 5px",background: "#3c3f42"}}></Box>
                    <br/>
                                   <Link to='/about' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    About Us
                                    </Typography>
                                    </Link> <br />

                                    <Link to='/mission' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Mission
                                    </Typography>
                                    </Link>
                                    <br />

                                    <Link to='/service' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Service
                                    </Typography> 
                                    </Link><br />

                                    <Link to='/blogNews' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Blog & News
                                    </Typography>
                                    </Link><br />



                                    <Link to='/transport' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Transport 
                                    </Typography> 
                                    </Link>


            </Grid>

            <Grid item xs={1} sm={4} md={2} sx={{textAlign:"left", mt:5}}>
              <Typography variant='h6' sx={{color:"#5bc198"}}>Quick Links</Typography>
                <Box sx={{position:" absolute",width:" 70px",height:" 5px",background: "#3c3f42"}}></Box>
                    <br/>
                                   <Link to='/about' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    About Us
                                    </Typography>
                                    </Link> <br />

                                    <Link to='/mission' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Mission
                                    </Typography>
                                    </Link>
                                    <br />

                                    <Link to='/service' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Our Service
                                    </Typography> 
                                    </Link><br />

                                    <Link to='/blogNews' style={{textDecoration: "none"}}>
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Blog & News
                                    </Typography>
                                    </Link><br />



                                    <Link to='/transport' style={{textDecoration: "none"}} >
                                    <Typography variant="h6" sx={{ color:"#b5b5b6", fontSize: 15}}>
                                    Transport 
                                    </Typography> 
                                    </Link>


            </Grid>

            <Grid item xs={3} sm={4} md={3} sx={{mt:5}}>
               <Button variant="outlined" size="large" sx={{width:"70%"}}>Find a Doctor</Button> <br /><br />
               <Button variant="outlined" size="large" sx={{width:"70%"}}>Career</Button> <br /><br />
               <Button variant="outlined" size="large" sx={{width:"70%"}}>Newsletter</Button><br /><br />
               <Box sx={{ color:"#b5b5b6"}}>
               < FacebookIcon sx={{mx:2}}/> <InstagramIcon/><LinkedInIcon sx={{mx:2}}/><TwitterIcon/>

               </Box>
            </Grid>


          
          </Grid>
          <hr sx={{color:"#b5b5b6", height:5}}/>
        <Typography variant="body" sx={{color:"#b5b5b6"}}>© TeethRelief 2020 Allright Reserved</Typography>
         </Container>
       
      </Box>

    
    );
};

export default Footer;