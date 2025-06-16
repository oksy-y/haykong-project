import React from 'react';
import { useParams } from 'react-router-dom';
import './eachProduct.css';
import first from '../assets/oksana.jpg';
import second from '../assets/mane.jpg';
import third from '../assets/ika.jpg';

const images = {
  one: first,
  two: second,
  three: third,
};

const descriptions = {
  one: 'sdfgse',
  two: 'asgfres',
  three: 'sergserg',
};

const EachProduct = () => {
  const { id } = useParams();
  const image = images[id];
  const desc = descriptions[id];

  return (
    <div className="eachProductWrapper">
      <div className="eachProductCard">
        <img src={image} alt={id} />
        <div className="eachProductContent">
          <h1>{id}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
