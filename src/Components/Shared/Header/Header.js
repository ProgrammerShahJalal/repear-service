import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/clean.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
                <div className="container-fluid ">
                    <NavLink to="/" className="navbar-brand h5 text-white"><img className='logo' src={logo} alt="" /> RP services</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <NavLink to="/home" className="nav-link text-white">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link text-white">Services</NavLink>
                            </li>
                            {
                                user.email ? <li>
                                    <li className="nav-item">
                                        <img className='user' src={user.photoURL} alt="" />
                                    </li>

                                    <li className="nav-item">
                                        <NavLink to="/home" className="nav-link text-white">Logout</NavLink>
                                    </li>
                                </li>
                                    :
                                    <li className="nav-item">
                                        <NavLink to="/login" className="nav-link text-white">Login</NavLink>
                                    </li>
                            }

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;