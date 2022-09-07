import { Box } from '@mui/material';
import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppoinmentBanner from '../AppoinmentBanner/AppoinmentBanner';
import Banner from '../Banner/Banner';
import DentalCare from '../DentalCare/DentalCare';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';

const Home = () => {
    return (
        <Box>
            <Navigation/>
            <Banner/>
            <Services/>
            {/* <DentalCare/> */}
            <AppoinmentBanner/>
            <OurDoctor/>
        </Box>
    );
};

export default Home;