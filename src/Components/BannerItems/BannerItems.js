import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { AiOutlineArrowRight } from 'react-icons/ai';
import './BannerItems.css'
import service1 from '../bannerImage/service1.jpg'
import service2 from '../bannerImage/service2.jpg'
import service3 from '../bannerImage/service3.jpg'
const BannerItems = () => {
    return (
        <div>
            <div className="banner-items">
                <Container>
                    <Row className='items'>
                        <Col xs={12} md={4} className="items-col">
                            <Card className='card'>
                                <div className="imgStyle">
                                    <img
                                        className="d-block w-100 imgStyle"
                                        src={service1}
                                        alt="Third slide"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="banner-card">
                                        <h5>Residential Plumbing</h5>
                                        <Button className="card-button"><AiOutlineArrowRight className="arrow" /></Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="items-col">
                            <Card>
                                <div className="imgStyle">
                                    <img
                                        className="d-block w-100 imgStyle"
                                        src={service2}
                                        alt="Third slide"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="banner-card">
                                        <h5>Commercial Plumbing</h5>
                                        <Button className="card-button"><AiOutlineArrowRight className="arrow" /></Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} className="items-col">
                            <Card className="">
                                <div className="imgStyle">
                                    <img
                                        className="d-block w-100 imgStyle"
                                        src={service3}
                                        alt="Third slide"
                                    />
                                </div>
                                <Card.Body>
                                    <div className="banner-card">
                                        <h5>Service & Repairing</h5>
                                        <Button className="card-button"><AiOutlineArrowRight className="arrow" /></Button>
                                    </div>

                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BannerItems;