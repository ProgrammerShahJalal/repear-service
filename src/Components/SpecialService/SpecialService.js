import React from 'react';
import './SpecialService.css';
import { Col, Row } from 'react-bootstrap';
import single1 from '../bannerImage/single1.jpg';
import single3 from '../bannerImage/single3.jpg';
import reviewimg from '../bannerImage/review.jpg';
import CountUp from 'react-countup';

const SpecialService = () => {
    return (
        <div className='special-container'>
            <div className="specialContent">
                <Row className='special-single'>
                    <Col xs={12} md={6} className='special-items1'>
                        <div className="special-item1">
                            <div className="special-heading">
                                <h5>WORKING WITH EXCELENT</h5>
                                <h1>Our Special Services</h1>
                            </div>
                            <p>Boldman has 10+ years of experience with providing wide area of specialty services works listed below.</p>

                            <div className="home-mantaince">
                                <div className='home-icon'>
                                    <i className="fas fa-laptop-house home-style"></i>
                                </div>
                                <div className="home-details">
                                    <p>we have experience in home maintenance any surface from new constructions to cabinets in commercial properties. if you are doing your</p>
                                </div>
                            </div>
                            <hr />
                            <div className="home-mantaince">
                                <div className='home-icon'>
                                    <i className="fas fa-charging-station home-style"></i>
                                </div>
                                <div className="home-details">
                                    <p>Electrical ServicesElectricity is very important part of our life. We can’t imagine it without home appliances that in turns work with services provider</p>
                                </div>
                            </div>
                        </div>


                    </Col>
                    <Col xs={12} md={6} className='special-items'>

                        <div className="image-special">
                            <img image='fluid' src={single3} className='special-item' alt="" />
                        </div>
                    </Col>
                </Row>
                <Row className="special-double">
                    <Col xs={12} md={5} className='special-items2'>
                        <img image='fluid' src={single1} className='imageSpecial' alt="" />
                    </Col>
                    <Col xs={12} md={7}>
                        <div className="special-review">
                            <div className="special-customer">
                                <img className='special-pic' src={reviewimg} alt="" />
                                <h2>Norin Andersom</h2>
                                <h6>NewYork City</h6>
                                <p>Pimply dummy text of the printing and typesetting industry areat orem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="assets-container">
                                <div className="assets">
                                    <p><i className="fas fa-briefcase"></i> <CountUp
                                        start={-875.03}
                                        end={299.00}
                                        duration={2.75}
                                        separator=" "
                                        decimals={2}
                                        decimal="."
                                        suffix=" +"
                                    >
                                        {({ countUpRef, start }) => (
                                            <span>
                                                <span ref={countUpRef} />
                                                <button className='special-btn' onClick={start}>Start</button>
                                            </span>
                                        )}
                                    </CountUp></p>
                                    <hr />
                                    <h4>project Completed</h4>
                                </div>
                                <div className="assets">
                                    <p><i className="fas fa-user"></i> <CountUp end={340} suffix='+' /></p>
                                    <hr />
                                    <h4>Work Employed</h4>
                                </div>
                                <div className="assets">
                                    <p><i className="fas fa-trophy"></i> <CountUp end={450} suffix='+' /></p>
                                    <hr />
                                    <h4>Years Experience</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default SpecialService;