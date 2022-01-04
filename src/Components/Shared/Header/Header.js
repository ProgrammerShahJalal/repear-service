import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../../images/clean.png';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    console.log(user);
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark navbar-custom">
                <div className="container-fluid">
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
                            <li className="nav-item">
                                <NavLink to="/blog" className="nav-link text-white">Blog</NavLink>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link text-white">{user.email && <li className="nav-item">
                                    <p>{user.displayName}</p>
                                </li>}</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link text-white">{user.email && <li className="nav-item">
                                    <img className='user' src={user.photoURL} alt="" />
                                </li>}</span>
                            </li>
                            <li className="nav-item">
                                <li className="nav-link text-white">{
                                    user.email ? <li>
                                        <li className="nav-item">
                                            <button onClick={logOut} type="button" className="btn btn-sm btn-light">Logout</button>
                                        </li>
                                    </li>
                                        :
                                        <NavLink to="/login" className="nav-item">
                                            <button type="button" className="btn btn-sm btn-light">Login</button>
                                        </NavLink>

                                }</li>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;