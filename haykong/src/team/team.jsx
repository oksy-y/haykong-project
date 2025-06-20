import React from 'react';
import './team.css';

import ika from '../assets/ika.jpg';
import artyom from '../assets/artyom.jpg';
import inessa from '../assets/inessa.jpg';
import mane from '../assets/mane.jpg';
import anush from '../assets/anush.jpg';
import arman from '../assets/arman.jpg';
import nare from '../assets/nare.jpg';
import irina from '../assets/irina.jpg';
import oksana from '../assets/oksana.jpg';
import gayane from '../assets/gayane.jpg';
import armanKH from '../assets/armanKH.jpg';
import hexine from '../assets/hexine.jpg';
import miqael from '../assets/miqael.jpg';
import narine from '../assets/narine.png';
import sargis from '../assets/sargis.jpg';
import seda from '../assets/seda.jpg';
import tigran from '../assets/tigran.jpg';
import vaheAI from '../assets/vaheAI.jpg';
import vahe from '../assets/vahe.jpg';
import david from '../assets/david.jpg';
import aharon from '../assets/aharon.jpg';
import garik from '../assets/garik.jpg';
import arayik from '../assets/arayik.jpg';
import aren from '../assets/aren.jpg';


const Team = () => {
  const TeamCard = ({ name, surname, image, role }) => {
    return (
      <div>
        <img src={image} alt={`${name} ${surname}`} />
        {role && <p>{role}</p>}
        <p>{name} {surname}</p>
      </div>
    );
  };

  const leaders = [
    { name: 'Mikayel', surname: 'Minasyan', image: miqael, role: 'Founder' },
    { name: 'Seda', surname: 'Vardazaryan', image: seda, role: 'CEO' }
  ];

  const professors = [
    { name: 'Arman', surname: 'Khalatyan', image: armanKH, role: 'AI' },
    { name: 'Sargis', surname: 'Grigoryan', image: sargis, role: 'AI' },
    { name: 'Tigran', surname: 'Gharagulyan', image: tigran, role: 'QA' },
    { name: 'Vahe', surname: 'Khazaryan', image: vahe, role: 'Web' },
    { name: 'Narine', surname: 'Kosyan', image: narine, role: 'Web' },
    { name: 'Garik', surname: 'Galstyan', image: garik, role: 'Devops' },
    { name: 'Hexine', surname: 'Kharazyan', image: hexine, role: 'English' },
    { name: 'Aharon', surname: 'Hayrapetyan', image: aharon, role: 'Maths' },
  ];

  const aiStudents = [
    { name: 'David', surname: 'Petrosyan', image: david },
    { name: 'Nare', surname: 'Shaqaryan', image: nare },
    { name: 'Mane', surname: 'Khanazaryan', image: mane },
    { name: 'Irina', surname: 'Vardanyan', image: ika },
    { name: 'Vahe', surname: 'Ayvazyan', image: vaheAI },
  ];

  const webStudents = [
    { name: 'Oksana', surname: 'Aghabekyan', image: oksana },
    { name: 'Inessa', surname: 'Alexanyan', image: inessa },
    { name: 'Gayane', surname: 'Matevosyan', image: gayane },
    { name: 'Irina', surname: 'Harutyunyan', image: irina },
    { name: 'Artyom', surname: 'Manasyan', image: artyom },
  ];

  const devopsStudents = [
    { name: 'Nerses', surname: 'Mezhlumyan', image: '/' },
    { name: 'Aren', surname: 'Movsesyan', image: aren },
  ];

  const qaStudents = [
    { name: 'Arayik', surname: 'Avanesyan', image: arayik },
    { name: 'Arman', surname: 'Avagimyan', image: arman },
    { name: 'Oksana', surname: 'Aghabekyan', image: oksana },
    { name: 'Irina', surname: 'Vardanyan', image: ika },
    { name: 'Mane', surname: 'Khanazaryan', image: mane },
    { name: 'Aren', surname: 'Movsesyan', image: aren },
    { name: 'Anush', surname: 'Sargsyan', image: anush },
    { name: 'Nerses', surname: 'Mezhlumyan', image: '/' },
    { name: 'Andranik', surname: 'Simonyan', image: '/' },
    { name: 'Artyom', surname: 'Manasyan', image: artyom },
  ];

  return (
    <div className="teamPageWrapper">
      <h1>Our Team</h1>

      <h2>Founder & CEO</h2>
      <div>
        {leaders.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>

      <h2>Lecturers</h2>
      <div>
        {professors.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>

      <h2>Students – Artificial Intelligence</h2>
      <div>
        {aiStudents.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>

      <h2>Students – Web Development</h2>
      <div>
        {webStudents.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>

      <h2>Students – DevOps</h2>
      <div>
        {devopsStudents.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>

      <h2>Students – QA</h2>
      <div>
        {qaStudents.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>
    </div>
  );
};

export default Team;
