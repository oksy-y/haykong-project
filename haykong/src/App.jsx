import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/homepage";
// import About from './pages/about';
// import OurProducts from './pages/ourProducts';
// import EachProduct from './pages/eachProduct';
// import News from './pages/news';
import Teams from './pages/team';

function App() {
  return (
    <Router>
      <div className="appBackground">
        <div className="pageContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/OurProducts" element={<OurProducts />} /> */}
            {/* <Route path="/product/:id" element={<EachProduct />} /> */}
            <Route path="/team" element={<Teams />} />
            {/* <Route path="/News" element={<News />} /> */}
            {/* <Route path="/About" element={<About />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
