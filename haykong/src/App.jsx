import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import Home from "./pages/homepage";
// import About from './pages/about';
import OurProducts from './pages/ourProducts';
import EachProductPage from './pages/eachProduct';
// import News from './pages/news';
import Teams from './pages/team';

function App() {
  return (
    <Router>
      <div className="appBackground">
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Navigate to="/general" replace />} />
            <Route path="/general" element={<Home />} />
            <Route path="/our-products" element={<OurProducts />} />
            <Route path="/product/:id" element={<EachProductPage />} />
            <Route path="/team" element={<Teams />} />
            {/* <Route path="/news" element={<News />} /> */}
            {/* <Route path="/about" element={<About />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
