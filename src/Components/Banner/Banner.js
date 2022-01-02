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
                                <h4 data-aos='fade-up'>Best <span className='bn-special'>Service</span> Provider Company</h4>
                                <h1 data-aos='fade-up'>We Build for Your Comfort</h1>
                                <p data-aos='fade-up'>Repair means to restore to proper operating condition a tank, pipe, spill prevention equipment.</p>
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
                                <h4 data-aos='fade-up'>We are always ready to <span className='bn-special'>Services</span></h4>
                                <h1 data-aos='fade-up'>Home maintains Quickly</h1>
                                <p data-aos='fade-up'>Each waiver agency must develop working relationships with the Home Repair and Weatherization service providers.</p>
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
                                <h4 data-aos='fade-up'>Make your <span className='bn-special'>dream</span> come true</h4>
                                <h1 data-aos='fade-up'>Trusted Plumbing Service</h1>
                                <p data-aos='fade-up'>Emergency Repairs means repairs to a utility facility located in or adjacent to a primary city street that must be performed immediately.</p>
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