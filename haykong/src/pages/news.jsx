import React from 'react';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import NewsPage from '../news/news';

const News = () => {
  return (
    <>
      <Navbar />
      <NewsPage />
      <Footer/>
    </>
  );
};

export default News;