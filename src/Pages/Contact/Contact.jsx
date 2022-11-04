import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css'
import img from "../../images/Contact us-bro.png"
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';


const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/contact', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
    return (
      <>
      <Navigation/>
      <Typography variant='h3' sx={{color: "#272b41",my:5, fontSize: "40px", fontWeight: 600}}>Contact Us</Typography>
      <Box className='body'>
      <Box sx={{ border:"rounded", boxShadow:" -4px 40px 45px -4px rgba(136,136,136,0.76)" }} width={{lg:"70%", md:"70%", sm:"80%", xs:"100%"}} >
           
     <Grid container columns={{ xs: 4, sm: 8, md: 12, lg:12 }} >
     <Grid item xs={4} sm={4} md={6} lg={6} sx={{backgroundColor:"rgb(255 255 255)"}}>
        <Box >
       <img src={img} alt=""  width={"100%"} /> 
        </Box>
     
       </Grid>


        <Grid item xs={4} sm={4} md={6} lg={6}  sx={{backgroundColor: "rgb(41 46 63)",textAlign: "start" }}>
                 <Box sx={{px:4, mt:2}}>
             
                <form  onSubmit={handleSubmit(onSubmit)}>
                <Box>

                    <TextField 
                     required
                     id="filled-basic" 
                     inputProps={{ style: { color: 'white'}}} 
                     type="email" {...register("email")}
                     placeholder='Email address' 
                     fullWidth
                     size="small"  
                     sx={{backgroundColor:"#494d5c", my:2, borderRadius:"5px"}} 
                   
                     name="email"
                     />

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("firstName")}
                     placeholder='Your Name' 
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="name"
                     />
                    <TextField 
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("number")}
                     placeholder='Contact Number'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", my:2, borderRadius:"5px"}} 
                     name="number"
                     />
                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("address")}
                     placeholder='Address'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="address"/>

                     <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("massege")}
                     placeholder='Message'  
                     fullWidth 
                     multiline
                    rows={4} 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px", my:2}} 
                     name="massege"/>

                    <Button
                     type="submit"
                     variant='contained' 
                    
                     fullWidth 
                     sx={{background:"rgb(83 218 178)", color:"rgb(255 255 255)", fontWeight:600,borderRadius:"5px",mb:2}}>
                    STAY UPDATED
                    </Button>
                    </Box>  
                </form> 
             
             
             </Box>

             </Grid>
                 
       </Grid>
       </Box>
      </Box>
      <Footer/>
      </>
    );
};

export default Contact;





