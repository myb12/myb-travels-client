import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Services from '../Services/Services';
import Team from '../Team/Team';

const Home = () => {
    return (
        <section >
            <Banner />
            <Services />
            <Team/>
            <Contact/>
        </section>
    );
};

export default Home;