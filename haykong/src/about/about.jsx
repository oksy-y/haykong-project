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
            The goal of the HEMA NGO is to bring people together in Germany, Europe, Armenia and the Nagorno-Karabakh region, as well as in the Armenian Diaspora, by promoting mutual understanding between different cultures. </h2>
          <p className="about-text">
            In the context of the above, the HEMA NGO pursues an intermediate goal of recruiting specialists from various fields in Germany, other European countries, the Republic of Armenia and the Nagorno-Karabakh Republic, combining their knowledge and abilities, as well as creating a platform for communication between them for the effective use of professional potential, contributing to the development of both Armenia and Nagorno-Karabakh, as well as the preservation of Armenian identity in the European-Armenian Diaspora. This unification of specialists results in interdisciplinary programs that can be implemented both in the Republic of Armenia and the Nagorno-Karabakh Republic, as well as in European-Armenian communities. The above-mentioned interdisciplinary connection increases the quality of cooperation between specialists and multiplies the effective use of existing potential. At the same time, it provides everyone with the opportunity to invest their own abilities and knowledge as much as possible in the development of culture, education, science, economy and society in general, and to build a programmatic bridge between Germany, other European countries, the Republic of Armenia and Nagorno-Karabakh.          </p>
          <a href="https://aeae.eu/hy/ankuendigung/702" className="about-link">See more</a>
        </div>
      </div>
    </div>
  );
};

export default About;