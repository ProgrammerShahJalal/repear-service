import React from 'react';
import OfficeBenifits from './OfficeBenifits/OfficeBenifits';
import ServiceCard from './ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';
import Services from '../Services/Services';
import SpecialService from '../SpecialService/SpecialService';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerItems></BannerItems>
            <OfficeBenifits></OfficeBenifits>
            <Services></Services>
            <SpecialService></SpecialService>
            <ServiceCard></ServiceCard>
        </div>
    );
};

export default Home;