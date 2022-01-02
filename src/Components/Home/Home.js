import React from 'react';
import Header from './Header/Header';
import OfficeBenifits from './OfficeBenifits/OfficeBenifits';
import ServiceCard from './ServiceCard/ServiceCard';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OfficeBenifits/>

            <ServiceCard/>
        </div>
    );
};

export default Home;