import { Button, Grid, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import dental from '../../../images/treatment.png'

const DentalCare = () => {
    return (
        <Container  sx={{flexGrow:1, mt:5}}>
            <Grid spacing={2} container xs={4} sm={8} md={12} >
                <Grid item xs={4} sm={4} md={5} >
                    <img src={dental} alt="" 
                    style={{width: '80%'}}
                    />
                </Grid>

                <Grid item xs={4} sm={4} md={7}>
                    <Box sx={{textAlign:'left'}}>
                    <Typography variant='h3' sx={{my:5}}>
                        Exceptional Dental <br />Care, on Your Terms
                    </Typography>
                    <Typography variant='body' sx={{fontWeight:400, color:'gray', fontSize:18, lineHeight:2}}>Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Beatae placeat saepe vitae mollitia eveniet maxime voluptatibus
                    explicabo recusandae pariatur quaerat praesentium in odio temporibus 
                    magnam hic sunt, ipsum at atque.Lorem ipsum dolor sit amet consectetur adipisicing 
                    elit. Beatae placeat saepe vitae mollitia eveniet maxime voluptatibus
                    explicabo recusandae pariatur quaerat praesentium in odio temporibus 
                    magnam hic sunt, ipsum at atque.
                    </Typography>
                    <br />
                    <Button variant='contained' sx={{backgroundColor: '#4dabf5', mt:5}}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default DentalCare;