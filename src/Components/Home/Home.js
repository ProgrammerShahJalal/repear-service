import React from 'react';
import OfficeBenifits from './OfficeBenifits/OfficeBenifits';
import ServiceCard from './ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';
import SpecialService from '../SpecialService/SpecialService';
import HomeServices from './HomeServices/HomeServices';
import MyMap from '../MyMap/MyMap';
import RepearContact from '../RepearContact/RepearContact';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <BannerItems></BannerItems>
            <OfficeBenifits></OfficeBenifits>
            <HomeServices></HomeServices>
            <SpecialService></SpecialService>
            <ServiceCard></ServiceCard>
            <MyMap></MyMap>
            <RepearContact></RepearContact>
        </div>
    );
};

export default Home;