import React from 'react';
import { useParams } from 'react-router-dom';
import './eachProduct.css';
import first from '../assets/product1.jpg';
import second from '../assets/product2.jpg';
import third from '../assets/ika.jpg';

const images = {
  "Car Line Follower": first,
  "Car Plate Detection": second,
  "AI Agent Assistant Using Flowise": third,
};

const descriptions = {
  "Car Line Follower": "This project involves the development of a robot car that can recognize and follow a line using a machine learning model. The objective is to enable the robot to detect a path on the ground and make appropriate movement decisions in real time. The system is based on five movement classes: go Left, Go Right, Go Forward, Stop and Srot (stop and rotate in place). Training data was collected through the robot's camera while the car was manually guided along the path. Each frame was labeled with the corresponding action class. The collected images were preprocessed by converting them to grayscale and resizing them to prepare the data for model training. Afterward, the dataset was split into training and testing sets. The model was trained and evaluated, achieving an accuracy of 97%, indicating reliable performance in classifying movement directions. This project showcases the use of computer vision and machine learning to enable a robot car to follow a line autonomously and make movement decisions in real time.",
  "Car Plate Detection": "This project implements a real-time car license plate detection and recognition system specifically designed for Armenian plates, using machine learning deployed on a Raspberry Pi 5 with Micro ROS. The system connects directly to a live camera feed, capturing video frames continuously to detect and read license plates of passing vehicles on the spot. The dataset was compiled by collecting thousands of images of Armenian car plates under various lighting, angles, and weather conditions to ensure robustness. The raw images were then annotated to mark the exact location of the plates and corresponding plate numbers. These annotations were processed and converted into a format compatible with the training framework, including bounding boxes for detection and text labels for recognition. The project employs a two-stage approach. First, a detection model architecture was trained to accurately locate car plates in the input images. Once a plate is detected, a recognition model extracts the characters from the plate area, converting the visual data into readable text. Both models were trained using TensorFlow with transfer learning to improve accuracy and reduce training time.  The Raspberry Pi 5 runs Micro ROS to efficiently manage real-time communication between the camera sensor and the processing units. The camera streams live video frames, which are passed to the detection model running locally on the device. When a plate is detected, the system crops the plate region and sends it to the recognition model. The output is the plate number in text form, which can be used for further processing or logging.",
  "AI Agent Assistant Using Flowise": "This project develops an intelligent AI agent that answers domain-specific questions using Retrieval-Augmented Generation (RAG). Built with Flowise—a low-code platform for LLM applications—the agent combines a pre-trained language model with a document retriever linked to a vector database. Domain-specific documents were collected, cleaned, embedded, and stored for efficient retrieval. When a user asks a question, the agent uses semantic search to retrieve relevant document chunks, combines them with the query, and generates a context-aware response. The system showcases the practical use of LLMs, RAG architecture, and Flowise’s visual tools to create a scalable, knowledge-based AI assistant with minimal coding.",
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
