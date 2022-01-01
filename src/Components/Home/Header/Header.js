import React from 'react';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-light bg-info">
                <div className="container-fluid ">
                    <a href="/" className="navbar-brand h5 text-white" to="/icon">RP services             </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav ">
                            <li className="nav-item">
                                <a href="/home" className="nav-link text-white">Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="/home" className="nav-link text-white">Services</a>
                            </li>

                            <li className="nav-item">
                                <a href="/home" className="nav-link text-white">Logout</a>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;