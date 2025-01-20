import Contact from './sections/Contact';
import React, { useState, useEffect } from 'react';
import Mainlogo from '../assets/realm.svg';
import AboutUs from './sections/AboutUs';
import Domains from './sections/Domains';
import Wave from './Waves';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [lockScroll, setLockScroll] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (lockScroll) {
        window.scrollTo({ top: Math.min(window.scrollY, 900) });
      }
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lockScroll]);

  useEffect(() => {
    if (scrollY >= 500) {
      setLockScroll(false);
    }
  }, [scrollY]);

  const animationProgress = Math.min(scrollY / 700, 1);

  return (
    <>
      <div className="bg-[#141930] overflow-hidden relative z-30">
        <div className="sticky top-0 h-screen flex flex-col  items-center  ">
          <div
            className="absolute top-[36%] sm:top-[35%] md:top-[40%] lg:top-[10%] left-1/2 transform -translate-x-1/2"
            style={{
              transform: `translate(-50%, ${350 - animationProgress * 500}px)`,
              zIndex: animationProgress < 3 ? 6 : 9,
            }}
          >
            <img
              src={Mainlogo}
              alt="Main Logo"
              className="h-[150px] w-[150px] sm:h-[250px] sm:w-[250px] md:h-[350px] md:w-[350px] lg:h-[451px] lg:w-[460px]"
            />
          </div>
          <div className="absolute top-[230px] sm:top-[150px] md:top-[210px] left-1/2 transform -translate-x-1/2 z-30 flex justify-center items-center">
            <span className="text-[#FBE7CF] font-poppins text-[98px] sm:text-[72px] md:text-[96px] lg:text-[128px] font-semibold tracking-widest text-stroke-md text-stroke-black">
              realm
            </span>
            
          </div>
          
        </div>
        <Wave/>
      </div>
      <AboutUs />
      <Domains />
      <Contact />
    </>
  );
};

export default Home;
