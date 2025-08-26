import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//import { FaHome, FaUserFriends, FaComments, FaVideo, FaPhone, FaCalendarAlt, FaBell, FaCog, FaInfoCircle, FaEnvelope } from "react-icons/fa";
//import { motion } from "framer-motion";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Navbar from "./components/Navbar.jsx";
import Family from "./components/Family.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'
//import Sidebar from "./components/Sidebar";
//import Slideshow from "./components/Slideshow";

function App() {
  return (
    <>
    <Router>
      <div className="Homepage">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Family" element={<Family />} />

        </Routes>
        <Home/>
        
      </div>
      <Footer />
    </Router>
    
    </>
  );
}

export default App;
