import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import { Spinner } from 'react-bootstrap';


const Services = () => {
    const [services, setServices] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setIsLoading(true);
        fetch("https://morning-coast-96153.herokuapp.com/services")
            .then(res => res.json())
            .then(data => {
                setIsLoading(false);
                setServices(data);
            })
    }, [])
    if (isLoading) {
        return <div className="text-center mt-5"><Spinner animation="border" variant="danger" />;
            <div className='row'>
                <div className="col-md-4"><div className="card" aria-hidden="true">
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>
                    </div>
                </div>
                    <div className="card" aria-hidden="true">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                        </div>
                    </div>
                    <div className="card" aria-hidden="true">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                        </div>
                    </div></div>
                <div className="col-md-4"><div className="card" aria-hidden="true">
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>

                    </div>
                </div>
                    <div className="card" aria-hidden="true">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                        </div>
                    </div>
                    <div className="card" aria-hidden="true">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                        </div>
                    </div></div>
                <div className="col-md-4"><div className="card" aria-hidden="true">
                    <img src="" className="card-img-top" alt="" />
                    <div className="card-body">
                        <h5 className="card-title placeholder-glow">
                            <span className="placeholder col-6"></span>
                        </h5>
                        <p className="card-text placeholder-glow">
                            <span className="placeholder col-7"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-4"></span>
                            <span className="placeholder col-6"></span>
                            <span className="placeholder col-8"></span>
                        </p>

                    </div>
                </div>
                    <div className="card" aria-hidden="true">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                        </div>
                    </div>
                    <div className="card" aria-hidden="true">
                        <img src="" className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title placeholder-glow">
                                <span className="placeholder col-6"></span>
                            </h5>
                            <p className="card-text placeholder-glow">
                                <span className="placeholder col-7"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-4"></span>
                                <span className="placeholder col-6"></span>
                                <span className="placeholder col-8"></span>
                            </p>

                        </div>
                    </div></div>
            </div>

        </div>
    }
    return (
        <div className="my-5 mx-5">
            <h3 className="text-center fs-2 w-100 mt-5">Our Latest Services</h3>

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    services.map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;
