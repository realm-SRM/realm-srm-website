import React from 'react';
import Mountain from '../assets/Group 23.png';

const Team = () => {
  return (
    <div className="relative w-full h-screen bg-[#141930] flex justify-center items-center text-center">
      {/* Background Mountain Image */}
      <img
        src={Mountain}
        alt="Mountain Background"
        className="absolute bottom-0 left-0 w-full h-1/2 object-cover z-0"
      />

      {/* Text Content */}
      <div className="z-10 mt-[-300px] text-[#FFDCC1]">
        <h1 className="text-[120px] font-bold tracking-wider">MEET OUR TEAM</h1>
        <p className="text-[54px] opacity-[70%] font-bold tracking-wide">slogan</p>
        <div className="w-[280px] h-px bg-white mt-[-30px] ml-[160px]"></div> 
        <div className="w-[280px] h-px bg-white mt-[-3px] ml-[610px] "></div> 
      </div>
    </div>
  );
};

export default Team;
