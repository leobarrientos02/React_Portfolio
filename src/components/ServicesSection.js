import React from "react";
// Import Icons
import clock from '../img/clock.svg';
import diaphragm from '../img/diaphragm.svg';
import money from '../img/money.svg';
import teamwork from '../img/teamwork.svg';
import home2 from '../img/home2.png';

const ServicesSection = () =>{
    return(
        <div className="services">
            <div className="description">
                <h2 className="title">
                    High <span>quality</span> services. 
                </h2>
                <div className="cards">
                    <div className="card1">
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>We have workers all over the world, allowing us to get work done 24/7.</p>
                    </div>
                    <div className="card2">
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Team Work</h3>
                        </div>
                        <p>We have workers all over the world, allowing us to get work done 24/7.</p>
                    </div>
                    <div className="card3">
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>We have workers all over the world, allowing us to get work done 24/7.</p>
                    </div>
                    <div className="card4">
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>We have workers all over the world, allowing us to get work done 24/7.</p>
                    </div>
                </div>
                <div className="image">
                    <img src={home2} alt="home" />
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;