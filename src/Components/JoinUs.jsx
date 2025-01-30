import React, { useState } from "react";
import Logo from "../assets/image.png"
import Down from '../assets/idfrontdown.png'
import Up from "../assets/idfrontup.png"
import Chip from '../assets/Chip.png'
import QR from '../assets/TestQR.jpg'
import ReactCardFlip from 'react-card-flip';
const JoinUs = () => {
  const[isFlipped, setIsFlipped] = useState(false);

  function flipCard(){
    setIsFlipped(!isFlipped);
  }
  return (
    <div className="flex items-center justify-center h-screen bg-[#2E3967]">
      <ReactCardFlip flipDirection='horizontal' isFlipped={isFlipped}>
    <div >
      <div className="relative w-[300px] h-[500px] bg-[#141930] rounded-xl overflow-hidden border-2 border-[#F99D93] shadow-lg" onClick={flipCard}>
        <div className="absolute top-0 left-0 w-full h-20 ">
          <img src={Up} alt="" />
        </div>
        <div className="absolute top-6 flex justify-center text-white">
          <div className="w-[72px] rounded-full">
            <img className="items-center flex ml-[110px] " src={Logo} alt="LOGO" />
          </div>
          <h2 className="text-[30px] font-semibold mt-[10px] ml-[110px] text-[#FFDCC1]">Realm </h2>
          <h2 className="text-[30px] font-semibold mt-[40px] ml-[-75px] text-[#FFDCC1]">SRM</h2>
        </div>
        <div className="absolute top-[180px]  text-[#FFDCC1] w-full">
          <p className="text-md font-bold text-center mt-[30px]">RA23 XXXXXXXXXXXX</p>
          <p className="text-[20px] mt-[35px] ml-[40px]">Y / F</p>
          <p className="text-xs text-[#FFDCC1] ml-[20px]">Year / Gender</p>
          <p className="mt-[26px] text-md font-bold text-center">Name of the CardHolder</p>
        </div>
        <div className="absolute right-2 top-[62%] text-[12px] text-[#FFDCC1] font-bold rotate-90 origin-right">
          Confidential! Don’t tap to flip!
        </div>
        <div className="absolute bottom-0 left-0 w-full h-18 ">
          <img src={Down} alt="" />
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-8"> <img src={Chip} alt="" /></div>
      </div>
    </div>
    {/* Backside ka Code */}
    <div>
    <div >
      <div className="relative w-[300px] h-[500px] rounded-xl overflow-hidden bg-[#141930] border-2 border-[#F99D93] shadow-lg" onClick={flipCard}>
        <div className="absolute top-0 left-0 w-full h-20 ">
          <img src={Up} alt="" />
        </div>
        <div className="absolute top-6 flex justify-center text-white">
          <div className="w-[72px] rounded-full">
            <img className="items-center flex ml-[110px] " src={Logo} alt="LOGO" />
          </div>
          <h2 className="text-[30px] font-semibold mt-[10px] ml-[110px] text-[#FFDCC1]">Realm </h2>
          <h2 className="text-[30px] font-semibold mt-[40px] ml-[-75px] text-[#FFDCC1]">SRM</h2>
        </div>
        <div className="absolute left-[12px] top-20 text-[12px] text-[#FFDCC1] rotate-90 origin-left">
          For any queries, contact 234567898 Realm SRM
        </div>
        <div className="absolute top-[150px]  text-[#FFDCC1] w-full">
          <p className="text-md font-bold text-center ">900X0X0000</p>
          <p className=" text-md font-bold text-center">XYZ@gmail.com</p>
        </div>

        <div className="flex mt-[300px] justify-center">
          <h2 className="mt-[-50px] text-[#FFDCC1] font-bold">Scan To Pay</h2>
          <img className="w-[100px] ml-[-100px]" src={QR} alt="" />
        </div>
        <div className="absolute bottom-4 ml-[38px]  text-[11px] text-[#FFDCC1] text-center">
          “Good luck! Hoping to see you in our club”
        </div>
      </div>
    </div>
      
    </div>
    </ReactCardFlip>
    </div>
  );
};

export default JoinUs;
