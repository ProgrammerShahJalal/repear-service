import React from 'react';
import { GoogleMap, LoadScript, Polygon } from '@react-google-maps/api';
import { Col, Container, Row } from 'react-bootstrap';
// const ScriptLoaded = require("../../docs/ScriptLoaded").default;

const MyMap = () => {
    const containerStyle = {
        width: '85%',
        height: '600px',
        margin: '0 auto'
    };

    const center = {
        lat: 22.809681,
        lng: 91.094582
    };
    const paths = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
        { lat: 25.774, lng: -80.19 }
    ]

    return (
        <div>
            <LoadScript
                googleMapsApiKey={process.env.GOOGLE_MAP_API_KEY_REPAIR_SERVICE}
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={10}
                >
                    <></>
                </GoogleMap>
            </LoadScript>
            <div className="repair-contat">
                <Container>
                    <Row>
                        <Col xs={12} md={4}>
                            <div className="contact-font">

                            </div>
                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                        <Col xs={12} md={4}>

                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    );
};

export default MyMap;