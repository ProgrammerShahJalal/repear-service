import React from 'react';
import './Service.css'


const Service = (props) => {
    const { name, image, description, price } = props.service;
    return (
        <div>
            <div className="col">
                <div className="card h-100 shadow-lg" >
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> <strong>Description:</strong> {description}</p>
                        <p className="text-nowrap"><strong >Price: $</strong>{price}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;