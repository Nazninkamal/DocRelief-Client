import { Box } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import BookingDebtist from '../BookingDentist/BookingDebtist';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import './Home.css';

const Home = () => {
    return (
        <Box>
            <Navigation/>
            <Banner/>
           <Services/> 
            {/* <DentalCare/>  */}
            <BookingDebtist/>
            <AppoinmentBanner/>
            <OurDoctor/>
        </Box>
    );
};

export default Home;