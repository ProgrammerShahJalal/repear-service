import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Service from '../../Service/Service';


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
                <div className="col-md-4"><div class="card" aria-hidden="true">
                    <img src="" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>
                    </div>
                </div>
                    <div class="card" aria-hidden="true">
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>

                        </div>
                    </div>
                    <div class="card" aria-hidden="true">
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>

                        </div>
                    </div></div>
                <div className="col-md-4"><div class="card" aria-hidden="true">
                    <img src="" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>

                    </div>
                </div>
                    <div class="card" aria-hidden="true">
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>

                        </div>
                    </div>
                    <div class="card" aria-hidden="true">
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>

                        </div>
                    </div></div>
                <div className="col-md-4"><div class="card" aria-hidden="true">
                    <img src="" class="card-img-top" alt="" />
                    <div class="card-body">
                        <h5 class="card-title placeholder-glow">
                            <span class="placeholder col-6"></span>
                        </h5>
                        <p class="card-text placeholder-glow">
                            <span class="placeholder col-7"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-4"></span>
                            <span class="placeholder col-6"></span>
                            <span class="placeholder col-8"></span>
                        </p>

                    </div>
                </div>
                    <div class="card" aria-hidden="true">
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
                            </p>

                        </div>
                    </div>
                    <div class="card" aria-hidden="true">
                        <img src="" class="card-img-top" alt="" />
                        <div class="card-body">
                            <h5 class="card-title placeholder-glow">
                                <span class="placeholder col-6"></span>
                            </h5>
                            <p class="card-text placeholder-glow">
                                <span class="placeholder col-7"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-4"></span>
                                <span class="placeholder col-6"></span>
                                <span class="placeholder col-8"></span>
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
                    services.slice(0, 6).map(service => <Service key={service._id} service={service}></Service>)
                }

            </div>

        </div>
    );
};

export default Services;
