import React from 'react';
import Banner from '../../Compunents/Banner/Banner';
import About from './About';
import FaqSection from '../../Compunents/FaqSection/FaqSection';
import LatestProjects from '../../Compunents/LatestProjects/LatestProjects';
import { Helmet } from 'react-helmet-async';
import Testimonials from '../../Compunents/Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>GEOLITE | HOME</title>
            </Helmet>
           <Banner></Banner>
        <div>
            <About></About>
        </div>
        <LatestProjects></LatestProjects>
        <div>
            <FaqSection></FaqSection>
        </div>
        <div>
            <Testimonials></Testimonials>
        </div>
        </div>
    );
};

export default Home;