import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from "./Components/Footer";
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Team from './Components/Team';
import JoinUs from './Components/JoinUs';
import Accelerators from './Components/Accelerators';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/accelerators" element={<Accelerators />} />
      </Routes>
      <Footer/>
   </Router>
  );
};

export default App
