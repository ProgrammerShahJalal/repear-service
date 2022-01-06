import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

import './Service.css'


const Service = (props) => {

    const { name, image, description, price, _id } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> {description}</p>
                        <p className="text-nowrap"><strong >Price: $</strong>{price}</p>

                        <Link to={`/buynow/${_id}`}>
                            <button className="btn btn-dark special-btn">
                                Buy now</button>
                        </Link>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;
