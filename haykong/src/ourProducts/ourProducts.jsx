import React from 'react';
import './ourProducts.css';
import { Link } from 'react-router-dom';
import first from '../assets/product1.jpg';
import second from '../assets/product2.jpg';
import third from '../assets/product3.jpg';

const Card = ({ image, name, desc, id, customClass }) => {
  return (
    <Link to={`/product/${id}`} className={`teamCard ${customClass || ''}`} style={{ textDecoration: 'none' }}>
      <img src={image} alt={`${name}`} />
      <p>{name}</p>
      <p>{desc}</p>
    </Link>
  );
};

const Products = () => {
  return (
    <div className="teamPageWrapper">
      <h1>Our products</h1>
      <div className="teamGrid">
        <Card image={first} name="Car Line Follower" desc="Irina Vardanyan" id="Car Line Follower" />
        <Card image={''} name="two" desc="asgfres" id="two" />
        <Card image={''} name="three" desc="sergserg" id="three" customClass="centeredCard" />
      </div>
    </div>
  );
};

export default Products;
