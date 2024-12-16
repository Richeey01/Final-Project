import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Teachers from './Pages/Teachers/Teachers';
import Rules from './Pages/Rules/Rules';
import Rules2 from './Pages/Rules/Rules2';
import Undefined from './Pages/Undefined/Undefined';


function App() {
  return (
    <Router>
      <Header />
     
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/rules2" element={<Rules2/>} />
        <Route path="/*" element={<Undefined/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
