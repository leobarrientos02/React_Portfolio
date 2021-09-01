import React from "react";
import home1 from '../img/home1.png'

const AboutSection = () =>{
    return(
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>
                            you <span>dreams</span> come
                        </h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                    <p>
                        Contact us for any photography or videography ides that you have. We have profesional photographers with amazing skills.
                    </p>
                    <button>Contact Us</button>
                </div>
                <div className="image">
                    <img src={home1} alt="Jose with his Camera" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection;