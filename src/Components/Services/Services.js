import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';




const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch("/services.json")
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className=" mx-auto mt-5">
            <h2 className=" fw-bolder display-4  w-100 mt-5">Our Latest Services</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }




            </div>

        </div>
    );
};

export default Services;