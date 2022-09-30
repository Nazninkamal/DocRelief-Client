import { Box, Button, Grid, Rating, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const AddDoctor = () => {
    const [value, setValue] = React.useState(2);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
    console.log(data);

    axios.post('http://localhost:5000/addDoctor', data)
    .then(res => {
      if(res.data.insertedId){
        alert('added successfully');
        reset();
      }
    })
  };
   
    return (
        <Container>
              <Grid item xs={4} sm={4} md={5} lg={5}  sx={{backgroundColor: "rgb(41 46 63)",textAlign: "start" }}>
                {/* <Box sx={{color:"white", display:"flex", justifyContent:"end"}}><ClearIcon sx={{size:"large"}}/></Box> */}
                 <Box sx={{px:4}}>
                    <Typography variant='h4' sx={{color:"rgb(83 218 178)", py:3, textAlign:"center"}}>Add Doctor</Typography>
             
                <form  onSubmit={handleSubmit(onSubmit)}>
                <Box>
                <Rating
          sx={{ mt: 2 }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />

                    <TextField 
                     required
                     id="filled-basic" 
                     inputProps={{ style: { color: 'white'}}} 
                     type="email" {...register("email")}
                     placeholder='Email address' 
                     fullWidth
                     size="small"  
                     sx={{backgroundColor:"#494d5c", my:1, borderRadius:"5px"}} 
                   
                     name="email"
                     />

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("name")}
                     placeholder="Doctor's Name"
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="name"
                     />
                    <TextField 
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("degree")}
                     placeholder='Degree'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", my:1, borderRadius:"5px"}} 
                     name="degree"
                     />
                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("location")}
                     placeholder='Location'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="location"/>

                    {/* <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("ratting")}
                     placeholder='Ratting'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px",my:1}} 
                     name="ratting"/> */}

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("time")}
                     placeholder='Available Time'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px"}} 
                     name="time"/>

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("fee")}
                     placeholder='Fee'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px",my:1}} 
                     name="fee"/>

                   

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("experience")}
                     placeholder='Experience'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px",my:1}} 
                     name="experience"/>

                    <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("phone")}
                     placeholder='Phone Number'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px",my:1}} 
                     name="phone"/>

                      <TextField 
                     required
                     inputProps={{ style: { color: 'white'}}} 
                     type="text" {...register("currentPosition")}
                     placeholder='Current Position'  
                     fullWidth 
                     size="small" 
                     sx={{backgroundColor:"#494d5c", borderRadius:"5px",my:1}} 
                     name="currentPosition"/>


                    <Button 
                     type="submit"
                     variant='contained' 
                     size='small' 
                     fullWidth 
                     sx={{background:"#09e5ab", color:"rgb(255 255 255)", fontWeight:600,borderRadius:"5px",my:2}}>
                    ADD DOCTOR
                    </Button>
                    </Box>  
                </form> 
             
              <Box sx={{display:'flex',color:"rgb(165 169 182)"}} >
                       
             <Typography  sx={{ fontSize:12, fontWeight:500, marginLeft:1, pb:3}}> Your information will never be shared with any third party.</Typography>
             </Box>
             </Box>

             </Grid>
        </Container>
        
      
    );
};

export default AddDoctor;