import React, { useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate, } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, signInWithGoogle, authError } = useAuth();

    const location = useLocation();
    const history = useNavigate()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }

    return (
        <div className="container pb-5 login-box w-50 mx-auto">
            <h3 className="mt-5 text-center text-info fw-bolder ">Login Form</h3>
            <form onSubmit={handleLoginSubmit}>
                <input
                    className='py-2 border rounded'
                    style={{ width: '100%' }}
                    label="Your Email"
                    name="email"
                    placeholder="Your Email"
                    onBlur={handleOnChange}
                />
                <br />
                <input className="mt-4 py-2 border rounded"
                    style={{ width: '100%' }}
                    label="Your Password"
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    onBlur={handleOnChange} />
                <br />
                <button className="btn btn-info mt-2 mb-2" type="submit">Login</button>
                {isLoading && <div className="spinner-border text-info text-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>}
                {user?.email && <div className="alert alert-success" role="alert">
                    User created successFully!
                </div>}
                {authError && <div className="alert alert-danger" role="alert">
                    {authError}
                </div>}

                <p className="text-white fw-bolder">New User? Please <Link className="text-decoration-none text-info" to="/register">Register</Link></p>
            </form>

            <button className="btn-warning mt-4  rounded text-wrap" onClick={handleGoogleSignIn}><i className="fab fa-google text-info"></i> Login with Google
            </button>

        </div>
    );
};

export default Login;