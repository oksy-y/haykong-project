import React from 'react';
import './homepage.css';
// import bgImage from '../assets/gpt.jpg';
import bgImage from '../assets/gptt.jpg';

const GeneralPage = () => {
  return (
    <div className="imageTextWrapper">
      <img src={bgImage} alt="AI background" className="naturalBgImage" />

      <div className="overlayText">
        <h1>Empowering the Future with AI</h1>
        <h2>Smart. Fast. Limitless.</h2>
        <p>
          Welcome to the forefront of innovation. Our solutions combine the power of Artificial Intelligence and
          technology to accelerate your growth and transform how you work. Dive into a smarter world, where your data
          works for you.
        </p>
      </div>
    </div>
  );
};

export default GeneralPage;
