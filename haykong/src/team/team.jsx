import React from 'react';
import './team.css';

import ika from '../assets/ika.jpg';
import tigran from '../assets/tigran.jpg';
import artyom from '../assets/artyom.jpg';


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
    { name: 'Mikayel', surname: 'Minasyan', image: '/', role: 'President' },
    { name: 'Seda', surname: 'Vardazaryan', image: '/', role: 'Director' }
  ];

  const professors = [
    { name: 'Arman', surname: 'Khalatyan', image: '/', role: 'AI' },
    { name: 'Sargis', surname: 'Grigoryan', image: '/', role: 'AI' },
    { name: 'Tigran', surname: 'Gharagulyan', image: tigran, role: 'QA' },
    { name: 'Vahe', surname: 'Khazaryan', image: '/', role: 'Web' },
    { name: 'Narine', surname: 'Kosyan', image: '/', role: 'Web' },
    { name: 'Garik', surname: 'Galstyan', image: '/', role: 'Devops' },
    { name: 'Hexine', surname: 'Kharazyan', image: '/', role: 'English' },
    { name: 'Aharon', surname: 'Hayrapetyan', image: '/', role: 'Maths' },
  ];

  const aiStudents = [
    { name: 'David', surname: 'Petrosyan', image: '/' },
    { name: 'Nare', surname: 'Shaqaryan', image: '/' },
    { name: 'Mane', surname: 'Khanazaryan', image: '/' },
    { name: 'Irina', surname: 'Vardanyan', image: ika },
    { name: 'Vahe', surname: 'Ayvazyan', image: '/' },
  ];

  const webStudents = [
    { name: 'Inessa', surname: 'Alexanyan', image: '/' },
    { name: 'Oksana', surname: 'Aghabekyan', image: '/' },
    { name: 'Gayane', surname: 'Matevosyan', image: '/' },
    { name: 'Irina', surname: 'Harutyunyan', image: '/' },
    { name: 'Artyom', surname: 'Manasyan', image: artyom },
  ];

  const devopsStudents = [
    { name: 'Nerses', surname: 'Mezhlumyan', image: '/' },
    { name: 'Aren', surname: 'Movsesyan', image: '/' },
  ];

  const qaStudents = [
    { name: 'Arayik', surname: 'Avanesyan', image: '/' },
    { name: 'Arman', surname: 'Avagimyan', image: '/' },
    { name: 'Oksana', surname: 'Aghabekyan', image: '/' },
    { name: 'Irina', surname: 'Vardanyan', image: '/' },
    { name: 'Mane', surname: 'Khanazaryan', image: '/' },
    { name: 'Aren', surname: 'Movsesyan', image: '/' },
    { name: 'Anush', surname: 'Sargsyan', image: '/' },
    { name: 'Nerses', surname: 'Mezhlumyan', image: '/' },
    { name: 'Andranik', surname: 'Simonyan', image: '/' },
    { name: 'Artyom', surname: 'Manasyan', image: '/' },
  ];

  return (
    <div className="teamPageWrapper">
      <h1>Our Team</h1>

      <h2>President & Director</h2>
      <div>
        {leaders.map((person, index) => (
          <TeamCard key={index} {...person} />
        ))}
      </div>

      <h2>Teachers</h2>
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
