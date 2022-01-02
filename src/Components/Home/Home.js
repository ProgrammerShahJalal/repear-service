import React from 'react';
import OfficeBenifits from './OfficeBenifits/OfficeBenifits';
import ServiceCard from './ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerItems></BannerItems>
            <OfficeBenifits></OfficeBenifits>
            <Services></Services>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;