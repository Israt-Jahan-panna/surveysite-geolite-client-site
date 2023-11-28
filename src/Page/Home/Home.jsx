import React from 'react';
import Banner from '../../Compunents/Banner/Banner';
import About from './About';
import FaqSection from '../../Compunents/FaqSection/FaqSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
        <div>
            <About></About>
        </div>
        <div>
            <FaqSection></FaqSection>
        </div>
        </div>
    );
};

export default Home;