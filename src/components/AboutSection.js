import React from "react";
import home1 from '../img/home1.png'
//Style
import styled from 'styled-components';

const AboutSection = () =>{
    return(
        <About>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>
                            you <span>dreams</span> come
                        </h2>
                    </Hide>
                    <Hide>
                        <h2>true.</h2>
                    </Hide>
                    <p>
                        Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
                    </p>
                    <button>Contact Us</button>
                </div>
                <Image>
                    <img src={home1} alt="Jose with his Camera" />
                </Image>
            </Description>
        </About>
    )
}

// Styled Component
const About = styled.div`
    min-height: 90vh;
    display: flex;
    align-items: center;
    justify-content: space-space-evenly;
    padding: 5rem;
    color: white;
`;
const Description = styled.div`
    display: flex;

    flex: 1;
    padding-right: 5rem;
    h2{
        font-weight: lighter;
    }
`;
const Image = styled.div`
    overflow: hidden;
    width: 50%;
    padding-left: 4rem;
    img{
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`;
const Hide = styled.div`
    overflow: hidden;
`;

export default AboutSection;