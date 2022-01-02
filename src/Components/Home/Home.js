import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import OfficeBenifits from './OfficeBenifits/OfficeBenifits';
import ServiceCard from './ServiceCard/ServiceCard';
import Banner from '../Banner/Banner';
import BannerItems from '../BannerItems/BannerItems';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <BannerItems></BannerItems>
            <OfficeBenifits></OfficeBenifits>
            <ServiceCard></ServiceCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;