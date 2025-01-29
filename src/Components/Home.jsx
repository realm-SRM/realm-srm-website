import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Mainlogo from '../assets/realm.svg';
import AboutUs from './sections/AboutUs';
import Domains from './sections/Domains';
import Wave from './Waves';
import Contact from './sections/Contact';

const Home = () => {
  const [lockScroll, setLockScroll] = useState(true);

  useEffect(() => {
    // Lock scroll while the animation is running
    if (lockScroll) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [lockScroll]);

  return (
    <>

      <div className="bg-[#141930] overflow-hidden relative z-30">
        <div className="sticky top-0 h-screen flex flex-col items-center justify-center">
        
          <motion.div
            className="absolute flex items-center justify-center"
            initial={{ y: 500 }} 
            animate={{ y: 0, x:-5 }}  
            transition={{ duration: 2, ease: 'easeOut' }} 
            onAnimationComplete={() => setLockScroll(false)} 
            style={{
              width: '450px',
              height: '450px',
              zIndex: 6,
            }}
          >
            <img
              src={Mainlogo}
              alt="Main Logo"
              className="h-full w-full"
            />
          </motion.div>

          <motion.div
            className="absolute flex items-center justify-center z-30"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 2, delay: 1 }} 
            style={{
              color: '#FBE7CF', 
              fontFamily: 'Poppins, sans-serif', 
              fontWeight: '450', 
              letterSpacing: '0.1em', 
              WebkitTextStroke: '2px black', 
              fontSize: '132px', 
            }}
          >
            <span className="font-poppins tracking-widest">realm</span>
          </motion.div>
        </div>

        <Wave />
      </div>

      <AboutUs />
      <Domains />
      <Contact />
    </>
  );
};

export default Home;

