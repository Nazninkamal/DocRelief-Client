import { Button, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import BookingModal from '../BookingModal/BookingModal';

const Booking =({booking,date})=>{
    const {name, time, space } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return(
      <>

            <Grid item xs={12} sm={6} md={4} >
              <Paper elevation={3} sx={{p:5}}>
                <Typography variant='h5'  sx={{ color: 'info.main'}} gutterBottom component='div'>{name}</Typography>
                <Typography variant='h6' gutterBottom component='div'>{time}</Typography>
                <Typography variant='body' display='block' gutterBottom component='div'>{space} Spaces Available</Typography>
                <Button onClick={handleBookingOpen} variant='contained' sx={{mt:3}}>BOOK APPOINMENT</Button>
              </Paper>
              
            </Grid>
            <BookingModal
            booking={booking}
             openBooking ={openBooking}
             handleBookingClose={handleBookingClose}
             date={date}
            > </BookingModal>
            </>
     
    );
    }

    export default Booking;