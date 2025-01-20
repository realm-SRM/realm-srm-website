import React from "react";
import Mountain from "../assets/Group 23.png";

const Team = () => {
  return (
    <div className="relative w-full h-screen bg-[#141930] flex justify-center items-center text-center">
      <img
        src={Mountain}
        alt="Mountain Background"
        className="absolute bottom-0 left-0 w-full h-1/2 object-cover z-0"
      />
      <div className="z-10 mt-[-150px] md:mt-[-200px] lg:mt-[-300px] text-[#FFDCC1] px-4">
        <h1 className="text-[40px] sm:text-[60px] md:text-[80px] lg:text-[120px] font-bold tracking-wider">
          MEET OUR TEAM
        </h1>
        <p className="text-[16px] sm:text-[24px] md:text-[36px] lg:text-[54px] opacity-70 font-bold tracking-wide">
          slogan
        </p>
        
        <div className="hidden sm:block w-[200px] sm:w-[250px] md:w-[280px] h-px bg-white mt-[-30px] ml-[50px] sm:ml-[120px] md:ml-[160px] lg:ml-[150px]"></div>
        
        <div className="hidden sm:block w-[200px] sm:w-[250px] md:w-[280px] h-px bg-white mt-[-3px] ml-auto mr-[50px] sm:mr-[120px] md:mr-[160px] lg:mr-[150px]"></div>
      </div>
    </div>
  );
};

export default Team;
