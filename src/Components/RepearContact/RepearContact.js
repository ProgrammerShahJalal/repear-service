import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './RepearContact.css';

const RepearContact = () => {
    return (
        <div className='w-75 mx-auto'>
            <Row>
                <Col xs={12} md={3}>
                    <div className="repair-info-container">
                        <div className="reapair-font">
                            <div className="icon-font"><i class="fas fa-envelope"></i></div>
                        </div>
                        <div className="repair-in">
                            Nine Mile Water Business Park,<br /> Nether Wallop, Stockbridge,<br />
                            Hampshire SO20 8DR
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="repair-info-container">
                        <div className="reapair-font">
                            <div className="icon-font"><i class="fas fa-phone"></i></div>

                        </div>
                        <div className="repair-in">
                            <h1>Phone:
                            </h1>
                            <p>+44 (0) 1962 454 474</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="repair-info-container">
                        <div className="reapair-font">
                            <div className="icon-font"><i class="fas fa-paper-plane"></i></div>

                        </div>
                        <div className="repair-in">
                            <h1>Email:</h1>
                            <p>contact@conficio.design</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div className="repair-info-container">
                        <div className="reapair-font">
                            <div className="icon-font"><i class="fas fa-map-marker-alt"></i></div>

                        </div>
                        <div className="repair-in">
                            <h1>Directions:</h1>
                            <p>Open Google Maps</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default RepearContact;