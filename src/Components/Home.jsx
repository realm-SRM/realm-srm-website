import React, { useState, useEffect } from 'react';
import Mainlogo from '../assets/realm.svg';
import Waves from '../assets/Group 7.png';

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

  const animationProgress = Math.min(scrollY / 300, 1); 

  return (
    <>
    <div className=" bg-[#1E1F36] overflow-hidden relative">
     
      <div className="sticky top-0 h-screen flex flex-col justify-end items-center">
        
        <img
          src={Waves}
          alt="Waves Illustration"
          className="absolute bottom-[-77px] w-full z-20"
        />

       
        <div
          className="absolute top-[15%] transform -translate-x-1/2 left-1/2"
          style={{
            transform: `translate(-50%, ${250 - animationProgress * 500}px)`, 
            zIndex: animationProgress < 2 ? 6 : 9, 
          }}
        >
          <img
            src={Mainlogo}
            alt="Background Circle"
            className="h-[451px] w-[460px]"
          />
        </div>
        <div className="absolute top-[170px] ml-[30px] z-30 flex justify-center items-center">
          <span className="text-[#FBE7CF] font-poppins text-[168px] font-semibold tracking-widest text-stroke-md text-stroke-black">
            realm
          </span>
        </div>
      </div>

      
    </div>
    
    </>
  );
};

export default Home;
