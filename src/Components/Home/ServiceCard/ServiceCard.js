import React from 'react';
import homeMaintain from '../../../images/home.png'
import garden from '../../../images/mower.png'
import waterDrop from '../../../images/faucet.png'
import './serviceCard.css'
const ServiceCard = () => {
    return (
        <>
            <div className="container mx-auto">
                <div className="row my-5">
                    <div className="col-lg-4 col-md-4 col-sm-12 px-4 my-3">
                        <div className='serviceCard'>
                        <img src={homeMaintain} className='w-25' alt="" />
                        <h3>ʜᴏᴍᴇ ᴍᴀɪɴᴛᴇɴᴀɴᴄᴇ</h3>
                        <p>We have experience in home maintenance any surface from new construct.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 px-4 my-3">
                        <div className="serviceCard">
                        <img src={garden} className='w-25' alt="" />
                        <h3>🇬‌🇦‌🇷‌🇩‌🇪‌🇳‌ 🇸‌🇪‌🇷‌🇻‌🇮‌🇨‌🇪‌🇸‌</h3>
                        <p>We have experience in home maintenance any surface from new construct.</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 px-4 my-3">
                        <div className="serviceCard">
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