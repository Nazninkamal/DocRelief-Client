import { Alert, Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import bg from '../../../images/bottom-bg.png'

const MakeAdmin = () => {
      const [email,setEmail] = useState('');
      const [success, setSuccess] = useState(false);
      const {token} = useAuth();

      const handleOnBlur = e =>{
        setEmail(e.target.value)
      }

      const handleAdmitSubmit = e =>{  
        const user = {email};
        fetch('http://localhost:5000/users/admin', {
          method : 'PUT',
        
          headers: {
            'authorization' : `Bearer ${token}`,
            'content-type' : 'application/json'
          },
           body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
          if(data.modifiedCount){

            console.log(data);
            // setEmail('');
             setSuccess(true);
          }
        })
        e.preventDefault()
      }

    return (
        <Box>
          <Typography variant='h4' sx={{mt:5}}>Make an Admin</Typography>
          <form onSubmit={handleAdmitSubmit}>
           <Box sx={{mt:8}}>
           <TextField
            sx={{width: '50%', mr:3}}
              lebel="Email" 
              type="email"
              onBlur={handleOnBlur}
              variant='standard'/>
            <Button type='submit' variant='contained'>Make Admin</Button>
           </Box>
          
          </form>
          {success && <Alert severity='success'>Make Admin Successfully</Alert>}
          <img src={bg} alt="" width="100%" style={{marginTop:"10rem"}}/>
        </Box>
    );
};

export default MakeAdmin;