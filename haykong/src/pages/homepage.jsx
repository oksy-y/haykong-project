import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import GeneralPage from '../homepage/homepage';

const Home = () => {
  return (
    <>
      <Navbar />
      <GeneralPage />
      <Footer/>
    </>
  );
};

export default Home;