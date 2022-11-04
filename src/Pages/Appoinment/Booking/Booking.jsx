import { Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Booking = ({ booking, date, setBookingSuccess }) => {
    const { name, time,experience,location } = booking;
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography sx={{ color: 'info.main'}} variant="h6" gutterBottom component="div">
                        {experience}
                    </Typography>
                    <Typography variant="body" display="block" gutterBottom>
                        {location}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                       Dr. {name}
                    </Typography>
                    <Typography variant="body" gutterBottom component="div">
                        {time}
                    </Typography>
                   
                    <Button onClick={handleBookingOpen}  variant="contained" size="large" 
                         sx={{textAlign: "left", backgroundColor: "#09e5ab", color:"white", mt:3}}>
                     BOOK APPOINTMENT
                   </Button> 
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
                setBookingSuccess={setBookingSuccess}
            ></BookingModal>
        </>
    );
};

export default Booking;