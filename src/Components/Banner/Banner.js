import React, { useEffect } from 'react';
import './Banner.css'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { Button, Carousel } from 'react-bootstrap';
import slide1 from '../bannerImage/slide1-1.jpg'
import slide2 from '../bannerImage/slide1-2.jpg'
import slide3 from '../bannerImage/slide1-3.jpg'
import 'aos/dist/aos.css'
import Aos from 'aos'


const Banner = () => {
    useEffect(() => {
        Aos.init({
            offset: 200,
            duration: 1600,
            easing: 'ease-in-sine',
            delay: 100,
            disable: 'mobile'
        })
    }, [])
    return (
        <div className="banner-containers">
            <Carousel fade >
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src={slide1}
                        alt="First slide"
                    />
                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                <h4 data-aos='fade-up'>Servicing & Repair Company</h4>
                                <h1 data-aos='fade-up'>Trusted Plumbing</h1>
                                <p data-aos='fade-up'>Pellentesque habitant morbi tristique senectus et pellente morbi nectneolitics ellentesque vestibulum nectneolitics modern</p>
                                <Button data-aos='fade-left' className="btn btn-style">Get Started Now <AiOutlineArrowRight className="arrow" /></Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src={slide2}
                        alt="Second slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                <h4 data-aos='fade-up'>Servicing & Repair Company</h4>
                                <h1 data-aos='fade-up'>Trusted Plumbing</h1>
                                <p data-aos='fade-up'>Pellentesque habitant morbi tristique senectus et pellente morbi nectneolitics ellentesque vestibulum nectneolitics modern</p>
                                <Button data-aos='fade-up' className="btn btn-style">Get Started Now <AiOutlineArrowRight className="arrow" /></Button>

                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
                <Carousel.Item className='carousel-container'>
                    <img
                        className="d-block w-100"
                        src={slide3}
                        alt="Third slide"
                    />

                    <div className="carousel-caption">
                        <Carousel.Caption className='carousel'>
                            <div className="caption">
                                <h4 data-aos='fade-up'>Servicing & Repair Company</h4>
                                <h1 data-aos='fade-up'>Trusted Plumbing</h1>
                                <p data-aos='fade-up'>Pellentesque habitant morbi tristique senectus et pellente morbi nectneolitics ellentesque vestibulum nectneolitics modern</p>
                                <Button data-aos='fade-up' className="btn btn-style">Get Started Now <AiOutlineArrowRight className="arrow" /></Button>
                            </div>
                        </Carousel.Caption>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>

    );
};

export default Banner;