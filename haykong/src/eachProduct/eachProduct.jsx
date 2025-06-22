import React from 'react';
import { useParams } from 'react-router-dom';
import './eachProduct.css';
import first from '../assets/product1.jpg';
import second from '../assets/mane.jpg';
import third from '../assets/ika.jpg';

const images = {
  "Car Line Follower": first,
  "two": second,
  "three": third,
};

const descriptions = {
  "Car Line Follower": "This project involves the development of a robot car that can recognize and follow a line using a machine learning model. The objective is to enable the robot to detect a path on the ground and make appropriate movement decisions in real time. The system is based on five movement classes: go Left, Go Right, Go Forward, Stop and Srot (stop and rotate in place). Training data was collected through the robot's camera while the car was manually guided along the path. Each frame was labeled with the corresponding action class. The collected images were preprocessed by converting them to grayscale and resizing them to prepare the data for model training. Afterward, the dataset was split into training and testing sets. The model was trained and evaluated, achieving an accuracy of 97%, indicating reliable performance in classifying movement directions. This project showcases the use of computer vision and machine learning to enable a robot car to follow a line autonomously and make movement decisions in real time.",
  "two": "asgfres",
  "three": "sergserg",
};

const EachProduct = () => {
  const { id } = useParams();
  const image = images[id];
  const desc = descriptions[id];

  if (!image || !desc) {
    return (
      <div className="eachProductWrapper">
        <h2>Product not found</h2>
      </div>
    );
  }

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
