import React from 'react';
import './homepage.css';
import bgImage from '../assets/gpt.jpg';
// import bgImage from '../assets/gptt.jpg';

const GeneralPage = () => {
  return (
    <div className="imageTextWrapper">
      <img src={bgImage} alt="AI background" className="naturalBgImage" />

      <div className="overlayText">
        <h1>Welcome to our website!</h1>
        <h2>Here you can find the results of the 2024–2025 IT course program. <br /><br />
        Information technology training courses for wounded and disabled soldiers, volunteers, as well as forcibly displaced persons from Artsakh</h2>
        <p>
          <b>The goal of the project :</b> <br />
          Considering the difficult social situation resulting from the 44-day war and the forced displacement of our compatriots from Artsakh, which still poses problems today in education, general development, and the elimination of the consequences of the war, we decided to relaunch the above-mentioned program in order to confront the difficult challenges created in the country. In order to increase the educational level of wounded or disabled soldiers and our compatriots forcibly displaced from Artsakh and to support them in finding high-paying jobs, the following educational events were held:
        </p>
      </div>
    </div>
  );
};

export default GeneralPage;
