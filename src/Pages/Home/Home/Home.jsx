import { Box } from '@mui/material';
import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import BookingDebtist from '../BookingDentist/BookingDebtist';
import DentalCare from '../DentalCare/DentalCare';
import MultiColumn from '../MultiColumn/MultiColumn';
import OurDoctor from '../OurDoctor/OurDoctor';
import Services from '../Services/Services';
import WhoWeAre from '../WhoWeAre/WhoWeAre';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    return (
        <Box>
            <Navigation/>
            <Banner/>
            <MultiColumn/>
            <DentalCare/> 
            {/* <WhyChooseUs/> */}
            <Services/> 
           
            <BookingDebtist/>
            <WhoWeAre/>
            {/* <AppoinmentBanner/> */}
            {/* <OurDoctor/> */}
            <Footer/>
        </Box>
    );
};

export default Home;