import React, { useEffect } from 'react';
import homeMaintain from '../../../images/home.png'
import garden from '../../../images/mower.png'
import waterDrop from '../../../images/faucet.png'
import './serviceCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


const ServiceCard = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <>
            <div className="container mx-auto">
                <div className="row my-5">
                    <div data-aos="flip-right" variant="outlined" className="col-lg-4 col-md-4 col-sm-12 px-4 my-3">
                        <div className='serviceCard1'>
                            <img src={homeMaintain} className='w-25' alt="" />
                            <h3>ʜᴏᴍᴇ ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ</h3>
                            <p>We have experience in home maintenance any surface from new construct.</p>
                        </div>
                    </div>
                    <div data-aos="flip-down" className="col-lg-4 col-md-4 col-sm-12 px-4 my-3">
                        <div className="serviceCard2">
                            <img src={garden} className='w-25' alt="" />
                            <h3>🇬‌🇦‌🇷‌🇩‌🇪‌🇳‌ 🇸‌🇪‌🇷‌🇻‌🇮‌🇨‌🇪‌🇸‌</h3>
                            <p>We have experience in home maintenance any surface from new construct.</p>
                        </div>
                    </div>
                    <div data-aos="flip-right" className="col-lg-4 col-md-4 col-sm-12 px-4 my-3">
                        <div className="serviceCard3">
                            <img src={waterDrop} className='w-25' alt="" />
                            <h3>🇵‌🇱‌🇺‌🇲‌🇧‌🇮‌🇳‌🇬‌ 🇸‌🇪‌🇷‌🇻‌🇮‌🇨‌🇪‌🇸‌</h3>
                            <p>We have experience in home maintenance any surface from new construct.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;