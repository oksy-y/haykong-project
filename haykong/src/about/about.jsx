import React from 'react';
import './about.css';
import img1 from '../assets/1pic.jpg';
import img2 from '../assets/2pic.jpg';
import img3 from '../assets/3pic.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-main-content">
        <div className="about-image-column">
          <img src={img1} className="about-image" />
          <img src={img2} className="about-image" />
          <img src={img3} className="about-image" />
        </div>

        <div className="about-text-block">
          <h2 className="about-title">
            Information Technology Training Courses for Injured and Disabled Soldiers, Volunteers, and Also for Those Forcibly Displaced from Artsakh
          </h2>
          <p className="about-text">
            The program is aimed at the social reintegration and professional development...
          </p>
          <a href="https://aeae.eu/hy/ankuendigung/702" className="about-link">See more</a>
        </div>
      </div>
    </div>
  );
};

export default About;