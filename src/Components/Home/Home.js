import React from 'react';
import Services from '../Services/Services';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;