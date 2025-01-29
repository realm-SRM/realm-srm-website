import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar';
import Footer from './Components/footer';
import Home from './Components/Home';
import OurClub from './Components/OurClub';
import Events from './Components/Events';
import Team from './Components/Team';
import JoinUs from './Components/JoinUs';
import Accelerators from './Components/Accelerators';
import TermsConditions from './Components/TermsConditions';

const App = () => {
  return (
   <Router>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ourclub" element={<OurClub />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<Team />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/accelerators" element={<Accelerators />} />
        <Route path="/TermsConditions" element={< TermsConditions />} />
      </Routes>
      <Footer/> 
   </Router>
  );
};

export default App
