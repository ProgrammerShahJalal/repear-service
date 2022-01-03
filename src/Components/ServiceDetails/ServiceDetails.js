import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const ServiceDetails = () => {
    let { id } = useParams();
    const [serviceDetails, setServiceDetails] = useState([])
    useEffect(() => {
        fetch('https://morning-coast-96153.herokuapp.com/services')
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                const foundService = data.filter(detail => detail._id == id)
                console.log(foundService);
                setServiceDetails(foundService);
            })
    }, [id])


    const { name, description, image, price } = serviceDetails[0] || {}
    return (
        <div className="container mt-4  ">
            <div className="row justify-content-center align-items-center ">
                <div className=" col-md-4">
                    <div className="card h-100 shadow-lg">
                        <img src={image} className="card-img-top " alt="..." />
                        <div className="card-body">

                            <p className="text-nowrap"><strong >{name}</strong></p>
                            <p className="card-text">{description}</p>

                            <p className="text-nowrap"><strong >Price:</strong>{price}</p>
                        </div>

                    </div>
                </div>

            </div>

        </div>

    );
};

export default ServiceDetails;
