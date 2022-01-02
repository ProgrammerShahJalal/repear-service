import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import OfficeBenifits from './OfficeBenifits/OfficeBenifits';
import ServiceCard from './ServiceCard/ServiceCard';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <OfficeBenifits></OfficeBenifits>
            <ServiceCard></ServiceCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;