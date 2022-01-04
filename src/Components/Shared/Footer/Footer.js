import React from 'react';
import './Footer.css';
import logo from '../../../images/clean.png';
import down from '../../../images/scroll.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className="container">
                <div className="row d-flex justify-content-around align-items-center">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img className='w-25' src={logo} alt="" />
                            <h3>RP Services</h3>
                        </div>
                        <p className='footer-paragraph'>We don't want you to take burden for equipment. The expert will arrive fully equipped to do the job. If the service required additional heavy equipment you have to only pay the transportation cost which is negotiable with expert.
                        </p>
                    </div>
                    <div className="col-md-2">
                        <h3>Follow Us</h3>
                        <img className='w-25' src={down} alt="" />
                        <div className="row">
                            <div className="footer-icon">
                                <i className="fab fa-facebook-f"></i>
                                <i className="fab fa-twitter"></i>
                                <i className="fab fa-linkedin-in"></i>
                                <i className="fab fa-google-plus-g"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Get Free Estimates</h3>
                        <div className="row">
                            <h2>543-132-78910</h2>
                            <p>We can confirm you that our service is best an safe ever you seen.</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h3>Our Gallary</h3>
                        <div className="row gallary">
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/mX9k9Vh/img-ten-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/SRDC0Cv/image-one-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/k1Z8DcD/img-eight-150x150.jpg" alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/ngxqjg0/img-six-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/1XN9XPc/img-seven-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/689ZSmW/img-four-150x150.jpg" alt="" />
                            </div>
                            <div className="col-md-4">
                                <img src="https://i.ibb.co/dt97SWH/img-five-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/8XHtq5d/image-two-150x150.jpg" alt="" />
                                <img src="https://i.ibb.co/3MvfL6b/image-three-150x150.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center last-footer'>
                <small>Copyright © 2022 All Rights Reserved by <span id="special">TEAM-59</span></small>
            </div>
        </div>
    );
};

export default Footer;